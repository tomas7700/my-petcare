'use client';

import { Empty } from "@/components/empty";
import { Heading } from "@/components/headings";
import { Loader } from "@/components/loader";
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";

import axios from "axios";

import { useRouter} from "next/navigation";


import { cn } from "@/lib/utils";

import { Form ,FormField,FormControl, FormItem} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "./constants";

import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

import  * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


import { useState } from "react";
import { ChatCompletionMessage } from "openai/resources/chat/index.mjs";



const ConversationPage =()=>{

    const router = useRouter();

    const [messages,setMessages] = useState<ChatCompletionMessage[]>([]);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt:''
        }
    });


    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
       try{

        const userMessage: ChatCompletionMessage = {
            role:"user",
            content: values.prompt,

        };

        const newMessages = [...messages, userMessage];

        const response = await axios.post('/api/ai-assistant', {
            messages: newMessages,
        });
        setMessages((current) => [...current, userMessage,response.data]);

        form.reset();

       }catch(error: any){
        //TODO Open Pro Modal
        console.log(error);


    }finally{
        router.refresh();
       }
    }


    return(
        <div>
            <Heading 
            title='AI Home Veterinary Assistant'
            description='Not a replacement for veterinary but a solution for fast answers'
            icon={MessageSquare}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
            /> 
            <div className="px-4 lg:px-8">

                <div>
                    <Form {...form}>
                        <form
                         onSubmit={form.handleSubmit(onSubmit)}
                         className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-smgrid grid-cols-12    gap-2' >
                                <FormField 
                                name='prompt'
                                render={({field}) =>(
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className='p-0 m-0'>
                                          <Input
                                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                          disabled={isLoading}
                                          placeholder="My dog feels bad, tell me 3 reasons why it could be"
                                          {...field}
                                          />
                                        </FormControl>
                                    </FormItem>
                                )} />
                                
                                <Button className="w-full col-span-12 lg:col-span-2 " disabled={isLoading}>Generate</Button>
                        </form>
                    </Form>
                </div>
                
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />

                        </div>
                    )}

                                    {messages.length === 0 && !isLoading  && (
                                        <Empty label='No conversation started'/>
                                    )} 

                            <div className="flex flex-col-reverse gap-y-4">
                                
                                {messages.map((message) => (
                                    <div className={cn('p-8 w-full flex items-start gap-x-8 rounded-ls', message.role === 'user' ? 'bg-white border border-black/10': 'bg-muted')}
                                    key={message.content}
                                    >
                                        {message.role === 'user' ? <UserAvatar/> : <BotAvatar/>}
                                        <p className="text-sm">
                                            
                                         {message.content}
                                         
                                        </p>
                                    </div>
                                ))}
                                </div> 
                </div>
            </div>
        </div>
    );
}
export default ConversationPage;
