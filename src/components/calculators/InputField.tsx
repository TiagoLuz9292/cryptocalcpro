"use client";

import { type CalculatorField } from "@/types/calculator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  field: CalculatorField;
  value: string;
  unitValue?: string;
  onChange: (id: string, value: string) => void;
}

export function InputField({ field, value, unitValue, onChange }: InputFieldProps) {
  if (field.type === "hidden") return null;

  if (field.type === "select") {
    return (
      <div className="space-y-1.5">
        <Label htmlFor={field.id} className="text-sm font-medium">
          {field.label}
        </Label>
        <Select value={value ?? ""} onValueChange={(v) => onChange(field.id, v ?? "")}>
          <SelectTrigger id={field.id} className="bg-secondary/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {field.helpText && (
          <p className="text-xs text-muted-foreground">{field.helpText}</p>
        )}
      </div>
    );
  }

  const hasUnitToggle = field.unitOptions && field.unitOptions.length > 0 && field.unitFieldId;
  const currentUnit = hasUnitToggle
    ? (unitValue || field.unitOptions![0].value)
    : null;

  const unitToggleWidth = hasUnitToggle
    ? `${field.unitOptions!.length * 28}px`
    : undefined;

  return (
    <div className="space-y-1.5">
      <Label htmlFor={field.id} className="text-sm font-medium">
        {field.label}
      </Label>
      <div className="relative">
        <Input
          id={field.id}
          type="number"
          value={value}
          onChange={(e) => onChange(field.id, e.target.value)}
          placeholder={field.placeholder}
          min={field.min}
          max={field.max}
          step={field.step}
          className={cn(
            "bg-secondary/50 font-mono",
            hasUnitToggle && "pr-16",
            field.unit && !hasUnitToggle && "pr-12"
          )}
        />
        {hasUnitToggle ? (
          <div
            className="absolute right-0 top-0 h-full flex items-stretch border-l border-border/50 overflow-hidden rounded-r-md"
            style={{ width: unitToggleWidth }}
          >
            {field.unitOptions!.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(field.unitFieldId!, opt.value)}
                aria-pressed={currentUnit === opt.value}
                aria-label={`Use ${opt.label}`}
                className={cn(
                  "flex-1 text-xs font-mono font-semibold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary",
                  currentUnit === opt.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : field.unit ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono">
            {field.unit}
          </span>
        ) : null}
      </div>
      {field.helpText && (
        <p className="text-xs text-muted-foreground">{field.helpText}</p>
      )}
    </div>
  );
}
