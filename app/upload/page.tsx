import Image from "next/image";
import { Luckiest_Guy, Inter } from "next/font/google";
import { Slider } from "@/components/ui/slider"
//import { Form } from "@/components/form";
import Form from "@/components/form"

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400" })
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="min-h-screen flex justify-center flex-col bg-[#17122B] text-[#EEE] justify-center items-center">
            <h1 className={`${luckiestGuy.className} text-6xl p-4`}>Upload</h1>
            <p className="text-sm">Upload an image you wish to see turn into music</p>
            <div className="flex flex-row justify-between gap-10 p-4">
                <div className="bg[#EEE]">
                    <Form/>
                    
                </div>
            </div>
        </main>
    );
}

