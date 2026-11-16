"use client";

import React from "react";
import { Reveal, StickerBadge } from "./MotionPrimitives";

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 bg-[#FAF9F6] border-b-[2.5px] border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Reveal className="bg-white brutal-box rounded-2xl p-6 sm:p-10 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-3 flex flex-col items-start gap-2">
            <StickerBadge bg="#526BFF" textColor="#FAF9F6" rotate={-1}>
              05 // EDUCATION
            </StickerBadge>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#171717]/70">
              July 2021 — December 2025
            </span>
          </div>

          <div className="lg:col-span-6">
            <h2 className="font-heavy text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#171717]">
              Universitas Gunadarma
            </h2>
            <p className="mt-1.5 font-display text-base sm:text-lg font-bold text-[#171717]/80">
              Bachelor&apos;s Degree &mdash; Informatics Engineering
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <span className="px-4 py-2 bg-[#D7FF45] border-2 border-[#171717] shadow-[3px_3px_0_#171717] rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-[#171717]">
              B.ENG // COMPLETED
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
