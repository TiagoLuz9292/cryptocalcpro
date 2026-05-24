import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export interface CompoundingDataPoint {
  month: number;
  balance: number;
  contributions: number;
  interest: number;
}

export function calcCompounding(inputs: CalculatorInputs): CalculatorResult[] {
  const initial = parseFloat(inputs.initialCapital);
  const monthlyReturn = parseFloat(inputs.monthlyReturn) / 100;
  const months = parseInt(inputs.months);
  const contribution = parseFloat(inputs.monthlyContribution) || 0;

  if ([initial, monthlyReturn, months].some(isNaN) || months < 1) return [];

  let balance = initial;
  let totalContributions = initial;
  for (let i = 0; i < months; i++) {
    balance = balance * (1 + monthlyReturn) + contribution;
    totalContributions += contribution;
  }

  const totalInterest = balance - totalContributions;
  const totalReturnPercent = ((balance - initial) / initial) * 100;
  const annualizedReturn = (Math.pow(1 + monthlyReturn, 12) - 1) * 100;

  return [
    {
      id: "finalBalance",
      label: "Final Balance",
      value: balance.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: "success",
    },
    {
      id: "totalReturn",
      label: "Total Return",
      value: totalReturnPercent.toFixed(1),
      unit: "%",
      highlighted: true,
      color: "success",
    },
    {
      id: "totalInterest",
      label: "Interest Earned",
      value: totalInterest.toFixed(2),
      unit: "USD",
      color: "success",
    },
    {
      id: "totalContributions",
      label: "Total Contributions",
      value: totalContributions.toFixed(2),
      unit: "USD",
    },
    {
      id: "annualizedReturn",
      label: "Annualized Return",
      value: annualizedReturn.toFixed(1),
      unit: "%",
    },
    {
      id: "multiplier",
      label: "Money Multiplier",
      value: `${(balance / initial).toFixed(2)}x`,
      color: balance / initial >= 2 ? "success" : "default",
    },
  ];
}

export function getCompoundingChartData(inputs: CalculatorInputs): CompoundingDataPoint[] {
  const initial = parseFloat(inputs.initialCapital);
  const monthlyReturn = parseFloat(inputs.monthlyReturn) / 100;
  const months = parseInt(inputs.months);
  const contribution = parseFloat(inputs.monthlyContribution) || 0;

  if ([initial, monthlyReturn, months].some(isNaN) || months < 1) return [];

  const data: CompoundingDataPoint[] = [
    { month: 0, balance: initial, contributions: initial, interest: 0 },
  ];

  let balance = initial;
  let totalContributions = initial;

  for (let i = 1; i <= months; i++) {
    balance = balance * (1 + monthlyReturn) + contribution;
    totalContributions += contribution;
    data.push({
      month: i,
      balance: parseFloat(balance.toFixed(2)),
      contributions: parseFloat(totalContributions.toFixed(2)),
      interest: parseFloat((balance - totalContributions).toFixed(2)),
    });
  }
  return data;
}
