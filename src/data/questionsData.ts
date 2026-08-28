import { Question } from '../types';

export const mockTest01Questions: Question[] = [
  // 1. Micro Economics
  {
    id: 1,
    test_id: 1,
    question: "If the price of a commodity increases and its quantity demanded decreases, this represents:",
    options: [
      "Shift in demand curve",
      "Movement along demand curve",
      "Increase in demand",
      "Increase in supply"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Law of Demand → Movement along Demand Curve",
    explanation: "A change in the own price of a commodity causes a change in quantity demanded, which is represented graphically by a movement along the same demand curve. Shifts in the curve occur due to changes in non-price factors such as income, tastes, or prices of related goods."
  },
  {
    id: 2,
    test_id: 1,
    question: "For a Giffen good, which of the following conditions must strictly hold true?",
    options: [
      "Substitution effect is negative and larger than the positive income effect",
      "Income effect is negative and outweighs the negative substitution effect",
      "Income effect is positive and reinforces the substitution effect",
      "Price elasticity of demand is greater than one"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory → Giffen Goods & Slutsky Decomposition",
    explanation: "A Giffen good is a highly inferior good where the negative income effect of a price fall (which reduces consumption) is so powerful that it outweighs the negative substitution effect (which encourages consumption), resulting in an upward-sloping demand curve."
  },
  {
    id: 3,
    test_id: 1,
    question: "The condition for Pareto optimality in the allocation of inputs across two production processes (X and Y) is given by:",
    options: [
      "MRS_xy^A = MRS_xy^B",
      "MRTS_LK^X = MRTS_LK^Y",
      "MRT_xy = MRS_xy^A = MRS_xy^B",
      "P_x / P_y = MC_x / MC_y"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Welfare Economics → Pareto Efficiency in Production",
    explanation: "Efficiency in production requires that the Marginal Rate of Technical Substitution between labor and capital (MRTS_LK) must be equal across all commodities (MRTS_LK^X = MRTS_LK^Y). This corresponds to tangency of isoquants on the production Edgeworth box."
  },
  {
    id: 4,
    test_id: 1,
    question: "In Cournot's duopoly model with linear market demand P = a - b(Q) and identical zero marginal costs, total equilibrium industry output is equal to:",
    options: [
      "1/2 of competitive output",
      "2/3 of competitive output",
      "3/4 of competitive output",
      "Equal to monopoly output"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Oligopoly → Cournot Duopoly Equilibrium Output",
    explanation: "In an n-firm Cournot oligopoly, total industry output is given by Q = [n / (n + 1)] * Q_competitive. For a duopoly (n = 2), output is 2/3 of the perfectly competitive output (where competitive output is a/b)."
  },
  {
    id: 5,
    test_id: 1,
    question: "According to Arrow's Impossibility Theorem, which of the following is NOT one of the five conditions for a democratic social welfare function?",
    options: [
      "Non-dictatorship",
      "Pareto efficiency (Unanimity)",
      "Cardinal measurability of individual utilities",
      "Independence of irrelevant alternatives"
    ],
    correct_answer: 2,
    topic: "Micro Economics",
    difficulty: "Hard",
    concept: "Social Choice Theory → Arrow's Impossibility Theorem",
    explanation: "Kenneth Arrow formulated his theorem using ordinal preferences. The five conditions are: Unrestricted Domain, Non-dictatorship, Pareto criterion (Weak Pareto), Independence of Irrelevant Alternatives (IIA), and Transitivity. Cardinal measurability is not a requirement."
  },
  {
    id: 6,
    test_id: 1,
    question: "In the context of Risk and Uncertainty, an individual with a strictly concave Von Neumann-Morgenstern utility function is:",
    options: [
      "Risk neutral",
      "Risk loving",
      "Risk averse",
      "Risk seeking for small losses"
    ],
    correct_answer: 2,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Expected Utility Theory → Risk Aversion & Utility Curvature",
    explanation: "A strictly concave utility function implies diminishing marginal utility of wealth (U''(W) < 0), which mathematically characterizes a risk-averse individual who prefers expected wealth with certainty over a gamble with equal expected value."
  },
  {
    id: 7,
    test_id: 1,
    question: "A natural monopoly occurs primarily when:",
    options: [
      "Marginal cost is rising rapidly at all output levels",
      "Average cost declines continuously over the relevant range of market demand",
      "The government legally restricts entry of competitors through patents",
      "Firms engage in collusive price fixing"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Market Structures → Natural Monopoly & Subadditivity",
    explanation: "A natural monopoly arises due to significant economies of scale where Long Run Average Cost (LRAC) decreases over the entire range of output demanded, making production by a single firm more cost-effective (subadditive) than production by multiple firms."
  },

  // 2. Macro Economics
  {
    id: 8,
    test_id: 1,
    question: "Which of the following concepts is central to Keynesian macroeconomics?",
    options: [
      "Say's Law of Markets",
      "Effective Demand",
      "Quantity Theory of Money (Fisher equation)",
      "Comparative Advantage"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Keynesian Economics → Principle of Effective Demand",
    explanation: "Keynesian economics emphasizes the principle of effective demand (where Aggregate Demand equals Aggregate Supply), which determines the equilibrium level of national income and employment. In contrast, Say's Law asserts that supply creates its own demand."
  },
  {
    id: 9,
    test_id: 1,
    question: "In the IS-LM framework, an increase in government expenditure is completely ineffective in raising real output (100% crowding out) when:",
    options: [
      "The LM curve is completely horizontal (Liquidity Trap)",
      "The LM curve is completely vertical (Classical Case)",
      "The IS curve is vertical",
      "Investment is completely interest-elastic"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "IS-LM Model → Monetary & Fiscal Policy Effectiveness",
    explanation: "When the LM curve is vertical (money demand is completely interest-inelastic), fiscal expansion shifts the IS curve rightward, raising interest rates enough to crowd out an identical amount of private investment, leaving real income unchanged."
  },
  {
    id: 10,
    test_id: 1,
    question: "According to Milton Friedman's Permanent Income Hypothesis, the marginal propensity to consume out of transitory income is:",
    options: [
      "Equal to one",
      "Approximately equal to zero",
      "Equal to the average propensity to consume",
      "Greater than the marginal propensity to consume out of permanent income"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theories → Friedman's Permanent Income Hypothesis",
    explanation: "Friedman postulated that permanent consumption depends exclusively on permanent income. Unexpected or transitory windfalls (transitory income) are saved or absorbed in consumer durables, making MPC out of transitory income close to 0."
  },
  {
    id: 11,
    test_id: 1,
    question: "Under the Mundell-Fleming model with perfect capital mobility and flexible exchange rates, which policy is completely ineffective in altering output?",
    options: [
      "Monetary policy",
      "Fiscal policy",
      "Trade policy (import tariffs)",
      "Exchange rate devaluation"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Open Economy Macroeconomics → Mundell-Fleming Model",
    explanation: "Under flexible exchange rates and perfect capital mobility, fiscal expansion raises domestic interest rates slightly, inducing massive capital inflows. The resulting domestic currency appreciation worsens net exports, completely offsetting the initial expansion."
  },
  {
    id: 12,
    test_id: 1,
    question: "Tobin's q ratio for investment decisions is defined as the ratio of:",
    options: [
      "Marginal product of capital to cost of capital",
      "Market value of installed capital to its replacement cost",
      "Total profits to total physical capital stock",
      "Desired capital stock to actual capital stock"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Investment Theory → Tobin's q Ratio",
    explanation: "James Tobin defined 'q' as the ratio of the market valuation of capital assets (stock market value) to their current replacement cost. If q > 1, firms are incentivized to invest in new physical capital assets."
  },
  {
    id: 13,
    test_id: 1,
    question: "The Rational Expectations Hypothesis combined with flexible wages and prices implies that:",
    options: [
      "Systematic monetary policy can systematically stabilize output",
      "Anticipated policy changes have no real output effects (Policy Ineffectiveness Proposition)",
      "Unemployment is always strictly zero",
      "The Short-Run Phillips curve is permanently horizontal"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "New Classical Macroeconomics → Lucas Policy Ineffectiveness",
    explanation: "Sargent and Wallace's Policy Ineffectiveness Proposition showed that if economic agents form rational expectations based on all available information, predictable/systematic monetary policies cannot influence real variables like output or unemployment even in the short run."
  },

  // 3. Mathematical Economics
  {
    id: 14,
    test_id: 1,
    question: "The Hawkins-Simon conditions in Leontief Input-Output model ensure that:",
    options: [
      "The system yields strictly non-negative output levels for positive final demand",
      "The production function exhibits constant returns to scale",
      "Consumer utility is maximized at the budget boundary",
      "The profit function is convex in input prices"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Input-Output Analysis → Hawkins-Simon Feasibility Conditions",
    explanation: "The Hawkins-Simon conditions require that all leading principal minors of the technology matrix (I - A) must be strictly positive. This guarantees that the economy can generate positive net output given non-negative final demands."
  },
  {
    id: 15,
    test_id: 1,
    question: "If the total revenue function is TR = 100Q - 2Q^2 and total cost function is TC = 10 + 20Q, the profit-maximizing output is:",
    options: [
      "15 units",
      "20 units",
      "25 units",
      "30 units"
    ],
    correct_answer: 1,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Calculus & Optimization → Profit Maximization Condition (MR = MC)",
    explanation: "Profit maximization requires MR = MC. MR = d(TR)/dQ = 100 - 4Q. MC = d(TC)/dQ = 20. Equating MR = MC: 100 - 4Q = 20 => 4Q = 80 => Q = 20. Second order condition d²π/dQ² = -4 < 0 confirms maximum."
  },
  {
    id: 16,
    test_id: 1,
    question: "For a production function Q = A K^α L^β, Euler's theorem states that if α + β = 1, then:",
    options: [
      "L*(∂Q/∂L) + K*(∂Q/∂K) = Q",
      "L*(∂Q/∂L) + K*(∂Q/∂K) = 0",
      "L*(∂Q/∂L) + K*(∂Q/∂K) = 2Q",
      "Total product is exhausted only under monopoly"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Homogeneous Functions → Euler's Product Exhaustion Theorem",
    explanation: "According to Euler's Theorem for linearly homogeneous functions (degree 1 where α + β = 1), multiplying each factor by its marginal product and summing them exactly exhausts the total product: L * MP_L + K * MP_K = Q."
  },
  {
    id: 17,
    test_id: 1,
    question: "In a zero-sum two-person matrix game, a Saddle Point exists if and only if:",
    options: [
      "Maximin value equals Minimax value",
      "Both players choose randomized mixed strategies",
      "The determinant of the payoff matrix is non-zero",
      "Dominant strategies are strictly absent"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Game Theory → Saddle Point & Minimax Theorem",
    explanation: "A game in normal form has a pure strategy Nash equilibrium (saddle point) when the maximum of the row minima (Maximin) equals the minimum of the column maxima (Minimax). Value of the game equals this saddle point payoff."
  },
  {
    id: 18,
    test_id: 1,
    question: "If a consumer's demand function is Q = 50 - 2P, the price elasticity of demand at P = 10 is:",
    options: [
      "-0.50",
      "-0.67",
      "-1.00",
      "-1.50"
    ],
    correct_answer: 1,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Elasticity of Demand → Point Elasticity Derivative Formula",
    explanation: "At P = 10, Q = 50 - 2(10) = 30. Elasticity e_p = (dQ/dP) * (P/Q). Here dQ/dP = -2. So e_p = (-2) * (10 / 30) = -20/30 = -0.67 (or magnitude 0.67)."
  },

  // 4. Statistics
  {
    id: 19,
    test_id: 1,
    question: "In hypothesis testing, a Type I error occurs when:",
    options: [
      "A false null hypothesis is accepted",
      "A true null hypothesis is rejected",
      "A true alternative hypothesis is rejected",
      "Sample size is insufficient"
    ],
    correct_answer: 1,
    topic: "Statistics",
    difficulty: "Easy",
    concept: "Statistical Inference → Type I & Type II Errors",
    explanation: "Type I error (denoted by α, the significance level) occurs when the researcher rejects the null hypothesis (H₀) when it is actually true. Type II error (β) occurs when a false null hypothesis is failed to be rejected."
  },
  {
    id: 20,
    test_id: 1,
    question: "For a Poisson distribution, if the mean is λ = 4, the standard deviation is:",
    options: [
      "16",
      "4",
      "2",
      "8"
    ],
    correct_answer: 2,
    topic: "Statistics",
    difficulty: "Easy",
    concept: "Probability Distributions → Poisson Distribution Properties",
    explanation: "A key mathematical property of the Poisson distribution is that its Mean = Variance = λ. Therefore, Standard Deviation = √(Variance) = √4 = 2."
  },
  {
    id: 21,
    test_id: 1,
    question: "If the coefficient of correlation r between X and Y is 0.8, the coefficient of determination is:",
    options: [
      "0.80",
      "0.64",
      "0.16",
      "0.40"
    ],
    correct_answer: 1,
    topic: "Statistics",
    difficulty: "Easy",
    concept: "Correlation & Regression → Coefficient of Determination (R²)",
    explanation: "The coefficient of determination is r² = (0.8)² = 0.64 (or 64%). It represents the proportion of total variation in the dependent variable explained by the independent variable."
  },
  {
    id: 22,
    test_id: 1,
    question: "Which index number formula satisfies both the Time Reversal Test and the Factor Reversal Test?",
    options: [
      "Laspeyres Index",
      "Paasche Index",
      "Fisher's Ideal Index",
      "Marshall-Edgeworth Index"
    ],
    correct_answer: 2,
    topic: "Statistics",
    difficulty: "Moderate",
    concept: "Index Numbers → Fisher's Ideal Index & Reversal Tests",
    explanation: "Fisher's Ideal Index, which is the geometric mean of Laspeyres and Paasche index numbers [√(L * P)], is the only standard index formula that satisfies both Irving Fisher's Time Reversal and Factor Reversal tests."
  },
  {
    id: 23,
    test_id: 1,
    question: "For a moderately skewed distribution, the empirical relationship between Mean, Median, and Mode is:",
    options: [
      "Mode = 3 Median - 2 Mean",
      "Mode = 2 Median - 3 Mean",
      "Median = 3 Mode - 2 Mean",
      "Mean - Mode = 2(Mean - Median)"
    ],
    correct_answer: 0,
    topic: "Statistics",
    difficulty: "Easy",
    concept: "Measures of Central Tendency → Karl Pearson's Empirical Rule",
    explanation: "Karl Pearson established that in moderately skewed unimodal frequency distributions, (Mean - Mode) ≈ 3(Mean - Median), which rearranges to: Mode = 3 Median - 2 Mean."
  },

  // 5. Econometrics
  {
    id: 24,
    test_id: 1,
    question: "The Gauss-Markov Theorem states that under the classical linear regression assumptions, the OLS estimators are:",
    options: [
      "Unbiased with maximum variance",
      "Best Linear Unbiased Estimators (BLUE)",
      "Consistent but not asymptotically normal",
      "Non-linear and efficient"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Classical Linear Regression → Gauss-Markov Theorem (BLUE)",
    explanation: "The Gauss-Markov Theorem proves that when errors have zero conditional mean, homoscedastic variance, and no serial correlation, OLS estimators have the minimum variance among all linear unbiased estimators (BLUE)."
  },
  {
    id: 25,
    test_id: 1,
    question: "The Durbin-Watson statistic 'd' is commonly used to detect which econometric problem?",
    options: [
      "Heteroscedasticity",
      "First-order Autocorrelation in residuals",
      "Exact Multicollinearity",
      "Simultaneous Equation Bias"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Time Series & Residual Diagnostics → Durbin-Watson d-Test",
    explanation: "The Durbin-Watson test statistic d ≈ 2(1 - ρ) specifically tests for first-order serial correlation (AR(1)) in the disturbance terms of regression models without lagged dependent variables."
  },
  {
    id: 26,
    test_id: 1,
    question: "Which of the following tests is NOT used to detect Heteroscedasticity?",
    options: [
      "Park Test",
      "Glesjer Test",
      "White's General Test",
      "Dickey-Fuller Test"
    ],
    correct_answer: 3,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Econometric Testing → Tests for Unit Root vs Heteroscedasticity",
    explanation: "The Dickey-Fuller (DF / ADF) test is used to detect unit roots (non-stationarity) in time series data. Park, Glejser, Goldfeld-Quandt, Breusch-Pagan, and White tests are all established tests for heteroscedasticity."
  },
  {
    id: 27,
    test_id: 1,
    question: "In a simultaneous equations system with M endogenous variables and K predetermined variables, an equation is Exactly Identified by the Order Condition if the number of excluded variables is equal to:",
    options: [
      "M - 1",
      "K - 1",
      "M + K",
      "M / K"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Hard",
    concept: "Simultaneous Equations → Order Condition for Identification",
    explanation: "The order condition (necessary condition) for identification states that the number of predetermined variables excluded from the equation (K - k) must be at least (M - 1). When (K - k) = (M - 1), the equation is exactly identified."
  },
  {
    id: 28,
    test_id: 1,
    question: "High Variance Inflation Factor (VIF > 10) in an econometric regression model is a clear diagnostic indicator of:",
    options: [
      "Severe Multicollinearity",
      "First-order serial correlation",
      "Non-normal error terms",
      "Omitted variable bias"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Regression Diagnostics → Variance Inflation Factor (VIF)",
    explanation: "VIF = 1 / (1 - R_j²). When VIF exceeds 10 (corresponding to R_j² > 0.90 between regressors), it signals problematic multicollinearity leading to inflated standard errors and unstable t-ratios."
  },

  // 6. International Economics
  {
    id: 29,
    test_id: 1,
    question: "The Heckscher-Ohlin theorem explains pattern of international trade based primarily on differences in:",
    options: [
      "Labor productivities across countries (Ricardian approach)",
      "Relative Factor Endowments and Factor Intensities",
      "Taste and preference differences among consumers",
      "Economies of scale in imperfect competition"
    ],
    correct_answer: 1,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Trade Theory → Heckscher-Ohlin Factor Endowment Theorem",
    explanation: "The H-O model predicts that a country will export the commodity that uses its abundant factor intensively and import the commodity that uses its scarce factor intensively."
  },
  {
    id: 30,
    test_id: 1,
    question: "The Marshall-Lerner condition states that currency devaluation will improve a country's trade balance if:",
    options: [
      "Sum of price elasticities of demand for exports and imports is greater than 1 (|e_x + e_m| > 1)",
      "Sum of price elasticities of demand for exports and imports is equal to zero",
      "Elasticity of supply of exports is infinite",
      "Terms of trade improve by more than 10%"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Balance of Payments → Marshall-Lerner Condition",
    explanation: "The Marshall-Lerner condition mathematically proves that a devaluation will successfully eliminate a trade deficit provided that the sum of absolute price elasticities of foreign demand for exports and domestic demand for imports exceeds unity (e_x + e_m > 1)."
  },
  {
    id: 31,
    test_id: 1,
    question: "The empirical finding by Wassily Leontief (1953) that the USA (a capital-abundant country) exported labor-intensive goods is known as:",
    options: [
      "Rybczynski Theorem",
      "Leontief Paradox",
      "Stolper-Samuelson Theorem",
      "Factor Price Equalization theorem"
    ],
    correct_answer: 1,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade Tests → Leontief Paradox",
    explanation: "Using US input-output tables, Leontief found that US exports were more labor-intensive than its import substitutes, directly contradicting the standard Heckscher-Ohlin prediction. This anomaly is termed the Leontief Paradox."
  },
  {
    id: 32,
    test_id: 1,
    question: "According to the Stolper-Samuelson theorem, the imposition of a tariff on imports in a capital-abundant country will:",
    options: [
      "Increase the real return to capital and reduce real wage of labor",
      "Increase the real return to the scarce factor (labor) and reduce the real return to capital",
      "Increase real returns to both factors equally",
      "Have zero effect on income distribution"
    ],
    correct_answer: 1,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Trade & Income Distribution → Stolper-Samuelson Theorem",
    explanation: "The Stolper-Samuelson theorem demonstrates that protection (a tariff) raises the relative price of the import-competing good and increases the real reward to the factor used intensively in producing that good (the scarce factor), while lowering the real reward of the abundant factor."
  },
  {
    id: 33,
    test_id: 1,
    question: "In Balance of Payments accounting, unilateral transfers (such as foreign remittances, grants, and gifts) are recorded in the:",
    options: [
      "Capital Account",
      "Current Account",
      "Financial Derivatives Account",
      "Official Reserves Account"
    ],
    correct_answer: 1,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "BOP Structure → Current Account Components",
    explanation: "The Current Account encompasses trade in goods (merchandise), trade in services (invisibles), primary income (compensation/investment income), and secondary income (unilateral transfers like worker remittances and gifts)."
  },

  // 7. Public Economics
  {
    id: 34,
    test_id: 1,
    question: "Pure public goods are characterized by which two fundamental properties?",
    options: [
      "Excludability and Rivalry in consumption",
      "Non-excludability and Non-rivalry in consumption",
      "High price elasticity and income elasticity",
      "Free disposal and divisible utility"
    ],
    correct_answer: 1,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Goods Theory → Samuelson Condition for Public Goods",
    explanation: "Pure public goods (e.g. national defense, lighthouse) are non-rival (one person's consumption does not diminish availability for others) and non-excludable (non-payers cannot be prevented from benefiting), leading to market failure and the free-rider dilemma."
  },
  {
    id: 35,
    test_id: 1,
    question: "The Coase Theorem asserts that private bargaining will resolve externalities efficiently without government intervention provided that:",
    options: [
      "Property rights are clearly defined and transaction costs are zero (negligible)",
      "The government imposes a Pigouvian tax equal to marginal damage",
      "Both parties operate under monopolistic market conditions",
      "The polluter pays a mandatory legal penalty"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Externalities → Ronald Coase Theorem & Property Rights",
    explanation: "Ronald Coase proved that regardless of initial property right allocation, private parties can negotiate an efficient outcome if property rights are well-defined, enforceable, and transaction costs of bargaining are close to zero."
  },
  {
    id: 36,
    test_id: 1,
    question: "The Laffer Curve in public finance illustrates the theoretical relationship between:",
    options: [
      "Inflation rate and unemployment rate",
      "Income inequality and per capita GDP",
      "Tax rates and total tax revenue collected by the government",
      "Fiscal deficit and interest rates"
    ],
    correct_answer: 2,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Fiscal Policy & Supply-Side Economics → The Laffer Curve",
    explanation: "Arthur Laffer's inverted U-shaped curve shows that as tax rates rise from 0%, revenue initially increases, reaches a maximum at an optimal rate t*, and then declines because excessively high rates discourage work effort and investment."
  },
  {
    id: 37,
    test_id: 1,
    question: "The concept of 'Excess Burden' or Deadweight Loss of a commodity tax arises because:",
    options: [
      "Tax collection cost exceeds the revenue generated",
      "The tax distorts relative prices and consumer choice beyond the revenue collected",
      "Taxation increases producer surplus at the expense of consumer surplus",
      "All taxes reduce the nominal money supply"
    ],
    correct_answer: 1,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Taxation Efficiency → Deadweight Loss & Ramsey Rule",
    explanation: "Excess burden represents the loss in economic welfare (consumer + producer surplus) over and above the tax revenue collected by the government, caused by tax-induced distortion of economic decisions (substitution effect)."
  },

  // 8. Money & Banking
  {
    id: 38,
    test_id: 1,
    question: "In the Reserve Bank of India's monetary aggregates framework, Broad Money (M3) is composed of:",
    options: [
      "Currency with public + Demand deposits with banks + Other deposits with RBI",
      "M1 + Time deposits with the banking system",
      "M1 + Total post office savings deposits",
      "Currency in circulation + Bankers' deposits with RBI"
    ],
    correct_answer: 1,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Money Supply Measures → RBI Monetary Aggregates (M1, M2, M3)",
    explanation: "M3 = M1 + Net Time Deposits of the commercial banking system. Since M1 = Currency with public + Demand deposits + Other deposits with RBI, M3 captures the broadest liquid-to-term liquidity spectrum."
  },
  {
    id: 39,
    test_id: 1,
    question: "The Baumol-Tobin inventory theoretic model of transaction demand for money predicts that interest elasticity of money demand is equal to:",
    options: [
      "-1.0",
      "-0.5",
      "0.0",
      "+0.5"
    ],
    correct_answer: 1,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Demand for Money → Baumol-Tobin Square Root Formula",
    explanation: "The Baumol-Tobin formula M* = √[(2 * Y * F) / r] implies that optimal average money holdings have an income elasticity of +0.5 (economies of scale in cash management) and an interest elasticity of -0.5."
  },
  {
    id: 40,
    test_id: 1,
    question: "High Powered Money (Reserve Money, M0) in India is defined by the RBI as:",
    options: [
      "Currency in circulation + Bankers' deposits with RBI + 'Other' deposits with RBI",
      "M3 minus demand deposits",
      "Total credit extended by scheduled commercial banks",
      "Foreign exchange reserves held by the central bank"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Monetary Base → Reserve Money (M0) Components",
    explanation: "Reserve Money (M0) is the monetary base of the central bank, comprising Currency in Circulation + Bankers' Deposits with RBI + Other Deposits with RBI. The money multiplier m = M3 / M0."
  },
  {
    id: 41,
    test_id: 1,
    question: "Under the Basel III capital adequacy framework, the minimum total Capital to Risk-Weighted Assets Ratio (CRAR) prescribed for Indian scheduled commercial banks by RBI is:",
    options: [
      "8.0%",
      "9.0% (11.5% including Capital Conservation Buffer)",
      "12.0%",
      "6.0%"
    ],
    correct_answer: 1,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Regulation → Basel III Norms & RBI Guidelines",
    explanation: "While Basel III international norms prescribe 8% minimum capital adequacy ratio, RBI mandates a stricter minimum CRAR of 9.0% for Indian banks (and 11.5% when including the 2.5% Capital Conservation Buffer)."
  },

  // 9. Development Economics
  {
    id: 42,
    test_id: 1,
    question: "Arthur Lewis's model of 'Economic Development with Unlimited Supplies of Labour' assumes that the marginal productivity of agricultural labour in the subsistence sector is:",
    options: [
      "Equal to the industrial wage rate",
      "Strictly positive and growing",
      "Zero or negligible (disguised unemployment)",
      "Higher than capital's marginal productivity"
    ],
    correct_answer: 2,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Dual Economy Models → Lewis Two-Sector Model",
    explanation: "W. Arthur Lewis assumed an unlimited elastic supply of labor in the traditional rural sector at a subsistence wage because the marginal product of redundant labor is zero or negative (disguised unemployment)."
  },
  {
    id: 43,
    test_id: 1,
    question: "The 'Big Push' theory of economic development advocating massive, simultaneous investments across multiple industries was proposed by:",
    options: [
      "Ragnar Nurkse",
      "Paul Rosenstein-Rodan",
      "Albert Hirschman",
      "Gunnar Myrdal"
    ],
    correct_answer: 1,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Theories of Development → Rosenstein-Rodan's Big Push Theory",
    explanation: "Paul Rosenstein-Rodan (1943) formulated the Big Push theory emphasizing that indivisibilities in infrastructure and complementarities of demand require a large-scale, coordinated investment program to achieve self-sustaining growth."
  },
  {
    id: 44,
    test_id: 1,
    question: "The Lorenz Curve is a graphical representation used to measure:",
    options: [
      "Inflation across time",
      "Cumulative distribution of income or wealth inequality",
      "Terms of trade between agriculture and industry",
      "Poverty head-count ratio"
    ],
    correct_answer: 1,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Inequality Measurement → Lorenz Curve & Gini Coefficient",
    explanation: "The Lorenz Curve plots the cumulative percentage of population on the horizontal axis against the cumulative percentage of total income received on the vertical axis. The area between the line of perfect equality and the Lorenz curve determines the Gini coefficient."
  },
  {
    id: 45,
    test_id: 1,
    question: "Albert Hirschman's strategy of 'Unbalanced Growth' emphasizes development via:",
    options: [
      "Simultaneous balanced expansion of all agricultural sectors",
      "Deliberate investment in sectors with high Backward and Forward Linkages",
      "Strict import substitution across every manufacturing commodity",
      "Elimination of foreign capital dependency"
    ],
    correct_answer: 1,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Unbalanced Growth Strategy → Hirschman's Linkages (Backward & Forward)",
    explanation: "Hirschman argued that developing countries suffer from a shortage of decision-making ability. Growth should be induced through strategic investments in industries exhibiting high backward (purchasing inputs) and forward (supplying inputs) linkages."
  },
  {
    id: 46,
    test_id: 1,
    question: "The Human Development Index (HDI) published by UNDP is calculated as the Geometric Mean of which three normalized dimension indices?",
    options: [
      "Per capita income, Infant mortality rate, Literacy rate",
      "Life expectancy at birth, Education (Mean & Expected years of schooling), GNI per capita (PPP $)",
      "Caloric intake, Safe drinking water access, Gender equality",
      "Employment rate, Hospital beds per thousand, CPI inflation"
    ],
    correct_answer: 1,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Human Development Measurement → UNDP HDI Methodology",
    explanation: "Since 2010, HDI is the geometric mean of three dimensions: 1) Health (Life Expectancy Index), 2) Education Index (combining Mean Years of Schooling for adults and Expected Years for children), and 3) Standard of Living (GNI per capita in PPP $)."
  },

  // 10. Indian Economy
  {
    id: 47,
    test_id: 1,
    question: "In India, the Monetary Policy Framework Agreement between RBI and the Government mandates an inflation target of:",
    options: [
      "3% with a tolerance band of ± 1%",
      "4% with a tolerance band of ± 2% (2% to 6%)",
      "5% with a tolerance band of ± 2%",
      "Flexible zero inflation target"
    ],
    correct_answer: 1,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Monetary Policy in India → Flexible Inflation Targeting (FIT)",
    explanation: "Under the amended RBI Act (2016), the Monetary Policy Committee (MPC) is assigned a statutory consumer price index (CPI) inflation target of 4.0% with an upper tolerance limit of 6.0% and a lower tolerance limit of 2.0%."
  },
  {
    id: 48,
    test_id: 1,
    question: "The 15th Finance Commission of India (headed by N.K. Singh) recommended the vertical tax devolution share to States at:",
    options: [
      "42%",
      "41%",
      "32%",
      "45%"
    ],
    correct_answer: 1,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Fiscal Federalism → 15th Finance Commission Recommendations",
    explanation: "The 15th Finance Commission recommended a vertical devolution of 41% of net divisible tax pool to States (adjusted from the 14th FC's 42% by 1% to account for the reorganization of Jammu & Kashmir and Ladakh)."
  },
  {
    id: 49,
    test_id: 1,
    question: "NITI Aayog (National Institution for Transforming India) was officially established on:",
    options: [
      "15th August 2014",
      "1st January 2015",
      "1st April 2017",
      "2nd October 2014"
    ],
    correct_answer: 1,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Economic Planning in India → NITI Aayog Genesis",
    explanation: "NITI Aayog replaced the 65-year-old Planning Commission of India on January 1, 2015, following a Union Cabinet resolution, to promote cooperative and competitive federalism."
  },
  {
    id: 50,
    test_id: 1,
    question: "Which expert committee recommended the introduction of the Goods and Services Tax (GST) in India initially?",
    options: [
      "Vijay Kelkar Task Force (2003)",
      "Urjit Patel Committee",
      "Rangarajan Committee",
      "Bimal Jalan Committee"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Tax Reforms in India → GST Genesis & Kelkar Committee",
    explanation: "The Vijay Kelkar Task Force on the Implementation of the Fiscal Responsibility and Budget Management (FRBM) Act (2003) first formally recommended a comprehensive national Goods and Services Tax."
  },
  {
    id: 51,
    test_id: 1,
    question: "According to the FRBM (Fiscal Responsibility and Budget Management) Act review committee headed by N.K. Singh, the recommended debt-to-GDP target for the General Government by 2023 was:",
    options: [
      "40% (Central: 30%, States: 10%)",
      "60% (Central: 40%, States: 20%)",
      "70% (Central: 50%, States: 20%)",
      "50% (Central: 35%, States: 15%)"
    ],
    correct_answer: 1,
    topic: "Indian Economy",
    difficulty: "Hard",
    concept: "Fiscal Discipline → FRBM Review Committee Debt Targets",
    explanation: "The N.K. Singh Committee recommended a target of 60% combined debt-to-GDP ratio for the general government (40% for the Central Government and 20% for State Governments) as the primary fiscal anchor."
  },

  // 11. Environmental Economics
  {
    id: 52,
    test_id: 1,
    question: "The Environmental Kuznets Curve (EKC) hypothesizes an inverted U-shaped relationship between:",
    options: [
      "Environmental degradation (pollution) and per capita income",
      "Poverty rate and carbon emissions",
      "Energy consumption and population growth",
      "Renewable energy share and unemployment"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Environmental Economics → Environmental Kuznets Curve (EKC)",
    explanation: "The EKC postulates that in early stages of industrial development, pollution and resource degradation increase with rising per capita GDP; beyond a turning point income level, environmental quality begins to improve due to cleaner technology and environmental awareness."
  },
  {
    id: 53,
    test_id: 1,
    question: "Hotelling's Rule for non-renewable exhaustible resources dictates that the net price (economic rent) of the resource must grow at:",
    options: [
      "The rate of population growth",
      "The rate of interest (discount rate)",
      "The rate of inflation",
      "Zero rate in equilibrium"
    ],
    correct_answer: 1,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Resource Economics → Hotelling's Rule of Exhaustible Assets",
    explanation: "Harold Hotelling (1931) showed that the net marginal price of an exhaustible natural resource must rise over time at the market rate of interest (P_t - MC) = (P_0 - MC) * e^(rt) for asset equilibrium to hold."
  },
  {
    id: 54,
    test_id: 1,
    question: "The 'Contingent Valuation Method' (CVM) in environmental economics is a stated preference technique used primarily to estimate:",
    options: [
      "Direct market prices of timber",
      "Non-use (existence/bequest) values of non-market environmental goods through surveys",
      "Travel cost incurred by visitors to national parks",
      "Property price differentials due to air pollution"
    ],
    correct_answer: 1,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Environmental Valuation → Contingent Valuation Method (WTP / WTA)",
    explanation: "CVM constructs a hypothetical market through structured questionnaires asking respondents their Willingness to Pay (WTP) or Willingness to Accept (WTA) compensation, making it uniquely capable of estimating non-use and passive values."
  },

  // 12. Agricultural Economics
  {
    id: 55,
    test_id: 1,
    question: "The Cobweb Theorem explains recurring price and output fluctuations in agricultural commodities due to:",
    options: [
      "Supply responding with a time lag to current market prices, while demand reacts instantaneously",
      "Simultaneous adjustments in both supply and demand",
      "Complete government price controls",
      "Speculative hoarding by consumers"
    ],
    correct_answer: 0,
    topic: "Agricultural Economics",
    difficulty: "Moderate",
    concept: "Agricultural Price Cycles → Cobweb Theorem (Convergent/Divergent)",
    explanation: "Due to agricultural production gestation periods, farmers base production plans on current prices S_t = f(P_{t-1}), while current market clearing is determined by instantaneous demand D_t = f(P_t). This produces cobweb price oscillations."
  },
  {
    id: 56,
    test_id: 1,
    question: "In India, Minimum Support Prices (MSP) are announced by the Government based on the recommendations of:",
    options: [
      "NITI Aayog",
      "Commission for Agricultural Costs and Prices (CACP)",
      "National Bank for Agriculture and Rural Development (NABARD)",
      "Food Corporation of India (FCI)"
    ],
    correct_answer: 1,
    topic: "Agricultural Economics",
    difficulty: "Easy",
    concept: "Agricultural Policy in India → CACP & MSP Fixing",
    explanation: "The Commission for Agricultural Costs and Prices (CACP), established in 1965 (initially APC), submits annual price policy reports recommending MSP for 22 mandated agricultural crops and FRP for sugarcane."
  },
  {
    id: 57,
    test_id: 1,
    question: "According to the M.S. Swaminathan National Commission on Farmers, the recommended formula for fixing MSP is:",
    options: [
      "A2 + FL",
      "At least 50% above the comprehensive cost of production (C2 + 50%)",
      "Equivalent to international parity prices",
      "Cost A1 + 20% margin"
    ],
    correct_answer: 1,
    topic: "Agricultural Economics",
    difficulty: "Moderate",
    concept: "Agricultural Price Recommendations → Swaminathan Formula (C2 + 50%)",
    explanation: "The National Commission on Farmers chaired by Prof. M.S. Swaminathan (2006) recommended that the Minimum Support Price should be at least 50% more than the weighted average comprehensive cost of production (Cost C2, including imputed land rent and interest on capital)."
  },

  // 13. Industrial Economics
  {
    id: 58,
    test_id: 1,
    question: "The Herfindahl-Hirschman Index (HHI) for market concentration is calculated as:",
    options: [
      "The sum of market shares of the top 4 firms",
      "The sum of squares of market shares of all firms in the industry",
      "The ratio of largest firm sales to total industry sales",
      "The difference between price and marginal cost divided by price"
    ],
    correct_answer: 1,
    topic: "Industrial Economics",
    difficulty: "Easy",
    concept: "Industrial Concentration → Herfindahl-Hirschman Index (HHI)",
    explanation: "HHI = ∑ (s_i)², where s_i is the percentage market share of firm i. In a pure monopoly, HHI = 10,000. In competitive markets with many small firms, HHI approaches zero. It penalizes higher dispersion more than simple concentration ratios."
  },
  {
    id: 59,
    test_id: 1,
    question: "The Structure-Conduct-Performance (SCP) paradigm in industrial organization was pioneered by:",
    options: [
      "Edward Mason and Joe S. Bain",
      "William Baumol and John Panzar",
      "George Stigler and Ronald Coase",
      "Oliver Williamson and Harold Demsetz"
    ],
    correct_answer: 0,
    topic: "Industrial Economics",
    difficulty: "Moderate",
    concept: "Industrial Organization → Joe Bain's SCP Paradigm",
    explanation: "Joe S. Bain and Edward Mason developed the SCP framework, proposing that Industry Structure (number of sellers, barriers to entry) dictates Firm Conduct (pricing, advertising, R&D), which in turn determines Economic Performance (profitability, efficiency)."
  },
  {
    id: 60,
    test_id: 1,
    question: "A market is defined as 'Contestable' in Baumol's Theory of Contestable Markets if:",
    options: [
      "Firms engage in aggressive non-price advertising wars",
      "Entry and exit are completely costless with zero sunk costs ('hit-and-run' competition)",
      "Only two large conglomerate firms compete",
      "Government strictly regulates prices to zero economic profit"
    ],
    correct_answer: 1,
    topic: "Industrial Economics",
    difficulty: "Moderate",
    concept: "Market Contestability → Baumol's Contestable Markets Theory",
    explanation: "William Baumol, John Panzar, and Robert Willig demonstrated that even a monopoly firm will behave competitively and earn zero supernormal profits if there is potential 'hit-and-run' entry enabled by frictionless entry and exit (absence of sunk costs)."
  },

  // 14. Labour Economics
  {
    id: 61,
    test_id: 1,
    question: "A backward-bending individual labor supply curve occurs when at higher wage rates:",
    options: [
      "Substitution effect dominates the income effect",
      "Income effect dominates the substitution effect",
      "Marginal utility of leisure becomes zero",
      "Nominal wage is equal to real wage"
    ],
    correct_answer: 1,
    topic: "Labour Economics",
    difficulty: "Easy",
    concept: "Labour Supply Theory → Income vs Substitution Effects",
    explanation: "At lower wage rates, the substitution effect of a wage increase dominates (leisure is more expensive, so work hours increase). Beyond a threshold wage, the positive income effect dominates (higher income induces the worker to purchase more leisure), causing labor hours supplied to decrease."
  },
  {
    id: 62,
    test_id: 1,
    question: "Jacob Mincer's Human Capital Earnings function estimates log wages (ln W) as a function of:",
    options: [
      "Years of schooling, work experience, and experience squared",
      "Total physical capital stock and GDP growth",
      "Union membership and inflation rate",
      "Tax brackets and overtime hours"
    ],
    correct_answer: 0,
    topic: "Labour Economics",
    difficulty: "Moderate",
    concept: "Human Capital Theory → Mincer Wage Equation",
    explanation: "The Mincerian wage equation ln(w) = β₀ + β₁*(Schooling) + β₂*(Experience) + β₃*(Experience²) models rate of return to schooling and concave returns to on-the-job experience."
  },
  {
    id: 63,
    test_id: 1,
    question: "Okun's Law in macro-labor economics describes the empirical negative relationship between:",
    options: [
      "Wage growth and strike frequency",
      "Cyclical unemployment rate and real GDP output gap",
      "Inflation rate and interest rate",
      "Female labor force participation and birth rate"
    ],
    correct_answer: 1,
    topic: "Labour Economics",
    difficulty: "Easy",
    concept: "Macro-Labour Relationships → Arthur Okun's Law",
    explanation: "Arthur Okun established that for every 1 percentage point increase in the unemployment rate above the natural rate, real GDP falls by approximately 2% below potential GDP."
  },

  // 15. Growth Economics
  {
    id: 64,
    test_id: 1,
    question: "In the Harrod-Domar growth model, the 'knife-edge equilibrium' condition requires that:",
    options: [
      "Actual growth rate (G) = Warranted growth rate (Gw) = Natural growth rate (Gn)",
      "Capital-output ratio equals the labor-capital ratio",
      "Saving rate equals the depreciation rate",
      "Marginal product of capital is zero"
    ],
    correct_answer: 0,
    topic: "Growth Economics",
    difficulty: "Moderate",
    concept: "Growth Models → Harrod-Domar Knife-Edge Equilibrium",
    explanation: "In Harrod's growth model, full employment steady equilibrium without secular stagnation or inflation requires exact equality between Actual Growth (G = s/v), Warranted Growth (Gw = s/C_r), and Natural Growth (Gn = n + λ). Any departure is self-reinforcing (knife-edge instability)."
  },
  {
    id: 65,
    test_id: 1,
    question: "In the Solow-Swan Neoclassical Growth Model, steady-state long-run growth rate of per capita output is determined entirely by:",
    options: [
      "The domestic savings rate (s)",
      "The rate of exogenous technological progress (g)",
      "The rate of population growth (n)",
      "The capital depreciation rate (δ)"
    ],
    correct_answer: 1,
    topic: "Growth Economics",
    difficulty: "Moderate",
    concept: "Neoclassical Growth → Solow-Swan Steady-State Determinants",
    explanation: "In the Solow model, changes in the savings rate only have a level effect, not a long-run growth effect. The steady-state per capita growth rate is driven exclusively by the exogenous rate of labor-augmenting technological progress (g)."
  },
  {
    id: 66,
    test_id: 1,
    question: "The 'Golden Rule of Accumulation' in Solow's neoclassical model maximizes steady-state consumption per worker when:",
    options: [
      "Marginal product of capital equals the population growth rate plus depreciation (MPK = n + δ)",
      "Saving rate is equal to 1.0",
      "Marginal product of labor is zero",
      "Capital-labor ratio is minimized"
    ],
    correct_answer: 0,
    topic: "Growth Economics",
    difficulty: "Hard",
    concept: "Neoclassical Growth → Phelps' Golden Rule of Capital Accumulation",
    explanation: "Edmund Phelps formulated that consumption per worker c* = f(k*) - (n + δ)k* is maximized at the Golden Rule level of capital where dc*/dk* = 0 => f'(k*) = MPK = n + δ (or n + g + δ with tech progress)."
  },
  {
    id: 67,
    test_id: 1,
    question: "Endogenous Growth Theory (Romer 1986, Lucas 1988) overcomes diminishing returns to physical capital by introducing:",
    options: [
      "Spillovers of knowledge, human capital investment, and R&D with non-rival ideas",
      "Exogenous technological shocks from foreign aid",
      "Constant labor supply with zero population growth",
      "Complete state monopoly over production"
    ],
    correct_answer: 0,
    topic: "Growth Economics",
    difficulty: "Moderate",
    concept: "Modern Growth Theory → Endogenous Growth & R&D Spillovers",
    explanation: "Paul Romer and Robert Lucas showed that endogenous technological growth can persist indefinitely because knowledge and ideas are non-rival goods that generate positive externalities and increasing returns to scale for the economy."
  },

  // Additional 33 comprehensive questions across the 15 topics to reach 100
  {
    id: 68,
    test_id: 1,
    question: "A price consumption curve (PCC) for a good X is a horizontal straight line when:",
    options: [
      "Price elasticity of demand for good X is unitary (|e_p| = 1)",
      "Price elasticity of demand is zero (|e_p| = 0)",
      "Good X is a Giffen good",
      "Good X and good Y are perfect complements"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory → Price Consumption Curve (PCC) & Elasticity",
    explanation: "When price elasticity of demand is unitary (|e_p| = 1), total expenditure on good X remains constant as its price changes. Consequently, expenditure on all other goods Y remains constant, making the PCC horizontal."
  },
  {
    id: 69,
    test_id: 1,
    question: "If a monopolist charges different prices in two separate markets with price elasticities of demand e₁ = 3 and e₂ = 1.5, what is the ratio of prices P₁/P₂?",
    options: [
      "1/2",
      "2/1",
      "1/1",
      "2/3"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Hard",
    concept: "Monopoly Pricing → Third Degree Price Discrimination Rule",
    explanation: "Under third-degree price discrimination, MR₁ = MR₂ => P₁[1 - 1/e₁] = P₂[1 - 1/e₂]. Substituting: P₁[1 - 1/3] = P₂[1 - 1/1.5] => P₁(2/3) = P₂(1/3) => P₁ / P₂ = (1/3) / (2/3) = 1/2. The monopolist charges a lower price in the market with more elastic demand."
  },
  {
    id: 70,
    test_id: 1,
    question: "In the Prisoner's Dilemma game, the Nash Equilibrium is characterized by:",
    options: [
      "Both players cooperating (Pareto optimal outcome)",
      "Both players defecting/confessing (Pareto sub-optimal outcome)",
      "One cooperating and one defecting",
      "Random mixed strategies with equal payoffs"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Game Theory → Prisoner's Dilemma & Dominant Strategies",
    explanation: "Defecting is a strictly dominant strategy for both players. Therefore, the unique Nash equilibrium is for both players to defect, even though mutual cooperation yields a strictly superior joint payoff (Pareto inefficiency of Nash equilibrium)."
  },
  {
    id: 71,
    test_id: 1,
    question: "The 'Kaldor-Hicks Compensation Criterion' states that a policy change increases social welfare if:",
    options: [
      "Everyone in society is made strictly better off",
      "Gainers could hypothetically compensate the losers and still remain better off",
      "Losers successfully bribe the gainers to prevent the change",
      "Income inequality is reduced to zero"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Welfare Economics → Kaldor-Hicks Compensation Principle",
    explanation: "Nicholas Kaldor (1939) and J.R. Hicks proposed that an allocation represents an improvement if the total monetary gains of winners exceed the total monetary losses of losers, so that winners could hypothetically compensate losers (actual payment is not required)."
  },
  {
    id: 72,
    test_id: 1,
    question: "According to the Life Cycle Hypothesis of Franco Modigliani, an individual's consumption over their lifetime depends on:",
    options: [
      "Current disposable income only",
      "Total lifetime resources (wealth plus expected lifetime labor income)",
      "Peak income earned during the working years",
      "Precautionary savings against health emergencies"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theory → Modigliani's Life Cycle Hypothesis",
    explanation: "The Life Cycle Hypothesis assumes individuals smooth consumption over their lifetime by borrowing during early years, saving during peak earning working years, and dissaving accumulated wealth during retirement."
  },
  {
    id: 73,
    test_id: 1,
    question: "In the Classical macroeconomic model, money is 'neutral', which means that changes in money supply affect:",
    options: [
      "Only nominal variables (prices, wages) leaving real variables (output, employment) unchanged",
      "Only real variables while prices remain rigid",
      "Both nominal and real interest rates equally",
      "Investment through real cash balance effects"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Classical Dichotomy → Monetary Neutrality",
    explanation: "The Classical Dichotomy separates nominal from real variables. Money neutrality asserts that an increase in money supply leads only to an equiproportionate increase in the overall price level, leaving real output, employment, and real interest rate unaltered."
  },
  {
    id: 74,
    test_id: 1,
    question: "The Acceleration Principle of investment states that induced investment is directly proportional to:",
    options: [
      "The rate of change of output/income (ΔY)",
      "The absolute level of interest rates",
      "Total government expenditure",
      "The marginal propensity to consume"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Investment Theory → J.M. Clark's Principle of Acceleration",
    explanation: "J.M. Clark's acceleration principle establishes that net investment depends not on the absolute level of output, but on the rate of change in output/demand: I_t = v * (Y_t - Y_{t-1}), where v is the capital-output ratio."
  },
  {
    id: 75,
    test_id: 1,
    question: "In the Short-Run Phillips Curve augmented with adaptive expectations, the Long-Run Phillips Curve is:",
    options: [
      "Downward sloping to the right",
      "A vertical line at the Natural Rate of Unemployment (NAIRU)",
      "A horizontal line at the target inflation rate",
      "Upward sloping due to supply shocks"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Inflation & Unemployment → Friedman-Phelps Augmented Phillips Curve",
    explanation: "Milton Friedman and Edmund Phelps demonstrated that in the long run, as inflation expectations fully adjust to actual inflation, there is no trade-off between inflation and unemployment. The Long-Run Phillips Curve is vertical at NAIRU."
  },
  {
    id: 76,
    test_id: 1,
    question: "For a square matrix A to have an inverse (A⁻¹), it is necessary and sufficient that:",
    options: [
      "Its determinant is non-zero (|A| ≠ 0, non-singular)",
      "All its diagonal elements are strictly positive",
      "Its trace is equal to 1",
      "The matrix is symmetric"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Matrix Algebra → Invertibility of Matrices",
    explanation: "A square matrix is invertible (non-singular) if and only if its determinant is non-zero (|A| ≠ 0). The inverse is computed as A⁻¹ = (1 / |A|) * Adj(A)."
  },
  {
    id: 77,
    test_id: 1,
    question: "In constrained optimization, the Kuhn-Tucker conditions generalize the Lagrangian method for problems with:",
    options: [
      "Inequality constraints",
      "Only equality constraints",
      "Stochastic variables",
      "Non-differentiable step functions"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Nonlinear Programming → Kuhn-Tucker Optimality Conditions",
    explanation: "The Kuhn-Tucker (KKT) conditions extend classical Lagrange multipliers to handle non-linear optimization problems with inequality constraints (g(x) ≤ b) and non-negativity restrictions (x ≥ 0) via complementary slackness conditions."
  },
  {
    id: 78,
    test_id: 1,
    question: "In a continuous probability distribution, the Total Area under the Probability Density Function (PDF) curve f(x) over its entire domain is always:",
    options: [
      "Equal to 1.0",
      "Equal to the mean μ",
      "Equal to the variance σ²",
      "Dependent on sample size N"
    ],
    correct_answer: 0,
    topic: "Statistics",
    difficulty: "Easy",
    concept: "Probability Theory → Axioms of Probability & PDF",
    explanation: "By the fundamental axioms of probability, the integral of any valid probability density function f(x) over its entire range from -∞ to +∞ must equal 1.0 (representing 100% total probability)."
  },
  {
    id: 79,
    test_id: 1,
    question: "Which of the following sampling methods is a Non-Probability Sampling method?",
    options: [
      "Simple Random Sampling",
      "Stratified Random Sampling",
      "Quota Sampling",
      "Cluster Sampling"
    ],
    correct_answer: 2,
    topic: "Statistics",
    difficulty: "Easy",
    concept: "Sampling Techniques → Probability vs Non-Probability Methods",
    explanation: "Quota sampling, purposive sampling, convenience sampling, and snowball sampling are non-probability sampling techniques where elements do not have a known non-zero chance of selection."
  },
  {
    id: 80,
    test_id: 1,
    question: "For a standard normal distribution (Z ~ N(0, 1)), the skewness and kurtosis are respectively:",
    options: [
      "Skewness = 0, Kurtosis = 3 (Meso-kurtic)",
      "Skewness = 1, Kurtosis = 0",
      "Skewness = 0, Kurtosis = 0",
      "Skewness = -1, Kurtosis = 1"
    ],
    correct_answer: 0,
    topic: "Statistics",
    difficulty: "Moderate",
    concept: "Moments of Distribution → Normal Distribution Parameters",
    explanation: "Because the normal distribution is perfectly symmetric around its mean, its third standardized moment (skewness) is 0. Its fourth standardized moment (kurtosis β₂) is 3 (or excess kurtosis γ₂ = β₂ - 3 = 0)."
  },
  {
    id: 81,
    test_id: 1,
    question: "Cointegration testing between two non-stationary time series I(1) variables is used to establish:",
    options: [
      "A genuine, non-spurious long-run equilibrium relationship",
      "Immediate absence of multicollinearity",
      "Homoscedasticity of error variance",
      "Deterministic trend seasonality"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Time Series Econometrics → Engle-Granger Cointegration",
    explanation: "Robert Engle and Clive Granger established that if two non-stationary series Y_t and X_t are integrated of order 1 [I(1)], but a linear combination of them is stationary [I(0)], they are cointegrated, indicating a true long-run equilibrium."
  },
  {
    id: 82,
    test_id: 1,
    question: "The Goldfeld-Quandt test for Heteroscedasticity is based on calculating the ratio of residual variances (F-test) from two sub-samples ordered by:",
    options: [
      "An explanatory variable suspected of causing heteroscedasticity",
      "The chronological time sequence of observations",
      "The value of the Durbin-Watson statistic",
      "The sum of squared regressors"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Econometric Testing → Goldfeld-Quandt Test",
    explanation: "The Goldfeld-Quandt test orders observations according to the magnitude of the suspected variable X_i, omits c central observations, and computes the F-ratio F = RSS₂ / RSS₁ ~ F(n₁ - k, n₂ - k) to test for variance equality."
  },
  {
    id: 83,
    test_id: 1,
    question: "According to the Theory of Optimum Currency Areas (Robert Mundell 1961), a primary condition for countries to successfully share a common currency is:",
    options: [
      "High degree of cross-border factor (labour and capital) mobility",
      "Strict trade embargoes against outside nations",
      "Complete privatization of commercial banks",
      "Identical tax rates across all provinces"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "International Monetary Economics → Mundell's Optimum Currency Area",
    explanation: "Robert Mundell argued that asymmetric economic shocks in a currency union can be absorbed without nominal exchange rate adjustments if labor and capital move freely between regions, supplemented by wage flexibility and fiscal risk sharing."
  },
  {
    id: 84,
    test_id: 1,
    question: "The 'J-Curve Effect' in international trade describes the phenomenon where following currency devaluation:",
    options: [
      "The trade balance first deteriorates in the short run before improving in the long run",
      "Export volumes drop permanently while import values surge",
      "Foreign exchange reserves immediately double",
      "Inflation falls immediately to zero"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Balance of Payments → The J-Curve Dynamic Response",
    explanation: "Because trade volumes (quantities of exports and imports) respond with contractual and behavioral lags while import prices rise immediately in domestic currency, the current account balance initially worsens before price elasticities rise to improve the balance."
  },
  {
    id: 85,
    test_id: 1,
    question: "The 'Samuelson Condition' for the optimal provision of a pure public good requires that:",
    options: [
      "Sum of Marginal Rates of Substitution equals Marginal Rate of Transformation (∑ MRS_i = MRT)",
      "MRS_i = MRT for every individual separately",
      "Marginal Cost of production equals Zero",
      "Total Tax Revenue equals Total National Income"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Hard",
    concept: "Public Goods Theory → Samuelson Condition (∑ MRS = MRT)",
    explanation: "Paul Samuelson demonstrated that for non-rival public goods, efficiency requires vertical summation of individual marginal willingness to pay (Marginal Rates of Substitution): ∑_{i=1}^n MRS_{xy}^i = MRT_{xy}."
  },
  {
    id: 86,
    test_id: 1,
    question: "A Pigouvian Tax is an environmental policy instrument designed to:",
    options: [
      "Internalize a negative externality by setting tax equal to marginal external damage at optimal output",
      "Subsidize polluters to purchase modern filters",
      "Impose uniform quantitative production quotas",
      "Eliminate consumer surplus completely"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Externalities → Pigouvian Correction Tax",
    explanation: "Arthur Pigou proposed that setting an output tax exactly equal to the Marginal External Damage (MED) forces competitive firms to equate Price with Marginal Social Cost (MSC = MPC + Tax), restoring Pareto optimal output."
  },
  {
    id: 87,
    test_id: 1,
    question: "Friedman's Modern Quantity Theory of Money treats the demand for money primarily as a theory of:",
    options: [
      "Demand for an asset / portfolio choice dependent on permanent income and relative asset returns",
      "Strict transaction velocity determined solely by payment technology",
      "Speculative liquidity preference with a trap at low interest",
      "A mechanical accounting identity"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Monetarism → Friedman's Restatement of Quantity Theory",
    explanation: "In 'The Quantity Theory of Money: A Restatement' (1956), Milton Friedman reformulated money demand as part of consumer and firm asset demand, function of total wealth (permanent income), returns on bonds, equities, durable goods, and inflation expectations."
  },
  {
    id: 88,
    test_id: 1,
    question: "In India, the Standing Deposit Facility (SDF) introduced by the RBI in 2022 allows the central bank to:",
    options: [
      "Absorb surplus liquidity from commercial banks without providing collateral/government securities",
      "Inject unlimited liquidity against gold loans",
      "Directly fund fiscal deficit through monetization",
      "Set interest rates on external commercial borrowings"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "RBI Monetary Toolkit → Standing Deposit Facility (SDF)",
    explanation: "Introduced as the new floor of the Liquidity Adjustment Facility (LAF) corridor in April 2022, the SDF enables the RBI to absorb overnight liquidity from banks at a rate 25 bps below the policy repo rate without requiring G-Sec collateral."
  },
  {
    id: 89,
    test_id: 1,
    question: "The 'Vicious Circle of Poverty' on the supply side, as explained by Ragnar Nurkse, operates as:",
    options: [
      "Low Income → Low Capacity to Save → Low Capital Formation → Low Productivity → Low Income",
      "High Population → Food Shortage → Famine → Low Income",
      "Low Exports → Balance of Payments Deficit → Devaluation → Low Income",
      "Low Wages → Low Education → High Unemployment → Low Income"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Theories of Poverty → Ragnar Nurkse's Vicious Circle",
    explanation: "Ragnar Nurkse in 'Problems of Capital Formation in Underdeveloped Countries' stated: 'A country is poor because it is poor.' On the supply side, low real income leads to low saving, low investment/capital accumulation, low productivity, which circles back to low income."
  },
  {
    id: 90,
    test_id: 1,
    question: "The Multidimensional Poverty Index (MPI) developed by OPHI and UNDP tracks acute poverty using how many weighted indicators?",
    options: [
      "10 indicators across 3 dimensions (Health, Education, Living Standards)",
      "5 indicators based solely on calorie consumption",
      "15 indicators covering political and cultural freedom",
      "3 indicators based on per capita income"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Poverty Measurement → Global Multidimensional Poverty Index (MPI)",
    explanation: "The MPI evaluates poverty at the individual/household level across 10 indicators: Nutrition and Child Mortality (Health); Years of Schooling and Attendance (Education); Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, and Assets (Living Standards)."
  },
  {
    id: 91,
    test_id: 1,
    question: "Which Five-Year Plan in India adopted the 'Mahalanobis Model' emphasizing heavy industry and capital goods development?",
    options: [
      "First Five-Year Plan (1951-56)",
      "Second Five-Year Plan (1956-61)",
      "Fourth Five-Year Plan (1969-74)",
      "Sixth Five-Year Plan (1980-85)"
    ],
    correct_answer: 1,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Indian Planning History → Second Five-Year Plan & Mahalanobis Strategy",
    explanation: "Prof. P.C. Mahalanobis developed the two-sector and four-sector growth model for India's Second Five-Year Plan (1956-1961), advocating a rapid industrialization drive centered on basic and heavy capital goods industries."
  },
  {
    id: 92,
    test_id: 1,
    question: "The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme provides income support to landholding farmer families of:",
    options: [
      "₹6,000 per year in three equal instalments of ₹2,000",
      "₹10,000 per year in two equal instalments of ₹5,000",
      "₹4,000 per year in four quarterly instalments of ₹1,000",
      "₹12,000 per year directly to tenant farmers"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Government Schemes in India → PM-KISAN Direct Income Support",
    explanation: "Launched in February 2019 (effective Dec 2018), PM-KISAN is a 100% centrally sponsored scheme that provides ₹6,000 per annum to all eligible farmer families in three four-monthly instalments of ₹2,000 directly into bank accounts."
  },
  {
    id: 93,
    test_id: 1,
    question: "In Environmental Economics, a 'Cap-and-Trade' (Tradable Pollution Permits) system is cost-effective because:",
    options: [
      "Firms with lower abatement costs reduce more pollution and sell excess permits to firms with higher abatement costs",
      "The government eliminates all monitoring costs",
      "Every firm is mandated to reduce pollution by an identical tonnage",
      "It completely eliminates carbon emissions within one month"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Market-Based Environmental Instruments → Tradable Permits & Equimarginal Principle",
    explanation: "Tradable permits equalize Marginal Abatement Costs (MAC) across all polluters. Low-cost abatement firms abate more than their quota and profit by selling permits, minimizing total societal cost of meeting the emission target."
  },
  {
    id: 94,
    test_id: 1,
    question: "In Agricultural Economics, 'Interlinked Transactions' in rural factor markets refer to contracts where:",
    options: [
      "Credit, land tenancy, and labor transactions between landlord and tenant are tied together in a single bundle",
      "Farmers directly sell crops on international commodity exchanges",
      "Two commercial banks co-finance a large irrigation dam",
      "Crop prices are linked to wholesale fertilizer prices"
    ],
    correct_answer: 0,
    topic: "Agricultural Economics",
    difficulty: "Moderate",
    concept: "Rural Agrarian Markets → Interlinked Factor Contracts",
    explanation: "As analyzed by Pranab Bardhan and Amit Bhaduri, agrarian interlinkage occurs when two or more separate markets (e.g. credit and labor or credit and product marketing) are tied into a single contract, enabling landlords to overcome information asymmetry and extract economic rent."
  },
  {
    id: 95,
    test_id: 1,
    question: "The 'Lerner Index of Monopoly Power' (L) is defined mathematically as:",
    options: [
      "(P - MC) / P",
      "(MC - P) / MC",
      "P / (P - MC)",
      "TR / TC"
    ],
    correct_answer: 0,
    topic: "Industrial Economics",
    difficulty: "Easy",
    concept: "Monopoly Power Measurement → Abba Lerner Index",
    explanation: "Abba Lerner (1934) defined monopoly power as the relative markup of price over marginal cost: L = (P - MC) / P. In perfect competition L = 0. For a profit-maximizing monopolist, L = 1 / |e_p|."
  },
  {
    id: 96,
    test_id: 1,
    question: "According to Gary Becker's Human Capital Theory, the difference between 'General Training' and 'Specific Training' is that:",
    options: [
      "General training increases worker productivity across many employers, while specific training enhances productivity only in the providing firm",
      "General training is funded entirely by the government while specific training is illegal",
      "Specific training never increases wages",
      "General training is exclusively for blue-collar workers"
    ],
    correct_answer: 0,
    topic: "Labour Economics",
    difficulty: "Moderate",
    concept: "Human Capital Theory → General vs Specific On-the-Job Training",
    explanation: "Gary Becker (1964) proved that workers must finance general human capital training (via lower starting wages) because skills are transferable. Firms will only finance firm-specific training since outside firms do not value those bespoke skills."
  },
  {
    id: 97,
    test_id: 1,
    question: "In growth accounting, the 'Solow Residual' measures:",
    options: [
      "Total Factor Productivity (TFP) growth not accounted for by growth in capital and labor inputs",
      "Depreciation of physical capital stock",
      "Excess savings accumulated in foreign reserves",
      "Unemployment caused by wage stickiness"
    ],
    correct_answer: 0,
    topic: "Growth Economics",
    difficulty: "Moderate",
    concept: "Growth Accounting → Solow Residual (Total Factor Productivity)",
    explanation: "Robert Solow used production function decomposition ΔY/Y = α(ΔK/K) + β(ΔL/L) + ΔA/A. The residual term ΔA/A (Solow Residual) measures technological progress and efficiency gains known as Total Factor Productivity (TFP)."
  },
  {
    id: 98,
    test_id: 1,
    question: "The 'AK Model' of endogenous growth assumes a production function Y = AK, which eliminates diminishing returns because:",
    options: [
      "The marginal product of capital (MPK = A) is constant and strictly positive",
      "Labor is completely replaced by autonomous robots",
      "Savings rate automatically adjusts to population growth",
      "The government subsidizes 100% of all capital costs"
    ],
    correct_answer: 0,
    topic: "Growth Economics",
    difficulty: "Moderate",
    concept: "Endogenous Growth → Rebelo's AK Growth Model",
    explanation: "By defining K broadly to include both physical and human/knowledge capital, the AK model (Sergio Rebelo) sets α = 1 in Y = A K^α, yielding a constant marginal product of capital dY/dK = A and enabling perpetual growth rate g = sA - (n + δ)."
  },
  {
    id: 99,
    test_id: 1,
    question: "According to the Classical Wage-Fund Doctrine (J.S. Mill), the average real wage rate is determined by:",
    options: [
      "The total wage fund (capital accumulated by employers) divided by the total number of laborers",
      "The marginal revenue product of the last worker hired",
      "Collective bargaining agreements between trade unions and the state",
      "The statutory minimum wage set by parliament"
    ],
    correct_answer: 0,
    topic: "Labour Economics",
    difficulty: "Moderate",
    concept: "Classical Wage Theories → Wage Fund Theory (J.S. Mill)",
    explanation: "The Wage Fund doctrine stated that wages depend upon the predetermined capital set aside by entrepreneurs for hiring workers (the wage fund) and the size of the working population: Wage = Wage Fund / Labor Force."
  },
  {
    id: 100,
    test_id: 1,
    question: "Which of the following describes the 'Hedonic Pricing Method' in environmental and real estate economics?",
    options: [
      "Estimating the implicit economic value of environmental attributes (e.g. clean air, quietness) through market price differentials of differentiated goods like houses",
      "Direct telephone surveys asking about utility derived from clean water",
      "Calculating the healthcare costs of respiratory illnesses caused by smog",
      "Applying uniform carbon taxes on heavy industrial factories"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Environmental Valuation → Hedonic Pricing Method (Sherwin Rosen)",
    explanation: "The Hedonic Pricing Method decomposes the market price of a heterogeneous asset (such as residential property) into its constituent structural, neighborhood, and environmental characteristics, isolating the implicit market price of environmental amenities like clean air or scenic views."
  }
];
