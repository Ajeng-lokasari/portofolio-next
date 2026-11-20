"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function TombolTema() {
    useEffect(() => {
        if(localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
        }
    }, []);

  function gantiTema() {
   const gelap=  document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", gelap? "gelap" : "terang");
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="w-full shrink-0 whitespace-nowrap rounded-lg border border-white px-3 py-1 text-center text-sm font-semibold text-white hover:border-aksen hover:bg-aksen md:w-28"
    >
      <span className="dark:hidden">Mode Gelap</span>
      <span className="hidden dark:inline">Mode Terang</span>
    </button>
  );
}