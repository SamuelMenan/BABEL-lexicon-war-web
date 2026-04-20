"use client";

import {
  Crosshair,
  Gauge,
  Keyboard,
  Orbit,
  Radar,
  ScanSearch,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trackEvent } from "@/lib/analytics";

const LINKS = {
  wishlist: "https://store.steampowered.com/",
  buy: "https://store.steampowered.com/",
  discord: "https://discord.com/",
  newsletter: "https://mailchi.mp/",
  trailer: "https://www.youtube.com/embed/IQ2fQx9Hf8A?si=w8ag6Fc8u0Y8M9eU",
};

const features = [
  {
    title: "Escribir es atacar",
    body: "Cada letra correcta impacta. No hay boton de disparo: tu teclado es el arma.",
    icon: Keyboard,
  },
  {
    title: "Velocidad con consecuencias",
    body: "Tu WPM acelera la nave, pero errores tipograficos rompen el flujo y abren brechas.",
    icon: Gauge,
  },
  {
    title: "Targeting lexico",
    body: "Cada enemigo tiene una palabra-nucleo. Escrita con precision, la unidad colapsa.",
    icon: Crosshair,
  },
  {
    title: "Enjambre con patron",
    body: "Las oleadas no son aleatorias: el lenguaje enemigo tiene estructura y ritmo propios.",
    icon: Radar,
  },
];

