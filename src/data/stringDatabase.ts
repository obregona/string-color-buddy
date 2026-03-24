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
  { label: "Pale Green", value: "#BBF7D0" },
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
  { label: "Black/Yellow Spiral", value: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #EAB308 6px, #EAB308 8px)" },
  { 
    label: "White/Purple Spiral", 
    value: "repeating-linear-gradient(45deg, #F5F5F4, #F5F5F4 6px, #9333EA 6px, #9333EA 8px)" 
  },
  { 
    label: "Grey/BlackandOrange Spiral", 
    value: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 4px, #1C1917 4px, #1C1917 6px, #A8A29E 6px, #A8A29E 10px, #EA580C 10px, #EA580C 12px)" 
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
  value: "repeating-linear-gradient(45deg, #78350F, #78350F 6px, #FFFFFF 6px, #FFFFFF 8px)" },
  { label: "Black/Yellow Spiral", value: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #EAB308 6px, #EAB308 8px)" },
  { label: "Black/Purple Spiral", value: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #9333EA 6px, #9333EA 8px)" },
  { label: "Black/Blue Spiral", value: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #2563EB 6px, #2563EB 8px)" },
  { label: "Violet/Gold Spiral", value: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)" },
  { label: "Light Blue/Black Spiral", value: "repeating-linear-gradient(45deg, #BAE6FD, #BAE6FD 6px, #1C1917 6px, #1C1917 8px)" },
  { label: "White/Brown Spiral", value: "repeating-linear-gradient(45deg, #FFFFFF, #FFFFFF 6px, #78350F 6px, #78350F 8px)" },
  {label: "Blue/Gold Spiral", value: "repeating-linear-gradient(45deg, #3B82F6, #3B82F6 6px, #CA8A04 6px, #CA8A04 8px)" },
  {label: "Dark Green/Gold Spiral", value: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #CA8A04 6px, #CA8A04 8px)" },
  {label: "Green/Black Spiral", value: "repeating-linear-gradient(45deg, #22C55E, #22C55E 6px, #000000 6px, #000000 8px)" },
  {label: "Orange/Red Spiral", value: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #EF4444 6px, #EF4444 8px)" },
  {label: "Gold/Violet Spiral", value: "repeating-linear-gradient(45deg, #CA8A04, #CA8A04 6px, #8B5CF6 6px, #8B5CF6 8px)" },
  { label: "Grey/Black Spiral", value: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 6px, #000000 6px, #000000 8px)" },
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
    brand: "D'Addario",
    model: "Helicore Hybrid Light Medium or Heavy Solo",
    strings: [
      { note: "G", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
      { note: "D", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
      { note: "A", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
      { note: "E", peg: "#2563EB", pegLabel: "Blue", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
    ],
  },
{
    brand: "Thomastik-Infeld",
    model: "Belcanto Orch",
    strings: [
      { note: "G", peg: "#EA580C", pegLabel: "Orange", ballEnd: "#EA580C", ballEndLabel: "Orange" },
      { note: "D", peg: "#EA580C", pegLabel: "Orange", ballEnd: "#EA580C", ballEndLabel: "Orange" },
      { note: "A", peg: "#EA580C", pegLabel: "Orange", ballEnd: "#EA580C", ballEndLabel: "Orange" },
      { note: "E", peg: "#EA580C", pegLabel: "Orange", ballEnd: "#EA580C", ballEndLabel: "Orange" },
    ],
  },
  {
    brand: "Thomastik-Infeld",
    model: "Precision Medium Orch",
    strings: [
      { note: "G", peg: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 4px, #1C1917 4px, #1C1917 6px, #A8A29E 6px, #A8A29E 10px, #EA580C 10px, #EA580C 12px)", pegLabel: "Grey/BlackandOrange Spiral", ballEnd: "#1C1917", ballEndLabel: "Black" },
      { note: "D", peg: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 4px, #1C1917 4px, #1C1917 6px, #A8A29E 6px, #A8A29E 10px, #EA580C 10px, #EA580C 12px)", pegLabel: "Grey/BlackandOrange Spiral", ballEnd: "#1C1917", ballEndLabel: "Black" },
      { note: "A", peg: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 4px, #1C1917 4px, #1C1917 6px, #A8A29E 6px, #A8A29E 10px, #EA580C 10px, #EA580C 12px)", pegLabel: "Grey/BlackandOrange Spiral", ballEnd: "#1C1917", ballEndLabel: "Black" },
      { note: "E", peg: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 4px, #1C1917 4px, #1C1917 6px, #A8A29E 6px, #A8A29E 10px, #EA580C 10px, #EA580C 12px)", pegLabel: "Grey/BlackandOrange Spiral", ballEnd: "#1C1917", ballEndLabel: "Black" },
    ],
  },
  {
    brand: "Corelli",
    model: "370 TX Fort Tirant Heavy Orch",
    strings: [
      { note: "G", peg: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #EAB308 6px, #EAB308 8px)", pegLabel: "Black/Yellow Spiral", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
      { note: "D", peg: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #9333EA 6px, #9333EA 8px)", pegLabel: "Black/Purple Spiral", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
      { note: "E", peg: "repeating-linear-gradient(45deg, #1C1917, #1C1917 6px, #2563EB 6px, #2563EB 8px)", pegLabel: "Black/Blue Spiral", ballEnd: "repeating-linear-gradient(45deg, #8B5CF6, #8B5CF6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Violet/Gold Spiral" },
    ],
  },
  {
    brand: "Corelli",
    model: "370 F Medium Orch",
    strings: [
      { note: "G", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
      { note: "D", peg: "#8B5CF6", pegLabel: "Violet", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
      { note: "E", peg: "#2563EB", pegLabel: "Blue", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #000000 6px, #000000 8px)", ballEndLabel: "Orange/Black Spiral" },
    ],
  },
  {
    brand: "Corelli",
    model: "370 M Light Orch",
    strings: [
      { note: "G", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #BAE6FD, #BAE6FD 6px, #1C1917 6px, #1C1917 8px)", ballEndLabel: "Light Blue/Black Spiral" },
      { note: "D", peg: "#8B5CF6", pegLabel: "Violet", ballEnd: "repeating-linear-gradient(45deg, #BAE6FD, #BAE6FD 6px, #1C1917 6px, #1C1917 8px)", ballEndLabel: "Light Blue/Black Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #BAE6FD, #BAE6FD 6px, #1C1917 6px, #1C1917 8px)", ballEndLabel: "Light Blue/Black Spiral" },
      { note: "E", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #BAE6FD, #BAE6FD 6px, #1C1917 6px, #1C1917 8px)", ballEndLabel: "Light Blue/Black Spiral" },
    ],
  },
    {
    brand: "Thomastik-Infeld",
    model: "Spirocore Light Medium or Heavy Orch",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "A", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
      { note: "E", peg: "#DC2626", pegLabel: "Red", ballEnd: "#DC2626", ballEndLabel: "Red" },
    ],
  },
  {
    brand: "D'Addario",
    model: "Helicore Light Medium or Heavy Orch",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #3B82F6, #3B82F6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Blue/Gold Spiral" },
      { note: "D", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #3B82F6, #3B82F6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Blue/Gold Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #3B82F6, #3B82F6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Blue/Gold Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #3B82F6, #3B82F6 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Blue/Gold Spiral" },
    ],
  },
  {
    brand: "D'Addario",
    model: "Helicore Hybrid Light Medium or Heavy Orch",
    strings: [
      { note: "G", peg: "#722F37", pegLabel: "Wine", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Dark Green/Gold Spiral" },
      { note: "D", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Dark Green/Gold Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Dark Green/Gold Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #064E3B, #064E3B 6px, #CA8A04 6px, #CA8A04 8px)", ballEndLabel: "Dark Green/Gold Spiral" },
    ],
  },
  {
    brand: "D'Addario",
    model: "Kaplan Light Medium or Heavy Orch",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 6px, #000000 6px, #000000 8px)", ballEndLabel: "Grey/Black Spiral" },
      { note: "D", peg: "#CA8A04", pegLabel: "Gold", ballEnd: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 6px, #000000 6px, #000000 8px)", ballEndLabel: "Grey/Black Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 6px, #000000 6px, #000000 8px)", ballEndLabel: "Grey/Black Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #A8A29E, #A8A29E 6px, #000000 6px, #000000 8px)", ballEndLabel: "Grey/Black Spiral" },
    ],
  },
    {
    brand: "Jargar",
    model: "Light (Dolce) Orch",
    strings: [
      { note: "G", peg: "#16A34A", pegLabel: "Green", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "D", peg: "#16A34A", pegLabel: "Green", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "A", peg: "#16A34A", pegLabel: "Green", ballEnd: "#16A34A", ballEndLabel: "Green" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "#16A34A", ballEndLabel: "Green" },
    ],
  },
      {
    brand: "Jargar",
    model: "Medium Orch",
    strings: [
      { note: "G", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "D", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "A", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "E", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
    ],
  },
      {
    brand: "Jargar",
    model: "Heavy (Forte) Orch",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "D", peg: "#DC2626", pegLabel: "Red", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "A", peg: "#DC2626", pegLabel: "Red", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "E", peg: "#DC2626", pegLabel: "Red", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
    ],
  },
        {
    brand: "D'Addario",
    model: "Zyex Orch",
    strings: [
      { note: "G", peg: "#DC2626", pegLabel: "Red", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #EF4444 6px, #EF4444 8px)", ballEndLabel: "Orange/Red Spiral" },
      { note: "D", peg: "#EAB308", pegLabel: "Yellow", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #EF4444 6px, #EF4444 8px)", ballEndLabel: "Orange/Red Spiral" },
      { note: "A", peg: "#1C1917", pegLabel: "Black", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #EF4444 6px, #EF4444 8px)", ballEndLabel: "Orange/Red Spiral" },
      { note: "E", peg: "#16A34A", pegLabel: "Green", ballEnd: "repeating-linear-gradient(45deg, #F97316, #F97316 6px, #EF4444 6px, #EF4444 8px)", ballEndLabel: "Orange/Red Spiral" },
    ],
  },
      {
    brand: "Thomastik-Infeld",
    model: "Superflexible Orch",
    strings: [
      { note: "G", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "D", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "A", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
      { note: "E", peg: "#BAE6FD", pegLabel: "Light Blue", ballEnd: "#BAE6FD", ballEndLabel: "Light Blue" },
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
