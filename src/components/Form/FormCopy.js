import React, { useState } from "react";

import { Section, SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import axios from "axios";

import {
  FullScreen,
  FormContents,
  Header,
  Label,
  Label2,
  TextInput,
  TextArea,
  InputDiv,
  InputDiv2,
  FormButton,
  messageDiv,
  Paragraph,
} from "./FormStyles";

const Form = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [formStatusMessage, setformStatusMessage] = useState("");
  return (
    <FullScreen>
      <FormContents>
        {submitting ? (
          <></>
        ) : (
          <>
            <Header>Contact</Header>
            <InputDiv>
              <Label>Name:</Label>
              <TextInput></TextInput>
            </InputDiv>

            <InputDiv>
              <Label>Phone:</Label>
              <TextInput></TextInput>
            </InputDiv>
            <InputDiv>
              <Label>Email:</Label>
              <TextInput></TextInput>
            </InputDiv>
            <InputDiv2>
              <Label2>Message:</Label2>
              <TextArea></TextArea>
            </InputDiv2>
            <FormButton
              onClick={() => {
                setSubmitting(true);
                setformStatusMessage("Submitting....");
                axios
                  .post("https://submit-form.com/vJsIuuou", {
                    message: "Hello, World",
                  })
                  .then(function (response) {
                    if (response.status === 200) {
                      setformStatusMessage(
                        "Your message has been submitted. We will be reaching out shortly."
                      );
                      setTimeout(() => {
                        props.changeVisibility();
                      }, 2000);
                    }
                  })
                  .catch(function (response) {
                    console.error(response);
                    setformStatusMessage(
                      "Something went wrong, please try again."
                    );
                  });
              }}
            >
              Submit
            </FormButton>
          </>
        )}

        <messageDiv>
          <Paragraph>{formStatusMessage}</Paragraph>
        </messageDiv>
      </FormContents>
    </FullScreen>
  );
};
export default Form;
