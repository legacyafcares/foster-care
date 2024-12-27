import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <section className="flex-1 lg:py-24">
      <div className="flex max-lg:flex-col justify-center items-center gap-6 w-[90%] h-fit md:px-4 md:py-6 mx-auto border-black max-md:py-16">
        <div className="lg:w-1/2">
          <div>
            <h1 className="font-extrabold lg:text-3xl xl:text-4xl text-xl mb-3">
              Compassionate Foster Care Services Tailored for Our Elderly
              Community
            </h1>
            <p className="lg:text-xl font-afacad">
              We provide nurturing foster care services that prioritize the
              well-being of elderly individuals. Our dedicated team ensures a
              safe and supportive environment where seniors can thrive.
            </p>
            <div className="flex max-lg:flex-col lg:justify-center lg:items-center lg:mt-12 mt-6 gap-6">
              <div className="max-md:w-full">
                <h1 className="font-extrabold lg:text-3xl text-xl">
                  Personalized Care
                </h1>
                <p className="lg:text-xl font-afacad">
                  Tailored support plans that meet the unique needs of each
                  elderly individual.
                </p>
              </div>
              <div className="max-md:w-full">
                <h1 className="font-extrabold lg:text-3xl text-xl">
                  Community Focused
                </h1>
                <p className="lg:text-xl font-afacad">
                  Building connections and fostering relationships within a
                  caring community for seniors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full max-md:hidden">
          <Image
            src={"/section2.jpg"}
            alt={"Compassion"}
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
