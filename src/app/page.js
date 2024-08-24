"use client"
import Boat from "@/components/Boat";
import FeelingLost from "@/components/FeelingLost";
import GoFree from "@/components/GoFree";
import GuidYou from "@/components/GuidYou";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";


export default function Home() {
  return (
  <div className="mx-auto max-w-[1320px]">
    <Hero></Hero>
    <FeelingLost></FeelingLost>
    <GuidYou></GuidYou>
    <Boat></Boat>
    <OurFeatures></OurFeatures>
    <GoFree></GoFree>
  </div>
  );
}
