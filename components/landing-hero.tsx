


'use client'
import Link from 'next/link';
import { Button } from './ui/button';
import {useAuth} from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect'
export const LandingHero = () =>{

    const {isSignedIn} = useAuth();
return(
   <div className='text-white font-bold py-36 text-center space-y-5'>
 <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
<h1>The Best Assistant for rapid response</h1>
<div className='text-[#fff] bg-clip-text bg-gradient-to from-purple-400 to-pink-600'>
    <TypewriterComponent options ={{
        strings:
        [
        'AI assistant',
        'Giph',

        ], autoStart: true ,
        loop:true

    }} 
    />

  
</div>
 </div>

 <div className='text-sm md:text-xl font-light text-zinc-400 '>
 Get answers in less than a minute.
 </div>
 <div>
    <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
  <Button variant='premium' className='md:text-lg p-4 md:p-6 rounded-full font-semibold '>
    Get your Assitant now for FREE
  </Button>
    </Link>
 </div>
 <div className='text-zinc-400 text-xs md:text-sm font-normal'>
   Join now , is FREE
 </div>
   </div>
)

}