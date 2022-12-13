import React, { useState } from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import axios from "axios";

import {
  FullScreen,
  Header,
  FormTextItem,
  TextInput,
  TextArea,
  FormTextArea,
  FormButton,
} from "./FormStyles";
const Form = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formStatusMessage, setformStatusMessage] = useState("");

  const handleSubmit = () => {
    let formMessage = `New message from ${name}:
        ${message}

        contact Information:
        Email: ${email}
        Phone: ${phone}
        `;
    setSubmitting(true);
    setformStatusMessage("Submitting....");

    axios
      .post("https://submit-form.com/vJsIuuou", {
        message: formMessage,
      })
      .then(function (response) {
        if (response.status === 200) {
          setformStatusMessage(
            "Your message has been submitted. We will be reaching out shortly."
          );
        }
      })
      .catch(function (response) {
        console.error(response);
        setformStatusMessage("Something went wrong, please try again.");
      });
  };

  return (
    <>
      <Section id="contact">
        <SectionTitle main>Contact </SectionTitle>
        <FullScreen>
          {submitting ? (
            <></>
          ) : (
            <>
              <FormTextItem>
                <Header>Name</Header>
                <TextInput
                  onChange={(e) => {
                    updateName(e.target.value);
                  }}
                />
              </FormTextItem>
              <FormTextItem>
                <Header>Email</Header>
                <TextInput
                  onChange={(e) => {
                    updateEmail(e.target.value);
                  }}
                />
              </FormTextItem>
              <FormTextItem>
                <Header>Phone</Header>
                <TextInput
                  onChange={(e) => {
                    updatePhone(e.target.value);
                  }}
                />
              </FormTextItem>
              <FormTextArea>
                <Header>Message</Header>
                <TextArea
                  onChange={(e) => {
                    updateMessage(e.target.value);
                  }}
                />
              </FormTextArea>
              <FormButton
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </FormButton>
            </>
          )}
        </FullScreen>
      </Section>
    </>
  );
};
export default Form;
