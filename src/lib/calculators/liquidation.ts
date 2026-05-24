import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcLiquidation(inputs: CalculatorInputs): CalculatorResult[] {
  const entry = parseFloat(inputs.entryPrice);
  const leverage = parseFloat(inputs.leverage);
  const side = inputs.positionSide ?? "long";
  const mm = parseFloat(inputs.maintenanceMargin) / 100;

  if ([entry, leverage, mm].some(isNaN) || leverage < 1) return [];

  const liquidationPrice =
    side === "long"
      ? entry * (1 - 1 / leverage + mm)
      : entry * (1 + 1 / leverage - mm);

  const distanceUSD = Math.abs(entry - liquidationPrice);
  const distancePercent = (distanceUSD / entry) * 100;
  const marginRequired = (entry / leverage).toFixed(2);
  const marginPercent = (1 / leverage) * 100;

  return [
    {
      id: "liquidationPrice",
      label: "Liquidation Price",
      value: liquidationPrice.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: "danger",
      description: `Your ${side} position liquidates at this price`,
    },
    {
      id: "distancePercent",
      label: "Distance to Liquidation",
      value: distancePercent.toFixed(2),
      unit: "%",
      highlighted: true,
      color: distancePercent < 5 ? "danger" : distancePercent < 15 ? "warning" : "success",
      description: "How far price must move to liquidate you",
    },
    {
      id: "distanceUSD",
      label: "Distance (USD)",
      value: distanceUSD.toFixed(2),
      unit: "USD",
    },
    {
      id: "marginRequired",
      label: "Initial Margin per Unit",
      value: marginRequired,
      unit: "USD",
      description: `${marginPercent.toFixed(1)}% of position value`,
    },
    {
      id: "effectiveLeverage",
      label: "Leverage",
      value: `${leverage}x`,
      color: leverage > 20 ? "danger" : leverage > 10 ? "warning" : "default",
    },
  ];
}
