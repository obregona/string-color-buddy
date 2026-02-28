import { COLORS } from "@/data/stringDatabase";

interface ColorPickerProps {
  label: string;
  selectedColor: string | null;
  onSelect: (color: string | null) => void;
}

const ColorPicker = ({ label, selectedColor, onSelect }: ColorPickerProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider font-body">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {COLORS.map((color) => (
          <button
            key={color.label}
            onClick={() => onSelect(selectedColor === color.value ? null : color.value)}
            className={`group relative w-9 h-9 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
              selectedColor === color.value
                ? "border-primary ring-2 ring-primary/40 scale-110"
                : "border-border hover:border-muted-foreground"
            }`}
            title={color.label}
          >
            <span
              className="block w-full h-full rounded-full"
              style={{
                backgroundColor: color.value === "transparent" ? undefined : color.value,
                backgroundImage: color.value === "transparent"
                  ? "linear-gradient(45deg, hsl(var(--muted)) 25%, transparent 25%, transparent 75%, hsl(var(--muted)) 75%), linear-gradient(45deg, hsl(var(--muted)) 25%, transparent 25%, transparent 75%, hsl(var(--muted)) 75%)"
                  : undefined,
                backgroundSize: "8px 8px",
                backgroundPosition: "0 0, 4px 4px",
              }}
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {color.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
