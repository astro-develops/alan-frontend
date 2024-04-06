import { Luckiest_Guy, Inter } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import WelcomeUser from "@/components/welcome-user";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400"})
const inter = Inter({ subsets: ["latin"] });


export default function Nav() {
return (
<nav className="flex justify-between gap-10 px-6 py-4 bg-[#17122B] text-[#EEE]">
    <div className={`${luckiestGuy.className} text-3xl`}>
        ALAN
    </div>
    <div className="flex flex-row gap-10 items-center justify-end bg-[#08808]">
        <a href="./">Home</a>
        <a href="./about">About</a>
        <a href="./upload">Upload</a>
        <WelcomeUser/>
        <UserButton afterSignOutUrl="/"/>
        
    </div>
</nav>
);
}
