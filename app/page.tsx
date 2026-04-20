"use client";

import {
  Activity,
  Crosshair,
  Gauge,
  Keyboard,
  Orbit,
  Radar,
  ScanSearch,
  Shield,
  Sparkles,
  Swords,
  Timer,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trackEvent } from "@/lib/analytics";

const LINKS = {
  site: "https://babel-lexicon-war.vercel.app/",
};

const navItems = [
  { id: "gameplay", label: "Gameplay" },
  { id: "facciones", label: "Facciones" },
  { id: "devlog", label: "Devlog" },
  { id: "faq", label: "FAQ" },
];

const stats = [
  { label: "Modo", value: "Sprint + Combat" },
  { label: "Input", value: "100% teclado" },
  { label: "Estado", value: "Prototipo activo" },
  { label: "Meta", value: "Demo publica 2026" },
];

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
  {
    title: "Telemetria en vivo",
    body: "HUD con WPM actual, precision y progreso de palabra para decisiones en milisegundos.",
    icon: Activity,
  },
  {
    title: "Ritmo de alto riesgo",
    body: "Flujo continuo genera ventaja; interrupciones te dejan expuesto frente a oleadas largas.",
    icon: Zap,
  },
];

const factions = [
  {
    title: "Programa TYPO",
    subtitle: "Pilotos-escritores humanos",
    points: [
      "Especialistas en reconocimiento de patrones lexicales",
      "Doctrina de combate basada en precision bajo presion",
      "Naves afinadas para reaccionar a ritmo mecanografico",
    ],
    icon: Shield,
  },
  {
    title: "Enjambre Lexical",
    subtitle: "Lenguaje que se hizo entidad",
    points: [
      "No destruye: reinterpreta estructuras y sistemas",
      "Cada unidad opera con una palabra-nucleo unica",
      "La sintaxis enemiga evoluciona por oleadas",
    ],
    icon: Swords,
  },
];

const devlog = [
  {
    phase: "Fase 01",
    title: "Nucleo de input",
    text: "Captura global de teclado, correccion con backspace y latencia estable para gameplay.",
    status: "Completado",
  },
  {
    phase: "Fase 02",
    title: "Loop Sprint",
    text: "Movimiento ligado a WPM en ventana deslizante con penalizacion por error tipografico.",
    status: "Completado",
  },
  {
    phase: "Fase 03",
    title: "Loop Combat",
    text: "Targeting por palabra-nucleo y progresion de dano por escritura precisa en tiempo real.",
    status: "En progreso",
  },
  {
    phase: "Fase 04",
    title: "Capas narrativas",
    text: "Eventos diegeticos de Lyra y Kael integrados sin romper el flujo de accion.",
    status: "Planificado",
  },
];

