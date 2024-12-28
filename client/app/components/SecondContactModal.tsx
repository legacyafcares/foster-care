'use client'

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import ContactModalForm from "./ContactModalForm";
import { SecondNavProps } from "./SecondNav";



const ContactModal = ({page}: SecondNavProps) => {
  //state for modal
  const [isOpen, setIsOpen] = useState(false);

  //modal controls
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <p
        onClick={onOpen}
        color={page === "About Us" || "Our Services" ? "green.600" : "white"}
        className="cursor-pointer lg:text-lg md:text-md hover:text-green-400 transition ease-in-out duration-700 hover:scale-95 ml-3 mt-2"
      >
        Contact Us
      </p>
      <Modal isOpen={isOpen} onClose={onClose} size={'lg'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font-afacad text-green-700 lg:ml-6 ml-3 mt-4 text-lg">Here's how you can get in touch with us:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid gap-3 h-[200px] pt-4 w-[300px] justify-items-start lg:text-xl text-md mb-12 lg:ml-6 ml-2">
                    <div className="flex items-center gap-2">
                      <FiPhone />
                      <h1>+1-860-994-8220</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineEmail />
                      <h1>susan@legacyafcares.com</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <CiLocationOn />
                      <h2>15 Midstate Drive, Suite 212</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="ml-6">Auburn MA 01501</h3>
                    </div>
                  </div>
          </ModalBody>

          <ContactModalForm/>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
