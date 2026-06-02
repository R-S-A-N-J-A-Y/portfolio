"use client";

import { Hero } from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <section id="hero" aria-labelledby="hero-title">
        <Hero />
      </section>
    </main>
  );
}
