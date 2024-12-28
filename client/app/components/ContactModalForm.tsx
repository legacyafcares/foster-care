"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await axios.post("https://foster-care.onrender.com/auth/add-to-db");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex-1 my-2 flex gap-3 justify-center items-center">
      <form onSubmit={handleSubmit} className="lg:w-4/5 mx-auto px-1">
        <h1 className="lg:text-3xl text-2xl font-bold mb-4 text-green-700 font-afacad">Get In Touch With Us</h1>
        <div className="flex flex-col gap-3 items-start">
          <InputField
            type={"text"}
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <InputField
            type={"email"}
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange} // same handler for the textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-md my-5"
          />
          <Button type="submit" colorScheme="green" className="mx-auto">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
