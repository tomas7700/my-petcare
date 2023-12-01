'use client';

import { Card } from '@/components/ui/card';
import { Settings} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/dist/client/components/navigation';

import GiphySearch from '@/components/gif-search';


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className='h-[100vh] overflow-hidden p-3 pb-10 flex flex-col gap-5'>
      
      <div className="  text mb-8  space-y-4 h-[50%]">
    
        <h2 className="text-2xl md:text-4xl font-bold text-center">Settings </h2>
   
        <p className="text-muted-foregorund font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of Fast Veterinary responses!!
        </p>
        

  
      </div>
       

       <h1 className='text-center text-8xl font-bold'>SOON</h1>
      </div>

    

  )
}

export default DashboardPage;