import React, { useState } from "react";
import Head from "next/head";

import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";

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
  ErrorParagraph,
} from "./FormStyles";
const Form = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);

  const formValidator = () => {
    let errors = false;
    if (message.length < 10) {
      errors = true;
      setMessageError(true);
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError(true);
      errors = true;
    }

    return errors;
  };

  const handleSubmit = () => {
    let errors = formValidator();
    if (!errors) {
      let formMessage = `New message from ${name}:
        ${message}

        contact Information:
        Email: ${email}
        Phone: ${phone}
        `;
      setSubmitting(true);

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
        });
    }
  };

  return (
    <>
      <Section id="contact">
        <Head>
          <title>Contact</title>
          <meta
            name="description"
            content="Quickly submit your request and we will respond to you as soon as possible"
          />
        </Head>
        <SectionTitle main>Contact </SectionTitle>
        <FullScreen>
          {submitting ? (
            <SuccessHeader>Submitting</SuccessHeader>
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
                    <Header for="name">Name</Header>
                    <TextInput
                      id="name"
                      onChange={(e) => {
                        updateName(e.target.value);
                      }}
                    />
                  </FormTextItem>
                  {emailError === true ? (
                    <ErrorParagraph smallMargin>
                      Valid email is required
                    </ErrorParagraph>
                  ) : null}
                  <FormTextItem>
                    <Header for="email">Email</Header>
                    <TextInput
                      borderRed={emailError}
                      id="email"
                      onClick={() => {
                        setEmailError(false);
                      }}
                      onChange={(e) => {
                        updateEmail(e.target.value);
                      }}
                    />
                  </FormTextItem>
                  <FormTextItem>
                    <Header for="phone">Phone</Header>
                    <TextInput
                      id="phone"
                      onChange={(e) => {
                        updatePhone(e.target.value);
                      }}
                    />
                  </FormTextItem>
                  {messageError === true ? (
                    <ErrorParagraph>
                      Message must be at least 10 characters
                    </ErrorParagraph>
                  ) : null}

                  <FormTextArea>
                    <Header for="message">Message</Header>
                    <TextArea
                      id="message"
                      borderRed={messageError}
                      onClick={() => {
                        setMessageError(false);
                      }}
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
