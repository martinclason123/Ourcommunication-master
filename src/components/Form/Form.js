import React from "react";

import { Section, SectionText } from "../../styles/GlobalComponents";
import { FullScreen } from "./FormStyles";

const Form = () => (
  <FullScreen>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfrLDeqYcQTtBNUnFYFBV7l5sLDBmgY-tns4FRM5AY3fK0qYQ/viewform?embedded=true"
      width="640"
      height="300"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </FullScreen>
);
export default Form;
