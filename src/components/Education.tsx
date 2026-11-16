"use client";

import React from "react";
import { Reveal } from "./MotionPrimitives";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 bg-[#F8FAF7] border-b border-[#17191C]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#4A515A]">
              <span className="w-2 h-2 rounded-full bg-[#B7F5DA] ring-2 ring-[#17191C]/15" />
              05 / Education
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b border-[#17191C]/12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#17191C]">
                Universitas Gunadarma
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#4A515A]">
                Bachelor&apos;s Degree &mdash; Informatics Engineering
              </p>
            </div>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.14em] text-[#17191C] shrink-0">
              July 2021 &mdash; December 2025
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
