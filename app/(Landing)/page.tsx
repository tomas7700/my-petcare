

import { LandingNavbar } from "@/components/landing-navbar";
import Link from "next/dist/client/link";
import { UserButton } from "@clerk/nextjs";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const   landingPage = () => {
  return (
<div className="h-full">
  <LandingNavbar/>
 < LandingHero/>
 <LandingContent />

</div>
  )
}

export default landingPage;