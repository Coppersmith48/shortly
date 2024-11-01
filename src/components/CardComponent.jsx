import React from "react";
import styled from "@emotion/styled";
import myImage from "../assets/react.svg";

const firstName = "Collins";
const surName = "Amara";
const about = " A highly skilled and results-orientend";
const course = "Fullstack";

function CardComponent() {
  return (
    <Container>
      <CardHolder>
        <Image src={myImage} />
        <NameText>
          {surName} {firstName}
        </NameText>
        <Stack>{course}</Stack>
        <AboutText>{about}</AboutText>
      </CardHolder>
      <CardHolder>
        <Image src={myImage} />
        <NameText>
          {surName} {firstName}
        </NameText>
        <Stack>{course}</Stack>
        <AboutText>{about}</AboutText>
      </CardHolder>

      <CardHolder>
        <Image src={myImage} />
        <NameText>
          {surName} {firstName}
        </NameText>
        <Stack>{course}</Stack>
        <AboutText>{about}</AboutText>
      </CardHolder>

      <CardHolder>
        <Image src={myImage} />
        <NameText>
          {surName} {firstName}
        </NameText>
        <Stack>{course}</Stack>
        <AboutText>{about}</AboutText>
      </CardHolder>
    </Container>
    
  );
}

export default CardComponent;

const Container = styled.div`
  width: 100%;
//   height: 100vh;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
`;
const CardHolder = styled.div`
width: 450px;
height: 450px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: 80px 0px 20px 20px;
`;
const Image = styled.img`
width: 150px;
height: 150px;
background-color: gray;
border-radius: 50%;
margin-top: -80px;
margin-bottom: 20px;
object-fit:  cover;
border: 6px solid black;
`;
const NameText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Stack = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;
const AboutText = styled.div`
font-size: 12px;
text-align: center;
width: 90%;
color: rgba(0,0,0,0.7);
font-family: poppins;
`;
