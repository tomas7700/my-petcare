'use client';

import { Button } from "@/components/ui/button";

import {Menu} from 'lucide-react';
import { Sheet, SheetTrigger,SheetContent } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

const MobileSideBar =  () => {

    const [isMounted,setIsMounted]= useState(false);
    useEffect (()=> {
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null;
    }
    return (

       <Sheet>
       <SheetTrigger>
        <button  className="md:hidden">
            <Menu/>
        </button>
        </SheetTrigger>
          <SheetContent side='left' className="p-0">
              <Sidebar apiLimitCount={0}/>
        </SheetContent>
        </Sheet>
    );
}

export default MobileSideBar;
