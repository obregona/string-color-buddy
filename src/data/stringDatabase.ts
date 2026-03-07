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
  { label: "Light Blue", value: "#BAE6FD" },
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
  { label: "Wine", value: "#722F37" },
  { label: "Violet", value: "#8B5CF6" },
  
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
    label: "White/Purple Spiral", 
    value: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)" 
  },
  { 
    label: "Red/Black Spiral", 
    value: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #1C1917 6px, #1C1917 8px)" 
  },
   { 
    label: "Red/Black Spiral", 
    value: "repeating-linear-gradient(45deg, #DC2626, #DC2626 6px, #1C1917 6px, #1C1917 8px)" 
  },
  { 
  label: "Dark Green/Black Spiral", 
  value: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #000000 6px, #000000 8px)" 
  },
  { 
  label: "Orange/Black Spiral", 
  value: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)" 
  },
  { 
  label: "Yellow/Blue Spiral", 
  value: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)" 
  },
  { 
  label: "Brown/White Spiral", 
  value: "repeating-linear-gradient(45deg, #78350F, #78350F 6px, #FFFFFF 6px, #FFFFFF 8px)" 
  },
  { 
  label: "White/Brown Spiral", 
  value: "repeating-linear-gradient(45deg, #FFFFFF, #FFFFFF 6px, #78350F 6px, #78350F 8px)" 
  },
  
] as const;

export const STRING_DATABASE: StringSet[] = [
  {
    brand: "Pirastro",
    model: "Obligato Medium",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", 
       ballEndLabel: "Orange/Black Spiral" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", 
       ballEndLabel: "Orange/Black Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", 
       ballEndLabel: "Orange/Black Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", 
       ballEndLabel: "Orange/Black Spiral" },
    ],
  },
 {
    brand: "Pirastro",
    model: "Evah Pirazzi Medium or Light Orch",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #000000 6px, #000000 8px)", ballEndLabel: "Dark Green/Black Spiral" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #000000 6px, #000000 8px)", ballEndLabel: "Dark Green/Black Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #000000 6px, #000000 8px)", ballEndLabel: "Dark Green/Black Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #000000 6px, #000000 8px)", ballEndLabel: "Dark Green/Black Spiral" },
    ],
  },
  {
    brand: "Pirastro",
    model: "Flexocor Chromesteel Med, Light or Heavy Orch",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd: "#722F37", ballEndLabel: "Wine" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "#722F37", ballEndLabel: "Wine" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "#722F37", ballEndLabel: "Wine" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "#722F37", ballEndLabel: "Wine" },
    ],
  },
  {
    brand: "Pirastro",
    model: "Original Flexocor Medium Orch",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd: "#8B5CF6", ballEndLabel: "Violet" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "#8B5CF6", ballEndLabel: "Violet" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "#8B5CF6", ballEndLabel: "Violet" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "#8B5CF6", ballEndLabel: "Violet" },
    ],
  },
   {
    brand: "Pirastro",
    model: "Flat-Chrome Medium Orch",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd:"repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "White/Purple Spiral" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "White/Purple Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "White/Purple Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "White/Purple Spiral" },
    ],
  },
   {
    brand: "Pirastro",
    model: "Permanent Medium Orch",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd:"repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
    ],
  },
  {
    brand: "Pirastro",
    model: "Passione Medium or Heavy Orch",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd:"repeating-linear-gradient(45deg, #78350F, #78350F 6px, #FFFFFF 6px, #FFFFFF 8px)", ballEndLabel: "Brown/White Spiral" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #78350F, #78350F 6px, #FFFFFF 6px, #FFFFFF 8px)", ballEndLabel: "Brown/White Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #78350F, #78350F 6px, #FFFFFF 6px, #FFFFFF 8px)", ballEndLabel: "Brown/White Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #78350F, #78350F 6px, #FFFFFF 6px, #FFFFFF 8px)", ballEndLabel: "Brown/White Spiral" },
    ],
  },
    {
    brand: "Pirastro",
    model: "Obligato Medium Solo",
    strings: [
      { note: "G", peg: "#8B5CF6", pegLabel: "Violet", ballEnd:"repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
      { note: "D", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
      { note: "A", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
      { note: "E", peg: "#2563EB", pegLabel: "Blue", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
    ],
  },
   {
    brand: "Pirastro",
    model: "Original Flat Chrome Solo",
    strings: [
      { note: "G", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd:"repeating-linear-gradient(45deg, #FFFFFF, #FFFFFF 6px, #78350F 6px, #78350F 8px)", ballEndLabel: "White/Brown Spiral" },
      { note: "D", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #FFFFFF, #FFFFFF 6px, #78350F 6px, #78350F 8px)", ballEndLabel: "White/Brown Spiral" },
      { note: "A", peg: "#CA8A04", pegLabel: "Gold", ballEnd: "repeating-linear-gradient(45deg, #FFFFFF, #FFFFFF 6px, #78350F 6px, #78350F 8px)", ballEndLabel: "White/Brown Spiral" },
      { note: "E", peg: "#2563EB", pegLabel: "Blue", ballEnd: "repeating-linear-gradient(45deg, #FFFFFF, #FFFFFF 6px, #78350F 6px, #78350F 8px)", ballEndLabel: "White/Brown Spiral" },
    ],
  },
     {
    brand: "Pirastro",
    model: "Passione Rope Solo",
    strings: [
      { note: "G", peg: "#92400E", pegLabel: "Brown", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "A", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "E", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
    ],
  },
     {
    brand: "Pirastro",
    model: "Permanent Medium Solo",
    strings: [
      { note: "G", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "D", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "A", peg: "#CA8A04", pegLabel: "Gold", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
      { note: "E", peg: "#2563EB", pegLabel: "Blue", ballEnd: "repeating-linear-gradient(45deg, #FDE047, #FDE047 6px, #1E40AF 6px, #1E40AF 8px)", ballEndLabel: "Yellow/Blue Spiral" },
    ],
  },
    {
    brand: "Thomastik-Infeld",
    model: "Spirocore",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "A", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "E", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
    ],
  },
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
