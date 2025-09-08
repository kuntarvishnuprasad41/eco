"use client";

import React from "react";
import { Button } from "./ui/button";

function Explore() {
  return (
    <Button
      onClick={() => {
        const element = document.getElementById("works");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-base sm:text-lg"
    >
      Explore Our Work
    </Button>
  );
}

export default Explore;
