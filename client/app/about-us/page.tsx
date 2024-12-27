import React from "react";
import SecondNav from "../components/SecondNav";

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
    "1. Provide high quality, responsive member centered care by helping members become healthy, independent and safe at home.",
    "2. Coordinate member care with other multidisciplinary care team through timely and focused consultations and interactions.",
    "3. Establish all our processes to achieve “the well-oiled machine”.",
    "4. Develop a culture of compliance by implementing policies and procedures that meet the applicable CARF state and federal standards and regulations.",
    "5. Make Legacy AFC the best place to work by acquiring and retaining high quality talent, providing fulfilling job opportunities and career advancement through training, mentoring, professional development and promotions.",
  ];
  return (
    <>
      <SecondNav />
      {/* history */}
      <section className="flex-1 px-14 pt-24 bg-gray-100">
        <h1 className="text-5xl mb-6 text-center font-extrabold my-4 text-green-700">
          About Us
        </h1>
        <h2 className="text-3xl mb-5 text-green-700">Our History</h2>
        <div className="size-full grid grid-cols-3 gap-6 font-afacad text-lg">
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
            invest in our team's professional development through continuous
            training and mentorship. Our flexible working hours ensure our staff
            can manage personal commitments effectively. At Horizon, we offer
            more than one job; we provide a fulfilling career in a nurturing
            environment where every day's work makes a real difference.
          </p>
        </div>
      </section>
      {/* mission */}
      <section className="flex-1 px-14 pt-24 bg-gray-100">
        <h2 className="text-3xl mb-5 text-green-700">Our Mission</h2>
        <div className="size-full grid grid-cols-2 gap-6 font-afacad text-lg">
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
        </div>
      </section>
      {/* vision */}
      <section className="flex-1 px-14 pt-24 bg-gray-100">
        <h2 className="text-3xl mb-5 text-green-700">Our Vision</h2>
        <div className="size-full grid grid-cols-2 gap-6 font-afacad text-lg">
          <p>
            Legacy AFC envisions a future where every individual has access to
            quality, compassionate care, enabling them to live life to the
            fullest in their own homes and communities.
          </p>
        </div>
      </section>
      {/* core values */}
      <section className="flex-1 px-14 pt-24 bg-gray-100">
        <h2 className="text-3xl mb-5 text-green-700">Our Core Values</h2>
        <div className="size-full grid grid-cols-2 gap-6 text-lg">
          <ol>
            {coreValues.map((value, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-2xl mb-2 font-semibold">{value.name}</h3>
                <p className="font-afacad">{value.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* commitment to quality */}
      <section className="flex-1 px-14 pt-24 bg-gray-100">
        <h2 className="text-3xl mb-5 text-green-700">
          Our Commitment to Quality
        </h2>
        <div className="size-full grid grid-cols-2 gap-6 text-lg">
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
      <section className="flex-1 px-14 pt-24 bg-gray-100">
        <h2 className="text-3xl mb-5 text-green-700">Company Goals</h2>
        <div className="size-full grid grid-cols-2 gap-6 text-lg">
          <div>
            <p className="mb-6">The company aims to:</p>
            <ul className="font-afacad">
              {companyGoals.map((goal, index) => (
                <li key={index} className="mb-4">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
