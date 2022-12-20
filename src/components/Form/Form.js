import React, { useState } from "react";

import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
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
  SuccessHeader,
  ListParagraph,
  Divider,
} from "./FormStyles";
const Form = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formStatusMessage, setformStatusMessage] = useState("");
  const [success, setSuccess] = useState(false);

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
          setSubmitting(false);
          setSuccess(true);
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
            <>submitting...</>
          ) : (
            <>
              {success ? (
                <>
                  <SuccessHeader>Thank you for your message</SuccessHeader>
                  <Divider></Divider>
                  <ListParagraph>
                    We look forward to reviewing your request and will be in
                    contact with you as soon as possible!{" "}
                  </ListParagraph>
                  <FormButton
                    noMarg
                    onClick={() => {
                      window.location = "/#home";
                    }}
                  >
                    Home
                  </FormButton>
                </>
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
            </>
          )}
        </FullScreen>
      </Section>
    </>
  );
};
export default Form;
