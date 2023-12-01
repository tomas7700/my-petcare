
'use client';
import { useEffect } from "react"
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure('eb8afaa8-a745-4657-9259-f0014ee90f2f');
    },[]);

    return null;
}
