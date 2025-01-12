"use client";
import React from "react";
import SecondNav from "../components/SecondNav";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const BlogPage = () => {
  const cardContent = [
    {
      title:
        "Enhancing Quality of Life: The Legacy Adult Foster Care Program in Massachusetts",
      image: "/signup.jpg",
      url: "/blog/article-1",
      description:
        "In Massachusetts, a unique and compassionate approach to care is making a difference in the lives of adults with medical and functional needs. The Legacy Adult Foster Care (AFC) Program exemplifies a model of care that prioritizes dignity, independence, and quality of life.",
    },
    {
      title:
        "Navigating the Transition to Assisted Living: A Guide for Families",
      image: "/verify.jpg",
      url: "/blog/article-2",
      description:
        "Making the decision to transition a loved one to assisted living can be both emotional and challenging. It’s a choice often driven by the desire to ensure safety, comfort, and quality of life, but the process can feel overwhelming without proper guidance. This article offers families practical advice and reassurance as they navigate this significant life change.",
    },
    {
      title:
        "The Role of Nutrition in Senior Health: How Assisted Living Supports Wellness",
      image: "/login.jpg",
      url: "blog/article-3",
      description:
        "As we age, maintaining proper nutrition becomes increasingly important for overall health and well-being. For seniors, balanced meals can boost energy levels, support cognitive function, and prevent chronic conditions. Assisted living communities play a vital role in ensuring residents enjoy nutritious, delicious meals every day.",
    },
  ];
  const router = useRouter();
  return (
    <>
      <SecondNav page="blog" />
      <section className="px-16 pt-28 min-h-screen">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4 text-center">
          Blog
        </h1>
        <div className="w-4/5 mx-auto space-y-4 mb-8">
          {cardContent.map((content, index) => (
            <Card className="h-fit shadow-lg" key={index}>
              <CardHeader>
                <Heading color={"green.500"} fontFamily={"Afacad Flux"}>
                  {content.title}
                </Heading>
              </CardHeader>
              <Stack>
                <CardBody>
                  <p className="text-lg">{content.description}</p>
                </CardBody>
                <CardFooter>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => router.push(content.url)}
                  >
                    Read More
                  </button>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
