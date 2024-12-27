import React from "react";
import SecondNav from "../components/SecondNav";
import Image from "next/image";

const page = () => {
  const coreValues = [
    {
      name: "Compassion",
      description: "We deeply care about staff, members and their families.",
    },
    {
      name: "Excellence",
      description: "We strive for exceptional care and service.",
    },
    {
      name: "Integrity",
      description: "We operate with transparency, honesty, and ethics.",
    },
    {
      name: "Empowerment",
      description: "We support members autonomy and independence.",
    },
    {
      name: "Community",
      description: "We foster connections and partnerships.",
    },
  ];

  const companyGoals = [
    "Provide high quality, responsive member centered care by helping members become healthy, independent and safe at home.",
    "Coordinate member care with other multidisciplinary care team through timely and focused consultations and interactions.",
    "Establish all our processes to achieve “the well-oiled machine”.",
    "Develop a culture of compliance by implementing policies and procedures that meet the applicable CARF state and federal standards and regulations.",
    "Make Legacy AFC the best place to work by acquiring and retaining high quality talent, providing fulfilling job opportunities and career advancement through training, mentoring, professional development and promotions.",
  ];
  return (
    <>
      <SecondNav />
      {/* history */}
      <section className="flex-1 lg:px-14 px-4 lg:pt-24 pt-12 bg-gray-100">
        <h1 className="lg:text-6xl text-2xl mb-6 text-center font-extrabold my-4 text-green-700">
          About Us
        </h1>
        <h2 className="lg:text-5xl text-xl mb-5 text-green-700">Our History</h2>
        <div className="size-full grid lg:grid-cols-3 gap-6 font-afacad lg:text-lg text-md">
          <p>
            Founded in 2024, Legacy AFC was born out of a genuine desire to make
            a positive impact in the lives of individuals facing medical or
            cognitive conditions. We believe that everyone deserves the
            opportunity to age with dignity, surrounded by the familiarity and
            comfort of their own home.
          </p>
          <p>
            We want to fulfill unmet needs: Recognizing a gap in existing care
            options, our founders aimed to create a program that not only
            provided essential medical and cognitive support but did so within
            the context of a nurturing, home-based environment. This approach
            ensures that individuals receive the care they need while
            maintaining a sense of autonomy and familiarity. In addition, we aim
            to strengthen the bonds between caregivers, residents, and their
            families, fostering a sense of belonging within the broader
            community.
          </p>
          <p>
            Legacy AFC values its staff as the cornerstone of our exceptional
            service. We believe in supporting those who provide care, fostering
            an environment that promotes growth and balances work and personal
            life. We reward hard work with competitive pay and benefits and
            invest in our team&apos;s professional development through
            continuous training and mentorship. Our flexible working hours
            ensure our staff can manage personal commitments effectively. At
            Horizon, we offer more than one job; we provide a fulfilling career
            in a nurturing environment where every day&apos;s work makes a real
            difference.
          </p>
        </div>
      </section>
      {/* mission */}
      <section className="flex-1 lg:px-14 px-4 lg:pt-24 pt-12 bg-gray-100">
        <h2 className="lg:text-5xl text-xl mb-5 text-green-700">Our Mission</h2>
        <div className="size-full grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center gap-6 font-afacad text-lg">
          <p>
            Our mission is to enrich the lives of individuals and families
            through compassionate, holistic care and support, promoting healthy
            living, independence, and community engagement. <br />
            <br /> Legacy AFC recognizes that excellent care across the
            developmental continuum is paramount to the industry recognition of
            the homecare leadership we bring to the communities we service.{" "}
            <br />
            <br />
            We are committed to providing the highest quality of care to our
            residents, ensuring that they receive the support they need to live
            fulfilling lives. We strive to create a nurturing environment that
            fosters growth, independence, and a sense of belonging, where
            residents can age with dignity and respect.
          </p>
          <Image
            src={"/about-1.png"}
            width={400}
            height={400}
            alt="About Us"
            className="w-auto h-auto max-md:hidden"
          />
        </div>
      </section>
      {/* vision */}
      <section className="flex-1 lg:px-14 px-4 lg:pt-24 pt-12 bg-gray-100">
        <h2 className="lg:text-5xl text-xl mb-5 text-green-700 text-right mr-[420px]">
          Our Vision
        </h2>
        <div className="size-full grid lg:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-center font-afacad text-lg">
          <Image
            src={"/about-2.png"}
            alt="about us"
            width={400}
            height={400}
            className="max-md:hidden"
          />
          <p>
            Legacy AFC envisions a future where every individual has access to
            quality, compassionate care, enabling them to live life to the
            fullest in their own homes and communities.
          </p>
        </div>
      </section>
      {/* core values */}
      <section className="flex-1 lg:px-14 px-4 lg:pt-24 pt-12 bg-gray-100">
        <h2 className="lg:text-5xl text-xl mb-5 text-green-700">
          Our Core Values
        </h2>
        <div className="size-full grid lg:grid-cols-2 max-lg: justify-items-center max-lg:items-center grid-cols-1 gap-6 text-lg">
          <ol>
            {coreValues.map((value, index) => (
              <li key={index} className="mb-4 list-disc max-md:ml-4">
                <h3 className="lg:text-2xl text-lg mb-2 lg:font-semibold font-extrabold">
                  {value.name}
                </h3>
                <p className="font-afacad max-lg:text-md">
                  {value.description}
                </p>
              </li>
            ))}
          </ol>
          <Image
            src={"/about-3.png"}
            alt="about us"
            width={400}
            height={400}
            className="max-md:hidden"
          />
        </div>
      </section>
      {/* commitment to quality */}
      <section className="flex-1 lg:px-14 px-4 lg:pt-24 pt-12 bg-gray-100">
        <h2 className="lg:text-5xl text-xl mb-5 text-green-700 text-right mr-[100px]">
          Our Commitment to Quality
        </h2>
        <div className="size-full grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center gap-6 text-lg">
          <Image
            src={"/about-4.png"}
            alt="about us"
            width={400}
            height={400}
            className="max-md:hidden"
          />
          <p className="font-afacad">
            Quality is not just a goal at Legacy AFC, it&apos;s our standard. We
            adhere to rigorous standards of care, employing the latest
            advancements in care to provide a safe, secure, and comfortable
            environment for our clients. Our commitment to continuous
            improvement ensures that we stay at the forefront of industry best
            practices.
          </p>
        </div>
      </section>
      {/* company goals */}
      <section className="flex-1 lg:px-14 px-4 lg:pt-24 pt-12 bg-gray-100">
        <h2 className="lg:text-5xl text-xl mb-5 text-green-700">
          Company Goals
        </h2>
        <div className="size-full grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center gap-6 text-lg">
          <div>
            <p className="mb-6">The company aims to:</p>
            <ul className="font-afacad">
              {companyGoals.map((goal, index) => (
                <li key={index} className="mb-4 list-disc ml-4">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={"/about-5.png"}
            alt="about us"
            width={500}
            height={500}
            className="max-lg:hidden"
          />
        </div>
      </section>
    </>
  );
};

export default page;
