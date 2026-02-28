import { useState } from "react";
import { Search } from "lucide-react";
import ColorPicker from "./ColorPicker";
import { findStringsByColors } from "@/data/stringDatabase";

const StringIdentifier = () => {
  const [pegColor, setPegColor] = useState<string | null>(null);
  const [ballEndColor, setBallEndColor] = useState<string | null>(null);

  const results = findStringsByColors(pegColor, ballEndColor);

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8 glow-amber space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-primary/10">
          <Search className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Identify Your String</h2>
          <p className="text-sm text-muted-foreground">Select the silk colors to find matching strings</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ColorPicker label="Peg End Color" selectedColor={pegColor} onSelect={setPegColor} />
        <ColorPicker label="Ball End Color" selectedColor={ballEndColor} onSelect={setBallEndColor} />
      </div>

      {(pegColor || ballEndColor) && (
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {results.length} Match{results.length !== 1 && "es"} Found
          </h3>
          {results.length > 0 ? (
            <div className="grid gap-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <div>
                    <span className="font-semibold text-foreground">{r.brand}</span>
                    <span className="text-muted-foreground"> — {r.model}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      Peg: {r.pegLabel} · Ball: {r.ballEndLabel}
                    </span>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-sm">
                      {r.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm italic">
              No matching strings found. Try adjusting the colors or send us a suggestion below!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default StringIdentifier;
