// Placeholder for future AdSense integration

interface AdSlotProps {
  position: "top" | "sidebar" | "between-content" | "bottom";
  className?: string;
}

export function AdSlot({ position, className }: AdSlotProps) {
  if (process.env.NEXT_PUBLIC_ADS_ENABLED !== "true") return null;

  return (
    <div
      className={className}
      data-ad-position={position}
      aria-hidden="true"
    />
  );
}
