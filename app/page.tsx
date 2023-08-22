"use client"

import React from "react";
import { HeroSection, PricingSection } from "@/components";
import { Button } from "@/components/ui/button";
import Register from "@/components/Register";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
     <Register />
    </div>
  );
}
