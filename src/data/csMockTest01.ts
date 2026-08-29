import { Question } from '../types';

export const csMockTest01Questions: Question[] = [
  // --- UNIT 1: DISCRETE MATHEMATICS & OPTIMIZATION (Q1 - Q10) ---
  {
    id: 101001,
    test_id: 101,
    question: "Let G = (V, E) be a connected planar graph with v vertices, e edges, and f faces. If every face is bounded by at least 3 edges, which of the following is Euler's formula and the resulting inequality for planar graphs?",
    options: [
      "v - e + f = 2 and e <= 3v - 6",
      "v + e - f = 2 and e <= 2v - 4",
      "v - e + f = 1 and e <= 3v - 6",
      "v - e - f = 2 and e >= 3v - 6"
    ],
    correct_answer: 0,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Moderate",
    concept: "Graph Theory → Euler's Formula & Planar Graphs",
    explanation: "For any connected planar graph, Euler's formula states v - e + f = 2. Since each face is bounded by at least 3 edges and each edge borders at most 2 faces, 2e >= 3f. Substituting f = 2 - v + e yields 2e >= 3(2 - v + e) => 2e >= 6 - 3v + 3e => e <= 3v - 6."
  },
  {
    id: 101002,
    test_id: 101,
    question: "What is the number of reflexive and symmetric relations that can be defined on a set containing n elements?",
    options: [
      "2^(n^2)",
      "2^(n(n-1)/2)",
      "2^(n(n+1)/2)",
      "2^(n^2 - n)"
    ],
    correct_answer: 1,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Moderate",
    concept: "Set Theory & Relations → Counting Relations",
    explanation: "In an n x n relation matrix, reflexivity fixes the n diagonal elements to 1. For symmetry, elements above the main diagonal (n(n-1)/2 positions) determine the elements below. Therefore, there are 2^(n(n-1)/2) possible symmetric reflexive relations."
  },
  {
    id: 101003,
    test_id: 101,
    question: "The proposition (P -> Q) is logically equivalent to which of the following expressions?",
    options: [
      "~P \\/ Q",
      "P /\\ ~Q",
      "~Q -> ~P (Contrapositive)",
      "Both ~P \\/ Q and ~Q -> ~P"
    ],
    correct_answer: 3,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Easy",
    concept: "Propositional Logic → Material Implication & Contrapositive",
    explanation: "By definition of implication, (P -> Q) is equivalent to (~P \\/ Q). Furthermore, by the law of contrapositive, (P -> Q) is logically equivalent to (~Q -> ~P)."
  },
  {
    id: 101004,
    test_id: 101,
    question: "In Linear Programming Problem (LPP), if the primal problem has an unbounded optimal solution, what can be stated regarding the dual problem?",
    options: [
      "The dual problem has a unique bounded solution",
      "The dual problem is infeasible",
      "The dual problem is also unbounded",
      "The dual problem has multiple degenerate solutions"
    ],
    correct_answer: 1,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Moderate",
    concept: "Optimization & LPP → Duality Theorem",
    explanation: "By the Fundamental Duality Theorem of Linear Programming, if the primal objective function is unbounded, the dual feasible region is completely empty, meaning the dual problem is infeasible."
  },
  {
    id: 101005,
    test_id: 101,
    question: "What is the chromatic number of a complete bipartite graph K_{m, n}?",
    options: [
      "m + n",
      "2",
      "max(m, n)",
      "min(m, n)"
    ],
    correct_answer: 1,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Easy",
    concept: "Graph Theory → Vertex Coloring & Bipartite Graphs",
    explanation: "Any bipartite graph (including complete bipartite graph K_{m,n}) contains no odd cycles and can always be vertex-colored using exactly 2 colors (one color for all vertices in partition V1, and another for partition V2)."
  },
  {
    id: 101006,
    test_id: 101,
    question: "How many spanning trees exist in a complete graph K_n with n labeled vertices according to Cayley's formula?",
    options: [
      "n^(n-2)",
      "n^(n-1)",
      "2^(n-1) - 1",
      "n!"
    ],
    correct_answer: 0,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Easy",
    concept: "Combinatorics & Graph Theory → Cayley's Theorem",
    explanation: "Cayley's theorem states that for any complete graph K_n with n labeled vertices (n >= 2), the total number of distinct spanning trees is exactly n^(n-2)."
  },
  {
    id: 101007,
    test_id: 101,
    question: "Which of the following algebraic structures is a group that also satisfies the commutative property?",
    options: [
      "Monoid",
      "Semigroup",
      "Abelian Group",
      "Ring without unity"
    ],
    correct_answer: 2,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Easy",
    concept: "Group Theory → Abelian Group Definition",
    explanation: "An Abelian group (or commutative group) is an algebraic structure (G, *) satisfying Closure, Associativity, Identity element, Inverse for every element, and the Commutative property (a * b = b * a)."
  },
  {
    id: 101008,
    test_id: 101,
    question: "In Boolean algebra, what is the dual of the expression A + (B . C) = (A + B) . (A + C)?",
    options: [
      "A . (B + C) = (A . B) + (A . C)",
      "A + (B + C) = (A + B) + C",
      "A' . (B' + C') = (A' . B') + (A' . C')",
      "A . (B . C) = (A . B) . C"
    ],
    correct_answer: 0,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Easy",
    concept: "Boolean Algebra → Principle of Duality",
    explanation: "According to the principle of duality in Boolean algebra, any valid Boolean identity remains valid when AND (.) and OR (+) operators are interchanged, and 0 and 1 are interchanged."
  },
  {
    id: 101009,
    test_id: 101,
    question: "If a poset (L, <=) has the property that every pair of elements has a unique least upper bound (join) and greatest lower bound (meet), it is called a:",
    options: [
      "Totally ordered set",
      "Lattice",
      "Well-ordered set",
      "Boolean ring"
    ],
    correct_answer: 1,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Easy",
    concept: "Posets & Lattices → Definition of Lattice",
    explanation: "A partially ordered set (poset) in which every two elements have a unique least upper bound (supremum / join \\/) and a unique greatest lower bound (infimum / meet /\\) is called a Lattice."
  },
  {
    id: 101010,
    test_id: 101,
    question: "In the Simplex method for solving LPP, the entering variable into the basis is determined by selecting the non-basic variable with:",
    options: [
      "The most negative (or most positive for minimization) value of (C_j - Z_j)",
      "The minimum non-negative ratio of (X_B / y_ir)",
      "The highest coefficient in the objective function",
      "The smallest index in the constraint matrix"
    ],
    correct_answer: 0,
    topic: "Discrete Mathematics & Optimization",
    difficulty: "Moderate",
    concept: "Optimization & LPP → Simplex Optimality Criterion",
    explanation: "In a maximization LPP, the optimality condition evaluates (C_j - Z_j). The entering basic variable corresponds to the column with the most positive (or most negative depending on convention C_j - Z_j vs Z_j - C_j) net evaluation index."
  },

  // --- UNIT 2: COMPUTER SYSTEM ARCHITECTURE (Q11 - Q20) ---
  {
    id: 101011,
    test_id: 101,
    question: "In a 5-stage instruction pipeline with stages IF, ID, EX, MEM, WB, if a branch instruction is resolved at the EX stage, what is the branch penalty in terms of stalled clock cycles?",
    options: [
      "1 cycle",
      "2 cycles",
      "3 cycles",
      "4 cycles"
    ],
    correct_answer: 1,
    topic: "Computer System Architecture",
    difficulty: "Moderate",
    concept: "Pipelining → Branch Hazards & Penalty",
    explanation: "When a branch is evaluated in stage 3 (EX), the two instructions fetched during IF and ID stages behind the branch must be flushed if the branch is taken. Thus, the branch penalty is 2 clock cycles."
  },
  {
    id: 101012,
    test_id: 101,
    question: "A cache memory system has a hit ratio of 0.95. Cache access time is 2 ns, and main memory access time is 50 ns. What is the effective memory access time (EMAT)?",
    options: [
      "4.5 ns",
      "2.5 ns",
      "4.4 ns",
      "5.2 ns"
    ],
    correct_answer: 0,
    topic: "Computer System Architecture",
    difficulty: "Moderate",
    concept: "Memory Hierarchy → Cache EMAT Calculation",
    explanation: "EMAT = H * T_cache + (1 - H) * (T_cache + T_mem) = 0.95 * 2 + 0.05 * (2 + 50) = 1.9 + 0.05 * 52 = 1.9 + 2.6 = 4.5 ns (or 0.95 * 2 + 0.05 * 50 = 4.4 ns if concurrent lookup)."
  },
  {
    id: 101013,
    test_id: 101,
    question: "Which addressing mode is primarily used for relocating programs in memory at runtime and implementing relative branching?",
    options: [
      "Indexed Addressing Mode",
      "Program Counter (PC) Relative Addressing Mode",
      "Direct Addressing Mode",
      "Register Indirect Addressing Mode"
    ],
    correct_answer: 1,
    topic: "Computer System Architecture",
    difficulty: "Easy",
    concept: "Instruction Set Architecture → Addressing Modes",
    explanation: "PC-relative addressing calculates Effective Address = (PC) + Offset. Because the target address is relative to the current instruction pointer rather than absolute, it enables position-independent code and easy relocation."
  },
  {
    id: 101014,
    test_id: 101,
    question: "According to Amdahl's Law, if 75% of a program can be parallelized across an infinite number of processors, what is the maximum theoretical speedup achievable?",
    options: [
      "2.0",
      "3.0",
      "4.0",
      "8.0"
    ],
    correct_answer: 2,
    topic: "Computer System Architecture",
    difficulty: "Moderate",
    concept: "Parallel Architecture → Amdahl's Law",
    explanation: "Speedup = 1 / ((1 - P) + P/N). As N -> infinity, Speedup = 1 / (1 - P). For P = 0.75, Speedup = 1 / (1 - 0.75) = 1 / 0.25 = 4.0."
  },
  {
    id: 101015,
    test_id: 101,
    question: "In IEEE 754 single-precision 32-bit floating point representation, what are the number of bits allocated to Sign, Exponent, and Mantissa (fraction)?",
    options: [
      "Sign: 1, Exponent: 8, Mantissa: 23 (Bias = 127)",
      "Sign: 1, Exponent: 11, Mantissa: 20 (Bias = 1023)",
      "Sign: 2, Exponent: 7, Mantissa: 23 (Bias = 63)",
      "Sign: 1, Exponent: 9, Mantissa: 22 (Bias = 255)"
    ],
    correct_answer: 0,
    topic: "Computer System Architecture",
    difficulty: "Easy",
    concept: "Data Representation → IEEE 754 Standard",
    explanation: "IEEE 754 32-bit float uses 1 bit for sign, 8 bits for biased exponent (with excess-127 representation), and 23 bits for normalized significand (mantissa)."
  },
  {
    id: 101016,
    test_id: 101,
    question: "What type of hazard occurs when an instruction requires the result of a previous instruction that has not yet completed execution (e.g. Read-After-Write)?",
    options: [
      "Structural Hazard",
      "Data Hazard (RAW)",
      "Control Hazard",
      "Interrupt Hazard"
    ],
    correct_answer: 1,
    topic: "Computer System Architecture",
    difficulty: "Easy",
    concept: "Pipelining → Pipeline Hazards",
    explanation: "A Data Hazard (specifically Read-After-Write or RAW / True Dependency) happens when an instruction depends on the result of an earlier instruction before that result is written to registers."
  },
  {
    id: 101017,
    test_id: 101,
    question: "In a Direct-Mapped cache, a 32-bit memory address is partitioned into Tag, Set Index, and Byte Offset. If cache size is 64 KB and block size is 16 bytes, how many bits are used for the Set Index?",
    options: [
      "12 bits",
      "14 bits",
      "16 bits",
      "10 bits"
    ],
    correct_answer: 0,
    topic: "Computer System Architecture",
    difficulty: "Moderate",
    concept: "Cache Memory → Direct Mapping Address Fields",
    explanation: "Number of cache lines/sets = Cache Size / Block Size = 64 KB / 16 B = 2^16 / 2^4 = 2^12 lines = 4096 sets. Thus, Set Index = log2(2^12) = 12 bits. Block offset = log2(16) = 4 bits. Tag = 32 - 12 - 4 = 16 bits."
  },
  {
    id: 101018,
    test_id: 101,
    question: "Which of the following DMA transfer modes transfers an entire block of data by holding the system bus until completion?",
    options: [
      "Cycle Stealing Mode",
      "Burst Transfer Mode (Block Mode)",
      "Transparent DMA Mode",
      "Demand Transfer Mode"
    ],
    correct_answer: 1,
    topic: "Computer System Architecture",
    difficulty: "Easy",
    concept: "Input-Output & DMA → DMA Transfer Modes",
    explanation: "In Burst (Block) Transfer Mode, once the DMA controller gains control of the system bus, it transfers the entire block of data continuously without releasing the bus to the CPU until the complete block transfer is finished."
  },
  {
    id: 101019,
    test_id: 101,
    question: "What is the primary function of the Program Status Word (PSW) register in a CPU?",
    options: [
      "Holds the memory address of the next instruction to fetch",
      "Stores condition code flags (Zero, Carry, Sign, Overflow) and CPU status bits",
      "Stores microcode instructions inside the control unit",
      "Controls the refresh cycle of dynamic RAM"
    ],
    correct_answer: 1,
    topic: "Computer System Architecture",
    difficulty: "Easy",
    concept: "CPU Architecture → Special Function Registers",
    explanation: "The Program Status Word (PSW) register contains status flags generated by ALU operations (Zero, Sign, Parity, Carry, Overflow) and mode control bits (Interrupt Enable, User/Supervisor mode)."
  },
  {
    id: 101020,
    test_id: 101,
    question: "Which microprogrammed control unit design generates control signals directly with single-bit flags without decoding logic?",
    options: [
      "Vertical Microprogramming",
      "Horizontal Microprogramming",
      "Nanoprogramming",
      "Hardwired Control"
    ],
    correct_answer: 1,
    topic: "Computer System Architecture",
    difficulty: "Moderate",
    concept: "Control Unit Design → Microprogramming Types",
    explanation: "In Horizontal Microprogramming, each control signal is represented by an individual unencoded bit in the control word, allowing maximum parallelism with zero decode delay (at the cost of wider control store words)."
  },

  // --- UNIT 3: PROGRAMMING LANGUAGES & COMPUTER GRAPHICS (Q21 - Q30) ---
  {
    id: 101021,
    test_id: 101,
    question: "In C/C++, what is the output of the following pointer arithmetic expression assuming integer size is 4 bytes: int a[5] = {10, 20, 30, 40, 50}; int *p = a; *(p + 3);",
    options: [
      "10",
      "30",
      "40",
      "Memory Address of 40"
    ],
    correct_answer: 2,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "C/C++ Programming → Pointer Arithmetic & Arrays",
    explanation: "p points to a[0] (value 10). (p + 3) points to index 3 in the array, which is a[3] = 40. Dereferencing *(p + 3) gives the value 40."
  },
  {
    id: 101022,
    test_id: 101,
    question: "Which parameter passing mechanism evaluates the argument every time it is referenced inside the called function body (Lazy Evaluation / Thunks)?",
    options: [
      "Call by Value",
      "Call by Reference",
      "Call by Name",
      "Call by Value-Result"
    ],
    correct_answer: 2,
    topic: "Programming Languages & CG",
    difficulty: "Moderate",
    concept: "Programming Paradigms → Parameter Passing Semantics",
    explanation: "Call by Name (used in Algol 60) substitutes the text of the argument into the function body and re-evaluates it each time it is accessed using compiler-generated thunks."
  },
  {
    id: 101023,
    test_id: 101,
    question: "In 2D Computer Graphics transformations, what is the 3x3 homogeneous transformation matrix for 2D translation by (dx, dy)?",
    options: [
      "[[1, 0, dx], [0, 1, dy], [0, 0, 1]]",
      "[[dx, 0, 0], [0, dy, 0], [0, 0, 1]]",
      "[[cos θ, -sin θ, 0], [sin θ, cos θ, 0], [0, 0, 1]]",
      "[[1, dx, 0], [dy, 1, 0], [0, 0, 1]]"
    ],
    correct_answer: 0,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "Computer Graphics → 2D Homogeneous Transformations",
    explanation: "Homogeneous coordinates express 2D translation as a matrix multiplication: [x', y', 1]^T = [[1, 0, dx], [0, 1, dy], [0, 0, 1]] * [x, y, 1]^T = [x + dx, y + dy, 1]^T."
  },
  {
    id: 101024,
    test_id: 101,
    question: "In the Cohen-Sutherland line clipping algorithm, if the bitwise AND of the 4-bit region outcodes of both endpoints of a line segment is NON-ZERO, the line is:",
    options: [
      "Completely inside the viewport (Trivially Accepted)",
      "Completely outside the viewport (Trivially Rejected)",
      "Partially inside and needs clipping calculation",
      "Degenerate into a single pixel"
    ],
    correct_answer: 1,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "Computer Graphics → Cohen-Sutherland Line Clipping",
    explanation: "If (code1 & code2) != 0, it indicates both endpoints lie on the same exterior side of the bounding window (e.g. both to the Left, Right, Top, or Bottom), so the segment is trivially rejected."
  },
  {
    id: 101025,
    test_id: 101,
    question: "Which line drawing algorithm uses only fast integer additions and subtractions without any floating-point multiplications or divisions?",
    options: [
      "DDA Line Drawing Algorithm",
      "Bresenham's Line Drawing Algorithm",
      "Midpoint Sub-division Algorithm",
      "Cyrus-Beck Algorithm"
    ],
    correct_answer: 1,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "Computer Graphics → Bresenham's Rasterization Algorithm",
    explanation: "Bresenham's line algorithm uses decision parameters d_k evaluated incrementally using only integer additions and bit-shifts, avoiding floating-point roundoff errors and expensive division."
  },
  {
    id: 101026,
    test_id: 101,
    question: "In Object-Oriented Programming, what is the term for defining multiple functions with the same name but different signatures within the same scope?",
    options: [
      "Function Overriding (Dynamic Polymorphism)",
      "Function Overloading (Compile-time Polymorphism)",
      "Encapsulation",
      "Multiple Inheritance"
    ],
    correct_answer: 1,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "OOP Concepts → Function Overloading vs Overriding",
    explanation: "Function Overloading is compile-time (static) polymorphism where multiple functions in the same class share the exact name but differ in their parameter types or argument counts."
  },
  {
    id: 101027,
    test_id: 101,
    question: "Which of the following is a pure functional programming language featuring lazy evaluation, referential transparency, and strong static typing?",
    options: [
      "Haskell",
      "Java",
      "Python",
      "C++"
    ],
    correct_answer: 0,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "Programming Paradigms → Functional Programming",
    explanation: "Haskell is a standardized, purely functional programming language with non-strict (lazy) evaluation, algebraic data types, and referential transparency."
  },
  {
    id: 101028,
    test_id: 101,
    question: "In 3D computer graphics illumination models, the Phong reflection model calculates total light intensity as the sum of which three components?",
    options: [
      "Ambient, Diffuse, and Specular reflection",
      "Primary, Secondary, and Tertiary scattering",
      "Direct, Indirect, and Shadow luminescence",
      "Refractive, Transmissive, and Emissive rays"
    ],
    correct_answer: 0,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "Computer Graphics → Illumination & Shading Models",
    explanation: "The Phong illumination model computes pixel intensity as: I = I_ambient * k_a + I_diffuse * k_d * (N . L) + I_specular * k_s * (R . V)^n."
  },
  {
    id: 101029,
    test_id: 101,
    question: "What is the degree of a Bézier curve defined by n + 1 control points?",
    options: [
      "n - 1",
      "n",
      "n + 1",
      "2n"
    ],
    correct_answer: 1,
    topic: "Programming Languages & CG",
    difficulty: "Moderate",
    concept: "Computer Graphics → Bézier Curves & Bernstein Polynomials",
    explanation: "A Bézier curve with n + 1 control points (P0, P1, ..., Pn) uses Bernstein basis polynomials of degree n. Therefore, its polynomial degree is n."
  },
  {
    id: 101030,
    test_id: 101,
    question: "In C++, which keyword is used in a base class method declaration to enable runtime dynamic dispatch (late binding) in derived classes?",
    options: [
      "static",
      "virtual",
      "inline",
      "friend"
    ],
    correct_answer: 1,
    topic: "Programming Languages & CG",
    difficulty: "Easy",
    concept: "C++ OOP → Virtual Functions & VTABLE",
    explanation: "The `virtual` keyword tells the compiler to use dynamic dispatch (via vptr and vtable) so that the derived class override is invoked at runtime through a base class pointer or reference."
  },

  // --- UNIT 4: DATABASE MANAGEMENT SYSTEMS (Q31 - Q40) ---
  {
    id: 101031,
    test_id: 101,
    question: "A relation R(A, B, C, D) has Functional Dependencies: {A -> B, B -> C, C -> D, D -> A}. What is the highest normal form satisfied by relation R?",
    options: [
      "1NF only",
      "2NF only",
      "3NF only",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    correct_answer: 3,
    topic: "Database Management Systems",
    difficulty: "Moderate",
    concept: "Database Normalization → BCNF & Candidate Keys",
    explanation: "Candidate keys of R are A, B, C, and D. Since the left-hand side of every non-trivial functional dependency (A, B, C, D) is a superkey, R satisfies BCNF."
  },
  {
    id: 101032,
    test_id: 101,
    question: "In database transaction processing, which property ensures that once a transaction commits, its updates persist in the database even in the event of a system crash?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correct_answer: 3,
    topic: "Database Management Systems",
    difficulty: "Easy",
    concept: "Transaction Processing → ACID Properties",
    explanation: "Durability (managed by recovery management and write-ahead WAL logging) guarantees that committed transaction changes are permanently written to non-volatile storage and survive crashes."
  },
  {
    id: 101033,
    test_id: 101,
    question: "Which of the following schedules is guaranteed to prevent cascading rollbacks (cascadeless)?",
    options: [
      "A schedule where for each pair of transactions Ti and Tj such that Tj reads a data item written by Ti, the commit operation of Ti appears before the read operation of Tj",
      "A schedule that is conflict serializable",
      "A schedule where every transaction holds strict locks until end-of-transaction",
      "Both A and C"
    ],
    correct_answer: 3,
    topic: "Database Management Systems",
    difficulty: "Moderate",
    concept: "Concurrency Control → Cascadeless Schedules",
    explanation: "A schedule is cascadeless if no transaction reads uncommitted data written by another transaction (reading only after the writing transaction commits). Strict 2PL naturally enforces cascadelessness."
  },
  {
    id: 101034,
    test_id: 101,
    question: "In Relational Algebra, which operator is equivalent to the SQL clause: SELECT DISTINCT department_id FROM Employee WHERE salary > 50000?",
    options: [
      "pi_{department_id} (sigma_{salary > 50000} (Employee))",
      "sigma_{department_id} (pi_{salary > 50000} (Employee))",
      "gamma_{department_id} (Employee)",
      "rho_{department_id} (Employee)"
    ],
    correct_answer: 0,
    topic: "Database Management Systems",
    difficulty: "Easy",
    concept: "Relational Algebra → Selection & Projection",
    explanation: "Selection (sigma) filters rows based on predicate salary > 50000, and Projection (pi) extracts specified columns (department_id) with duplicate elimination."
  },
  {
    id: 101035,
    test_id: 101,
    question: "In a B+ Tree of order p (maximum pointer capacity per node), what is the minimum number of keys in any non-root internal node?",
    options: [
      "ceil(p/2) - 1",
      "floor(p/2)",
      "p - 1",
      "ceil((p - 1)/2)"
    ],
    correct_answer: 0,
    topic: "Database Management Systems",
    difficulty: "Moderate",
    concept: "File Indexing → B+ Tree Structure & Node Capacities",
    explanation: "In a B+ tree of order p, every internal node (except the root) must have at least ceil(p/2) children pointers, which corresponds to at least ceil(p/2) - 1 search keys."
  },
  {
    id: 101036,
    test_id: 101,
    question: "What is the result of the SQL expression: SELECT NULL = NULL, NULL IS NULL, NULL + 50?",
    options: [
      "TRUE, TRUE, 50",
      "UNKNOWN (NULL), TRUE, NULL",
      "FALSE, TRUE, 50",
      "NULL, FALSE, 0"
    ],
    correct_answer: 1,
    topic: "Database Management Systems",
    difficulty: "Moderate",
    concept: "SQL Three-Valued Logic → NULL Semantics",
    explanation: "In SQL three-valued logic, equality comparison `NULL = NULL` yields UNKNOWN (NULL). The predicate `NULL IS NULL` is TRUE. Any arithmetic expression with NULL (e.g. `NULL + 50`) evaluates to NULL."
  },
  {
    id: 101037,
    test_id: 101,
    question: "In ER Modeling, how is a Weak Entity set with identifying owner entity set mapped into a relational schema?",
    options: [
      "Table with only its partial key as primary key",
      "Table containing its partial key along with the primary key of the identifying strong entity as composite primary key",
      "Single column foreign key table",
      "Cannot be converted into relational tables"
    ],
    correct_answer: 1,
    topic: "Database Management Systems",
    difficulty: "Easy",
    concept: "ER Model → Weak Entity Schema Mapping",
    explanation: "A weak entity does not possess sufficient attributes to form a primary key. It is mapped to a table whose primary key is the composite of the identifying strong entity's primary key (foreign key) and the weak entity's partial discriminator key."
  },
  {
    id: 101038,
    test_id: 101,
    question: "Which of the following lock conversion protocols prevents deadlocks by testing timestamps of requesting and data-holding transactions (Wait-Die vs Wound-Wait)?",
    options: [
      "Two-Phase Locking (2PL)",
      "Timestamp Ordering Protocol",
      "Wait-Die (Non-preemptive) & Wound-Wait (Preemptive)",
      "Optimistic Concurrency Control"
    ],
    correct_answer: 2,
    topic: "Database Management Systems",
    difficulty: "Moderate",
    concept: "Concurrency Control → Deadlock Prevention Schemes",
    explanation: "Wait-Die and Wound-Wait use transaction birth timestamps to prevent deadlocks: in Wait-Die, older transactions wait while younger die; in Wound-Wait, older transactions wound (preempt/rollback) younger ones."
  },
  {
    id: 101039,
    test_id: 101,
    question: "A lossless-join decomposition of relation R into R1 and R2 requires that:",
    options: [
      "(R1 \\cap R2) -> R1 or (R1 \\cap R2) -> R2",
      "(R1 \\cup R2) = R only",
      "R1 and R2 must have no common attributes",
      "R1 must be in BCNF and R2 in 3NF"
    ],
    correct_answer: 0,
    topic: "Database Management Systems",
    difficulty: "Easy",
    concept: "Normalization → Lossless Join Decomposition Condition",
    explanation: "Decomposition of R into R1 and R2 is lossless-join if and only if the intersection of their attributes (R1 \\cap R2) functionally determines at least one of the decomposed schemas ((R1 \\cap R2) -> R1 or (R1 \\cap R2) -> R2)."
  },
  {
    id: 101040,
    test_id: 101,
    question: "In Data Warehousing, which schema consists of a centralized fact table connected directly to multiple dimension tables without normalized dimension hierarchies?",
    options: [
      "Snowflake Schema",
      "Star Schema",
      "Fact Constellation Schema",
      "Galaxy Schema"
    ],
    correct_answer: 1,
    topic: "Database Management Systems",
    difficulty: "Easy",
    concept: "Data Warehousing → Star vs Snowflake Schema",
    explanation: "The Star Schema connects a single central fact table directly to de-normalized radial dimension tables, whereas Snowflake Schema normalizes dimension tables into multiple sub-tables."
  },

  // --- UNIT 5: OPERATING SYSTEMS & SYSTEM SOFTWARE (Q41 - Q50) ---
  {
    id: 101041,
    test_id: 101,
    question: "Which CPU scheduling algorithm is mathematically proven to produce the minimum average waiting time for a given set of stationary processes?",
    options: [
      "First-Come, First-Served (FCFS)",
      "Shortest Job First (SJF / Shortest Remaining Time First)",
      "Round Robin (RR)",
      "Priority Scheduling"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "CPU Scheduling → Shortest Job First Optimality",
    explanation: "Shortest Job First (SJF) scheduling is optimal because moving a shorter job before a longer job reduces the waiting time of the shorter process more than it increases the waiting time of the longer process."
  },
  {
    id: 101042,
    test_id: 101,
    question: "Consider a system with 5 processes (P0-P4) and 3 resource types (A: 10, B: 5, C: 7). Which algorithm is executed by the OS to detect whether the system is in a Safe State?",
    options: [
      "Dekker's Algorithm",
      "Banker's Safety Algorithm",
      "Peterson's Algorithm",
      "Lamport's Bakery Algorithm"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "Deadlock Handling → Banker's Algorithm",
    explanation: "Dijkstra's Banker's Algorithm verifies whether a safe execution sequence exists by evaluating Work = Available and Need <= Work vectors to avoid deadlocks."
  },
  {
    id: 101043,
    test_id: 101,
    question: "Belady's Anomaly (where increasing the number of page frames results in an INCREASE in the number of page faults) can occur in which page replacement algorithm?",
    options: [
      "Optimal Page Replacement (OPT)",
      "Least Recently Used (LRU)",
      "First-In, First-Out (FIFO)",
      "Counting-based LFU"
    ],
    correct_answer: 2,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "Virtual Memory → Belady's Anomaly & Stack Algorithms",
    explanation: "FIFO is not a stack algorithm and can suffer from Belady's Anomaly. In contrast, stack algorithms like LRU and OPT satisfy the inclusion property (P(N) subset P(N+1)) and never exhibit Belady's Anomaly."
  },
  {
    id: 101044,
    test_id: 101,
    question: "In a 32-bit virtual address architecture with 4 KB page size, if each page table entry takes 4 bytes, what is the size of a single-level page table?",
    options: [
      "1 MB",
      "4 MB",
      "2 MB",
      "512 KB"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Moderate",
    concept: "Memory Management → Page Table Size Calculation",
    explanation: "Page size = 4 KB = 2^12 bytes. Number of pages = 2^32 / 2^12 = 2^20 pages. Page table size = (Number of pages) * (Entry size) = 2^20 * 4 bytes = 4 MB."
  },
  {
    id: 101045,
    test_id: 101,
    question: "What are the four necessary and sufficient Coffman conditions for a deadlock to occur in an operating system?",
    options: [
      "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
      "Starvation, Thrashing, Race Condition, Busy Waiting",
      "Aging, Paging, Segmentation, Swapping",
      "Interruption, Polling, DMA, Context Switching"
    ],
    correct_answer: 0,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "Deadlock → Four Coffman Conditions",
    explanation: "Deadlock can occur if and only if all four Coffman conditions hold simultaneously: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, and 4. Circular Wait."
  },
  {
    id: 101046,
    test_id: 101,
    question: "In UNIX/Linux, what is the effect of calling the `fork()` system call?",
    options: [
      "Replaces the current process with an entirely new executable binary image",
      "Creates a new duplicate child process with identical address space copy",
      "Terminates the parent process immediately",
      "Allocates shared memory between unrelated processes"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "UNIX Process Management → fork() vs exec()",
    explanation: "`fork()` creates a new child process which is an exact duplicate of the calling parent process (with its own PCB, memory copy-on-write, and distinct PID), returning 0 to the child and child's PID to the parent."
  },
  {
    id: 101047,
    test_id: 101,
    question: "Which synchronization primitive consists of an integer variable accessed only through atomic `wait()` (P) and `signal()` (V) operations?",
    options: [
      "Spinlock",
      "Semaphore",
      "Condition Variable",
      "Message Queue"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "Process Synchronization → Dijkstra's Semaphores",
    explanation: "A Semaphore is an integer synchronization variable accessed exclusively through atomic `wait()` / P (decrements and blocks if <= 0) and `signal()` / V (increments and unblocks)."
  },
  {
    id: 101048,
    test_id: 101,
    question: "What is 'Thrashing' in an operating system with virtual memory?",
    options: [
      "High CPU utilization caused by infinite computational loops",
      "Excessive page swapping activity where the system spends more time servicing page faults than executing user instructions",
      "Deadlock among disk read/write heads",
      "Memory fragmentation inside small pages"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "Virtual Memory → Thrashing & Working Set Model",
    explanation: "Thrashing occurs when the sum of working set sizes across all active processes exceeds total physical memory frames, causing continuous page faults and near-zero CPU throughput."
  },
  {
    id: 101049,
    test_id: 101,
    question: "In two-pass assembler design, what is the primary responsibility of Pass 1?",
    options: [
      "Generate machine object code and binary instructions",
      "Build the Symbol Table (SYMTAB) and assign location counter addresses to all labels",
      "Resolve external library references",
      "Perform runtime memory relocation"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Moderate",
    concept: "System Software → Two-Pass Assembler Architecture",
    explanation: "Pass 1 scans source code, increments the Location Counter (LC), and records every identifier/label along with its resolved memory address into the Symbol Table (SYMTAB). Pass 2 generates object code."
  },
  {
    id: 101050,
    test_id: 101,
    question: "Which disk scheduling algorithm moves the read/write head from one end of the disk to the other servicing requests, then immediately returns to the start without servicing on the return trip?",
    options: [
      "SCAN (Elevator Algorithm)",
      "C-SCAN (Circular SCAN)",
      "LOOK",
      "SSTF (Shortest Seek Time First)"
    ],
    correct_answer: 1,
    topic: "Operating Systems & System Software",
    difficulty: "Easy",
    concept: "Storage & Disk Scheduling → C-SCAN Algorithm",
    explanation: "C-SCAN (Circular SCAN) sweeps across the disk servicing requests in one direction, then immediately jumps back to the beginning without servicing requests on the return journey, providing a more uniform wait time distribution."
  },

  // --- UNIT 6: SOFTWARE ENGINEERING (Q51 - Q60) ---
  {
    id: 101051,
    test_id: 101,
    question: "In the Basic COCOMO model, effort in Person-Months (PM) is calculated as: Effort = a * (KLOC)^b. For an Embedded software project, what are the characteristic values of 'a' and 'b' compared to Organic projects?",
    options: [
      "Higher 'a' and higher 'b' exponent (a = 3.6, b = 1.20)",
      "Lower 'a' and lower 'b' exponent (a = 2.4, b = 1.05)",
      "a = 1.0, b = 1.0 (Linear scaling)",
      "Effort is independent of KLOC in embedded systems"
    ],
    correct_answer: 0,
    topic: "Software Engineering",
    difficulty: "Moderate",
    concept: "Software Estimation → COCOMO Model Modes",
    explanation: "Embedded projects operate under strict hardware/software constraints and tight coupling, resulting in highest complexity constants (a = 3.6, b = 1.20) compared to Organic (2.4, 1.05) and Semi-detached (3.0, 1.12)."
  },
  {
    id: 101052,
    test_id: 101,
    question: "What is McCabe's Cyclomatic Complexity V(G) for a program control flow graph with E edges, N nodes, and P connected components?",
    options: [
      "V(G) = E - N + 2P",
      "V(G) = E + N - P",
      "V(G) = N - E + 2",
      "V(G) = E / N * P"
    ],
    correct_answer: 0,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Software Testing & Metrics → Cyclomatic Complexity Formula",
    explanation: "McCabe's Cyclomatic Complexity formula is V(G) = E - N + 2P (or V(G) = Predicate Nodes + 1 for single-component flow graphs), measuring the number of linearly independent execution paths."
  },
  {
    id: 101053,
    test_id: 101,
    question: "In software module coupling hierarchy, which type of coupling is the most desirable (loose coupling)?",
    options: [
      "Content Coupling (Worst)",
      "Common Coupling",
      "Control Coupling",
      "Data Coupling (Best)"
    ],
    correct_answer: 3,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Software Design Principles → Coupling Hierarchy",
    explanation: "Data Coupling is the weakest (best/most desirable) form of coupling where modules communicate solely by passing homogeneous, primitive data parameters without shared control or data structures."
  },
  {
    id: 101054,
    test_id: 101,
    question: "In software cohesion hierarchy, which type of cohesion represents a module where all elements contribute to the execution of a single, well-defined task (highest cohesion)?",
    options: [
      "Coincidental Cohesion (Worst)",
      "Logical Cohesion",
      "Temporal Cohesion",
      "Functional Cohesion (Best)"
    ],
    correct_answer: 3,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Software Design Principles → Cohesion Hierarchy",
    explanation: "Functional Cohesion is the strongest and most desirable form of cohesion, wherein every part of the module is directed towards performing one single, well-focused functional operation (e.g. `computeSquareRoot()`)."
  },
  {
    id: 101055,
    test_id: 101,
    question: "Which software testing technique partitions the input domain into equivalent classes such that a single test case represents all values in that partition?",
    options: [
      "Equivalence Partitioning & Boundary Value Analysis (BVA)",
      "Basis Path Testing",
      "Data Flow Testing",
      "Mutation Testing"
    ],
    correct_answer: 0,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Black Box Testing → Equivalence Class Partitioning",
    explanation: "Equivalence Partitioning is a black-box test design technique that divides input data into valid and invalid partitions from which test cases are derived, complemented by Boundary Value Analysis (testing min, min+1, max-1, max)."
  },
  {
    id: 101056,
    test_id: 101,
    question: "In the Spiral Model of software development introduced by Barry Boehm, what is the central driving activity executed in every quadrant/iteration?",
    options: [
      "Rapid GUI Prototyping",
      "Explicit Risk Analysis and Management",
      "Code Refactoring",
      "Formal Proof of Correctness"
    ],
    correct_answer: 1,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Process Models → Boehm's Spiral Model",
    explanation: "The hallmark characteristic of the Spiral Model is continuous, proactive risk identification, evaluation, and mitigation at each spiral loop across all 4 quadrants."
  },
  {
    id: 101057,
    test_id: 101,
    question: "What is the primary objective of Regression Testing?",
    options: [
      "Test software performance under extreme user loads",
      "Ensure that new code modifications, bug fixes, or features have not adversely affected existing functional behavior",
      "Verify user acceptance during beta release",
      "Measure code cyclomatic complexity"
    ],
    correct_answer: 1,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Software Testing → Regression Testing Purpose",
    explanation: "Regression testing re-executes existing test suites following code modifications or refactoring to verify that unintended side effects or regression defects have not been introduced."
  },
  {
    id: 101058,
    test_id: 101,
    question: "In Agile methodology (Scrum), what is the time-boxed meeting held at the end of a sprint where the team reflects on process improvements?",
    options: [
      "Daily Standup",
      "Sprint Planning",
      "Sprint Retrospective",
      "Backlog Grooming"
    ],
    correct_answer: 2,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Agile & Scrum → Scrum Ceremonies",
    explanation: "The Sprint Retrospective occurs after the Sprint Review, providing dedicated time for the Scrum team to inspect what went well, what problems arose, and how to improve processes in the next sprint."
  },
  {
    id: 101059,
    test_id: 101,
    question: "In Capability Maturity Model Integration (CMMI), at which level are processes quantitatively measured, controlled, and monitored using statistical techniques?",
    options: [
      "Level 2 (Managed)",
      "Level 3 (Defined)",
      "Level 4 (Quantitatively Managed)",
      "Level 5 (Optimizing)"
    ],
    correct_answer: 2,
    topic: "Software Engineering",
    difficulty: "Moderate",
    concept: "Quality Assurance → CMMI Maturity Levels",
    explanation: "At CMMI Level 4 (Quantitatively Managed), organizations establish quantitative metrics for process quality and performance, managing variation using statistical and quantitative techniques."
  },
  {
    id: 101060,
    test_id: 101,
    question: "Which architectural design pattern separates an application into Model (data logic), View (UI layout), and Controller (event handling)?",
    options: [
      "Model-View-Controller (MVC)",
      "Singleton Pattern",
      "Factory Pattern",
      "Observer Pattern"
    ],
    correct_answer: 0,
    topic: "Software Engineering",
    difficulty: "Easy",
    concept: "Software Design Patterns → Architectural MVC Pattern",
    explanation: "MVC is an architectural design pattern that isolates application domain logic (Model) from user interface presentation (View) and user input routing (Controller)."
  },

  // --- UNIT 7: DATA STRUCTURES & ALGORITHMS (Q61 - Q70) ---
  {
    id: 101061,
    test_id: 101,
    question: "What is the worst-case and average-case time complexity of QuickSort on an array of n elements when using the standard deterministic pivot?",
    options: [
      "Worst-case: O(n log n), Average-case: O(n log n)",
      "Worst-case: O(n^2), Average-case: O(n log n)",
      "Worst-case: O(n^2), Average-case: O(n^2)",
      "Worst-case: O(n), Average-case: O(n log n)"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Sorting Algorithms → QuickSort Complexity Analysis",
    explanation: "In QuickSort, if the chosen pivot consistently splits the array in an unbalanced 0 : n-1 ratio (e.g. already sorted array with last element pivot), recurrence is T(n) = T(n-1) + O(n) => O(n^2). Average case yields balanced partitions => O(n log n)."
  },
  {
    id: 101062,
    test_id: 101,
    question: "In an AVL Tree, what is the valid range for the Balance Factor (Height of Left Subtree - Height of Right Subtree) of any node?",
    options: [
      "{-1, 0, 1}",
      "{0, 1, 2}",
      "{-2, 0, 2}",
      "{0}"
    ],
    correct_answer: 0,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Tree Data Structures → AVL Tree Balance Factor",
    explanation: "An AVL tree is a self-balancing binary search tree where the balance factor BF(node) = height(left) - height(right) must strictly lie in {-1, 0, +1} for every node."
  },
  {
    id: 101063,
    test_id: 101,
    question: "What is the minimum number of comparisons required in the worst-case to find BOTH the maximum and minimum elements in an array of n elements?",
    options: [
      "2n - 2",
      "ceil(3n/2) - 2",
      "n log n",
      "n - 1"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Moderate",
    concept: "Divide and Conquer → Min-Max Tournament Method",
    explanation: "By pairing elements and comparing the larger against current max and smaller against current min, both min and max can be found using exactly 3n/2 - 2 comparisons (for even n) or 3(n-1)/2 (for odd n)."
  },
  {
    id: 101064,
    test_id: 101,
    question: "Using the Master Theorem, what is the asymptotic solution to the recurrence relation: T(n) = 2T(n/2) + O(n)?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(log n)"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Algorithm Analysis → Master Theorem Case 2",
    explanation: "Here a = 2, b = 2, f(n) = n. Since log_b(a) = log2(2) = 1, f(n) = Theta(n^(log_b a)) = Theta(n^1). According to Master Theorem Case 2, T(n) = Theta(n^(log_b a) * log n) = Theta(n log n)."
  },
  {
    id: 101065,
    test_id: 101,
    question: "Dijkstra's Single Source Shortest Path algorithm fails to produce correct results on graphs containing:",
    options: [
      "Directed cycles",
      "Negative edge weights",
      "Multiple connected components",
      "Self loops"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Graph Algorithms → Dijkstra vs Bellman-Ford",
    explanation: "Dijkstra's greedy choice assumes that adding an edge can never decrease the total path cost (monotonically non-decreasing). Negative edge weights violate this assumption; Bellman-Ford algorithm must be used instead."
  },
  {
    id: 101066,
    test_id: 101,
    question: "What is the time complexity of the 0/1 Knapsack problem with n items and capacity W solved via Dynamic Programming?",
    options: [
      "O(n log n)",
      "O(n * W) (Pseudo-polynomial time)",
      "O(2^n)",
      "O(n^2)"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Moderate",
    concept: "Dynamic Programming → 0/1 Knapsack Complexity",
    explanation: "The dynamic programming table has dimensions (n + 1) x (W + 1), requiring O(n * W) computations. Because W is represented in O(log W) bits, O(n * W) is pseudo-polynomial."
  },
  {
    id: 101067,
    test_id: 101,
    question: "Which collision resolution technique in hash tables stores all collided key-value elements in a linked list attached to the corresponding bucket array slot?",
    options: [
      "Linear Probing",
      "Quadratic Probing",
      "Separate Chaining (Open Hashing)",
      "Double Hashing"
    ],
    correct_answer: 2,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Hashing → Separate Chaining vs Open Addressing",
    explanation: "Separate Chaining maintains an auxiliary linked list (or balanced tree) at each bucket index to store all records that hash to the same bucket."
  },
  {
    id: 101068,
    test_id: 101,
    question: "How many distinct Binary Search Trees (BSTs) can be constructed from n distinct keys?",
    options: [
      "n!",
      "2^n - n",
      "Catalan Number C_n = (1 / (n + 1)) * (2n choose n)",
      "n^(n-2)"
    ],
    correct_answer: 2,
    topic: "Data Structures & Algorithms",
    difficulty: "Moderate",
    concept: "Trees & Combinatorics → Catalan Number BST Counting",
    explanation: "The number of structurally unique BSTs formed by n distinct keys is given by the n-th Catalan number: C_n = (2n)! / ((n + 1)! * n!)."
  },
  {
    id: 101069,
    test_id: 101,
    question: "In a min-heap with n elements, what is the time complexity to insert a new element and extract the minimum element respectively?",
    options: [
      "Insert: O(log n), Extract-Min: O(log n)",
      "Insert: O(1), Extract-Min: O(n)",
      "Insert: O(n), Extract-Min: O(1)",
      "Insert: O(log n), Extract-Min: O(1)"
    ],
    correct_answer: 0,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Heap Data Structures → Binary Heap Operations",
    explanation: "Insertion appends at the bottom and percollates up (O(log n)). Extract-min replaces the root with the last leaf and sift-down heapifies (O(log n))."
  },
  {
    id: 101070,
    test_id: 101,
    question: "Which algorithm finds the Minimum Spanning Tree (MST) of a connected, weighted graph by maintaining disjoint sets of vertices and greedily adding the smallest weight edge that does not form a cycle?",
    options: [
      "Prim's Algorithm",
      "Kruskal's Algorithm",
      "Floyd-Warshall Algorithm",
      "Kosaraju's Algorithm"
    ],
    correct_answer: 1,
    topic: "Data Structures & Algorithms",
    difficulty: "Easy",
    concept: "Greedy Algorithms → Kruskal's MST Algorithm",
    explanation: "Kruskal's algorithm sorts all edges in non-decreasing order of weight and uses Disjoint Set Union-Find (DSU) data structure to greedily add edges that bridge separate trees without creating cycles."
  },

  // --- UNIT 8: THEORY OF COMPUTATION & COMPILERS (Q71 - Q80) ---
  {
    id: 101071,
    test_id: 101,
    question: "According to Chomsky's hierarchy, which class of formal grammars is accepted by Pushdown Automata (PDA)?",
    options: [
      "Type-3: Regular Grammars",
      "Type-2: Context-Free Grammars (CFG)",
      "Type-1: Context-Sensitive Grammars (CSG)",
      "Type-0: Unrestricted Grammars"
    ],
    correct_answer: 1,
    topic: "Theory of Computation & Compilers",
    difficulty: "Easy",
    concept: "Automata & Chomsky Hierarchy → Context-Free Languages & PDA",
    explanation: "Chomsky Type-2 Context-Free Languages (CFL) are recognized by Non-Deterministic Pushdown Automata (NPDA). Type-3 is DFA/NFA, Type-1 is Linear Bounded Automata, Type-0 is Turing Machine."
  },
  {
    id: 101072,
    test_id: 101,
    question: "Which of the following problems is provably undecidable for Turing Machines?",
    options: [
      "Membership problem for Regular Languages (w in L(M))",
      "Emptiness problem for Context-Free Grammars (L(G) = empty)",
      "Halting Problem of Turing Machine",
      "Equivalence of two Deterministic Finite Automata (DFA1 == DFA2)"
    ],
    correct_answer: 2,
    topic: "Theory of Computation & Compilers",
    difficulty: "Easy",
    concept: "Decidability & Computability → Halting Problem",
    explanation: "Alan Turing proved in 1936 that the Halting Problem (determining whether an arbitrary Turing machine M halts on input w) is undecidable via diagonal reduction."
  },
  {
    id: 101073,
    test_id: 101,
    question: "What is the minimum number of states in a Minimal DFA that accepts all binary strings containing '101' as a substring?",
    options: [
      "3 states",
      "4 states",
      "5 states",
      "6 states"
    ],
    correct_answer: 1,
    topic: "Theory of Computation & Compilers",
    difficulty: "Moderate",
    concept: "Finite Automata → Minimal DFA Substring Construction",
    explanation: "To match substring '101': State q0 (start/no match), State q1 (seen '1'), State q2 (seen '10'), State q3 (seen '101' - accepting/dead absorbing state). Exactly 4 states are necessary and sufficient."
  },
  {
    id: 101074,
    test_id: 101,
    question: "Context-Free Languages (CFLs) are closed under which of the following operations?",
    options: [
      "Intersection",
      "Complement",
      "Union, Concatenation, and Kleene Star (*)",
      "Set Difference"
    ],
    correct_answer: 2,
    topic: "Theory of Computation & Compilers",
    difficulty: "Moderate",
    concept: "Formal Languages → CFL Closure Properties",
    explanation: "Context-Free Languages are closed under Union, Concatenation, and Kleene Star (*), but are NOT closed under Intersection or Complement."
  },
  {
    id: 101075,
    test_id: 101,
    question: "In compiler construction, which phase generates the Symbol Table and converts a raw character stream into meaningful tokens?",
    options: [
      "Lexical Analysis (Scanner)",
      "Syntax Analysis (Parser)",
      "Semantic Analysis",
      "Target Code Generation"
    ],
    correct_answer: 0,
    topic: "Theory of Computation & Compilers",
    difficulty: "Easy",
    concept: "Compiler Phases → Lexical Analysis (Scanning)",
    explanation: "Lexical Analyzer (Scanner / Lex) reads the input source character stream and groups them into meaningful token lexemes while building the Symbol Table and stripping whitespaces/comments."
  },
  {
    id: 101076,
    test_id: 101,
    question: "Which of the following LR parsers is the most powerful bottom-up parser capable of parsing the largest grammar family?",
    options: [
      "LR(0) Parser",
      "SLR(1) Parser (Simple LR)",
      "LALR(1) Parser (Look-Ahead LR)",
      "Canonical LR(1) / CLR(1) Parser"
    ],
    correct_answer: 3,
    topic: "Theory of Computation & Compilers",
    difficulty: "Easy",
    concept: "Compiler Parsing → LR Parser Hierarchy",
    explanation: "The hierarchy of parsing power for bottom-up LR parsers is: LR(0) < SLR(1) < LALR(1) < CLR(1). Canonical LR(1) is strictly the most powerful."
  },
  {
    id: 101077,
    test_id: 101,
    question: "What is an S-attributed Syntax-Directed Definition (SDD)?",
    options: [
      "An SDD that uses only synthesized attributes evaluated in bottom-up post-order traversal",
      "An SDD that uses only inherited attributes",
      "An SDD that allows cyclic attribute dependencies",
      "An SDD evaluated only in top-down pre-order"
    ],
    correct_answer: 0,
    topic: "Theory of Computation & Compilers",
    difficulty: "Moderate",
    concept: "Syntax Directed Translation → S-Attributed vs L-Attributed SDD",
    explanation: "An S-attributed definition uses exclusively synthesized attributes whose values depend solely on the attributes of child nodes, naturally evaluated during bottom-up parsing using parse stacks."
  },
  {
    id: 101078,
    test_id: 101,
    question: "Which compiler code optimization technique replaces expensive multiplication by a constant (e.g. `x * 8`) with a faster equivalent operation (e.g. `x << 3`)?",
    options: [
      "Loop Invariant Code Motion",
      "Strength Reduction",
      "Dead Code Elimination",
      "Constant Folding"
    ],
    correct_answer: 1,
    topic: "Theory of Computation & Compilers",
    difficulty: "Easy",
    concept: "Code Optimization → Strength Reduction",
    explanation: "Strength reduction replaces computationally heavy target operations (multiplication, division) with cheaper operations (bitwise shifts, additions) having the identical mathematical result."
  },
  {
    id: 101079,
    test_id: 101,
    question: "A grammar G is ambiguous if:",
    options: [
      "It contains left-recursive productions",
      "There exists at least one sentence in L(G) that has two or more distinct parse trees (or distinct leftmost derivations)",
      "It cannot be converted to Chomsky Normal Form (CNF)",
      "It contains epsilon productions"
    ],
    correct_answer: 1,
    topic: "Theory of Computation & Compilers",
    difficulty: "Easy",
    concept: "Grammars → Ambiguous Grammars Definition",
    explanation: "A grammar is ambiguous if there exists at least one string in its language for which two or more distinct leftmost derivations (or distinct parse trees) can be generated."
  },
  {
    id: 101080,
    test_id: 101,
    question: "In three-address intermediate code representations, which format stores instructions as records with operator, argument 1, and argument 2, using implicit array index references instead of explicit temporary variables?",
    options: [
      "Quadruples",
      "Triples",
      "Indirect Triples",
      "Abstract Syntax Tree"
    ],
    correct_answer: 1,
    topic: "Theory of Computation & Compilers",
    difficulty: "Moderate",
    concept: "Intermediate Code Generation → Triples vs Quadruples",
    explanation: "Triples use three fields: `op`, `arg1`, `arg2`. Results of operations are referenced implicitly by position/index in the instruction array (e.g. `(0)`, `(1)`), saving explicit temporary name allocations."
  },

  // --- UNIT 9: COMPUTER NETWORKS & SECURITY (Q81 - Q90) ---
  {
    id: 101081,
    test_id: 101,
    question: "In an IPv4 address subnet /26 (e.g. 192.168.1.0/26), what is the subnet mask and the maximum number of usable host IP addresses per subnet?",
    options: [
      "Subnet Mask: 255.255.255.192, Usable Hosts: 62",
      "Subnet Mask: 255.255.255.128, Usable Hosts: 126",
      "Subnet Mask: 255.255.255.224, Usable Hosts: 30",
      "Subnet Mask: 255.255.255.240, Usable Hosts: 14"
    ],
    correct_answer: 0,
    topic: "Computer Networks & Security",
    difficulty: "Moderate",
    concept: "IP Addressing & Subnetting → CIDR /26 Calculations",
    explanation: "A /26 mask has 26 network bits and 6 host bits. Subnet mask = 11111111.11111111.11111111.11000000 = 255.255.255.192. Total host combinations = 2^6 = 64. Usable hosts = 2^6 - 2 (subtracting network and broadcast IP) = 62."
  },
  {
    id: 101082,
    test_id: 101,
    question: "In the TCP 3-way handshake connection establishment, what is the sequence of flag bits exchanged between client and server?",
    options: [
      "SYN -> SYN + ACK -> ACK",
      "ACK -> SYN -> ACK",
      "FIN -> ACK -> FIN + ACK",
      "RST -> SYN -> ACK"
    ],
    correct_answer: 0,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Transport Layer → TCP 3-Way Handshake",
    explanation: "Client initiates by sending `SYN (seq=x)`. Server responds with `SYN+ACK (seq=y, ack=x+1)`. Client confirms with `ACK (seq=x+1, ack=y+1)`, establishing the full-duplex TCP socket."
  },
  {
    id: 101083,
    test_id: 101,
    question: "Which routing protocol utilizes Dijkstra's Shortest Path First algorithm and broadcasts Link State Advertisements (LSAs) within autonomous system areas?",
    options: [
      "Routing Information Protocol (RIP)",
      "Open Shortest Path First (OSPF)",
      "Border Gateway Protocol (BGP)",
      "Distance Vector Routing Protocol"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Network Layer Routing → OSPF Link State Protocol",
    explanation: "OSPF is an Interior Gateway Protocol (IGP) based on link-state technology that builds a full network topology graph using LSAs and computes shortest paths via Dijkstra's algorithm."
  },
  {
    id: 101084,
    test_id: 101,
    question: "In the RSA public-key cryptographic algorithm, if primes are p = 7 and q = 11, what is Euler's totient phi(n)?",
    options: [
      "77",
      "60",
      "70",
      "18"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Network Security & Cryptography → RSA Key Generation",
    explanation: "Modulus n = p * q = 7 * 11 = 77. Euler's totient function phi(n) = (p - 1) * (q - 1) = (7 - 1) * (11 - 1) = 6 * 10 = 60."
  },
  {
    id: 101085,
    test_id: 101,
    question: "In CSMA/CD (Carrier Sense Multiple Access with Collision Detection) local area networks (Ethernet IEEE 802.3), what is the minimum frame transmission time (T_t) required to guarantee collision detection?",
    options: [
      "T_t >= Propagation Delay (T_p)",
      "T_t >= 2 * Propagation Delay (2 * T_p)",
      "T_t >= 4 * Propagation Delay (4 * T_p)",
      "T_t is independent of Propagation Delay"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Moderate",
    concept: "Data Link Layer MAC → CSMA/CD Minimum Frame Size",
    explanation: "In CSMA/CD, the transmitting station must continue transmitting long enough to receive collision reinforcement from the furthest station across round-trip propagation time: Transmission Time (T_t) >= 2 * Propagation Delay (T_p)."
  },
  {
    id: 101086,
    test_id: 101,
    question: "What is the primary role of the Address Resolution Protocol (ARP)?",
    options: [
      "Map a known 32-bit IP address to its corresponding 48-bit physical MAC address on a local link",
      "Translate domain names (e.g. google.com) into IP addresses",
      "Assign dynamic IP addresses automatically to hosts",
      "Encrypt packets at the Transport layer"
    ],
    correct_answer: 0,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Network Layer Protocols → ARP Functionality",
    explanation: "ARP (RFC 826) broadcasts query packets on local networks to resolve and bind logical Layer 3 IP addresses to hardware Layer 2 Ethernet MAC addresses."
  },
  {
    id: 101087,
    test_id: 101,
    question: "In Go-Back-N ARQ protocol, if the sequence numbers are represented using m bits, what is the maximum sender window size?",
    options: [
      "2^m",
      "2^m - 1",
      "2^(m-1)",
      "2^m + 1"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Moderate",
    concept: "Sliding Window Protocols → Go-Back-N Window Sizing",
    explanation: "In Go-Back-N ARQ with m-bit sequence space (total 2^m numbers), sender window size cannot exceed 2^m - 1 to prevent ambiguity when ACKs are lost. (Selective Repeat uses 2^(m-1))."
  },
  {
    id: 101088,
    test_id: 101,
    question: "Which of the following transport protocols is connectionless, unreliable, and message-oriented (minimal header overhead of 8 bytes)?",
    options: [
      "Transmission Control Protocol (TCP)",
      "User Datagram Protocol (UDP)",
      "Stream Control Transmission Protocol (SCTP)",
      "Border Gateway Protocol (BGP)"
    ],
    correct_answer: 0,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Transport Layer → UDP Characteristics",
    explanation: "UDP provides lightweight datagram transport without connection setup handshakes, flow control, or acknowledgment retries with a fixed 8-byte header (Source Port, Dest Port, Length, Checksum)."
  },
  {
    id: 101089,
    test_id: 101,
    question: "In cryptography, what security property is achieved when a sender cannot deny having sent a specific message (e.g. via Digital Signatures)?",
    options: [
      "Confidentiality",
      "Non-Repudiation",
      "Integrity",
      "Availability"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Information Security → Non-Repudiation & Digital Signatures",
    explanation: "Non-repudiation ensures that an author/sender cannot falsely dispute the authorship or validity of a transmitted message or digital contract, uniquely achieved by signing with their private key."
  },
  {
    id: 101090,
    test_id: 101,
    question: "What type of firewall inspects traffic based on state tables, tracking established TCP connections and dynamic packet contexts rather than individual isolated packets?",
    options: [
      "Packet Filtering Firewall (Stateless)",
      "Stateful Inspection Firewall",
      "Circuit-Level Gateway",
      "Application-Level Gateway (Proxy)"
    ],
    correct_answer: 1,
    topic: "Computer Networks & Security",
    difficulty: "Easy",
    concept: "Network Security → Stateful vs Stateless Firewalls",
    explanation: "Stateful inspection firewalls maintain connection state tables tracking sequence numbers, source/destination ports, and TCP handshake states to distinguish legitimate responses from unauthorized incoming connection attempts."
  },

  // --- UNIT 10: ARTIFICIAL INTELLIGENCE (Q91 - Q100) ---
  {
    id: 101091,
    test_id: 101,
    question: "In informed heuristic search, the A* Search algorithm is guaranteed to return an optimal (shortest path) solution if the heuristic function h(n) is:",
    options: [
      "Admissible (h(n) <= true cost h*(n) for all nodes)",
      "Non-zero and strictly monotonic increasing",
      "Overestimating true remaining cost (h(n) > h*(n))",
      "Equal to the depth of node n"
    ],
    correct_answer: 0,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Search Algorithms → A* Heuristic Admissibility",
    explanation: "A* tree search is optimal if h(n) is admissible (never overestimates the actual cost to reach the nearest goal). For A* graph search, consistency (monotonicity) guarantees optimality without reopening closed nodes."
  },
  {
    id: 101092,
    test_id: 101,
    question: "In Minimax Game Tree search with Alpha-Beta pruning, what does Alpha (alpha) represent at any point during search?",
    options: [
      "The minimum score that the minimizing player is assured of",
      "The maximum score that the maximizing player is currently assured of (best choice so far for MAX)",
      "The tree branch depth limit",
      "The evaluation of terminal leaf nodes"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Adversarial Search → Alpha-Beta Pruning Values",
    explanation: "Alpha represents the highest (best) value found so far for the MAX player along the path. Beta represents the lowest (best) value found so far for the MIN player. Pruning occurs whenever alpha >= beta."
  },
  {
    id: 101093,
    test_id: 101,
    question: "Which of the following search algorithms explores all nodes at depth d before moving to nodes at depth d + 1, guaranteeing the shortest path in unweighted graphs?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Depth-Limited Search (DLS)",
      "Greedy Best-First Search"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Uninformed Search → BFS Properties",
    explanation: "Breadth-First Search (BFS) uses a FIFO queue to expand nodes level-by-level, ensuring completeness and finding optimal solutions for unweighted graph search."
  },
  {
    id: 101094,
    test_id: 101,
    question: "In First-Order Predicate Logic (FOL), which inference rule converts quantified expressions into equivalent formulas without existential quantifiers by introducing new functions or constants?",
    options: [
      "Modus Ponens",
      "Resolution Refutation",
      "Skolemization",
      "Unification Algorithm"
    ],
    correct_answer: 2,
    topic: "Artificial Intelligence",
    difficulty: "Moderate",
    concept: "Knowledge Representation → Skolemization in FOL",
    explanation: "Skolemization replaces existentially quantified variables (exists x) with Skolem constants (if outside any universal scope) or Skolem functions depending on universally quantified parent variables."
  },
  {
    id: 101095,
    test_id: 101,
    question: "In Genetic Algorithms, what operation models natural biological reproduction by combining genetic information of two parent chromosomes to generate offspring?",
    options: [
      "Mutation",
      "Crossover (Recombination)",
      "Fitness Scaling",
      "Roulette Wheel Selection"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Evolutionary Computing → Genetic Algorithm Operators",
    explanation: "Crossover (recombination) exchanges substrings between paired parent chromosomes at chosen crossover points to generate new offspring combining desirable traits from both parents."
  },
  {
    id: 101096,
    test_id: 101,
    question: "In Artificial Neural Networks (ANN), which activation function outputs values strictly in the range (0, 1) and is given by the formula sigma(z) = 1 / (1 + e^(-z))?",
    options: [
      "Rectified Linear Unit (ReLU)",
      "Sigmoid (Logistic) Function",
      "Hyperbolic Tangent (Tanh)",
      "Softmax Function"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Neural Networks → Activation Functions",
    explanation: "The standard logistic Sigmoid activation function maps any real-valued number z in (-infinity, +infinity) to the smooth probabilistic interval (0, 1)."
  },
  {
    id: 101097,
    test_id: 101,
    question: "In Fuzzy Logic, if fuzzy set A has membership mu_A(x) = 0.7 and fuzzy set B has membership mu_B(x) = 0.4, what is the membership value in the Fuzzy Intersection (A \\cap B) using Zadeh's standard operators?",
    options: [
      "min(0.7, 0.4) = 0.4",
      "max(0.7, 0.4) = 0.7",
      "0.7 * 0.4 = 0.28",
      "1 - 0.7 = 0.3"
    ],
    correct_answer: 0,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Fuzzy Logic → Zadeh Fuzzy Operators",
    explanation: "Zadeh's standard fuzzy operators define: Fuzzy Union mu_{A \\cup B}(x) = max(mu_A, mu_B); Fuzzy Intersection mu_{A \\cap B}(x) = min(mu_A, mu_B) = min(0.7, 0.4) = 0.4; Fuzzy Complement mu_{~A}(x) = 1 - mu_A."
  },
  {
    id: 101098,
    test_id: 101,
    question: "In reinforcement learning, the Bellman Equation expresses the value of a state V(s) as the immediate expected reward plus the discounted value of:",
    options: [
      "The starting state",
      "The next state gamma * V(s')",
      "All historical trajectories",
      "The terminal failure state"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Moderate",
    concept: "Reinforcement Learning → Bellman Optimality Equation",
    explanation: "The Bellman Equation decomposes value functions recursively into immediate reward R(s, a) + discounted future reward gamma * sum(P(s'|s,a) * V(s'))."
  },
  {
    id: 101099,
    test_id: 101,
    question: "Which of the following machine learning algorithms is a supervised ensemble method that constructs a multitude of decision trees and outputs the majority class vote (mode)?",
    options: [
      "K-Means Clustering",
      "Random Forest Classifier",
      "Principal Component Analysis (PCA)",
      "Apriori Algorithm"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Machine Learning → Random Forest & Bagging",
    explanation: "Random Forest is an ensemble learning method based on bagging (bootstrap aggregation) and random feature subspace selection, building multiple decision trees to mitigate overfitting."
  },
  {
    id: 101100,
    test_id: 101,
    question: "In Expert Systems, what is the inference strategy that starts with known facts and applies IF-THEN production rules to deduce new conclusions (Data-Driven)?",
    options: [
      "Backward Chaining (Goal-Driven)",
      "Forward Chaining (Data-Driven)",
      "Bidirectional Search",
      "Means-Ends Analysis"
    ],
    correct_answer: 1,
    topic: "Artificial Intelligence",
    difficulty: "Easy",
    concept: "Expert Systems → Forward vs Backward Chaining",
    explanation: "Forward Chaining starts with atomic facts in working memory and fires matched IF-THEN rules forward until a goal state or conclusion is reached (bottom-up/data-driven reasoning)."
  }
];
