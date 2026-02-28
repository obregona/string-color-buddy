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
            // El atributo 'title' es el que crea la observación del mouse
            title={color.label} 
            className={`group relative w-9 h-9 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
              selectedColor === color.value
                ? "border-primary ring-2 ring-primary/40 scale-110"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <span
              className="block w-full h-full rounded-full"
              style={{
                background: color.value === "transparent" 
                  ? "repeating-conic-gradient(hsl(var(--muted)) 0% 25%, transparent 0% 50%) 50% / 8px 8px" 
                  : color.value,
              }}
            />
            
            {/* SE ELIMINÓ EL SPAN QUE MOSTRABA EL TEXTO ABAJO 
               PARA QUE YA NO APAREZCA FÍSICAMENTE EN LA WEB 
            */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
