"use client";

import { Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import FloatingDock from "../components/dock/dock";

export default function HomePage() {
  return (
    <>
      <main>
        <section id="hero" aria-labelledby="hero-title">
          <Hero />
        </section>
        <FloatingDock />
      </main>

      <Footer />
    </>
  );
}
