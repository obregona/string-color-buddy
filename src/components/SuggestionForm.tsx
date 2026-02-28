import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser"; // Importamos la librería

const suggestionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const SuggestionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false); // Estado para el botón

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = suggestionSchema.safeParse({ name, email, message });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    // --- CONFIGURACIÓN DE EMAILJS ---
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "idcuerdasmail",     // Reemplazar con tu Service ID
        "idcuerdastemplate",    // Reemplazar con tu Template ID
        templateParams,
        "Jk49F4FTeYgTZjotG"      // Reemplazar con tu Public Key
      )
      .then(
        () => {
          toast.success("Thank you! Your suggestion has been sent via EmailJS.");
          setName("");
          setEmail("");
          setMessage("");
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send. Please try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-primary/10">
          <Send className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Send a Suggestion</h2>
          <p className="text-sm text-muted-foreground">Help us improve — suggest a brand, correction, or feature</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-muted-foreground">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
              disabled={isSending}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="your@email.com"
              disabled={isSending}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-muted-foreground">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="e.g. 'Please add Jargar strings...'"
            disabled={isSending}
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isSending ? "Sending..." : "Submit Suggestion"}
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;
