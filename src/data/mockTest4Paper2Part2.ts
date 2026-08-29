import { Question } from '../types';

export const mockTest4Paper2Part2Questions: Question[] = [
  // --- UNIT 6: PUBLIC ECONOMICS (Q101 - Q110) ---
  {
    id: 101,
    test_id: 4,
    question: "The Samuelson Condition for the optimal provision of a pure public good requires that:",
    options: [
      "The sum of marginal rates of substitution equals the marginal rate of transformation: ∑(MRS_xy^i) = MRT_xy",
      "MRS_xy^A = MRS_xy^B = MRT_xy",
      "Total taxes collected equal total public expenditure",
      "Marginal cost of public good equals average private tax rate"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Goods Theory → Samuelson Condition (1954)",
    explanation: "Paul Samuelson (1954) established that because public goods are non-rival, the social marginal benefit is the vertical summation of individual marginal evaluations ∑MRS_i = MRT."
  },
  {
    id: 102,
    test_id: 4,
    question: "The Tiebout Hypothesis ('Voting with one's feet', Charles Tiebout 1956) suggests that the efficient provision of local public goods is achieved when:",
    options: [
      "Jurisdictions compete and fully mobile consumer-voters sort themselves into communities matching their public good/tax preferences",
      "The central government mandates uniform property tax rates nationwide",
      "Local councils prohibit interstate migration",
      "Subsidies are eliminated across all municipalities"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Fiscal Federalism → Tiebout Hypothesis (1956)",
    explanation: "Tiebout showed that spatial consumer mobility across local jurisdictions with diverse tax/public good bundles reveals preferences, yielding market-like allocative efficiency."
  },
  {
    id: 103,
    test_id: 4,
    question: "According to the Ramsey Rule of Optimal Commodity Taxation, to minimize deadweight loss across independent goods, tax rates should be set:",
    options: [
      "Inversely proportional to the price elasticity of demand for the commodity (Inverse Elasticity Rule)",
      "Directly proportional to price elasticity of demand",
      "Equally across all luxury and essential goods",
      "Zero on imported goods"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Optimal Taxation → Ramsey Rule (Frank Ramsey, 1927)",
    explanation: "Ramsey (1927) proved that to minimize excess burden, tax rates must be set inversely proportional to price elasticity of demand: t_i / t_j = ε_j / ε_i."
  },
  {
    id: 104,
    test_id: 4,
    question: "The Peacock-Wiseman Hypothesis of public expenditure growth identifies three structural effects following macroeconomic crises/wars as:",
    options: [
      "Displacement Effect, Inspection Effect, and Concentration Effect",
      "Crowding-out Effect, Ratchet Effect, and Solow Residual",
      "Multiplier Effect, Accelerator Effect, and Super-Multiplier",
      "Liquidity Effect, Fisher Effect, and Pigou Effect"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Public Expenditure Theories → Peacock-Wiseman Hypothesis",
    explanation: "Alan Peacock and Jack Wiseman (1961) observed that public expenditure in the UK grew in step-like spurts during crises due to displacement, inspection, and centralization/concentration effects."
  },
  {
    id: 105,
    test_id: 4,
    question: "The Coase Theorem (Ronald Coase, 1960) states that in the presence of externalities, private bargaining will lead to an efficient outcome provided:",
    options: [
      "Property rights are clearly assigned and transaction costs are zero (or negligible)",
      "The government imposes a Pigouvian effluent tax",
      "Courts ban the polluting activity completely",
      "All firms operate under monopolistic competition"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Externalities & Property Rights → Coase Theorem",
    explanation: "Ronald Coase proved that if property rights are well-defined and enforceable with zero transaction costs, affected parties will bargain to a Pareto efficient allocation regardless of initial assignment."
  },
  {
    id: 106,
    test_id: 4,
    question: "The Laffer Curve depicts the theoretical relationship between:",
    options: [
      "Tax rates and total government tax revenue, showing an optimal revenue-maximizing tax rate t*",
      "Inflation rate and unemployment rate (Phillips Curve)",
      "Income inequality and per capita GDP (Kuznets Curve)",
      "Tariff rates and terms of trade"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Fiscal Policy & Supply-Side Economics → Laffer Curve",
    explanation: "Arthur Laffer illustrated that beyond a certain tax rate t*, higher tax rates disincentivize work, investment, and compliance, causing total tax revenue to contract toward zero."
  },
  {
    id: 107,
    test_id: 4,
    question: "In public finance, a tax is strictly defined as 'Progressive' if:",
    options: [
      "The average tax rate increases as the taxpayer's income increases (Marginal Tax Rate > Average Tax Rate)",
      "Everyone pays the exact same flat dollar amount",
      "The tax burden falls disproportionately on low-income earners",
      "The tax is levied solely on corporate dividends"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Tax Structures → Progressive vs Regressive Taxation",
    explanation: "A progressive tax structure has an increasing average tax rate with respect to income base, which requires the marginal tax rate to exceed the average tax rate (ATR < MTR)."
  },
  {
    id: 108,
    test_id: 4,
    question: "Wagner's Law of Increasing State Activity posits that:",
    options: [
      "As real per capita income rises in an industrializing economy, the share of the public sector in GDP expands more than proportionately",
      "Government spending decreases with economic modernization",
      "Fiscal deficits must always remain below 3% of GDP",
      "Public debt converges to zero under steady-state growth"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Easy",
    concept: "Public Expenditure Growth → Adolph Wagner's Law (1893)",
    explanation: "Adolph Wagner observed an empirical relationship where modern economic growth fosters increased administrative complexity, social friction, and income-elastic demand for education and infrastructure."
  },
  {
    id: 109,
    test_id: 4,
    question: "A Pigouvian Tax designed to internalize a negative production externality should be set equal to:",
    options: [
      "The Marginal External Cost (MEC) evaluated at the socially optimal output level",
      "Total average cost of the polluting firm",
      "Total revenue of the industry",
      "Zero"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Market Failure & Corrections → Pigouvian Corrective Tax",
    explanation: "Arthur Pigou (1920) demonstrated that setting a per-unit tax equal to Marginal External Cost (MEC) shifts private marginal cost (PMC) to align with social marginal cost (SMC = PMC + MEC)."
  },
  {
    id: 110,
    test_id: 4,
    question: "Under the 16th Finance Commission of India (chaired by Dr. Arvind Panagariya), its operational recommendations cover which award period?",
    options: [
      "2026-27 to 2030-31 (5-year period starting April 1, 2026)",
      "2020-21 to 2024-25",
      "2021-22 to 2025-26",
      "2025-26 to 2029-30"
    ],
    correct_answer: 0,
    topic: "Public Economics",
    difficulty: "Moderate",
    concept: "Indian Fiscal Federalism → 16th Finance Commission Terms",
    explanation: "The 16th Finance Commission was constituted under Article 280 of the Constitution under the chairmanship of Dr. Arvind Panagariya to make recommendations for the 5-year award period from April 1, 2026 to March 31, 2031."
  },

  // --- UNIT 7: MONEY & BANKING (Q111 - Q120) ---
  {
    id: 111,
    test_id: 4,
    question: "The High-Powered Money (Reserve Money or M0) in the Reserve Bank of India's monetary framework comprises:",
    options: [
      "Currency in Circulation + Bankers' Deposits with RBI + Other Deposits with RBI",
      "Currency with public + Demand deposits with banking system (M1)",
      "M1 + Time deposits with banking system (M3)",
      "Net Foreign Exchange Assets alone"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Aggregates (RBI) → Reserve Money M0 Components",
    explanation: "M0 (Reserve Money/Monetary Base) = Currency in Circulation + Bankers' Deposits with RBI + Other Deposits with RBI. It serves as the base for credit creation."
  },
  {
    id: 112,
    test_id: 4,
    question: "The Money Multiplier (m) relating Broad Money M3 to Reserve Money M0 is given by the formula:",
    options: [
      "m = (1 + c) / (c + r), where c is currency-deposit ratio and r is reserve-deposit ratio",
      "m = c / r",
      "m = 1 / (c * r)",
      "m = (c + r) / (1 + c)"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Money Creation → Money Multiplier Formulation",
    explanation: "The money multiplier formula is m = (1 + c) / (c + r), where c = C/D and r = R/D. When either currency leakage or required reserve ratio increases, the multiplier contracts."
  },
  {
    id: 113,
    test_id: 4,
    question: "Under the Liquidity Adjustment Facility (LAF) corridor in India, the 'Standing Deposit Facility' (SDF) rate operates as:",
    options: [
      "The non-collateralized floor of the LAF corridor for absorbing excess liquidity from banks",
      "The ceiling rate for emergency liquidity borrowing (MSF)",
      "The benchmark interest rate for agricultural credit",
      "The penal interest rate on defaulted commercial paper"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "RBI Monetary Policy Instruments → Standing Deposit Facility (SDF)",
    explanation: "Introduced in April 2022, the SDF allows RBI to absorb excess liquidity from commercial banks without requiring government collateral, serving as the floor of the policy corridor at Repo - 25 bps."
  },
  {
    id: 114,
    test_id: 4,
    question: "Milton Friedman's Restatement of the Quantity Theory of Money (1956) conceptualizes the demand for money as:",
    options: [
      "A stable demand for an asset or capital good determined by total wealth (human and non-human), expected yields on bonds, equities, commodities, and inflation",
      "A mechanical transaction velocity identity",
      "A speculative liquidity trap phenomenon only",
      "An unstable random walk"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Monetary Economics → Friedman's Modern Quantity Theory (1956)",
    explanation: "Friedman treated money as a durable consumer asset yielding utility of liquidity, formulating money demand as a stable multivariate function of permanent income, wealth composition, and relative yields."
  },
  {
    id: 115,
    test_id: 4,
    question: "The Basel III Capital Adequacy Framework requires scheduled commercial banks to maintain a minimum Common Equity Tier 1 (CET1) ratio of:",
    options: [
      "4.5% (plus a Capital Conservation Buffer of 2.5%, totaling 7.0%)",
      "2.0%",
      "12.0%",
      "15.0%"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Banking Regulation → Basel III Capital Adequacy Norms",
    explanation: "Basel III norms mandate a minimum CET1 ratio of 4.5% of risk-weighted assets (RWA) alongside a Capital Conservation Buffer (CCB) of 2.5%, bringing minimum tier 1 core equity to 7%."
  },
  {
    id: 116,
    test_id: 4,
    question: "The Monetary Policy Committee (MPC) of the Reserve Bank of India consists of how many members, and who holds the casting vote in case of a tie?",
    options: [
      "6 members (3 RBI + 3 external Government appointees); RBI Governor has the casting vote",
      "5 members; Finance Minister holds casting vote",
      "8 members; Chief Economic Advisor holds casting vote",
      "4 members; Deputy Governor holds casting vote"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Monetary Framework → RBI MPC Composition & Voting",
    explanation: "Under Section 45ZB of the amended RBI Act 1934, the MPC comprises 6 members (3 from RBI, 3 appointed by Central Government), with the RBI Governor acting as ex-officio Chairperson with a casting vote."
  },
  {
    id: 117,
    test_id: 4,
    question: "In Fisher's Equation of Exchange MV = PT, the 'Cambridge Cash-Balance Approach' (Marshall, Pigou, Robertson) reformulated money demand as:",
    options: [
      "M_d = k * P * Y, where k represents the fraction of annual nominal income people desire to hold as money balances (k = 1/V)",
      "M_d = L(r)",
      "M_d = P * Q / V",
      "M_d = e^(-r*t)"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Classical Monetary Theory → Cambridge Cash-Balance Approach",
    explanation: "Cambridge economists Alfred Marshall and A.C. Pigou focused on money as a store of value: M_d = k*P*Y, where k is mathematically equivalent to the inverse of income velocity (k = 1/V)."
  },
  {
    id: 118,
    test_id: 4,
    question: "What is 'Headline Inflation' as measured and targeted in India's flexible inflation targeting framework?",
    options: [
      "Consumer Price Index (Combined) All-India headline inflation targeted at 4% with a tolerance band of +/- 2%",
      "Wholesale Price Index (WPI) inflation targeting at 5%",
      "GDP Deflator targeted at 3%",
      "Core inflation excluding only energy items"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Easy",
    concept: "Inflation Targeting → CPI-Combined Target (RBI Act)",
    explanation: "In 2016, India adopted Flexible Inflation Targeting targeting CPI (Combined) at 4% with a statutory band of 2% to 6% (4 +/- 2%)."
  },
  {
    id: 119,
    test_id: 4,
    question: "In the Term Structure of Interest Rates, the 'Expectations Hypothesis' states that long-term bond yields reflect:",
    options: [
      "The geometric average of current and expected future short-term interest rates",
      "Pure liquidity risk premiums only",
      "Institutional market segmentation across maturity bands",
      "The central bank cash reserve ratio"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Term Structure of Interest Rates → Pure Expectations Hypothesis",
    explanation: "The Pure Expectations Theory posits that long-term bond yields equal an average of expected future short rates, so yield curve slope reflects expected monetary policy changes."
  },
  {
    id: 120,
    test_id: 4,
    question: "Non-Performing Assets (NPAs) in the Indian banking system are categorized as 'Sub-Standard Assets' when they remain an NPA for a period:",
    options: [
      "Less than or equal to 12 months",
      "Exceeding 12 months but less than 3 years (Doubtful)",
      "Identified as uncollectible by auditors (Loss)",
      "Less than 30 days (SMA-0)"
    ],
    correct_answer: 0,
    topic: "Money & Banking",
    difficulty: "Moderate",
    concept: "Asset Classification (RBI) → Sub-Standard vs Doubtful NPAs",
    explanation: "RBI asset classification: Standard Asset (regular); Sub-standard (NPA for ≤ 12 months); Doubtful (NPA > 12 months); Loss Asset (uncollectible/written off)."
  },

  // --- UNIT 8: GROWTH & DEVELOPMENT ECONOMICS (Q121 - Q130) ---
  {
    id: 121,
    test_id: 4,
    question: "In Arthur Lewis's Two-Sector Dual Economy Model (1954), economic development occurs primarily through:",
    options: [
      "The transfer of surplus labor with zero marginal productivity from the subsistence agricultural sector to the modern industrial sector, reinvesting capitalist profits",
      "Exclusive reliance on foreign foreign exchange loans",
      "Import substitution of consumer electronics",
      "State expropriation of all private capital"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Dual Economy Growth → Arthur Lewis Surplus Labor Model (1954)",
    explanation: "Lewis (Nobel 1979) modeled how capital accumulation in the modern capitalist sector absorbs disguisedly unemployed agricultural labor at an institutional wage, expanding capitalist surplus and reinvestment."
  },
  {
    id: 122,
    test_id: 4,
    question: "The Harrod-Domar Growth Model condition for stable, non-inflationary growth requires the equality of which three growth rates?",
    options: [
      "Actual Growth Rate (G) = Warranted Growth Rate (G_w) = Natural Growth Rate (G_n)",
      "Nominal Rate = Real Rate = Inflation Rate",
      "Savings Rate = Depreciation Rate = Tax Rate",
      "Population Growth = Tech Growth = Money Growth"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Growth Dynamics → Harrod-Domar 'Knife-Edge' Equilibrium",
    explanation: "Harrod's Knife-Edge equilibrium occurs when G = G_w = G_n (where G_w = s/v and G_n = n + λ). If G > G_w, the economy enters cumulative demand inflation; if G < G_w, it enters depression."
  },
  {
    id: 123,
    test_id: 4,
    question: "In Paul Romer's Endogenous Growth Model (1990), sustained long-run growth is generated endogenously through:",
    options: [
      "Investments in R&D producing non-rival ideas and technological designs that exhibit increasing returns to scale",
      "Exogenous technological shocks falling like manna from heaven",
      "Diminishing returns to physical capital accumulation",
      "Strict population control mandates"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Endogenous Growth Theory → Romer's Non-Rival Ideas Model (1990)",
    explanation: "Paul Romer (Nobel 2018) treated technology as an endogenous accumulation of non-rival designs protected by temporary patent monopolies, generating economy-wide increasing returns."
  },
  {
    id: 124,
    test_id: 4,
    question: "The Human Development Index (HDI) calculated by UNDP incorporates geometric means across which three core dimensions?",
    options: [
      "Long and healthy life (Life expectancy at birth), Knowledge (Mean & Expected years of schooling), and Decent standard of living (GNI per capita in PPP $)",
      "Per capita income, Energy consumption, and Export share",
      "Caloric intake, Hospital beds per capita, and Literacy rate",
      "Unemployment rate, Carbon emissions, and Infant mortality"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Human Development Measurement → UNDP HDI Dimensions",
    explanation: "Formulated by Mahbub ul Haq and Amartya Sen (1990), HDI is the geometric mean of normalized indices for Life Expectancy, Education (Mean + Expected years), and Log GNI per capita (PPP $)."
  },
  {
    id: 125,
    test_id: 4,
    question: "The 'Big Push' theory of economic development formulated by Paul Rosenstein-Rodan (1943) emphasizes that industrialization requires:",
    options: [
      "A massive, coordinated, simultaneous investment program across complementary consumer goods industries to overcome demand and market indivisibilities",
      "Gradual piecemeal investments in small cottage industries only",
      "Immediate elimination of all tariffs",
      "Exclusive focus on raw mineral extraction"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Balanced Growth Theories → Rosenstein-Rodan's Big Push (1943)",
    explanation: "Rosenstein-Rodan argued that due to demand externalities and indivisibility of infrastructure (social overhead capital), simultaneous balanced investment across multiple industries creates mutual markets."
  },
  {
    id: 126,
    test_id: 4,
    question: "Albert Hirschman's Strategy of Unbalanced Growth (1958) recommends deliberate sequential investments in sectors with:",
    options: [
      "Maximum Backward and Forward Linkages to induce secondary private investments",
      "Zero linkages and absolute self-sufficiency",
      "The lowest capital-output ratios only",
      "Pure export specialization in agricultural raw materials"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Unbalanced Growth Strategy → Hirschman's Linkage Effects (1958)",
    explanation: "Hirschman argued that developing economies lack decision-making resources and should invest in key industries with strong backward linkages (input demand) and forward linkages (output supply)."
  },
  {
    id: 127,
    test_id: 4,
    question: "The Harris-Todaro Model of Rural-Urban Migration (1970) explains persistent rural-to-urban migration despite high urban unemployment because migration is driven by:",
    options: [
      "Differences in EXPECTED urban real wages (Actual minimum wage multiplied by probability of obtaining a modern job) relative to rural agricultural earnings",
      "Government relocation subsidies",
      "Identical rural and urban wages",
      "Forced evictions in agrarian zones"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Rural-Urban Migration → Harris-Todaro Expected Wage Model (1970)",
    explanation: "Harris and Todaro demonstrated that rural workers migrate as long as the expected urban wage E(W_u) = W_u * (L_u / E_u) exceeds the rural wage W_r, explaining persistent urban informal slums."
  },
  {
    id: 128,
    test_id: 4,
    question: "The Kuznets Inverted-U Hypothesis depicts the relationship between economic development and income inequality as:",
    options: [
      "Inequality first rises during the initial stages of industrialization and then declines as average per capita income reaches higher thresholds",
      "Inequality decreases monotonically from day one",
      "Inequality remains perfectly constant across all development stages",
      "Inequality follows a U-shaped pattern, falling first and then rising permanently"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Easy",
    concept: "Inequality & Development → Simon Kuznets Inverted-U Curve",
    explanation: "Simon Kuznets (1955) hypothesized that inter-sectoral labor shifts from low-inequality agriculture to high-inequality urban manufacturing causes inequality to rise initially before democratic and educational equalizations reduce it."
  },
  {
    id: 129,
    test_id: 4,
    question: "The Multidimensional Poverty Index (MPI) developed by OPHI and UNDP evaluates acute poverty across which three core dimensions?",
    options: [
      "Health (Nutrition, Child mortality), Education (Years of schooling, Attendance), and Standard of Living (Cooking fuel, Sanitation, Drinking water, Electricity, Housing, Assets)",
      "Daily caloric intake, Bank deposits, and Smartphone ownership",
      "Income below $1.90, Road connectivity, and Life insurance",
      "Literacy, Vehicle ownership, and Tax compliance"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Poverty Measurement → Alkire-Foster Multidimensional Poverty Index",
    explanation: "The global MPI uses the Alkire-Foster method across 10 indicators in 3 equally weighted dimensions (Health, Education, and Living Standards) to identify overlapping deprivations at the household level."
  },
  {
    id: 130,
    test_id: 4,
    question: "In Gunnar Myrdal's Cumulative Causation Model (1957), regional growth disparities widen when:",
    options: [
      "Unfavorable 'Backwash Effects' (capital and skilled labor out-migration from lagging regions) outweigh favorable 'Spread Effects'",
      "Spread effects are perfectly symmetric across all territories",
      "Free market trade automatically equalizes regional wages",
      "The central government eliminates all interstate duties"
    ],
    correct_answer: 0,
    topic: "Development Economics",
    difficulty: "Moderate",
    concept: "Regional Inequality → Gunnar Myrdal's Cumulative Causation (1957)",
    explanation: "Myrdal showed that market forces tend to increase rather than decrease regional inequalities: growth poles drain resources from the periphery (backwash effects) faster than growth diffuses outwards (spread effects)."
  },

  // --- UNIT 9: ENVIRONMENTAL ECONOMICS & DEMOGRAPHY (Q131 - Q140) ---
  {
    id: 131,
    test_id: 4,
    question: "The Environmental Kuznets Curve (EKC) hypothesis posits an inverted-U relationship between:",
    options: [
      "Environmental degradation (pollution emissions per capita) and per capita income growth",
      "Carbon tax rates and total government revenues",
      "Birth rates and death rates over demographic transition",
      "Deforestation rates and international export tariffs"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Environmental Economics → Environmental Kuznets Curve (EKC)",
    explanation: "The EKC hypothesis suggests that pollution increases during initial industrialization due to scale effects, but later declines as economies shift toward cleaner service sectors, green technology, and environmental regulation."
  },
  {
    id: 132,
    test_id: 4,
    question: "The Contingent Valuation Method (CVM) is a stated-preference non-market valuation technique used to measure:",
    options: [
      "Willingness to Pay (WTP) or Willingness to Accept (WTA) for environmental preservation using structured hypothetical surveys",
      "The property price differential caused by proximity to parks (Hedonic Pricing)",
      "Fuel costs expended to visit national recreational parks (Travel Cost Method)",
      "The market value of timber output"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Valuation of Non-Market Goods → Contingent Valuation Method (CVM)",
    explanation: "CVM directly asks individuals in survey scenarios how much they would be willing to pay (WTP) for environmental amenities or willing to accept (WTA) in compensation for environmental damage."
  },
  {
    id: 133,
    test_id: 4,
    question: "In the Theory of Demographic Transition, 'Stage 2' (Early Expanding Stage) is characterized by:",
    options: [
      "High birth rates combined with rapidly declining death rates, resulting in rapid population explosion",
      "High birth rates and high fluctuating death rates (Stage 1)",
      "Low birth rates and low death rates (Stage 4)",
      "Death rates exceeding birth rates (Negative population growth)"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Demographic Transition Theory → Four Stages of Population Growth",
    explanation: "In Stage 2, improvements in sanitation, food supply, and public health cause the mortality rate to plunge while cultural birth rates remain stubbornly high, causing rapid population growth."
  },
  {
    id: 134,
    test_id: 4,
    question: "The 'Tragedy of the Commons' (Garrett Hardin, 1968) describes the economic phenomenon where:",
    options: [
      "Open-access Common Pool Resources (rival and non-excludable) are over-exploited and degraded because individual users ignore the negative congestion externalities imposed on others",
      "Private property rights lead to under-production of manufactured goods",
      "Pure public goods are over-supplied by competitive markets",
      "Government regulatory quotas produce artificial shortages"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Market Failure & Common Property → Tragedy of the Commons (Hardin)",
    explanation: "Hardin demonstrated that open-access resources (fisheries, pastures, groundwater) suffer from depletion because individual users capture all personal benefits while social degradation costs are shared by all."
  },
  {
    id: 135,
    test_id: 4,
    question: "Elinor Ostrom's Nobel Prize-winning research (1990) demonstrated that the Tragedy of the Commons can be successfully resolved through:",
    options: [
      "Self-governing, community-based institutional arrangements with clear boundaries, local monitoring, and graduated sanctions without state privatization",
      "Complete state nationalization of all communal forests",
      "Exclusive conversion into private corporate monopolies",
      "Total prohibition of resource usage"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Governing the Commons → Elinor Ostrom's 8 Design Principles (1990)",
    explanation: "Elinor Ostrom (Nobel 2009) documented worldwide empirical evidence that local user communities establish sustainable common-pool resource governance without centralized command or full privatization."
  },
  {
    id: 136,
    test_id: 4,
    question: "In demography, the 'Total Fertility Rate' (TFR) is defined as:",
    options: [
      "The average number of children a woman would bear over her reproductive lifespan (ages 15-49) based on current age-specific fertility rates",
      "The total number of live births per 1,000 population per year (Crude Birth Rate)",
      "The percentage of female children surviving past age five",
      "The ratio of male to female births in a calendar year"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Demographic Measures → Total Fertility Rate (TFR) Definition",
    explanation: "TFR measures the synthetic lifetime fertility of a cohort of women under prevailing age-specific fertility rates. The standard population replacement level TFR is 2.1 children per woman."
  },
  {
    id: 137,
    test_id: 4,
    question: "The 'Safe Minimum Standard' (SMS) approach in environmental economics advocates for:",
    options: [
      "Preserving critical ecological assets and endangered species against irreversible extinction unless the social opportunity costs of doing so are intolerably high",
      "Allowing market prices to dictate species extinction thresholds",
      "Maximizing industrial deforestation until GDP targets are met",
      "Setting carbon emissions to zero immediately across all sectors"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Conservation Economics → Safe Minimum Standard (Ciriacy-Wantrup)",
    explanation: "Proposed by S.V. Ciriacy-Wantrup and developed by Richard Bishop, SMS provides an operational conservation rule that prevents catastrophic ecological irreversibility under uncertainty."
  },
  {
    id: 138,
    test_id: 4,
    question: "The 'Hedonic Pricing Method' estimates the monetary value of environmental amenities (such as clean air or silence) by analyzing:",
    options: [
      "Property price differentials in real estate markets attributable to varying local environmental quality attributes",
      "Direct laboratory experiments on human lung capacity",
      "National defense budgets",
      "Agricultural fertilizer market transactions"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Non-Market Valuation → Hedonic Property Price Model",
    explanation: "The Hedonic method decomposes the market price of housing into structural characteristics (size, bedrooms) and location-specific environmental attributes (ambient air pollution, green views, noise)."
  },
  {
    id: 139,
    test_id: 4,
    question: "The 'Demographic Dividend' represents an accelerated window of economic growth potential created when:",
    options: [
      "The proportion of the working-age population (15-64 years) rises significantly relative to the non-working dependent population (under 15 and 65+)",
      "The crude death rate exceeds the crude birth rate",
      "Old-age pension liabilities consume more than 50% of the state budget",
      "All tertiary education is subsidized through deficit financing"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Easy",
    concept: "Population & Growth → Demographic Dividend Dynamics",
    explanation: "The demographic dividend arises when fertility rates drop, shrinking youth dependency while the working-age cohort bulges, boosting labor supply, savings, and productive investment."
  },
  {
    id: 140,
    test_id: 4,
    question: "In the context of the UN Framework Convention on Climate Change (UNFCCC), 'Carbon Border Adjustment Mechanism' (CBAM) refers to:",
    options: [
      "A carbon tariff levied on carbon-intensive imports into a jurisdiction to prevent carbon leakage and level the playing field with domestic producers subject to carbon taxes",
      "An unconditional financial grant awarded to fossil fuel producers",
      "A maritime shipping tax on all fishing vessels",
      "A subsidy for natural gas exploration"
    ],
    correct_answer: 0,
    topic: "Environmental Economics",
    difficulty: "Moderate",
    concept: "Climate Policy & Trade → Carbon Border Adjustment Mechanism (CBAM)",
    explanation: "CBAM (such as the EU's mechanism) applies a tariff equal to embedded carbon emissions on imports from countries with less stringent carbon pricing, preventing production relocation (carbon leakage)."
  },

  // --- UNIT 10: INDIAN ECONOMY (Q141 - Q150) ---
  {
    id: 141,
    test_id: 4,
    question: "According to the National Family Health Survey (NFHS-5, 2019-21) data, India's Total Fertility Rate (TFR) for all-India dropped below the replacement level of 2.1 to:",
    options: [
      "2.0 children per woman (1.6 in urban areas, 2.1 in rural areas)",
      "2.4 children per woman",
      "1.8 children per woman across all states",
      "2.6 children per woman"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Indian Demography → NFHS-5 Total Fertility Rate Findings",
    explanation: "NFHS-5 recorded that India's national TFR declined from 2.2 in NFHS-4 to 2.0 children per woman, falling below the replacement rate (2.1), reflecting demographic stabilization."
  },
  {
    id: 142,
    test_id: 4,
    question: "The NITI Aayog's National Multidimensional Poverty Index (National MPI) Baseline & Progress Reports use which poverty identification methodology?",
    options: [
      "Alkire-Foster methodology with 12 indicators spanning Health, Education, and Standard of Living (adding Maternal Health and Bank Accounts)",
      "Tendulkar Committee daily consumption calorie cutoff",
      "Rangarajan Committee nutritional expenditure basket",
      "World Bank $2.15 absolute poverty headcount"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Poverty Estimation in India → NITI Aayog National MPI",
    explanation: "NITI Aayog's MPI aligns with the global Alkire-Foster method, utilizing 12 indicators (retaining the 10 global indicators and adding Maternal Health and Bank Account ownership)."
  },
  {
    id: 143,
    test_id: 4,
    question: "Under the Goods and Services Tax (GST) constitutional architecture in India, decisions in the GST Council require a majority of:",
    options: [
      "Not less than three-fourths (75%) of the weighted votes of members present and voting (Center holds 1/3 weight, States hold 2/3 weight)",
      "A simple majority of 50% with equal vote per member",
      "Unanimous approval of all state finance ministers",
      "Two-thirds majority with Center holding 51% weight"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Indian Fiscal Federalism → GST Council Voting Structure (Article 279A)",
    explanation: "Article 279A dictates that GST Council decisions require a 75% weighted majority, where the Central Government cast is weighted at one-third (33.3%) and state governments combine for two-thirds (66.7%)."
  },
  {
    id: 144,
    test_id: 4,
    question: "The Production Linked Incentive (PLI) Scheme launched by the Government of India aims primarily to:",
    options: [
      "Boost domestic manufacturing capabilities, attract strategic greenfield investments, and integrate Indian firms into Global Value Chains (GVCs) across 14 key sectors",
      "Subsidize agricultural electricity across all states",
      "Abolish all import duties on foreign consumer products",
      "Renationalize public sector manufacturing undertakings"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Industrial Policy Reforms → Production Linked Incentive (PLI) Scheme",
    explanation: "The PLI scheme provides financial incentives of 4% to 6% on incremental sales of goods manufactured in domestic units across 14 key sectors (electronics, pharma, telecom, auto)."
  },
  {
    id: 145,
    test_id: 4,
    question: "In the 15th Finance Commission's horizontal tax devolution formula among states, which criteria carried the highest weightage (45%)?",
    options: [
      "Income Distance (Distance of a state's per capita GSDP from the top state)",
      "Population (2011 Census - 15%)",
      "Forest and Ecology (10%)",
      "Demographic Performance (12.5%)"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "15th Finance Commission → Horizontal Devolution Criteria & Weights",
    explanation: "The 15th Finance Commission formula: Income Distance (45%), Population 2011 (15%), Area (15%), Forest & Ecology (10%), Demographic Performance (12.5%), and Tax Effort (2.5%)."
  },
  {
    id: 146,
    test_id: 4,
    question: "The Insolvency and Bankruptcy Code (IBC) 2016 introduced a time-bound resolution framework for distressed corporate debtors known as:",
    options: [
      "Corporate Insolvency Resolution Process (CIRP) with a statutory resolution limit of 180 days (extendable to 330 days)",
      "SARFAESI Act enforcement proceeding",
      "Debt Recovery Tribunal summary arbitration",
      "BIFR rehabilitation scheme"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Financial Sector Reforms → Insolvency and Bankruptcy Code (IBC 2016)",
    explanation: "The IBC 2016 replaced fragmented bankruptcy laws with CIRP under the National Company Law Tribunal (NCLT), enforcing a strict 180-day timeline (plus 90-day extension, capped at 330 days)."
  },
  {
    id: 147,
    test_id: 4,
    question: "The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme provides direct income support of:",
    options: [
      "₹6,000 per year paid in three equal installments of ₹2,000 directly into the bank accounts of eligible farmer families",
      "₹10,000 per year in one lump sum",
      "₹4,000 per year paid semi-annually",
      "₹12,000 per year along with fertilizer vouchers"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Agricultural Welfare Schemes → PM-KISAN Direct Benefit Transfer",
    explanation: "PM-KISAN is a 100% centrally sponsored DBT scheme providing ₹6,000 per annum to all landholding farmer families across India in three four-monthly installments of ₹2,000 each."
  },
  {
    id: 148,
    test_id: 4,
    question: "Under the Periodic Labour Force Survey (PLFS) by MoSPI, 'Current Weekly Status' (CWS) classifies a person as employed if they worked for at least:",
    options: [
      "1 hour on any one day during the 7-day reference week",
      "30 hours during the reference week",
      "4 hours every day of the week",
      "183 days during the preceding 365 days (Usual Principal Status)"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Employment Measurement in India → PLFS Activity Status Concepts",
    explanation: "Under CWS activity status, an individual is considered employed if they performed economic activity for at least 1 hour on any day of the reference week."
  },
  {
    id: 149,
    test_id: 4,
    question: "The 'Mahalanobis Strategy of Development' adopted in India's Second Five Year Plan (1956-61) was centered upon:",
    options: [
      "Rapid industrialization with prioritized capital allocation to heavy basic capital goods industries (Machines to make machines)",
      "Exclusive focus on green revolution foodgrain self-sufficiency",
      "Export-led labor-intensive light consumer manufacturing",
      "Privatization of infrastructure and railways"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Easy",
    concept: "Indian Planning History → Second Five Year Plan (Mahalanobis Model)",
    explanation: "Formulated by P.C. Mahalanobis (2-sector and 4-sector models), the Second Plan emphasized building a domestic heavy industry base (steel, power, machinery) to achieve sovereign capital self-reliance."
  },
  {
    id: 150,
    test_id: 4,
    question: "The Fiscal Responsibility and Budget Management (FRBM) Act review committee chaired by N.K. Singh (2017) recommended targeting:",
    options: [
      "A General Government Debt-to-GDP ratio of 60% (40% for Central Government, 20% for States) and a Central Fiscal Deficit of 3.0% of GDP",
      "A zero fiscal deficit by 2020",
      "A debt-to-GDP ratio of 90%",
      "Complete elimination of capital expenditures"
    ],
    correct_answer: 0,
    topic: "Indian Economy",
    difficulty: "Moderate",
    concept: "Fiscal Management in India → N.K. Singh FRBM Review Committee (2017)",
    explanation: "The N.K. Singh Committee recommended anchoring fiscal discipline on debt sustainability: General Government Debt at 60% of GDP (40% Center, 20% States) and a Central Fiscal Deficit target of 3.0%."
  }
];
