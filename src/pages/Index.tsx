import StringIdentifier from "@/components/StringIdentifier";
import BrandBrowser from "@/components/BrandBrowser";
import SuggestionForm from "@/components/SuggestionForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-wood-grain">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-gradient-gold font-display font-bold text-sm">B</span>
          </div>
          <h1 className="font-display text-xl font-semibold text-foreground">
            Bass String <span className="text-gradient-gold">Identifier</span>
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section className="container max-w-4xl mx-auto px-4 py-12 text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
          Know Your <span className="text-gradient-gold">Strings</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Identify double bass strings by their silk wrap colors, or browse the catalog by brand. 
          Can't find yours? Send us a suggestion.
        </p>
      </section>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 pb-16 space-y-8">
        <StringIdentifier />
        <BrandBrowser />
        <SuggestionForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6">
        <p className="text-center text-xs text-muted-foreground">
          Bass String Identifier — Built for bassists, by bassists
        </p>
      </footer>
    </div>
  );
};

export default Index;
