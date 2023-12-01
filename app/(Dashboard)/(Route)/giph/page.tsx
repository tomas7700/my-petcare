'use client';

import GiphySearch from '@/components/gif-search';
import {  MessageSquare, Stethoscope, Laugh, Bot } from 'lucide-react';

import { useRouter } from 'next/dist/client/components/navigation';

const tools = [
  {
    label: 'AI-Assistant',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: 'Fun Room',
    icon: Laugh,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music'
  },
  {
    label: 'Medical History',
    icon: Stethoscope,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image'
  }

];


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className='h-[100vh] overflow-y-scroll p-3 pb-11 flex flex-col gap-5'>
       
       <div className="  text mb-8 space-y-4 h-[50%]">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Fun Room </h2>
        <p className="text-muted-foregorund font-light text-sm md:text-lg text-center">
        Some laugh in life is good for your health too
        </p>
        <GiphySearch numberOfGifs={40} />
      </div>
    
    </div>

  )
}

export default DashboardPage;