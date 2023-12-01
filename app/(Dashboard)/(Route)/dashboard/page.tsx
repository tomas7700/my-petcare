'use client';

import { Card } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Stethoscope, Laugh, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/dist/client/components/navigation';

import GiphySearch from '@/components/gif-search';

const tools = [
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
  }

];


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className='h-[100vh] overflow-hidden p-3 pb-10 flex flex-col gap-5'>
      <div className="  text mb-8 space-y-4 h-[50%]">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Instant AI Help For Your Dog </h2>
        <p className="text-muted-foregorund font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of Fast Veterinary responses!!
        </p>
        <div id='cards' className="grid grid-flow-col auto-row-auto s overflow-x-auto items-center gap-5   p-4 ">

          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className='p-4 min-w-[300px] min-h-[250px] border-black/5  hover:shadow-md transition cursor-pointer'>

              <div className='flex items-center gap-x-4'>

                <div className={cn('p-2 w-fit rounded-md ', tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className='font-semibold'>
                  {tool.label}
                </div>

              </div>
              <ArrowRight className='w-5 h-5' />
            </Card>
          ))}
        </div>
      </div>


       <GiphySearch numberOfGifs={6} />

   
       
      </div>

    

  )
}

export default DashboardPage;