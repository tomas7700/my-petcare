'use client';

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Settings, Stethoscope,Laugh, LayoutDashboard, MessageSquare } from "lucide-react";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { FreeCounter } from "./free-counter";

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },
 {
        label: 'AI-Assistant',
        icon: MessageSquare,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        href: '/ai-assistant'
    },
    {
        label: 'Fun Room',
        icon: Laugh,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500/10',
        href: '/giph'
    },
    {
        label: 'Medical History',
        icon: Stethoscope,
        color: 'text-pink-700',
        bgColor: 'bg-pink-700/10',
        href: '/dog-history'
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',

    },
]
interface SidebarProps {
    apiLimitCount: number;
};


const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const Sidebar = ({
    apiLimitCount = 0
}:SidebarProps ) => {

    const pathname = usePathname();
    return (
        <div className="w-full space-y-4 py-4 flex flex-col h-full bg-[#111827] text-[#fff]">
            <div className="px-3 py-2 flex-1">

                <Link href='/dashboard' className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src='/logo.png' />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>My Pet Care</h1>

                </Link>

                <div className="space-y-1">

                    {routes.map((route) => (

                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#fff] hover:bg-[#fff]/10 rounded-lg transsition",
                                pathname === route.href ? 'text-[#fff] bg-[#fff]/10' : 'text-zinc-400')}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn('h-5 w-r mr-3', route.color)} />
                                {route.label}
                            </div>
                        </Link>

                    ))}

                </div>
            </div>
           < FreeCounter apiLimitCount={apiLimitCount} />
        </div>

    );
}

export default Sidebar;