export default function Home() {
  return (
    <div className="babel-shell">
      <div className="babel-nebula" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/40 bg-cyan-400/10 text-cyan-200">
              <Orbit size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">Nexolang Broadcast</p>
              <p className="text-[11px] text-zinc-400">BABEL: Lexicon War commercial landing</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1 text-xs text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Badge className="border border-cyan-300/40 bg-cyan-400/10 text-cyan-100">Early Access 2026</Badge>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-20 pt-10 sm:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-red-100">
              <ScanSearch size={14} />
              Enjambre Lexical detectado
            </p>

            <h1 className="text-balance text-4xl font-semibold leading-[1.04] text-zinc-100 sm:text-5xl lg:text-6xl">
              BABEL: Lexicon War
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Shooter tipografico de ciencia ficcion donde la escritura es accion directa. Escribe
              para moverte, fijar objetivo, romper escudos semanticos y sobrevivir a oleadas que
              evolucionan como un idioma hostil.
            </p>

            <p className="max-w-xl rounded-md border-l-2 border-cyan-300/60 bg-zinc-900/70 px-4 py-3 text-sm italic text-zinc-300">
              &quot;Las palabras no se acaban. Solo cambian de mano.&quot;
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                className={buttonVariants({ size: "lg", className: "bg-cyan-300 text-zinc-900 hover:bg-cyan-200" })}
                href={LINKS.site}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("cta_click", { location: "hero", cta: "sitio_disponible" })}
              >
                Ver sitio disponible
              </a>
              <span
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "cursor-not-allowed border-zinc-700 bg-zinc-900/30 text-zinc-400 opacity-70",
                })}
                aria-disabled="true"
              >
                Wishlist en Steam (Proximamente)
              </span>
            </div>
          </div>

          <Card className="border-cyan-300/20 bg-zinc-950/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-zinc-100">Build snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-zinc-300">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
                    <p className="text-zinc-500">{stat.label}</p>
                    <p className="mt-1 text-zinc-100">{stat.value}</p>
                  </div>
                ))}
              </div>
              <Separator className="bg-zinc-800" />
              <p>
                Arquitectura hibrida: motor Three.js para escena y HUD React superpuesto para
                lectura tactica en vivo.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Objetivo", "Supervivencia por precision"],
            ["Habilidad", "WPM + lectura de patron"],
            ["Narrativa", "Lyra Voss / Kael Voss"],
            ["Fantasia", "Lenguaje como campo de batalla"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</p>
              <p className="mt-2 text-sm text-zinc-200">{value}</p>
            </div>
          ))}
        </section>

        <section id="gameplay" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-zinc-100">Gameplay central</h2>
            <p className="max-w-3xl text-zinc-300">
              Dos modos comparten la misma regla: el lenguaje no decora la interfaz, controla el
              combate.
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
                  <p className="text-zinc-400">Error tipografico = penalizacion inmediata y perdida de flujo.</p>
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
                  <p className="text-zinc-400">Lectura tactica de rendimiento en ventana deslizante.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-100">Features destacadas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="border-zinc-800 bg-zinc-900/50 transition-colors hover:border-cyan-400/50"
                >
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

        <section id="facciones" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-zinc-100">Facciones en conflicto</h2>
            <p className="max-w-3xl text-zinc-300">
              No es solo humano vs maquina. Es interpretacion humana contra lenguaje autonomo.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {factions.map((faction) => {
              const Icon = faction.icon;
              return (
                <Card key={faction.title} className="border-zinc-800 bg-zinc-950/70">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-zinc-100">
                      <span className="grid size-9 place-items-center rounded-md border border-zinc-700 bg-zinc-900/70 text-cyan-200">
                        <Icon size={18} />
                      </span>
                      {faction.title}
                    </CardTitle>
                    <p className="text-sm text-zinc-400">{faction.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-zinc-300">
                    {faction.points.map((point) => (
                      <p key={point}>• {point}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="devlog" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-zinc-100">Devlog de desarrollo</h2>
            <p className="max-w-3xl text-zinc-300">
              Evolucion del proyecto con foco en mecanica central, narrativa integrada y performance web.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {devlog.map((item) => (
              <Card key={item.title} className="border-zinc-800 bg-zinc-900/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-3">
                    <Badge className="border-zinc-700 bg-zinc-800 text-zinc-200">{item.phase}</Badge>
                    <span className="text-xs text-cyan-300">{item.status}</span>
                  </div>
                  <CardTitle className="text-zinc-100">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
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
              <p>Q4: Demo publica, campaña de wishlist y pruebas de performance web.</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-100">Proyeccion de experiencia</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-zinc-100">
                  <Timer size={18} className="text-cyan-200" />
                  Sesiones cortas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300">
                8 a 15 minutos de intensidad alta para repetir loops y mejorar precision rapidamente.
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-zinc-100">
                  <Sparkles size={18} className="text-cyan-200" />
                  Curva de mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300">
                Aprendizaje progresivo: de escritura reactiva a lectura predictiva de patrones enemigos.
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-zinc-100">
                  <Swords size={18} className="text-cyan-200" />
                  Riesgo constante
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300">
                Cada error importa. La presion narrativa y mecanica se mantiene durante todo el combate.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-100">Preguntas frecuentes</h2>
          <Accordion className="w-full rounded-xl border border-zinc-800 bg-zinc-900/40 px-4">
            <AccordionItem value="a" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">
                Es solo para jugadores expertos en mecanografia?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                No. La dificultad escala por longitud de palabra, velocidad de oleadas y tolerancia a error.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">Necesito teclado especial?</AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                No. Funciona con teclado estandar. Lo decisivo es ritmo, lectura y precision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">Tiene historia o solo score?</AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                Tiene ambas capas: score competitivo y arco narrativo de Lyra/Kael integrado al gameplay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="d" className="border-zinc-800">
              <AccordionTrigger className="text-left text-zinc-100">Cuando abren trailer y wishlist?</AccordionTrigger>
              <AccordionContent className="text-zinc-300">
                Estamos cerrando captura final de vertical slice. Se activaran como proximos hitos publicos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-zinc-900 to-rose-500/15 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-zinc-100">Listo para entrar al Programa TYPO?</h3>
              <p className="max-w-2xl text-zinc-300">
                El unico enlace activo por ahora es el sitio oficial. Wishlist, trailer y comunidad se habilitan
                proximamente.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className={buttonVariants({ className: "bg-cyan-300 text-zinc-900 hover:bg-cyan-200" })}
                href={LINKS.site}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("cta_click", { location: "final", cta: "sitio_disponible" })}
              >
                Ver sitio disponible
              </a>
              <span
                className={buttonVariants({
                  variant: "secondary",
                  className: "cursor-not-allowed bg-zinc-200 text-zinc-900 opacity-70",
                })}
                aria-disabled="true"
              >
                Discord (Proximamente)
              </span>
              <span
                className={buttonVariants({
                  variant: "outline",
                  className: "cursor-not-allowed border-zinc-700 bg-zinc-900/30 text-zinc-400 opacity-70",
                })}
                aria-disabled="true"
              >
                Newsletter (Proximamente)
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-sm text-zinc-500 sm:px-8">
        <Separator className="mb-5 bg-zinc-800" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>BABEL: Lexicon War. Las palabras no se acaban. Solo cambian de mano.</p>
          <p className="text-zinc-600">Next.js + shadcn/ui case study</p>
        </div>
      </footer>
    </div>
  );
}
