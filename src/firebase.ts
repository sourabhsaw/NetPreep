import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  serverTimestamp,
  getDocs,
  Timestamp
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { SubmittedTestRecord, StudentProfile } from './types';

// Initialize Firebase App instance
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore with custom database ID
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Ensure anonymous authentication for frictionless student access
export const initAuth = async (): Promise<User | null> => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        resolve(user);
      } else {
        try {
          const cred = await signInAnonymously(auth);
          resolve(cred.user);
        } catch (err) {
          console.warn('Anonymous auth initialization note:', err);
          resolve(null);
        }
      }
    });
  });
};

/**
 * 1. Save or update Registered Student Profile in Firestore `students` collection
 */
export const saveStudentToFirestore = async (student: {
  name: string;
  phone: string;
  email: string;
  rollNumber?: string;
}): Promise<void> => {
  try {
    const studentDocId = student.email.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'student_' + Date.now();
    const studentRef = doc(db, 'students', studentDocId);
    
    await setDoc(studentRef, {
      name: student.name.trim(),
      phone: student.phone.trim(),
      email: student.email.trim().toLowerCase(),
      rollNumber: student.rollNumber || `UGC-NET-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      updatedAt: serverTimestamp(),
      registeredAt: new Date().toISOString()
    }, { merge: true });

    console.log('✅ Student registered in Firestore:', student.name);
  } catch (error) {
    console.error('Error saving student to Firestore:', error);
  }
};

/**
 * 2. Save complete test submission to Firestore `test_results` collection
 */
export const saveTestResultToFirestore = async (submission: SubmittedTestRecord): Promise<string | null> => {
  try {
    const resultsCol = collection(db, 'test_results');
    
    const docData = {
      studentName: submission.studentName,
      phoneNumber: submission.phoneNumber || submission.phone || '',
      email: submission.email || submission.studentEmail || '',
      studentRoll: submission.studentRoll || '',
      testId: submission.testId,
      testTitle: submission.testTitle,
      score: submission.score,
      maxScore: submission.totalMarks || submission.maxScore || 200,
      totalMarks: submission.totalMarks || 200,
      totalQuestions: submission.totalQuestions || 100,
      correctCount: submission.correctCount,
      wrongCount: submission.wrongCount,
      unattemptedCount: submission.unattemptedCount,
      accuracy: submission.accuracy,
      percentile: submission.percentile,
      timeTaken: submission.timeTaken || `${submission.timeTakenMinutes} min`,
      timeTakenMinutes: submission.timeTakenMinutes,
      timestamp: submission.timestamp || new Date().toISOString(),
      submittedAt: submission.formattedDate || new Date().toLocaleString('en-IN'),
      strongAreas: submission.strongAreas || [],
      weakAreas: submission.weakAreas || [],
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(resultsCol, docData);
    console.log('✅ Test score synced to Firestore with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error syncing test result to Firestore:', error);
    return null;
  }
};

/**
 * 3. Subscribe to Real-Time Test Results from Firestore `test_results` collection
 */
export const subscribeToTestResults = (
  onData: (records: SubmittedTestRecord[]) => void,
  onError?: (err: Error) => void
) => {
  try {
    const resultsCol = collection(db, 'test_results');
    const q = query(resultsCol, orderBy('timestamp', 'desc'));

    return onSnapshot(
      q,
      (snapshot) => {
        const records: SubmittedTestRecord[] = [];
        snapshot.forEach((docSnap) => {
          const d = docSnap.data();
          records.push({
            id: docSnap.id,
            studentName: d.studentName || 'Candidate',
            phoneNumber: d.phoneNumber || d.phone || '',
            phone: d.phoneNumber || d.phone || '',
            email: d.email || d.studentEmail || '',
            studentEmail: d.email || d.studentEmail || '',
            studentRoll: d.studentRoll || 'UGC-NET-2026',
            testId: d.testId || 1,
            testTitle: d.testTitle || 'UGC NET Economics Mock Test',
            score: Number(d.score || 0),
            maxScore: Number(d.maxScore || d.totalMarks || 200),
            totalMarks: Number(d.totalMarks || d.maxScore || 200),
            totalQuestions: Number(d.totalQuestions || 100),
            correctCount: Number(d.correctCount || 0),
            wrongCount: Number(d.wrongCount || 0),
            unattemptedCount: Number(d.unattemptedCount || 0),
            accuracy: Number(d.accuracy || 0),
            percentile: Number(d.percentile || 50),
            timeTaken: d.timeTaken || `${d.timeTakenMinutes || 0} min`,
            timeTakenMinutes: Number(d.timeTakenMinutes || 0),
            timestamp: d.timestamp || new Date().toISOString(),
            formattedDate: d.submittedAt || d.formattedDate || new Date().toLocaleDateString(),
            strongAreas: Array.isArray(d.strongAreas) ? d.strongAreas : [],
            weakAreas: Array.isArray(d.weakAreas) ? d.weakAreas : []
          });
        });
        onData(records);
      },
      (error) => {
        console.error('Firestore snapshot subscription error:', error);
        if (onError) onError(error);
      }
    );
  } catch (error) {
    console.error('Failed to setup Firestore test results subscription:', error);
    if (onError && error instanceof Error) onError(error);
    return () => {};
  }
};

/**
 * 4. Delete a test submission from Firestore
 */
export const deleteTestResultFromFirestore = async (id: string): Promise<boolean> => {
  try {
    const docRef = doc(db, 'test_results', id);
    await deleteDoc(docRef);
    console.log('✅ Deleted Firestore test result:', id);
    return true;
  } catch (error) {
    console.error('Error deleting test result from Firestore:', error);
    return false;
  }
};
