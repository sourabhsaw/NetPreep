import { Question } from '../types';

export const csMockTest02Questions: Question[] = [
  {
    id: 102001,
    test_id: 102,
    question: "Which of the following problems in formal language theory is known to be decidable?",
    options: [
      "Equivalence of two deterministic finite automata (DFA1 == DFA2)",
      "Equivalence of two context-free grammars (CFG1 == CFG2)",
      "Ambiguity of a context-free grammar",
      "Universality of a non-deterministic pushdown automaton"
    ],
    correct_answer: 0,
    topic: "Theory of Computation & Compilers",
    difficulty: "Moderate",
    concept: "Decidability → Regular Languages Decidable Properties",
    explanation: "Equivalence of two DFAs is decidable by constructing the symmetric difference DFA: L(D) = (L1 ∩ L2') ∪ (L1' ∩ L2) and checking if L(D) is empty. In contrast, equivalence and ambiguity for CFGs are undecidable."
  },
  {
    id: 102002,
    test_id: 102,
    question: "In Relational Database Design, which normal form eliminates multi-valued dependencies (MVDs)?",
    options: [
      "3NF",
      "BCNF",
      "4NF (Fourth Normal Form)",
      "5NF (Project-Join Normal Form)"
    ],
    correct_answer: 2,
    topic: "Database Management Systems",
    difficulty: "Easy",
    concept: "Normalization → 4NF Multi-Valued Dependencies",
    explanation: "Fourth Normal Form (4NF) requires that for every non-trivial multi-valued dependency X ->> Y, X must be a superkey of the relation."
  },
  {
    id: 102003,
    test_id: 102,
    question: "What is the worst-case time complexity of searching for a key in a B-Tree of order m storing N keys?",
    options: [
      "O(N)",
      "O(log_m N)",
      "O(m log N)",
      "O(m * N)"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Moderate",
    concept: "Tree Structures → B-Tree Search Complexity",
    explanation: "The height of a B-Tree of order m containing N keys is bounded by O(log_m N). At each node, binary search takes O(log m), giving overall search time O(log_m N * log m) = O(log N)."
  },
  {
    id: 102004,
    test_id: 102,
    question: "In Computer Networks, which protocol uses ICMP Type 8 (Echo Request) and Type 0 (Echo Reply) messages for path latency and reachability testing?",
    options: [
      "Traceroute",
      "Ping",
      "SNMP",
      "BGP"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Network Utilities → ICMP Echo and Ping",
    explanation: "The `ping` diagnostic utility sends ICMP Echo Request messages (Type 8) and listens for ICMP Echo Reply datagrams (Type 0) to evaluate round-trip packet latency and reachability."
  },
  {
    id: 102005,
    test_id: 102,
    question: "In an Operating System with demand paging, if memory access time is 100 ns and page fault service time is 10 ms (10,000,000 ns), what is the maximum permissible page fault rate 'p' to keep effective access time below 200 ns?",
    options: [
      "p <= 0.00001 (1 in 100,000)",
      "p <= 0.0001 (1 in 10,000)",
      "p <= 0.001 (1 in 1,000)",
      "p <= 0.01 (1 in 100)"
    ],
    correct_answer: 0,
    topic: "Operating Systems & System Software",
    difficulty: "Hard",
    concept: "Virtual Memory → EAT and Page Fault Rate Calculation",
    explanation: "EAT = (1 - p) * 100 + p * 10,000,000 <= 200 => 100 - 100p + 10,000,000p <= 200 => 9,999,900p <= 100 => p <= 100 / 10,000,000 = 0.00001 (1 in 100,000)."
  },
  {
    id: 102006,
    test_id: 102,
    question: "In Software Engineering, which design pattern ensures a class has only one instance while providing a global point of access to it?",
    options: [
      "Factory Pattern",
      "Singleton Pattern",
      "Adapter Pattern",
      "Strategy Pattern"
    ],
    correct_answer: 1,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Design Patterns → Singleton Pattern",
    explanation: "The Singleton design pattern restricts the instantiation of a class to a single object and provides a synchronized global accessor method (e.g. `getInstance()`)."
  },
  {
    id: 102007,
    test_id: 102,
    question: "In Artificial Intelligence, what is the minimax value of a terminal node representing a won game state for the maximizing agent?",
    options: [
      "-infinity",
      "+infinity (or high positive constant +1 / +1000)",
      "0",
      "Heuristic value of parent"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Game Trees → Minimax Terminal Evaluation",
    explanation: "In game theory and adversarial search, winning states for MAX are assigned positive infinity (+infinity), while winning states for MIN are assigned negative infinity (-infinity)."
  },
  {
    id: 102008,
    test_id: 102,
    question: "In Discrete Mathematics, what is the number of onto (surjective) functions from a set with 4 elements to a set with 3 elements?",
    options: [
      "81",
      "36",
      "24",
      "64"
    ],
    correct_answer: 1,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Moderate",
    concept: "Combinatorics → Surjective Onto Functions Formula",
    explanation: "Number of onto functions from m=4 to n=3: sum_{k=0}^{3} (-1)^k * (3 choose k) * (3 - k)^4 = (3 choose 0)*3^4 - (3 choose 1)*2^4 + (3 choose 2)*1^4 = 81 - 3*(16) + 3*(1) = 81 - 48 + 3 = 36."
  },
  {
    id: 102009,
    test_id: 102,
    question: "Which computer graphics clipping algorithm is a generalized polygon clipping algorithm that clips arbitrary concave or convex polygons against convex clip windows by handling each edge boundary sequentially?",
    options: [
      "Cohen-Sutherland Algorithm",
      "Sutherland-Hodgman Polygon Clipping Algorithm",
      "Liang-Barsky Algorithm",
      "Weiler-Atherton Algorithm"
    ],
    correct_answer: 1,
    topic: "Programming Languages & CG",
    difficulty: "Moderate",
    concept: "Computer Graphics → Sutherland-Hodgman Polygon Clipping",
    explanation: "Sutherland-Hodgman algorithm clips a polygon against each window edge (left, right, bottom, top) sequentially, outputting a new vertex list according to the 4 edge intersection cases."
  },
  {
    id: 102010,
    test_id: 102,
    question: "In Computer Architecture, what is Flynn's classification category for standard modern multi-core processors running independent program instructions across separate data streams?",
    options: [
      "SISD (Single Instruction, Single Data)",
      "SIMD (Single Instruction, Multiple Data)",
      "MISD (Multiple Instruction, Single Data)",
      "MIMD (Multiple Instruction, Multiple Data)"
    ],
    correct_answer: 3,
    topic: "Computer System Architecture",
    difficulty: "Easy",
    concept: "Parallel Processing → Flynn's Classification (MIMD)",
    explanation: "MIMD (Multiple Instruction, Multiple Data) systems allow multiple asynchronous processing cores to execute distinct instruction sequences over separate datasets simultaneously."
  }
];
