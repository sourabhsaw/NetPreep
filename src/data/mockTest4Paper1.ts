import { Question } from '../types';

export const mockTest4Paper1Questions: Question[] = [
  // --- UNIT 1: TEACHING APTITUDE (Q1 - Q5) ---
  {
    id: 1,
    test_id: 4,
    question: "Which of the following levels of teaching is primarily focused on the development of critical thinking, problem-solving abilities, and creative ideation among learners?",
    options: [
      "Memory Level (Herbartian approach)",
      "Understanding Level (Morrison approach)",
      "Reflective Level (Hunt's approach)",
      "Autonomous Development Level"
    ],
    correct_answer: 2,
    topic: "Teaching Aptitude",
    difficulty: "Moderate",
    concept: "Levels of Teaching → Reflective Level (Hunt)",
    explanation: "Hunt's Reflective Level is the highest, most learner-centered level of teaching. It requires students to identify problems, formulate hypotheses, test assumptions, and engage in autonomous critical thinking. Memory level (Herbart) focuses on rote recall, and Understanding level (Morrison) emphasizes comprehension of concepts and generalization."
  },
  {
    id: 2,
    test_id: 4,
    question: "In the context of the Choice Based Credit System (CBCS) recommended by UGC, what is the role of an 'Elective Course'?",
    options: [
      "A compulsory course which must be studied by a candidate as a core requirement",
      "A course chosen from a pool of papers that supports the discipline or provides an extended scope/skill",
      "A non-credit recreational activity designed purely for physical fitness",
      "A remedial class for students failing the prerequisite semester examinations"
    ],
    correct_answer: 1,
    topic: "Teaching Aptitude",
    difficulty: "Easy",
    concept: "Higher Education Evaluation → CBCS Framework",
    explanation: "Under the UGC CBCS framework, Elective Courses can be Discipline Specific Electives (DSE), Generic Electives (GE), or Open Electives that provide candidates an expanded multidisciplinary scope, proficiency enhancement, or exposure to applied fields."
  },
  {
    id: 3,
    test_id: 4,
    question: "Which formative assessment tool is specifically characterized by continuous, ungraded feedback provided during the instructional process to modify teaching-learning activities?",
    options: [
      "End-semester criterion-referenced summative examination",
      "Classroom Response System (Clickers / Real-time Polls) and Exit Slips",
      "Standardized Aptitude Percentile Test",
      "National Board Certification Assessment"
    ],
    correct_answer: 1,
    topic: "Teaching Aptitude",
    difficulty: "Easy",
    concept: "Evaluation Systems → Formative vs Summative Assessment",
    explanation: "Formative evaluation occurs during the instructional delivery to diagnose gaps and give immediate constructive feedback. Exit slips, 1-minute reflection papers, and classroom clicker polls are quintessential formative tools."
  },
  {
    id: 4,
    test_id: 4,
    question: "According to Bloom's Revised Taxonomy (Anderson & Krathwohl, 2001), which cognitive process dimension is placed at the apex of cognitive complexity?",
    options: [
      "Analyzing",
      "Evaluating",
      "Creating (Synthesizing new patterns or structures)",
      "Remembering"
    ],
    correct_answer: 2,
    topic: "Teaching Aptitude",
    difficulty: "Easy",
    concept: "Pedagogy → Bloom's Revised Taxonomy (2001)",
    explanation: "In the 2001 Anderson & Krathwohl revision of Bloom's Taxonomy, the six cognitive domains from lowest to highest are: Remember → Understand → Apply → Analyze → Evaluate → Create."
  },
  {
    id: 5,
    test_id: 4,
    question: "In massive open online learning (MOOCs) on SWAYAM, the 'Third Quadrant' corresponds to which component of digital delivery?",
    options: [
      "Video Lectures (e-Tutorial)",
      "Specially prepared reading material that can be downloaded/printed (e-Content)",
      "Self-Assessment tests through quizzes and assignments",
      "Online Discussion Forum for clearing doubts"
    ],
    correct_answer: 2,
    topic: "Teaching Aptitude",
    difficulty: "Moderate",
    concept: "Digital Initiatives → SWAYAM Four-Quadrant Architecture",
    explanation: "SWAYAM 4-quadrant pedagogy: Quadrant 1: e-Tutorial (Video/Audio lectures); Quadrant 2: e-Content (PDFs, eBooks, research articles); Quadrant 3: Web Resources & Self-Assessment (MCQs, short quizzes, assignments); Quadrant 4: Discussion Forum for peer interaction."
  },

  // --- UNIT 2: RESEARCH APTITUDE (Q6 - Q10) ---
  {
    id: 6,
    test_id: 4,
    question: "A researcher wants to ensure that every individual in a heterogeneous population with distinct socio-economic subgroups has an equal probability of proportional representation. Which sampling method is most appropriate?",
    options: [
      "Simple Random Sampling",
      "Stratified Proportional Random Sampling",
      "Purposive Judgemental Sampling",
      "Snowball Sampling"
    ],
    correct_answer: 1,
    topic: "Research Aptitude",
    difficulty: "Moderate",
    concept: "Research Methodology → Probability Sampling Techniques",
    explanation: "Stratified Random Sampling divides a heterogeneous target population into mutually exclusive, homogeneous strata (e.g., income, gender, region) and takes independent random samples from each stratum in proportion to their population size."
  },
  {
    id: 7,
    test_id: 4,
    question: "In statistical hypothesis testing, committing a 'Type II Error' (β) corresponds to:",
    options: [
      "Rejecting the true null hypothesis",
      "Failing to reject (accepting) a false null hypothesis",
      "Rejecting the false alternative hypothesis",
      "Setting the significance level α to 0.01 instead of 0.05"
    ],
    correct_answer: 1,
    topic: "Research Aptitude",
    difficulty: "Easy",
    concept: "Hypothesis Testing → Type I vs Type II Errors",
    explanation: "Type I Error (α): Rejecting a true null hypothesis (False Positive). Type II Error (β): Failing to reject a false null hypothesis (False Negative). Statistical Power is defined as 1 - β."
  },
  {
    id: 8,
    test_id: 4,
    question: "Which of the following research designs is strictly geared towards resolving an immediate, localized operational problem in an institutional setting through an iterative spiral of 'Plan, Act, Observe, Reflect'?",
    options: [
      "Fundamental (Basic) Research",
      "Applied Experimental Research",
      "Action Research",
      "Ex-post Facto Research"
    ],
    correct_answer: 2,
    topic: "Research Aptitude",
    difficulty: "Easy",
    concept: "Types of Research → Action Research Cycle (Kurt Lewin)",
    explanation: "Action research, formulated by Kurt Lewin, is conducted by practitioners in real-world local contexts to improve institutional practices through cyclical phases of planning, acting, observing, and reflecting."
  },
  {
    id: 9,
    test_id: 4,
    question: "Which referencing style uses the 'Author-Date' in-text citation format (e.g., Sen, 1999) and is most widely adopted in Economics, Education, and Social Sciences?",
    options: [
      "APA (American Psychological Association) 7th Edition",
      "MLA (Modern Language Association) 9th Edition",
      "Chicago Footnote/Bibliography Style",
      "IEEE Numerical Citation Style"
    ],
    correct_answer: 0,
    topic: "Research Aptitude",
    difficulty: "Easy",
    concept: "Research Ethics & Academic Formatting → Citation Styles",
    explanation: "APA referencing utilizes parenthetical author-date in-text citations (Author, Year) and an alphabetical references list, making it the benchmark in behavioural and social sciences."
  },
  {
    id: 10,
    test_id: 4,
    question: "According to UGC guidelines and standard academic ethics, 'Self-Plagiarism' (Text Recycling) refers to:",
    options: [
      "Using another author's ideas without quotation marks",
      "Republishing one's own previously published text, data, or findings as entirely new without explicit citation",
      "Fabricating raw survey data in statistical regressions",
      "Collaborating with co-authors from different universities"
    ],
    correct_answer: 1,
    topic: "Research Aptitude",
    difficulty: "Easy",
    concept: "Research Ethics → UGC Academic Integrity & Plagiarism Norms",
    explanation: "Self-plagiarism occurs when an author re-uses portions of their own previous copyrighted work without proper attribution or permission from publishers, misleading readers about the novelty of the research."
  },

  // --- UNIT 3: READING COMPREHENSION (Q11 - Q15) ---
  {
    id: 11,
    test_id: 4,
    question: "Read the passage:\n'Sustainable economic growth in developing nations cannot rely solely on capital deepening. Total Factor Productivity (TFP) driven by human capital accumulation, institutional stability, and technological diffusion serves as the fundamental catalyst for enduring prosperity.'\nAccording to the passage, what is the ultimate driver of enduring prosperity?",
    options: [
      "Physical capital accumulation and machinery imports alone",
      "Total Factor Productivity fostered by human capital, institutions, and technology",
      "Short-term fiscal deficits and expansionary monetary easing",
      "Strict trade protectionism and foreign exchange rationing"
    ],
    correct_answer: 1,
    topic: "Reading Comprehension",
    difficulty: "Easy",
    concept: "Reading Comprehension → Direct Fact Inference",
    explanation: "The passage explicitly affirms that Total Factor Productivity (TFP) driven by human capital accumulation, institutional stability, and technological diffusion is the fundamental catalyst for enduring prosperity."
  },
  {
    id: 12,
    test_id: 4,
    question: "Based on the concept of 'Total Factor Productivity' in the passage, which variable is NOT a direct factor of TFP mentioned?",
    options: [
      "Human capital accumulation",
      "Institutional stability",
      "Technological diffusion",
      "Commodity price speculation"
    ],
    correct_answer: 3,
    topic: "Reading Comprehension",
    difficulty: "Easy",
    concept: "Reading Comprehension → Vocabulary & Contextual Analysis",
    explanation: "The passage identifies human capital, institutions, and technology as key drivers. Speculation is not mentioned or implied as a driver of TFP."
  },
  {
    id: 13,
    test_id: 4,
    question: "What is the author's primary attitude toward relying solely on physical capital deepening for growth?",
    options: [
      "Unconditionally supportive",
      "Critical / Cautious regarding its sufficiency for long-term sustainability",
      "Indifferent and ambiguous",
      "Hostile toward any private investment"
    ],
    correct_answer: 1,
    topic: "Reading Comprehension",
    difficulty: "Moderate",
    concept: "Reading Comprehension → Author's Tone and Stance",
    explanation: "The author notes that sustainable growth 'cannot rely solely on capital deepening', highlighting the necessity of productivity and institutional drivers."
  },
  {
    id: 14,
    test_id: 4,
    question: "Which of the following phrases from the text denotes the enhancement of workforce skills, health, and education?",
    options: [
      "Capital deepening",
      "Human capital accumulation",
      "Trade protectionism",
      "Fiscal contraction"
    ],
    correct_answer: 1,
    topic: "Reading Comprehension",
    difficulty: "Easy",
    concept: "Reading Comprehension → Contextual Terminology",
    explanation: "Human capital accumulation encompasses education, skill training, health, and cognitive capability development in the labour force."
  },
  {
    id: 15,
    test_id: 4,
    question: "Which title best summarizes the central theme of the passage?",
    options: [
      "The Downfall of Heavy Industry",
      "Productivity and Institutional Foundations of Sustainable Growth",
      "Short-Term Currency Stabilization Policies",
      "Tariff Structures in Global Supply Chains"
    ],
    correct_answer: 1,
    topic: "Reading Comprehension",
    difficulty: "Easy",
    concept: "Reading Comprehension → Main Idea Synthesis",
    explanation: "The excerpt centers on how productivity, institutions, and human capital create durable sustainable economic development beyond mere physical capital accumulation."
  },

  // --- UNIT 4: COMMUNICATION (Q16 - Q20) ---
  {
    id: 16,
    test_id: 4,
    question: "In communication theory, 'Kinesics' refers to the study of:",
    options: [
      "Voice pitch, intonation, cadence, and vocal volume (Paralanguage)",
      "Body posture, gestures, eye contact (oculesics), and facial expressions",
      "Spatial distance and personal territory maintenance (Proxemics)",
      "Time perception and punctuality in interpersonal interactions (Chronemics)"
    ],
    correct_answer: 1,
    topic: "Communication",
    difficulty: "Easy",
    concept: "Non-Verbal Communication → Kinesics",
    explanation: "Kinesics (coined by Ray Birdwhistell) is the interpretation of body language, facial expressions, hand gestures, and body movement during communication."
  },
  {
    id: 17,
    test_id: 4,
    question: "Which model of communication introduced the concept of 'Noise' (physical, physiological, and psychological interference) disrupting the transmission channel?",
    options: [
      "Aristotle's Rhetorical Model",
      "Shannon and Weaver's Mathematical Model of Communication (1949)",
      "Berlo's SMCR Model",
      "Schramm's Interactive Circular Model"
    ],
    correct_answer: 1,
    topic: "Communication",
    difficulty: "Moderate",
    concept: "Communication Models → Shannon-Weaver Model (1949)",
    explanation: "Claude Shannon and Warren Weaver (1949) introduced the linear mathematical model comprising: Information Source → Transmitter → Channel (with Noise Source) → Receiver → Destination."
  },
  {
    id: 18,
    test_id: 4,
    question: "In an educational classroom, when a teacher uses continuous eye contact, affirmative nods, and an approachable tone to reduce emotional distance, this exemplifies:",
    options: [
      "High Teacher Immediacy behaviors",
      "Semantic barrier creation",
      "Selective perceptual defensiveness",
      "Cognitive dissonance induction"
    ],
    correct_answer: 0,
    topic: "Communication",
    difficulty: "Easy",
    concept: "Classroom Communication → Non-verbal Immediacy",
    explanation: "Teacher immediacy behaviors (Mehrabian) are non-verbal and verbal actions that promote physical and psychological closeness with learners, enhancing motivation and attentiveness."
  },
  {
    id: 19,
    test_id: 4,
    question: "Which communication barrier arises when the sender and receiver attach divergent meanings to technical jargon or ambiguous vocabulary?",
    options: [
      "Psychological barrier",
      "Semantic / Linguistic barrier",
      "Physical / Environmental barrier",
      "Organizational hierarchical barrier"
    ],
    correct_answer: 1,
    topic: "Communication",
    difficulty: "Easy",
    concept: "Barriers to Communication → Semantic Barriers",
    explanation: "Semantic barriers occur when words, phrases, or symbols are interpreted differently due to ambiguous definitions, jargon, or translation nuances."
  },
  {
    id: 20,
    test_id: 4,
    question: "Mass communication that serves to influence political opinions, societal norms, and cultural viewpoints across a heterogeneous audience via broadcast media is known as:",
    options: [
      "Intrapersonal reflection",
      "Public agenda-setting and macro-communication",
      "Dyadic interpersonal exchange",
      "Small-group socio-metric dialogue"
    ],
    correct_answer: 1,
    topic: "Communication",
    difficulty: "Easy",
    concept: "Mass Media & Society → Agenda-Setting Theory",
    explanation: "McCombs and Shaw's Agenda-Setting Theory explains how mass media dictates not necessarily what individuals think, but what issues they think about by prioritizing news topics."
  },

  // --- UNIT 5: MATHEMATICAL REASONING & APTITUDE (Q21 - Q25) ---
  {
    id: 21,
    test_id: 4,
    question: "Find the next missing number in the sequence: 4, 9, 25, 49, 121, 169, ?",
    options: [
      "225",
      "289",
      "361",
      "196"
    ],
    correct_answer: 1,
    topic: "Mathematical Reasoning",
    difficulty: "Moderate",
    concept: "Number Series → Squares of Prime Numbers",
    explanation: "The series represents squares of consecutive prime numbers: 2^2=4, 3^2=9, 5^2=25, 7^2=49, 11^2=121, 13^2=169. The next prime number is 17, and 17^2 = 289."
  },
  {
    id: 22,
    test_id: 4,
    question: "A sum of ₹10,000 is invested at compound interest at 10% per annum, compounded annually. What is the total compound interest earned after 3 years?",
    options: [
      "₹3,000",
      "₹3,310",
      "₹3,100",
      "₹3,641"
    ],
    correct_answer: 1,
    topic: "Mathematical Reasoning",
    difficulty: "Easy",
    concept: "Commercial Math → Compound Interest Formula",
    explanation: "Amount A = P * (1 + r/100)^t = 10000 * (1.1)^3 = 10000 * 1.331 = ₹13,310. Compound Interest = A - P = 13,310 - 10,000 = ₹3,310."
  },
  {
    id: 23,
    test_id: 4,
    question: "A train running at a speed of 72 km/h crosses a 200-meter-long bridge in 20 seconds. What is the length of the train?",
    options: [
      "150 meters",
      "200 meters",
      "250 meters",
      "300 meters"
    ],
    correct_answer: 1,
    topic: "Mathematical Reasoning",
    difficulty: "Moderate",
    concept: "Speed, Distance & Time → Relative Motion and Train Length",
    explanation: "Speed = 72 * (5/18) = 20 m/s. Total distance covered in 20 s = Speed * Time = 20 * 20 = 400 m. Total distance = Length of train (L) + Length of bridge (200 m). Therefore, L = 400 - 200 = 200 meters."
  },
  {
    id: 24,
    test_id: 4,
    question: "If 'TEACHER' is coded as 'VGCEJGT' in a certain cipher code, how will 'STUDENT' be coded in the same system?",
    options: [
      "UVWFGPV",
      "UVWFEPV",
      "UVWGFPV",
      "TVWEFPU"
    ],
    correct_answer: 0,
    topic: "Mathematical Reasoning",
    difficulty: "Easy",
    concept: "Coding-Decoding → +2 Letter Shift Cipher",
    explanation: "Each letter is shifted forward by +2 positions: S(+2)=U, T(+2)=V, U(+2)=W, D(+2)=F, E(+2)=G, N(+2)=P, T(+2)=V. Result = UVWFGPV."
  },
  {
    id: 25,
    test_id: 4,
    question: "The ratio of ages of A and B is 4 : 5. After 6 years, the ratio of their ages becomes 5 : 6. What is the present age of A?",
    options: [
      "20 years",
      "24 years",
      "30 years",
      "18 years"
    ],
    correct_answer: 1,
    topic: "Mathematical Reasoning",
    difficulty: "Easy",
    concept: "Ratios and Proportions → Age Problem Equations",
    explanation: "Let ages be 4x and 5x. (4x + 6) / (5x + 6) = 5/6 => 6(4x + 6) = 5(5x + 6) => 24x + 36 = 25x + 30 => x = 6. Present age of A = 4 * 6 = 24 years."
  },

  // --- UNIT 6: LOGICAL REASONING (Q26 - Q30) ---
  {
    id: 26,
    test_id: 4,
    question: "In classical Indian Philosophy (Nyaya epistemology), which Pramana refers to valid knowledge acquired through sensory organ contact with an object?",
    options: [
      "Pratyaksha (Direct Perception)",
      "Anumana (Inference)",
      "Upamana (Analogy / Comparison)",
      "Shabda (Verbal Testimony)"
    ],
    correct_answer: 0,
    topic: "Logical Reasoning",
    difficulty: "Easy",
    concept: "Indian Logic (Pramanas) → Pratyaksha (Perception)",
    explanation: "Nyaya philosophy accepts four valid sources of knowledge (Pramanas): Pratyaksha (Perception resulting from indriya-artha contact), Anumana (Inference via vyapti), Upamana (Comparison), and Shabda (Testimony of a trustworthy person/Aptavakya)."
  },
  {
    id: 27,
    test_id: 4,
    question: "According to the Classical Square of Opposition, if the universal affirmative proposition 'All S is P' (A) is TRUE, what is the truth value of the contradictory proposition 'Some S is not P' (O)?",
    options: [
      "True",
      "False",
      "Undetermined / Doubtful",
      "Partially True"
    ],
    correct_answer: 1,
    topic: "Logical Reasoning",
    difficulty: "Easy",
    concept: "Categorical Propositions → Square of Opposition (Contradictories)",
    explanation: "Contradictory pairs (A & O, E & I) can neither both be true nor both be false simultaneously. If 'All S is P' (A) is True, 'Some S is not P' (O) MUST be strictly False."
  },
  {
    id: 28,
    test_id: 4,
    question: "In Nyaya syllogism (Pancha-Avayava), what represents the 'Hetu' (Reason / Ground)?",
    options: [
      "Pratijna (The hill has fire)",
      "Hetu (Because it has smoke)",
      "Udaharana (Wherever there is smoke, there is fire, as in a kitchen)",
      "Nigamana (Therefore, the hill has fire)"
    ],
    correct_answer: 1,
    topic: "Logical Reasoning",
    difficulty: "Moderate",
    concept: "Indian Logic → 5 Members of Nyaya Syllogism",
    explanation: "The 5 steps of Nyaya Anumana are: 1. Pratijna (Proposition: Hill has fire), 2. Hetu (Reason: Because of smoke), 3. Udaharana (Example with vyapti: Kitchen hearth), 4. Upanaya (Application: Hill possesses smoke pervaded by fire), 5. Nigamana (Conclusion)."
  },
  {
    id: 29,
    test_id: 4,
    question: "Identify the informal fallacy committed in: 'No one has definitively proven that ghosts do not exist; therefore, ghosts must exist.'",
    options: [
      "Argumentum ad Hominem",
      "Argumentum ad Ignorantiam (Appeal to Ignorance)",
      "Begging the Question (Petitio Principii)",
      "False Dilemma"
    ],
    correct_answer: 1,
    topic: "Logical Reasoning",
    difficulty: "Easy",
    concept: "Fallacies of Relevance → Appeal to Ignorance",
    explanation: "Argumentum ad Ignorantiam asserts that a proposition is true simply because it has not been proven false (or false because it has not been proven true)."
  },
  {
    id: 30,
    test_id: 4,
    question: "The invariant and unconditional universal relation of concomitance between the middle term (Hetu/Smoke) and major term (Sadhya/Fire) in Indian logic is termed:",
    options: [
      "Pramana",
      "Vyapti",
      "Pakshadharmata",
      "Paramarsha"
    ],
    correct_answer: 1,
    topic: "Logical Reasoning",
    difficulty: "Moderate",
    concept: "Indian Logic → Invariable Concomitance (Vyapti)",
    explanation: "Vyapti is the foundational relationship of invariable concomitance without which no inference (Anumana) is valid. For example, the non-deviation (sahachara) of smoke wherever fire is present under universal conditions."
  },

  // --- UNIT 7: DATA INTERPRETATION (Q31 - Q35) ---
  {
    id: 31,
    test_id: 4,
    question: "Data Table: Annual Production (in thousand tonnes) of Wheat across 4 States (A, B, C, D) in 2024 is A: 120, B: 180, C: 150, D: 250. What is the average wheat production per state in 2024?",
    options: [
      "150 thousand tonnes",
      "175 thousand tonnes",
      "180 thousand tonnes",
      "200 thousand tonnes"
    ],
    correct_answer: 1,
    topic: "Data Interpretation",
    difficulty: "Easy",
    concept: "Data Interpretation → Average Calculation",
    explanation: "Total production = 120 + 180 + 150 + 250 = 700 thousand tonnes. Average = 700 / 4 = 175 thousand tonnes."
  },
  {
    id: 32,
    test_id: 4,
    question: "Using the table above, what percentage of total production is contributed by State D?",
    options: [
      "25.71%",
      "35.71%",
      "40.00%",
      "32.50%"
    ],
    correct_answer: 1,
    topic: "Data Interpretation",
    difficulty: "Moderate",
    concept: "Data Interpretation → Percentage Share of Total",
    explanation: "Share of D = (250 / 700) * 100 = 35.71%."
  },
  {
    id: 33,
    test_id: 4,
    question: "What is the ratio of production of State B to State C?",
    options: [
      "5 : 6",
      "6 : 5",
      "4 : 3",
      "3 : 2"
    ],
    correct_answer: 1,
    topic: "Data Interpretation",
    difficulty: "Easy",
    concept: "Data Interpretation → Ratio Computation",
    explanation: "Ratio = 180 : 150 = 18/15 = 6 : 5."
  },
  {
    id: 34,
    test_id: 4,
    question: "If State A's production increases by 25% in 2025, what will be its new production?",
    options: [
      "140 thousand tonnes",
      "150 thousand tonnes",
      "160 thousand tonnes",
      "145 thousand tonnes"
    ],
    correct_answer: 1,
    topic: "Data Interpretation",
    difficulty: "Easy",
    concept: "Data Interpretation → Percentage Increase",
    explanation: "New production = 120 * (1 + 0.25) = 120 * 1.25 = 150 thousand tonnes."
  },
  {
    id: 35,
    test_id: 4,
    question: "By how much does the production of State D exceed the combined production of States A and B?",
    options: [
      "D does not exceed (it is 50 lower)",
      "50 thousand tonnes higher",
      "State D is equal to A+B",
      "100 thousand tonnes lower"
    ],
    correct_answer: 0,
    topic: "Data Interpretation",
    difficulty: "Easy",
    concept: "Data Interpretation → Comparative Difference",
    explanation: "Combined production of A and B = 120 + 180 = 300 thousand tonnes. State D is 250 thousand tonnes, which is 50 thousand tonnes less than A+B."
  },

  // --- UNIT 8: INFORMATION & COMMUNICATION TECHNOLOGY (ICT) (Q36 - Q40) ---
  {
    id: 36,
    test_id: 4,
    question: "What is the primary difference between IPv4 and IPv6 network addressing schemes?",
    options: [
      "IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses",
      "IPv4 uses 64-bit addresses while IPv6 uses 256-bit addresses",
      "IPv4 is purely wireless while IPv6 requires fiber optic cables",
      "IPv4 uses hexadecimal notation whereas IPv6 uses decimal"
    ],
    correct_answer: 0,
    topic: "Information & Communication Technology",
    difficulty: "Easy",
    concept: "ICT Networking → IPv4 vs IPv6 Addressing",
    explanation: "IPv4 uses 32 bits (yielding ~4.3 billion unique addresses represented in dotted-decimal format). IPv6 uses 128 bits (yielding 3.4 x 10^38 addresses represented in hexadecimal notation) to resolve address exhaustion."
  },
  {
    id: 37,
    test_id: 4,
    question: "Convert the binary number (110101)_2 into its equivalent decimal representation.",
    options: [
      "43",
      "53",
      "51",
      "47"
    ],
    correct_answer: 1,
    topic: "Information & Communication Technology",
    difficulty: "Moderate",
    concept: "Number Systems → Binary to Decimal Conversion",
    explanation: "1*(2^5) + 1*(2^4) + 0*(2^3) + 1*(2^2) + 0*(2^1) + 1*(2^0) = 32 + 16 + 0 + 4 + 0 + 1 = 53."
  },
  {
    id: 38,
    test_id: 4,
    question: "Which type of computer memory is non-volatile, high-speed, and retains the BIOS/UEFI bootstrap firmware even when the power is turned off?",
    options: [
      "DRAM (Dynamic RAM)",
      "SRAM (Static Cache RAM)",
      "ROM (Read Only Memory)",
      "Virtual Paged Memory"
    ],
    correct_answer: 2,
    topic: "Information & Communication Technology",
    difficulty: "Easy",
    concept: "Computer Hardware → Primary Memory & Firmware",
    explanation: "ROM (and its EEPROM/Flash derivatives) is non-volatile memory storing permanent startup instructions (POST and bootstrap loader) required to boot the operating system."
  },
  {
    id: 39,
    test_id: 4,
    question: "What cybersecurity attack involves misleading a user into revealing confidential credentials by mimicking a legitimate banking or institutional website?",
    options: [
      "DDoS (Distributed Denial of Service)",
      "Phishing",
      "SQL Injection",
      "Trojan Horse backdooring"
    ],
    correct_answer: 1,
    topic: "Information & Communication Technology",
    difficulty: "Easy",
    concept: "Cybersecurity → Social Engineering & Phishing",
    explanation: "Phishing is a social engineering attack where malicious actors pose as legitimate organizations via fraudulent emails or spoofed URLs to steal user passwords, credit card numbers, or sensitive data."
  },
  {
    id: 40,
    test_id: 4,
    question: "In the context of cloud computing architectures, 'SaaS' stands for:",
    options: [
      "Software as a Service",
      "Storage as a Server",
      "Security as a System",
      "Scripting as a Solution"
    ],
    correct_answer: 0,
    topic: "Information & Communication Technology",
    difficulty: "Easy",
    concept: "Cloud Computing → Service Delivery Models",
    explanation: "Cloud computing service models: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service, such as Google Workspace, Microsoft 365, etc.)."
  },

  // --- UNIT 9: PEOPLE, DEVELOPMENT & ENVIRONMENT (Q41 - Q45) ---
  {
    id: 41,
    test_id: 4,
    question: "The Sustainable Development Goals (SDGs) adopted by the United Nations in 2015 comprise how many specific global goals to be achieved by 2030?",
    options: [
      "8 Goals and 21 Targets",
      "17 Goals and 169 Targets",
      "12 Goals and 100 Targets",
      "20 Goals and 150 Targets"
    ],
    correct_answer: 1,
    topic: "People & Environment",
    difficulty: "Easy",
    concept: "Sustainable Development Goals → UN Agenda 2030",
    explanation: "The UN 2030 Agenda consists of 17 Sustainable Development Goals (SDGs) and 169 targets succeeding the Millennium Development Goals (which had 8 goals)."
  },
  {
    id: 42,
    test_id: 4,
    question: "Which international agreement established the binding commitment to phase out ozone-depleting chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons (HCFCs)?",
    options: [
      "Kyoto Protocol (1997)",
      "Montreal Protocol (1987)",
      "Paris Climate Agreement (2015)",
      "Ramsar Convention (1971)"
    ],
    correct_answer: 1,
    topic: "People & Environment",
    difficulty: "Easy",
    concept: "Environmental Treaties → Montreal Protocol on Ozone Layer",
    explanation: "The Montreal Protocol (1987) is the landmark treaty signed to phase out substances responsible for stratospheric ozone depletion (CFCs, Halons, CCl4)."
  },
  {
    id: 43,
    test_id: 4,
    question: "Which primary air pollutant is a major precursor to secondary photochemical smog (ground-level ozone) and acid precipitation?",
    options: [
      "Nitrogen Oxides (NOx) and Volatile Organic Compounds (VOCs)",
      "Argon and Helium",
      "Pure water vapor",
      "O2 and Carbon dioxide"
    ],
    correct_answer: 0,
    topic: "People & Environment",
    difficulty: "Moderate",
    concept: "Pollution & Atmospheric Chemistry → Photochemical Smog",
    explanation: "Photochemical smog is formed when primary pollutants NOx and VOCs react in the presence of sunlight (UV radiation) to produce secondary oxidants like Ozone (O3) and PAN."
  },
  {
    id: 44,
    test_id: 4,
    question: "Under the National Action Plan on Climate Change (NAPCC) launched by India, which of the following is ONE of the eight core national missions?",
    options: [
      "National Solar Mission",
      "National Nuclear Enrichment Mission",
      "National Coal Subsidization Mission",
      "National Deep-Sea Mining Mission"
    ],
    correct_answer: 0,
    topic: "People & Environment",
    difficulty: "Easy",
    concept: "National Environmental Policies → India's NAPCC 8 Missions",
    explanation: "India's NAPCC (2008) comprises 8 missions: 1. National Solar Mission, 2. Enhanced Energy Efficiency, 3. Sustainable Habitat, 4. Water Mission, 5. Sustaining the Himalayan Ecosystem, 6. Green India, 7. Sustainable Agriculture, 8. Strategic Knowledge for Climate Change."
  },
  {
    id: 45,
    test_id: 4,
    question: "Biochemical Oxygen Demand (BOD) is a standard diagnostic metric used to determine:",
    options: [
      "The degree of organic pollution in a water body",
      "The salinity level in marine estuaries",
      "The presence of heavy metals in soil",
      "The radioactive decay of nuclear waste"
    ],
    correct_answer: 0,
    topic: "People & Environment",
    difficulty: "Easy",
    concept: "Water Quality Parameters → Biochemical Oxygen Demand (BOD)",
    explanation: "BOD measures the amount of dissolved oxygen consumed by aerobic microorganisms while decomposing organic matter in water. Higher BOD indicates higher organic contamination and lower water quality."
  },

  // --- UNIT 10: HIGHER EDUCATION SYSTEM (Q46 - Q50) ---
  {
    id: 46,
    test_id: 4,
    question: "According to the National Education Policy (NEP) 2020, what is the proposed apex regulatory body replacing UGC, AICTE, and NCTE with four distinct verticals?",
    options: [
      "Higher Education Commission of India (HECI)",
      "National Council for University Grants (NCUG)",
      "Central Board of Tertiary Affiliation (CBTA)",
      "National Accreditation and Rating Directorate (NARD)"
    ],
    correct_answer: 0,
    topic: "Higher Education System",
    difficulty: "Moderate",
    concept: "Higher Education Governance → NEP 2020 HECI Architecture",
    explanation: "NEP 2020 proposes HECI with 4 verticals: 1. NHERC (National Higher Education Regulatory Council - regulation), 2. NAC (National Accreditation Council - accreditation), 3. HEGC (Higher Education Grants Council - funding), and 4. GEC (General Education Council - standard setting)."
  },
  {
    id: 47,
    test_id: 4,
    question: "Which ancient Indian university flourished in ancient Magadha (modern Bihar) from the 5th century CE and was renowned for Buddhist logic, epistemology, and its vast library 'Dharmaganja'?",
    options: [
      "Takshashila",
      "Nalanda Mahavihara",
      "Vallabhi",
      "Vikramashila"
    ],
    correct_answer: 1,
    topic: "Higher Education System",
    difficulty: "Easy",
    concept: "Ancient Higher Education Centers → Nalanda Mahavihara",
    explanation: "Nalanda was founded during the Gupta dynasty (Kumaragupta I) and patronized by Emperor Harsha and Pala kings. Its library Dharmaganja comprised Ratnasagara, Ratnodadhi, and Ratnaranjaka."
  },
  {
    id: 48,
    test_id: 4,
    question: "The Radhakrishnan Commission (University Education Commission, 1948-49) was established with the prime objective to:",
    options: [
      "Examine university education in independent India and recommend rural universities",
      "Introduce 10+2+3 school structure exclusively",
      "Replace English medium with provincial dialects in technical colleges",
      "Privatize medical colleges across states"
    ],
    correct_answer: 0,
    topic: "Higher Education System",
    difficulty: "Moderate",
    concept: "Committees & Commissions → Radhakrishnan Commission (1948-49)",
    explanation: "The first education commission in independent India was the University Education Commission (1948-49) chaired by Dr. S. Radhakrishnan, which recommended UGC establishment and the development of rural universities."
  },
  {
    id: 49,
    test_id: 4,
    question: "Under the National Institutional Ranking Framework (NIRF) launched by the Ministry of Education, which parameter carries the highest weightage across universities?",
    options: [
      "Teaching, Learning & Resources (TLR) and Research & Professional Practice (RPC)",
      "Sports facilities and campus cafeteria size",
      "Social media engagement metrics",
      "Number of international branch campuses"
    ],
    correct_answer: 0,
    topic: "Higher Education System",
    difficulty: "Moderate",
    concept: "Quality Assurance & Rankings → NIRF Framework",
    explanation: "NIRF evaluates institutions across 5 metrics: 1. TLR (Teaching, Learning & Resources), 2. RPC (Research and Professional Practice), 3. GO (Graduation Outcomes), 4. OI (Outreach and Inclusivity), and 5. PR (Perception)."
  },
  {
    id: 50,
    test_id: 4,
    question: "The Academic Bank of Credits (ABC) instituted under NEP 2020 allows students to:",
    options: [
      "Deposit physical cash for tuition scholarships",
      "Digitally store, transfer, and redeem academic credits earned from authorized HEIs to facilitate multiple entry and exit points",
      "Waive off degree examinations after 1st year",
      "Automatically receive a PhD upon completing postgraduate degrees"
    ],
    correct_answer: 1,
    topic: "Higher Education System",
    difficulty: "Easy",
    concept: "NEP 2020 Reforms → Academic Bank of Credits (ABC)",
    explanation: "ABC is a digital credit repository managed under DigiLocker where credits earned by students from recognized higher education institutions are stored to facilitate credit transfer and flexible multiple entries and exits."
  }
];
