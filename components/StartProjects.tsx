"use client";
import React from "react";
import { Button } from "./ui/button";

function StartProjects() {
  return (
    <Button
      className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-base sm:text-lg rounded-full"
      onClick={() => {
        window.location.href = `/en/contact-us`;
      }}
    >
      Start Your Project
    </Button>
  );
}

export default StartProjects;
