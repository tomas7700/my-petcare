
import { Bot } from "lucide-react";
import Link from "next/link";
export const BottomBar = () => {
    return (


        <Link href='/ai-assistant' >
            <div className='object-contain fixed bottom-4 right-4 bg-[#d3eaf2] h-fit rounded-[50%] p-2 mb-2 border-black/5 hover:shadow-md transition '>
                <Bot className='h-12 w-12  ' />
            </div>
        </Link>

    );
}