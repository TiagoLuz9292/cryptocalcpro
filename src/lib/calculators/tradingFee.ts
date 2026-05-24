import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcTradingFee(inputs: CalculatorInputs): CalculatorResult[] {
  const positionSize = parseFloat(inputs.positionSize);
  const entryPrice = parseFloat(inputs.entryPrice);
  const exitPrice = parseFloat(inputs.exitPrice);
  const makerFee = parseFloat(inputs.makerFee) / 100;
  const takerFee = parseFloat(inputs.takerFee) / 100;
  const orderType = inputs.orderType ?? "taker-taker";

  if ([positionSize, entryPrice, exitPrice, makerFee, takerFee].some(isNaN)) return [];

  const [entryFeeRate, exitFeeRate] =
    orderType === "maker-maker"
      ? [makerFee, makerFee]
      : orderType === "maker-taker"
      ? [makerFee, takerFee]
      : [takerFee, takerFee];

  const entryFee = positionSize * entryFeeRate;
  const exitFee = positionSize * exitFeeRate;
  const totalFees = entryFee + exitFee;

  const grossPnl = positionSize * ((exitPrice - entryPrice) / entryPrice);
  const netPnl = grossPnl - totalFees;
  const feeImpact = totalFees / Math.abs(grossPnl || 1) * 100;
  const breakevenMove = ((totalFees / positionSize) * entryPrice);

  return [
    {
      id: "totalFees",
      label: "Total Fees",
      value: totalFees.toFixed(4),
      unit: "USD",
      highlighted: true,
      color: "warning",
      description: "Round-trip fee cost",
    },
    {
      id: "netPnl",
      label: "Net P&L",
      value: netPnl.toFixed(2),
      unit: "USD",
      highlighted: true,
      color: netPnl >= 0 ? "success" : "danger",
    },
    {
      id: "grossPnl",
      label: "Gross P&L",
      value: grossPnl.toFixed(2),
      unit: "USD",
      color: grossPnl >= 0 ? "success" : "danger",
    },
    {
      id: "entryFee",
      label: "Entry Fee",
      value: entryFee.toFixed(4),
      unit: "USD",
    },
    {
      id: "exitFee",
      label: "Exit Fee",
      value: exitFee.toFixed(4),
      unit: "USD",
    },
    {
      id: "feeImpact",
      label: "Fee Impact",
      value: feeImpact.toFixed(1),
      unit: "% of P&L",
      color: feeImpact > 50 ? "danger" : feeImpact > 20 ? "warning" : "default",
    },
    {
      id: "breakevenMove",
      label: "Breakeven Move Needed",
      value: breakevenMove.toFixed(2),
      unit: "USD",
      description: "Price move needed just to cover fees",
    },
  ];
}
