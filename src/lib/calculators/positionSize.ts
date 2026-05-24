import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcPositionSize(inputs: CalculatorInputs): CalculatorResult[] {
  const accountSize = parseFloat(inputs.accountSize);
  const riskValue = parseFloat(inputs.riskPercent);
  const riskUnit = inputs.riskUnit ?? "percent";
  const entryPrice = parseFloat(inputs.entryPrice);
  const stopLossPrice = parseFloat(inputs.stopLossPrice);

  if ([accountSize, riskValue, entryPrice, stopLossPrice].some(isNaN)) return [];
  if (riskValue <= 0 || entryPrice === stopLossPrice) return [];

  let riskAmount: number;
  let effectiveRiskPercent: number;

  if (riskUnit === "dollar") {
    riskAmount = riskValue;
    effectiveRiskPercent = (riskAmount / accountSize) * 100;
  } else {
    riskAmount = (accountSize * riskValue) / 100;
    effectiveRiskPercent = riskValue;
  }

  const priceDiff = Math.abs(entryPrice - stopLossPrice);
  const positionSize = riskAmount / priceDiff;
  const positionValue = positionSize * entryPrice;
  const stopLossPercent = (priceDiff / entryPrice) * 100;

  return [
    {
      id: "riskAmount",
      label: "Max Dollar Loss",
      value: riskAmount.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: "danger",
      description: "Maximum dollar loss if stop loss is hit",
    },
    {
      id: "positionSize",
      label: "Position Size",
      value: positionSize.toFixed(6),
      unit: "units",
      highlighted: true,
      color: "success",
      description: "Number of coins/units to buy",
    },
    {
      id: "positionValue",
      label: "Position Value",
      value: positionValue.toFixed(2),
      unit: "USD",
      description: "Total USD value of position",
    },
    {
      id: "stopLossPercent",
      label: "Stop Loss Distance",
      value: stopLossPercent.toFixed(2),
      unit: "%",
      color: stopLossPercent > 5 ? "warning" : "default",
      description: "Distance from entry to stop loss",
    },
    {
      id: "accountRisk",
      label: "Account Risk",
      value: effectiveRiskPercent.toFixed(2),
      unit: "%",
      description: "Percentage of account at risk",
    },
  ];
}
