import { Question } from '../types';

export const mockTest02Questions: Question[] = [
  // --- UNIT 1: MICRO ECONOMICS (Q1 - Q14) ---
  {
    id: 1,
    test_id: 2,
    question: "According to Roy's Identity, the Marshallian demand function x_i(P, M) can be derived from the Indirect Utility Function V(P, M) as:",
    options: [
      "x_i = - (∂V/∂P_i) / (∂V/∂M)",
      "x_i = (∂V/∂P_i) / (∂V/∂M)",
      "x_i = ∂V/∂P_i",
      "x_i = - (∂V/∂M) / (∂V/∂P_i)"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Hard",
    concept: "Duality in Consumer Theory → Roy's Identity",
    explanation: "Roy's Identity provides a direct bridge between the indirect utility function V(P, M) and Marshallian demand: x_i(P, M) = - (∂V/∂P_i) / (∂V/∂M). It is derived using the Envelope Theorem applied to the consumer's utility maximization problem."
  },
  {
    id: 2,
    test_id: 2,
    question: "Shephard's Lemma states that the Hicksian (compensated) demand function h_i(P, U) is obtained by taking the partial derivative of:",
    options: [
      "The Expenditure Function E(P, U) with respect to price P_i: h_i = ∂E/∂P_i",
      "The Direct Utility Function with respect to quantity x_i",
      "The Profit Function with respect to wage w",
      "The Cost Function with respect to output Q"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Duality in Consumer Theory → Shephard's Lemma",
    explanation: "Shephard's Lemma demonstrates that differentiating the expenditure function E(P, U) with respect to the price of commodity i yields the Hicksian (compensated) demand for that commodity: h_i(P, U) = ∂E(P, U)/∂P_i."
  },
  {
    id: 3,
    test_id: 2,
    question: "The Arrow-Pratt measure of Absolute Risk Aversion (ARA) for a utility function U(W) is defined as:",
    options: [
      "A(W) = - U''(W) / U'(W)",
      "A(W) = - W * [U''(W) / U'(W)]",
      "A(W) = U'(W) / U''(W)",
      "A(W) = [U'(W)]^2 / U''(W)"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Choice Under Uncertainty → Arrow-Pratt Measure of Risk Aversion",
    explanation: "Kenneth Arrow and John Pratt defined the coefficient of Absolute Risk Aversion as A(W) = - U''(W) / U'(W). The minus sign ensures a positive value for risk-averse agents (where U''(W) < 0). Relative Risk Aversion is R(W) = W * A(W)."
  },
  {
    id: 4,
    test_id: 2,
    question: "In the Constant Elasticity of Substitution (CES) production function Q = A * [α*K^(-ρ) + (1 - α)*L^(-ρ)]^(-1/ρ), the elasticity of substitution (σ) is given by:",
    options: [
      "σ = 1 / (1 + ρ)",
      "σ = 1 - ρ",
      "σ = 1 / ρ",
      "σ = 1 + ρ"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Production Theory → CES Production Function Elasticity",
    explanation: "In the Arrow-Chenery-Minhas-Solow CES production function, the elasticity of substitution σ = 1 / (1 + ρ), where ρ is the substitution parameter. When ρ → 0, σ → 1 (Cobb-Douglas); when ρ → ∞, σ → 0 (Leontief); when ρ = -1, σ → ∞ (Linear)."
  },
  {
    id: 5,
    test_id: 2,
    question: "In adverse selection models of health insurance (Rothschild-Stiglitz model), high-risk individuals driving low-risk individuals out of the market results from:",
    options: [
      "Hidden information (Asymmetric Information prior to contract signing)",
      "Hidden action after signing the contract (Moral Hazard)",
      "Monopolistic price setting by hospitals",
      "Government price floors"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Information Economics → Adverse Selection (Rothschild-Stiglitz)",
    explanation: "Adverse selection arises from pre-contractual hidden information. Because insurers cannot distinguish between high-risk and low-risk buyers, setting an average premium induces low-risk individuals to opt out, leaving an unviable pool of high-risk policyholders."
  },
  {
    id: 6,
    test_id: 2,
    question: "In a Lindahl Equilibrium for public goods provision, each individual pays a personalized tax-share equal to:",
    options: [
      "Their personal Marginal Rate of Substitution (Marginal Willingness to Pay) for the public good",
      "An equal lump-sum divided by total population",
      "A progressive income tax rate",
      "Zero, because public goods are free"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Public Goods & Welfare → Lindahl Pricing & Equilibrium",
    explanation: "In Erik Lindahl's voluntary exchange model, the public good is efficiently provided when each consumer pays a personalized price (Lindahl tax price t_i) equal to their marginal evaluation (MRS_i), such that the sum of tax shares covers total marginal cost (Σ t_i = MC)."
  },
  {
    id: 7,
    test_id: 2,
    question: "A subgame perfect Nash equilibrium (SPNE) in dynamic sequential games with complete and perfect information is identified using:",
    options: [
      "Backward Induction (Kuhn's Theorem)",
      "Iterated elimination of strictly dominated strategies",
      "Mixed strategy minimax randomization",
      "First-mover coin toss"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Game Theory → Subgame Perfect Equilibrium & Backward Induction",
    explanation: "Reinhard Selten (1965) introduced Subgame Perfection. In finite sequential games of perfect information, a Subgame Perfect Nash Equilibrium (SPNE) eliminates non-credible threats and is solved using Backward Induction starting from the terminal nodes."
  },
  {
    id: 8,
    test_id: 2,
    question: "The Lerner Index of Monopoly Power is mathematically formulated as:",
    options: [
      "L = (P - MC) / P = 1 / |e_d|",
      "L = (P - ATC) / MC",
      "L = P * e_d",
      "L = MR / MC"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Monopoly Power → Abba Lerner Index",
    explanation: "Abba Lerner (1934) defined the degree of monopoly power as L = (P - MC) / P. In profit-maximizing equilibrium where MR = MC and MR = P*(1 - 1/|e_d|), the Lerner Index is identically equal to the inverse of the price elasticity of demand: L = 1 / |e_d|."
  },
  {
    id: 9,
    test_id: 2,
    question: "According to the Scitovsky Double Criterion of welfare economics, a policy change from State A to State B improves social welfare if and only if:",
    options: [
      "The gainers from the change can compensate the losers to move from A to B (Kaldor-Hicks), AND the losers cannot bribe the gainers to prevent the change from being reversed back from B to A",
      "Everyone in society becomes strictly richer",
      "Total tax collections rise by at least 10%",
      "Prices of all consumption goods decline"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Hard",
    concept: "Welfare Economics → Scitovsky Double Criterion & Paradox",
    explanation: "Tibor Scitovsky (1941) showed that Kaldor-Hicks compensation tests can lead to contradiction (Scitovsky Paradox). The Scitovsky Double Criterion requires that: (1) Kaldor criterion holds (gainers can compensate losers to move A → B), and (2) Hicks reversal criterion does not hold (losers cannot bribe gainers to return B → A)."
  },
  {
    id: 10,
    test_id: 2,
    question: "In the context of General Equilibrium, Walras' Law states that:",
    options: [
      "Across all markets in an economy, the total sum of the values of excess demands is identically equal to zero (Σ P_i * Z_i = 0)",
      "Demand always exceeds supply in competitive markets",
      "Every market must clear with zero prices",
      "Money has no impact on relative prices in the short run"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "General Equilibrium → Walras' Law (Léon Walras)",
    explanation: "Walras' Law states that under budget constraints, the aggregate value of excess demand across all n markets is identically zero: Σ P_i * [D_i(P) - S_i(P)] ≡ 0. Consequently, if (n - 1) markets are in equilibrium, the n-th market must automatically be in equilibrium."
  },
  {
    id: 11,
    test_id: 2,
    question: "Under Third-Degree Price Discrimination across two separated markets (Market 1 and Market 2), the profit-maximizing monopolist charges a higher price in the market with:",
    options: [
      "Lower price elasticity of demand (|e_1| < |e_2| => P_1 > P_2)",
      "Higher price elasticity of demand",
      "Higher number of competing substitute goods",
      "Higher transport costs"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Price Discrimination → Third-Degree Price Discrimination Rule",
    explanation: "Equating marginal revenues MR1 = MR2 = MC yields P1*(1 - 1/|e1|) = P2*(1 - 1/|e2|). If |e1| < |e2| (demand is less elastic in market 1), the firm charges a higher price in market 1 (P1 > P2)."
  },
  {
    id: 12,
    test_id: 2,
    question: "The Slutsky Equation decomposes the total price effect (∂x_i/∂P_j) into:",
    options: [
      "Substitution Effect (∂h_i/∂P_j) minus Income Effect (x_j * ∂x_i/∂M)",
      "Income Effect plus Output Effect",
      "Cross-price elasticity divided by budget share",
      "Compensating variation plus equivalent variation"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory → Slutsky Equation Decomposition",
    explanation: "The Slutsky Equation decomposes the total price derivative into a pure substitution effect along the compensated Hicksian demand curve and an income effect weighted by current consumption: ∂x_i/∂P_j = ∂h_i/∂P_j - x_j * (∂x_i/∂M)."
  },
  {
    id: 13,
    test_id: 2,
    question: "In moral hazard problems with a risk-neutral principal and a risk-averse agent, the first-best optimal contract provides the agent with:",
    options: [
      "A fixed wage with zero risk, but is only achievable when the agent's effort is perfectly observable",
      "100% equity stake in company profits",
      "Zero payment if output drops",
      "Piece-rate wages irrespective of risk"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Hard",
    concept: "Principal-Agent Theory → Risk Sharing vs Incentives",
    explanation: "When effort is observable, the risk-neutral principal fully insures the risk-averse agent by offering a fixed wage. When effort is unobservable (second-best), the contract must expose the agent to risk via incentive pay to induce effort."
  },
  {
    id: 14,
    test_id: 2,
    question: "A dominant strategy in game theory is defined as a strategy that:",
    options: [
      "Yields a strictly higher payoff than any other strategy regardless of what strategy the opponent plays",
      "Is chosen only when both players cooperate",
      "Maximizes the joint sum of payoffs",
      "Guarantees a zero-sum result"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Game Theory → Strictly Dominant Strategy",
    explanation: "A strategy is strictly dominant if it delivers a strictly superior payoff to the player across every possible action chosen by opponents. In the classic Prisoner's Dilemma, 'Defect' is the dominant strategy for both players."
  },

  // --- UNIT 2: MACRO ECONOMICS (Q15 - Q28) ---
  {
    id: 15,
    test_id: 2,
    question: "In the Real Business Cycle (RBC) theory (Kydland and Prescott), economic fluctuations are primarily driven by:",
    options: [
      "Exogenous real technology and total factor productivity (TFP) shocks",
      "Unanticipated changes in the money supply",
      "Keynesian animal spirits in investment demand",
      "Government fiscal policy deficits"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Business Cycles → Real Business Cycle (RBC) Theory",
    explanation: "Finn Kydland and Edward Prescott (1982) demonstrated that business cycles represent equilibrium responses of rational, optimizing agents to exogenous real shocks—primarily technological and Total Factor Productivity (TFP) shocks—under flexible prices and competitive markets."
  },
  {
    id: 16,
    test_id: 2,
    question: "The Taylor Rule prescribes setting the nominal central bank policy interest rate based on:",
    options: [
      "The equilibrium real interest rate, the inflation gap (actual minus target inflation), and the output gap (actual minus potential GDP)",
      "The level of foreign exchange reserves only",
      "The growth rate of the M3 money supply alone",
      "The current government fiscal deficit"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Monetary Policy Rules → John Taylor's Rule (1993)",
    explanation: "John Taylor formulated: i = r* + π + 0.5*(π - π*) + 0.5*(y - y*). The rule dictates raising the nominal policy rate by more than 1-for-1 with inflation (the Taylor Principle) and responding positively to output gaps."
  },
  {
    id: 17,
    test_id: 2,
    question: "The Ricardian Equivalence Proposition (formalized by Robert Barro) states that:",
    options: [
      "Financing government spending through debt vs current taxes has identical effects on aggregate demand because forward-looking households save the tax cut for future tax liabilities",
      "Public debt always triggers immediate hyperinflation",
      "Deficit financing increases aggregate consumption demand permanently",
      "Taxes are more distortionary than government borrowing"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Fiscal Macroeconomics → Barro-Ricardian Equivalence",
    explanation: "Robert Barro (1974) demonstrated that under rational expectations, intergenerational altruism, and perfect credit markets, individuals realize government bonds imply future tax obligations. Hence, debt-financed tax cuts are saved rather than spent, leaving aggregate demand unchanged."
  },
  {
    id: 18,
    test_id: 2,
    question: "The 'Time Inconsistency Problem' in monetary policy (Kydland-Prescott, Barro-Gordon) explains why:",
    options: [
      "Discretionary policy leads to an inflationary bias with no permanent gain in employment, making rules superior to discretion",
      "Central banks always change interest rates with a 6-month delay",
      "Inflation expectations are backward looking",
      "Monetary policy cannot affect nominal variables"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Monetary Policy Credibility → Time Inconsistency (Kydland-Prescott)",
    explanation: "Kydland and Prescott (1977) proved that policymakers have an incentive to announce low inflation to anchor expectations, and then renege (create surprise inflation) to boost employment. Rational workers anticipate this, resulting in higher inflation without employment gains."
  },
  {
    id: 19,
    test_id: 2,
    question: "In Paul Romer's (1986, 1990) Endogenous Growth Model, sustained long-run economic growth is generated by:",
    options: [
      "Non-rivalrous ideas, technological R&D, and increasing returns to scale",
      "Exogenous technological shocks falling like manna from heaven",
      "Capital accumulation subject to strictly diminishing returns",
      "Permanent growth in the labor supply alone"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Endogenous Growth Theory → Paul Romer's R&D Model",
    explanation: "Paul Romer endogenized technological progress by treating knowledge and ideas as non-rival goods produced through intentional research and development (R&D). Non-rivalry introduces increasing returns to scale, escaping diminishing returns to capital."
  },
  {
    id: 20,
    test_id: 2,
    question: "According to Robert Hall's Random Walk Hypothesis of Consumption (1978), changes in consumption are:",
    options: [
      "Unpredictable and respond only to unanticipated news about permanent income (Consumption follows a random walk)",
      "Strictly predictable using lagged income values",
      "Equal to the savings rate times GDP",
      "Determined entirely by current disposable income"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Consumption Theory → Robert Hall's Random Walk Hypothesis",
    explanation: "Combining the permanent income hypothesis with rational expectations, Robert Hall proved that C_{t+1} = C_t + ε_{t+1}. Since consumers already incorporate all available past information into current consumption C_t, changes in consumption (ΔC) are unpredictable white noise."
  },
  {
    id: 21,
    test_id: 2,
    question: "In the Shapiro-Stiglitz Efficiency Wage Model, firms pay a wage strictly above the market-clearing level in order to:",
    options: [
      "Prevent worker shirking by making the cost of job loss (unemployment) a credible disciplinary threat",
      "Comply with international labor treaties",
      "Lower their corporate tax liabilities",
      "Discourage labor union formation"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Labor Market Imperfections → Shapiro-Stiglitz Efficiency Wage",
    explanation: "Carl Shapiro and Joseph Stiglitz (1984) showed that when monitoring worker effort is imperfect, firms pay wages above market-clearing to create a penalty for getting caught shirking and being fired into unemployment (No-Shirking Condition), explaining equilibrium involuntary unemployment."
  },
  {
    id: 22,
    test_id: 2,
    question: "The New Keynesian Phillips Curve derived from Calvo staggered price-setting relates current inflation to:",
    options: [
      "Expected future inflation and the current output gap (or real marginal cost)",
      "Past inflation only",
      "Money supply growth rate alone",
      "Nominal exchange rate changes"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "New Keynesian Economics → Calvo Pricing & New Keynesian Phillips Curve",
    explanation: "Under Guillermo Calvo's staggered price mechanism (where firms update prices with a fixed probability in each period), the New Keynesian Phillips Curve is forward-looking: π_t = β * E_t[π_{t+1}] + κ * (y_t - y*_t)."
  },
  {
    id: 23,
    test_id: 2,
    question: "In the AK Model of Endogenous Growth (where Y = A*K), the Marginal Product of Capital (MPK) is:",
    options: [
      "Constant and equal to A (does not diminish as capital accumulates)",
      "Diminishing toward zero as K increases",
      "Zero at all capital levels",
      "Dependent on population growth rate n"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Endogenous Growth → AK Model Constant Returns to Capital",
    explanation: "In the AK model (Sergio Rebelo, 1991), capital K is broadly defined to include human capital and physical capital. The marginal product of capital ∂Y/∂K = A is constant, allowing capital accumulation alone to generate perpetual positive per-capita growth."
  },
  {
    id: 24,
    test_id: 2,
    question: "The Dornbusch Overshooting Model of exchange rates demonstrates that after a permanent monetary expansion:",
    options: [
      "The nominal exchange rate depreciates immediately past its new long-run equilibrium before appreciating back (Overshooting), due to sticky goods prices and sluggish goods market adjustment",
      "The exchange rate adjusts instantly without any volatility",
      "The domestic currency appreciates permanently",
      "Interest rates rise to record levels"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Open Economy Macroeconomics → Rudiger Dornbusch Exchange Rate Overshooting",
    explanation: "Rudiger Dornbusch (1976) showed that because asset markets adjust instantly while goods prices are sticky, a monetary expansion drives domestic interest rates down. Under Uncovered Interest Parity (UIP), the currency must immediately depreciate excessively (overshoot) to generate expectations of future appreciation."
  },
  {
    id: 25,
    test_id: 2,
    question: "The 'Hysteresis Hypothesis' in European labor markets (Blanchard and Summers) suggests that:",
    options: [
      "A temporary recession causes a permanent increase in the natural rate of unemployment (NAIRU) as long-term unemployed lose skills and insider workers protect wages",
      "Unemployment returns automatically to the natural rate in 3 months",
      "Wages adjust smoothly downward during recessions",
      "Monetary policy has no short-run effects"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Unemployment Theories → Hysteresis in Unemployment (Blanchard-Summers)",
    explanation: "Olivier Blanchard and Lawrence Summers (1986) developed the hysteresis theory: cyclical shocks push workers into long-term unemployment, causing skill obsolescence and stigmatization. Employed 'insiders' bargain for wages ignoring the 'outsiders', permanently raising equilibrium unemployment."
  },
  {
    id: 26,
    test_id: 2,
    question: "In the Lucas Island Model (Rational Expectations Imperfect Information), producers expand output when the price of their good rises because they:",
    options: [
      "Mistake an aggregate general price level increase for a favorable relative price change for their own good (Lucas Aggregate Supply Curve)",
      "Face zero production costs",
      "Possess perfect complete information across all markets",
      "Are coerced by government regulations"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "New Classical Macroeconomics → Lucas Island Model & Surprise AS Curve",
    explanation: "Robert Lucas (1972) modeled producers located on isolated 'islands' with imperfect information. When local price P_i rises, the producer cannot tell whether it is an economy-wide inflation or a relative demand increase, so they partially expand output (Y = Y_n + α*(P - P^e))."
  },
  {
    id: 27,
    test_id: 2,
    question: "The 'Menu Cost' theory of New Keynesian economics (Mankiw, Akerlof, Yellen) proves that:",
    options: [
      "Small second-order costs of changing prices can cause substantial first-order macroeconomic fluctuations and price stickiness",
      "Firms change prices continuously every day",
      "Printing menus is the largest cost for all corporations",
      "Monopolies always set prices equal to marginal cost"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "New Keynesian Foundations → Menu Costs & Aggregate Demand Externalities",
    explanation: "N. Gregory Mankiw (1985) showed that because the profit function is flat around its maximum, small private menu costs prevent firms from updating prices. However, due to aggregate demand externalities, this private stickiness creates large macroeconomic welfare losses."
  },
  {
    id: 28,
    test_id: 2,
    question: "In the Life-Cycle Hypothesis of Franco Modigliani, an individual's marginal propensity to consume out of accumulated wealth (MPC_wealth) is:",
    options: [
      "Positive and equal to 1 / (Remaining Life Span in years: T - t)",
      "Zero at all ages",
      "Equal to 1.0 at birth",
      "Independent of retirement age"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theories → Franco Modigliani's Life-Cycle Hypothesis",
    explanation: "In Modigliani's Life-Cycle model, consumption is smoothed over lifetime T: C = (W + R*Y) / T. Hence, the marginal propensity to consume out of wealth is 1/T (or 1/(T - t) for remaining years), while the MPC out of current labor income is R/T."
  },

  // --- UNIT 3: MATHEMATICAL ECONOMICS (Q29 - Q38) ---
  {
    id: 29,
    test_id: 2,
    question: "The Bordered Hessian matrix |B| for a two-variable constrained optimization problem with Lagrangian L = f(x1, x2) + λ[c - g(x1, x2)] is evaluated to be |B| > 0. This confirms:",
    options: [
      "A constrained local maximum (for n=2, m=1)",
      "A constrained local minimum",
      "A saddle point",
      "Inconclusive test"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Hard",
    concept: "Constrained Optimization → Second Order Conditions via Bordered Hessian",
    explanation: "For a 2-variable, 1-constraint optimization problem, the Bordered Hessian has order 3. A sufficient second-order condition for a constrained maximum is that the 3x3 determinant |B| must be strictly positive (|B| > 0). If |B| < 0, it confirms a constrained minimum."
  },
  {
    id: 30,
    test_id: 2,
    question: "For a consumer with utility function U(x, y) = x^2 * y^3 subject to budget 2x + 3y = 50, the optimal ratio of consumption (y / x) is:",
    options: [
      "y / x = 1.0",
      "y / x = 1.5",
      "y / x = 0.67",
      "y / x = 2.0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory Math → Tangency Condition MRS = Px/Py",
    explanation: "MRS = MU_x / MU_y = (2x*y^3) / (3x^2*y^2) = (2y) / (3x). At optimality, MRS = P_x / P_y => (2y) / (3x) = 2 / 3 => 2y*3 = 3x*2 => 6y = 6x => y / x = 1."
  },
  {
    id: 31,
    test_id: 2,
    question: "If market supply is P = 10 + 2Q and market demand is P = 100 - Q, Consumer Surplus (CS) at competitive equilibrium is:",
    options: [
      "CS = 450",
      "CS = 900",
      "CS = 300",
      "CS = 1350"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Integration & Welfare → Consumer Surplus Calculation",
    explanation: "Equilibrium: 10 + 2Q = 100 - Q => 3Q = 90 => Q* = 30. Equilibrium Price P* = 100 - 30 = 70. Demand choke price (at Q=0) is P = 100. Consumer Surplus CS = (1/2) * (Choke Price - P*) * Q* = (1/2) * (100 - 70) * 30 = 0.5 * 30 * 30 = 450."
  },
  {
    id: 32,
    test_id: 2,
    question: "The Kuhn-Tucker conditions for a non-linear maximization problem with inequality constraints g_j(x) <= c_j require the complementary slackness condition:",
    options: [
      "λ_j * [c_j - g_j(x)] = 0 with λ_j >= 0 and [c_j - g_j(x)] >= 0",
      "λ_j + [c_j - g_j(x)] = 0",
      "λ_j < 0",
      "g_j(x) = 0 strictly"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Hard",
    concept: "Nonlinear Programming → Kuhn-Tucker Complementary Slackness",
    explanation: "The Kuhn-Tucker conditions state that for each inequality constraint: (1) ∂L/∂x_i <= 0, (2) x_i >= 0, (3) x_i*(∂L/∂x_i) = 0, (4) ∂L/∂λ_j >= 0 (feasibility), (5) λ_j >= 0 (non-negativity of multiplier), and (6) Complementary slackness: λ_j * [c_j - g_j(x)] = 0."
  },
  {
    id: 33,
    test_id: 2,
    question: "If a monopolist faces demand Q = 50 - 0.5P and total cost TC = 20Q + 2Q^2, the profit-maximizing output and price are:",
    options: [
      "Q = 10, P = 80",
      "Q = 15, P = 70",
      "Q = 20, P = 60",
      "Q = 5, P = 90"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Monopoly Math → MR = MC Optimization",
    explanation: "Inverse demand: 0.5P = 50 - Q => P = 100 - 2Q. Total Revenue TR = P*Q = 100Q - 2Q^2. MR = 100 - 4Q. Total Cost TC = 20Q + 2Q^2 => MC = 20 + 4Q. Setting MR = MC: 100 - 4Q = 20 + 4Q => 8Q = 80 => Q = 10. Price P = 100 - 2(10) = 80."
  },
  {
    id: 34,
    test_id: 2,
    question: "For the differential equation dy/dt + 3y = 12 with initial condition y(0) = 8, the time path y(t) is:",
    options: [
      "y(t) = 4 + 4*e^(-3t)",
      "y(t) = 12 - 4*e^(3t)",
      "y(t) = 8*e^(-3t)",
      "y(t) = 4 - 4*e^(-3t)"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Hard",
    concept: "Differential Equations → First-Order Linear Differential Equations",
    explanation: "Particular integral (steady state): y_p = 12 / 3 = 4. Complementary function: y_c = A*e^(-3t). General solution: y(t) = 4 + A*e^(-3t). At t = 0: y(0) = 4 + A = 8 => A = 4. Thus, y(t) = 4 + 4*e^(-3t). As t → ∞, y(t) converges to 4 (stable)."
  },
  {
    id: 35,
    test_id: 2,
    question: "Given a 2x2 matrix A = [[4, 2], [1, 3]], the characteristic equation |A - λI| = 0 yields eigenvalues:",
    options: [
      "λ1 = 5, λ2 = 2",
      "λ1 = 6, λ2 = 1",
      "λ1 = 4, λ2 = 3",
      "λ1 = 7, λ2 = 0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Linear Algebra → Eigenvalue Characteristic Equation",
    explanation: "|A - λI| = (4 - λ)(3 - λ) - (2)(1) = λ^2 - 7λ + 12 - 2 = λ^2 - 7λ + 10 = 0. Factoring: (λ - 5)(λ - 2) = 0 => λ1 = 5 and λ2 = 2."
  },
  {
    id: 36,
    test_id: 2,
    question: "In game theory, the mixed strategy Nash equilibrium probability p for Player 1 in matching pennies (or symmetric zero-sum games) is calculated by:",
    options: [
      "Equating Player 2's expected payoffs from their pure strategies to make Player 2 indifferent",
      "Maximizing Player 1's payoff assuming Player 2 plays pure Heads",
      "Setting p = 1.0 unconditionally",
      "Choosing p equal to the discount factor"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Game Theory Math → Mixed Strategy Indifference Principle",
    explanation: "In mixed strategies, Player 1 chooses mixing probability p such that Player 2 is rendered indifferent between their available pure strategies (Expected Payoff of Action 1 = Expected Payoff of Action 2)."
  },
  {
    id: 37,
    test_id: 2,
    question: "The derivative of y = ln(x^3 + 5x) with respect to x is:",
    options: [
      "(3x^2 + 5) / (x^3 + 5x)",
      "1 / (3x^2 + 5)",
      "3x^2 / (x^3 + 5x)",
      "(3x^2 + 5) * (x^3 + 5x)"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Calculus → Chain Rule for Logarithmic Functions",
    explanation: "By the chain rule, if y = ln(u(x)), then dy/dx = (1/u) * (du/dx). Here u = x^3 + 5x and du/dx = 3x^2 + 5, so dy/dx = (3x^2 + 5) / (x^3 + 5x)."
  },
  {
    id: 38,
    test_id: 2,
    question: "If cross-price elasticity of demand between goods X and Y is e_xy = -1.8, the two goods are:",
    options: [
      "Strong Complements",
      "Close Substitutes",
      "Unrelated independent goods",
      "Giffen goods"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Elasticity Math → Cross Price Elasticity Interpretation",
    explanation: "Cross-price elasticity e_xy = (%ΔQ_x) / (%ΔP_y). When e_xy < 0 (negative), a rise in the price of Y causes a decrease in demand for X, indicating that X and Y are complements. A large negative magnitude (-1.8) indicates strong complementarity."
  },

  // --- UNIT 4: ECONOMETRICS (Q39 - Q48) ---
  {
    id: 39,
    test_id: 2,
    question: "In panel data econometrics, the Hausman Specification Test is used to choose between:",
    options: [
      "Fixed Effects (FE) and Random Effects (RE) models by testing whether individual unobserved effects are correlated with regressors",
      "OLS and WLS models",
      "Linear and log-linear functional forms",
      "First and second order autocorrelation"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Panel Data Econometrics → Hausman Specification Test",
    explanation: "Jerry Hausman (1978) formulated the test under H0: Cov(α_i, X_it) = 0 (Random Effects is consistent and efficient). Under H1: Cov(α_i, X_it) ≠ 0 (Random Effects is inconsistent; Fixed Effects is consistent). A significant p-value rejects H0, recommending the Fixed Effects estimator."
  },
  {
    id: 40,
    test_id: 2,
    question: "Two non-stationary time series Y_t ~ I(1) and X_t ~ I(1) are said to be 'Cointegrated' if:",
    options: [
      "A linear combination of the two series is stationary: (Y_t - β*X_t) ~ I(0)",
      "Both series have zero means",
      "Their correlation coefficient is zero",
      "Both must be differenced twice to achieve stationarity"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Time Series Econometrics → Cointegration (Engle-Granger)",
    explanation: "Clive Granger and Robert Engle (1987) showed that while individual economic series may wander non-stationarily (I(1)), if a linear combination of them is stationary (I(0)), a true long-run equilibrium relationship exists without spurious regression."
  },
  {
    id: 41,
    test_id: 2,
    question: "The Goldfeld-Quandt Test for heteroscedasticity is based on the assumption that:",
    options: [
      "The error variance σ_i^2 is positively related to the value of an identifiable explanatory variable X_i (testing ratio of residual variances F = s2^2 / s1^2)",
      "Errors follow an autoregressive AR(1) process",
      "Regressors are strictly collinear",
      "The model has omitted quadratic terms"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Heteroscedasticity Testing → Goldfeld-Quandt Test",
    explanation: "Stephen Goldfeld and Richard Quandt (1965) order observations by the suspected variance-driving variable, omit central c observations, run separate regressions on the two subsets (n1 and n2), and compute the F-ratio of residual sum of squares: F = RSS2 / RSS1."
  },
  {
    id: 42,
    test_id: 2,
    question: "In Autoregressive Conditional Heteroscedasticity (ARCH) models introduced by Robert Engle (1982), the conditional variance of error term u_t depends on:",
    options: [
      "Past squared error terms: σ_t^2 = α_0 + α_1 * (u_{t-1})^2",
      "Past lagged values of dependent variable only",
      "A constant fixed variance",
      "The number of regressors in the system"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Volatility Modeling → ARCH(1) Model (Robert Engle)",
    explanation: "Robert Engle (1982 Nobel laureate) introduced ARCH models to capture volatility clustering in financial time series, where large errors tend to be followed by large errors, meaning conditional variance σ_t^2 is a function of lagged squared residuals u_{t-1}^2."
  },
  {
    id: 43,
    test_id: 2,
    question: "The Breusch-Godfrey Lagrange Multiplier (LM) test is superior to the Durbin-Watson test because it:",
    options: [
      "Can test for higher-order serial correlation AR(p) or MA(p) and remains valid even in the presence of lagged dependent variables as regressors",
      "Requires no calculation of residuals",
      "Works only on cross-sectional data",
      "Assumes zero error variance"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Autocorrelation Testing → Breusch-Godfrey LM Test",
    explanation: "Unlike the Durbin-Watson test (which is biased when lagged dependent variables Y_{t-1} are regressors and only detects AR(1)), the Breusch-Godfrey LM test regresses OLS residuals on all regressors plus p lagged residuals, using (n * R^2) ~ Chi-Square(p)."
  },
  {
    id: 44,
    test_id: 2,
    question: "Ramsey's Regression Equation Specification Error Test (RESET) tests for:",
    options: [
      "General functional form misspecification (such as omitted non-linear terms or incorrect functional form) by including powers of predicted values ŷ^2, ŷ^3",
      "Pure heteroscedasticity alone",
      "Multicollinearity among independent variables",
      "Stationarity of panel units"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Model Specification → Ramsey RESET Test",
    explanation: "James Ramsey (1969) created RESET to detect functional misspecification and omitted variables by re-estimating the regression with higher powers of the fitted values (ŷ_i^2, ŷ_i^3) and testing their joint significance via an F-test."
  },
  {
    id: 45,
    test_id: 2,
    question: "In a binary response model estimated using a Logit Model, the probability P_i = Prob(Y_i = 1 | X_i) is modeled using the:",
    options: [
      "Standard Logistic Cumulative Distribution Function: P_i = 1 / (1 + e^(-z_i))",
      "Standard Normal Cumulative Distribution Function (Probit)",
      "Linear probability straight line without bounds",
      "Uniform rectangular distribution"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Binary Dependent Variables → Logistic Regression (Logit Model)",
    explanation: "The Logit model uses the logistic cumulative distribution function P_i = 1 / [1 + exp(-X_i*β)], ensuring that predicted probabilities strictly lie between 0 and 1, with log-odds ln[P/(1 - P)] = X_i*β."
  },
  {
    id: 46,
    test_id: 2,
    question: "A Vector Autoregression (VAR) model is characterized as an atheoretical system because:",
    options: [
      "Every endogenous variable is modeled as a linear function of its own lagged values and the lagged values of all other variables in the system",
      "It requires zero empirical data",
      "It does not allow any lagged terms",
      "It assumes all variables are exogenous constants"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Multivariate Time Series → Vector Autoregressions (Christopher Sims)",
    explanation: "Christopher Sims (1980) introduced VAR models to avoid incredible identification restrictions in simultaneous equation systems: each variable is treated symmetrically as endogenous and regressed on p lags of itself and all other system variables."
  },
  {
    id: 47,
    test_id: 2,
    question: "Spurious Regression between two independent non-stationary series typically exhibits:",
    options: [
      "A very high R-squared (R^2 > DW) and highly significant t-ratios despite no true economic relationship between the variables",
      "An R-squared equal to zero",
      "A Durbin-Watson statistic equal to 4.0",
      "Perfect unbiasedness"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Spurious Regression → Granger and Newbold (1974)",
    explanation: "Clive Granger and Paul Newbold (1974) proved that regressing one I(1) random walk on another independent I(1) random walk falsely produces high R^2, low Durbin-Watson (R^2 > DW), and inflated t-statistics, misleading the researcher."
  },
  {
    id: 48,
    test_id: 2,
    question: "The Sargan-Hansen J-Test in Generalized Method of Moments (GMM) / 2SLS is a test of:",
    options: [
      "Over-identifying restrictions (validity and exogeneity of instruments when instruments outnumber endogenous variables)",
      "Autocorrelation in errors",
      "Homoscedasticity of disturbance terms",
      "Normality of dependent variable"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Hard",
    concept: "Instrumental Variables → Sargan-Hansen J-Test of Overidentification",
    explanation: "When the number of instruments exceeds the number of endogenous variables (overidentified model), the Sargan-Hansen J-statistic tests whether all instruments are uncorrelated with the error term (H0: instruments are valid)."
  },

  // --- UNIT 5: INTERNATIONAL ECONOMICS (Q49 - Q58) ---
  {
    id: 49,
    test_id: 2,
    question: "Paul Krugman's (1979) New Trade Theory explains Intra-Industry Trade between similar industrial nations based on:",
    options: [
      "Monopolistic Competition, Increasing Returns to Scale (Internal Economies of Scale), and Consumers' Love of Variety",
      "Differences in climate and agricultural endowments",
      "International wage differences only",
      "Prohibitive import quotas"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "New Trade Theory → Paul Krugman Monopolistic Competition Model",
    explanation: "Paul Krugman (2008 Nobel laureate) showed that even identical countries trade differentiated varieties within the same industry (e.g. cars between Germany and France) to exploit internal economies of scale and satisfy consumers' preference for variety (Dixit-Stiglitz preferences)."
  },
  {
    id: 50,
    test_id: 2,
    question: "The Effective Rate of Protection (ERP) differs from the Nominal Tariff Rate (NRP) because ERP measures:",
    options: [
      "The percentage increase in domestic value added per unit of output resulting from tariffs on final goods as well as intermediate inputs: ERP = (t - a*t_i) / (1 - a)",
      "The total tariff revenue received by customs",
      "The quota equivalent of a tariff",
      "The export subsidy percentage"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade Policy → Effective Rate of Protection (ERP)",
    explanation: "Max Corden developed ERP to measure protection granted to domestic value added: ERP = (t_f - a*t_i) / (1 - a), where t_f is tariff on finished good, t_i is tariff on imported inputs, and a is share of inputs in final value. If t_i < t_f, ERP > NRP (tariff escalation)."
  },
  {
    id: 51,
    test_id: 2,
    question: "Jagdish Bhagwati's concept of 'Immiserizing Growth' demonstrates that economic expansion in an export-biased developing country can lead to net welfare reduction if:",
    options: [
      "Growth causes such a massive deterioration in the country's terms of trade that the price loss outweighs the output gain",
      "The country imports all its capital goods",
      "Wages fall below subsistence",
      "The currency is pegged to gold"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Growth & Trade → Jagdish Bhagwati's Immiserizing Growth (1958)",
    explanation: "Jagdish Bhagwati (1958) proved that if a large primary-exporting country experiences strong growth in its export sector and faces price-inelastic foreign demand, world export prices crash, causing terms of trade to deteriorate so severely that national real income declines."
  },
  {
    id: 52,
    test_id: 2,
    question: "The 'Gravity Model of International Trade' (Jan Tinbergen, 1962) posits that bilateral trade volume between two nations is:",
    options: [
      "Directly proportional to the product of their GDPs and inversely proportional to the geographical distance between them",
      "Determined entirely by interest rate differentials",
      "Independent of country size",
      "Equal to total foreign exchange reserves"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade → Jan Tinbergen Gravity Model of Trade",
    explanation: "Analagous to Newton's law of gravitation, Tinbergen's Gravity Model states: Trade_ij = A * (GDP_i * GDP_j) / (Distance_ij), reflecting economic mass attraction and transportation cost friction."
  },
  {
    id: 53,
    test_id: 2,
    question: "In Balance of Payments theory, Sidney Alexander's 'Absorption Approach' states that the current account balance (B = X - M) is equal to:",
    options: [
      "Total Domestic Output (Y) minus Total Domestic Absorption (A = C + I + G): B = Y - A",
      "Money supply minus money demand",
      "Exchange rate multiplied by price level",
      "Foreign direct investment minus remittances"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Balance of Payments Theory → Sidney Alexander's Absorption Approach",
    explanation: "Sidney Alexander (1952) reformulated the trade balance from national income identities: Y = C + I + G + (X - M) = A + B. Therefore, Trade Balance B = Y - A. For currency devaluation to improve B, it must either raise real income Y or reduce domestic spending (absorption A)."
  },
  {
    id: 54,
    test_id: 2,
    question: "The 'Metzler Paradox' in international trade occurs when the imposition of an import tariff by a large country results in:",
    options: [
      "A fall in the internal domestic relative price of the protected imported commodity due to an exceptionally large terms-of-trade improvement",
      "Zero tax revenues collected by the customs agency",
      "A retaliatory war with all partner nations",
      "Immediate doubling of domestic production"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Tariff Theory → Lloyd Metzler Paradox (1949)",
    explanation: "Lloyd Metzler (1949) demonstrated that if foreign import demand is inelastic and domestic marginal propensity to consume the imported good is small, a tariff improves terms of trade so drastically that the domestic price of the protected good falls after tariff inclusion."
  },
  {
    id: 55,
    test_id: 2,
    question: "The 'Uncovered Interest Rate Parity' (UIP) condition states that the interest rate differential between two countries equals:",
    options: [
      "The expected rate of depreciation of the domestic currency: (i_domestic - i_foreign) = (E[S_{t+1}] - S_t) / S_t",
      "The current trade surplus",
      "The ratio of gold reserves",
      "Zero at all times"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "International Finance → Uncovered Interest Parity (UIP)",
    explanation: "Under UIP with risk-neutral investors and free capital mobility, expected returns on domestic and foreign deposits must be equal in a common currency: i - i* = (S^e - S)/S. A higher domestic interest rate reflects market expectations of currency depreciation."
  },
  {
    id: 56,
    test_id: 2,
    question: "According to the Impossible Trinity (Policy Trilemma) in international macroeconomics (Mundell-Fleming), a country can simultaneously choose at most:",
    options: [
      "Two of the three: Fixed Exchange Rate, Independent Monetary Policy, and Free Capital Mobility",
      "All three simultaneously if foreign reserves exceed $500B",
      "Only one of the three goals",
      "None of the goals during recessions"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Open Economy Macro → The Impossible Trinity (Mundell Trilemma)",
    explanation: "The Trilemma dictates that an economy can maintain only two of three goals: (1) Free capital mobility, (2) Fixed exchange rate, (3) Autonomous domestic monetary policy. Attempting all three simultaneously creates speculative attacks and currency collapse."
  },
  {
    id: 57,
    test_id: 2,
    question: "Krugman's First-Generation Model of Balance of Payments Currency Crises (1979) shows that speculative attacks on a fixed exchange rate occur because:",
    options: [
      "Inconsistent government monetized budget deficits systematically deplete central bank foreign exchange reserves until speculators trigger a sudden run",
      "Speculators act with pure herd irrationality without any fundamental imbalances",
      "Tariffs are reduced to zero",
      "Exports exceed imports by too large a margin"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Currency Crises → Krugman's First-Generation Crises Model (1979)",
    explanation: "Paul Krugman's canonical model showed that when a government persistently prints money to finance fiscal deficits while maintaining a fixed peg, domestic credit expansion drains foreign exchange reserves. At a critical threshold, rational speculators launch an instantaneous attack, breaking the peg."
  },
  {
    id: 58,
    test_id: 2,
    question: "In the World Trade Organization (WTO) legal framework, the Most-Favoured-Nation (MFN) principle (GATT Article I) mandates that:",
    options: [
      "Any trade concession or tariff reduction granted to one member country must immediately and unconditionally be extended to all other WTO member countries",
      "Developing countries must grant zero tariffs to advanced nations",
      "Only one nation can receive agricultural import quotas",
      "Governments can charge arbitrary discriminatory duties"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "International Trade Institutions → WTO Most-Favoured-Nation (MFN) Principle",
    explanation: "GATT Article I enshrines MFN non-discrimination: a country cannot discriminate between trading partners. Granting someone a special favor (such as a lower tariff rate for one of their products) requires doing the same for all other WTO members."
  },

  // --- UNIT 6: PUBLIC ECONOMICS (Q59 - Q68) ---
  {
    id: 59,
    test_id: 2,
    question: "The Median Voter Theorem (Duncan Black, Anthony Downs) proves that in a majority-rule voting system with single-peaked preferences:",
    options: [
      "The political platform preferred by the median voter will defeat any other alternative in a pairwise contest",
      "The most extreme candidate always wins",
      "Voting cycles (Condorcet paradox) are inevitable",
      "Public expenditure is minimized to zero"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Choice Theory → Median Voter Theorem",
    explanation: "Duncan Black (1948) and Anthony Downs (1957) proved that if voter preferences along a one-dimensional spectrum are single-peaked, majority rule yields an equilibrium outcome that strictly matches the preferred policy of the median voter."
  },
  {
    id: 60,
    test_id: 2,
    question: "The Arrow-Lind Theorem (1970) demonstrates that when the government undertakes a public investment project:",
    options: [
      "The risk cost of the project approaches zero if returns are distributed across a very large number of taxpayers, justifying the use of the risk-free discount rate",
      "Public projects must always carry higher risk premia than private projects",
      "Taxpayers should be charged insurance fees on all bridges",
      "Only profitable projects should ever be built"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Hard",
    concept: "Cost-Benefit Analysis → Arrow-Lind Theorem on Public Risk",
    explanation: "Kenneth Arrow and Robert Lind (1970) showed that by spreading the risk of a public project across millions of taxpayers, the risk born by each individual becomes negligible, causing aggregate social cost of risk to vanish."
  },
  {
    id: 61,
    test_id: 2,
    question: "The 'Flypaper Effect' in fiscal federalism describes the empirical finding that:",
    options: [
      "An unconditional intergovernmental grant stimulates significantly more local public spending than an equivalent increase in local citizen private income ('money sticks where it hits')",
      "Taxes drive capital abroad permanently",
      "Local governments always save 100% of federal grants",
      "Subsidies have zero impact on public schools"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Fiscal Federalism → The Flypaper Effect (Arthur Okun)",
    explanation: "Arthur Okun coined the phrase 'money sticks where it hits': empirical studies reveal that a dollar of lump-sum federal grant given to a local government generates far higher local public expenditure than a dollar increase in local citizens' personal income."
  },
  {
    id: 62,
    test_id: 2,
    question: "Wallace Oates' Decentralization Theorem (1972) states that in the absence of cost savings from central provision and interjurisdictional spillovers:",
    options: [
      "Decentralized provision of local public goods tailored to local tastes is Pareto superior to uniform centralized provision",
      "Centralized uniform taxation is always optimal",
      "All public services should be operated by military authorities",
      "Local governments create deadweight losses"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Fiscal Federalism → Wallace Oates Decentralization Theorem",
    explanation: "Wallace Oates (1972) established that local governments are better informed about local preferences, so providing differentiated levels of public goods matched to local demands yields higher social welfare than a uniform national standard."
  },
  {
    id: 63,
    test_id: 2,
    question: "The Excess Burden (Deadweight Loss) of an excise tax t on a competitive market is proportional to:",
    options: [
      "The square of the tax rate (t^2), the price elasticities of demand and supply, and the initial price and quantity: DWL ≈ 0.5 * [(e_d * e_s)/(e_d + e_s)] * t^2 * P * Q",
      "The tax rate t linearly",
      "The total profit of producers",
      "The square root of tax revenue"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Taxation & Efficiency → Harberger Triangle Deadweight Loss Formula",
    explanation: "Arnold Harberger showed that the deadweight loss triangle expands quadratically with the tax rate: DWL ∝ t^2. Doubling the tax rate quadruples the excess burden of taxation on society."
  },
  {
    id: 64,
    test_id: 2,
    question: "According to the Mirrlees Model of Optimal Income Taxation (1971), the marginal income tax rate at the very top of a bounded income distribution should theoretically be:",
    options: [
      "0% (Zero marginal tax rate at the top)",
      "100%",
      "50%",
      "Equal to the average tax rate"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Hard",
    concept: "Optimal Taxation → James Mirrlees Top Marginal Tax Rate Result",
    explanation: "Sir James Mirrlees (1996 Nobel laureate) proved that if there is a known top earner in a bounded ability distribution, their marginal tax rate should be 0%. Taxing their last dollar of income distorts effort without raising revenue, since no one earns above that threshold."
  },
  {
    id: 65,
    test_id: 2,
    question: "A 'Merit Good' (concept introduced by Richard Musgrave) is a commodity which:",
    options: [
      "Society feels individuals should have on the basis of some concept of need, rather than on their ability and willingness to pay (e.g. primary education, vaccination)",
      "Has zero production cost",
      "Is produced exclusively by private monopolies",
      "Generates negative externalities like cigarettes"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Goods Theory → Richard Musgrave Merit Goods Concept",
    explanation: "Richard Musgrave (1957) defined merit goods as goods whose social benefits exceed private perception (due to imperfect information or paternalistic evaluation), justifying government subsidies or mandatory provision (e.g. universal schooling, basic healthcare)."
  },
  {
    id: 66,
    test_id: 2,
    question: "The 'Condorcet Paradox' in social choice demonstrates that pairwise majority voting can lead to:",
    options: [
      "Intransitive and cyclical social preferences (A beats B, B beats C, but C beats A)",
      "A permanent dictatorship",
      "Unanimous social consensus",
      "Guaranteed Pareto optimal outcomes"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Social Choice Theory → Marquis de Condorcet Voting Paradox",
    explanation: "The Marquis de Condorcet (1785) discovered that even when all individual voters have transitive preferences, collective majority voting can produce cyclical non-transitive social preferences (A > B > C > A), causing voting instability."
  },
  {
    id: 67,
    test_id: 2,
    question: "According to the Benefits-Received Principle of taxation (Erik Lindahl, Knut Wicksell):",
    options: [
      "Individuals should be taxed in direct proportion to the benefits they receive from government services and public goods",
      "Taxes should be levied exclusively on top 1% wealth holders",
      "Everyone should pay equal nominal sums regardless of income",
      "Taxation should be used only during wartime"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Tax Equity Principles → Benefit Theory of Taxation",
    explanation: "The Benefit Principle views taxation as a voluntary market exchange: citizens pay taxes to finance the specific public goods and infrastructure from which they derive direct utility (e.g. highway tolls, fuel cess for roads)."
  },
  {
    id: 68,
    test_id: 2,
    question: "The 'Leviathan Model' of government (Geoffrey Brennan and James Buchanan) views the state as:",
    options: [
      "A revenue-maximizing entity that attempts to extract maximum tax resources from citizens unless constrained by constitutional fiscal rules",
      "A benevolent social planner maximizing utilitarian welfare",
      "A passive clearinghouse for democratic votes",
      "An institution with zero economic impact"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Choice → Brennan & Buchanan Leviathan Theory of Government",
    explanation: "James Buchanan and Geoffrey Brennan (1980) modeled government as a revenue-maximizing Leviathan. To prevent excessive taxation and bureaucratic expansion, society requires strict constitutional constraints, tax limitations, and fiscal decentralization."
  },

  // --- UNIT 7: MONEY & BANKING (Q69 - Q78) ---
  {
    id: 69,
    test_id: 2,
    question: "The 'Taylor Principle' in modern central banking mandates that to stabilize inflation, the central bank must:",
    options: [
      "Raise the nominal policy rate by MORE than one-for-one in response to an increase in inflation (so that the real policy interest rate increases: Δi / Δπ > 1)",
      "Keep nominal interest rates constant",
      "Lower interest rates whenever inflation increases",
      "Peg money supply growth to gold production"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Monetary Policy Transmission → The Taylor Principle",
    explanation: "The Taylor Principle states that the coefficient on inflation in the policy rule must exceed 1. If inflation rises by 1%, the central bank must raise nominal rates by more than 1%, thereby raising the real interest rate (r = i - π) to cool aggregate demand."
  },
  {
    id: 70,
    test_id: 2,
    question: "The Expectations Theory of the Term Structure of Interest Rates asserts that the long-term interest rate on a bond equals:",
    options: [
      "The geometric (or arithmetic) average of current and expected future short-term interest rates over the life of the bond",
      "The dividend yield plus inflation",
      "The central bank cash reserve ratio",
      "A fixed 5% constant markup over inflation"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Yield Curve & Term Structure → Pure Expectations Hypothesis",
    explanation: "The Pure Expectations Hypothesis states that long-term yields reflect market expectations of future short-term rates. An upward-sloping yield curve indicates that the market expects short-term policy interest rates to rise in the future."
  },
  {
    id: 71,
    test_id: 2,
    question: "Under the Liquidity Coverage Ratio (LCR) requirement of Basel III, commercial banks must maintain sufficient High-Quality Liquid Assets (HQLA) to survive a:",
    options: [
      "30-day severe liquidity stress scenario",
      "1-year capital insolvency shock",
      "10-year macroeconomic depression",
      "3-day overnight settlement lag"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Regulation → Basel III Liquidity Coverage Ratio (LCR)",
    explanation: "The Basel III LCR standard requires banks to hold an unencumbered stock of High-Quality Liquid Assets (cash, central bank reserves, sovereign bonds) that can be converted to cash to meet net liquidity outflows over a 30-day acute stress horizon (LCR = HQLA / Net Outflows >= 100%)."
  },
  {
    id: 72,
    test_id: 2,
    question: "The Reserve Bank of India's 'Prompt Corrective Action' (PCA) framework is triggered when a commercial bank breaches threshold limits in which key metrics?",
    options: [
      "Capital Adequacy (CRAR), Asset Quality (Net NPAs), and Leverage / Profitability",
      "Total number of branch openings",
      "Gold reserves held in rural branches",
      "Foreign direct investment percentage"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Banking Supervision → RBI Prompt Corrective Action (PCA) Framework",
    explanation: "The RBI invokes the PCA framework to initiate timely supervisory interventions when banks fall below regulatory thresholds on Capital (CRAR/CET-1), Asset Quality (Net NPA ratio), and Leverage, restricting dividend payouts, branch expansion, and high-risk lending."
  },
  {
    id: 73,
    test_id: 2,
    question: "The Marginal Standing Facility (MSF) rate of the Reserve Bank of India is designed to provide:",
    options: [
      "Overnight liquidity to scheduled commercial banks against eligible government securities above their SLR portfolio at an interest rate set higher than the repo rate",
      "Long-term 20-year infrastructure loans",
      "Direct zero-interest loans to farmers",
      "Foreign currency swap lines to overseas banks"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "RBI Liquidity Framework → Marginal Standing Facility (MSF)",
    explanation: "Introduced in 2011, MSF is an emergency window where banks can borrow overnight funds from RBI by dipping into their Statutory Liquidity Ratio (SLR) up to a permitted limit at a penal interest rate (MSF = Repo + 25 bps), forming the ceiling of the LAF corridor."
  },
  {
    id: 74,
    test_id: 2,
    question: "In the Credit Channel of monetary policy transmission (Bernanke and Gertler), monetary tightening raises borrowing costs by:",
    options: [
      "Reducing firm net worth and collateral values, thereby widening the External Finance Premium (Balance Sheet Channel)",
      "Eliminating all commercial bank deposit accounts",
      "Mandating zero bank profits by law",
      "Abolishing stock market trading"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Hard",
    concept: "Monetary Transmission Channels → Bernanke & Gertler Credit Channel",
    explanation: "Ben Bernanke and Mark Gertler (1995) showed that monetary policy affects output via credit market frictions: higher interest rates reduce asset prices and borrower net worth, exacerbating agency problems and increasing the External Finance Premium for small firms."
  },
  {
    id: 75,
    test_id: 2,
    question: "Under the Liquidity Preference Theory of John Maynard Keynes, the Speculative Demand for Money is:",
    options: [
      "Inversely related to the current rate of interest (L_s = f(r), with f'(r) < 0)",
      "Directly proportional to nominal GDP",
      "Independent of bond market prices",
      "Fixed by central bank statute"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Keynesian Money Demand → Speculative Motive for Holding Cash",
    explanation: "Keynes argued that speculative money demand depends on expectations of future bond prices. When the interest rate is high (bond prices low), people expect rates to fall and bond prices to rise, holding bonds instead of cash. Hence speculative cash demand is an inverse function of interest rates."
  },
  {
    id: 76,
    test_id: 2,
    question: "The Net Stable Funding Ratio (NSFR) under Basel III is formulated to ensure that banks maintain:",
    options: [
      "A stable funding profile in relation to the composition of their assets and off-balance sheet activities over a one-year horizon (Available Stable Funding / Required Stable Funding >= 100%)",
      "Daily clearing balances in gold coins",
      "Zero foreign exchange exposures",
      "100% equity finance for all retail loans"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Basel III Structural Liquidity → Net Stable Funding Ratio (NSFR)",
    explanation: "The NSFR requires banks to maintain a minimum acceptable amount of stable liabilities (Available Stable Funding) to fund long-term illiquid assets (Required Stable Funding) over a 1-year horizon, mitigating structural asset-liability maturity mismatches."
  },
  {
    id: 77,
    test_id: 2,
    question: "In the Quantity Theory of Money reformulations, Don Patinkin resolved the 'Classical Dichotomy' by introducing:",
    options: [
      "The Real Balance Effect into both the commodity and money market demand equations, integrating monetary and value theory",
      "A barter system with zero prices",
      "Rational expectations into fiscal policy",
      "Strict price controls across all sectors"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Hard",
    concept: "Integration of Monetary Theory → Don Patinkin (Money, Interest, and Prices)",
    explanation: "Don Patinkin (1956) proved that the classical dichotomy (separation of real and nominal variables) was mathematically invalid. By inserting real money balances (M/P) directly into consumer demand functions, changes in nominal money directly impact real excess demands."
  },
  {
    id: 78,
    test_id: 2,
    question: "The 'Call Money Market' in the Indian financial system is an interbank segment where funds are borrowed and lent for:",
    options: [
      "Overnight (1-day) duration without collateral",
      "14 days to 1 year duration (Notice Money)",
      "5 years duration for housing loans",
      "Long-term corporate capital funding"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Indian Money Market Structure → Call vs Notice vs Term Money",
    explanation: "In the Indian interbank money market: 'Call Money' refers to uncollateralized overnight lending/borrowing. 'Notice Money' refers to funds for 2 to 14 days. 'Term Money' refers to maturities exceeding 14 days up to 1 year."
  },

  // --- UNIT 8: DEVELOPMENT ECONOMICS (Q79 - Q88) ---
  {
    id: 79,
    test_id: 2,
    question: "In the Fei-Ranis Model of economic growth, the 'Commercialization Point' is reached when:",
    options: [
      "Agricultural surplus labor is fully absorbed, the marginal product of agricultural labor equals the institutional wage, and agriculture transitions to a commercialized market wage sector",
      "All industrial factories close down",
      "Food exports reach 50% of GDP",
      "The savings rate falls to zero"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Hard",
    concept: "Dual Economy Growth → John Fei and Gustav Ranis Dualism Model",
    explanation: "Fei and Ranis refined Lewis's model by identifying three phases. In Phase 3 (the Commercialization Point), labor is no longer redundant in agriculture (MPL_ag > subsistence wage), wages become market-determined, and the dual economy turns into a unified neoclassical economy."
  },
  {
    id: 80,
    test_id: 2,
    question: "Harvey Leibenstein's 'Critical Minimum Effort' thesis argues that developing economies are trapped in poverty because:",
    options: [
      "Small developmental efforts induce population growth and income-depressing forces that overcome income-generating forces, necessitating a critical minimum quantum of investment",
      "Developing nations lack mineral resources",
      "International trade is prohibited",
      "Savings are culturally impossible"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Development Traps → Harvey Leibenstein's Critical Minimum Effort Thesis",
    explanation: "Harvey Leibenstein (1957) argued that per capita income is determined by two opposing forces: income-generating forces and income-depressing forces (population growth, consumption leakages). To escape the low-level equilibrium trap, initial investment must exceed a critical minimum threshold."
  },
  {
    id: 81,
    test_id: 2,
    question: "Amartya Sen's 'Capabilities Approach' conceptualizes development primarily as:",
    options: [
      "The expansion of human freedoms and capabilities (what people are actually able to do and be: functionings and substantive freedoms)",
      "The maximization of per capita Gross National Product (GNP)",
      "The accumulation of physical industrial machinery",
      "The growth of military firepower"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Development Philosophy → Amartya Sen's Capability Approach (Development as Freedom)",
    explanation: "Amartya Sen (1999) argued that economic growth is merely a means rather than an end. True development is the removal of major unfreedoms (poverty, lack of healthcare/education, tyranny) to expand individuals' substantive capabilities and valuable functionings."
  },
  {
    id: 82,
    test_id: 2,
    question: "The Multidimensional Poverty Index (MPI), developed by OPHI and UNDP, measures acute deprivations across 10 indicators spanning three dimensions:",
    options: [
      "Health (Nutrition, Child Mortality), Education (Years of Schooling, School Attendance), and Standard of Living (Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, Assets)",
      "Income, Wealth, and Stock holdings",
      "Inflation, Unemployment, and Trade Deficit",
      "Calorie count, Height, and Weight alone"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Multidimensional Poverty → UNDP/OPHI MPI Architecture",
    explanation: "The global MPI uses the Alkire-Foster method across 10 equally-weighted indicator groups within Health (1/3), Education (1/3), and Living Standards (1/3). A household deprived in 33.3% or more of the weighted indicators is classified as multidimensionally poor."
  },
  {
    id: 83,
    test_id: 2,
    question: "The 'Kuznets Inverted-U Hypothesis' regarding growth and inequality suggests that:",
    options: [
      "Income inequality first increases during the initial phases of industrialization and economic growth, peaks, and then declines as the economy matures",
      "Inequality is always constant across all stages of development",
      "Poorer nations always have lower inequality than rich nations",
      "Economic growth permanently widens the gap between rich and poor"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Income Distribution → Simon Kuznets Inverted-U Hypothesis",
    explanation: "Simon Kuznets (1955) observed that early rural-to-urban structural transformation widens income inequality due to high urban-rural wage gaps. In later stages, widespread education, political democratization, and social welfare programs cause inequality to decline."
  },
  {
    id: 84,
    test_id: 2,
    question: "In Richard Nelson's 'Low-Level Equilibrium Trap' model, the trap occurs at the point where:",
    options: [
      "The rate of population growth equals the rate of growth of total national income, locking per capita income at subsistence",
      "The savings rate reaches 50% of GDP",
      "All agricultural land is privatized",
      "Capital goods output exceeds consumer goods output"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Poverty Traps → Richard Nelson's Low-Level Equilibrium Trap (1956)",
    explanation: "Richard Nelson (1956) showed that at low income levels, any slight increase in income induces a proportional increase in population growth (Malthusian biological response). This causes per capita income growth (dY/Y - dP/P) to fall back to the subsistence low-level equilibrium trap."
  },
  {
    id: 85,
    test_id: 2,
    question: "Ragnar Nurkse's 'Vicious Circle of Poverty' operating on the Supply Side of capital formation originates from:",
    options: [
      "Low Real Income → Low Capacity to Save → Low Capital Investment → Low Productivity → Low Real Income",
      "Small market size inducing low inducement to invest",
      "High import tariffs on capital goods",
      "Excess foreign capital inflows"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Capital Formation → Ragnar Nurkse's Vicious Circles of Poverty",
    explanation: "Ragnar Nurkse (1953) emphasized circular poverty: on the supply side, low real income results in low savings, leading to capital deficiency, which causes low labor productivity and completes the circle back to low real income."
  },
  {
    id: 86,
    test_id: 2,
    question: "The 'Dependency Theory' of underdevelopment (Raúl Prebisch, Fernando Cardoso, Andre Gunder Frank) contends that global underdevelopment is caused by:",
    options: [
      "The structural, unequal integration of the developing 'Periphery' into the global capitalist system, enabling economic surplus extraction by the dominant 'Core'",
      "A domestic lack of entrepreneurial talent in developing nations",
      "Insufficient population growth",
      "High corporate tax rates in poor nations"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Structuralist Development → Dependency Theory & Core-Periphery Exploitation",
    explanation: "Dependency theorists argued that post-colonial developing nations are not merely early versions of developed nations, but have been structurally conditioned into a dependent periphery providing raw materials and cheap labor while advanced metropolitan centers extract economic surplus."
  },
  {
    id: 87,
    test_id: 2,
    question: "In the O-Ring Theory of Economic Development (Michael Kremer, 1993), production exhibits strong complementarities such that:",
    options: [
      "Tasks must all be performed proficiently for the product to have high value (Positive Assortative Matching: high-skill workers group together)",
      "Capital can completely substitute for all labor skills",
      "One single worker's mistake has zero effect on final quality",
      "Wages are completely equal across all skill distributions"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Hard",
    concept: "Modern Growth Microfoundations → Michael Kremer's O-Ring Theory (1993)",
    explanation: "Michael Kremer (1993 Nobel laureate) modeled production where output requires n sequential tasks: Y = B * q1 * q2 * ... * qn. Since failure of any single component ruins the final product (like the Challenger O-ring), high-skill workers match together, explaining vast international wage and productivity differences."
  },
  {
    id: 88,
    test_id: 2,
    question: "The Physical Quality of Life Index (PQLI), created by Morris David Morris (1979), combines which three indicators?",
    options: [
      "Infant Mortality Rate, Life Expectancy at Age One, and Basic Adult Literacy Rate",
      "Per capita income, Energy consumption, and Export ratio",
      "Calorie intake, Hospital beds, and Doctor ratio",
      "Unemployment, Inflation, and Gini coefficient"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Wellbeing Measurement → Morris David Morris Physical Quality of Life Index",
    explanation: "Developed for the Overseas Development Council in 1979, the PQLI is a composite index ranging from 0 to 100 based on Infant Mortality Rate, Life Expectancy at Age 1, and Basic Literacy Rate, purposely excluding monetary GDP measures."
  },

  // --- UNIT 9: INDIAN ECONOMY (Q89 - Q98) ---
  {
    id: 89,
    test_id: 2,
    question: "The 16th Finance Commission of India was constituted by the President of India in December 2023 under the Chairmanship of:",
    options: [
      "Dr. Arvind Panagariya",
      "Dr. Raghuram Rajan",
      "Dr. N.K. Singh",
      "Dr. Y.V. Reddy"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Fiscal Federalism & Institutions → 16th Finance Commission of India",
    explanation: "The Government of India constituted the 16th Finance Commission on December 31, 2023, under the chairmanship of Dr. Arvind Panagariya (former Vice-Chairman of NITI Aayog), tasked with making recommendations for the 5-year period starting April 1, 2026."
  },
  {
    id: 90,
    test_id: 2,
    question: "The Insolvency and Bankruptcy Code (IBC) 2016 introduced a time-bound resolution framework where the Corporate Insolvency Resolution Process (CIRP) must standardly conclude within:",
    options: [
      "180 days (extendable by 90 days to a maximum of 330 days including litigation)",
      "30 days strictly",
      "5 years",
      "1000 days"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Financial & Corporate Sector Reforms → IBC 2016 CIRP Timelines",
    explanation: "The IBC 2016 mandates that the CIRP process must be completed within 180 days from admission, with a one-time extension of 90 days. The 2019 amendment set an overall outer limit of 330 days including legal proceedings."
  },
  {
    id: 91,
    test_id: 2,
    question: "The 'Production Linked Incentive' (PLI) schemes in India aim to boost domestic manufacturing and exports by offering manufacturers:",
    options: [
      "Financial incentives of 4% to 6% on incremental sales of goods manufactured in India over a base year across 14 key target sectors",
      "Free commercial land in metropolitan capitals",
      "Exemption from paying all employee salaries",
      "Mandatory government purchase of 100% of factory output"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Industrial Policy & Aatmanirbhar Bharat → Production Linked Incentive (PLI)",
    explanation: "The PLI Scheme (introduced under the Aatmanirbhar Bharat initiative across 14 sectors such as electronics, pharmaceuticals, auto, and solar) offers cash incentives on incremental sales over a base year to attract large-scale capital investments and foster global champions."
  },
  {
    id: 92,
    test_id: 2,
    question: "In India's foreign trade policy, the 'Special Economic Zones' (SEZ) Act was enacted in 2005 primarily to:",
    options: [
      "Promote exports of goods and services, attract domestic and foreign investment, and create employment within duty-free enclave zones",
      "Collect high import tariffs on industrial raw materials",
      "Subsidize agricultural food crops for domestic markets",
      "Prohibit foreign multinational companies"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Trade Policy & Industrial Infrastructure → SEZ Act 2005",
    explanation: "The SEZ Act 2005 created duty-free enclaves treated as foreign territory for tariff purposes, providing simplified single-window clearances, tax incentives, and world-class infrastructure to accelerate export competitiveness."
  },
  {
    id: 93,
    test_id: 2,
    question: "The 'Pradhan Mantri Kisan Samman Nidhi' (PM-KISAN) scheme provides income support to eligible landholder farmer families across India of:",
    options: [
      "Rs. 6,000 per year transferred directly in three equal four-monthly installments of Rs. 2,000 each",
      "Rs. 25,000 per month",
      "Rs. 1,000 per year",
      "Rs. 50,000 one-time grant"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Agricultural Direct Income Support → PM-KISAN Scheme",
    explanation: "Launched in February 2019 (with effect from December 2018), PM-KISAN is a 100% central sector scheme providing direct income support of Rs. 6,000 per annum to all landholding farmer families in three equal instalments via DBT."
  },
  {
    id: 94,
    test_id: 2,
    question: "The 'National Monetisation Pipeline' (NMP), launched by the Government of India in 2021, focuses on:",
    options: [
      "Monetizing core brownfield infrastructure assets of the central government (roads, railways, power, telecom) through lease concession models without transferring asset ownership",
      "Privatizing national defense equipment factories",
      "Selling all agricultural lands to private corporations",
      "Printing additional central bank currency notes"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Infrastructure Financing → National Monetisation Pipeline (NMP)",
    explanation: "The NMP aims to unlock value in brownfield public infrastructure assets (estimated at Rs 6.0 lakh crore over FY 2022-25) by leasing operational assets to private operators via Public-Private Partnerships (PPP) while retaining public ownership."
  },
  {
    id: 95,
    test_id: 2,
    question: "The Rangarajan Committee on Poverty Estimation (2014) estimated the poverty line in India at monthly per capita consumer expenditure (MPCE) of:",
    options: [
      "Rs. 972 in rural areas and Rs. 1,407 in urban areas (Rs. 32/day rural, Rs. 47/day urban)",
      "Rs. 500 in rural areas and Rs. 600 in urban areas",
      "Rs. 3,000 in rural areas and Rs. 5,000 in urban areas",
      "Equal to $10 per day in all regions"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Poverty Estimation in India → Dr. C. Rangarajan Committee Report (2014)",
    explanation: "The Rangarajan Committee (2014) revised poverty measurement based on separate normative nutritional requirements and essential non-food expenditures, determining the poverty line at Rs 972/month (rural) and Rs 1,407/month (urban)."
  },
  {
    id: 96,
    test_id: 2,
    question: "In the National Accounts Statistics of India, Gross Value Added (GVA) at Basic Prices is related to GVA at Factor Cost by:",
    options: [
      "GVA at Basic Prices = GVA at Factor Cost + (Production Taxes - Production Subsidies)",
      "GVA at Basic Prices = GVA at Factor Cost + (Product Taxes - Product Subsidies)",
      "GVA at Basic Prices = GDP at Market Prices",
      "GVA at Basic Prices = Net National Product at Factor Cost"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "National Accounting Framework (SNA 2008) → GVA at Basic Prices (CSO/NSO)",
    explanation: "In line with SNA 2008 adopted in 2015: GVA at Basic Prices = GVA at Factor Cost + Net Production Taxes (e.g. land revenues, stamp duty, minus subsidies). GDP at Market Prices = GVA at Basic Prices + Net Product Taxes (e.g. GST, customs duties, minus food/fertilizer subsidies)."
  },
  {
    id: 97,
    test_id: 2,
    question: "Under the Foreign Trade Policy (FTP) 2023, India set an ambitious merchandise and services export target for the year 2030 of:",
    options: [
      "USD 2 Trillion",
      "USD 500 Billion",
      "USD 10 Trillion",
      "USD 1 Trillion"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "External Trade Policy → Foreign Trade Policy (FTP) 2023 Vision",
    explanation: "Launched by the Ministry of Commerce & Industry on March 31, 2023, the dynamic, non-dated Foreign Trade Policy 2023 establishes a strategic roadmap to scale India's total exports to USD 2 trillion by 2030."
  },
  {
    id: 98,
    test_id: 2,
    question: "The Reserve Bank of India holds statutory authority over currency management in India under which legislation?",
    options: [
      "Section 22 of the Reserve Bank of India Act, 1934",
      "Banking Regulation Act, 1949",
      "Companies Act, 2013",
      "Foreign Exchange Management Act, 1999"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Central Banking Architecture → RBI Act 1934 Section 22",
    explanation: "Section 22 of the RBI Act, 1934 gives the Reserve Bank of India the sole statutory right to issue bank notes in India (excluding one-rupee coins and notes which are issued by the Ministry of Finance)."
  },

  // --- UNIT 10: ENVIRONMENTAL ECONOMICS (Q99 - Q100) ---
  {
    id: 99,
    test_id: 2,
    question: "The 'Hedonic Pricing Method' in environmental economics is used to value non-market environmental amenities by examining:",
    options: [
      "Price differentials in housing and real estate markets attributable to variations in environmental quality (such as clean air, scenic views, or noise pollution)",
      "Total travel expenditures incurred by tourists visiting national parks",
      "Laboratory experiments on animal behavior",
      "Government pollution fines collected"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Environmental Valuation Techniques → Hedonic Pricing Method (Sherwin Rosen)",
    explanation: "The Hedonic Pricing Method uses observed market prices of property to estimate the implicit shadow price of non-market environmental attributes: Housing Price P = f(Structural features, Neighborhood, Environmental quality). Differentiating with respect to environmental quality yields the marginal willingness to pay."
  },
  {
    id: 100,
    test_id: 2,
    question: "According to 'Hotelling's Rule' for the optimal depletion of non-renewable exhaustible resources (Harold Hotelling, 1931):",
    options: [
      "The net price (marginal rent or royalty) of the exhaustible natural resource must grow at a rate equal to the market rate of interest: (P_{t+1} - MC) = (P_t - MC) * (1 + r)",
      "The resource must be completely exhausted in the first 5 years",
      "Extraction costs must remain constant forever",
      "Resource prices must fall over time"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Hard",
    concept: "Natural Resource Economics → Hotelling's Rule for Exhaustible Resources",
    explanation: "Harold Hotelling (1931) proved that in competitive resource markets with zero extraction costs (or constant MC), the resource owner must be indifferent between extracting today and extracting tomorrow. This arbitrage equilibrium requires the resource's in situ scarcity rent to grow at the discount rate r: (P_t - MC) = (P_0 - MC) * e^(rt)."
  }
];
