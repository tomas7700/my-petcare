

import Navbar from "@/components/navbar";
import Sidebar  from "@/components/sidebar";
import { BottomBar } from "@/components/bottomBar";
import { parse } from 'url';


import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();


  return (
    <div className="h-full relative overflow-y-hidden">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
        <div>   
          <Sidebar apiLimitCount={apiLimitCount}/>
        </div>
      </div>
      <main className="md:pl-72 ">
      < Navbar  />
      {children}
  
     
      </main>
    </div>

  );
}

// {isAiAssistantRoute !== '/ai-assistant' && <BottomBar/> }
export default DashboardLayout;