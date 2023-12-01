'use client';

import { useRouter } from 'next/dist/client/components/navigation';




const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className='h-[100vh] overflow-hidden p-3 pb-10 flex flex-col gap-5'>
      
      <div className="  text mb-8  space-y-4 h-[50%]">
    
        <h2 className="text-2xl md:text-4xl font-bold text-center">Dog Medical History </h2>
   
        <p className="text-muted-foregorund font-light text-sm md:text-lg text-center">
         Have all the data of your dog  everywhere
        </p>
        

  
      </div>
       

       <h1 className='text-center text-8xl font-bold'>SOON</h1>
      </div>

    

  )
}

export default DashboardPage;