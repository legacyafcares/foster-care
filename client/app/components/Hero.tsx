"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  const handleClick = () => router.push("/our-services");
  return (
    <div className="relative flex-1">
      <video
        src={"/hero2.mp4"}
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover" // Ensures the video covers the container
      />

      {/* Overlay with a dark gradient */}
      <div className="absolute top-0 left-0 size-[100%] lg:bg-gradient-to-l lg:from-black/30 lg:to-black/10 bg-gradient-to-b from-black/10 to-black/30" />
      <div className="absolute md:top-[200px] xl:top-[250px] md:ml-[100px] lg:ml-[200px] top-[150px] flex flex-col items-center justify-center p-4 md:w-3/4  text-white">
        <h1 className="p-3 lg:text-7xl text-4xl font-extrabold text-center">
          Compassionate care for your loved ones
        </h1>
        <p className="lg:text-2xl p-4 font-afacad text-center">
          At our foster care service, we prioritize the well-being and happiness
          of the elderly. Join us in creating a nurturing environment that feels
          like home.
        </p>
        <Button
          onClick={handleClick}
          className="mx-auto mt-12"
          colorScheme="green"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
