import React, { useState, useRef, useEffect } from "react";

import { PortaitImg } from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData, ricPortrait } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <PortaitImg src={ricPortrait} />
      <SectionText light>
        For years, I have worked across Residential, Commercial, and Industrial
        platforms to solve complex communications issues and resolve them to the
        highest standard of completion and customer satisfaction.
      </SectionText>
      <SectionText light>
        Building networks to withstand the tests of time, along with a constant
        management of budget and efficiency.
      </SectionText>
      <SectionText light>
        I have had the pleasure of engineering for our City of Grand Rapids
        inter-departmentally, and our surrounding municipalities. To create and
        build solutions and increase effectiveness of networks. In design and
        construction on every level, I have helped to maintain the effectiveness
        of all levels of communications, including our cities emergency
        communications.
      </SectionText>
      <SectionText light>
        Survey engineering, for industrial and commercial application, has been
        provided at every level to assist my clients. For communications of
        point to point connectivity around our state and surrounding states.
        These surveys will give my clients perspective on routes available,
        engineering of those routes, permitting for construction, and finally
        construction and turn up.
      </SectionText>
      <SectionText light>
        For my private clients I have had the opportunity to enhance and expand
        residential input of data from their ISPs, and expand their experiences
        with data while at home and on vacation. These projects often include
        advanced security systems for on and offsite monitoring of those sites.
      </SectionText>
      <SectionText light>
        At the commercial level, my clientele, often at campus or city size
        deployment of network additions or subtractions, require a unique
        engineering eye. I have been able to help their direction for strength
        and reliability in these often updating/upgrading and downgrading of
        infrastructure. With our experience in this field, proven techniques to
        provide future upgrading and downgrading is first and foremost in our
        design and construction.
      </SectionText>
      <SectionText light>
        Our partnerships allow cost effective, on time engineering,
        construction, and turn-up of networks at any level or scope.
      </SectionText>
      <SectionText light>
        Our Communication is able to work closely with you. Ensuring your needs
        are met. Satisfaction is guaranteed.
      </SectionText>

      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons> */}
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
