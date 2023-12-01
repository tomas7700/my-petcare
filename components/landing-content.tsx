


'use client'
import {useAuth} from '@clerk/nextjs';
import { Card,CardHeader,CardContent,CardTitle } from './ui/card';

const testimonials = [
    {
        name: 'Antonio',
        avatar:'A',
        title:'Awesome',
        description:'Love this tool'

    },    {
        name: 'martin',
        avatar:'B',
        title:'Fast learning',
        description:'Easy to learn'

    },
    {
        name: 'Peter',
        avatar:'C',
        title:'Love this!!',
        description:''

    }
    
]



export const LandingContent = () =>{
    const {isSignedIn} = useAuth();
return(
   <div className='px-10 pb-20'>
    <h2 className='text-center text-4xl text-white font-extrabold mb-10 '>Testimonials</h2>
<div className='grid gap-6 first-line:grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
{testimonials.map((item)=>(
    <Card className='bg-[#192339] border-none' key={item.description}>
     <CardHeader >
<CardTitle className='flex items-center gap-x-2'>
    <div>
        <p className='text-lg'>{item.name}</p>
        <p className='text-zinc-400 text-sm '>{item.title}</p>
    </div>

</CardTitle>
<CardContent className='pt-4 px-0'>

    {item.description}

</CardContent>
     </CardHeader>
    </Card>
))}
</div>
   </div>
)

}