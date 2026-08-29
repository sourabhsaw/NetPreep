import { Question } from '../types';

export const mockTest01Questions: Question[] = [
  // --- UNIT 1: MICRO ECONOMICS (Q1 - Q14) ---
  {
    id: 1,
    test_id: 1,
    question: "If the price of a commodity increases and its quantity demanded decreases, this represents:",
    options: [
      "Shift in demand curve",
      "Movement along demand curve (Contraction of Demand)",
      "Increase in demand",
      "Rightward shift of supply curve"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Law of Demand → Price vs Non-Price Determinants",
    explanation: "A change in the own price of a commodity causes a change in quantity demanded, which is represented geometrically as a movement along the existing demand curve (contraction or expansion). In contrast, changes in non-price factors (consumer income, tastes, prices of substitutes/complements) cause the entire demand curve to shift leftward or rightward."
  },
  {
    id: 2,
    test_id: 1,
    question: "For a Giffen good, which of the following conditions must strictly hold true according to Hicksian/Slutsky decomposition?",
    options: [
      "The substitution effect is negative and larger in magnitude than the positive income effect",
      "The negative income effect is larger in magnitude than the substitution effect",
      "The income effect is positive and reinforces the substitution effect",
      "Price elasticity of demand is unitary"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Consumer Theory → Giffen Good Decomposition",
    explanation: "A Giffen good is a special, extreme case of an inferior good. When its price falls, the substitution effect encourages greater consumption, but the negative income effect (real income increases, leading to lower demand for the inferior good) is so strong that it completely outweighs the substitution effect, causing total quantity demanded to fall."
  },
  {
    id: 3,
    test_id: 1,
    question: "The condition for Pareto optimality in the allocation of inputs across two production processes (X and Y) using Labor (L) and Capital (K) is:",
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
    explanation: "Pareto efficiency in production requires that the Marginal Rate of Technical Substitution between labor and capital (MRTS_LK) must be equal across all commodities produced (MRTS_LK^X = MRTS_LK^Y). Option 0 refers to consumption efficiency, and Option 2 refers to overall product-mix efficiency."
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
    explanation: "In an n-firm Cournot oligopoly with zero marginal costs, each firm produces q_i = [1/(n+1)]*(a/b), so total industry output is Q = [n/(n+1)]*(a/b). For a duopoly (n = 2), industry output is (2/3)*(a/b), which is exactly 2/3 of the competitive output (a/b)."
  },
  {
    id: 5,
    test_id: 1,
    question: "According to Arrow's Impossibility Theorem, which of the following is NOT one of the five essential conditions for a democratic social welfare function?",
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
    explanation: "Kenneth Arrow proved that no social welfare function can simultaneously satisfy five ordinal conditions: Unrestricted Domain, Non-Dictatorship, Pareto Principle, Independence of Irrelevant Alternatives (IIA), and Transitivity. Arrow explicitly assumed ordinal utility; cardinal measurability is not an assumption."
  },
  {
    id: 6,
    test_id: 1,
    question: "An individual possessing a strictly concave Von Neumann-Morgenstern utility function U(W) with U''(W) < 0 is characterized as:",
    options: [
      "Risk neutral",
      "Risk loving",
      "Risk averse",
      "Risk seeking for large gambles"
    ],
    correct_answer: 2,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Risk & Uncertainty → Concavity of Utility Function",
    explanation: "A strictly concave utility function exhibits diminishing marginal utility of wealth (U''(W) < 0). By Jensen's Inequality, E[U(W)] < U(E[W]), meaning the individual strictly prefers the expected wealth with certainty over the risky gamble itself, defining risk aversion."
  },
  {
    id: 7,
    test_id: 1,
    question: "In the Bertrand Duopoly model with homogeneous products and constant marginal costs MC1 = MC2 = c, the market price equilibrium settles at:",
    options: [
      "Monopoly price P_m",
      "Marginal cost P = c",
      "Average cost plus 20% markup",
      "Leader firm's reaction price"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Oligopoly Theory → Bertrand Paradox",
    explanation: "In the Bertrand price-competition model with identical goods and constant MC, firms undercut each other whenever price exceeds marginal cost. Price wars continue until price equals marginal cost (P = MC = c), replicating the perfectly competitive outcome even with only two firms (the Bertrand Paradox)."
  },
  {
    id: 8,
    test_id: 1,
    question: "The Compensating Variation (CV) of a price rise measures:",
    options: [
      "The amount of additional income needed at the new prices to restore the consumer to their initial utility level",
      "The amount of income that can be taken away at initial prices",
      "The change in consumer surplus evaluated only via Marshallian demand",
      "The price subsidy provided by the government"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Welfare Analysis → Hicksian Compensating Variation (CV)",
    explanation: "Compensating Variation (CV), introduced by J.R. Hicks, is the monetary amount that must be given to a consumer after a price increase to restore them to their original indifference curve (pre-change utility level U0) evaluated at the new post-change prices."
  },
  {
    id: 9,
    test_id: 1,
    question: "For a Cobb-Douglas production function Q = A * L^0.6 * K^0.4, the elasticity of factor substitution (σ) is equal to:",
    options: [
      "0.6",
      "1.0",
      "0.4",
      "Infinity"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Production Theory → Elasticity of Substitution of Cobb-Douglas",
    explanation: "For any standard Cobb-Douglas production function Q = A * L^α * K^β, the elasticity of factor substitution σ = (%Δ(K/L)) / (%ΔMRTS_LK) is always identically equal to 1.0 everywhere along the isoquant."
  },
  {
    id: 10,
    test_id: 1,
    question: "In the Stackelberg duopoly model with firm 1 as leader and firm 2 as follower, the leader firm:",
    options: [
      "Operates on the follower's reaction curve to maximize profit",
      "Selects output where its isoprofit curve is tangent to the follower's reaction function",
      "Faces higher marginal costs than the follower",
      "Produces exactly half of the Cournot output"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Oligopoly → Stackelberg Leader-Follower Equilibrium",
    explanation: "The Stackelberg leader recognizes that the follower will respond according to its Cournot reaction function q2 = R2(q1). The leader maximizes its own profit by choosing q1 where its highest possible isoprofit curve is tangent to the follower's reaction curve."
  },
  {
    id: 11,
    test_id: 1,
    question: "Which theorem states that under perfect competition, complete markets, and absence of externalities, any competitive equilibrium is Pareto efficient?",
    options: [
      "Second Fundamental Theorem of Welfare Economics",
      "First Fundamental Theorem of Welfare Economics",
      "Coase Theorem",
      "Walras' Law"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "General Equilibrium → First Welfare Theorem",
    explanation: "The First Fundamental Theorem of Welfare Economics establishes that competitive markets allocate resources with Pareto efficiency under standard convexity, complete markets, and zero externalities. The Second Theorem states that any Pareto optimum can be achieved via lump-sum transfers."
  },
  {
    id: 12,
    test_id: 1,
    question: "The 'Envelope Theorem' applied to the long-run cost function demonstrates that:",
    options: [
      "Long-run average cost (LAC) is the lower envelope of all short-run average cost (SAC) curves",
      "Marginal cost always exceeds average total cost in the long run",
      "Fixed costs increase with output",
      "Short-run costs are always lower than long-run costs"
    ],
    correct_answer: 0,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Cost Theory → Envelope Theorem & LAC Curve",
    explanation: "The Envelope Theorem proves that the Long-Run Average Cost (LAC) curve tangentially envelops all Short-Run Average Cost (SAC) curves from below, because in the long run all plant sizes can be optimally adjusted."
  },
  {
    id: 13,
    test_id: 1,
    question: "When a monopolist engages in First-Degree (Perfect) Price Discrimination, deadweight loss is:",
    options: [
      "Maximized",
      "Equal to total fixed cost",
      "Zero, achieving productive/allocative efficiency",
      "Split equally between consumers and producer"
    ],
    correct_answer: 2,
    topic: "Micro Economics",
    difficulty: "Moderate",
    concept: "Monopoly → First-Degree Price Discrimination",
    explanation: "Under first-degree price discrimination, the seller charges each consumer their exact maximum willingness to pay (reservation price). Output expands to the point where P = MC, eliminating deadweight loss entirely; all consumer surplus is converted into producer surplus."
  },
  {
    id: 14,
    test_id: 1,
    question: "In a 2-player strategic game, a Nash Equilibrium is defined as a strategy profile where:",
    options: [
      "Both players achieve their highest cooperative payoff",
      "No player has an incentive to unilaterally deviate given the other player's chosen strategy",
      "One player dictates the strategy of the other",
      "Total payoffs sum to zero"
    ],
    correct_answer: 1,
    topic: "Micro Economics",
    difficulty: "Easy",
    concept: "Game Theory → Definition of Nash Equilibrium",
    explanation: "A Nash Equilibrium is a set of strategies such that each player's strategy is a best response to the strategy chosen by every other player. Hence, neither player can improve their payoff by unilaterally altering their choice."
  },

  // --- UNIT 2: MACRO ECONOMICS (Q15 - Q28) ---
  {
    id: 15,
    test_id: 1,
    question: "In the Keynesian IS-LM framework, an increase in government expenditure shifts the IS curve to the right, causing:",
    options: [
      "Higher income and lower interest rates",
      "Higher income and higher interest rates",
      "Lower income and higher interest rates",
      "No change in output due to full Ricardian Equivalence"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "IS-LM Model → Fiscal Policy Expansion",
    explanation: "Expansionary fiscal policy shifts the IS curve rightward along an upward-sloping LM curve. Aggregate demand increases output (Y rises), which increases transaction demand for money, driving up the equilibrium interest rate (r rises)."
  },
  {
    id: 16,
    test_id: 1,
    question: "According to Milton Friedman's Permanent Income Hypothesis (PIH), the Marginal Propensity to Consume out of transitory income (MPC_transitory) is:",
    options: [
      "Equal to 1.0",
      "Close to zero",
      "Equal to the average propensity to consume",
      "Negative"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theory → Permanent Income Hypothesis",
    explanation: "Milton Friedman hypothesized that measured income Y = Y_p + Y_t and consumption C = C_p + C_t. Consumption is strictly a function of permanent income (C = k*Y_p). Transitory income windfalls are largely saved or smoothed over the lifetime, making the MPC out of transitory income approximately 0."
  },
  {
    id: 17,
    test_id: 1,
    question: "The 'Liquidity Trap' occurs in the money market when the interest rate is extremely low, causing:",
    options: [
      "The speculative demand for money to become perfectly interest-elastic (horizontal LM curve)",
      "The transaction demand for money to fall to zero",
      "The IS curve to become vertical",
      "Monetary policy to exert maximum expansionary power"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Keynesian Economics → Liquidity Trap",
    explanation: "In a liquidity trap, bond prices are perceived to be at their peak and interest rates near zero. Everyone expects bond prices to fall in the future, so money demand becomes infinitely elastic with respect to interest rates (horizontal LM). Any increase in money supply is absorbed into idle cash balances without lowering interest rates."
  },
  {
    id: 18,
    test_id: 1,
    question: "According to the Rational Expectations Hypothesis (Lucas Critique), anticipated monetary policy expansions will:",
    options: [
      "Increase real GDP and employment significantly in the short run",
      "Have zero effect on real output, causing only immediate price level inflation",
      "Permanently lower the natural rate of unemployment",
      "Shift the long-run Phillips curve to the left"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "New Classical Macroeconomics → Policy Ineffectiveness Proposition",
    explanation: "Thomas Sargent, Neil Wallace, and Robert Lucas formulated the Policy Ineffectiveness Proposition (PIP): systematic and fully anticipated monetary policy changes are incorporated into price expectations immediately, shifting aggregate supply upwards simultaneously with aggregate demand, leaving real output unchanged."
  },
  {
    id: 19,
    test_id: 1,
    question: "In the Solow-Swan Neoclassical Growth Model, the steady-state growth rate of output per worker (y = Y/L) in the absence of technological progress is:",
    options: [
      "Equal to the savings rate s",
      "Equal to population growth rate n",
      "Equal to 0",
      "Equal to the depreciation rate δ"
    ],
    correct_answer: 2,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Neoclassical Growth → Solow Steady State",
    explanation: "In the Solow-Swan model without technological progress (g = 0), capital per worker k and output per worker y reach a constant steady state (Δk = 0, Δy = 0). Total aggregate output Y grows at the population growth rate n, so per capita output growth is zero."
  },
  {
    id: 20,
    test_id: 1,
    question: "According to Okun's Law, what is the empirical relationship between the unemployment rate and real GDP growth?",
    options: [
      "A 1% increase in unemployment is associated with an approximately 2% decline in real GDP relative to potential GDP",
      "A 1% increase in inflation causes a 2% rise in employment",
      "Unemployment and GDP are completely uncorrelated",
      "Wage growth equals productivity growth plus 3%"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Macroeconomic Relationships → Okun's Law",
    explanation: "Arthur Okun observed that for every 1 percentage point that the unemployment rate rises above the natural rate, real GDP falls approximately 2 to 2.5 percentage points below potential GDP."
  },
  {
    id: 21,
    test_id: 1,
    question: "Under the Mundell-Fleming Model with Perfect Capital Mobility and Flexible Exchange Rates, fiscal expansion leads to:",
    options: [
      "Large increase in real output",
      "Complete crowding out through currency appreciation and decline in net exports (Zero output effect)",
      "Depreciation of the domestic currency",
      "Severe drop in interest rates"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Hard",
    concept: "Open Economy Macroeconomics → Mundell-Fleming Model",
    explanation: "Under flexible exchange rates and perfect capital mobility, a fiscal expansion puts upward pressure on interest rates, triggering capital inflows. This appreciates the domestic currency, making domestic goods less competitive and worsening net exports until output returns to its original equilibrium."
  },
  {
    id: 22,
    test_id: 1,
    question: "The 'Golden Rule' level of capital accumulation in the Solow Growth Model maximizes:",
    options: [
      "Total investment per worker",
      "Steady-state consumption per worker (c*)",
      "Total capital-output ratio",
      "The population growth rate"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Growth Theory → Solow Golden Rule of Capital",
    explanation: "The Golden Rule capital stock (k*_gold), identified by Edmund Phelps, maximizes steady-state consumption per worker. At this point, the marginal product of capital equals the effective depreciation rate: MPK = n + g + δ."
  },
  {
    id: 23,
    test_id: 1,
    question: "The Relative Income Hypothesis proposed by James Duesenberry relies on which two psychological mechanisms?",
    options: [
      "Permanent income effect and life-cycle asset smoothing",
      "Demonstration effect and Ratchet effect",
      "Money illusion and Pigou effect",
      "Adaptive expectations and Ricardian equivalence"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Consumption Theories → Duesenberry's Relative Income Hypothesis",
    explanation: "Duesenberry proposed that consumption depends on relative income compared to peers ('Demonstration Effect') and past peak standard of living ('Ratchet Effect'), explaining why consumption does not drop proportionally during cyclical downturns."
  },
  {
    id: 24,
    test_id: 1,
    question: "The Real Balance Effect (Pigou Effect) suggests that during deflation:",
    options: [
      "Real value of money balances increases, stimulating aggregate consumption demand",
      "Real interest rates skyrocket, causing permanent depression",
      "Nominal wages rise automatically",
      "Money demand decreases to zero"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Classical vs Keynesian Macroeconomics → Pigou Real Balance Effect",
    explanation: "Arthur Pigou argued that a fall in the general price level P increases the real purchasing power of liquid wealth (M/P). This positive wealth effect increases consumer spending, shifting the IS curve right and restoring full employment even in a liquidity trap."
  },
  {
    id: 25,
    test_id: 1,
    question: "In the Tobin's q theory of investment, a firm will undertake new physical capital investment when:",
    options: [
      "Tobin's q is strictly greater than 1",
      "Tobin's q is less than 0.5",
      "Replacement cost of capital exceeds stock market valuation",
      "Interest rate equals the dividend yield"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Investment Theory → James Tobin's q Ratio",
    explanation: "Tobin's q is defined as the market value of installed capital divided by its replacement cost. If q > 1, the stock market values capital above the cost of acquiring it, incentivizing firms to issue shares and purchase new physical capital."
  },
  {
    id: 26,
    test_id: 1,
    question: "The Expectations-Augmented Phillips Curve (Friedman-Phelps) implies that in the long run:",
    options: [
      "There is a stable downward-sloping trade-off between inflation and unemployment",
      "The Phillips Curve is vertical at the Natural Rate of Unemployment (NAIRU)",
      "Unemployment is permanently reduced by maintaining high inflation",
      "Inflation expectations are always zero"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Inflation & Unemployment → Long-Run Vertical Phillips Curve",
    explanation: "Milton Friedman and Edmund Phelps proved that once inflation expectations adjust to actual inflation, unemployment returns to its natural rate (NAIRU). Hence, the long-run Phillips curve is vertical, ruling out any long-run trade-off."
  },
  {
    id: 27,
    test_id: 1,
    question: "In Baumol-Tobin's Inventory Theoretic approach to transaction demand for money, the demand for cash balances is:",
    options: [
      "Directly proportional to income and inversely proportional to interest rates (square-root formula)",
      "Independent of brokerage transaction costs",
      "Linear in interest rates",
      "Zero whenever bond rates are positive"
    ],
    correct_answer: 0,
    topic: "Macro Economics",
    difficulty: "Moderate",
    concept: "Money Demand → Baumol-Tobin Inventory Model",
    explanation: "William Baumol and James Tobin derived the optimal average cash holding M* = sqrt((2 * Y * F) / (2 * r)) = sqrt((Y * F) / (2 * r)), showing that transactions money demand has an income elasticity of 0.5 and interest elasticity of -0.5."
  },
  {
    id: 28,
    test_id: 1,
    question: "According to the Accelerator Theory of Investment, investment expenditure is determined by:",
    options: [
      "The level of the interest rate alone",
      "The rate of change in output or national income (ΔY)",
      "The level of government borrowing",
      "Foreign direct investment inflows"
    ],
    correct_answer: 1,
    topic: "Macro Economics",
    difficulty: "Easy",
    concept: "Investment Theories → Accelerator Principle",
    explanation: "The acceleration principle states that net investment is proportional to the change in output (I_t = v * (Y_t - Y_{t-1})), where v is the capital-output ratio. Thus, investment responds to growth in demand rather than the absolute level of output."
  },

  // --- UNIT 3: MATHEMATICAL ECONOMICS (Q29 - Q38) ---
  {
    id: 29,
    test_id: 1,
    question: "If total cost function is TC = 2Q^3 - 12Q^2 + 30Q + 50, output Q at which Marginal Cost (MC) is minimized is:",
    options: [
      "Q = 2",
      "Q = 3",
      "Q = 4",
      "Q = 6"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Calculus & Optimization → Minimizing Marginal Cost",
    explanation: "MC = d(TC)/dQ = 6Q^2 - 24Q + 30. To find minimum MC, set d(MC)/dQ = 0: 12Q - 24 = 0 => 12Q = 24 => Q = 2. Second derivative d^2(MC)/dQ^2 = 12 > 0 (confirms minimum)."
  },
  {
    id: 30,
    test_id: 1,
    question: "For a 2x2 Leontief Input-Output matrix A, the Hawkins-Simon conditions for system viability require that:",
    options: [
      "The determinant |I - A| > 0 and all diagonal elements of (I - A) are strictly positive",
      "The trace of A must equal 1",
      "All eigenvalues must be negative",
      "Sum of all column coefficients must exceed 2"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Input-Output Analysis → Hawkins-Simon Conditions",
    explanation: "The Hawkins-Simon conditions ensure non-negative net outputs: (1) Principal diagonal elements (1 - a_ii) > 0 (each sector requires less than 1 unit of its own output to produce 1 unit), and (2) The determinant |I - A| > 0."
  },
  {
    id: 31,
    test_id: 1,
    question: "Given the demand function P = 100 - 2Q, the Point Price Elasticity of demand at P = 40 is:",
    options: [
      "-0.67",
      "-1.50",
      "-2.00",
      "-0.40"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Elasticity Calculation → Point Price Elasticity",
    explanation: "From P = 100 - 2Q, when P = 40, 2Q = 60 => Q = 30. dQ/dP = -1/2 = -0.5. Elasticity e_p = (dQ/dP) * (P/Q) = (-0.5) * (40 / 30) = -20 / 30 = -0.667 (or -0.67)."
  },
  {
    id: 32,
    test_id: 1,
    question: "In a constrained optimization problem with Lagrangian L(x, y, λ) = f(x, y) - λ[g(x, y) - c], the Lagrange multiplier λ represents:",
    options: [
      "The marginal change in the optimal value of the objective function when constraint constant c increases by one unit (Shadow Price)",
      "The ratio of input costs",
      "The degree of returns to scale",
      "The second order Hessian determinant"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Optimization Theory → Interpretation of Lagrange Multiplier",
    explanation: "By the Envelope Theorem in constrained optimization, dL*/dc = λ*. Hence, λ represents the shadow price or marginal relaxation value of the resource constraint on the objective function."
  },
  {
    id: 33,
    test_id: 1,
    question: "If matrix M has eigenvalues λ1 = 3 and λ2 = 5, then the determinant and trace of M are respectively:",
    options: [
      "Det = 15, Trace = 8",
      "Det = 8, Trace = 15",
      "Det = 2, Trace = 15",
      "Det = 15, Trace = 2"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Linear Algebra → Eigenvalues, Trace, and Determinant",
    explanation: "For any square matrix: (1) Trace(M) = Sum of eigenvalues = 3 + 5 = 8. (2) Det(M) = Product of eigenvalues = 3 * 5 = 15."
  },
  {
    id: 34,
    test_id: 1,
    question: "A production function Q = f(K, L) is homogeneous of degree k. By Euler's Theorem, K*(∂Q/∂K) + L*(∂Q/∂L) is identically equal to:",
    options: [
      "k * Q",
      "Q / k",
      "k^2 * Q",
      "Zero"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Easy",
    concept: "Homogeneous Functions → Euler's Theorem",
    explanation: "Euler's Theorem for homogeneous functions states that if f(tK, tL) = t^k * f(K, L), then K*(∂Q/∂K) + L*(∂Q/∂L) = k * Q. When k = 1 (constant returns to scale), total product is fully exhausted by payments to inputs according to their marginal products."
  },
  {
    id: 35,
    test_id: 1,
    question: "In linear programming, the Duality Theorem states that:",
    options: [
      "The maximum value of the primal objective function is exactly equal to the minimum value of the dual objective function at optimality",
      "Primal and dual must always have infinite solutions",
      "The dual variable must always equal zero",
      "Slack variables can never be zero"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Linear Programming → Fundamental Duality Theorem",
    explanation: "The Strong Duality Theorem of Linear Programming establishes that if either the primal or dual problem has an optimal finite solution, then the other problem also has an optimal solution, and the optimal objective function values are equal (Max Z_primal = Min W_dual)."
  },
  {
    id: 36,
    test_id: 1,
    question: "If consumer utility is U(x, y) = x^0.5 * y^0.5 with prices P_x = 2, P_y = 4, and Income M = 80, the optimal consumption of good x is:",
    options: [
      "x = 20",
      "x = 10",
      "x = 40",
      "x = 15"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Consumer Choice → Cobb-Douglas Demand Functions",
    explanation: "For utility U = x^α * y^β with α = β = 0.5, demand for x is x* = (α / (α + β)) * (M / P_x) = (0.5 / 1.0) * (80 / 2) = 0.5 * 40 = 20."
  },
  {
    id: 37,
    test_id: 1,
    question: "A first-order difference equation y_{t+1} - a*y_t = b is dynamically stable (converges to steady-state equilibrium) if and only if:",
    options: [
      "|a| < 1",
      "a > 1",
      "a = 0",
      "b = 0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Dynamic Systems → Stability of First-Order Difference Equations",
    explanation: "The complementary solution is y_t^c = A*(a)^t. As t approaches infinity, (a)^t converges to 0 if and only if the absolute value of the characteristic root |a| < 1."
  },
  {
    id: 38,
    test_id: 1,
    question: "The Hessian matrix of a multivariable function f(x, y) is negative definite if and only if:",
    options: [
      "f_xx < 0 and the determinant |H| = (f_xx * f_yy - (f_xy)^2) > 0",
      "f_xx > 0 and |H| < 0",
      "f_xx = 0 and f_yy = 0",
      "f_xy = 0"
    ],
    correct_answer: 0,
    topic: "Mathematical Economics",
    difficulty: "Moderate",
    concept: "Multivariate Calculus → Second-Order Sufficient Conditions for Maximum",
    explanation: "For an unconstrained maximum of a two-variable function, the Hessian matrix must be negative definite: principal minors must alternate in sign starting with negative (f_xx < 0 and |H| = f_xx*f_yy - (f_xy)^2 > 0)."
  },

  // --- UNIT 4: ECONOMETRICS (Q39 - Q48) ---
  {
    id: 39,
    test_id: 1,
    question: "The Gauss-Markov Theorem establishes that under the classical linear regression model assumptions, the Ordinary Least Squares (OLS) estimator is:",
    options: [
      "Biased but with minimum variance",
      "Best Linear Unbiased Estimator (BLUE)",
      "Asymptotically inefficient",
      "Non-linear and consistent"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Classical OLS → Gauss-Markov Theorem (BLUE)",
    explanation: "The Gauss-Markov Theorem states that among all linear and unbiased estimators, the OLS estimator has the minimum variance (is most efficient), making it BLUE (Best Linear Unbiased Estimator)."
  },
  {
    id: 40,
    test_id: 1,
    question: "Which of the following econometric tests is specifically used to detect Heteroscedasticity?",
    options: [
      "Durbin-Watson Test",
      "White's General Heteroscedasticity Test",
      "Dickey-Fuller Test",
      "Granger Causality Test"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Regression Diagnostics → White's Test for Heteroscedasticity",
    explanation: "White's Test (1980) tests for heteroscedasticity by regressing squared residuals on regressors, their squares, and cross-products. Durbin-Watson tests for autocorrelation; Dickey-Fuller tests for stationarity; Granger tests for temporal precedence."
  },
  {
    id: 41,
    test_id: 1,
    question: "In the presence of First-Order Autocorrelation AR(1) in regression residuals, the OLS estimators remain:",
    options: [
      "Biased and inconsistent",
      "Unbiased and consistent, but inefficient with biased standard error estimates",
      "Non-linear and efficient",
      "Completely invalid"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Regression Violations → Consequences of Autocorrelation",
    explanation: "Autocorrelation of error terms violates E[u_i u_j] = 0. OLS parameter estimators remain unbiased and consistent, but are no longer BLUE (they lose minimum variance), and standard errors are underestimated, inflating t-statistics."
  },
  {
    id: 42,
    test_id: 1,
    question: "The Durbin-Watson statistic 'd' ranges between 0 and 4. A value of d close to 2 indicates:",
    options: [
      "Strong positive autocorrelation",
      "Absence of first-order autocorrelation (d ≈ 2)",
      "Strong negative autocorrelation (d ≈ 4)",
      "Severe multicollinearity"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Autocorrelation → Durbin-Watson 'd' Statistic Interpretation",
    explanation: "The DW statistic d ≈ 2*(1 - ρ), where ρ is the estimated autocorrelation coefficient. When ρ = 0 (no autocorrelation), d ≈ 2. When ρ = 1 (perfect positive), d ≈ 0. When ρ = -1 (perfect negative), d ≈ 4."
  },
  {
    id: 43,
    test_id: 1,
    question: "The 'Variance Inflation Factor' (VIF) is commonly used to diagnose:",
    options: [
      "Multicollinearity among explanatory variables",
      "Non-stationarity in time series",
      "Endogeneity in instrumental variables",
      "Omitted variable bias"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Multicollinearity → Variance Inflation Factor (VIF)",
    explanation: "VIF_j = 1 / (1 - R_j^2), where R_j^2 is the coefficient of determination from regressing X_j on all other explanatory variables. A VIF exceeding 10 indicates severe multicollinearity inflating estimator variances."
  },
  {
    id: 44,
    test_id: 1,
    question: "In simultaneous equation models, the Order Condition of Identification is a:",
    options: [
      "Necessary condition (K - k >= m - 1)",
      "Sufficient condition",
      "Condition testing for serial correlation",
      "Test for normality of residuals"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Simultaneous Equations → Order vs Rank Condition of Identification",
    explanation: "The Order Condition is a necessary (counting) condition: for an equation to be identified, the number of predetermined variables excluded from the equation (K - k) must be at least as large as the number of endogenous variables included minus 1 (m - 1). The Rank condition is necessary and sufficient."
  },
  {
    id: 45,
    test_id: 1,
    question: "The Augmented Dickey-Fuller (ADF) test is used in time-series econometrics to determine whether a series:",
    options: [
      "Has a Unit Root (is non-stationary)",
      "Has zero conditional variance",
      "Contains ARCH effects",
      "Exhibits structural change"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Time Series Econometrics → Unit Root Testing (ADF Test)",
    explanation: "The Augmented Dickey-Fuller (ADF) test tests the null hypothesis that a time series contains a unit root (H0: γ = 0, non-stationary / integrated of order I(1)) against the alternative hypothesis of stationarity I(0)."
  },
  {
    id: 46,
    test_id: 1,
    question: "When regressors are correlated with the error term (Endogeneity: Cov(X, u) ≠ 0), the appropriate estimation technique is:",
    options: [
      "Two-Stage Least Squares (2SLS) / Instrumental Variables (IV)",
      "Simple OLS regression",
      "Weighted Least Squares with OLS weights",
      "Cochrane-Orcutt procedure"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Moderate",
    concept: "Endogeneity → Two-Stage Least Squares (2SLS) & Instrumental Variables",
    explanation: "When Cov(X, u) ≠ 0, OLS is biased and inconsistent. Instrumental Variables (IV) / Two-Stage Least Squares (2SLS) uses valid instruments Z that are correlated with X but uncorrelated with the error term u to produce consistent estimates."
  },
  {
    id: 47,
    test_id: 1,
    question: "In a regression model with an intercept and a categorical qualitative variable having m categories, the 'Dummy Variable Trap' is avoided by introducing:",
    options: [
      "m dummy variables",
      "(m - 1) dummy variables",
      "(m + 1) dummy variables",
      "Zero dummy variables"
    ],
    correct_answer: 1,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Qualitative Variables → Dummy Variable Trap",
    explanation: "Introducing m dummies alongside an intercept causes perfect multicollinearity (the sum of all category dummies equals the constant column of ones). To prevent this singularity, exactly (m - 1) dummies are used, leaving one category as the base reference group."
  },
  {
    id: 48,
    test_id: 1,
    question: "The adjusted R-squared (R̄^2) differs from unadjusted R^2 because R̄^2:",
    options: [
      "Penalizes the addition of unnecessary explanatory variables by adjusting for degrees of freedom",
      "Always increases whenever any variable is added",
      "Can never be negative",
      "Measures correlation rather than variation"
    ],
    correct_answer: 0,
    topic: "Econometrics",
    difficulty: "Easy",
    concept: "Model Fit → Adjusted R-squared Formula",
    explanation: "R̄^2 = 1 - [(1 - R^2) * (n - 1) / (n - k)]. Unlike standard R^2 (which monotonically increases with each added regressor), adjusted R^2 only increases if the newly added variable has a t-statistic with absolute value greater than 1."
  },

  // --- UNIT 5: INTERNATIONAL ECONOMICS (Q49 - Q58) ---
  {
    id: 49,
    test_id: 1,
    question: "According to the Heckscher-Ohlin (H-O) Theorem of International Trade:",
    options: [
      "A country exports the commodity that intensively uses its relatively abundant and cheap factor of production",
      "Trade is determined entirely by differences in labor productivity (Ricardian comparative advantage)",
      "Small countries always lose from international trade",
      "Tariffs always increase world welfare"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Trade Theory → Heckscher-Ohlin Factor Endowment Theorem",
    explanation: "The Heckscher-Ohlin theorem states that a capital-abundant nation will export the capital-intensive good and import the labor-intensive good, while a labor-abundant nation exports the labor-intensive good."
  },
  {
    id: 50,
    test_id: 1,
    question: "Wassily Leontief's empirical test of the Heckscher-Ohlin theorem for the US economy (1947 input-output data) revealed that:",
    options: [
      "The US (the most capital-abundant nation) was exporting labor-intensive commodities and importing capital-intensive commodities (Leontief Paradox)",
      "The H-O theorem was perfectly confirmed for all sectors",
      "The US had zero foreign trade in manufactured goods",
      "Tariffs eliminated all trade"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Empirical Trade → The Leontief Paradox",
    explanation: "Wassily Leontief (1953) discovered that US exports were more labor-intensive than US import-competing products, directly contradicting the standard Heckscher-Ohlin prediction. This anomaly is known as the Leontief Paradox."
  },
  {
    id: 51,
    test_id: 1,
    question: "The Stolper-Samuelson Theorem demonstrates that an increase in the relative price of a commodity (e.g. via an import tariff):",
    options: [
      "Increases the real return to the factor used intensively in the production of that commodity, and decreases the real return to the other factor",
      "Reduces the returns to all factors of production equally",
      "Increases only consumer surplus",
      "Has zero distributional consequences"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade & Distribution → Stolper-Samuelson Theorem",
    explanation: "The Stolper-Samuelson theorem (1941) proves that an increase in the relative price of a good increases the real wage/return of the factor used intensively in its production, while reducing the real income of the other factor of production."
  },
  {
    id: 52,
    test_id: 1,
    question: "The Marshall-Lerner Condition states that currency devaluation will successfully improve a country's trade balance if:",
    options: [
      "The sum of price elasticities of demand for exports and imports is strictly greater than 1 (|e_x + e_m| > 1)",
      "The inflation rate is equal to zero",
      "The capital account balance is in deficit",
      "The sum of elasticities is less than 0.5"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Exchange Rate Economics → Marshall-Lerner Condition",
    explanation: "The Marshall-Lerner condition states that for a currency depreciation to improve the balance of trade (net exports), the price elasticities of export demand (e_x) and import demand (e_m) must satisfy: |e_x| + |e_m| > 1."
  },
  {
    id: 53,
    test_id: 1,
    question: "The 'J-Curve Effect' in international balance of payments economics describes:",
    options: [
      "A short-run deterioration in the trade balance following currency depreciation before long-run price elasticities adjust to create a surplus",
      "A continuous exponential rise in imports",
      "The relationship between tariff rates and tax revenues",
      "The growth rate of terms of trade"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Easy",
    concept: "Balance of Payments → The J-Curve Phenomenon",
    explanation: "Following devaluation, import prices rise immediately while export and import trade volumes adjust with a time lag due to pre-existing contracts. Hence, the trade deficit initially worsens (downward stroke of the J) before improving as volume elasticities take effect."
  },
  {
    id: 54,
    test_id: 1,
    question: "According to Jacob Viner's Theory of Customs Unions, 'Trade Creation' refers to:",
    options: [
      "A shift in product origin from a higher-cost domestic producer to a lower-cost partner country (Welfare Enhancing)",
      "A shift from a lower-cost non-member country to a higher-cost partner country (Trade Diversion)",
      "Total prohibition of all manufactured imports",
      "Imposition of retaliatory export tariffs"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Economic Integration → Viner's Trade Creation vs Trade Diversion",
    explanation: "Jacob Viner (1950) distinguished Trade Creation (beneficial shift from inefficient domestic production to lower-cost member state production) from Trade Diversion (welfare-reducing shift from low-cost external nations to tariff-free higher-cost member nations)."
  },
  {
    id: 55,
    test_id: 1,
    question: "In the Rybczynski Theorem, at constant commodity prices, an increase in the endowment of one factor (e.g. Labor):",
    options: [
      "Leads to a more than proportionate expansion in the output of the labor-intensive commodity and an absolute contraction in the output of the capital-intensive commodity",
      "Increases output of both commodities equally",
      "Causes wages to decline to zero",
      "Leaves relative commodity outputs unchanged"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Factor Endowments → Rybczynski Theorem",
    explanation: "Tadeusz Rybczynski (1955) proved that at constant relative commodity prices, an expansion in the supply of one factor causes a magnified increase in the output of the sector using that factor intensively and an absolute reduction in the output of the other sector."
  },
  {
    id: 56,
    test_id: 1,
    question: "The Singer-Prebisch Thesis argues that over the long term, developing primary-commodity exporters face:",
    options: [
      "A secular deterioration in their Net Barter Terms of Trade relative to industrialized manufactured-goods exporters",
      "Exponentially increasing purchasing power terms of trade",
      "Zero competition from manufactured substitutes",
      "A permanent trade surplus"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Terms of Trade → Prebisch-Singer Hypothesis",
    explanation: "Raúl Prebisch and Hans Singer demonstrated that primary commodities have a low income elasticity of demand (Engel's Law) and operate in competitive markets, causing primary exporters' terms of trade to deteriorate relative to manufactured exporters with monopoly markups."
  },
  {
    id: 57,
    test_id: 1,
    question: "The 'Optimal Tariff' for a large country that possesses monopsony power in world trade is calculated as:",
    options: [
      "t* = 1 / e_s (where e_s is the price elasticity of foreign export supply)",
      "t* = e_d / e_s",
      "t* = 100%",
      "t* = zero"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Moderate",
    concept: "Trade Policy → Optimal Tariff Formula",
    explanation: "A large importing nation can improve its terms of trade by imposing an optimal tariff t* = 1 / e_s, where e_s is the price elasticity of foreign export supply. The tariff drives down the foreign exporter's price, extracting terms-of-trade gains that exceed domestic deadweight losses."
  },
  {
    id: 58,
    test_id: 1,
    question: "Under the Balassa-Samuelson Effect, why do countries with higher productivity growth in tradables experience real exchange rate appreciation?",
    options: [
      "Higher productivity in tradables pushes up domestic wages across all sectors, raising non-tradable service prices and the overall domestic price index",
      "Because imports are banned completely",
      "Due to hyperinflation in capital goods",
      "Because nominal exchange rates are permanently fixed by law"
    ],
    correct_answer: 0,
    topic: "International Economics",
    difficulty: "Hard",
    concept: "Real Exchange Rates → Balassa-Samuelson Effect",
    explanation: "Bela Balassa and Paul Samuelson showed that productivity growth is faster in tradable sectors. Wage gains in tradables spill over into non-tradables (services), raising non-tradable prices and resulting in higher domestic CPI and a real currency appreciation."
  },

  // --- UNIT 6: PUBLIC ECONOMICS (Q59 - Q68) ---
  {
    id: 59,
    test_id: 1,
    question: "The Samuelson Condition for the optimal provision of a pure public good is:",
    options: [
      "Sum of Marginal Rates of Substitution equals Marginal Rate of Transformation (Σ MRS_i = MRT)",
      "MRS_i = MRT for every individual separately",
      "Marginal Cost equals zero",
      "Total taxes equal total government expenditure"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Goods Provision → Samuelson Rule",
    explanation: "Because public goods are non-rival in consumption, total marginal social benefit is obtained by vertically summing individuals' willingness to pay (Marginal Rates of Substitution). Efficiency requires Σ(MRS_xy^i) = MRT_xy."
  },
  {
    id: 60,
    test_id: 1,
    question: "According to the Ramsey Rule of Optimal Commodity Taxation, tax rates should be set such that:",
    options: [
      "Commodities with lower price elasticity of demand are taxed at higher rates (Inverse Elasticity Rule)",
      "All luxury goods are taxed at 0%",
      "Uniform tax rates are applied across all goods regardless of elasticity",
      "Essential food items bear 100% of all taxation"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Optimal Taxation → Frank Ramsey's Inverse Elasticity Rule",
    explanation: "Frank Ramsey (1927) showed that to minimize deadweight loss while raising a target tax revenue, the proportional reduction in compensated demand should be equal across goods. This leads to the Inverse Elasticity Rule: tax rates should be inversely proportional to price elasticity of demand."
  },
  {
    id: 61,
    test_id: 1,
    question: "A Pigouvian Tax is an environmental/public policy instrument designed to:",
    options: [
      "Internalize a negative externality by setting a per-unit tax equal to Marginal External Damage (MEC) at the social optimum",
      "Subsidize monopoly production",
      "Eliminate all consumer surplus",
      "Finance national debt repayment"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Externalities → Arthur Pigou Corrective Taxation",
    explanation: "Arthur Pigou showed that when production generates a negative externality (MSC > MPC), imposing a per-unit tax t = MEC (Marginal External Cost) aligns private marginal cost with social marginal cost, restoring Pareto efficiency."
  },
  {
    id: 62,
    test_id: 1,
    question: "The Tiebout Hypothesis ('Voting with one's feet') argues that local public goods are efficiently provided when:",
    options: [
      "Mobile citizens sort themselves into jurisdictions whose bundle of local taxes and public amenities best matches their personal preferences",
      "The central government mandates uniform property taxes across all towns",
      "Citizens are legally forbidden from moving between municipalities",
      "Public goods are funded entirely by debt"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Fiscal Federalism → Charles Tiebout Sorting Hypothesis",
    explanation: "Charles Tiebout (1956) demonstrated that if consumer-voters are fully mobile and choose among competing local jurisdictions offering diverse tax-amenity packages, a competitive market-like outcome for local public goods is achieved."
  },
  {
    id: 63,
    test_id: 1,
    question: "The 'Peacock-Wiseman Hypothesis' explains the long-run growth of public expenditure through which primary mechanism?",
    options: [
      "The Displacement Effect during social upheavals and national crises",
      "Constant increase in agricultural subsidies",
      "A steady decline in military spending",
      "Persistent deflation"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Expenditure Theories → Peacock-Wiseman Hypothesis",
    explanation: "Alan Peacock and Jack Wiseman (1961) found that British public expenditure grew in step-like jumps during crises (wars, depressions) due to the 'Displacement Effect' (citizens accept higher tax levels during emergencies), which persist permanently after the crisis ends."
  },
  {
    id: 64,
    test_id: 1,
    question: "According to Wagner's Law of Increasing State Activity, as per capita income rises in an industrializing economy:",
    options: [
      "Public expenditure grows at a faster rate than GDP (income elasticity of public spending > 1)",
      "The role of the state declines to zero",
      "All public enterprises are privatized",
      "Tax revenues fall relative to income"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Expenditure Growth → Adolph Wagner's Law",
    explanation: "Adolph Wagner (1893) observed that industrialization and urbanization require expansion of administrative, regulatory, and redistributive functions of government, causing government spending to increase at a faster rate than national output (G/Y ratio increases)."
  },
  {
    id: 65,
    test_id: 1,
    question: "The Musgrave Classification of Public Sector functions divides government budgetary policy into three branches:",
    options: [
      "Allocation, Distribution, and Stabilization branches",
      "Judiciary, Legislative, and Executive branches",
      "Agriculture, Industry, and Services branches",
      "Monetary, Regulatory, and Export branches"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Theory of Public Finance → Richard Musgrave's Three Branches",
    explanation: "Richard Musgrave (1959) categorized state budgetary objectives into: (1) Allocation Branch (provision of public/merit goods), (2) Distribution Branch (fair equity and transfers), and (3) Stabilization Branch (maintaining full employment and price stability)."
  },
  {
    id: 66,
    test_id: 1,
    question: "The 'Laffer Curve' depicts the relationship between:",
    options: [
      "Tax rates and total tax revenue collected by the government",
      "Inflation and nominal interest rates",
      "Income inequality and per capita GDP",
      "Public debt and economic growth"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Fiscal Policy & Supply-Side Economics → Arthur Laffer Curve",
    explanation: "Arthur Laffer showed that tax revenue is zero at tax rates of 0% and 100%. Between these extremes lies a revenue-maximizing tax rate t*; beyond t*, increasing the tax rate discourages work and investment, shrinking the tax base and reducing total revenue."
  },
  {
    id: 67,
    test_id: 1,
    question: "In public finance, 'Fiscal Drag' refers to:",
    options: [
      "The automatic increase in tax burden as inflation pushes individuals into higher progressive tax brackets (Bracket Creep)",
      "The slowdown in debt servicing due to high interest rates",
      "Delays in parliamentary approval of the annual budget",
      "The negative impact of import tariffs on exports"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Fiscal Policy → Fiscal Drag & Bracket Creep",
    explanation: "Fiscal drag occurs when inflation increases nominal wages, pushing taxpayers into higher tax brackets under a progressive tax system. This raises the effective tax rate and dampens aggregate demand automatically."
  },
  {
    id: 68,
    test_id: 1,
    question: "The Free-Rider Problem in public goods arises fundamentally because of:",
    options: [
      "Non-excludability in consumption",
      "High positive marginal costs of production",
      "Government licensing quotas",
      "Diminishing returns to scale"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Market Failure → Non-Excludability & Free Riding",
    explanation: "Because pure public goods are non-excludable (impossible or prohibitively costly to prevent non-payers from enjoying the good), rational individuals have an incentive to understate their true preferences and free-ride on others' payments."
  },

  // --- UNIT 7: MONEY & BANKING (Q69 - Q78) ---
  {
    id: 69,
    test_id: 1,
    question: "In the Reserve Bank of India's monetary aggregates, Broad Money (M3) is defined as:",
    options: [
      "Currency with the public + Demand deposits with banks + Other deposits with RBI + Time deposits with the banking system (M1 + Time Deposits)",
      "Currency with public only",
      "Demand deposits with banks only",
      "Total Post Office savings deposits only"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Aggregates → Definition of M3 Broad Money (RBI)",
    explanation: "In RBI's classification: M1 (Narrow Money) = Currency with the public + Demand deposits with banking system + 'Other' deposits with RBI. M3 (Broad Money) = M1 + Time deposits with the banking system."
  },
  {
    id: 70,
    test_id: 1,
    question: "The Money Multiplier (m) relating High-Powered Money (H or Reserve Money) to Broad Money (M) is mathematically given by:",
    options: [
      "m = (1 + c) / (c + r), where c = Currency-Deposit Ratio and r = Reserve-Deposit Ratio",
      "m = c * r",
      "m = 1 / (c * r)",
      "m = (c - r) / (1 + c)"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Money Supply Determination → Money Multiplier Formula",
    explanation: "Money supply M = C + D = (c*D) + D = (1 + c)*D. High-powered money H = C + R = (c*D) + (r*D) = (c + r)*D. Dividing M by H yields the money multiplier: m = (1 + c) / (c + r)."
  },
  {
    id: 71,
    test_id: 1,
    question: "The 'Repo Rate' in central banking operations is the rate at which:",
    options: [
      "The RBI lends short-term liquidity to commercial banks against government securities collateral",
      "Commercial banks deposit excess funds with RBI",
      "Banks lend to their prime corporate customers",
      "The government borrows from international agencies"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Policy Instruments → Repo Rate (RBI)",
    explanation: "The Repo (Repurchase Option) Rate is the key policy interest rate at which the Reserve Bank of India provides overnight/short-term liquidity to commercial banks against the pledge of eligible government securities under the Liquidity Adjustment Facility (LAF)."
  },
  {
    id: 72,
    test_id: 1,
    question: "The Monetary Policy Committee (MPC) of the Reserve Bank of India operates under a statutory mandate of Flexible Inflation Targeting with a target of:",
    options: [
      "4% CPI Inflation with a tolerance band of +/- 2% (2% to 6%)",
      "8% WPI Inflation",
      "0% core inflation",
      "6% GDP deflator growth"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Framework → RBI Inflation Targeting Mandate (Section 45ZB)",
    explanation: "Under the amended RBI Act (2016) following the Urjit Patel Committee recommendations, the statutory MPC conducts monetary policy with the explicit objective of maintaining headline CPI inflation at 4% with an upper tolerance limit of 6% and lower tolerance limit of 2%."
  },
  {
    id: 73,
    test_id: 1,
    question: "The Fisher Effect equation states that the nominal interest rate (i) is equal to:",
    options: [
      "Real interest rate (r) plus expected inflation rate (π^e)",
      "Real interest rate divided by inflation",
      "Nominal wage multiplied by velocity",
      "Real GDP growth rate alone"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Interest Rate Theory → The Fisher Effect (Irving Fisher)",
    explanation: "Irving Fisher demonstrated that the nominal interest rate incorporates inflation expectations: i = r + π^e. When expected inflation increases by 1 percentage point, the nominal interest rate rises by 1 percentage point, leaving the real rate unchanged."
  },
  {
    id: 74,
    test_id: 1,
    question: "Under the Basel III capital adequacy framework, commercial banks are required to maintain a minimum Common Equity Tier 1 (CET1) ratio of:",
    options: [
      "4.5% of Risk-Weighted Assets (RWAs)",
      "12.0% of total loans",
      "1.0% of cash reserves",
      "15.0% of deposits"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Regulation → Basel III Capital Adequacy Norms",
    explanation: "Under Basel III global standards, banks must maintain a minimum Common Equity Tier 1 (CET1) capital ratio of 4.5% of risk-weighted assets, plus a 2.5% Capital Conservation Buffer, bringing total common equity requirements to 7.0%."
  },
  {
    id: 75,
    test_id: 1,
    question: "The Cash Reserve Ratio (CRR) mandates that commercial banks must hold a specified fraction of their Net Demand and Time Liabilities (NDTL) in the form of:",
    options: [
      "Cash balances with the Reserve Bank of India (earning zero interest)",
      "Unencumbered gold in their own vaults",
      "Equity shares in public sector enterprises",
      "Foreign currency deposits"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Statutory Reserve Requirements → Cash Reserve Ratio (CRR)",
    explanation: "Under Section 42(1) of the RBI Act 1934, CRR is the percentage of a bank's total Net Demand and Time Liabilities (NDTL) that it must maintain as liquid cash balances with the RBI. No interest is paid by the RBI on CRR balances."
  },
  {
    id: 76,
    test_id: 1,
    question: "According to the Cambridge Cash-Balance approach (Marshall, Pigou), the equation of exchange is expressed as:",
    options: [
      "M = k * P * Y, where k is the proportion of nominal income people desire to hold in money balances",
      "M * V = P * T",
      "P = M / V",
      "Y = C + I + G"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Quantity Theory of Money → Cambridge Cash Balance Equation",
    explanation: "The Cambridge school (Alfred Marshall, A.C. Pigou) focused on money demand rather than velocity of transactions: M_d = k*P*Y. Mathematically, Cambridge k is the reciprocal of Fisher's income velocity of money V (k = 1/V)."
  },
  {
    id: 77,
    test_id: 1,
    question: "The 'Standing Deposit Facility' (SDF), introduced by the RBI in 2022 as the floor of the LAF corridor, enables the central bank to:",
    options: [
      "Absorb excess liquidity from commercial banks without requiring the provision of government securities collateral",
      "Provide long-term loans for infrastructure projects",
      "Directly purchase corporate bonds on stock exchanges",
      "Print currency notes automatically"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Liquidity Management → Standing Deposit Facility (SDF)",
    explanation: "Introduced under Section 17 of the RBI Act in April 2022, the Standing Deposit Facility (SDF) allows the RBI to absorb overnight liquidity from banks at a rate 25 bps below the repo rate without the constraint of offering government collateral."
  },
  {
    id: 78,
    test_id: 1,
    question: "In financial economics, 'Moral Hazard' in banking occurs when:",
    options: [
      "Deposit insurance or government bailouts ('too-big-to-fail') induce banks to take excessive lending risks knowing losses are socialized",
      "Borrowers reveal private information to lenders prior to signing loan agreements",
      "Central banks raise reserve requirements",
      "Stock markets trade after regular business hours"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Asymmetric Information → Moral Hazard in Banking",
    explanation: "Moral hazard occurs after a contract is signed when the insured party changes behavior to take greater risks. If banks expect government bailouts or blanket deposit guarantees, they engage in excessively risky lending, privatizing profits while socializing losses."
  },

  // --- UNIT 8: DEVELOPMENT ECONOMICS (Q79 - Q88) ---
  {
    id: 79,
    test_id: 1,
    question: "In Arthur Lewis's Two-Sector Dual Economy Model, structural transformation occurs as surplus labor moves from agriculture to the modern capitalist sector at:",
    options: [
      "A constant institutional wage slightly higher than the agricultural subsistence level",
      "A rapidly escalating market wage",
      "Zero wages",
      "A wage determined exclusively by international commodity prices"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Dualism Models → Arthur Lewis Unlimited Supplies of Labour",
    explanation: "Sir Arthur Lewis (1954) showed that with disguised unemployment in the traditional agricultural sector (Marginal Productivity of Labour MPL ≈ 0), the industrial sector can hire unlimited labor at a constant institutional wage (typically ~30% above subsistence), generating capitalist profits for reinvestment."
  },
  {
    id: 80,
    test_id: 1,
    question: "The 'Big Push' theory of economic development proposed by Paul Rosenstein-Rodan emphasizes:",
    options: [
      "A comprehensive, simultaneous minimum-scale investment package across multiple complementary industries to overcome demand and infrastructure indivisibilities",
      "Developing agriculture exclusively before any industrial investment",
      "Relying entirely on foreign multinational corporations",
      "Gradual piecemeal investment in one export product at a time"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Development Strategies → Rosenstein-Rodan's Big Push Theory",
    explanation: "Paul Rosenstein-Rodan (1943) argued that due to indivisibilities in the production function, demand complementarities, and infrastructure requirements, developing countries need a coordinated 'Big Push' of large-scale simultaneous investments to achieve self-sustaining industrialization."
  },
  {
    id: 81,
    test_id: 1,
    question: "Albert Hirschman's Strategy of Unbalanced Growth advocates deliberately creating imbalances by prioritizing investments in sectors with:",
    options: [
      "High forward and backward linkages (e.g. steel, energy, transport)",
      "Zero linkage effects",
      "Pure subsistence farming only",
      "Imported luxury consumer goods"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Development Strategies → Albert Hirschman's Unbalanced Growth",
    explanation: "Albert O. Hirschman (1958) argued that developing nations lack decision-making capacity and capital for simultaneous balanced investment. Instead, governments should invest in core industries with high backward and forward linkages to stimulate induced private investment."
  },
  {
    id: 82,
    test_id: 1,
    question: "The Human Development Index (HDI) geometric composite index encompasses which three fundamental dimensions?",
    options: [
      "Health (Life Expectancy at Birth), Education (Mean & Expected Years of Schooling), and Standard of Living (GNI per capita in PPP$)",
      "GDP growth, Military budget, and Gold reserves",
      "Urbanization rate, Literacy rate, and Export earnings",
      "Calorie intake, Housing square footage, and Internet speed"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Measurement of Development → UNDP Human Development Index (HDI)",
    explanation: "Formulated by Mahbub ul Haq and Amartya Sen in 1990 for the UNDP, the HDI is the geometric mean of normalized indices measuring three key dimensions: a long and healthy life, knowledge, and a decent standard of living."
  },
  {
    id: 83,
    test_id: 1,
    question: "The Gini Coefficient, measuring income inequality from the Lorenz Curve, is defined as:",
    options: [
      "Area between the 45-degree Line of Perfect Equality and the Lorenz Curve divided by the total area under the Line of Perfect Equality (Area A / (Area A + Area B))",
      "Ratio of top 10% income to bottom 10% income",
      "Percentage of population living below poverty line",
      "Total GDP divided by total population"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Inequality Measurement → Gini Coefficient & Lorenz Curve",
    explanation: "The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality). It is calculated as the area between the line of perfect equality and the Lorenz curve (A) divided by the total triangular area under the line of equality (A + B)."
  },
  {
    id: 84,
    test_id: 1,
    question: "According to the Harrod-Domar Growth Model, the warranted growth rate (G_w) is determined by:",
    options: [
      "G_w = s / v, where s is the marginal propensity to save and v is the capital-output ratio",
      "G_w = s * v",
      "G_w = population growth rate plus inflation",
      "G_w = exports minus imports"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Growth Models → Harrod-Domar Warranted Rate of Growth",
    explanation: "In Roy Harrod's growth model, the warranted rate of growth (G_w = s / C_r = s / v) is the rate that fully utilizes the existing capital stock and leaves entrepreneurs satisfied with their investment decisions. If actual growth G deviates from G_w, instability occurs (knife-edge problem)."
  },
  {
    id: 85,
    test_id: 1,
    question: "The Foster-Greer-Thorbecke (FGT) class of poverty measures with parameter α = 2 corresponds to:",
    options: [
      "Poverty Severity Index (Squared Poverty Gap, giving greater weight to the poorest of the poor)",
      "Headcount Ratio (H)",
      "Poverty Gap Index (PG)",
      "Human Poverty Index"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Poverty Measurement → Foster-Greer-Thorbecke (FGT) Index",
    explanation: "In the FGT formula P_α = (1/N) * Σ ((z - y_i)/z)^α: when α = 0, it yields the Headcount Ratio (H); when α = 1, it yields the Poverty Gap Index (PG); when α = 2, it yields the Poverty Severity / Squared Poverty Gap, which satisfies Sen's transfer sensitivity axiom."
  },
  {
    id: 86,
    test_id: 1,
    question: "In Gunnar Myrdal's Theory of Circular and Cumulative Causation, the negative impact of an expanding rich core region on lagging periphery regions is termed the:",
    options: [
      "Backwash Effect",
      "Spread Effect",
      "Demonstration Effect",
      "Trickle-down Effect"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Regional Dualism → Gunnar Myrdal's Backwash vs Spread Effects",
    explanation: "Gunnar Myrdal (1957) explained that economic growth in prosperous regions pulls capital, skilled labor, and trade away from underdeveloped regions ('Backwash Effect'), exacerbating regional inequalities unless counterbalanced by positive 'Spread Effects'."
  },
  {
    id: 87,
    test_id: 1,
    question: "The 'Harris-Todaro Model' of rural-urban migration demonstrates that migration continues to occur despite high urban unemployment because migrants respond to:",
    options: [
      "The expected urban-rural wage differential (Expected Urban Wage = Actual Urban Minimum Wage * Probability of Securing Urban Employment)",
      "Guaranteed urban housing subsidies",
      "Lower cost of living in metropolitan areas",
      "Absolute equality in regional employment opportunities"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Rural-Urban Migration → Harris-Todaro Expected Wage Hypothesis",
    explanation: "John Harris and Michael Todaro (1970) proved that rural workers migrate based on expected rather than actual wage differentials. Even if urban unemployment is high, a high statutory minimum wage makes the expected urban income exceed rural agricultural wages."
  },
  {
    id: 88,
    test_id: 1,
    question: "According to W.W. Rostow's Stages of Economic Growth, which stage is characterized by a surge in investment (from 5% to >10% of NNP), rapid growth in leading manufacturing sectors, and political modernization?",
    options: [
      "The Take-off Stage",
      "The Traditional Society",
      "The Preconditions for Take-off",
      "The Age of High Mass-Consumption"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Stages of Growth → W.W. Rostow's Five Stages of Growth",
    explanation: "Walt Rostow identified five stages: (1) Traditional society, (2) Preconditions for take-off, (3) Take-off (where investment rate doubles and self-sustaining industrialization begins), (4) Drive to maturity, and (5) Age of high mass-consumption."
  },

  // --- UNIT 9: INDIAN ECONOMY (Q89 - Q100) ---
  {
    id: 89,
    test_id: 1,
    question: "The 15th Finance Commission of India (headed by N.K. Singh) recommended the vertical devolution of central divisible tax pool to states at:",
    options: [
      "41% (adjusted from 42% of 14th FC to accommodate the newly created UTs of Jammu & Kashmir and Ladakh)",
      "50%",
      "32%",
      "45%"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Fiscal Federalism in India → 15th Finance Commission Recommendations",
    explanation: "The 15th Finance Commission recommended a 41% share of the central divisible tax pool for states for the period 2021-26, retaining the 42% share recommended by the 14th FC minus 1% to provide for the Union Territories of Jammu & Kashmir and Ladakh."
  },
  {
    id: 90,
    test_id: 1,
    question: "In the calculation of the Consumer Price Index for Combined (CPI-C) in India with base year 2012=100, which commodity group holds the highest weight?",
    options: [
      "Food and Beverages (45.86%)",
      "Housing (10.07%)",
      "Fuel and Light (6.84%)",
      "Clothing and Footwear (6.53%)"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Price Indices → CPI Combined Weight Structure (MOSPI)",
    explanation: "In the CPI-Combined series (Base 2012=100) released by the National Statistical Office (NSO), 'Food and Beverages' has the largest weight of 45.86%, followed by 'Miscellaneous' (28.32%), 'Housing' (10.07%), 'Fuel and Light' (6.84%), and 'Clothing and Footwear' (6.53%)."
  },
  {
    id: 91,
    test_id: 1,
    question: "Under the Goods and Services Tax (GST) constitutional architecture in India, the GST Council is established under which article of the Constitution?",
    options: [
      "Article 279A",
      "Article 280",
      "Article 246",
      "Article 356"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Tax Reforms → GST Council & Article 279A",
    explanation: "The 101st Constitutional Amendment Act 2016 inserted Article 279A into the Constitution, empowering the President of India to constitute the GST Council, chaired by the Union Finance Minister and comprising state finance ministers."
  },
  {
    id: 92,
    test_id: 1,
    question: "The 'Mahalanobis Heavy Industry Strategy' of development was adopted in India during which Five-Year Plan?",
    options: [
      "Second Five-Year Plan (1956-1961)",
      "First Five-Year Plan (1951-1956)",
      "Fourth Five-Year Plan (1969-1974)",
      "Seventh Five-Year Plan (1985-1990)"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Planning History → P.C. Mahalanobis Model & Second Five-Year Plan",
    explanation: "The Second Five-Year Plan (1956-61) was based on Professor P.C. Mahalanobis's two-sector and four-sector growth model, which prioritized building domestic capital goods and heavy industries to achieve self-reliant growth."
  },
  {
    id: 93,
    test_id: 1,
    question: "The Tendulkar Committee (2009) recommended calculating poverty lines in India using which key methodological change?",
    options: [
      "Moving away from calorie-norm anchors to actual Household Consumer Expenditure on a uniform consumption basket encompassing food, education, and health (Mixed Reference Period)",
      "Using only asset ownership data from census records",
      "Fixing poverty lines equal to international $1.90 PPP poverty line",
      "Measuring only urban poverty"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Poverty Estimation in India → Suresh Tendulkar Committee (2009)",
    explanation: "The Suresh Tendulkar Committee abandoned the earlier 1993 calorie anchor (2400 kcal rural, 2100 kcal urban) and adopted a uniform Urban Poverty Line Basket (PLB) across rural and urban India using Mixed Reference Period (MRP) expenditure data including private health and education spending."
  },
  {
    id: 94,
    test_id: 1,
    question: "Under the Pradhan Mantri Jan Dhan Yojana (PMJDY), financial inclusion in India was achieved through which trinity?",
    options: [
      "JAM Trinity (Jan Dhan accounts, Aadhaar biometric identity, and Mobile connectivity)",
      "Gold, Land, and Real Estate Trinity",
      "SEBI, RBI, and IRDAI Trinity",
      "Post Offices, Microfinance, and Cooperatives"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Financial Inclusion & Direct Benefit Transfer → JAM Trinity",
    explanation: "The JAM Trinity links Jan Dhan zero-balance bank accounts, Aadhaar 12-digit unique biometric identification numbers, and Mobile telephony, enabling Direct Benefit Transfers (DBT) without intermediary leakage."
  },
  {
    id: 95,
    test_id: 1,
    question: "In India's Balance of Payments accounts, Foreign Direct Investment (FDI) and External Commercial Borrowings (ECB) are recorded under the:",
    options: [
      "Capital Account",
      "Current Account (Merchandise Trade)",
      "Current Account (Invisibles)",
      "Foreign Aid Grant Account"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "External Sector & BoP → Current vs Capital Account Components",
    explanation: "In BoP accounting: The Current Account records trade in goods, services (software, tourism), remittances, and investment income. The Capital Account records international asset transactions including FDI, Foreign Portfolio Investment (FPI), and External Commercial Borrowings (ECB)."
  },
  {
    id: 96,
    test_id: 1,
    question: "The Fiscal Responsibility and Budget Management (FRBM) Act 2003 was enacted in India with the statutory objective to:",
    options: [
      "Institutionalize fiscal discipline, eliminate revenue deficit, and cap the fiscal deficit at 3% of GDP",
      "Eliminate all direct corporate taxes",
      "Transfer monetary policy powers to state assemblies",
      "Abolish central government public borrowing"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Fiscal Policy Legislation → FRBM Act 2003",
    explanation: "The FRBM Act 2003 established medium-term fiscal targets to ensure intergenerational equity, eliminate revenue deficit, reduce fiscal deficit to sustainable limits (3% of GDP), and place caps on central government debt."
  },
  {
    id: 97,
    test_id: 1,
    question: "According to the Periodic Labour Force Survey (PLFS), the 'Usual Principal and Subsidiary Status' (UPSS) measure of employment classifies a person as employed if they worked for:",
    options: [
      "At least 30 days during the reference period of 365 days preceding the survey",
      "At least 1 hour on every single day of the year",
      "A continuous stretch of 180 days in manufacturing only",
      "Full-time in an organized public sector enterprise"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Employment Measurement in India → PLFS Activity Status Definitions",
    explanation: "In NSSO/PLFS surveys, Usual Principal and Subsidiary Status (UPSS) includes persons who either worked for a major part of the preceding 365 days (principal status) or engaged in an economic activity for at least 30 days as a subsidiary capacity."
  },
  {
    id: 98,
    test_id: 1,
    question: "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on January 1, 2015, operating primarily as a:",
    options: [
      "Think Tank promoting Cooperative and Competitive Federalism with bottom-up planning",
      "Constitutional body with discretionary financial fund allocation powers",
      "Statutory regulator of commercial banks",
      "Pricing authority for agricultural commodities"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Planning Reforms → NITI Aayog Structure & Vision",
    explanation: "Established via a Union Cabinet resolution on January 1, 2015, NITI Aayog acts as a policy think tank fostering cooperative federalism through structured state engagement and bottom-up strategic policy design, without holding financial allocation powers."
  },

  // --- UNIT 10: ENVIRONMENTAL ECONOMICS (Q99 - Q100) ---
  {
    id: 99,
    test_id: 1,
    question: "The 'Coase Theorem' demonstrates that in the presence of externalities, private bargaining will lead to a Pareto efficient outcome without government intervention if:",
    options: [
      "Property rights are well-defined, transaction costs are zero (or negligible), and there are no wealth/income effects",
      "The government imposes mandatory price ceilings",
      "Firms operate under monopoly market structures",
      "The number of affected parties is infinitely large"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Externalities & Property Rights → The Coase Theorem (Ronald Coase)",
    explanation: "Ronald Coase (1960) proved that as long as property rights are clearly assigned and transaction costs are negligible, private parties can bargain to internalize the externality and achieve an efficient allocation regardless of which party initially owns the rights."
  },
  {
    id: 100,
    test_id: 1,
    question: "The 'Environmental Kuznets Curve' (EKC) hypothesis posits an inverted-U shaped relationship between:",
    options: [
      "Environmental degradation (pollution levels) and per capita income growth",
      "Carbon emissions and the price of renewable energy",
      "Population density and agricultural soil fertility",
      "Deforestation and the rate of interest"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Sustainable Development → Environmental Kuznets Curve (EKC)",
    explanation: "The Environmental Kuznets Curve hypothesis suggests that in the early stages of industrial development, pollution increases with rising per capita GDP. However, beyond a threshold income level, technological advances, structural shifts toward services, and higher environmental demand cause pollution to decline, tracing an inverted-U curve."
  }
];
