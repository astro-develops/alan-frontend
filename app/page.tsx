"use client";

import Image from "next/image";
import { Luckiest_Guy, Inter } from "next/font/google";
import { motion } from "framer-motion"
import { InfiniteMovingCards } from "../components/infinite-moving-cards"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react"
import { UserButton, SignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader } from "@/components/ui/drawer";
const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400" })
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="min-h-screen items-center justify-between p-24 bg-[#17122B] text-[#EEE]">
      <div className="flex flex-col items-center justify-center">
        <span className={`${luckiestGuy.className} text-9xl`}>Alan</span>
        <span className={`${inter.className} text-1xl italic`}>Artistic Luminance Audio Network</span>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <div className="flex justify-end p-6">
          <Button className="w-2" variant="secondary" onClick={() => setIsOpen(false)}>X</Button>
          </div>
          <DrawerHeader className="flex flex-row justify-center items-center px-12 py-4">
            <SignUp />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </main>
  );
}

const testimonials = [
  {
    img: "/landscape7.png"
  },
  {
    img: "/landscape3.png"
  },
  {
    img: "/landscapeFlowers.png"
  }
];