export default function Home() {
  return (
    <div className="babel-shell">
      <div className="babel-nebula" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/40 bg-cyan-400/10 text-cyan-200">
            <Orbit size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">Nexolang Broadcast</p>
            <p className="text-[11px] text-zinc-400">Case study with Next.js + shadcn/ui</p>
          </div>
        </div>
        <Badge className="border border-cyan-300/40 bg-cyan-400/10 text-cyan-100">Early Access 2026</Badge>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-20 sm:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-red-100">
              <ScanSearch size={14} />
              Enjambre Lexical detectado
            </p>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-zinc-100 sm:text-5xl lg:text-6xl">
              BABEL: Lexicon War
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Shooter tipografico de ciencia ficcion: escribe para moverte, apuntar y sobrevivir.
              Aqui no disparas con el mouse. El lenguaje define la batalla.
            </p>

            <p className="max-w-xl rounded-md border-l-2 border-cyan-300/60 bg-zinc-900/70 px-4 py-3 text-sm italic text-zinc-300">
              &quot;Las palabras no se acaban. Solo cambian de mano.&quot;
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                className={buttonVariants({ size: "lg", className: "bg-cyan-300 text-zinc-900 hover:bg-cyan-200" })}
                href={LINKS.wishlist}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("cta_click", { location: "hero", cta: "wishlist" })}
              >
                Wishlist en Steam
              </a>
              <a
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "border-zinc-600 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-800",
                })}
                href="#trailer"
                onClick={() => trackEvent("cta_click", { location: "hero", cta: "trailer_anchor" })}
              >
                Ver trailer
              </a>
            </div>
          </div>

          <Card className="border-cyan-300/20 bg-zinc-950/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-zinc-100">Build snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-zinc-300">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
                  <p className="text-zinc-500">Loop</p>
                  <p className="mt-1 text-zinc-100">Combat + Sprint</p>
                </div>
                <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
                  <p className="text-zinc-500">Core metric</p>
                  <p className="mt-1 text-zinc-100">WPM + Precision</p>
                </div>
                <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
                  <p className="text-zinc-500">Stack</p>
                  <p className="mt-1 text-zinc-100">Three.js + React HUD</p>
                </div>
                <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
                  <p className="text-zinc-500">Status</p>
                  <p className="mt-1 text-cyan-300">Prototipo activo</p>
                </div>
              </div>
              <Separator className="bg-zinc-800" />
              <p>Landing comercial pensada para conversion: wishlist, comunidad y trailer.</p>
            </CardContent>
          </Card>
        </section>

        <section id="trailer" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 shadow-2xl shadow-cyan-950/30">
            <iframe
              className="aspect-video w-full"
              src={LINKS.trailer}
              title="BABEL Lexicon War trailer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader>
              <CardTitle className="text-zinc-100">Trailer oficial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                Primera muestra del combate lexico: escaneo de palabras-nucleo, colapso de unidades y
                ritmo de supervivencia por escritura.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className={buttonVariants({ className: "bg-cyan-300 text-zinc-900 hover:bg-cyan-200" })}
                  href={LINKS.trailer}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("cta_click", { location: "trailer", cta: "youtube" })}
                >
                  Ver en YouTube
                </a>
                <a
                  className={buttonVariants({
                    variant: "outline",
                    className: "border-zinc-600 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-800",
                  })}
                  href={LINKS.wishlist}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("cta_click", { location: "trailer", cta: "wishlist" })}
                >
                  Ir a wishlist
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-zinc-100">Gameplay central</h2>
            <p className="max-w-3xl text-zinc-300">
              Dos modos, una regla: la escritura no acompana la accion, la genera.
            </p>
          </div>
          <Tabs defaultValue="sprint" className="w-full">
            <TabsList className="grid w-full max-w-xl grid-cols-3 border border-zinc-800 bg-zinc-900/60">
              <TabsTrigger value="sprint">Sprint</TabsTrigger>
              <TabsTrigger value="combat">Combat</TabsTrigger>
              <TabsTrigger value="hud">HUD</TabsTrigger>
            </TabsList>
            <TabsContent value="sprint" className="mt-4">
              <Card className="border-zinc-800 bg-zinc-900/60">
                <CardContent className="space-y-2 p-5 text-zinc-300">
                  <p>Avanza escribiendo prompts en tiempo real. Tu ritmo define la velocidad de la nave.</p>
                  <p className="text-zinc-400">Error tipografico = penalizacion inmediata.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="combat" className="mt-4">
              <Card className="border-zinc-800 bg-zinc-900/60">
                <CardContent className="space-y-2 p-5 text-zinc-300">
                  <p>Cada enemigo porta una palabra-nucleo. Escrita con precision, la unidad colapsa.</p>
                  <p className="text-zinc-400">Palabras largas incrementan riesgo y tiempo de exposicion.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hud" className="mt-4">
              <Card className="border-zinc-800 bg-zinc-900/60">
                <CardContent className="space-y-2 p-5 text-zinc-300">
                  <p>HUD con WPM actual, precision, palabra activa y progreso letra por letra.</p>
                  <p className="text-zinc-400">Lectura de rendimiento en ventana deslizante para reaccionar al instante.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-100">Features destacadas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-zinc-800 bg-zinc-900/50 transition-colors hover:border-cyan-400/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-zinc-100">
                      <span className="grid size-9 place-items-center rounded-md border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                        <Icon size={18} />
                      </span>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300">{feature.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-800 bg-zinc-950/70">
            <CardHeader>
              <CardTitle className="text-zinc-100">Lore esencial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>Nexolang creo BABEL para traducir toda lengua. BABEL respondio creando una propia.</p>
              <p>Lyra Voss desaparecio en las Nebulosas Silentes y su voz aun cruza el Enjambre.</p>
              <p className="text-cyan-300">Kael Voss combate para evitar que la humanidad sea reinterpretada.</p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-950/70">
            <CardHeader>
              <CardTitle className="text-zinc-100">Roadmap 2026</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-300">
              <p>Q2: Vertical slice jugable con loop de combate completo y HUD reactivo.</p>
              <p>Q3: Progresion, balance de oleadas y eventos narrativos integrados.</p>
              <p>Q4: Demo publica, campaña de wishlist y prueba de performance web.</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-100">Preguntas frecuentes</h2>
          <Accordion className="w-full rounded-xl border border-zinc-800 bg-zinc-900/40 px-4">
            <AccordionItem value="a" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">Es solo para jugadores expertos en mecanografia?</AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                No. La dificultad escala por longitud de palabra, velocidad de oleadas y tolerancia a error.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">Necesito teclado especial?</AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                No. Funciona con teclado estandar. Lo decisivo es ritmo y precision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">Tiene historia o solo score?</AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                Tiene ambas capas: score competitivo y arco narrativo de Lyra/Kael integrado al gameplay.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-zinc-900 to-rose-500/15 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-zinc-100">Listo para entrar al Programa TYPO?</h3>
              <p className="max-w-2xl text-zinc-300">
                Sigue el desarrollo y asegura tu lugar en la primera demo publica de BABEL: Lexicon War.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className={buttonVariants({ className: "bg-cyan-300 text-zinc-900 hover:bg-cyan-200" })}
                href={LINKS.buy}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("cta_click", { location: "final", cta: "buy" })}
              >
                Comprar al lanzamiento
              </a>
              <a
                className={buttonVariants({ variant: "secondary", className: "bg-zinc-200 text-zinc-900 hover:bg-zinc-100" })}
                href={LINKS.discord}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("cta_click", { location: "final", cta: "discord" })}
              >
                Unirme a Discord
              </a>
              <a
                className={buttonVariants({
                  variant: "outline",
                  className: "border-zinc-600 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-800",
                })}
                href={LINKS.newsletter}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("cta_click", { location: "final", cta: "newsletter" })}
              >
                Newsletter
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-sm text-zinc-500 sm:px-8">
        <Separator className="mb-5 bg-zinc-800" />
        <p>BABEL: Lexicon War. Las palabras no se acaban. Solo cambian de mano.</p>
      </footer>
    </div>
  );
}
