import { useState } from "react";
import { Info } from "lucide-react";
import { STRING_DATABASE } from "@/data/stringDatabase";

const BrandBrowser = () => {
  const brands = [...new Set(STRING_DATABASE.map((s) => s.brand))];
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const models = selectedBrand
    ? STRING_DATABASE.filter((s) => s.brand === selectedBrand)
    : [];

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-primary/10">
          <Info className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Browse by Brand</h2>
          <p className="text-sm text-muted-foreground">Select a brand to see its string colors</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedBrand === brand
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {selectedBrand && models.length > 0 && (
        <div className="space-y-4">
          {models.map((model) => (
            <div key={model.model} className="rounded-lg border border-border bg-secondary/30 p-4 space-y-3">
              <h3 className="font-semibold text-foreground">{model.model}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {model.strings.map((s) => (
                  <div key={s.note} className="flex flex-col items-center gap-3 rounded-lg bg-background/50 p-3">
                    <span className="text-lg font-bold text-foreground">{s.note}</span>
                    
                    {/* Contenedor de círculos: Peg arriba, Ball abajo */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span
                          className="w-5 h-5 rounded-full border border-border"
                          style={{ background: s.peg }}
                        />
                        <span className="text-[10px] text-muted-foreground">Peg</span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <span
                          className="w-5 h-5 rounded-full border border-border"
                          style={{ background: s.ballEnd }}
                        />
                        <span className="text-[10px] text-muted-foreground">Ball</span>
                      </div>
                    </div>

                    {/* Labels apilados debajo de todo */}
                    <div className="flex flex-col items-center text-[10px] text-muted-foreground border-t border-border/50 pt-2 w-full text-center">
                      <span className="font-medium">{s.pegLabel}</span>
                      <span className="opacity-70">{s.ballEndLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandBrowser;
