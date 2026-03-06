export interface StringColor {
  peg: string;
  ballEnd: string;
  pegLabel: string;
  ballEndLabel: string;
}

export interface StringSet {
  brand: string;
  model: string;
  strings: {
    note: string;
    peg: string;
    pegLabel: string;
    ballEnd: string;
    ballEndLabel: string;
  }[];
}

export const COLORS = [
  { label: "Red", value: "#DC2626" },
  { label: "Dark Red", value: "#991B1B" },
  { label: "Blue", value: "#2563EB" },
  { label: "Dark Blue", value: "#1E3A8A" },
  { label: "Green", value: "#16A34A" },
  { label: "Dark Green", value: "#166534" },
  { label: "Yellow", value: "#EAB308" },
  { label: "Orange", value: "#EA580C" },
  { label: "Purple", value: "#9333EA" },
  { label: "Brown", value: "#92400E" },
  { label: "Black", value: "#1C1917" },
  { label: "White", value: "#F5F5F4" },
  { label: "Silver", value: "#A8A29E" },
  { label: "Gold", value: "#CA8A04" },
  { label: "Pink", value: "#EC4899" },
  
  // --- NUEVOS COLORES RAYADOS (SPIRAL SILK) ---
  { 
    label: "Red/White Spiral", 
    value: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #F5F5F4 6px, #F5F5F4 8px)" 
  },
  { 
    label: "Blue/White Spiral", 
    value: "repeating-linear-gradient(45deg, #2563EB, #2563EB 6px, #F5F5F4 6px, #F5F5F4 8px)" 
  },
  { 
    label: "Green/White Spiral", 
    value: "repeating-linear-gradient(45deg, #16A34A, #16A34A 6px, #F5F5F4 6px, #F5F5F4 8px)" 
  },
  { 
    label: "Black/Yellow Spiral", 
    value: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #EAB308 6px, #EAB308 8px)" 
  },
  { 
    label: "Purple/White Spiral", 
    value: "repeating-linear-gradient(45deg, #9333EA, #9333EA 6px, #F5F5F4 6px, #F5F5F4 8px)" 
  },
  { 
    label: "Red/Black Spiral", 
    value: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #1C1917 6px, #1C1917 8px)" 
  },
  
] as const;

export const STRING_DATABASE: StringSet[] = [
{
    brand: "D'Addario",
    model: "Kaplan",
    strings: [
      { note: "G", peg: "#F97316", pegLabel: "Orange", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "D", peg: "#F97316", pegLabel: "Orange", ballEnd: "#2563EB", ballEndLabel: "Blue" },
      { note: "A", peg: "#F97316", pegLabel: "Orange", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "E", peg: "#F97316", pegLabel: "Orange", ballEnd: "#EAB308", ballEndLabel: "Yellow" },
    ],
  },
  {
    brand: "D'Addario",
    model: "Zyex",
    strings: [
      { note: "G", peg: "#2563EB", pegLabel: "Blue", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "D", peg: "#2563EB", pegLabel: "Blue", ballEnd: "#2563EB", ballEndLabel: "Blue" },
      { note: "A", peg: "#2563EB", pegLabel: "Blue", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "E", peg: "#2563EB", pegLabel: "Blue", ballEnd: "#EAB308", ballEndLabel: "Yellow" },
    ],
  },
  {
    brand: "Thomastik-Infeld",
    model: "Spirocore",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "#2563EB", ballEndLabel: "Blue" },
      { note: "A", peg: "#DC2626", pegLabel: "Red", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "E", peg: "#DC2626", pegLabel: "Red", ballEnd: "#EAB308", ballEndLabel: "Yellow" },
    ],
  },
  {
    brand: "Thomastik-Infeld",
    model: "Belcanto",
    strings: [
      { note: "G", peg: "#F97316", pegLabel: "Orange", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "D", peg: "#F97316", pegLabel: "Orange", ballEnd: "#2563EB", ballEndLabel: "Blue" },
      { note: "A", peg: "#F97316", pegLabel: "Orange", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "E", peg: "#F97316", pegLabel: "Orange", ballEnd: "#EAB308", ballEndLabel: "Yellow" },
    ],
  },
  {
    brand: "Pirastro",
    model: "Evah Pirazzi",
    strings: [
      { 
        note: "G", 
        peg: "repeating-linear-gradient(45deg, #000000, #000000 6px, #16A34A 6px, #16A34A 8px)", 
        pegLabel: "Black/Green Stripe", 
        ballEnd: "#16A34A", 
        ballEndLabel: "Green" 
      },
      { 
        note: "D", 
        peg: "repeating-linear-gradient(45deg, #000000, #000000 6px, #16A34A 6px, #16A34A 8px)", 
        pegLabel: "Black/Green Stripe", 
        ballEnd: "#2563EB", 
        ballEndLabel: "Blue" 
      },
      { 
        note: "A", 
        peg: "repeating-linear-gradient(45deg, #000000, #000000 6px, #16A34A 6px, #16A34A 8px)", 
        pegLabel: "Black/Green Stripe", 
        ballEnd: "#DC2626", 
        ballEndLabel: "Red" 
      },
      { 
        note: "E", 
        peg: "repeating-linear-gradient(45deg, #000000, #000000 6px, #16A34A 6px, #16A34A 8px)", 
        pegLabel: "Black/Green Stripe", 
        ballEnd: "#EAB308", 
        ballEndLabel: "Yellow" 
      },
    ],
  },
  {
    brand: "Pirastro",
    model: "Obligato",
    strings: [
      { 
        note: "G", 
        peg: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #000000 6px, #000000 8px)", 
        pegLabel: "Red/Black Stripe", 
        ballEnd: "#16A34A", 
        ballEndLabel: "Green" 
      },
      { 
        note: "D", 
        peg: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #000000 6px, #000000 8px)", 
        pegLabel: "Red/Black Stripe", 
        ballEnd: "#2563EB", 
        ballEndLabel: "Blue" 
      },
      { 
        note: "A", 
        peg: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #000000 6px, #000000 8px)", 
        pegLabel: "Red/Black Stripe", 
        ballEnd: "#DC2626", 
        ballEndLabel: "Red" 
      },
      { 
        note: "E", 
        peg: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #000000 6px, #000000 8px)", 
        pegLabel: "Red/Black Stripe", 
        ballEnd: "#EAB308", 
        ballEndLabel: "Yellow" 
      },
    ],
  }
];

export function findStringsByColors(pegColor: string | null, ballEndColor: string | null): { brand: string; model: string; note: string; pegLabel: string; ballEndLabel: string }[] {
  const results: { brand: string; model: string; note: string; pegLabel: string; ballEndLabel: string }[] = [];

  for (const set of STRING_DATABASE) {
    for (const s of set.strings) {
      const pegMatch = !pegColor || s.peg === pegColor;
      const ballMatch = !ballEndColor || s.ballEnd === ballEndColor;
      if (pegMatch && ballMatch && (pegColor || ballEndColor)) {
        results.push({
          brand: set.brand,
          model: set.model,
          note: s.note,
          pegLabel: s.pegLabel,
          ballEndLabel: s.ballEndLabel,
        });
      }
    }
  }

  return results;
}
