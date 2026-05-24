import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcDrawdown(inputs: CalculatorInputs): CalculatorResult[] {
  const accountSize = parseFloat(inputs.accountSize);
  const maxDailyDrawdownPercent = parseFloat(inputs.maxDailyDrawdownPercent);
  const startingBalance = parseFloat(inputs.startingBalance);
  const currentPnl = parseFloat(inputs.currentPnl) || 0;

  if ([accountSize, maxDailyDrawdownPercent, startingBalance].some(isNaN)) return [];

  const maxDailyLossUSD = (startingBalance * maxDailyDrawdownPercent) / 100;
  const currentLoss = Math.min(0, currentPnl);
  const remainingLoss = maxDailyLossUSD + currentLoss;
  const usedPercent = Math.abs(currentLoss / maxDailyLossUSD) * 100;
  const isBreach = currentLoss <= -maxDailyLossUSD;
  const warningThreshold = remainingLoss <= maxDailyLossUSD * 0.3;

  return [
    {
      id: "maxDailyLoss",
      label: "Max Daily Loss Allowed",
      value: maxDailyLossUSD.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: "default",
    },
    {
      id: "remainingLoss",
      label: "Remaining Loss Budget",
      value: Math.max(0, remainingLoss).toFixed(2),
      unit: "USD",
      highlighted: true,
      color: isBreach ? "danger" : warningThreshold ? "warning" : "success",
      description: isBreach ? "ACCOUNT BREACHED" : warningThreshold ? "Warning: Near limit" : "Safe",
    },
    {
      id: "usedPercent",
      label: "Drawdown Used",
      value: Math.min(100, usedPercent).toFixed(1),
      unit: "%",
      color: usedPercent >= 100 ? "danger" : usedPercent >= 70 ? "warning" : "success",
    },
    {
      id: "currentPnl",
      label: "Current P&L",
      value: currentPnl.toFixed(2),
      unit: "USD",
      color: currentPnl >= 0 ? "success" : "danger",
    },
    {
      id: "safeZone",
      label: "Safe Stop (80% limit)",
      value: (maxDailyLossUSD * 0.8).toFixed(2),
      unit: "USD",
      description: "Recommended stop trading at this loss level",
    },
  ];
}
