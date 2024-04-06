import Image from "next/image";
import { Luckiest_Guy, Inter } from "next/font/google";
import { motion } from "framer-motion"

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400" })
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between  bg-[#17122B] text-[#EEE]">
      <div className="flex flex-col ">
        <span className={`${luckiestGuy.className} text-8xl underline text-center p-20`}>About the Team</span>
        <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <Image className="rounded-full aspect-square object-cover" src="/aritrabbc.png" alt="aritrabbc" width={200} height={200} />
            <span className={`${inter.className} text-4xl p-32 pt-10 `}>Aritra B.</span>
            <Image className="rounded-full aspect-square object-cover" src="/mohit.png" alt="mohit" width={200} height={200} />
            <span className={`${inter.className} text-4xl p-32 pt-10 `}>Mohit S.</span>
        </div>
        <div className="flex flex-col items-center justify-center">
        <Image className="rounded-full aspect-square object-cover" src="/arav.png" alt="arav" width={200} height={200} />
            <span className={`${inter.className} text-4xl p-32 pt-10 `}>Arav K.</span>
            <Image className="rounded-full aspect-square object-cover" src="/malav.png" alt="malav" width={200} height={200} />
            <span className={`${inter.className} text-4xl p-32 pt-10 `}>Malav P.</span>
        </div>
        </div>
      
      </div>
    </main>
  );
}