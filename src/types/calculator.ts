export interface CalculatorField {
  id: string;
  label: string;
  placeholder?: string;
  type: "number" | "select" | "text" | "hidden";
  unit?: string;
  unitOptions?: { label: string; value: string }[];
  unitFieldId?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: string }[];
  defaultValue?: string | number;
  helpText?: string;
}

export interface CalculatorResult {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  highlighted?: boolean;
  color?: "default" | "success" | "warning" | "danger";
  description?: string;
}

export interface CalculatorFaq {
  question: string;
  answer: string;
}

export interface CalculatorMeta {
  slug: string;
  parentSlug?: string; // for variant pages — points to the base tool's calc function
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  category: string;
  keywords: string[];
  fields: CalculatorField[];
  relatedSlugs: string[];
  faqs: CalculatorFaq[];
  educationContent: {
    title: string;
    body: string;
  };
  schema?: Record<string, unknown>;
}

export type CalculatorInputs = Record<string, string>;
