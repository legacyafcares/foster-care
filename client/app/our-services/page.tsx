import React from "react";
import SecondNav from "../components/SecondNav";

const ServicesPage = () => {
  const services = [
    {
      name: "Member Care",
      description:
        "Providing a safe and supportive living environment for adults who require assistance with daily activities such as bathing, dressing, and medication management.",
    },
    {
      name: "Personal Care Assistance",
      description:
        "Assisting members with personal hygiene, grooming, and mobility to ensure their comfort and well-being.",
    },
    {
      name: "Medication Management",
      description:
        "Monitoring administering medications as prescribed by healthcare professionals and monitoring members' medication adherence and potential side effects.",
    },
    {
      name: "Meal Preparation and Nutrition Support",
      description:
        "Ensuring members&apos; care givers plan and prepare nutritious meals based on members' dietary needs and preferences, ensuring they receive adequate nutrition for their health and well-being.",
    },
    {
      name: "Social and Recreational Activities",
      description:
        "Encouraging care givers to organize social events, recreational activities, and outings to promote socialization, mental stimulation, and overall well-being among members.",
    },
    {
      name: "Care Coordination",
      description:
        "Collaborating with healthcare professionals, including physicians, nurses, therapists, and social workers, to coordinate and manage members' medical and personal care needs.",
    },
    {
      name: "Supportive Services",
      description:
        "Offering emotional support, counseling, and assistance with navigating community resources to address members' psychosocial needs and enhance their quality of life. Our staff includes several multilingual individuals to seamlessly attend to the needs of members and their families.",
    },
    {
      name: "24-Hour availability and Emergency Response",
      description:
        "Providing round-the-clock availability and assistance, as well as offering coordination in emergency response services to always ensure members' safety and security.",
    },
  ];

  const steps = [
    {
      name: "Step 1",
      description:
        "A care manager from our team reaches out to prospective members and their care givers to discuss this AFC program. This call lays out expectations on their end as well as our obligations and services.",
    },
    {
      name: "Step 2",
      description:
        "After the initial call, the team makes a decision to proceed to a home visit if prospective member is deemed eligible. The home visit assesses living conditions, what level of care and a written consent to proceed with offering service. ",
    },
    {
      name: "Step 3",
      description:
        "Third step is to work with prospective member's primary care provider to offer authorization. All paperwork is solely done by our team.",
    },
    {
      name: "Step 4",
      description:
        "We then work with prospective member's insurance provider to ensure payment will be authorized.",
    },
    {
      name: "Step 5",
      description:
        "Last step in the process is the start of services. If everything checks out, services start within days. The entire team will introduce themselves to the family and a clinical manager will draw up a detailed care plan tailored for each member. This care plan is continuously updated depending on member's evolving needs.",
    },
  ];

  const benefits = [
    {
      name: "Daily Assistance for ADLs and IADLs",
      description:
        "Our dedicated aides assist our members daily with Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs). This includes help with personal hygiene, meal preparation, medication management, and other essential tasks. By assisting with these tasks, we enable our members to maintain their independence and dignity while ensuring their safety and comfort.",
    },
    {
      name: "Combating Loneliness",
      description:
        "Our daily visits offer not just care but companionship. This regular interaction greatly mitigates feelings of loneliness, leading to enhanced mental well-being. The importance of daily human contact cannot be overstated for mental health.",
    },
    {
      name: "Earlier Intervention",
      description:
        "Our continuous assessment approach ensures we can spot and address potential issues before they escalate. This early intervention can play a pivotal role in the overall health and safety of our members.",
    },
    {
      name: "Home Safety",
      description:
        "Our daily visits ensure the safety of our members, particularly during harsh weather conditions and emergencies. Heat-related emergencies, which can be fatal, especially for those living alone, are promptly identified and mitigated. In addition, our team conducts home safety assessments to preemptively identify and rectify any potential safety hazards.",
    },
    {
      name: "Coordinated Healthcare",
      description:
        "Our services include arranging and facilitating appointments with various healthcare providers. This ensures that our members don't miss crucial health appointments.",
    },
    {
      name: "Single Point of Contact",
      description:
        "As the care providers in daily contact, we act as a reliable point of contact for all other healthcare providers involved in our members' care. We ensure a smooth flow of essential information between providers, guaranteeing a cohesive approach to care.",
    },
    {
      name: "Reduced E.R. Visits and Hospitalizations",
      description:
        "By providing daily care and early intervention, our services can help reduce or even eliminate the necessity for emergency room visits and hospitalizations.",
    },
  ];
  return (
    <>
      <SecondNav />
      <section className="flex-1 bg-gray-100 lg:px-14 px-4 lg:pt-24 pt-12">
        <h1 className="lg:text-5xl text-xl mt-6 font-extrabold text-center text-green-700">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-5 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h1 className="text-xl font-bold text-green-700">
                {service.name}
              </h1>
              <p className="mt-4 font-afacad text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className="mt-10 text-3xl font-semibold text-green-700">
            Additional Services
          </h3>
          <p className="font-afacad lg:w-3/5 mx-auto text-xl mt-4">
            If additional services are needed, the nurse or case manager will
            assist in setting up these services, including but not limited to:
          </p>
          <ul className="list-disc ml-4 mt-4 lg:text-lg text-md">
            <li>Physical therapy</li>
            <li>Occupational therapy</li>
            <li>Speech therapy</li>
            <li>Home health aide services</li>
            <li>Medical equipment and supplies</li>
            <li>Transportation services</li>
            <li>Home modifications</li>
          </ul>
        </div>
        <p className="mt-10 text-xl font-afacad lg:w-3/5 text-center mx-auto">
          These services aim to enhance the overall quality of life for adults
          who may require assistance with daily activities due to aging,
          disability, illness, or other challenges, while promoting
          independence, dignity, and autonomy.
        </p>
      </section>
      <section className="flex-1 bg-gray-100 lg:px-14 px-4 lg:pt-24 pt-12">
        <h2 className="text-3xl font-semibold text-center text-green-700">
          Care Plan Development
        </h2>
        <div className="mt-10">
          <p className="font-afacad text-xl lg:w-3/5 text-center mx-auto">
            Based on the assessment, a personalized care plan is developed for
            each member, outlining their specific needs, preferences, goals, and
            the services to be provided by our clinical staff. The care plan is
            regularly reviewed and updated as needed to ensure that the members&apos;
            needs are being met effectively.
          </p>
        </div>
      </section>
      <section className="flex-1 bg-gray-100 lg:px-14 px-4 lg:pt-24 pt-12">
        <h2 className="text-3xl font-semibold text-center text-green-700">
          How Prospective Members can Join
        </h2>
        <div className="mt-10">
          <p className="font-afacad text-xl lg:w-3/5 text-center mx-auto">
            Members will seek our services mostly by recommendations from
            community members and healthcare providers. We follow a set of laid
            out steps to ensure an easy and effective onboarding.
          </p>
          <div className="grid grid-cols-1 gap-10 mt-10 lg:w-2/5 mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <h1 className="text-xl font-bold text-green-700">
                  {step.name}
                </h1>
                <p className="mt-4 font-afacad text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex-1 bg-gray-100 lg:px-14 px-4 lg:pt-24 pt-12">
        <h2 className="text-3xl font-semibold text-center text-green-700">
          Commitment
        </h2>
        <p className="font-afacad text-xl lg:w-3/5 lg:text-center mx-auto mt-10">
          Legacy AFC works closely with each member to secure necessary
          approvals from their health insurance provider, ensuring services are
          accessible to those who need them most. The goal is to provide
          consistent, comprehensive care and support to members at home,
          fostering independence, health, and an enhanced quality of life
          without additional costs.
        </p>
      </section>
      <section className="flex-1 bg-gray-100 lg:px-14 px-4 lg:py-24 py-12">
        <h1 className="text-3xl font-semibold text-center text-green-700">
          Benefits of Our Program
        </h1>
        <div className="grid grid-cols-1 lg:w-3/5 mx-auto gap-5 mt-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h1 className="text-xl font-bold text-green-700">
                {benefit.name}
              </h1>
              <p className="mt-4 font-afacad text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
