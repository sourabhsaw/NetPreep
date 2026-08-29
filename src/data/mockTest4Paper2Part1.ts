import { Question } from '../types';

export const mockTest4Paper2Part1Questions: Question[] = [
  // --- UNIT 1: MICROECONOMICS (Q51 - Q60) ---
  {
    id: 51,
    test_id: 4,
    question: "According to Arrow's Impossibility Theorem (1951), which condition CANNOT be satisfied simultaneously alongside Non-Dictatorship, Pareto Efficiency, and Unrestricted Domain for any social welfare function?",
    options: [
      "Independence of Irrelevant Alternatives (IIA)",
      "Euler's Constant Returns",
      "Kaldor-Hicks Compensation",
      "Scitovsky Double Reversal"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Social Choice Theory → Arrow's Impossibility Theorem",
    explanation: "Kenneth Arrow proved that no democratic voting system can aggregate individual preference orderings into a consistent social ordering without violating at least one of four axioms: Unrestricted Domain, Non-dictatorship, Weak Pareto principle, and Independence of Irrelevant Alternatives."
  },
  {
    id: 52,
    test_id: 4,
    question: "Under the Constant Elasticity of Substitution (CES) production function Q = A * [α*K^(-ρ) + (1-α)*L^(-ρ)]^(-1/ρ), the elasticity of substitution (σ) is given by:",
    options: [
      "σ = 1 / (1 + ρ)",
      "σ = 1 + ρ",
      "σ = ρ / (1 + ρ)",
      "σ = 1 - ρ"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Production Theory → CES Elasticity of Substitution",
    explanation: "In the CES function (Arrow, Chenery, Minhas, Solow 1961), substitution parameter ρ relates to elasticity of substitution σ via σ = 1 / (1 + ρ)."
  },
  {
    id: 53,
    test_id: 4,
    question: "In game theory, a Nash Equilibrium is defined as a state in which:",
    options: [
      "No player can improve their payoff by unilaterally changing their strategy given the strategies of others",
      "Every player achieves their first-best cooperative payoff",
      "Social welfare is guaranteed to be Pareto optimal",
      "All players play minimax strategies"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Game Theory → Nash Equilibrium Definition",
    explanation: "A Nash equilibrium is a strategy profile where no agent has a profitable unilateral deviation, given the strategy choices of all other participants."
  },
  {
    id: 54,
    test_id: 4,
    question: "Paul Sweezy's Kinked Demand Curve model of oligopoly explains price rigidity by assuming that rival firms will:",
    options: [
      "Follow price cuts but ignore price increases",
      "Follow price increases but ignore price cuts",
      "Form an explicit joint profit-maximizing cartel",
      "Equate Marginal Cost to Average Revenue"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Oligopoly Theory → Sweezy's Kinked Demand Curve",
    explanation: "Sweezy assumed asymmetrical reactions: if a firm raises prices, rivals do not follow (elastic portion); if a firm lowers prices, rivals match the cut (inelastic portion), creating a vertical discontinuity in the MR curve."
  },
  {
    id: 55,
    test_id: 4,
    question: "Using Roy's Identity, the Marshallian demand function x_i(P, M) is derived from indirect utility function V(P, M) as:",
    options: [
      "x_i = - [∂V/∂P_i] / [∂V/∂M]",
      "x_i = [∂V/∂P_i] * [∂V/∂M]",
      "x_i = [∂V/∂M] / [∂V/∂P_i]",
      "x_i = ∂V/∂P_i"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Consumer Duality → Roy's Identity",
    explanation: "Roy's Identity links indirect utility to Marshallian demand: x_i(P, M) = - (∂V/∂P_i) / (∂V/∂M)."
  },
  {
    id: 56,
    test_id: 4,
    question: "A risk-averse individual's utility function of wealth U(W) is characterized by:",
    options: [
      "U'(W) > 0 and U''(W) < 0 (Diminishing marginal utility of wealth)",
      "U''(W) > 0 (Convex utility)",
      "U''(W) = 0 (Linear utility)",
      "U(W) = W^2"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Choice Under Uncertainty → Risk Aversion Concavity",
    explanation: "Risk aversion requires strict concavity of the utility function (U''(W) < 0), meaning expected utility of a gamble is strictly less than the utility of its expected value."
  },
  {
    id: 57,
    test_id: 4,
    question: "The Second Fundamental Theorem of Welfare Economics asserts that:",
    options: [
      "Any Pareto efficient allocation can be supported as a competitive market equilibrium through appropriate lump-sum wealth transfers, provided preferences are convex",
      "Competitive equilibrium is always unique and stable",
      "Monopoly is Pareto superior to perfect competition",
      "Externalities cannot be solved through property rights"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "General Equilibrium → Second Fundamental Welfare Theorem",
    explanation: "The Second Fundamental Theorem demonstrates that any Pareto efficient allocation can be attained via competitive decentralized pricing after suitable lump-sum initial endowments redistribution under convex preferences and production sets."
  },
  {
    id: 58,
    test_id: 4,
    question: "In moral hazard models with asymmetric information, which mechanism is primarily used by principals to align the agent's incentives?",
    options: [
      "Incentive-compatible performance-contingent contracts",
      "Signaling through academic diplomas",
      "Screening through self-selecting menus",
      "Third-degree price discrimination"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Information Economics → Moral Hazard & Principal-Agent Contracts",
    explanation: "Moral hazard (post-contractual hidden action) is mitigated by incentive contracts (e.g., bonuses, deductibles, equity stakes) that make the agent bear a portion of the risk to align objectives."
  },
  {
    id: 59,
    test_id: 4,
    question: "If the production function is homogeneous of degree 1 (constant returns to scale), Euler's Product Exhaustion Theorem states that total output Q equals:",
    options: [
      "L * (∂Q/∂L) + K * (∂Q/∂K)",
      "L * (∂Q/∂K) + K * (∂Q/∂L)",
      "(∂Q/∂L) + (∂Q/∂K)",
      "L * K * (∂Q/∂L)"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Production Theory → Euler's Product Exhaustion Theorem",
    explanation: "Euler's Theorem for homogeneous functions of degree k states L*(∂Q/∂L) + K*(∂Q/∂K) = k*Q. When k=1 (CRTS), total product is exhausted by paying factors their marginal physical products."
  },
  {
    id: 60,
    test_id: 4,
    question: "Under first-degree (perfect) price discrimination, consumer surplus is:",
    options: [
      "Completely captured by the monopolist as producer surplus (CS = 0)",
      "Maximized for all consumers",
      "Equal to deadweight loss",
      "Distributed equally between buyers and sellers"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Market Structures → First-Degree Price Discrimination",
    explanation: "In first-degree price discrimination, the monopolist charges each consumer their exact reservation price, capturing all consumer surplus (CS = 0) and eliminating deadweight loss."
  },

  // --- UNIT 2: MACROECONOMICS (Q61 - Q70) ---
  {
    id: 61,
    test_id: 4,
    question: "In the Mundell-Fleming model under PERFECT capital mobility and FLOATING exchange rates, an expansionary fiscal policy results in:",
    options: [
      "Zero change in equilibrium output (Complete crowding-out via exchange rate appreciation)",
      "Maximum multiplier expansion in output",
      "A permanent depreciation of the domestic currency",
      "A massive rise in domestic interest rates above world rates"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Open Economy Macro → Mundell-Fleming Floating Exchange Rates",
    explanation: "Under floating rates and perfect capital mobility, fiscal expansion shifts IS right, inducing capital inflows that appreciate the currency, reducing net exports (NX) until IS shifts back to initial output Y."
  },
  {
    id: 62,
    test_id: 4,
    question: "The Permanent Income Hypothesis (Milton Friedman, 1957) states that the Marginal Propensity to Consume (MPC) out of transitory income is:",
    options: [
      "Close to zero (consumers smooth consumption across life-cycle)",
      "Equal to 1.0",
      "Greater than the MPC out of permanent income",
      "Negative"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theories → Friedman's Permanent Income Hypothesis",
    explanation: "Friedman posited that consumption depends on permanent income; transitory income gains are saved rather than spent, making MPC out of transitory income near zero."
  },
  {
    id: 63,
    test_id: 4,
    question: "The Taylor Rule specifies that the central bank should adjust the nominal policy interest rate in response to:",
    options: [
      "The deviations of inflation from target and output from potential (Output Gap)",
      "Only the unemployment rate",
      "Foreign exchange reserves alone",
      "Fiscal budget deficit as a percentage of GDP"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Monetary Policy Rules → John Taylor's Rule (1993)",
    explanation: "The Taylor Rule (1993) sets nominal rate i = r* + π + 0.5(π - π*) + 0.5(y - y*), responding systematically to inflation gap and output gap."
  },
  {
    id: 64,
    test_id: 4,
    question: "According to the Lucas Islands Model and Rational Expectations Hypothesis (Robert Lucas, 1972), anticipated monetary policy changes:",
    options: [
      "Have zero effect on real output and employment (Policy Ineffectiveness Proposition)",
      "Cause persistent long-term increases in real GDP",
      "Reduce the natural rate of unemployment",
      "Shift the Long-Run Aggregate Supply curve rightward"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "New Classical Macro → Lucas Policy Ineffectiveness Proposition",
    explanation: "Under rational expectations and market clearing, fully anticipated monetary expansions lead to immediate price and wage adjustments without altering real output or employment."
  },
  {
    id: 65,
    test_id: 4,
    question: "In the Solow-Swan Growth Model with technological progress (rate g) and population growth (rate n), the steady-state growth rate of TOTAL output (Y) is:",
    options: [
      "n + g",
      "g",
      "n",
      "s / v"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Growth Models → Solow-Swan Steady-State Growth Rates",
    explanation: "In Solow's model with labor-augmenting technological progress, per capita output (Y/L) grows at rate g, while total output (Y) grows at rate n + g."
  },
  {
    id: 66,
    test_id: 4,
    question: "The Baumol-Tobin model of transactions demand for money demonstrates that the interest elasticity of transaction cash balances is equal to:",
    options: [
      "-0.5",
      "0",
      "-1.0",
      "1.0"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Demand for Money → Baumol-Tobin Inventory Theoretic Approach",
    explanation: "Optimal average money holding M = sqrt(2*b*Y / (2*i)), implying an income elasticity of +0.5 and an interest elasticity of -0.5."
  },
  {
    id: 67,
    test_id: 4,
    question: "Real Business Cycle (RBC) theory (Kydland & Prescott) asserts that macroeconomic fluctuations are primarily driven by:",
    options: [
      "Exogenous real technology and productivity shocks altering production possibility frontiers",
      "Erratic shifts in central bank money supply",
      "Animal spirits and unpredictable consumer psychology",
      "Sticky nominal wages and menu costs"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "New Classical Macro → Real Business Cycle Theory",
    explanation: "RBC theory attributes aggregate fluctuations to real supply-side shocks (Total Factor Productivity changes) in competitive, frictionless markets."
  },
  {
    id: 68,
    test_id: 4,
    question: "The 'Golden Rule of Accumulation' in the Solow neoclassical growth model maximizes steady-state consumption per effective worker when:",
    options: [
      "Marginal Product of Capital equals the depreciation rate plus population and tech growth: MPK = δ + n + g",
      "Savings rate s = 1.0",
      "MPK = 0",
      "Real wage rate equals interest rate"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Growth Models → Golden Rule Capital Accumulation (Phelps)",
    explanation: "Edmund Phelps (1961) showed that steady-state consumption c* = f(k*) - (δ + n + g)k* is maximized where f'(k*) = MPK = δ + n + g."
  },
  {
    id: 69,
    test_id: 4,
    question: "The 'Liquidity Trap' describes a macroeconomic condition where:",
    options: [
      "Nominal interest rates are near zero and the LM curve becomes perfectly horizontal, rendering monetary policy completely ineffective",
      "The IS curve becomes vertical due to high interest sensitivity",
      "Commercial banks face extreme bank runs",
      "Government bonds yield infinite returns"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Keynesian Economics → Liquidity Trap & Zero Lower Bound",
    explanation: "In a Keynesian liquidity trap, interest rates are so low that the speculative demand for money is infinitely elastic; open market operations fail to lower rates further."
  },
  {
    id: 70,
    test_id: 4,
    question: "Ricardian Equivalence Proposition (Robert Barro, 1974) implies that financing government expenditure through debt issuance rather than current taxation:",
    options: [
      "Has no effect on aggregate demand because rational forward-looking households save for future tax liabilities",
      "Doubles current consumption spending",
      "Causes high hyperinflation immediately",
      "Lowers national savings permanently"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Fiscal Policy → Ricardian Equivalence Proposition (Barro)",
    explanation: "Barro demonstrated that debt-financed deficits simply shift tax timing; forward-looking consumers recognize future tax burdens and increase private savings, leaving aggregate demand unchanged."
  },

  // --- UNIT 3: STATISTICS & ECONOMETRICS (Q71 - Q80) ---
  {
    id: 71,
    test_id: 4,
    question: "In classical linear regression, if error terms possess unequal variance across observations (Var(u_i) = σ_i^2), the OLS estimators remain:",
    options: [
      "Unbiased and consistent, but are no longer BLUE (inefficient variances)",
      "Biased and inconsistent",
      "Equated to zero",
      "Normally distributed with minimum variance"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Econometric Violations → Heteroskedasticity Properties",
    explanation: "Under heteroskedasticity, OLS estimators remain unbiased (E(β_hat) = β) and consistent, but lose minimum variance efficiency and standard t/F tests become invalid."
  },
  {
    id: 72,
    test_id: 4,
    question: "The Durbin-Watson statistic (d) for testing first-order autocorrelation AR(1) in residuals has a value approximately equal to:",
    options: [
      "d ≈ 2 * (1 - ρ_hat)",
      "d ≈ 1 - 2*ρ_hat",
      "d ≈ 4 * ρ_hat",
      "d ≈ ρ_hat / 2"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Autocorrelation Detection → Durbin-Watson Statistic",
    explanation: "The Durbin-Watson statistic expands to d ≈ 2*(1 - ρ_hat). When ρ_hat = 0 (no autocorrelation), d ≈ 2. When ρ_hat = +1, d ≈ 0. When ρ_hat = -1, d ≈ 4."
  },
  {
    id: 73,
    test_id: 4,
    question: "To test for cointegration between two non-stationary I(1) time series variables (Y_t and X_t), the standard Engle-Granger two-step procedure tests:",
    options: [
      "Whether the OLS residuals from the static cointegrating regression are stationary I(0)",
      "Whether the correlation coefficient equals 1.0",
      "Whether the Durbin-Watson statistic equals 0",
      "Whether both variables have zero mean"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Time Series Econometrics → Engle-Granger Cointegration Test",
    explanation: "Engle and Granger (1987) proved that if a linear combination of I(1) variables produces stationary I(0) residuals, a genuine long-run equilibrium relationship exists without spurious regression."
  },
  {
    id: 74,
    test_id: 4,
    question: "The Gauss-Markov Theorem establishes that the Ordinary Least Squares (OLS) estimator is BLUE, which stands for:",
    options: [
      "Best Linear Unbiased Estimator (Minimum variance among all linear unbiased estimators)",
      "Basic Logarithmic Universal Estimator",
      "Bivariate Linear Uniform Equation",
      "Binary Linear Unrestricted Estimator"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Classical Econometric Assumptions → Gauss-Markov Theorem",
    explanation: "The Gauss-Markov Theorem proves that when classical OLS assumptions hold (linearity, zero mean errors, homoskedasticity, no autocorrelation), OLS is Best Linear Unbiased Estimator."
  },
  {
    id: 75,
    test_id: 4,
    question: "When an explanatory variable X is endogenous (correlated with error term u, Cov(X, u) ≠ 0), a valid Instrumental Variable Z must satisfy:",
    options: [
      "Instrument Relevance (Cov(Z, X) ≠ 0) and Instrument Exogeneity (Cov(Z, u) = 0 / Exclusion Restriction)",
      "Cov(Z, X) = 0 and Cov(Z, u) = 1",
      "Z must equal the dependent variable Y",
      "Z must have infinite variance"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Endogeneity & 2SLS → Valid Instrumental Variable Properties",
    explanation: "A valid instrument Z must be strongly correlated with the endogenous regressor X (Relevance) and uncorrelated with structural error u (Exogeneity/Exclusion restriction)."
  },
  {
    id: 76,
    test_id: 4,
    question: "In the Order Condition for structural equation identification in simultaneous equations, an equation is identified if:",
    options: [
      "K - k ≥ m - 1 (Number of excluded predetermined variables ≥ Number of included endogenous variables minus 1)",
      "K = k",
      "m = M",
      "K - k < m - 1"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Hard",
    concept: "Simultaneous Equation Models → Order Condition of Identification",
    explanation: "The order condition (necessary for identification) states K - k ≥ m - 1, where K = total predetermined variables in model, k = predetermined in equation, m = endogenous in equation."
  },
  {
    id: 77,
    test_id: 4,
    question: "The Variance Inflation Factor (VIF) is used to detect:",
    options: [
      "Multicollinearity among regressors (VIF > 10 indicates severe multicollinearity)",
      "Autoregressive conditional heteroskedasticity (ARCH)",
      "Model misspecification in binary Logit models",
      "Measurement errors in survey panels"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Multicollinearity Diagnostics → Variance Inflation Factor (VIF)",
    explanation: "VIF_j = 1 / (1 - R_j^2). A VIF greater than 10 indicates that more than 90% of the variance in explanatory variable X_j is explained by other regressors (severe multicollinearity)."
  },
  {
    id: 78,
    test_id: 4,
    question: "In qualitative response models, the Logit model assumes the cumulative distribution function of the error term follows a:",
    options: [
      "Standard Logistic distribution with CDF F(z) = 1 / (1 + e^(-z))",
      "Standard Normal distribution (Probit)",
      "Uniform rectangular distribution",
      "Poisson count distribution"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Binary Response Models → Logit vs Probit Formulations",
    explanation: "Logit models assume the latent error term follows a standard logistic distribution with sigmoid cumulative density, whereas Probit assumes a standard normal distribution."
  },
  {
    id: 79,
    test_id: 4,
    question: "The Augmented Dickey-Fuller (ADF) unit root test tests the null hypothesis H_0 that:",
    options: [
      "The time series contains a unit root (is non-stationary)",
      "The series is strictly stationary with deterministic trend",
      "The variance is constant over time",
      "The series has zero skewness"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Stationarity & Unit Root Tests → ADF Test Null Hypothesis",
    explanation: "The ADF test sets null hypothesis H0: γ = 0 (unit root / non-stationarity) against alternative H1: γ < 0 (stationary)."
  },
  {
    id: 80,
    test_id: 4,
    question: "The Hausman Specification Test in panel data analysis is used to decide between:",
    options: [
      "Fixed Effects Model vs Random Effects Model",
      "OLS vs Weighted Least Squares",
      "Autocorrelation vs Heteroskedasticity",
      "ARIMA vs VAR models"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Panel Data Econometrics → Hausman Test (1978)",
    explanation: "The Hausman test evaluates whether individual specific effects are correlated with regressors. If p < 0.05 (null rejected), the Random Effects model is inconsistent and Fixed Effects is preferred."
  },

  // --- UNIT 4: MATHEMATICAL ECONOMICS (Q81 - Q90) ---
  {
    id: 81,
    test_id: 4,
    question: "In Hawkins-Simon conditions for the viability of an Input-Output Leontief system (I - A), which requirements must strictly hold?",
    options: [
      "The determinant |I - A| > 0 and all principal diagonal elements (1 - a_ii) > 0",
      "All elements of matrix A must be negative",
      "The trace of matrix A must equal zero",
      "Determinant |I - A| must equal 0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Input-Output Analysis → Hawkins-Simon Viability Conditions",
    explanation: "Hawkins-Simon conditions guarantee non-negative gross output solutions for positive final demand: diagonal entries (1 - a_ii) > 0 and leading principal minors of (I - A) must be positive."
  },
  {
    id: 82,
    test_id: 4,
    question: "For a continuous function f(x, y), the Hessian matrix H is negative definite if and only if:",
    options: [
      "The first principal minor |H_1| = f_xx < 0 and the second principal minor |H_2| = f_xx*f_yy - (f_xy)^2 > 0",
      "f_xx > 0 and |H_2| > 0",
      "|H_2| < 0 and f_xx < 0",
      "Trace of H is positive"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Multivariate Optimization → Second-Order Conditions (Hessian Matrix)",
    explanation: "For local maximum, the Hessian matrix must be negative definite: principal minors must alternate signs starting with negative (|H1| < 0, |H2| > 0)."
  },
  {
    id: 83,
    test_id: 4,
    question: "In Linear Programming duality theory, if the primal problem is a Maximization problem with '≤' constraints, the dual problem is a:",
    options: [
      "Minimization problem with '≥' constraints",
      "Maximization problem with '≥' constraints",
      "Minimization problem with equality constraints only",
      "Unconstrained quadratic problem"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Linear Programming → Primal-Dual Relationships",
    explanation: "The symmetric dual of Max Z = c'x subject to Ax ≤ b, x ≥ 0 is Min W = b'y subject to A'y ≥ c, y ≥ 0."
  },
  {
    id: 84,
    test_id: 4,
    question: "If a consumer's utility function is U(x, y) = x^0.4 * y^0.6 with budget constraint P_x*x + P_y*y = M, the optimal expenditure on good x is:",
    options: [
      "0.4 * M",
      "0.6 * M",
      "0.5 * M",
      "M / (P_x + P_y)"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Cobb-Douglas Utility Optimization → Expenditure Shares",
    explanation: "For Cobb-Douglas utility U = x^α * y^β, the expenditure share on good x is α / (α + β) = 0.4 / (0.4 + 0.6) = 0.4. Expenditure P_x*x = 0.4*M."
  },
  {
    id: 85,
    test_id: 4,
    question: "In Kuhn-Tucker conditions for non-linear optimization with inequality constraints g(x) ≤ b, the Complementary Slackness condition requires that:",
    options: [
      "λ * [g(x) - b] = 0, with λ ≥ 0 and [g(x) - b] ≤ 0",
      "λ = g(x)",
      "λ + g(x) = 0",
      "λ * b = 1"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Hard",
    concept: "Non-Linear Programming → Kuhn-Tucker Conditions",
    explanation: "Complementary slackness dictates that either the constraint is strictly binding (g(x) = b and multiplier λ ≥ 0) or slack (g(x) < b and multiplier λ = 0), ensuring λ*[g(x) - b] = 0."
  },
  {
    id: 86,
    test_id: 4,
    question: "The determinant of a 2x2 matrix A = [[3, 2], [1, 4]] is:",
    options: [
      "10",
      "14",
      "12",
      "8"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Matrix Algebra → Determinant Computation",
    explanation: "Determinant |A| = (3 * 4) - (2 * 1) = 12 - 2 = 10."
  },
  {
    id: 87,
    test_id: 4,
    question: "The integral of f(x) = 3x^2 + 4x - 5 with respect to x is:",
    options: [
      "x^3 + 2x^2 - 5x + C",
      "6x + 4 + C",
      "3x^3 + 4x^2 - 5x + C",
      "x^3 + 4x^2 - 5x + C"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Integral Calculus → Basic Indefinite Integration",
    explanation: "∫(3x^2 + 4x - 5)dx = 3*(x^3/3) + 4*(x^2/2) - 5x + C = x^3 + 2x^2 - 5x + C."
  },
  {
    id: 88,
    test_id: 4,
    question: "In a continuous-time differential equation dy/dt + a*y = b (where a > 0), the time path y(t) is:",
    options: [
      "Dynamically stable, converging monotonically to intertemporal equilibrium y* = b/a as t → ∞",
      "Divergent and explosive",
      "Oscillatory with constant amplitude",
      "Zero at all time horizons"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Dynamic Economic Models → First-Order Differential Equations",
    explanation: "General solution is y(t) = (y(0) - b/a)*e^(-a*t) + b/a. When a > 0, e^(-a*t) → 0 as t → ∞, so y(t) converges stably to equilibrium b/a."
  },
  {
    id: 89,
    test_id: 4,
    question: "The eigenvalues (characteristic roots) of matrix A = [[2, 0], [0, 5]] are:",
    options: [
      "λ_1 = 2, λ_2 = 5",
      "λ_1 = 7, λ_2 = 10",
      "λ_1 = 3, λ_2 = -3",
      "λ_1 = 1, λ_2 = 0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Matrix Algebra → Eigenvalues of Diagonal Matrices",
    explanation: "For any diagonal matrix, the eigenvalues are simply the diagonal elements themselves: λ1 = 2 and λ2 = 5."
  },
  {
    id: 90,
    test_id: 4,
    question: "In consumer theory, the Slutsky equation decomposes the total price effect (∂x_i/∂p_j) into:",
    options: [
      "Substitution effect (∂x_i^h/∂p_j) MINUS Income effect (x_j * ∂x_i/∂M)",
      "Income effect PLUS Profit effect",
      "Only the substitution effect",
      "Output effect divided by cost share"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory → Slutsky Equation Decomposition",
    explanation: "The Slutsky equation: ∂x_i/∂p_j = ∂x_i^h/∂p_j - x_j*(∂x_i/∂M), splitting total price responsiveness into substitution along indifference curve and purchasing power income change."
  },

  // --- UNIT 5: INTERNATIONAL ECONOMICS (Q91 - Q100) ---
  {
    id: 91,
    test_id: 4,
    question: "The Rybczynski Theorem in the 2x2x2 Heckscher-Ohlin framework states that an increase in the endowment of one factor (e.g., Labor), at constant commodity prices, results in:",
    options: [
      "An absolute increase in the output of the labor-intensive good and an absolute reduction in the output of the capital-intensive good",
      "An equal percentage increase in both goods",
      "A reduction in real wages of labor",
      "An improvement in the terms of trade"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade Theorems → Rybczynski Theorem (1955)",
    explanation: "Rybczynski (1955) proved that factor growth at constant goods prices expands production of the commodity intensive in that factor more than proportionately and causes an absolute output decline in the other good."
  },
  {
    id: 92,
    test_id: 4,
    question: "The Stolper-Samuelson Theorem demonstrates that the imposition of an import tariff on a labor-intensive good will:",
    options: [
      "Unambiguously increase the real return (real wage) to labor, the factor used intensively in the protected sector",
      "Lower the nominal wage of domestic labor",
      "Harm all domestic factors equally",
      "Shift the terms of trade permanently against the imposing nation"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade Theorems → Stolper-Samuelson Theorem (1941)",
    explanation: "Stolper-Samuelson showed that raising the relative price of a good increases the real return to the factor used intensively in its production and lowers the real return to the other factor."
  },
  {
    id: 93,
    test_id: 4,
    question: "The Marshall-Lerner Condition states that currency devaluation/depreciation will improve the balance of trade if:",
    options: [
      "The sum of price elasticities of demand for exports and imports is greater than 1 (|e_x + e_m| > 1)",
      "|e_x + e_m| < 1",
      "|e_x + e_m| = 0",
      "Foreign income elasticity equals 1"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Balance of Payments → Marshall-Lerner Condition",
    explanation: "The Marshall-Lerner condition states that for a nominal exchange rate depreciation to improve the current account trade balance, |e_x + e_m| > 1 must hold."
  },
  {
    id: 94,
    test_id: 4,
    question: "The J-Curve effect in international economics illustrates that following currency devaluation:",
    options: [
      "The trade balance initially deteriorates in the short run before improving in the long run as quantities adjust",
      "Trade balance immediately jumps to a permanent surplus",
      "Tariff revenues decline monotonically",
      "Capital flows reverse instantaneously"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Balance of Payments → J-Curve Phenomenon",
    explanation: "In the short run, trade contracts are fixed in price and quantities are inelastic, worsening the trade balance; over time, volume adjustments dominate, generating a J-shaped recovery."
  },
  {
    id: 95,
    test_id: 4,
    question: "According to Jacob Viner's customs union theory, 'Trade Creation' represents:",
    options: [
      "A shift in consumption from a higher-cost domestic producer to a lower-cost partner country producer (Welfare improving)",
      "A shift from a low-cost non-member to a high-cost member country",
      "Imposition of anti-dumping tariffs",
      "Voluntary export restraints"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Customs Union Theory → Trade Creation vs Trade Diversion (Viner)",
    explanation: "Trade creation replaces inefficient domestic production with imports from a more efficient union partner, generating production and consumption efficiency gains."
  },
  {
    id: 96,
    test_id: 4,
    question: "The 'Leontief Paradox' (Wassily Leontief, 1953) revealed the empirical finding that:",
    options: [
      "The United States (a capital-abundant nation) was exporting labor-intensive commodities and importing capital-intensive commodities",
      "Tariffs always lower domestic consumer prices",
      "Developing countries export only manufactured high-tech capital",
      "International trade volume is determined purely by transport costs"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade Tests → Leontief Paradox (1953)",
    explanation: "Using US input-output tables, Leontief found that US exports were more labor-intensive relative to its competitive imports, contradicting standard Heckscher-Ohlin predictions."
  },
  {
    id: 97,
    test_id: 4,
    question: "The Optimum Tariff rate for a large country capable of influencing world market prices is calculated as:",
    options: [
      "t* = 1 / e_f (where e_f is the price elasticity of foreign export supply)",
      "t* = e_f",
      "t* = 1 + e_f",
      "t* = 0"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Tariff Theory → Optimum Tariff for a Large Country",
    explanation: "A large nation can improve its terms of trade by setting optimum tariff t* = 1 / e_f, where e_f is the price elasticity of the foreign reciprocal offer/export supply curve."
  },
  {
    id: 98,
    test_id: 4,
    question: "Under the Balassa-Samuelson effect, why do countries with higher productivity growth in tradable sectors experience real exchange rate appreciation?",
    options: [
      "Wage increases in tradable sectors spill over to non-tradable sectors, driving up non-tradable service prices and the overall price level",
      "Tradable goods face higher transport costs",
      "Central banks artificially fix interest rates",
      "Non-tradable output is banned from domestic consumption"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Purchasing Power Parity → Balassa-Samuelson Effect",
    explanation: "Productivity gains in tradables raise wages economy-wide; since non-tradable productivity grows more slowly, their prices must rise, causing real exchange rate appreciation."
  },
  {
    id: 99,
    test_id: 4,
    question: "The Gravity Model of International Trade predicts that bilateral trade volume between two countries is:",
    options: [
      "Directly proportional to the product of their GDPs and inversely proportional to the geographical distance between them",
      "Inversely proportional to their GDPs",
      "Independent of distance",
      "Determined solely by their exchange rate peg"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade Models → Gravity Model of Trade (Tinbergen)",
    explanation: "Jan Tinbergen (1962) formulated Trade_ij = G * (GDP_i * GDP_j) / (Distance_ij)^θ, showing economic size attracts trade and geographic friction diminishes it."
  },
  {
    id: 100,
    test_id: 4,
    question: "In balance of payments accounting, Foreign Direct Investment (FDI) inflows are recorded in the:",
    options: [
      "Capital / Financial Account as a Credit entry (+)",
      "Current Account as a Debit entry (-)",
      "Merchandise Trade Account",
      "Unilateral Transfers Account"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "BOP Structure → Capital & Financial Account Entries",
    explanation: "FDI inflows involve foreign residents acquiring domestic real/financial assets (capital inflow), recorded as a credit (+) in the Financial/Capital account."
  }
];
