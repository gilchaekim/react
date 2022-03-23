import React from "react";
import styled from "styled-components";

const CustomDiv = styled.div`
  color: #ff0;
  text-align: center;
`;

const About = () => {
    return (
        <CustomDiv>
            <h1>This is about page</h1>
        </CustomDiv>
    );
};

export default About;