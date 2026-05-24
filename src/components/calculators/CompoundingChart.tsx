"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getCompoundingChartData } from "@/lib/calculators/compounding";
import type { CalculatorInputs } from "@/types/calculator";

interface CompoundingChartProps {
  inputs: CalculatorInputs;
}

function formatUSD(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
}

export function CompoundingChart({ inputs }: CompoundingChartProps) {
  const data = useMemo(() => getCompoundingChartData(inputs), [inputs]);

  if (data.length < 2) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
        Growth Chart
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="contribGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#71717a" }}
            tickLine={false}
            axisLine={false}
            label={{ value: "Month", position: "insideBottom", offset: -2, fontSize: 11, fill: "#71717a" }}
          />
          <YAxis
            tickFormatter={formatUSD}
            tick={{ fontSize: 11, fill: "#71717a" }}
            tickLine={false}
            axisLine={false}
            width={60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111113",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value) => [formatUSD(Number(value)), ""]}
            labelFormatter={(label) => `Month ${label}`}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
          />
          <Area
            type="monotone"
            dataKey="contributions"
            name="Contributions"
            stroke="#22c55e"
            fill="url(#contribGrad)"
            strokeWidth={1.5}
          />
          <Area
            type="monotone"
            dataKey="balance"
            name="Balance"
            stroke="#6366f1"
            fill="url(#balanceGrad)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
