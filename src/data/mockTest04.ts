import { Question } from '../types';

export const mockTest04Questions: Question[] = [
  // --- UNIT 1: MICRO ECONOMICS (Q1 - Q10) ---
  {
    id: 1,
    test_id: 4,
    question: "According to the Arrow's Impossibility Theorem (Kenneth Arrow, 1951), which of the following conditions CANNOT be simultaneously satisfied by any social welfare function over three or more alternatives?",
    options: [
      "Non-dictatorship, Pareto efficiency, Independence of Irrelevant Alternatives, and Unrestricted Domain",
      "Profit maximization and cost minimization",
      "Diminishing marginal utility and transitivity",
      "Constant returns to scale and Euler's theorem"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Social Choice Theory → Arrow's Impossibility Theorem (1951)",
    explanation: "Arrow's Impossibility Theorem proves that when voters have three or more discrete options, no rank-order voting system can convert individual preferences into a community-wide ranking while simultaneously satisfying: (1) Unrestricted Domain (Universal Admissibility), (2) Non-dictatorship, (3) Pareto Efficiency (Unanimity), and (4) Independence of Irrelevant Alternatives (IIA)."
  },
  {
    id: 2,
    test_id: 4,
    question: "Under the Constant Elasticity of Substitution (CES) production function Q = A * [α*K^(-ρ) + (1-α)*L^(-ρ)]^(-1/ρ), the elasticity of substitution (σ) between capital and labor is:",
    options: [
      "σ = 1 / (1 + ρ)",
      "σ = 1 + ρ",
      "σ = ρ / (1 + ρ)",
      "σ = 1 - ρ"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Production Theory → CES Production Function Elasticity of Substitution",
    explanation: "Arrow, Chenery, Minhas, and Solow (1961) derived the CES function where substitution parameter ρ determines the elasticity of substitution σ = 1 / (1 + ρ). When ρ → 0, σ → 1 (Cobb-Douglas); when ρ → ∞, σ → 0 (Leontief fixed proportions); when ρ → -1, σ → ∞ (linear production function)."
  },
  {
    id: 3,
    test_id: 4,
    question: "In game theory, a Nash Equilibrium is defined as a profile of strategies where:",
    options: [
      "No player has an incentive to unilaterally deviate from their chosen strategy given the strategies of all other players",
      "Every player achieves their highest possible cooperative payoff",
      "Total payoffs across all players are maximized (Pareto optimal)",
      "Players choose randomized mixed actions with equal probabilities"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Game Theory → Nash Equilibrium Concept (John Nash, 1950)",
    explanation: "John Nash (1950) proved that in non-cooperative games, a strategy combination is in Nash equilibrium if each player's chosen strategy is a best response to the strategies chosen by other players, meaning no player can strictly improve their payoff by a unilateral change of strategy."
  },
  {
    id: 4,
    test_id: 4,
    question: "The 'Kinked Demand Curve' model of oligopoly proposed by Paul Sweezy (1939) explains price rigidity based on the behavioral assumption that:",
    options: [
      "Rival firms will follow price decreases but will not follow price increases",
      "Rivals will follow price increases but ignore price cuts",
      "All firms collude explicitly to fix prices",
      "Marginal cost equals average revenue at all output levels"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Oligopoly Theory → Paul Sweezy's Kinked Demand Curve (1939)",
    explanation: "Paul Sweezy postulated asymmetrical behavior: if a firm raises its price, competitors will not follow (demand is highly elastic above the current price); if a firm cuts its price, competitors match the cut to protect market share (demand is inelastic below the price). This creates a kink in the demand curve and a discontinuity (vertical gap) in the Marginal Revenue curve, explaining sticky prices."
  },
  {
    id: 5,
    test_id: 4,
    question: "According to Roy's Identity, the Marshallian consumer demand function for good i (x_i) can be derived from the indirect utility function V(P, M) as:",
    options: [
      "x_i(P, M) = - [∂V/∂P_i] / [∂V/∂M]",
      "x_i(P, M) = [∂V/∂P_i] * [∂V/∂M]",
      "x_i(P, M) = [∂V/∂M] / [∂V/∂P_i]",
      "x_i(P, M) = ∂V/∂P_i"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Duality in Consumer Theory → Roy's Identity (René Roy, 1942)",
    explanation: "René Roy (1942) established that the Marshallian uncompensated demand function equals the negative ratio of the partial derivative of indirect utility V with respect to price P_i to the partial derivative of V with respect to income M: x_i(P, M) = - (∂V/∂P_i) / (∂V/∂M)."
  },
  {
    id: 6,
    test_id: 4,
    question: "In the context of risk preference, a risk-averse individual's utility function of wealth U(W) is characterized by:",
    options: [
      "A strictly concave shape: U'(W) > 0 and U''(W) < 0 (Diminishing marginal utility of wealth)",
      "A strictly convex shape: U''(W) > 0",
      "A linear shape: U''(W) = 0",
      "U(W) = W^2"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Choice Under Uncertainty → Risk Aversion & Arrow-Pratt Measures",
    explanation: "A risk-averse consumer always prefers the expected value of a gamble with certainty over the risky gamble itself: E[U(W)] < U(E[W]). By Jensen's Inequality, this holds if and only if the utility function is strictly concave (U''(W) < 0), meaning marginal utility of wealth decreases as wealth grows."
  },
  {
    id: 7,
    test_id: 4,
    question: "Under the Second Fundamental Theorem of Welfare Economics, any Pareto-efficient allocation can be achieved as a competitive market equilibrium provided that:",
    options: [
      "Preferences and production sets are convex, and lump-sum redistribution of initial endowments is feasible",
      "All goods are provided as public goods",
      "Monopoly power is legally protected",
      "There are constant wage-price controls"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Welfare Economics → Second Fundamental Theorem",
    explanation: "The Second Fundamental Theorem of Welfare Economics shows that society can separate equity from efficiency: by using non-distortionary lump-sum transfers to redistribute initial endowments, any desired Pareto-efficient point can be sustained as a Walrasian competitive equilibrium under convex preferences and technology."
  },
  {
    id: 8,
    test_id: 4,
    question: "In the Stackelberg Leader-Follower Duopoly model, the market outcome compared to the simultaneous Cournot model results in:",
    options: [
      "Higher profit and larger market share for the Leader firm, lower profit for the Follower, and higher overall industry output",
      "Equal output and equal profits for both firms",
      "A lower total industry output than under monopoly",
      "Zero profits for both firms"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Oligopoly Theory → Heinrich von Stackelberg Model (1934)",
    explanation: "Heinrich von Stackelberg showed that a first-mover firm (Leader) internalizes the Follower's reaction curve in its profit maximization. The Leader produces q_L = (a-c)/(2b), while the Follower produces q_F = (a-c)/(4b). Total output Q_Stackelberg = (3/4)*(a-c)/b > Q_Cournot = (2/3)*(a-c)/b."
  },
  {
    id: 9,
    test_id: 4,
    question: "A Giffen Good is defined as a special type of inferior good for which:",
    options: [
      "The negative income effect of a price change is so strong that it outweighs the substitution effect, resulting in an upward-sloping demand curve (∂x/∂p > 0)",
      "The substitution effect is zero",
      "Income elasticity of demand is greater than 1.0",
      "Cross-price elasticity is negative"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Consumer Theory → Slutsky Equation & Giffen Paradox",
    explanation: "According to the Slutsky decomposition: ∂x/∂p = (∂x/∂p)_{comp} - x*(∂x/∂M). For normal goods, both terms work in the same direction. For a Giffen good, it is an inferior good (∂x/∂M < 0) where the positive income term (-x*∂x/∂M > 0) strictly dominates the negative substitution effect, making total ∂x/∂p > 0."
  },
  {
    id: 10,
    test_id: 4,
    question: "Under Third-Degree Price Discrimination, a monopolist selling in two separated markets (Market 1 and Market 2) will charge a higher price in the market with:",
    options: [
      "The lower (less elastic) price elasticity of demand (|e_1| < |e_2|)",
      "The higher price elasticity of demand",
      "The largest number of competitors",
      "Unitary elasticity"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Monopoly Pricing → Third-Degree Price Discrimination (A.C. Pigou)",
    explanation: "Profit maximization requires MR_1 = MR_2 = MC. Using MR = P*(1 - 1/|e|): P_1*(1 - 1/|e_1|) = P_2*(1 - 1/|e_2|). If |e_1| < |e_2|, (1 - 1/|e_1|) < (1 - 1/|e_2|), which mathematically requires P_1 > P_2. The monopolist charges higher prices in the less price-sensitive market."
  },

  // --- UNIT 2: MACRO ECONOMICS (Q11 - Q20) ---
  {
    id: 11,
    test_id: 4,
    question: "According to Milton Friedman's Permanent Income Hypothesis (PIH), an unexpected temporary one-off tax rebate will:",
    options: [
      "Have a negligible immediate impact on current consumption, because consumption depends on permanent income rather than transitory income",
      "Increase current consumption by 100% of the rebate",
      "Cause a permanent increase in inflation",
      "Cause interest rates to double"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theories → Milton Friedman Permanent Income Hypothesis (1957)",
    explanation: "Milton Friedman (1957) decomposed income into Permanent (Y_p) and Transitory (Y_t) components. Because consumers smooth consumption over their lifetime horizon, the marginal propensity to consume out of transitory income (mpc_t) is near zero, so a one-off tax rebate is largely saved."
  },
  {
    id: 12,
    test_id: 4,
    question: "In the AK Endogenous Growth Model (Paul Romer, Sergio Rebelo), sustained long-run economic growth occurs without exogenous technological progress because:",
    options: [
      "The production function exhibits constant returns to capital (diminishing marginal returns to capital do not set in: MP_K = A)",
      "Population growth rate is equal to zero",
      "Savings rate automatically adjusts to depreciation",
      "Government fixes interest rates at zero"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Endogenous Growth Theory → Rebelo's AK Model (1991)",
    explanation: "Sergio Rebelo (1991) formulated the AK model Q = A*K (where K represents a broad measure of physical and human capital/knowledge). Because dQ/dK = A is constant (avoiding Inada conditions of diminishing marginal returns), steady-state per capita growth rate g = s*A - (n + δ) > 0 indefinitely."
  },
  {
    id: 13,
    test_id: 4,
    question: "The 'Taylor Rule' for central bank policy rate setting prescribes that the target nominal interest rate (i_t) should be adjusted based on:",
    options: [
      "Equilibrium real rate, current inflation gap (π - π*), and the output gap (Y - Y*)",
      "Foreign exchange reserves and import tariffs",
      "The stock market price-to-earnings ratio",
      "The government's fiscal deficit percentage alone"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Monetary Policy Rules → John Taylor's Rule (1993)",
    explanation: "John Taylor (1993) proposed the monetary policy rule: i = r* + π + 0.5*(π - π*) + 0.5*(y - y*). The 'Taylor Principle' states that the central bank must raise the nominal interest rate by more than one-for-one with increases in inflation (coefficient > 1) to stabilize the real interest rate and inflation expectations."
  },
  {
    id: 14,
    test_id: 4,
    question: "According to the Efficiency Wage Theory (Shapiro-Stiglitz, 1984), firms choose to pay workers a real wage above the market-clearing equilibrium level in order to:",
    options: [
      "Deter worker shirking, reduce costly labor turnover, and attract higher-quality talent",
      "Comply with trade union threats exclusively",
      "Reduce corporate tax liability",
      "Eliminate all capital equipment"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "New Keynesian Macro → Efficiency Wage Models (Shapiro & Stiglitz, 1984)",
    explanation: "Carl Shapiro and Joseph Stiglitz (1984) showed that imperfect monitoring creates a moral hazard (shirking) problem. Paying a wage premium above market-clearing creates a cost of job loss (the threat of unemployment), which incentivizes effort but causes persistent equilibrium involuntary unemployment."
  },
  {
    id: 15,
    test_id: 4,
    question: "The 'Ricardian Equivalence Proposition' re-evaluated by Robert Barro (1974) states that:",
    options: [
      "Financing government spending through debt issuance versus lump-sum taxes has identical real economic effects on aggregate demand, because forward-looking households save the tax cut to pay future tax liabilities",
      "Government debt always triggers immediate hyperinflation",
      "Taxes should be eliminated completely",
      "Fiscal deficits permanently raise the real interest rate"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Fiscal Policy Debates → Robert Barro's Ricardian Equivalence (1974)",
    explanation: "Robert Barro showed that with rational, forward-looking households connected to future generations via intergenerational altruistic bequests, government bond sales to finance a tax cut are perceived not as net wealth, but as future tax liabilities of equal present discounted value, leaving national saving and aggregate demand unchanged."
  },
  {
    id: 16,
    test_id: 4,
    question: "In the New Classical Real Business Cycle (RBC) models (Kydland and Prescott, 1982), macroeconomic fluctuations are primarily caused by:",
    options: [
      "Exogenous real aggregate productivity shocks (Total Factor Productivity / technology shocks) in fully flexible, optimizing markets",
      "Erratic shifts in central bank money supply",
      "Sticky nominal wages in unionized sectors",
      "Speculative animal spirits in the stock market"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Modern Macro Theory → Real Business Cycle Theory (1982 Nobel)",
    explanation: "Finn Kydland and Edward Prescott (2004 Nobel laureates) demonstrated that economic cycles are not market failures but optimal equilibrium responses of competitive markets to exogenous technological/supply-side shocks, rendering monetary policy neutral and countercyclical fiscal intervention unnecessary."
  },
  {
    id: 17,
    test_id: 4,
    question: "The 'Kaldor's Stylized Facts' of economic growth (Nicholas Kaldor, 1957) state that in advanced economies over the long run:",
    options: [
      "The capital-output ratio (K/Y) and the shares of capital and labor in national income remain roughly constant",
      "The rate of profit falls to zero",
      "Per capita output remains completely stagnant",
      "The share of agriculture expands continuously"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Macroeconomic Growth Facts → Nicholas Kaldor's 6 Stylized Facts (1957)",
    explanation: "Nicholas Kaldor summarized long-run economic growth facts: (1) Output per worker grows at a roughly constant rate, (2) Capital per worker grows over time, (3) Capital-output ratio (K/Y) is nearly constant, (4) Rate of return on capital is stable, and (5) Factor income shares of labor and capital remain remarkably stable."
  },
  {
    id: 18,
    test_id: 4,
    question: "In the Keynesian IS-LM framework, a 'Liquidity Trap' occurs when:",
    options: [
      "The LM curve becomes perfectly horizontal at the zero lower bound of nominal interest rates (interest elasticity of money demand is infinite)",
      "The IS curve becomes perfectly vertical",
      "Money supply is equal to zero",
      "Investment is completely interest-elastic"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Keynesian Economics → Liquidity Trap & Monetary Policy Impotence",
    explanation: "In a Liquidity Trap (J.M. Keynes), nominal interest rates are so low that the speculative demand for money becomes perfectly elastic (everyone expects interest rates to rise, hence bond prices to fall). Any liquidity injected by the central bank is hoarded as idle cash, rendering monetary policy ineffective."
  },
  {
    id: 19,
    test_id: 4,
    question: "The 'Okun's Law' describes the empirical regular relationship between:",
    options: [
      "The percentage change in real GDP and the change in the unemployment rate (a 1% decrease in unemployment corresponds to ~2% higher GDP growth)",
      "Inflation rate and wage growth",
      "Budget deficit and trade deficit",
      "Savings rate and population growth"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Macroeconomic Relationships → Arthur Okun's Law (1962)",
    explanation: "Arthur Okun (1962) established the empirical rule: for every 1 percentage point that the actual unemployment rate exceeds the natural rate of unemployment (NAIRU), real GDP falls roughly 2% below potential GDP: (Y - Y*)/Y* = -β*(u - u*)."
  },
  {
    id: 20,
    test_id: 4,
    question: "According to the Life Cycle Hypothesis of Saving (Franco Modigliani, 1954), an individual's saving behavior over their lifetime is characterized by:",
    options: [
      "Dissaving during youth, positive saving during working prime years, and dissaving during retirement",
      "Constant savings rate throughout all stages of life",
      "Saving exclusively during retirement",
      "Zero savings during prime working years"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Consumption Theories → Franco Modigliani Life Cycle Hypothesis",
    explanation: "Franco Modigliani (1985 Nobel laureate) showed that individuals plan consumption and saving behavior over their entire lifecycle. To maintain a smooth consumption standard, people borrow/dissave in early career, save heavily during high-earning prime middle age, and dissave accumulated wealth during retirement."
  },

  // --- UNIT 3: MATHEMATICAL ECONOMICS (Q21 - Q30) ---
  {
    id: 21,
    test_id: 4,
    question: "For a system of linear equations Ax = b, Cramer's Rule can be applied to solve for the unique solution vector x if and only if:",
    options: [
      "The coefficient matrix A is square and its determinant is non-zero: |A| ≠ 0",
      "Matrix A is singular",
      "b is a null zero vector",
      "Number of variables exceeds number of equations"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Linear Algebra → Cramer's Rule for Solving Linear Systems",
    explanation: "Gabriel Cramer's rule solves linear systems x_i = |A_i| / |A|. A unique solution exists if and only if matrix A is non-singular, meaning the determinant |A| ≠ 0. If |A| = 0, the system has either infinitely many solutions or no solution."
  },
  {
    id: 22,
    test_id: 4,
    question: "If a consumer's utility function is U(x, y) = x^(0.5) + y^(0.5) subject to budget constraint 2x + 4y = 120, the optimal consumption of good x is:",
    options: [
      "x = 40",
      "x = 20",
      "x = 30",
      "x = 60"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Constrained Optimization → Lagrangian Utility Maximization",
    explanation: "MRS_xy = (MU_x / MU_y) = (0.5 x^(-0.5)) / (0.5 y^(-0.5)) = √(y / x). Setting MRS = P_x / P_y = 2 / 4 = 1/2 => √(y/x) = 1/2 => y/x = 1/4 => x = 4y. Substituting into budget constraint: 2*(4y) + 4y = 120 => 8y + 4y = 120 => 12y = 120 => y = 10. Since x = 4y, x = 4 * 10 = 40."
  },
  {
    id: 23,
    test_id: 4,
    question: "In the Bordered Hessian matrix for a two-variable constrained optimization problem with budget constraint g(x,y) = c, the sufficient condition for a strict local constrained MAXIMUM is:",
    options: [
      "The determinant of the Bordered Hessian |H̄| is strictly positive: |H̄| > 0",
      "|H̄| < 0",
      "|H̄| = 0",
      "Trace of H is negative"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Second-Order Conditions → Bordered Hessian Matrix for Maximization",
    explanation: "For a 2-variable, 1-constraint optimization problem, the 3x3 Bordered Hessian matrix |H̄| = det [ [0, g1, g2], [g1, L11, L12], [g2, L21, L22] ]. The sufficient second-order condition for a strict local maximum is |H̄| > 0 (for a minimum, |H̄| < 0)."
  },
  {
    id: 24,
    test_id: 4,
    question: "Given a competitive firm's profit function π(P, w) = (P^2) / (4w), Hotelling's Lemma states that the firm's profit-maximizing output supply function Q*(P) is:",
    options: [
      "Q*(P) = ∂π/∂P = P / (2w)",
      "Q*(P) = P^2 / (2w)",
      "Q*(P) = - ∂π/∂w",
      "Q*(P) = 4w / P"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Duality in Production → Hotelling's Lemma (Harold Hotelling, 1932)",
    explanation: "Hotelling's Lemma proves that the derivative of the indirect profit function with respect to product price P yields the firm's supply function: y(P, w) = ∂π/∂P. Here ∂[(P^2)/(4w)]/∂P = 2P/(4w) = P/(2w)."
  },
  {
    id: 25,
    test_id: 4,
    question: "In the Cobweb model of market price dynamics with demand Q_d(t) = a - b*P(t) and supply Q_s(t) = -c + d*P(t-1), the price oscillations are DAMPED (converging to equilibrium) if and only if:",
    options: [
      "d < b (The slope parameter of supply is less than the slope parameter of demand: d/b < 1)",
      "d > b",
      "d = b",
      "a = c"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Dynamic Models → Cobweb Model Convergence Condition (Nicholas Kaldor)",
    explanation: "Equating Q_d(t) = Q_s(t) gives first-order difference equation P(t) = (a + c)/b - (d/b)*P(t-1). The characteristic root is (-d/b). Oscillations are damped and converge to equilibrium if and only if |-d/b| < 1, which means supply elasticity is less than demand elasticity (d < b)."
  },
  {
    id: 26,
    test_id: 4,
    question: "For the matrix A = [[3, 2], [1, 4]], the eigenvalues λ are found by solving the characteristic equation |A - λI| = 0. The eigenvalues are:",
    options: [
      "λ1 = 2, λ2 = 5",
      "λ1 = 1, λ2 = 6",
      "λ1 = 3, λ2 = 4",
      "λ1 = 0, λ2 = 7"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Matrix Algebra → Eigenvalues & Characteristic Roots",
    explanation: "|A - λI| = det [[3-λ, 2], [1, 4-λ]] = (3-λ)(4-λ) - (2)(1) = λ^2 - 7λ + 12 - 2 = λ^2 - 7λ + 10 = 0. Factoring: (λ - 2)(λ - 5) = 0. Thus eigenvalues are λ1 = 2 and λ2 = 5. (Note: Trace = 3+4=7 = 2+5; Det = 3*4 - 2*1 = 10 = 2*5)."
  },
  {
    id: 27,
    test_id: 4,
    question: "In continuous compound interest growth, if an initial deposit P_0 grows at an annual rate r compounded continuously, the time required for the principal to double is approximately:",
    options: [
      "t = ln(2) / r ≈ 0.693 / r (Rule of 70)",
      "t = 2 / r",
      "t = r / ln(2)",
      "t = 100 * r"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Financial Mathematics → Continuous Compounding & Doubling Time",
    explanation: "Under continuous compounding, P(t) = P_0 * e^(r*t). For doubling: 2 * P_0 = P_0 * e^(r*t) => e^(r*t) = 2. Taking natural logarithms: r*t = ln(2) ≈ 0.69315. Therefore, t = ln(2)/r ≈ 70 / (growth rate in %)."
  },
  {
    id: 28,
    test_id: 4,
    question: "In game theory, in a zero-sum two-person matrix game, a Saddle Point exists if and only if:",
    options: [
      "Maximin value of Player 1 equals the Minimax value of Player 2 (Maximin = Minimax)",
      "All payoff entries are positive",
      "Both players choose randomized mixed strategies",
      "Sum of payoffs across all cells equals 100"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Game Theory → Saddle Point & Minimax Theorem (von Neumann)",
    explanation: "John von Neumann's Minimax Theorem proves that a game has a pure strategy Nash equilibrium (saddle point) if the maximum of row minimums (Maximin) equals the minimum of column maximums (Minimax). At this point, the entry is simultaneously the minimum in its row and maximum in its column."
  },
  {
    id: 29,
    test_id: 4,
    question: "If the total revenue function is TR = 120Q - 2Q^2 and total cost is TC = 20Q + Q^2 + 100, the profit-maximizing level of output Q is:",
    options: [
      "Q = 16.67 (or 50/3)",
      "Q = 25",
      "Q = 10",
      "Q = 30"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Calculus in Economics → Profit Maximization MR = MC",
    explanation: "MR = d(TR)/dQ = 120 - 4Q. MC = d(TC)/dQ = 20 + 2Q. Profit maximization requires MR = MC: 120 - 4Q = 20 + 2Q => 6Q = 100 => Q = 100 / 6 = 50 / 3 ≈ 16.67. Second order condition: d^2π/dQ^2 = -4 - 2 = -6 < 0 (confirmed maximum)."
  },
  {
    id: 30,
    test_id: 4,
    question: "The elasticity of total cost with respect to output, ε_TC, is equal to:",
    options: [
      "Marginal Cost / Average Cost (MC / AC)",
      "Average Cost / Marginal Cost (AC / MC)",
      "Total Cost * Marginal Cost",
      "d(AC) / dQ"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Cost Functions → Cost Elasticity Formula",
    explanation: "Cost elasticity ε_TC = (dTC / dQ) * (Q / TC) = MC * (1 / AC) = MC / AC. If MC < AC, ε_TC < 1 (economies of scale); if MC = AC, ε_TC = 1 (constant scale economies); if MC > AC, ε_TC > 1 (diseconomies of scale)."
  },

  // --- UNIT 4: ECONOMETRICS (Q31 - Q40) ---
  {
    id: 31,
    test_id: 4,
    question: "In the presence of Heteroscedasticity (non-constant variance of error terms: Var(u_i) = σ_i^2):",
    options: [
      "OLS estimators remain unbiased and consistent, but are no longer efficient (not BLUE), and standard errors/t-tests become invalid",
      "OLS estimators become biased and inconsistent",
      "R-squared becomes greater than 1",
      "Multicollinearity is automatically eliminated"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Heteroscedasticity Consequences → OLS Unbiasedness vs Inefficiency",
    explanation: "Heteroscedasticity does not violate E(u|X) = 0, so OLS parameter estimates remain unbiased and consistent. However, the usual variance formula Var(β_hat) is incorrect, leading to biased standard errors, misleading t/F tests, and loss of minimum variance property (BLUE)."
  },
  {
    id: 32,
    test_id: 4,
    question: "The Goldfeld-Quandt Test is used to detect heteroscedasticity by:",
    options: [
      "Ordering observations by variable X, omitting central c observations, and taking the ratio of error variances of the two sub-samples: F = RSS_2 / RSS_1",
      "Regressing residuals on lagged residuals",
      "Calculating the eigenvalues of matrix X'X",
      "Running an instrumented two-stage least squares model"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Diagnostic Testing → Stephen Goldfeld and Richard Quandt Test (1965)",
    explanation: "Goldfeld and Quandt (1965) designed a parametric test: sort data according to the regressor suspected of causing heteroscedasticity, drop central observations (c ≈ n/4 to n/3), run separate regressions on the two remaining halves, and compute the test statistic F = RSS_2 / RSS_1 ~ F(df1, df2)."
  },
  {
    id: 33,
    test_id: 4,
    question: "The Ramsey RESET (Regression Equation Specification Error Test) is primarily used to detect:",
    options: [
      "General functional form misspecification and omitted variables (by adding powers of fitted values Ŷ^2, Ŷ^3 to the regression)",
      "Pure measurement error in Y",
      "Autocorrelation of order 4",
      "Unit root non-stationarity"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Model Specification → J.B. Ramsey's RESET Test (1969)",
    explanation: "James Ramsey (1969) formulated RESET to test for incorrect functional form or omitted non-linearities. By adding powers of fitted values (Ŷ_i^2, Ŷ_i^3) into an auxiliary regression and testing the joint significance of their coefficients using an F-test, RESET checks if E(u|X) = 0 is violated."
  },
  {
    id: 34,
    test_id: 4,
    question: "The 'Hausman Specification Test' (J.A. Hausman, 1978) is used in panel data econometrics to choose between:",
    options: [
      "Fixed Effects Model (FE) and Random Effects Model (RE) by testing whether individual unobserved effects are correlated with the regressors",
      "OLS and Maximum Likelihood Estimation",
      "Linear and Log-linear demand specifications",
      "AR(1) and MA(1) time series processes"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Panel Data Econometrics → Jerry Hausman Test (1978)",
    explanation: "The Hausman test evaluates H0: Cov(α_i, X_it) = 0 (Random Effects is consistent and efficient) versus H1: Cov(α_i, X_it) ≠ 0 (RE is inconsistent, FE is consistent). If H0 is rejected (p < 0.05), the Fixed Effects model must be preferred."
  },
  {
    id: 35,
    test_id: 4,
    question: "Two non-stationary time series Y_t ~ I(1) and X_t ~ I(1) are said to be 'Cointegrated' if:",
    options: [
      "A linear combination of them is stationary: e_t = Y_t - β*X_t ~ I(0) (there exists a true long-run equilibrium relationship)",
      "Their correlation coefficient is equal to 0",
      "Both series contain deterministic linear trends only",
      "They have identical sample means"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Cointegration & Error Correction → Clive Granger & Robert Engle (1987 Nobel)",
    explanation: "Robert Engle and Clive Granger (2003 Nobel laureates) showed that regressing non-stationary I(1) variables usually yields 'spurious regression'. However, if a linear combination of them cancels out stochastic trends and produces stationary I(0) residuals, the variables are cointegrated and share a stable long-run equilibrium."
  },
  {
    id: 36,
    test_id: 4,
    question: "In an autoregressive distributed lag (ARDL) model, the 'Granger Causality Test' tests whether:",
    options: [
      "Past lagged values of variable X contain statistically significant information that helps forecast variable Y beyond what is contained in past lags of Y alone",
      "X causes Y in a philosophical metaphysical sense",
      "Y and X have identical variances",
      "Both variables are normally distributed"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Time Series Causality → Clive Granger Causality Test (1969)",
    explanation: "Clive Granger (1969) defined causality in terms of predictability: variable X 'Granger-causes' Y if incorporating past values of X results in better forecasts of Y than using only historical values of Y. It is tested via an F-test on the joint significance of the coefficients of lagged X."
  },
  {
    id: 37,
    test_id: 4,
    question: "In a binary Logit model, the Log-Odds Ratio (logit) ln[P_i / (1 - P_i)] is:",
    options: [
      "A linear function of the explanatory variables: L_i = β0 + β1*X1 + ... + βk*Xk",
      "Bounded strictly between 0 and 1",
      "Non-linear in parameters",
      "Identical to the standard normal CDF"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Qualitative Choice Models → Logit Model & Log-Odds Transformation",
    explanation: "In the Logit model based on the standard logistic distribution P_i = 1 / (1 + e^(-Z_i)), taking the odds ratio P_i / (1 - P_i) = e^(Z_i). Taking natural logarithm gives the Logit L_i = ln[P_i / (1 - P_i)] = Z_i = X_i*β, which is linear in parameters and regressors and ranges from -∞ to +∞."
  },
  {
    id: 38,
    test_id: 4,
    question: "The 'Variance Inflation Factor' (VIF) is used to detect the severity of multicollinearity. A rule of thumb is that multicollinearity is a serious concern when:",
    options: [
      "VIF_j = 1 / (1 - R_j^2) > 10 (corresponding to an R_j^2 > 0.90 in auxiliary regressions)",
      "VIF_j < 1",
      "VIF_j = 0",
      "VIF_j is negative"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Multicollinearity Diagnostics → Variance Inflation Factor (VIF)",
    explanation: "The Variance Inflation Factor for regressor X_j measures how much the variance of β_hat_j is inflated due to linear collinearity with other regressors: VIF_j = 1 / (1 - R_j^2). A VIF > 10 (or Tolerance < 0.10) signifies highly problematic multicollinearity."
  },
  {
    id: 39,
    test_id: 4,
    question: "In time series econometrics, an ARCH (Autoregressive Conditional Heteroscedasticity) model developed by Robert Engle (1982) is designed to model:",
    options: [
      "Time-varying conditional volatility clustering (where periods of high volatility are followed by high volatility, and tranquil periods by tranquility)",
      "Linear deterministic trends",
      "Constant error variances",
      "Perfect collinearity across seasonal quarters"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Volatility Modeling → Robert Engle's ARCH Model (1982)",
    explanation: "Robert Engle (2003 Nobel laureate) introduced ARCH to model financial time series (stock returns, exchange rates) where error variance σ_t^2 is conditional on past squared residuals: σ_t^2 = α0 + α1*u_{t-1}^2 + ... + αq*u_{t-q}^2 (generalized as GARCH by Tim Bollerslev)."
  },
  {
    id: 40,
    test_id: 4,
    question: "The 'Chow Test' (Gregory Chow, 1960) uses an F-statistic to test for:",
    options: [
      "Structural breaks / parameter stability across two different time periods or distinct sub-samples",
      "Autocorrelation of order 1",
      "Overidentifying restrictions in 2SLS",
      "Homoscedasticity of error terms"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Hypothesis Testing → Gregory Chow Test for Structural Stability (1960)",
    explanation: "The Chow test determines whether regression parameters (slopes and intercepts) remain stable before and after a known event/breakpoint (e.g. 1991 reforms). It compares the Residual Sum of Squares of the pooled regression (RSS_p) with the sum of RSS from the two separated sub-periods (RSS_1 + RSS_2) using an F-distribution."
  },

  // --- UNIT 5: INTERNATIONAL ECONOMICS (Q41 - Q50) ---
  {
    id: 41,
    test_id: 4,
    question: "According to the Gravity Model of International Trade (Jan Tinbergen, 1962), bilateral trade volume between nation i and nation j is:",
    options: [
      "Directly proportional to the product of their GDPs (economic sizes) and inversely proportional to the geographical distance between them",
      "Determined entirely by differences in capital-labor ratios",
      "Independent of transport costs and distance",
      "Inversely proportional to their total population"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade Patterns → Jan Tinbergen's Gravity Model (1962)",
    explanation: "Jan Tinbergen (1969 Nobel laureate) formulated the Gravity Model: Trade_ij = A * (GDP_i^α * GDP_j^β) / (Distance_ij^θ). Larger economic economies trade more with each other due to large markets and scale, while geographic distance acts as a friction/transport cost dampening trade."
  },
  {
    id: 42,
    test_id: 4,
    question: "The 'Factor Price Equalization Theorem' (Samuelson-Lerner Theorem) proves that under free trade and standard H-O assumptions:",
    options: [
      "Free international trade in commodities brings about complete equalization of absolute and relative factor prices (wages and capital rentals) across trading nations, even without cross-border factor mobility",
      "Wages will always remain lower in developing countries",
      "Capital rental rates diverge over time",
      "Trade eliminates the need for domestic manufacturing"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Heckscher-Ohlin-Samuelson Model → Factor Price Equalization Theorem",
    explanation: "Paul Samuelson (1948) proved that under constant returns, identical technology, absence of transport costs/tariffs, and no factor intensity reversals, free commodity trade acts as a perfect substitute for factor mobility, equalizing real factor prices internationally (w = w* and r = r*)."
  },
  {
    id: 43,
    test_id: 4,
    question: "The 'Krugman New Trade Theory' (Paul Krugman, 1979) explains intra-industry trade between similar developed countries based on:",
    options: [
      "Monopolistic competition, consumers' love for variety (Dixit-Stiglitz preferences), and internal economies of scale",
      "Differences in climate and natural resources",
      "Ricardian differences in labor productivity",
      "Inter-governmental barter agreements"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "New Trade Theory → Paul Krugman's Monopolistic Competition Model (2008 Nobel)",
    explanation: "Paul Krugman (2008 Nobel laureate) showed that countries with identical factor endowments trade differentiated varieties of the same product (e.g. Germany exporting BMWs to France and importing Renaults). Internal economies of scale limit the number of varieties each country produces, while consumers desire variety, generating intra-industry trade."
  },
  {
    id: 44,
    test_id: 4,
    question: "The 'Effective Rate of Protection' (ERP) for a domestic industry is higher than the Nominal Tariff Rate on the final output if:",
    options: [
      "The nominal tariff rate on final output exceeds the nominal tariff rate on imported intermediate inputs (Tariff Escalation)",
      "Tariffs on raw materials are higher than on finished goods",
      "Domestic value added is equal to 100%",
      "All intermediate inputs are produced domestically"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Commercial Trade Policy → Effective Rate of Protection (Max Corden)",
    explanation: "W.M. Corden formulated ERP = (t_f - a*t_i) / (1 - a), where t_f is tariff on finished good, t_i is tariff on input, and a is input share. If t_f > t_i (tariff escalation), ERP > t_f, providing enhanced protection to domestic value-added processes."
  },
  {
    id: 45,
    test_id: 4,
    question: "Under the 'Impossible Trinity' (Mundellian Trilemma) in international macroeconomics, a country cannot simultaneously maintain:",
    options: [
      "Fixed exchange rate, Free capital mobility, and Independent monetary policy",
      "High economic growth, Zero unemployment, and Low tariffs",
      "Current account surplus, High foreign direct investment, and Flexible exchange rate",
      "Export subsidies, Domestic competition, and Balanced budget"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Open Economy Trilemma → Mundell-Fleming Impossible Trinity",
    explanation: "Robert Mundell showed that a nation must pick any two of the three goals: (1) Free cross-border capital flows, (2) Fixed exchange rate, and (3) Sovereign domestic monetary autonomy. Maintaining all three simultaneously is mathematically and operationally impossible."
  },
  {
    id: 46,
    test_id: 4,
    question: "The 'Prebisch-Singer Hypothesis' (1950) argues that over the long run, developing countries face a secular deterioration in their:",
    options: [
      "Net Barter Terms of Trade (P_exports / P_imports), because income elasticity of demand for primary agricultural exports is lower than that for imported manufactures",
      "Foreign exchange reserves",
      "National sovereignty",
      "Gross domestic investment rate"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Terms of Trade & Development → Raúl Prebisch & Hans Singer Thesis (1950)",
    explanation: "Raúl Prebisch and Hans Singer observed that primary commodities have an inelastic income demand (Engel's Law) and operate in competitive markets, while manufactured goods produced by developed nations have high income elasticity and unionized/monopolistic pricing, causing long-term deterioration in primary commodity exporters' terms of trade."
  },
  {
    id: 47,
    test_id: 4,
    question: "The 'Uncovered Interest Parity' (UIP) condition states that the interest rate differential between two countries should equal:",
    options: [
      "The expected rate of depreciation of the domestic currency: (i - i*) = (E[S_{t+1}] - S_t) / S_t",
      "The inflation differential minus real GDP growth",
      "The tariff rate differential",
      "Zero under all exchange rate regimes"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Foreign Exchange Markets → Uncovered Interest Parity (UIP)",
    explanation: "Under risk neutrality and rational expectations, UIP requires that investing at domestic interest rate i yields the same expected return as converting currency to foreign bonds yielding i* and exchanging back: (1 + i) = (1 + i*) * (E[S_{t+1}] / S_t), which simplifies to (i - i*) ≈ %ΔS^e."
  },
  {
    id: 48,
    test_id: 4,
    question: "In the World Trade Organization (WTO) framework, the 'Most Favoured Nation' (MFN) principle (GATT Article I) mandates that:",
    options: [
      "Any trade advantage, favor, or tariff reduction granted by a WTO member to one country must be extended unconditionally to all other WTO members",
      "Developing countries must grant 100% duty-free access to developed countries",
      "All countries must peg their currencies to the US Dollar",
      "Agricultural subsidies must be eliminated in 24 hours"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "International Trade Law → WTO Non-Discrimination Principles (MFN)",
    explanation: "The MFN principle is the cornerstone of the multilateral trading system under GATT/WTO: member countries cannot discriminate between trading partners. Granting a special tariff rate to one country requires extending that same concession immediately and unconditionally to all WTO members (with exceptions for Free Trade Areas/Customs Unions under Article XXIV)."
  },
  {
    id: 49,
    test_id: 4,
    question: "The 'Immiserizing Growth' phenomenon identified by Jagdish Bhagwati (1958) demonstrates that economic growth in a large developing country can lead to lower national welfare if:",
    options: [
      "Growth is heavily export-biased in the primary sector and the country faces extremely price-inelastic foreign demand, causing a catastrophic deterioration in terms of trade",
      "Government increases education spending",
      "Import tariffs are completely abolished",
      "Savings rate exceeds 50%"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade & Growth → Jagdish Bhagwati's Immiserizing Growth (1958)",
    explanation: "Jagdish Bhagwati (1958) proved that if a large country experiences strong export-biased growth in a commodity with very inelastic foreign demand, export expansion floods the world market, collapsing world prices. The resulting terms-of-trade loss outweighs the positive production gain, making the country worse off than before growth."
  },
  {
    id: 50,
    test_id: 4,
    question: "In trade policy, an 'Export Subsidy' granted by a small exporting country leads to:",
    options: [
      "An increase in domestic price, a decrease in domestic consumer surplus, an increase in producer surplus, and a net national deadweight welfare loss",
      "A net increase in total government budget revenue",
      "Zero change in domestic prices",
      "An improvement in national terms of trade"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade Instruments → Welfare Economics of Export Subsidies",
    explanation: "An export subsidy raises domestic prices to P_w + s, expanding exports. Domestic producers gain, but domestic consumers lose surplus, and the government incurs substantial fiscal expenditure (subsidy payment), producing two deadweight loss triangles (consumer distortion and production distortion)."
  },

  // --- UNIT 6: PUBLIC ECONOMICS (Q51 - Q60) ---
  {
    id: 51,
    test_id: 4,
    question: "According to the 'Tiebout Hypothesis' (Charles Tiebout, 1956), efficient provision of local public goods is achieved through:",
    options: [
      "Citizens 'voting with their feet' by moving to jurisdictions that offer their optimal bundle of local public goods and local tax rates",
      "Centralized mandatory tax assignment",
      "Direct democratic referendum at national level",
      "Nationalization of all municipal services"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Local Public Goods → Charles Tiebout Sorting Hypothesis (1956)",
    explanation: "Charles Tiebout (1956) showed that spatial mobility resolves the preference revelation problem for local public goods. When households choose where to reside among competing local municipalities offering distinct tax-service packages, mobility mimics a market pricing mechanism, achieving Pareto efficiency."
  },
  {
    id: 52,
    test_id: 4,
    question: "A public good that is Non-Rival in consumption but Excludable through user pricing (such as encrypted satellite TV or toll roads with low traffic) is classified as a:",
    options: [
      "Club Good (Toll Good)",
      "Pure Public Good",
      "Common Pool Resource",
      "Pure Private Good"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Typology of Goods → Club Goods (James Buchanan, 1965)",
    explanation: "James Buchanan (1965) classified goods along two axes: Excludability and Rivalry. Goods that are excludable (access can be restricted by price/subscription) but non-rival (one person's use does not diminish availability for others until congestion) are Club Goods."
  },
  {
    id: 53,
    test_id: 4,
    question: "Under the 'Median Voter Theorem' (Duncan Black, Anthony Downs), in a single-issue majority-rule election with single-peaked preferences:",
    options: [
      "The outcome of majority voting will always match the ideal policy preferred by the median voter",
      "The candidate with the most extreme platform always wins",
      "Voting cycles (Condorcet paradox) are inevitable",
      "The average mean income voter determines the tax rate"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Choice Theory → Duncan Black & Anthony Downs Median Voter Theorem",
    explanation: "Duncan Black (1948) and Anthony Downs (1957) proved that if voter preferences are single-peaked along a single political spectrum (e.g. left-to-right tax rate), majority rule produces an equilibrium policy located exactly at the median voter's most preferred point."
  },
  {
    id: 54,
    test_id: 4,
    question: "The 'Wagner's Law of Increasing State Activity' (Adolph Wagner, 1892) posits that as per capita income in an industrializing nation grows:",
    options: [
      "The share of public expenditure in total national income (GDP) expands progressively (income elasticity of demand for public services > 1)",
      "Public spending as a percentage of GDP declines toward zero",
      "All public infrastructure is privatized",
      "Government tax rates fall to zero"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Expenditure Growth → Adolph Wagner's Law (1892)",
    explanation: "German economist Adolph Wagner observed that economic industrialization requires more administrative regulation, complex legal frameworks, infrastructure investments, and redistributive social services (income elasticity of public goods > 1.0), causing public spending to rise faster than GDP."
  },
  {
    id: 55,
    test_id: 4,
    question: "The 'Excess Burden' (Deadweight Loss) of an excise tax increases with:",
    options: [
      "The square of the tax rate (DWL ∝ t^2) and the price elasticities of demand and supply",
      "The square root of the tax rate",
      "A reduction in consumer surplus only",
      "Zero relation to market elasticities"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Tax Efficiency → Harberger Triangle Formula for Deadweight Loss",
    explanation: "Arnold Harberger showed that the deadweight loss triangle of an ad valorem tax is DWL = 0.5 * [e_d * e_s / (e_d + e_s)] * P * Q * t^2. Because DWL rises with the square of the tax rate (t^2), low tax rates on broad tax bases cause far less economic distortion than high tax rates on narrow bases."
  },
  {
    id: 56,
    test_id: 4,
    question: "In the theory of public debt, the 'Domar Stability Condition' (Evsey Domar, 1944) states that a government's debt-to-GDP ratio will stabilize over time if:",
    options: [
      "The nominal GDP growth rate (g) exceeds the nominal interest rate on government debt (r): g > r (assuming a balanced primary budget)",
      "The real interest rate is strictly greater than economic growth",
      "Government prints 100% of currency",
      "Fiscal deficit is zero every year"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Debt Sustainability → Evsey Domar Condition (1944)",
    explanation: "Evsey Domar proved that dynamic debt sustainability equation is Δ(Debt/GDP) = (r - g)*(Debt/GDP) + Primary Deficit/GDP. When the growth rate of the economy g exceeds the interest rate on government debt r (g > r), the debt-to-GDP ratio converges to a stable finite steady state."
  },
  {
    id: 57,
    test_id: 4,
    question: "The 'Clarke-Groves-Vickrey' (Vickrey-Clarke-Groves / VCG) mechanism in public goods economics is designed to:",
    options: [
      "Induce individuals to truthfully reveal their private willingness to pay for a public good by making each person pay a tax equal to the externality their bid imposes on others",
      "Eliminate all progressive income taxes",
      "Maximize government tax revenues exclusively",
      "Force all citizens to consume equal units of private goods"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Hard",
    concept: "Mechanism Design → VCG Mechanism for Truthful Preference Revelation",
    explanation: "The VCG mechanism is a dominant-strategy incentive-compatible mechanism: truth-telling is a dominant strategy for every participant because each individual's payment depends on the net bids of everyone else (pivotal tax), completely eliminating free-rider underreporting."
  },
  {
    id: 58,
    test_id: 4,
    question: "Under the 'Canons of Taxation' propounded by Adam Smith in 'The Wealth of Nations' (1776), which four principles were articulated?",
    options: [
      "Canon of Equality (Ability to pay), Canon of Certainty, Canon of Convenience, and Canon of Economy",
      "Canon of Elasticity, Canon of Productivity, Canon of Diversity, and Canon of Simplicity",
      "Canon of Neutrality, Canon of Inflation, Canon of Redistribution, and Canon of Deficit",
      "Canon of Zero Tariffs, Canon of Sales Tax, Canon of Tolls, and Canon of Subsidies"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Classic Principles of Taxation → Adam Smith's Four Canons (1776)",
    explanation: "Adam Smith (1776) laid down four fundamental canons of taxation: (1) Equality/Equity (contributions in proportion to respective abilities), (2) Certainty (tax liability must be clear, not arbitrary), (3) Convenience (collected when most convenient for taxpayer), and (4) Economy (collection cost should be minimal)."
  },
  {
    id: 59,
    test_id: 4,
    question: "A tax system is said to be 'Progressive' when:",
    options: [
      "The Average Tax Rate (ATR) increases as taxable income rises (Marginal Tax Rate > Average Tax Rate)",
      "All individuals pay the exact same absolute monetary amount",
      "The tax rate decreases as income increases",
      "Marginal Tax Rate is equal to zero"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Tax Structure → Progressive vs Regressive vs Proportional Taxation",
    explanation: "A tax structure is progressive if higher income brackets face higher tax proportions (ATR = T/Y increases with Y). This mathematically requires that the Marginal Tax Rate (dT/dY) is strictly greater than the Average Tax Rate (MTR > ATR)."
  },
  {
    id: 60,
    test_id: 4,
    question: "The 'Niskanen Model of Bureaucracy' (William Niskanen, 1971) in public choice theory posits that government bureaucrats seek to maximize:",
    options: [
      "Their total agency budget size (Budget Maximization), resulting in over-provision of public services beyond the socially optimal level",
      "Public consumer surplus",
      "Tax efficiency",
      "Private corporate dividends"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Choice & Bureaucracy → William Niskanen's Budget-Maximizing Model (1971)",
    explanation: "William Niskanen modeled bureaucrats as self-interested agents whose salary, prestige, power, and perks depend on the total budget allocated to their department. Facing a passive legislature with asymmetric information, bureaucrats expand output up to where Total Social Benefit = Total Social Cost (allocating twice the socially optimal level where MSB = MSC)."
  },

  // --- UNIT 7: MONEY & BANKING (Q61 - Q70) ---
  {
    id: 61,
    test_id: 4,
    question: "In the Keynesian Liquidity Preference Theory, the demand for money is divided into:",
    options: [
      "Transactions demand, Precautionary demand (both dependent on income Y), and Speculative demand (dependent on interest rate r)",
      "Consumption demand and Investment demand",
      "Domestic currency demand and Foreign exchange demand",
      "Direct tax demand and Indirect tax demand"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Keynesian Money Demand → Three Motives for Holding Cash",
    explanation: "J.M. Keynes (1936) formulated total money demand L = L1(Y) + L2(r). L1 covers transactions and precautionary motives (positive function of national income Y), while L2 is speculative demand driven by interest rate expectations (inversely related to interest rate r)."
  },
  {
    id: 62,
    test_id: 4,
    question: "The 'High-Powered Money' (Monetary Base / Reserve Money / M0) in India comprises:",
    options: [
      "Currency in circulation + Bankers' deposits with the RBI + 'Other' deposits with the RBI",
      "Currency with public + Time deposits with commercial banks",
      "Total post office savings deposits alone",
      "Central government market loans"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Central Banking & Reserve Money → Components of High-Powered Money (M0)",
    explanation: "Reserve Money (M0) represents the direct monetary liabilities of the Reserve Bank of India: M0 = Currency in Circulation (Currency with public + cash in hand with banks) + Bankers' Deposits with RBI + Other Deposits with RBI."
  },
  {
    id: 63,
    test_id: 4,
    question: "In Open Market Operations (OMO), when the Reserve Bank of India purchases government securities from the open secondary market, it:",
    options: [
      "Injects high-powered liquidity into the banking system, expanding bank credit and money supply",
      "Absorbs liquidity and raises repo rates",
      "Reduces commercial bank reserves",
      "Directly reduces the central fiscal deficit"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Policy Transmission → RBI Open Market Operations (OMOs)",
    explanation: "When the central bank buys sovereign bonds from banks/public, it credits their settlement accounts with new reserve balances. This expands the monetary base (M0), increases commercial banks' excess reserves, lowers interbank money market rates, and expands overall credit supply."
  },
  {
    id: 64,
    test_id: 4,
    question: "The 'Inverted Yield Curve' (where short-term bond yields exceed long-term bond yields) is historically regarded as a reliable leading indicator of:",
    options: [
      "An impending economic recession",
      "Hyperinflationary boom",
      "A massive surge in long-term capital investment",
      "Zero corporate default risk"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Financial Markets & Yield Curve → Inverted Yield Curve as Recession Predictor",
    explanation: "An inverted yield curve reflects market expectations that central banks have aggressively raised short-term rates to combat inflation, which will slow the economy and force rate cuts in the future. In historical data, yield curve inversions (10-year minus 2-year/3-month yields < 0) precede recessions."
  },
  {
    id: 65,
    test_id: 4,
    question: "Under the Reserve Bank of India's 'Flexible Inflation Targeting' (FIT) framework adopted in 2016, the statutory inflation target is:",
    options: [
      "4% Consumer Price Index (CPI) inflation with a tolerance band of ± 2% (2% to 6%)",
      "2% Wholesale Price Index (WPI) inflation",
      "6% GDP Deflator inflation",
      "0% absolute inflation"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Policy Framework → RBI Flexible Inflation Targeting (Urjit Patel Committee)",
    explanation: "Under the amended RBI Act (2016) based on Urjit Patel Committee recommendations, the Central Government in consultation with RBI notified the headline CPI target at 4.0% with a tolerance band of ±2% (upper tolerance limit 6%, lower tolerance limit 2%). Failure occurs if inflation stays outside this band for three consecutive quarters."
  },
  {
    id: 66,
    test_id: 4,
    question: "A 'Non-Performing Asset' (NPA) for a commercial bank in India is classified as a loan or advance where interest or installment of principal remains overdue for a period of more than:",
    options: [
      "90 days",
      "30 days",
      "180 days",
      "365 days"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Prudential Norms in Indian Banking → RBI 90-day NPA Classification Norm",
    explanation: "In accordance with RBI prudential norms, an asset becomes non-performing when it ceases to generate income for the bank. For term loans, a loan is categorized as an NPA if interest and/or installment of principal remains overdue for more than 90 days."
  },
  {
    id: 67,
    test_id: 4,
    question: "In the Cambridge Cash Balance Approach to the Quantity Theory of Money (Marshall, Pigou, Robertson, Keynes), the money demand equation M_d = k * P * Y emphasizes:",
    options: [
      "Money as a store of value held by individuals as cash balances (k represents the proportion of nominal income held in cash: k = 1 / V)",
      "Money purely as a medium of exchange in physical transactions",
      "Government bond yields exclusively",
      "Foreign exchange trade velocity"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Monetary Theories → Cambridge Cash Balance Equation (Alfred Marshall & A.C. Pigou)",
    explanation: "Unlike Fisher's mechanical transactions equation, the Cambridge school emphasized human portfolio choice: k is the fraction of annual nominal income (PY) individuals choose to hold in cash balances. Mathematically, k is the reciprocal of income velocity of money: k = 1 / V."
  },
  {
    id: 68,
    test_id: 4,
    question: "The 'Prompt Corrective Action' (PCA) framework of the Reserve Bank of India is triggered when a commercial bank breaches specified threshold levels of:",
    options: [
      "Capital to Risk-Weighted Assets Ratio (CRAR), Net NPAs, and Leverage Ratio",
      "Number of ATMs and branches",
      "Foreign shareholding percentage",
      "Advertising expenditure"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Regulation → RBI Prompt Corrective Action (PCA) Framework",
    explanation: "Introduced in 2002 and revised periodically, PCA serves as an early supervisory intervention framework monitoring: (1) Capital Adequacy (CRAR/CET1 ratio), (2) Asset Quality (Net NPA ratio), and (3) Leverage Ratio. Breaching risk thresholds triggers restrictions on dividend distribution, branch expansion, and lending."
  },
  {
    id: 69,
    test_id: 4,
    question: "The 'Shadow Banking System' refers to:",
    options: [
      "Non-Bank Financial Intermediaries (such as NBFCs, hedge funds, money market mutual funds) that conduct maturity transformation and credit intermediation without direct central bank backstops",
      "Illegal cash lending in informal village markets",
      "State-owned postal banks",
      "Foreign central banks"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Financial Intermediation → Shadow Banking & Systemic Risk",
    explanation: "Shadow banking encompasses financial institutions and activities that create credit outside the formal regulatory perimeter of commercial banking. Because they lack access to central bank discount window liquidity and explicit deposit insurance, they are vulnerable to systemic runs and asset-liability mismatches."
  },
  {
    id: 70,
    test_id: 4,
    question: "The 'Radcliffe-Saye Committee Report' (UK, 1959) on the working of the monetary system concluded that:",
    options: [
      "Monetary policy should focus on controlling overall liquidity in the whole financial system rather than exclusively regulating narrow money supply (M1)",
      "Gold standard must be reinstated immediately",
      "Interest rates have zero effect on investment",
      "Cash reserve ratio is the only effective instrument"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Hard",
    concept: "Monetary History → Radcliffe Committee Report (1959)",
    explanation: "The Radcliffe Committee (1959) argued that money is not clearly distinguishable from other liquid assets. Since spending depends on overall liquidity (availability of credit from non-bank financial intermediaries as well as banks), targeting a specific money supply measure is insufficient."
  },

  // --- UNIT 8: DEVELOPMENT ECONOMICS (Q71 - Q80) ---
  {
    id: 71,
    test_id: 4,
    question: "In Ragnar Nurkse's 'Problems of Capital Formation in Underdeveloped Countries' (1953), the 'Vicious Circle of Poverty' operates on:",
    options: [
      "Both the Supply side (Low Income → Low Savings → Low Capital → Low Productivity → Low Income) and the Demand side (Low Income → Low Purchasing Power → Low Investment Incentive)",
      "The supply side exclusively",
      "External terms of trade alone",
      "Government budget deficits"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Poverty Traps → Ragnar Nurkse's Vicious Circles of Poverty (1953)",
    explanation: "Ragnar Nurkse famously stated: 'A country is poor because it is poor.' On the supply side, low capacity to save restricts capital accumulation. On the demand side, small domestic market size limits inducement to invest in productive manufacturing capital."
  },
  {
    id: 72,
    test_id: 4,
    question: "The 'Critical Minimum Effort' thesis for economic development was formulated by:",
    options: [
      "Harvey Leibenstein (1957)",
      "Simon Kuznets",
      "Robert Solow",
      "Joan Robinson"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Growth Theoretic Theses → Harvey Leibenstein's Critical Minimum Effort (1957)",
    explanation: "Harvey Leibenstein (1957) posited that underdeveloped economies are trapped in a low-level equilibrium trap where small developmental efforts stimulate population growth and other 'income-depressing forces' that wipe out initial gains. Only an investment effort exceeding a critical minimum threshold can achieve sustained per capita growth."
  },
  {
    id: 73,
    test_id: 4,
    question: "Simon Kuznets' 'Inverted-U Hypothesis' (1955) regarding economic development describes the relationship between:",
    options: [
      "Economic growth (per capita income) and income inequality (inequality first rises in early development stages, peaks, and then declines in mature economies)",
      "Inflation and unemployment",
      "Population growth and fertility rates",
      "Tariffs and trade balance"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Inequality & Development → Simon Kuznets Inverted-U Hypothesis (1955)",
    explanation: "Simon Kuznets (1971 Nobel laureate) observed that during structural transformation from rural agriculture to urban manufacturing, income inequality initially widens. As industrialization matures, democratization, welfare safety nets, and human capital diffusion cause income inequality to narrow."
  },
  {
    id: 74,
    test_id: 4,
    question: "The 'Capability Approach' to human development and welfare pioneered by Amartya Sen defines development as:",
    options: [
      "The expansion of human 'Capabilities' and substantive 'Freedoms' that enable individuals to lead the lives they have reason to value (Functionings)",
      "The maximization of Gross Domestic Product per capita alone",
      "Equal distribution of physical consumer commodities",
      "Nationalization of private assets"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Welfare & Development Philosophy → Amartya Sen's Capability Approach (1999)",
    explanation: "Amartya Sen (1998 Nobel laureate) shifted the development paradigm from commodity wealth (GDP/income) to human capabilities: what people are actually able to do and be (Functionings, such as being nourished, educated, healthy, and participating freely in public life)."
  },
  {
    id: 75,
    test_id: 4,
    question: "The 'Endogenous Growth Theory' developed by Paul Romer (1990) attributes long-run economic growth to:",
    options: [
      "Investments in Research & Development (R&D), Human Capital, and Knowledge spillover externalities (ideas as Non-Rival Goods)",
      "Exogenous technological shocks falling like manna from heaven",
      "Declining capital depreciation rates",
      "Fixed land endowments"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Endogenous Growth → Paul Romer's Ideas & Non-Rivalry Model (2018 Nobel)",
    explanation: "Paul Romer (2018 Nobel laureate) showed that technological knowledge consists of 'ideas' that are non-rival (usable simultaneously by many without depletion). Creating ideas involves large upfront fixed R&D costs and near-zero marginal reproduction costs, driving endogenous long-term economic growth."
  },
  {
    id: 76,
    test_id: 4,
    question: "The 'Lorenz Curve' and 'Gini Coefficient' are standard tools for measuring income distribution. The Gini coefficient is calculated geometrically as:",
    options: [
      "Area between the Line of Perfect Equality and the Lorenz Curve (A) divided by the total area under the Line of Perfect Equality (A + B): G = A / (A + B)",
      "The ratio of top 10% income to bottom 10% income",
      "The slope of the Phillips curve",
      "The variance of logarithm of consumption"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Inequality Measurement → Lorenz Curve & Gini Coefficient (Corrado Gini)",
    explanation: "Corrado Gini (1912) defined the Gini Coefficient: G = A / (A + B). A Gini coefficient of 0 indicates perfect income equality (Lorenz curve coincides with the 45-degree line), and a Gini of 1 indicates maximum absolute inequality (one person earns 100% of national income)."
  },
  {
    id: 77,
    test_id: 4,
    question: "In development economics, the 'Low-Level Equilibrium Trap' model was developed by:",
    options: [
      "Richard R. Nelson (1956)",
      "W.W. Rostow",
      "Gunnar Myrdal",
      "Hla Myint"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Growth Traps → Richard Nelson's Low-Level Equilibrium Trap (1956)",
    explanation: "Richard R. Nelson (1956) modeled how per capita income increases lead to higher population growth up to a biological ceiling (Malthusian mechanism), while capital accumulation is slow. Unless a massive surge in investment pushes per capita income beyond a critical point, the economy is pulled back into the low-level trap."
  },
  {
    id: 78,
    test_id: 4,
    question: "The 'Foster-Greer-Thorbecke' (FGT) class of poverty measures (1984) is expressed as P_α = (1/N) * Σ [(z - y_i)/z]^α. When α = 2, P_2 measures:",
    options: [
      "Poverty Severity (Squared Poverty Gap, which accounts for inequality among the poor)",
      "Poverty Headcount Ratio (H)",
      "Poverty Gap Index (PG)",
      "Human Development Index"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Poverty Measurement Metrics → Foster-Greer-Thorbecke (FGT) Index (1984)",
    explanation: "Erik Thorbecke, James Foster, and Joel Greer formulated the FGT index: α = 0 gives the Headcount Ratio (P_0 = q/N); α = 1 gives the Poverty Gap Ratio (P_1, measuring depth/distance from poverty line); α = 2 gives the Squared Poverty Gap (P_2, measuring poverty severity by placing higher weight on the poorest of the poor, satisfying Sen's transfer axiom)."
  },
  {
    id: 79,
    test_id: 4,
    question: "The 'Vent for Surplus' theory of international trade in developing countries was originated by Adam Smith and revived by:",
    options: [
      "Hla Myint (1958)",
      "Paul Prebisch",
      "W. Arthur Lewis",
      "Michael Todaro"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Trade & Development → Hla Myint's Vent for Surplus Theory (1958)",
    explanation: "Burmese economist Hla Myint (1958) demonstrated that developing agrarian economies often possess unutilized land and surplus labor due to narrow domestic markets. Opening up to international trade provides a 'vent' (market outlet) to bring these idle resources into export production without reducing domestic output."
  },
  {
    id: 80,
    test_id: 4,
    question: "The 'Physical Quality of Life Index' (PQLI) created by Morris D. Morris (1979) combines which three indicators?",
    options: [
      "Infant Mortality Rate, Life Expectancy at age one, and Basic Literacy Rate",
      "Per capita income, Calorie intake, and Housing units",
      "GNI per capita, Carbon emissions, and School enrollment",
      "Unemployment rate, Inflation rate, and Crime rate"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Welfare Indices → Morris D. Morris Physical Quality of Life Index (PQLI, 1979)",
    explanation: "Developed for the Overseas Development Council by Morris David Morris (1979), PQLI was an early non-monetary welfare composite scoring countries from 1 to 100 on: (1) Infant Mortality Rate, (2) Life Expectancy at age 1, and (3) Basic Adult Literacy."
  },

  // --- UNIT 9: INDIAN ECONOMY (Q81 - Q90) ---
  {
    id: 81,
    test_id: 4,
    question: "The 15th Finance Commission of India (chaired by N.K. Singh) recommended a vertical devolution share of central divisible tax pool to States of:",
    options: [
      "41% (retained at 41% after adjusting 1% for the newly created Union Territories of Jammu & Kashmir and Ladakh)",
      "42%",
      "32%",
      "50%"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Indian Fiscal Federalism → 15th Finance Commission Devolution Ratio",
    explanation: "The 14th Finance Commission had raised vertical tax devolution from 32% to 42%. The 15th Finance Commission maintained the 42% benchmark, adjusting it to 41% to account for the reorganization of the erstwhile state of Jammu and Kashmir into the Union Territories of J&K and Ladakh (financed by the Centre)."
  },
  {
    id: 82,
    test_id: 4,
    question: "In the horizontal tax devolution formula of the 15th Finance Commission, which criterion was assigned the highest weightage?",
    options: [
      "Income Distance (45%)",
      "Population (2011 Census) (15%)",
      "Area (15%)",
      "Forest & Ecology (10%)"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "15th Finance Commission → Horizontal Tax Devolution Formula",
    explanation: "The 15th Finance Commission criteria weights: (1) Income Distance - 45%, (2) Population (2011 Census) - 15%, (3) Area - 15%, (4) Forest & Ecology - 10%, (5) Demographic Performance - 12.5%, and (6) Tax Effort - 2.5%."
  },
  {
    id: 83,
    test_id: 4,
    question: "The 'Pradhan Mantri Jan Dhan Yojana' (PMJDY) launched in August 2014 achieved universal financial inclusion by providing:",
    options: [
      "Zero-balance basic savings bank deposit accounts with RuPay debit cards, built-in accident insurance, and overdraft facility",
      "Guaranteed government employment for 100 days",
      "Free agricultural machinery",
      "Direct equity shares in public sector banks"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Financial Inclusion in India → PMJDY Mission",
    explanation: "Launched on 28 August 2014, PMJDY is the National Mission for Financial Inclusion ensuring access to banking facilities, basic savings bank accounts with zero minimum balance requirement, RuPay debit cards with built-in accident cover, and overdraft limits up to ₹10,000."
  },
  {
    id: 84,
    test_id: 4,
    question: "According to the Rangarajan Committee Report on Poverty Measurement in India (2014), the daily per capita consumption expenditure poverty threshold was estimated at:",
    options: [
      "₹32 per day in rural areas and ₹47 per day in urban areas (at 2011-12 prices)",
      "₹10 per day in rural areas and ₹20 in urban areas",
      "₹100 per day uniformly across India",
      "₹500 per day"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Poverty Committees in India → Dr. C. Rangarajan Committee (2014)",
    explanation: "The Expert Group chaired by Dr. C. Rangarajan (2014) updated poverty estimation by incorporating independent nutritional and non-food norms: Monthly Per Capita Expenditure of ₹972 in rural areas (~₹32/day) and ₹1,407 in urban areas (~₹47/day), estimating an all-India poverty ratio of 29.5% for 2011-12."
  },
  {
    id: 85,
    test_id: 4,
    question: "The 'National Manufacturing Policy' and the revised MSME classification criteria introduced in India (effective July 2020) defines a 'Medium Enterprise' based on composite criteria of:",
    options: [
      "Investment in Plant & Machinery up to ₹50 Crore and Annual Turnover up to ₹250 Crore",
      "Investment up to ₹1 Crore and Turnover up to ₹5 Crore",
      "Investment up to ₹10 Crore and Turnover up to ₹50 Crore",
      "Investment up to ₹500 Crore"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Industrial Classification in India → Revised MSME Definition (2020)",
    explanation: "Under the Atmanirbhar Bharat package (July 1, 2020), MSMEs are classified under composite criteria: Micro: Investment <= ₹1 Cr & Turnover <= ₹5 Cr; Small: Investment <= ₹10 Cr & Turnover <= ₹50 Cr; Medium: Investment <= ₹50 Cr & Turnover <= ₹250 Cr."
  },
  {
    id: 86,
    test_id: 4,
    question: "The 'Foreign Exchange Management Act' (FEMA), which replaced the restrictive Foreign Exchange Regulation Act (FERA 1973), was enacted in India in:",
    options: [
      "1999 (effective from June 1, 2000)",
      "1991",
      "2014",
      "1985"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "External Sector Reforms → FEMA 1999 vs FERA 1973",
    explanation: "FEMA 1999 replaced the draconian FERA 1973. While FERA treated foreign exchange violations as criminal offenses with imprisonment, FEMA decriminalized forex violations, treating them as civil offenses to facilitate external trade and cross-border payments."
  },
  {
    id: 87,
    test_id: 4,
    question: "In India's National Income Accounting, the base year for calculating real GDP and Gross Value Added (GVA) was revised in January 2015 by the Central Statistics Office (CSO) to:",
    options: [
      "2011-12 (shifting to Gross Value Added at Basic Prices)",
      "2004-05",
      "1993-94",
      "2020-21"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "National Accounts Statistics → Base Year Revision 2011-12 & GVA Methodology",
    explanation: "In January 2015, the National Statistical Office updated the national accounts series from base year 2004-05 to 2011-12, aligned with the UN System of National Accounts (SNA 2008), adopting GVA at Basic Prices and headline GDP at Market Prices."
  },
  {
    id: 88,
    test_id: 4,
    question: "The 'Kisan Credit Card' (KCC) scheme was introduced in India in 1998 based on the recommendations of which committee?",
    options: [
      "R.V. Gupta Committee",
      "M. Narasimham Committee",
      "C. Rangarajan Committee",
      "B. Venkatappaiah Committee"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Agricultural Finance in India → NABARD Kisan Credit Card Scheme (1998)",
    explanation: "Formulated by NABARD based on the recommendations of the R.V. Gupta Committee on Agricultural Credit, the KCC scheme was launched in 1998 to provide timely, flexible, and simplified institutional credit to farmers for agricultural cultivation and allied activities."
  },
  {
    id: 89,
    test_id: 4,
    question: "The 'NITI Aayog' (National Institution for Transforming India) replaced the 65-year-old Planning Commission of India on:",
    options: [
      "January 1, 2015",
      "August 15, 2014",
      "July 1, 2017",
      "April 1, 2016"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Policy Think Tanks in India → Establishment of NITI Aayog (2015)",
    explanation: "Established via a Union Cabinet resolution on January 1, 2015, NITI Aayog replaced the Planning Commission. Chaired by the Prime Minister and comprising all State Chief Ministers in its Governing Council, NITI Aayog functions as a policy think tank fostering 'Cooperative Federalism'."
  },
  {
    id: 90,
    test_id: 4,
    question: "In the 2024-25 Union Budget of India, the fiscal deficit target for the Central Government as a percentage of GDP was set at:",
    options: [
      "4.9% of GDP (with a commitment to bring it below 4.5% by FY 2025-26)",
      "3.0%",
      "6.8%",
      "8.5%"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Union Budget & Fiscal Policy → Central Government Fiscal Deficit Path",
    explanation: "In the Union Budget 2024-25 presented by the Finance Minister, the Central Government's fiscal deficit was estimated at 4.9% of GDP (down from 5.6% in 2023-24 revised estimates), adhering to the fiscal consolidation path to reach below 4.5% by 2025-26."
  },

  // --- UNIT 10: ENVIRONMENTAL ECONOMICS (Q91 - Q100) ---
  {
    id: 91,
    test_id: 4,
    question: "The 'Tragedy of the Commons' formulated by Garrett Hardin (1968) arises in Common Pool Resources (CPRs) because:",
    options: [
      "Resources are rivalrous in consumption but non-excludable, leading rational self-interested individuals to over-extract and deplete the resource",
      "The government imposes excessive taxes",
      "Private property rights are enforced too strictly",
      "Marginal cost of extraction exceeds average revenue"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Common Property Resources → Garrett Hardin's Tragedy of the Commons (1968)",
    explanation: "Garrett Hardin (1968) showed that open-access common pool resources (fisheries, communal pastures, clean air) face rivalry in consumption without excludability. Individual users capture 100% of the private benefit of added resource extraction while sharing the degradation cost across the entire community, leading to overexploitation."
  },
  {
    id: 92,
    test_id: 4,
    question: "Elinor Ostrom's research (2009 Nobel Prize in Economic Sciences) demonstrated that common pool resource degradation can be prevented through:",
    options: [
      "Community-based self-governing institutions and local cooperative management rules, without requiring top-down state regulation or full private privatization",
      "Mandatory privatization of all water resources",
      "Uniform global trade bans",
      "Pure laissez-faire unregulated free markets"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Institutions & CPR Governance → Elinor Ostrom's Design Principles (2009 Nobel)",
    explanation: "Elinor Ostrom (first female Economics Nobel laureate) refuted the inevitability of the Tragedy of the Commons by showing that local communities around the world successfully manage common pool resources (forests, irrigation canals, pastures) through self-devised institutional rules, monitoring, graduated sanctions, and conflict resolution mechanisms."
  },
  {
    id: 93,
    test_id: 4,
    question: "The 'Hedonic Price Method' (Sherwin Rosen, 1974) values environmental quality (such as clean air or noise reduction) by analyzing:",
    options: [
      "The price differentials of differentiated market goods (such as residential real estate property values) attributable to varying local environmental attributes",
      "Direct contingent valuation survey responses",
      "The engineering cost of building air purifiers",
      "Hospital medical bills of asthma patients"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Non-Market Environmental Valuation → Hedonic Property Pricing Method",
    explanation: "Sherwin Rosen (1974) established hedonic pricing as a revealed-preference technique: by regressing housing sales prices on structural characteristics (square footage, rooms), neighborhood traits, and local environmental indicators (air quality, proximity to parks, noise levels), the implicit marginal willingness to pay for environmental cleanliness is isolated."
  },
  {
    id: 94,
    test_id: 4,
    question: "Under the 'Stern Review on the Economics of Climate Change' (Nicholas Stern, 2006), immediate aggressive global investment in climate mitigation (approx 1-2% of global GDP) was strongly recommended because:",
    options: [
      "Using a very low social pure rate of time preference (δ ≈ 0.1%), the discounted future damages from unabated climate change (5% to 20% loss of global per capita consumption) far exceed the immediate costs of action",
      "Carbon emissions automatically reverse in 5 years",
      "Fossil fuels will be fully exhausted by 2030",
      "Climate change has zero economic cost"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Climate Economics & Discounting → Nicholas Stern Review (2006)",
    explanation: "Nicholas Stern (2006) emphasized intergenerational equity by applying an ethical pure rate of time preference near zero (δ = 0.1%). Consequently, distant climate damages carry heavy present value weights, proving that early proactive mitigation is vastly more cost-effective than enduring future climate damages."
  },
  {
    id: 95,
    test_id: 4,
    question: "In the context of sustainable development, 'Strong Sustainability' (associated with Herman Daly and Ecological Economics) asserts that:",
    options: [
      "Natural capital and manufactured man-made capital are complements, not substitutes; critical natural capital must be preserved in physical terms for future generations",
      "Man-made physical capital can perfectly substitute for all lost ecosystems",
      "Technological growth ensures infinite resource extraction",
      "Economic growth should take priority over biodiversity"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Sustainability Paradigms → Strong Sustainability vs Weak Sustainability",
    explanation: "Unlike Weak Sustainability (Hartwick/Solow paradigm of infinite substitutability between physical and natural capital), Strong Sustainability (Ecological Economics) posits that essential life-support ecological systems (ozone layer, carbon cycle, biodiversity) have no man-made substitutes and must be preserved intact."
  },
  {
    id: 96,
    test_id: 4,
    question: "The 'Polluter Pays Principle' (PPP) endorsed by the OECD (1972) and Rio Declaration (Principle 16) mandates that:",
    options: [
      "The entity responsible for causing environmental pollution must bear the full financial costs of pollution prevention and control measures to avoid market distortions",
      "The general public must pay taxes to compensate polluting factories",
      "Governments must subsidize all waste disposal",
      "Developing countries are exempt from pollution laws"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Environmental Policy Principles → Polluter Pays Principle (OECD 1972)",
    explanation: "The Polluter Pays Principle requires that the costs of pollution abatement, prevention, and environmental remediation are internalized into the production costs of the polluter, ensuring market prices reflect full social marginal costs without requiring state subsidies."
  },
  {
    id: 97,
    test_id: 4,
    question: "A 'Cap-and-Trade' emissions permit trading system achieves cost-effective pollution abatement across diverse industrial firms because:",
    options: [
      "Trading permits in a competitive market ensures that all firms equalize their Marginal Abatement Costs (MAC) to the equilibrium permit price (MAC_1 = MAC_2 = P_permit)",
      "Every firm is forced to cut emissions by the exact same physical percentage",
      "Government dictates the exact technology each factory must install",
      "Permits eliminate all private abatement expenses"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Market-Based Instruments → Tradable Emission Permits & Cost Effectiveness (J.H. Dales)",
    explanation: "J.H. Dales (1968) showed that setting a total cap and allowing firms to trade permits achieves the Equi-Marginal Principle of Abatement: low-cost abatement firms reduce emissions beyond their quota and sell excess permits to high-cost abatement firms until MAC across all polluters equal the market permit price, minimizing total societal compliance cost."
  },
  {
    id: 98,
    test_id: 4,
    question: "The 'Total Economic Value' (TEV) of an environmental resource is divided into:",
    options: [
      "Use Value (Direct Use, Indirect Use, and Option Value) and Non-Use Value (Existence Value and Bequest Value)",
      "Market price and Government subsidy",
      "Total fixed cost and Total variable cost",
      "Tangible assets and Currency reserves"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Environmental Valuation Framework → Total Economic Value (TEV) Decomposition",
    explanation: "Total Economic Value (TEV) = Use Value + Non-Use Value. Use values include direct extractive/recreational use, indirect ecological services (flood control, carbon sequestration), and option value. Non-use values encompass bequest value (preserving for future generations) and existence value (intrinsic value of species survival)."
  },
  {
    id: 99,
    test_id: 4,
    question: "In the Paris Climate Agreement (COP21, 2015), the central global temperature goal agreed by 196 parties is to:",
    options: [
      "Hold the increase in global average temperature to well below 2°C above pre-industrial levels and pursue efforts to limit the temperature increase to 1.5°C",
      "Allow temperature to rise by 4°C by 2100",
      "Mandate zero economic growth for 50 years",
      "Ban all internal combustion engines by 2018"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "International Environmental Treaties → Paris Climate Agreement (COP21)",
    explanation: "Article 2 of the Paris Agreement (2015) commits parties to: 'Holding the increase in the global average temperature to well below 2°C above pre-industrial levels and pursuing efforts to limit the temperature increase to 1.5°C', operationalized through nationally determined contributions (NDCs) updated every 5 years."
  },
  {
    id: 100,
    test_id: 4,
    question: "The 'Carbon Border Adjustment Mechanism' (CBAM) adopted by the European Union is designed to:",
    options: [
      "Impose a carbon tariff on imported carbon-intensive goods (e.g. steel, cement, aluminum) equivalent to the domestic ETS carbon price to prevent 'Carbon Leakage'",
      "Subsidize imported fossil fuels",
      "Eliminate all trade tariffs with developing countries",
      "Ban all maritime shipping"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Trade & Climate Policy → Carbon Border Adjustment Mechanism (CBAM)",
    explanation: "The EU's CBAM addresses 'Carbon Leakage' (firms moving production to countries with weaker climate policies). It equalizes the carbon price paid by domestic EU producers under the EU Emissions Trading System (ETS) and foreign exporters of carbon-intensive goods entering the EU single market."
  }
];
