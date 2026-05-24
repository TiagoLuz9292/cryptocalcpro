import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcDca(inputs: CalculatorInputs): CalculatorResult[] {
  const currentPrice = parseFloat(inputs.currentPrice);

  const entries: { price: number; amount: number }[] = [];
  for (let i = 1; i <= 3; i++) {
    const price = parseFloat(inputs[`entry${i}Price`]);
    const amount = parseFloat(inputs[`entry${i}Amount`]);
    if (!isNaN(price) && !isNaN(amount) && price > 0 && amount > 0) {
      entries.push({ price, amount });
    }
  }

  if (entries.length === 0 || isNaN(currentPrice)) return [];

  const totalInvested = entries.reduce((sum, e) => sum + e.amount, 0);
  const totalUnits = entries.reduce((sum, e) => sum + e.amount / e.price, 0);
  const averageEntry = totalInvested / totalUnits;
  const currentValue = totalUnits * currentPrice;
  const pnl = currentValue - totalInvested;
  const pnlPercent = (pnl / totalInvested) * 100;

  return [
    {
      id: "averageEntry",
      label: "Average Entry Price",
      value: averageEntry.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: "default",
      description: "Your true cost basis",
    },
    {
      id: "totalInvested",
      label: "Total Invested",
      value: totalInvested.toFixed(2),
      unit: "USD",
    },
    {
      id: "totalUnits",
      label: "Total Units Held",
      value: totalUnits.toFixed(6),
    },
    {
      id: "currentValue",
      label: "Current Value",
      value: currentValue.toFixed(2),
      unit: "USD",
      highlighted: true,
    },
    {
      id: "unrealizedPnl",
      label: "Unrealized P&L",
      value: pnl.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: pnl >= 0 ? "success" : "danger",
    },
    {
      id: "pnlPercent",
      label: "P&L %",
      value: pnlPercent.toFixed(2),
      unit: "%",
      color: pnlPercent >= 0 ? "success" : "danger",
    },
  ];
}
