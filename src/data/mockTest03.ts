import { Question } from '../types';

export const mockTest03Questions: Question[] = [
  // --- UNIT 1: MICRO ECONOMICS (Q1 - Q10) ---
  {
    id: 1,
    test_id: 3,
    question: "Under the Revealed Preference Theory developed by Paul Samuelson, the Weak Axiom of Revealed Preference (WARP) implies that if bundle A is directly revealed preferred to bundle B at price vector P^0, then:",
    options: [
      "Bundle B can never be revealed preferred to bundle A at any price vector P^1 where A is affordable",
      "Bundle A and B must lie on the same indifference curve",
      "The consumer's preferences must be intransitive",
      "Income elasticity of both goods must be equal to 1"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Revealed Preference Theory → Weak Axiom of Revealed Preference (WARP)",
    explanation: "Samuelson's WARP states that if a consumer purchases bundle A when bundle B is affordable (P^0·A >= P^0·B), then at any new prices P^1 where B is purchased, bundle A must be strictly unaffordable (P^1·B < P^1·A). Bundle B can never be revealed preferred to A when A is affordable."
  },
  {
    id: 2,
    test_id: 3,
    question: "In the context of production functions, the Euler's Theorem on distribution states that if a production function Q = f(K, L) is homogeneous of degree 1 (constant returns to scale), then total product equals:",
    options: [
      "L * (∂Q/∂L) + K * (∂Q/∂K)",
      "(L + K) * (∂Q/∂L)",
      "(∂Q/∂L) * (∂Q/∂K)",
      "L^2 * (∂Q/∂L) + K^2 * (∂Q/∂K)"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Production Theory → Euler's Exhaustion Theorem",
    explanation: "Euler's Theorem for a linearly homogeneous function (degree 1) states that Q = L*(MP_L) + K*(MP_K). If each factor of production is paid its marginal physical product (W = MP_L, r = MP_K), total output is exactly exhausted with zero residual economic profit (Adding-up Problem solved by Wicksteed, Flux, and Wicksell)."
  },
  {
    id: 3,
    test_id: 3,
    question: "For a Cobb-Douglas utility function U(x, y) = x^α * y^β, the Compensating Variation (CV) and Equivalent Variation (EV) for a normal good price decrease satisfy:",
    options: [
      "EV > Consumer Surplus Change (ΔCS) > CV",
      "CV > ΔCS > EV",
      "EV = CV = ΔCS always",
      "CV > EV > ΔCS"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Hard",
    concept: "Welfare Analysis → Hicksian Measures of Welfare Change (CV vs EV)",
    explanation: "For a price fall of a normal good, because the income effect is positive and the initial real income level is lower than the new real income level, Equivalent Variation (evaluated at new utility / old prices) exceeds the change in Marshallian Consumer Surplus, which in turn exceeds Compensating Variation (EV > ΔCS > CV). For a price increase, CV > ΔCS > EV."
  },
  {
    id: 4,
    test_id: 3,
    question: "In Bertrand Duopoly with differentiated products and linear demand curves, the reaction curves of the two firms are:",
    options: [
      "Upward-sloping (prices are strategic complements)",
      "Downward-sloping (quantities are strategic substitutes)",
      "Horizontal lines",
      "Vertical lines"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Oligopoly Theory → Bertrand Differentiated Competition & Strategic Complements",
    explanation: "In price-setting Bertrand competition with differentiated products, an increase in firm 1's price increases the demand for firm 2's substitute, prompting firm 2 to raise its own price. Thus, reaction curves in price space are upward-sloping, indicating that prices are strategic complements."
  },
  {
    id: 5,
    test_id: 3,
    question: "According to the Envelope Theorem, the partial derivative of the indirect utility function V(P, M) with respect to nominal income M equals:",
    options: [
      "The Lagrange multiplier λ (marginal utility of money income)",
      "The price level P",
      "Zero",
      "The marginal rate of technical substitution"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory → Envelope Theorem & Marginal Utility of Income",
    explanation: "Applying the Envelope Theorem to the consumer's constrained utility maximization Lagrangian L = U(x) + λ(M - P·x), the derivative ∂V/∂M = ∂L/∂M = λ. The Lagrange multiplier λ represents the shadow price of income (the marginal utility of income)."
  },
  {
    id: 6,
    test_id: 3,
    question: "In George Akerlof's 'Market for Lemons' (1970), adverse selection leads to market failure because:",
    options: [
      "Buyers only offer an average price based on expected quality, causing high-quality sellers to exit the market",
      "Sellers reduce effort after signing an insurance policy",
      "Monopoly pricing creates deadweight loss",
      "Transport costs eliminate cross-border trade"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Asymmetric Information → Akerlof's Market for Lemons (1970)",
    explanation: "Because buyers cannot distinguish good cars (peaches) from bad cars (lemons) before purchasing, they are only willing to pay the expected average value. High-quality car owners refuse to sell at this discounted price and withdraw from the market, leaving only lemons."
  },
  {
    id: 7,
    test_id: 3,
    question: "A monopolist practicing First-Degree (Perfect) Price Discrimination generates a Deadweight Loss (DWL) equal to:",
    options: [
      "Zero (Total surplus is maximized, though Consumer Surplus is zero)",
      "Equal to total fixed costs",
      "Half of total revenue",
      "Higher than under single-price monopoly"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Monopoly → First-Degree Price Discrimination Efficiency",
    explanation: "Under first-degree price discrimination, the monopolist charges each consumer their exact maximum reservation price. Output expands to the competitive level where P = MC, eliminating deadweight loss (allocative efficiency is achieved), but the monopolist captures 100% of the economic surplus as producer surplus."
  },
  {
    id: 8,
    test_id: 3,
    question: "The 'St. Petersburg Paradox' was resolved by Daniel Bernoulli (1738) by introducing the concept of:",
    options: [
      "Expected Utility with diminishing marginal utility of wealth (logarithmic utility)",
      "Game theoretic minimax strategies",
      "Hyperbolic discounting over time",
      "Risk neutrality under infinite trials"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Choice Under Uncertainty → St. Petersburg Paradox & Expected Utility",
    explanation: "The St. Petersburg Paradox shows an infinite expected monetary value for a coin-toss gamble, yet individuals only pay a small finite amount to play. Bernoulli resolved this by positing that people maximize Expected Utility U(W) = ln(W) rather than expected monetary wealth, due to diminishing marginal utility."
  },
  {
    id: 9,
    test_id: 3,
    question: "In the Edgeworth Box diagram for general equilibrium in exchange, the Contract Curve represents the locus of points where:",
    options: [
      "The Marginal Rates of Substitution of the two consumers are equal: MRS_xy^A = MRS_xy^B",
      "Both consumers consume equal quantities of both goods",
      "Prices of both goods are equal to zero",
      "Total expenditure exceeds total endowment"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "General Equilibrium → Edgeworth Box & Contract Curve",
    explanation: "In an exchange economy, Pareto efficiency requires that indifference curves are tangent to each other, meaning MRS_xy^A = MRS_xy^B. The contract curve is the locus of all such Pareto-efficient allocations connecting the origins of consumer A and consumer B."
  },
  {
    id: 10,
    test_id: 3,
    question: "Under the Cournot Duopoly model with market demand P = a - b(q1 + q2) and constant marginal cost c, the equilibrium total market output is:",
    options: [
      "Q = (2/3) * (a - c) / b",
      "Q = (1/2) * (a - c) / b",
      "Q = (a - c) / b",
      "Q = (3/4) * (a - c) / b"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Oligopoly Theory → Cournot Duopoly Output Formula",
    explanation: "Each firm's reaction function is q_i = (a - c - b*q_j)/(2b). In symmetric equilibrium q1 = q2 = (a - c)/(3b). Therefore, total Cournot output Q = q1 + q2 = 2/3 * (a - c)/b. (Note: Monopoly output is 1/2*(a-c)/b and Bertrand output is (a-c)/b)."
  },

  // --- UNIT 2: MACRO ECONOMICS (Q11 - Q20) ---
  {
    id: 11,
    test_id: 3,
    question: "According to Milton Friedman's Natural Rate Hypothesis, the Long-Run Phillips Curve (LRPC) is:",
    options: [
      "A vertical straight line at the Natural Rate of Unemployment (NAIRU)",
      "Downward sloping with a permanent inflation-unemployment trade-off",
      "A horizontal line at the target inflation rate",
      "Upward sloping due to supply-side bottlenecks"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Inflation & Unemployment → Friedman-Phelps Natural Rate Hypothesis",
    explanation: "Milton Friedman (1968) and Edmund Phelps (1967) demonstrated that in the long run, inflation expectations fully adjust to actual inflation. Hence, there is no trade-off between inflation and unemployment, rendering the Long-Run Phillips Curve perfectly vertical at the natural rate of unemployment."
  },
  {
    id: 12,
    test_id: 3,
    question: "In the Solow-Swan Neoclassical Growth Model, the Golden Rule level of capital stock per worker (k*_gold) is characterized by:",
    options: [
      "Marginal Product of Capital equals the sum of depreciation and population growth: f'(k*) = n + δ",
      "Savings rate s = 1.0",
      "Per capita output growth rate exceeds 10%",
      "Capital-labor ratio is equal to 0"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Neoclassical Growth → Solow Golden Rule of Capital Accumulation",
    explanation: "Edmund Phelps (1961) formulated the Golden Rule: steady-state consumption c* = f(k*) - (n + δ)k* is maximized where dc*/dk* = 0, which yields f'(k*) = n + δ (or f'(k*) = n + g + δ with technological progress g)."
  },
  {
    id: 13,
    test_id: 3,
    question: "In the Mundell-Fleming Model with Perfect Capital Mobility and Flexible Exchange Rates, an expansionary Fiscal Policy leads to:",
    options: [
      "Complete crowding out via currency appreciation, resulting in zero net change in national output Y",
      "A permanent increase in real GDP Y",
      "A large depreciation of the domestic currency",
      "A fall in domestic interest rates below world interest rates"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Open Economy Macro → Mundell-Fleming Fiscal Policy under Flexible Rates",
    explanation: "Under flexible exchange rates and perfect capital mobility, fiscal expansion shifts IS rightward, exerting upward pressure on domestic interest rates. Capital inflows surge, appreciating the domestic currency until net exports (NX) fall by the exact amount of the fiscal stimulus (100% exchange rate crowding out)."
  },
  {
    id: 14,
    test_id: 3,
    question: "According to the Tobin's q theory of investment, a firm will undertake net physical capital investment whenever:",
    options: [
      "q > 1 (Market value of installed capital exceeds its replacement cost)",
      "q < 1",
      "q = 0",
      "Nominal interest rates exceed dividend yield"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Investment Theory → James Tobin's q Ratio (1969)",
    explanation: "James Tobin (1969) defined q = (Market Value of Installed Capital) / (Replacement Cost of Capital). If q > 1, the stock market values existing capital more than the cost of buying new machines, giving firms a strong incentive to invest in new capital goods."
  },
  {
    id: 15,
    test_id: 3,
    question: "In the Ramsey-Cass-Koopmans optimal growth model, the steady state is determined by dynamic intertemporal optimization by households. The Keynes-Ramsey rule dictates that consumption growth satisfies:",
    options: [
      "Ċ / C = (1 / θ) * [f'(k) - δ - ρ]",
      "Ċ / C = s * f(k)",
      "Ċ / C = n + g",
      "Ċ / C = ρ + δ"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Growth Theory → Ramsey-Cass-Koopmans & Keynes-Ramsey Rule",
    explanation: "The Euler equation for consumption path in the Ramsey model (Keynes-Ramsey rule) is (Ċ/C) = (r - ρ - δ)/θ = (f'(k) - δ - ρ)/θ, where r is rate of return, ρ is rate of time preference, δ is depreciation, and θ is the coefficient of relative risk aversion."
  },
  {
    id: 16,
    test_id: 3,
    question: "The Baumol-Tobin Model of Transactions Demand for Money demonstrates that the interest elasticity of money demand is:",
    options: [
      "- 0.5 (Money demand is inversely related to the square root of the interest rate: M* = sqrt(2bY / 2r))",
      "- 1.0",
      "0.0 (Completely interest-inelastic)",
      "+ 0.5"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Money Demand → Baumol-Tobin Inventory Theoretic Model",
    explanation: "William Baumol (1952) and James Tobin (1956) modeled cash management as an inventory problem. Optimal average money holding is M* = √(b·Y / 2r). Hence, income elasticity of money demand is +0.5 (economies of scale in cash holding) and interest elasticity is -0.5."
  },
  {
    id: 17,
    test_id: 3,
    question: "The 'Dynamic Stochastic General Equilibrium' (DSGE) models used by modern central banks combine:",
    options: [
      "Microeconomic foundations of optimizing agents with nominal price/wage rigidities (Calvo pricing) and rational expectations",
      "Static input-output linear programming",
      "Pure classical quantity theory without any frictions",
      "Fixed exchange rates with merchant mercantilism"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Modern Macroeconomics → DSGE Modeling Framework",
    explanation: "DSGE models synthesize New Classical dynamic stochastic optimization with New Keynesian nominal rigidities (monopolistic competition, Calvo sticky prices/wages) to analyze how monetary and fiscal policies transmit through stochastic shocks."
  },
  {
    id: 18,
    test_id: 3,
    question: "According to the Real Balance Effect (Pigou Effect), deflation increases aggregate demand during a depression because:",
    options: [
      "Falling price level P increases the real purchasing power of outside money balances (M/P), boosting household real wealth and autonomous consumption",
      "Interest rates rise to stimulate savings",
      "Firms take on more debt",
      "Imports become cheaper than domestic goods"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Classical vs Keynesian Macro → A.C. Pigou's Real Balance Effect",
    explanation: "Arthur Cecil Pigou argued against the Keynesian liquidity trap by pointing out that a fall in P raises the real purchasing power of net monetary assets (wealth W = M/P), shifting the consumption function upward and restoring full employment even if interest rates cannot fall further."
  },
  {
    id: 19,
    test_id: 3,
    question: "In the Lucas Supply Function Y = Y_n + α * (P - P^e), output deviates from its natural potential level Y_n if and only if:",
    options: [
      "There is an unexpected price surprise (P ≠ P^e)",
      "Government spending is permanently increased",
      "The central bank announces its monetary policy 1 year in advance",
      "Nominal wages are fixed by law"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Rational Expectations → Lucas Aggregate Supply Function",
    explanation: "Under Robert Lucas's Policy Ineffectiveness Proposition (PIP), anticipated monetary policy only affects P without altering (P - P^e). Only unanticipated monetary shocks (price surprises where P ≠ P^e) can temporarily cause output Y to deviate from natural output Y_n."
  },
  {
    id: 20,
    test_id: 3,
    question: "The Harrod-Domar growth model condition for dynamic steady-state equilibrium growth requires the equality between:",
    options: [
      "Actual Growth Rate (G), Warranted Growth Rate (Gw), and Natural Growth Rate (Gn): G = Gw = Gn",
      "Marginal cost and average revenue",
      "Current account balance and capital account balance",
      "Inflation rate and nominal interest rate"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Growth Models → Harrod-Domar Knife-Edge Equilibrium",
    explanation: "Roy Harrod established that steady-state equilibrium requires G = s/v = Gw (warranted growth) = Gn (natural growth rate = n + λ). Any departure between Gw and Gn leads to chronic inflation or secular stagnation (Harrod's Knife-Edge Instability Problem)."
  },

  // --- UNIT 3: MATHEMATICAL ECONOMICS (Q21 - Q30) ---
  {
    id: 21,
    test_id: 3,
    question: "For a linear programming problem (LPP), the Duality Theorem states that if the Primal problem has a finite optimal solution with objective value Z*, then:",
    options: [
      "The Dual problem also has a finite optimal solution with optimal objective value W* = Z*",
      "The Dual problem has an unbounded solution",
      "The Dual optimal value is strictly greater than Z*",
      "The Dual problem has no feasible solution"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Linear Programming → Strong Duality Theorem (von Neumann)",
    explanation: "The Fundamental Duality Theorem of Linear Programming (John von Neumann) proves that if either the primal or dual problem has a bounded optimal solution, both have optimal solutions and their optimal objective function values are exactly equal (Max Z* = Min W*)."
  },
  {
    id: 22,
    test_id: 3,
    question: "Given the production function Q = 10 * K^(0.4) * L^(0.6) where capital rental rate r = 4 and wage w = 6, the cost-minimizing capital-to-labor ratio (K / L) is:",
    options: [
      "K / L = 1.0",
      "K / L = 1.5",
      "K / L = 0.67",
      "K / L = 2.0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Optimization in Production → MRTS = w/r Tangency Condition",
    explanation: "Cost minimization requires MRTS_LK = MP_L / MP_K = w / r. Here MP_L = 0.6*(Q/L) and MP_K = 0.4*(Q/K). So MRTS = (0.6/0.4)*(K/L) = 1.5*(K/L). Setting equal to w/r = 6/4 = 1.5: 1.5*(K/L) = 1.5 => K/L = 1.0."
  },
  {
    id: 23,
    test_id: 3,
    question: "For a matrix A, if the determinant |A| = 0, then the matrix is called:",
    options: [
      "Singular (its inverse A^(-1) does not exist)",
      "Orthogonal",
      "Symmetric",
      "Idempotent"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Matrix Algebra → Singular Matrix & Invertibility",
    explanation: "A square matrix with determinant |A| = 0 is defined as a singular matrix. Because A^(-1) = Adj(A)/|A|, dividing by zero is undefined, so a singular matrix has no multiplicative inverse and its row/column vectors are linearly dependent."
  },
  {
    id: 24,
    test_id: 3,
    question: "In the Hawkins-Simon conditions for the viability of an Leontief Input-Output matrix (I - A), the necessary and sufficient conditions are:",
    options: [
      "All leading principal minors of the matrix (I - A) must be strictly positive",
      "The trace of matrix A must be equal to 1",
      "All elements of matrix A must be negative",
      "The determinant |I - A| must equal zero"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Input-Output Analysis → Hawkins-Simon Conditions (1949)",
    explanation: "David Hawkins and Herbert Simon (1949) proved that an economy can produce positive net output of all goods for final demand if and only if all leading principal minors of (I - A) are strictly positive: (1 - a11) > 0 and |I - A| > 0."
  },
  {
    id: 25,
    test_id: 3,
    question: "If total cost function is TC = Q^3 - 6Q^2 + 15Q + 50, the level of output Q at which Marginal Cost (MC) is minimized is:",
    options: [
      "Q = 2",
      "Q = 3",
      "Q = 4",
      "Q = 1"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Differential Calculus → Minimization of Marginal Cost",
    explanation: "MC = d(TC)/dQ = 3Q^2 - 12Q + 15. To minimize MC, take first derivative with respect to Q and set to zero: d(MC)/dQ = 6Q - 12 = 0 => 6Q = 12 => Q = 2. Second derivative d^2(MC)/dQ^2 = 6 > 0 (confirms minimum)."
  },
  {
    id: 26,
    test_id: 3,
    question: "For a demand function P = 80 - 4Q, the point price elasticity of demand at price P = 40 is:",
    options: [
      "|e_d| = 1.0 (Unitary Elastic)",
      "|e_d| = 0.5",
      "|e_d| = 2.0",
      "|e_d| = 4.0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Elasticity Math → Point Elasticity on Linear Demand Curve",
    explanation: "When P = 40, 4Q = 80 - 40 = 40 => Q = 10. dQ/dP = -1/4 = -0.25. Point price elasticity |e_d| = |(dQ/dP) * (P/Q)| = |-0.25 * (40/10)| = |-0.25 * 4| = 1.0."
  },
  {
    id: 27,
    test_id: 3,
    question: "In integral calculus, if Marginal Revenue is MR = 60 - 2Q, the Total Revenue (TR) function (assuming TR = 0 when Q = 0) is:",
    options: [
      "TR = 60Q - Q^2",
      "TR = 60 - Q^2",
      "TR = 60Q - 2Q^2",
      "TR = 30Q - Q^2"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Integral Calculus → Deriving Total Revenue from Marginal Revenue",
    explanation: "TR = ∫ MR dQ = ∫ (60 - 2Q) dQ = 60Q - Q^2 + C. Since TR(0) = 0, constant C = 0. Thus TR = 60Q - Q^2."
  },
  {
    id: 28,
    test_id: 3,
    question: "A Cobb-Douglas production function Q = A * K^(0.7) * L^(0.5) exhibits:",
    options: [
      "Increasing Returns to Scale (IRS) since degree of homogeneity r = 0.7 + 0.5 = 1.2 > 1",
      "Constant Returns to Scale",
      "Decreasing Returns to Scale",
      "Negative returns to labor"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Homogeneous Functions → Returns to Scale in Cobb-Douglas",
    explanation: "For Q = A*K^α*L^β, multiplying inputs by scalar λ gives f(λK, λL) = A*(λK)^0.7*(λL)^0.5 = λ^(0.7+0.5)*Q = λ^(1.2)*Q. Since α + β = 1.2 > 1, the function exhibits Increasing Returns to Scale (IRS)."
  },
  {
    id: 29,
    test_id: 3,
    question: "In the first-order difference equation y_{t+1} - a*y_t = b, the time path of y_t is dynamically stable and converges to the intertemporal equilibrium if and only if:",
    options: [
      "|a| < 1 (The absolute value of coefficient a is strictly less than 1)",
      "a > 1",
      "a = 1",
      "b = 0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Difference Equations → Stability Conditions for First-Order Systems",
    explanation: "General solution is y_t = (y_0 - y*)*a^t + y*, where y* = b/(1 - a). As t → ∞, a^t → 0 if and only if |a| < 1. If -1 < a < 0, oscillation occurs with convergence. If 0 < a < 1, monotonic convergence occurs."
  },
  {
    id: 30,
    test_id: 3,
    question: "The value of the definite integral ∫ (from 0 to 4) (3x^2 + 2x) dx is:",
    options: [
      "80",
      "64",
      "72",
      "96"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Integral Calculus → Definite Integration Evaluation",
    explanation: "Antiderivative: F(x) = x^3 + x^2. Evaluating between 0 and 4: F(4) - F(0) = (4^3 + 4^2) - 0 = (64 + 16) = 80."
  },

  // --- UNIT 4: ECONOMETRICS (Q31 - Q40) ---
  {
    id: 31,
    test_id: 3,
    question: "The Gauss-Markov Theorem states that under classical assumptions, the Ordinary Least Squares (OLS) estimators are BLUE, which stands for:",
    options: [
      "Best Linear Unbiased Estimator (Minimum variance among all linear unbiased estimators)",
      "Basic Linear Universal Equation",
      "Bounded Logarithmic Uncorrelated Estimator",
      "Bayesian Linear Uniform Estimator"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Classical Linear Regression Model → Gauss-Markov Theorem (BLUE)",
    explanation: "The Gauss-Markov Theorem establishes that if error terms have zero mean, constant variance (homoscedasticity), and zero autocorrelation, the OLS estimator β_hat has the minimum variance within the entire class of linear unbiased estimators (BLUE)."
  },
  {
    id: 32,
    test_id: 3,
    question: "When perfect multicollinearity is present in a multiple regression model Y = β0 + β1*X1 + β2*X2 + u:",
    options: [
      "The (X'X) matrix is singular, making it mathematically impossible to compute unique OLS coefficients (infinite standard errors)",
      "The OLS estimators become biased",
      "R-squared is always negative",
      "Durbin-Watson statistic becomes equal to 4"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Multicollinearity → Perfect Multicollinearity & Matrix Singularity",
    explanation: "Perfect multicollinearity means an exact linear relationship exists between regressors (e.g., X2 = 2*X1). As a result, the determinant |X'X| = 0, matrix inversion (X'X)^(-1) is impossible, and individual regression coefficients cannot be identified."
  },
  {
    id: 33,
    test_id: 3,
    question: "The White's General Test for Heteroscedasticity detects variance misspecification by regressing squared OLS residuals (e_i^2) on:",
    options: [
      "All original explanatory variables, their squared terms, and their cross-products",
      "Lagged residuals e_{i-1}",
      "The dependent variable Y_i only",
      "Time trend t"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Heteroscedasticity Testing → Halbert White's General Test (1980)",
    explanation: "Halbert White (1980) formulated an asymptotic test that requires no prior assumption about the form of heteroscedasticity: e_i^2 is regressed on all X_k, X_k^2, and X_j*X_k. The test statistic n*R^2 follows a Chi-Square distribution with degrees of freedom equal to the number of regressors in the auxiliary regression."
  },
  {
    id: 34,
    test_id: 3,
    question: "In the presence of First-Order Positive Autocorrelation [u_t = ρ*u_{t-1} + ε_t with ρ > 0], the Durbin-Watson statistic (d) will be:",
    options: [
      "Close to 0 (d ≈ 2*(1 - ρ) < 2)",
      "Equal to 2.0",
      "Close to 4.0",
      "Strictly negative"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Autocorrelation → Durbin-Watson Test Statistic Formula",
    explanation: "The Durbin-Watson test statistic is d ≈ 2*(1 - r_1). When there is no autocorrelation (r_1 = 0), d ≈ 2. When there is perfect positive autocorrelation (r_1 = +1), d ≈ 0. When there is perfect negative autocorrelation (r_1 = -1), d ≈ 4."
  },
  {
    id: 35,
    test_id: 3,
    question: "The Augmented Dickey-Fuller (ADF) test is used in time series econometrics to test for:",
    options: [
      "The presence of a Unit Root (testing whether a time series is non-stationary)",
      "Multicollinearity",
      "Structural breaks at known dates",
      "Homoscedasticity of residuals"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Time Series Econometrics → Augmented Dickey-Fuller (ADF) Unit Root Test",
    explanation: "David Dickey and Wayne Fuller (1979, 1981) developed the ADF test to test the null hypothesis H0: γ = 0 (series contains a unit root / non-stationary) against H1: γ < 0 (series is stationary I(0)), adding lagged difference terms to control for higher-order serial correlation."
  },
  {
    id: 36,
    test_id: 3,
    question: "In simultaneous equations modeling, the Order Condition for identification of an equation states that:",
    options: [
      "(K - k) >= (m - 1), where K is total predetermined variables in model, k is predetermined in equation, and m is endogenous in equation",
      "The rank of the reduced form coefficient matrix must equal zero",
      "Number of observations must exceed 1000",
      "R-squared of each equation must exceed 0.9"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Simultaneous Equations → Order Condition for Identification",
    explanation: "The Order Condition is a necessary condition for identification: the number of excluded predetermined variables (K - k) must be at least as large as the number of included endogenous variables minus 1 (m - 1). If (K - k) = m - 1 (exactly identified); if (K - k) > m - 1 (overidentified)."
  },
  {
    id: 37,
    test_id: 3,
    question: "In a Probit model, the relationship between regressor X_i and the probability of event occurrence P_i is modeled using the:",
    options: [
      "Standard Normal Cumulative Distribution Function Φ(Z_i)",
      "Standard Logistic CDF",
      "Poisson Probability Mass Function",
      "Uniform Box Function"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Qualitative Response Models → Probit Model (Normit)",
    explanation: "The Probit model assumes that the underlying latent response variable follows a standard normal distribution, so P_i = Prob(Y=1|X) = Φ(X_i*β) = ∫ (from -∞ to X_i*β) (1/√(2π)) * e^(-t^2/2) dt."
  },
  {
    id: 38,
    test_id: 3,
    question: "The Two-Stage Least Squares (2SLS) estimation method is primarily used to solve the problem of:",
    options: [
      "Endogeneity of regressors (correlation between explanatory variables and the error term: Cov(X, u) ≠ 0)",
      "Excessive degrees of freedom",
      "Non-normality of dependent variable",
      "Cross-sectional heterogeneity in random sampling"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Instrumental Variables → Two-Stage Least Squares (2SLS) Estimator",
    explanation: "When an explanatory variable is endogenous (due to omitted variables, measurement error, or simultaneity), OLS is biased and inconsistent. 2SLS uses exogenous instrumental variables Z in Stage 1 to generate predicted values X_hat, and regresses Y on X_hat in Stage 2 to obtain consistent parameter estimates."
  },
  {
    id: 39,
    test_id: 3,
    question: "In panel data regression, the Fixed Effects (Within) estimator eliminates time-invariant unobserved individual heterogeneity (α_i) by:",
    options: [
      "Demeaning the data (subtracting individual-specific time means from each variable: Y_it - Ȳ_i)",
      "Using first differencing on time dummies only",
      "Assuming individual effects α_i are completely uncorrelated with regressors",
      "Dropping half the cross-sectional units"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Panel Data Econometrics → Fixed Effects (Within-Group) Transformation",
    explanation: "The Within transformation calculates individual time-averages Ȳ_i = β*X̄_i + α_i + ū_i and subtracts them from the original equation: (Y_it - Ȳ_i) = β*(X_it - X̄_i) + (u_it - ū_i). Because (α_i - α_i) = 0, the unobserved effect is purged, allowing consistent estimation of β even when Cov(α_i, X_it) ≠ 0."
  },
  {
    id: 40,
    test_id: 3,
    question: "The Adjusted R-squared (R̄^2) differs from unadjusted R^2 because R̄^2:",
    options: [
      "Penalizes the addition of non-significant explanatory variables by adjusting for degrees of freedom: R̄^2 = 1 - [(1 - R^2)*(n - 1) / (n - k)]",
      "Is always strictly greater than R^2",
      "Cannot take negative values",
      "Measures only bivariate correlation"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Goodness of Fit → Adjusted Coefficient of Determination (R̄^2)",
    explanation: "Henri Theil introduced Adjusted R^2 to counter the fact that unadjusted R^2 monotonically rises whenever any regressor is added. R̄^2 = 1 - [(1 - R^2)*(n - 1)/(n - k)]. R̄^2 will increase only if the absolute t-statistic of the added variable exceeds 1.0."
  },

  // --- UNIT 5: INTERNATIONAL ECONOMICS (Q41 - Q50) ---
  {
    id: 41,
    test_id: 3,
    question: "The Heckscher-Ohlin (H-O) Theorem states that a country will export the commodity that utilizes its:",
    options: [
      "Abundantly endowed factor of production intensively",
      "Scarcest factor of production intensively",
      "Cheapest natural resources exclusively",
      "Import-competing industrial inputs"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Trade Theory → Heckscher-Ohlin Factor Endowment Theorem",
    explanation: "Eli Heckscher (1919) and Bertil Ohlin (1933) posited that trade patterns are determined by relative factor endowments: a capital-abundant country has a comparative advantage in and exports capital-intensive goods, while a labor-abundant country exports labor-intensive goods."
  },
  {
    id: 42,
    test_id: 3,
    question: "The 'Stolper-Samuelson Theorem' proves that the imposition of an import tariff in a nation will:",
    options: [
      "Increase the real return to the country's scarce factor used intensively in the import-competing sector, and reduce the real return to the abundant factor",
      "Increase the real earnings of all domestic factors of production equally",
      "Decrease the price of imported goods domestically",
      "Have no effect on income distribution"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade & Factor Prices → Stolper-Samuelson Theorem (1941)",
    explanation: "Wolfgang Stolper and Paul Samuelson (1941) showed that a tariff raises the domestic relative price of the import-competing good, which via the zero-profit condition magnifies the real reward of the factor used intensively in that sector (the scarce factor) while lowering the real reward of the abundant factor."
  },
  {
    id: 43,
    test_id: 3,
    question: "The 'Rybczynski Theorem' states that an increase in the endowment of one factor of production (e.g. Capital), at constant commodity prices, leads to:",
    options: [
      "An absolute increase in the output of the capital-intensive commodity and an absolute decrease in the output of the labor-intensive commodity",
      "An equal percentage increase in the output of both commodities",
      "A decline in total national income",
      "Zero change in the production possibility frontier"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade & Growth → T.M. Rybczynski Theorem (1955)",
    explanation: "T.M. Rybczynski (1955) proved that with fixed commodity prices (which fix factor prices and input ratios), an increase in capital endowment expands the capital-intensive sector. To maintain factor proportions, that sector absorbs both the new capital and labor released from the labor-intensive sector, causing labor-intensive output to contract absolutely."
  },
  {
    id: 44,
    test_id: 3,
    question: "The Marshall-Lerner Condition states that currency devaluation will successfully improve a country's trade balance if and only if:",
    options: [
      "The sum of the price elasticities of demand for exports and imports exceeds unity: (|e_x| + |e_m| > 1)",
      "|e_x| + |e_m| < 1",
      "Foreign exchange reserves are equal to zero",
      "Domestic inflation rate is higher than foreign inflation"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Balance of Payments → Marshall-Lerner Condition for Devaluation",
    explanation: "Alfred Marshall and Abba Lerner established that devaluation cheapens exports and makes imports costlier. For the volume effect (higher export quantity, lower import quantity) to outweigh the adverse price effect, the sum of price elasticities of export and import demand must be strictly greater than 1 (|e_x| + |e_m| > 1)."
  },
  {
    id: 45,
    test_id: 3,
    question: "The 'J-Curve Effect' in balance of payments theory explains why, immediately following a currency devaluation, the trade balance:",
    options: [
      "First deteriorates in the short run due to pre-existing contracts and inelastic demand, before improving in the long run as quantities adjust",
      "Improves instantaneously on day one",
      "Remains constant indefinitely",
      "Diverges permanently to infinity"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Open Economy Adjustments → J-Curve Phenomenon (Stephen Magee)",
    explanation: "Stephen Magee (1973) documented the J-Curve: in the short run, trade contracts are pre-fixed in foreign currency, so imports immediately cost more while export volumes take time to expand (|e_x| + |e_m| < 1 in short run). Thus, the trade deficit initially widens before reversing and improving."
  },
  {
    id: 46,
    test_id: 3,
    question: "Jacob Viner's (1950) theory of Customs Unions classifies welfare effects into:",
    options: [
      "Trade Creation (welfare-enhancing shift to lower-cost partner) and Trade Diversion (welfare-reducing shift from lower-cost non-member to higher-cost partner)",
      "Internal economies and external diseconomies",
      "Absolute advantage and comparative advantage",
      "Nominal tariffs and effective tariffs"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Economic Integration → Jacob Viner's Customs Union Theory (1950)",
    explanation: "Jacob Viner demonstrated that forming a preferential trade agreement is not unambiguously welfare-improving. Trade Creation (replacing high-cost domestic production with low-cost partner imports) improves welfare, while Trade Diversion (shifting imports from low-cost rest-of-world to higher-cost partner due to zero tariffs) harms global welfare."
  },
  {
    id: 47,
    test_id: 3,
    question: "Wassily Leontief's (1953) empirical test of the Heckscher-Ohlin theorem using 1947 US input-output data found that:",
    options: [
      "The US (the most capital-abundant nation in the world) exported labor-intensive goods and imported capital-intensive goods (Leontief Paradox)",
      "The US exported purely agricultural raw materials",
      "Heckscher-Ohlin predictions were 100% accurate",
      "Tariffs eliminated all US manufactured exports"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade Tests → Leontief Paradox (1953)",
    explanation: "Wassily Leontief found that US exports had a lower capital-labor ratio (K/L) than US import-competing replacements, contradicting the H-O theorem. This paradox was later explained by incorporating human capital (skills of US workers), R&D intensity, and factor intensity reversals."
  },
  {
    id: 48,
    test_id: 3,
    question: "The 'Optimum Tariff' for a large importing country that can influence world prices is calculated as:",
    options: [
      "t* = 1 / e_f (where e_f is the price elasticity of foreign export supply)",
      "t* = e_f / (1 + e_f)",
      "t* = 1 / |e_d|",
      "t* = 100%"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Trade Policy → Optimum Tariff Formula (Robert Bickerdike)",
    explanation: "Robert Bickerdike and Tibor Scitovsky showed that a large country can improve its terms of trade by imposing a tariff that forces foreign exporters to lower their prices. The welfare-maximizing optimum tariff rate is equal to the reciprocal of the price elasticity of foreign export supply: t* = 1 / e_f."
  },
  {
    id: 49,
    test_id: 3,
    question: "The 'Purchasing Power Parity' (PPP) theory in its Absolute form states that the nominal exchange rate between two currencies (E_{$/€}) should equal:",
    options: [
      "The ratio of the domestic price level to the foreign price level: E = P_domestic / P_foreign",
      "The ratio of money supplies",
      "The interest rate differential",
      "The trade balance surplus"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Exchange Rate Determination → Purchasing Power Parity (Gustav Cassel)",
    explanation: "Gustav Cassel (1918) formulated Absolute PPP based on the Law of One Price: under free trade and zero transport costs, identical baskets of goods should cost the same across nations in a common currency, so the spot exchange rate E = P / P*."
  },
  {
    id: 50,
    test_id: 3,
    question: "In the Special Drawing Rights (SDR) valuation basket maintained by the International Monetary Fund (IMF), which five currencies are currently included?",
    options: [
      "US Dollar, Euro, Chinese Renminbi, Japanese Yen, and British Pound Sterling",
      "US Dollar, Euro, Indian Rupee, Japanese Yen, and Swiss Franc",
      "US Dollar, British Pound, Canadian Dollar, Euro, and Gold",
      "US Dollar, Russian Ruble, Euro, Chinese Yuan, and Saudi Riyal"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "International Financial Institutions → IMF SDR Currency Basket",
    explanation: "The IMF's SDR basket is reviewed every five years and comprises the currencies of the world's largest trading nations meeting export and freely usable criteria: US Dollar (largest weight), Euro, Chinese Renminbi (added in 2016), Japanese Yen, and British Pound Sterling."
  },

  // --- UNIT 6: PUBLIC ECONOMICS (Q51 - Q60) ---
  {
    id: 51,
    test_id: 3,
    question: "Musgrave's Three Functions of Public Finance state that the government budget is deployed for:",
    options: [
      "Allocation, Distribution, and Stabilization",
      "Taxation, Borrowing, and Printing Money",
      "Deficit Financing, External Debt, and Disinvestment",
      "Subsidies, Tariffs, and Price Controls"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Finance Foundations → Richard Musgrave's Three Budget Branches (1959)",
    explanation: "Richard Musgrave (1959) categorized public finance into three distinct economic branches: (1) Allocation Branch (provision of public goods and correcting externalities), (2) Distribution Branch (equitable distribution of income/wealth), and (3) Stabilization Branch (maintaining full employment and price stability)."
  },
  {
    id: 52,
    test_id: 3,
    question: "The 'Coase Theorem' (Ronald Coase, 1960) states that in the presence of externalities, private bargaining will lead to an efficient outcome without government intervention if:",
    options: [
      "Property rights are clearly assigned and transaction costs are zero (or negligible)",
      "The government imposes a Pigouvian tax",
      "Both parties are state-owned monopolies",
      "There are infinite number of victims"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Market Failure & Externalities → Ronald Coase Theorem (1960)",
    explanation: "Ronald Coase (1991 Nobel laureate) showed that if property rights are well-defined and tradeable, and transaction/bargaining costs are zero, parties will negotiate mutually beneficial compensation to internalize externalities regardless of which party is originally assigned the property right."
  },
  {
    id: 53,
    test_id: 3,
    question: "A 'Pigouvian Tax' is an optimal environmental tax designed to internalize a negative production externality by setting the tax per unit of output equal to:",
    options: [
      "The Marginal External Damage (Marginal External Cost) at the socially optimal output level: t = MEC",
      "The firm's Average Fixed Cost",
      "Total consumer surplus",
      "The market price of the good"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Externalities → Pigouvian Tax Correction (A.C. Pigou)",
    explanation: "Arthur Cecil Pigou (1920) proposed setting an excise tax t equal to the Marginal External Cost (MEC) at the social optimum. This bridges the gap between Marginal Private Cost (MPC) and Marginal Social Cost (MSC = MPC + MEC), ensuring firms produce where Price = MSC."
  },
  {
    id: 54,
    test_id: 3,
    question: "The 'Ramsey Rule' of optimal commodity taxation states that to minimize total deadweight loss (excess burden) while raising a given tax revenue, commodity tax rates should be:",
    options: [
      "Inversely proportional to the price elasticity of demand for the goods (Inverse Elasticity Rule: t_i ∝ 1 / |e_i|)",
      "Uniform and equal across all luxury and essential goods",
      "Directly proportional to price elasticity of demand",
      "Zero on imported goods"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Optimal Taxation → Frank Ramsey's Inverse Elasticity Rule (1927)",
    explanation: "Frank Ramsey (1927) proved that to minimize aggregate deadweight loss, tax rates should induce an equal equiproportionate reduction in the compensated demand for each good. For uncorrelated goods, this implies taxing price-inelastic necessities at higher rates than price-elastic goods: t_i/t_j = |e_j|/|e_i|."
  },
  {
    id: 55,
    test_id: 3,
    question: "The 'Peacock-Wiseman Hypothesis' explains the long-run growth of public expenditure in the UK based on the concept of:",
    options: [
      "Displacement Effect, Inspection Effect, and Concentration Effect during major national crises (wars)",
      "Wagner's Law of expanding state activities in industrialization",
      "Permanent Keynesian deficit financing",
      "Laffer Curve tax rate optimizations"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Expenditure Theories → Peacock-Wiseman Hypothesis (1961)",
    explanation: "Alan Peacock and Jack Wiseman (1961) showed that public expenditure does not grow smoothly. During major crises (wars/pandemics), government spending jumps upward (Displacement Effect). Citizens accept higher tax levels, which persist even after the crisis ends due to new government obligations (Inspection and Concentration Effects)."
  },
  {
    id: 56,
    test_id: 3,
    question: "The 'Benefit Principle of Taxation' (advocated by Erik Lindahl and Knut Wicksell) requires that:",
    options: [
      "An individual's tax liability should be directly linked to the benefits they receive from government-provided goods and services",
      "Taxes should be levied exclusively according to ability to pay",
      "High-income earners must pay 90% marginal tax rate",
      "All public services must be financed through money creation"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Principles of Taxation → Benefit Principle vs Ability to Pay",
    explanation: "The Benefit Principle treats taxation like a market price: citizens pay taxes in proportion to the utility and marginal benefits they derive from public spending. User fees, road tolls, and fuel cess are practical examples."
  },
  {
    id: 57,
    test_id: 3,
    question: "The Samuelson Condition for the optimal provision of a pure public good states that efficiency requires:",
    options: [
      "The sum of individual Marginal Rates of Substitution equals the Marginal Rate of Transformation: Σ MRS_i = MRT",
      "MRS_1 = MRS_2 = MRT",
      "Price of the public good equals zero",
      "Total tax revenue equals GDP"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Goods Provision → Paul Samuelson's Optimality Condition (1954)",
    explanation: "Paul Samuelson (1954) showed that because public goods are non-rival in consumption, total social marginal benefit is obtained by vertical summation of individual marginal evaluations. Thus, efficiency requires Σ MRS_xy^i = MRT_xy (whereas for private goods MRS_xy^1 = MRS_xy^2 = MRT_xy)."
  },
  {
    id: 58,
    test_id: 3,
    question: "The 'Laffer Curve' illustrates the theoretical relationship between:",
    options: [
      "Tax rates and total tax revenue collected by the government (showing a revenue-maximizing tax rate t*)",
      "Income inequality and per capita GDP",
      "Inflation rate and unemployment rate",
      "Government expenditure and bond yields"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Supply-Side Economics → Arthur Laffer Curve",
    explanation: "Arthur Laffer showed that tax revenue is zero at tax rates of 0% and 100%. As tax rates increase, revenue rises initially, reaches a peak at t*, and then declines because excessively high tax rates discourage labor supply, investment, and compliance while encouraging tax evasion."
  },
  {
    id: 59,
    test_id: 3,
    question: "Under the 'Fiscal Federalism' theory of Wallace Oates (1972), the Decentralization Theorem demonstrates that:",
    options: [
      "Provision of local public goods by decentralized sub-national governments is welfare-superior to centralized uniform provision when local preferences and costs vary across jurisdictions",
      "All taxes must be collected exclusively by the central federal government",
      "Local governments should have zero borrowing powers",
      "Intergovernmental grants create pure deadweight loss"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Fiscal Federalism → Wallace Oates' Decentralization Theorem (1972)",
    explanation: "Wallace Oates (1972) proved that in the absence of cost economies of scale and inter-jurisdictional spillovers, decentralized provision of public goods tailors outputs to local citizen preferences, generating strictly higher social welfare than a uniform central government standard."
  },
  {
    id: 60,
    test_id: 3,
    question: "The 'Flypaper Effect' in intergovernmental fiscal transfers refers to the empirical finding that:",
    options: [
      "Lump-sum unconditional federal grants stimulate local government spending significantly more than an equivalent increase in local private community income ('Money sticks where it hits')",
      "Grants are entirely lost to corruption",
      "Local taxes rise when federal grants are received",
      "State governments return all surplus funds to the center"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Hard",
    concept: "Fiscal Federalism → The Flypaper Effect (Arthur Okun / Gramlich)",
    explanation: "Traditional median voter models predict that an unconditional grant of $1 to a local government should have the same effect as a $1 increase in resident private income. However, empirical studies show that grants stimulate local public spending far more heavily—money 'sticks where it hits' like flypaper."
  },

  // --- UNIT 7: MONEY & BANKING (Q61 - Q70) ---
  {
    id: 61,
    test_id: 3,
    question: "In the Reserve Bank of India's monetary aggregates framework, Broad Money (M3) is calculated as:",
    options: [
      "M3 = Currency with Public + Demand Deposits with Banks + Other Deposits with RBI + Time Deposits with Banking System (M1 + Time Deposits)",
      "M3 = Currency with Public + Post Office Savings Deposits",
      "M3 = M2 + Total Post Office Deposits",
      "M3 = Bank Credit to Commercial Sector alone"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "RBI Monetary Aggregates → Broad Money (M3) Formula",
    explanation: "Under the Working Group on Money Supply (Y.V. Reddy Committee): M1 (Narrow Money) = Currency with the public + Demand deposits with banking system + 'Other' deposits with RBI. M3 (Broad Money) = M1 + Time deposits with the banking system."
  },
  {
    id: 62,
    test_id: 3,
    question: "The 'Money Multiplier' (m) formula linking High Powered Reserve Money (M0) to Broad Money supply (M) is expressed as:",
    options: [
      "m = (1 + c) / (c + r), where c is the currency-deposit ratio and r is the reserve-deposit ratio",
      "m = 1 / (c * r)",
      "m = (c + r) / (1 + c)",
      "m = c / (1 - r)"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Money Creation → Money Multiplier Formula",
    explanation: "Money stock M = C + D = (c + 1)D. Monetary base M0 = C + R = (c + r)D. Dividing M by M0 gives the Money Multiplier m = (1 + c) / (c + r). A decline in Cash Reserve Ratio (r) increases the multiplier and expands money supply."
  },
  {
    id: 63,
    test_id: 3,
    question: "In the Reserve Bank of India's Liquidity Adjustment Facility (LAF), the 'Marginal Standing Facility' (MSF) rate is:",
    options: [
      "A penal rate at which scheduled commercial banks can borrow overnight liquidity against SLR securities, pegged at a spread above the Policy Repo Rate",
      "The rate paid by RBI on bank deposits",
      "Equal to the 10-year government bond yield",
      "Fixed at zero for priority sector lending"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Monetary Policy Instruments → RBI Marginal Standing Facility (MSF)",
    explanation: "Introduced in May 2011, MSF serves as an overnight penal borrowing window for scheduled commercial banks to manage acute liquidity shortages by dipping into their Statutory Liquidity Ratio (SLR) quota up to a permissible limit, priced at a premium above the Repo Rate."
  },
  {
    id: 64,
    test_id: 3,
    question: "Under the Basel III Capital Adequacy Regulatory Framework, the minimum Common Equity Tier 1 (CET1) capital ratio required for commercial banks is:",
    options: [
      "4.5% of Risk-Weighted Assets (plus a 2.5% Capital Conservation Buffer = 7.0%)",
      "1.0%",
      "12.0%",
      "25.0%"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Regulation → Basel III Capital Adequacy Accords",
    explanation: "The Basel Committee on Banking Supervision (BCBS) Basel III framework requires: Minimum Common Equity Tier 1 (CET1) of 4.5%, Total Tier 1 capital of 6.0%, and Total Minimum Capital (Tier 1 + Tier 2) of 8.0% of Risk-Weighted Assets (RWA), supplemented by a 2.5% Capital Conservation Buffer."
  },
  {
    id: 65,
    test_id: 3,
    question: "The Monetary Policy Committee (MPC) of the Reserve Bank of India constituted under the RBI Act (amended in 2016) consists of:",
    options: [
      "6 Members (3 from RBI including the Governor who holds a casting vote, and 3 external members appointed by Central Government)",
      "10 Members all from commercial banks",
      "5 Members including the Union Finance Minister as Chairman",
      "3 Members only from NITI Aayog"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Institutional Monetary Framework → RBI Monetary Policy Committee (MPC)",
    explanation: "Under Section 45ZB of the amended RBI Act, 1934, the MPC comprises 6 members: the RBI Governor (Chairperson, ex-officio), Deputy Governor in charge of monetary policy, one RBI officer, and three independent external experts appointed by the Central Government. The Governor has a casting vote in case of a tie."
  },
  {
    id: 66,
    test_id: 3,
    question: "According to the Classical Fisher Equation of Exchange MV = PT, assuming velocity of money V and transaction volume T are constant in the short run:",
    options: [
      "A doubling of the money supply M leads to an exact doubling of the general price level P (Proportionality Postulate)",
      "Real GDP doubles instantly",
      "Nominal interest rate drops to zero",
      "Velocity of money drops by half"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Quantity Theory of Money → Irving Fisher's Equation of Exchange (1911)",
    explanation: "Irving Fisher (1911) formulated MV = PT. Under classical assumptions of wage-price flexibility and full employment, T is fixed at potential output and V is institutionalized. Thus, changes in money supply M cause strictly equiproportionate changes in the aggregate price level P (Classical Neutrality of Money)."
  },
  {
    id: 67,
    test_id: 3,
    question: "In the context of banking sector reforms in India, the concept of 'Narrow Banking' recommended by the Tarapore Committee implies that:",
    options: [
      "Weak banks should restrict their deployment of deposits strictly to risk-free government securities and safe liquid assets, avoiding risky corporate loans",
      "Banks can only lend to small and marginal farmers",
      "Foreign banks are prohibited from opening new branches",
      "Cash transactions are limited to ₹10,000 per day"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Reforms in India → S.S. Tarapore Committee on Narrow Banking",
    explanation: "The Committee on Capital Account Convertibility (headed by S.S. Tarapore) proposed 'Narrow Banking' for distressed banks with high non-performing assets (NPAs): rather than aggressive lending, they should invest incremental deposits primarily in zero-risk government bonds until financial stability is restored."
  },
  {
    id: 68,
    test_id: 3,
    question: "The 'Yield Curve' plotting nominal yields of government bonds against their maturity periods is typically upward sloping because of:",
    options: [
      "Liquidity Premium Theory (investors demand a risk/term premium for locking up funds in longer maturities subject to price volatility)",
      "Expectations of hyper-deflation",
      "Monopoly pricing by the central bank",
      "Zero probability of inflation in the long run"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Term Structure of Interest Rates → Yield Curve & Liquidity Premium Theory",
    explanation: "John Hicks's Liquidity Preference/Premium Theory states that long-term bonds carry greater interest rate risk (duration risk). Investors prefer liquid short-term assets and demand a positive term premium to hold long-dated bonds, rendering the normal yield curve upward sloping."
  },
  {
    id: 69,
    test_id: 3,
    question: "The 'Standing Deposit Facility' (SDF) introduced by RBI in April 2022 strengthens liquidity management because it:",
    options: [
      "Allows RBI to absorb surplus liquidity from commercial banks without requiring the provision of government collateral/securities",
      "Replaces all priority sector lending requirements",
      "Provides zero-interest loans to non-banking financial companies (NBFCs)",
      "Mandates that banks maintain 50% cash reserve ratio"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "RBI Modern Liquidity Framework → Standing Deposit Facility (SDF)",
    explanation: "Empowered by the 2018 amendment to Section 17 of the RBI Act, the Standing Deposit Facility (SDF) became the floor of the LAF corridor in April 2022. It enables the RBI to suck out uncollateralized excess liquidity from banks, overcoming the constraint of limited government securities holdings."
  },
  {
    id: 70,
    test_id: 3,
    question: "According to the CAMELS rating framework used by banking supervisors worldwide, the letter 'M' stands for:",
    options: [
      "Management Quality",
      "Monetary Aggregate",
      "Market Capitalization",
      "Marginal Productivity"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Banking Supervision → CAMELS Supervisory Rating System",
    explanation: "The CAMELS supervisory rating framework evaluates: C - Capital Adequacy, A - Asset Quality, M - Management Quality, E - Earnings Performance, L - Liquidity, and S - Sensitivity to Market Risk."
  },

  // --- UNIT 8: DEVELOPMENT ECONOMICS (Q71 - Q80) ---
  {
    id: 71,
    test_id: 3,
    question: "In Arthur Lewis's Two-Sector Surplus Labor Model (1954), the modern capitalist sector expands by:",
    options: [
      "Reinvesting capitalist profits to employ surplus rural labor at a constant institutional subsistence wage",
      "Relying on foreign foreign direct investment exclusively",
      "Importing capital goods financed through currency printing",
      "Subsidizing traditional agriculture"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Dual Economy Models → W. Arthur Lewis Surplus Labor Model (1954)",
    explanation: "Arthur Lewis (1979 Nobel laureate) showed that developing economies possess an unlimited supply of labor in the traditional subsistence sector where marginal productivity of labor is zero/negligible. The modern industrial sector hires this labor at an institutional wage (approx 30% above subsistence) and generates capitalist surplus, which is reinvested to sustain capital accumulation until the Lewis Turning Point."
  },
  {
    id: 72,
    test_id: 3,
    question: "The 'Big Push' theory of economic development formulated by Paul Rosenstein-Rodan (1943) argues that:",
    options: [
      "A massive coordinated program of simultaneous investments across complementary manufacturing sectors and social overhead capital is necessary to overcome market indivisibilities and demand externalities",
      "Developing nations should focus exclusively on agriculture",
      "Gradual piecemeal investments in one sector at a time are optimal",
      "Free market prices automatically eliminate underdevelopment traps"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Balanced Growth → Paul Rosenstein-Rodan Big Push Theory (1943)",
    explanation: "Rosenstein-Rodan showed that due to indivisibility of demand, production functions, and social overhead capital (infrastructure), a single shoe factory cannot survive on its own. A large, synchronized 'Big Push' across many industries creates mutual demand and self-sustaining industrialization."
  },
  {
    id: 73,
    test_id: 3,
    question: "Albert O. Hirschman's 'Unbalanced Growth Theory' (1958) proposes inducing rapid economic development by deliberately investing in sectors with:",
    options: [
      "High Forward and Backward Linkages (e.g. Iron & Steel, Heavy Machinery)",
      "Zero linkages with other domestic firms",
      "Pure consumer handicraft products only",
      "Primary agricultural exports alone"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Unbalanced Growth Strategy → Albert Hirschman's Linkage Effects (1958)",
    explanation: "Albert Hirschman argued that underdeveloped nations lack the decision-making and capital capacity for simultaneous balanced growth. Investment should be concentrated in key industries with powerful Backward Linkages (demand for inputs) and Forward Linkages (supplying intermediate outputs) to stimulate secondary entrepreneurial investments."
  },
  {
    id: 74,
    test_id: 3,
    question: "The 'Human Development Index' (HDI) created by Mahbub ul Haq and Amartya Sen (1990) calculates a composite geometric mean of which three dimensions?",
    options: [
      "Health (Life Expectancy at birth), Education (Mean and Expected Years of Schooling), and Standard of Living (GNI per capita in PPP $)",
      "GDP growth rate, Export growth, and Infant Mortality",
      "Calorie intake, Literacy rate, and Housing units",
      "Carbon emissions, Poverty headcount, and Foreign aid"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Welfare & Human Development → UNDP Human Development Index (HDI)",
    explanation: "Published annually by UNDP since 1990, the HDI is the geometric mean of three normalized indices: (1) Long and healthy life (Life Expectancy Index), (2) Knowledge (Education Index combining Mean Years of Schooling for adults and Expected Years of Schooling for children), and (3) Decent standard of living (GNI per capita in 2017 PPP $)."
  },
  {
    id: 75,
    test_id: 3,
    question: "In the Harris-Todaro Model of Rural-Urban Migration (1970), rural workers migrate to cities because:",
    options: [
      "The expected urban wage (actual urban minimum wage weighted by the probability of finding a formal job) exceeds the agricultural wage",
      "Urban formal jobs are guaranteed to 100% of migrants",
      "Rural wages are equal to zero",
      "Government provides free urban housing"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Migration & Urban Unemployment → John Harris and Michael Todaro Model (1970)",
    explanation: "John Harris and Michael Todaro showed that rural-urban migration is an economically rational response to expected (rather than actual) earnings differentials: Migration occurs if w_r < (E_u / L_u) * w_u (where w_u is formal urban wage and E_u/L_u is urban employment rate), explaining persistent urban informal sector unemployment."
  },
  {
    id: 76,
    test_id: 3,
    question: "W.W. Rostow's 'Stages of Economic Growth' model (1960) identifies the sequence of development as:",
    options: [
      "Traditional Society → Pre-conditions for Take-off → Take-off → Drive to Maturity → Age of High Mass Consumption",
      "Agrarian → Feudalism → Capitalism → Socialism → Communism",
      "Underdeveloped → Developing → Developed",
      "Primary → Secondary → Tertiary → Quaternary"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Historical Growth Stages → Walt Whitman Rostow's 5 Stages of Growth",
    explanation: "W.W. Rostow presented 5 linear stages through which all societies progress: (1) The Traditional Society, (2) Preconditions for Take-off, (3) The Take-off (where net investment rises from ~5% to >10% of national income), (4) The Drive to Maturity, and (5) The Age of High Mass Consumption."
  },
  {
    id: 77,
    test_id: 3,
    question: "The 'Gender Inequality Index' (GII) developed by UNDP measures gender disparity across which three critical dimensions?",
    options: [
      "Reproductive Health (Maternal Mortality and Adolescent Birth Rate), Empowerment (Parliamentary seats and secondary education), and Labor Market Participation",
      "Calorie consumption, Marriage age, and Gold ownership",
      "Life expectancy alone",
      "Female literacy and dowry payments"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Gender & Inequality Metrics → UNDP Gender Inequality Index (GII)",
    explanation: "The GII exposes inequalities in achievement between women and men across: (1) Reproductive health (Maternal Mortality Ratio and Adolescent Birth Rate), (2) Empowerment (share of parliamentary seats and attainment of secondary/higher education), and (3) Economic status (Labor Force Participation Rate)."
  },
  {
    id: 78,
    test_id: 3,
    question: "According to Gunnar Myrdal's theory of Circular and Cumulative Causation (1957), regional inequalities widen over time because:",
    options: [
      "Adverse 'Backwash Effects' (drain of skilled capital and labor from poor periphery to rich center) overpower beneficial 'Spread Effects'",
      "Poor regions choose not to invest in infrastructure",
      "Free market forces eliminate all spatial differences automatically",
      "Tariffs prevent internal domestic trade"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Spatial Inequality → Gunnar Myrdal's Cumulative Causation (1957)",
    explanation: "Gunnar Myrdal (1974 Nobel laureate) demonstrated that market forces do not restore regional balance. Growth centers attract capital, skilled enterprise, and young labor away from lagging regions (Backwash Effects). Unless state policy strengthens positive Spread Effects (demand for agricultural goods and tech diffusion), regional disparities widen cumulatively."
  },
  {
    id: 79,
    test_id: 3,
    question: "The 'Multidimensional Poverty Index' (MPI) developed by OPHI and UNDP considers a household to be multidimensionally poor if its deprivation score equals or exceeds:",
    options: [
      "33.33% (One-third of the weighted indicators across Health, Education, and Living Standards)",
      "10.0%",
      "50.0%",
      "75.0%"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Poverty Measurement → Alkire-Foster Multidimensional Poverty Index (MPI)",
    explanation: "Developed by Sabina Alkire and James Foster (2010), the Global MPI evaluates 10 indicators equally weighted across Health (1/3), Education (1/3), and Standard of Living (1/3). A person is identified as multidimensionally poor if their deprivation score c >= 33.33% (severe poverty if c >= 50%)."
  },
  {
    id: 80,
    test_id: 3,
    question: "The 'Dependency Theory' of underdevelopment associated with Raúl Prebisch, Andre Gunder Frank, and Samir Amin posits that:",
    options: [
      "Underdevelopment in the global 'Periphery' is actively generated by the historical exploitation and structural surplus extraction by the capitalist 'Core' nations",
      "Third world nations simply started industrialization too late",
      "Developing nations lack entrepreneurial spirit",
      "International trade is equally advantageous to all participating countries"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Structuralist Theories → Dependency School (Center-Periphery Model)",
    explanation: "Dependency theorists argue that low-income nations (periphery) are integrated into the world capitalist system as providers of cheap primary commodities and markets for manufactured goods from wealthy nations (core), leading to unequal exchange and the 'development of underdevelopment'."
  },

  // --- UNIT 9: INDIAN ECONOMY (Q81 - Q90) ---
  {
    id: 81,
    test_id: 3,
    question: "Under Article 280 of the Indian Constitution, the Finance Commission is appointed by the President of India every five years primarily to make recommendations on:",
    options: [
      "The vertical sharing of net divisible tax proceeds between the Union and States, and horizontal distribution among States (along with grants-in-aid)",
      "Approving the annual central budget expenditure",
      "Fixing the repo rate and cash reserve ratio",
      "Setting corporate income tax slabs"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Constitutional Fiscal Provisions → Article 280 Finance Commission of India",
    explanation: "Article 280 mandates the Finance Commission to recommend: (1) Distribution of net tax proceeds between Union and States (vertical devolution), (2) Allocation of respective shares among the States (horizontal devolution), and (3) Principles governing grants-in-aid of revenues to States under Article 275."
  },
  {
    id: 82,
    test_id: 3,
    question: "The 16th Finance Commission of India constituted in December 2023 is chaired by:",
    options: [
      "Dr. Arvind Panagariya",
      "N.K. Singh",
      "Dr. Y.V. Reddy",
      "Dr. C. Rangarajan"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Indian Fiscal Bodies → 16th Finance Commission of India",
    explanation: "The Government of India constituted the 16th Finance Commission with Dr. Arvind Panagariya (former Vice-Chairman of NITI Aayog and Columbia University Professor) as its Chairman. The Commission will make recommendations for the 5-year award period commencing April 1, 2026."
  },
  {
    id: 83,
    test_id: 3,
    question: "In the Goods and Services Tax (GST) Council of India (Article 279A), decisions are taken by a majority of not less than:",
    options: [
      "Three-fourths (75%) of the weighted votes of members present and voting (Center holds 1/3rd weight, all States combined hold 2/3rd weight)",
      "Simple majority (51%)",
      "Two-thirds (66.67%) with equal weight for each State",
      "Unanimous consent of all 28 States"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Indian Taxation → GST Council Voting Structure (Article 279A)",
    explanation: "Under Article 279A(9), every decision of the GST Council requires at least a 75% (3/4th) weighted majority of members present and voting. The Central Government has a vote weight of one-third (33.33%) and all State Governments combined have a weight of two-thirds (66.67%)."
  },
  {
    id: 84,
    test_id: 3,
    question: "The 'Insolvency and Bankruptcy Code' (IBC) enacted in India in 2016 introduced a creditor-in-control Corporate Insolvency Resolution Process (CIRP) with a statutory time limit of:",
    options: [
      "180 days (extendable by a one-time extension of 90 days up to a maximum of 330 days including legal litigation)",
      "30 days",
      "5 years",
      "1000 days"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Financial & Corporate Reforms → Insolvency and Bankruptcy Code 2016",
    explanation: "The IBC 2016 reformed corporate resolution in India from 'debtor-in-possession' to 'creditor-in-control'. The resolution process must be completed within 180 days, with a 90-day extension permitted, capped at an overall mandatory limit of 330 days including judicial proceedings."
  },
  {
    id: 85,
    test_id: 3,
    question: "According to the Tendulkar Committee Methodology (2009) for poverty estimation in India, the poverty line was defined based on:",
    options: [
      "Monthly Per Capita Consumption Expenditure (MPCE) using Mixed Reference Period (₹447 rural and ₹579 urban per month at 2004-05 prices), moving beyond purely calorie-norm metrics",
      "Gross household asset value of ₹5,00,000",
      "Daily calorie intake of 2400 kcal in rural and 2100 kcal in urban areas exclusively",
      "Income tax threshold of ₹2,50,000"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Poverty Estimation Committees in India → Suresh Tendulkar Committee (2009)",
    explanation: "The Suresh Tendulkar Committee moved away from the 1979 Lakdawala calorie-based anchoring to a broader basket encompassing private expenditure on food, health, education, and footwear. It derived an all-India poverty headcount ratio of 21.9% for 2011-12."
  },
  {
    id: 86,
    test_id: 3,
    question: "In India's Balance of Payments accounts, Foreign Direct Investment (FDI) and External Commercial Borrowings (ECB) are recorded under the:",
    options: [
      "Capital Account",
      "Current Account (Merchandise Trade)",
      "Invisibles Account",
      "Foreign Exchange Reserves account alone"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Balance of Payments Accounting → Current Account vs Capital Account",
    explanation: "The Balance of Payments Capital Account records cross-border transactions involving financial assets, liabilities, and investments. FDI, Foreign Portfolio Investment (FPI), External Commercial Borrowings (ECBs), banking capital, and NRI deposits are all components of India's Capital Account."
  },
  {
    id: 87,
    test_id: 3,
    question: "The 'Periodic Labour Force Survey' (PLFS) in India, which replaced the quinquennial NSSO employment surveys, is conducted by:",
    options: [
      "National Statistical Office (NSO), Ministry of Statistics and Programme Implementation (MoSPI)",
      "NITI Aayog",
      "Ministry of Labour and Employment",
      "Reserve Bank of India"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Labor Market Data in India → NSO Periodic Labour Force Survey (PLFS)",
    explanation: "Launched in April 2017 by the National Statistical Office (NSO) under MoSPI, the PLFS generates quarterly estimates of urban labor force indicators using Current Weekly Status (CWS) and annual estimates for both rural and urban areas using Usual Status (ps+ss) approach."
  },
  {
    id: 88,
    test_id: 3,
    question: "The Mahalanobis Two-Sector Growth Model that laid the foundation of India's Second Five-Year Plan (1956-61) emphasized allocating heavy investment into:",
    options: [
      "Capital Goods / Heavy Machinery Sector (Sector K) to accelerate long-run growth of consumer goods (Sector C)",
      "Export-oriented software services",
      "Luxury consumer goods manufacturing",
      "Import of agricultural cereals"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Five Year Plans → P.C. Mahalanobis Heavy Industrialization Model",
    explanation: "Prof. P.C. Mahalanobis formulated a two-sector (and later four-sector) structural model showing that allocating a higher investment fraction (λ_k) to basic capital-goods industries raises the long-term compounding growth rate of national output and consumer goods production."
  },
  {
    id: 89,
    test_id: 3,
    question: "The Fiscal Responsibility and Budget Management (FRBM) Act 2003 (as amended by the N.K. Singh FRBM Review Committee 2017) recommended targeting a debt-to-GDP ratio for India of:",
    options: [
      "60% for General Government (40% for Central Government and 20% for State Governments)",
      "90% of GDP",
      "20% for Central Government and 0% for States",
      "100% of GDP"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Fiscal Consolidation → N.K. Singh FRBM Committee Targets",
    explanation: "The N.K. Singh Committee recommended anchoring fiscal policy on general government debt rather than just annual deficits: total debt-to-GDP ratio should be brought down to 60% (40% for the Centre and 20% for all States combined), alongside a 3.0% central fiscal deficit target."
  },
  {
    id: 90,
    test_id: 3,
    question: "Under the Priority Sector Lending (PSL) guidelines issued by the Reserve Bank of India, domestic scheduled commercial banks are mandated to allocate what percentage of their Adjusted Net Bank Credit (ANBC) to priority sectors?",
    options: [
      "40%",
      "25%",
      "18%",
      "50%"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Banking Directives → RBI Priority Sector Lending (PSL) Quotas",
    explanation: "Domestic scheduled commercial banks and foreign banks with 20+ branches must allocate 40% of ANBC (or Credit Equivalent of Off-Balance Sheet Exposure) to priority sectors, with specific sub-targets for Agriculture (18%), Micro Enterprises (7.5%), and Weaker Sections (12%)."
  },

  // --- UNIT 10: ENVIRONMENTAL ECONOMICS (Q91 - Q100) ---
  {
    id: 91,
    test_id: 3,
    question: "The 'Environmental Kuznets Curve' (EKC) hypothesis posits an inverted-U shaped relationship between:",
    options: [
      "Environmental degradation (pollution per capita) and per capita income (GDP per capita)",
      "Income inequality and tax rates",
      "Inflation and unemployment",
      "Resource extraction and population growth rate"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Environmental Economics Foundations → Environmental Kuznets Curve (EKC)",
    explanation: "Gene Grossman and Alan Krueger (1991) hypothesized that in early stages of industrialization, pollution rises with economic growth (Scale Effect). As income rises beyond a threshold, increased demand for environmental quality, cleaner technologies (Technique Effect), and services shift (Composition Effect) cause environmental degradation to decline."
  },
  {
    id: 92,
    test_id: 3,
    question: "The 'Contingent Valuation Method' (CVM) in non-market environmental valuation is a stated-preference technique that uses surveys to elicit individuals':",
    options: [
      "Willingness to Pay (WTP) to preserve an environmental amenity or Willingness to Accept (WTA) compensation for its loss",
      "Actual market expenditures on bottled water",
      "Property purchase prices in clean neighborhoods",
      "Travel expenses to visit national parks"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Environmental Valuation Methods → Contingent Valuation Method (CVM)",
    explanation: "CVM is a direct stated-preference method that creates a hypothetical market through structured questionnaires to estimate non-use values (existence value, bequest value) by measuring respondents' Willingness to Pay (WTP) for environmental improvements or Willingness to Accept (WTA) for degradation."
  },
  {
    id: 93,
    test_id: 3,
    question: "The 'Hotelling's Rule' for the optimal depletion of a non-renewable natural resource (Harold Hotelling, 1931) states that:",
    options: [
      "The net price (royalty / resource rent: P - MC) of the exhaustible resource must grow at a rate equal to the market discount rate (interest rate r)",
      "The resource price must decline by 5% every year",
      "Resource extraction must remain constant over infinite time",
      "Marginal cost of extraction is zero forever"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Non-Renewable Resource Economics → Harold Hotelling's Rule (1931)",
    explanation: "Harold Hotelling (1931) proved that an asset owner is indifferent between extracting the resource today and leaving it in the ground if and only if the capital gain from holding the resource equals the market interest rate: (P_{t+1} - MC) = (P_t - MC)*(1 + r), meaning resource rent rises at rate r."
  },
  {
    id: 94,
    test_id: 3,
    question: "According to Martin Weitzman's 'Prices vs. Quantities' theorem (1974), under uncertainty about marginal abatement costs:",
    options: [
      "Price instruments (emission taxes) are preferred if the Marginal Damage curve is flatter than the Marginal Abatement Cost curve; Quantity instruments (tradable permits) are preferred if Marginal Damage is steeper",
      "Taxes are always superior to permits under all circumstances",
      "Tradable permits eliminate all abatement uncertainty",
      "Command and control regulation is mathematically identical to taxes"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Hard",
    concept: "Instrument Choice Under Uncertainty → Martin Weitzman (1974)",
    explanation: "Martin Weitzman proved that when cost uncertainty exists: (1) If the marginal benefit/damage curve is relatively flat (e.g. stock pollutants like CO2), an emission tax prevents catastrophic cost overruns, (2) If marginal damage is very steep (e.g. threshold toxicity), cap-and-trade permits are superior to prevent environmental disaster."
  },
  {
    id: 95,
    test_id: 3,
    question: "The 'Travel Cost Method' (TCM) used to value recreation sites (national parks, lakes) is classified as a:",
    options: [
      "Revealed Preference method that infers environmental value from actual expenses and travel time incurred by visitors",
      "Stated preference method using telephone surveys",
      "Replacement cost engineering approach",
      "Hedonic property pricing method"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Non-Market Valuation → Travel Cost Method (Harold Hotelling / Marion Clawson)",
    explanation: "Originally proposed by Harold Hotelling (1947) and developed by Marion Clawson, TCM observes actual consumer behavior: travel expenditures (transport, lodging, time cost) serve as implicit prices paid to visit a non-priced recreational site, allowing derivation of a Marshallian demand curve."
  },
  {
    id: 96,
    test_id: 3,
    question: "In the context of climate negotiations, the Kyoto Protocol (1997) introduced which market-based flexibility mechanisms?",
    options: [
      "International Emissions Trading (IET), Clean Development Mechanism (CDM), and Joint Implementation (JI)",
      "Global Carbon Tax and Border Adjustment Tariffs",
      "Compulsory technology nationalization",
      "Uniform global trade embargoes on coal"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Global Climate Agreements → Kyoto Protocol Flexibility Mechanisms",
    explanation: "The Kyoto Protocol established three market mechanisms to assist Annex I industrialized countries in meeting emissions targets at lowest cost: (1) Clean Development Mechanism (CDM) for projects in developing nations, (2) Joint Implementation (JI) between Annex I parties, and (3) International Emissions Trading."
  },
  {
    id: 97,
    test_id: 3,
    question: "The 'Hartwick's Rule' for weak sustainability (John Hartwick, 1977) demonstrates that constant per-capita consumption can be maintained indefinitely across generations if:",
    options: [
      "All economic rents derived from the extraction of exhaustible natural resources are fully reinvested into reproducible man-made capital",
      "Population growth rate is negative",
      "All fossil fuels are banned immediately",
      "Interest rates are kept equal to zero"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Sustainable Development Theory → John Hartwick's Rule (1977)",
    explanation: "Extending the Solow growth model to non-renewable resources, John Hartwick proved that under Weak Sustainability (where man-made and natural capital are substitutes), investing all scarcity rents from resource depletion into physical/human capital keeps the total capital stock non-declining (Constant Capital Rule)."
  },
  {
    id: 98,
    test_id: 3,
    question: "The 'Safe Minimum Standard' (SMS) approach in conservation economics (S.V. Ciriacy-Wantrup and Richard Bishop) recommends that:",
    options: [
      "Critical natural habitats and endangered species should be preserved unless the social costs of doing so are unacceptably high",
      "Cost-benefit analysis must dictate every extinction decision",
      "Zero resource extraction should occur anywhere",
      "Only commercially valuable species receive legal protection"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Biodiversity & Conservation → Safe Minimum Standard (SMS)",
    explanation: "Because species extinction and ecosystem collapse are irreversible and subject to profound uncertainty, the SMS approach adopts a minimax regret strategy: establish a baseline safeguard for critical natural capital, unless the opportunity cost to society is intolerably large."
  },
  {
    id: 99,
    test_id: 3,
    question: "In the United Nations Sustainable Development Goals (SDGs) framework (2015-2030), SDG 13 specifically focuses on:",
    options: [
      "Climate Action (Take urgent action to combat climate change and its impacts)",
      "Zero Hunger",
      "Quality Education",
      "Affordable and Clean Energy"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Sustainable Development Goals → UN Agenda 2030 (SDG 13)",
    explanation: "Adopted by all UN Member States in 2015, the 2030 Agenda includes 17 SDGs. SDG 13 is dedicated to 'Climate Action', SDG 7 to 'Affordable and Clean Energy', SDG 14 to 'Life Below Water', and SDG 15 to 'Life on Land'."
  },
  {
    id: 100,
    test_id: 3,
    question: "The 'Porter Hypothesis' (Michael Porter, 1995) argues that well-designed, stringent environmental regulations can:",
    options: [
      "Trigger innovation and efficiency gains that partially or fully offset compliance costs, enhancing industrial competitiveness",
      "Permanently destroy manufacturing profitability",
      "Lead to zero trade with foreign nations",
      "Cause inevitable de-industrialization"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Environmental Policy & Competitiveness → The Porter Hypothesis (1995)",
    explanation: "Michael Porter and Claas van der Linde challenged the traditional view that environmental protection harms economic growth. They showed that flexible, performance-based regulations pressure firms to innovate (e.g. resource efficiency, waste reduction), leading to 'innovation offsets' that boost global competitiveness."
  }
];
