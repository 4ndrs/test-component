type Locale = "en" | "it" | "es" | "ja";

const GREETINGS = {
  it: "Ciao",
  es: "Hola",
  en: "Hello",
  ja: "こんにちは",
} as const satisfies { [key in Locale]: string };

export const Greeting = ({ locale = "en" }: { locale: Locale }) => (
  <p>{GREETINGS[locale]}</p>
);
