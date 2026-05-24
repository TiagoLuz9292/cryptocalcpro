import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcRiskReward(inputs: CalculatorInputs): CalculatorResult[] {
  const entry = parseFloat(inputs.entryPrice);
  const stop = parseFloat(inputs.stopLossPrice);
  const target = parseFloat(inputs.takeProfitPrice);
  const riskAmount = parseFloat(inputs.riskAmount);

  if ([entry, stop, target, riskAmount].some(isNaN)) return [];
  if (entry === stop) return [];

  const risk = Math.abs(entry - stop);
  const reward = Math.abs(target - entry);
  const rrRatio = reward / risk;
  const breakevenWinRate = (1 / (1 + rrRatio)) * 100;
  const potentialProfit = (reward / risk) * riskAmount;
  const side = target > entry ? "long" : "short";
  const validTrade = side === "long" ? stop < entry && target > entry : stop > entry && target < entry;

  if (!validTrade) return [];

  return [
    {
      id: "rrRatio",
      label: "Risk:Reward Ratio",
      value: `1:${rrRatio.toFixed(2)}`,
      highlighted: true,
      color: rrRatio >= 2 ? "success" : rrRatio >= 1 ? "warning" : "danger",
      description: "Reward relative to risk",
    },
    {
      id: "potentialProfit",
      label: "Potential Profit",
      value: potentialProfit.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: "success",
    },
    {
      id: "potentialLoss",
      label: "Potential Loss",
      value: riskAmount.toFixed(2),
      unit: "USD",
      color: "danger",
    },
    {
      id: "breakevenWinRate",
      label: "Breakeven Win Rate",
      value: breakevenWinRate.toFixed(1),
      unit: "%",
      description: "Win rate needed to break even",
      color: breakevenWinRate <= 40 ? "success" : breakevenWinRate <= 50 ? "warning" : "danger",
    },
    {
      id: "rewardDistance",
      label: "Reward Distance",
      value: (Math.abs(reward / entry) * 100).toFixed(2),
      unit: "%",
    },
    {
      id: "riskDistance",
      label: "Risk Distance",
      value: (Math.abs(risk / entry) * 100).toFixed(2),
      unit: "%",
    },
  ];
}
