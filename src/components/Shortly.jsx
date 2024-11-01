import React from "react";
import styled from "@emotion/styled";
import Log from "../assets/Shortly/logo.svg";
import BG from "../assets/Shortly/illustration-working.svg";
import BG2 from "../assets/Shortly/bg-boost-desktop.svg";

function Shortly() {
  return (
    <Container>
      <FirstSection>
        <Header>
          <Logoholder>
            <Logo></Logo>
            <Navbar>
              <Ul>
                <List>Features</List>
                <List>Pricing</List>
                <List>Resources</List>
              </Ul>
            </Navbar>
          </Logoholder>
          <Login>
            <H4>Login</H4>
            <Button>Sign up</Button>
          </Login>
        </Header>
        <FirstHero>
          <FirstHolder>
            <FirstText>
              {/* <Textside> */}
              <Textheader>
                More than just shorter links.
                <P>
                  Build your brand's recognition and get detailed <br />
                  insights on how your links are performing.
                </P>
                <Button>Get Started</Button>
              </Textheader>
              {/* </Textside> */}
            </FirstText>
            <FirstImage></FirstImage>
          </FirstHolder>
        </FirstHero>
      </FirstSection>
      <SecondSection>
        <SecondWrapper>
          <InputHolder>
            <Input type="shorten a links here..." />
            <Btn1>Shorten it!</Btn1>
          </InputHolder>
          <SecondText>
            Advanced Statistics
            <P1>
              Track how your links are performming across the web with <br />{" "}
              our advanced statistics dashboard.
            </P1>
          </SecondText>
          <Cardcontainer>
            <CardHolder>
              <Image src/>
              <NameText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sit, amet voluptate voluptatem iste at laborum optio
                nemo modi hic.
              </NameText>
              <Stack>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sit, amet voluptate voluptatem iste at laborum optio
                nemo modi hic.</Stack>
              <AboutText>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sit, amet voluptate voluptatem iste at laborum optio
                nemo modi hic.</AboutText>
            </CardHolder>
            <CardHolder>
              <Image src/>
              <NameText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sit, amet voluptate voluptatem iste at laborum optio
                nemo modi hic.
              </NameText>
              <Stack>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sit, amet voluptate voluptatem iste at laborum optio
                nemo modi hic.</Stack>
              <AboutText>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sit, amet voluptate voluptatem iste at laborum optio
                nemo modi hic.</AboutText>
            </CardHolder>
          </Cardcontainer>
        </SecondWrapper>
      </SecondSection>
    </Container>
  );
}

export default Shortly;

const Container = styled.div`
  /* height: 100vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FirstSection = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  /* background-color: #8ff806; */
`;
const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: lightslategray;
`;
const Logoholder = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 400px;
  justify-content: space-between;
  padding: 0px 10px;
`;
const Logo = styled.div`
  width: 150px;
  height: 70px;
  background-image: url(${Log});
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 250px;
  font-size: 14px;
  font-weight: 700;
`;

const List = styled.li`
  font-size: 14px;
`;

const Login = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
const H4 = styled.h2`
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
`;
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: lightslategray;
  font-size: 14px;
  font-weight: 600;
  background-color: #9be3e0;
`;

const FirstHero = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
`;
const FirstHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const FirstText = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 10px;
`;

// const Textside = styled.div`
//   /* background-color: aliceblue;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center; */
//   /* flex-direction: column; */
// `;
const Textheader = styled.h1`
  width: 100%;
  font-size: 55px;
  font-weight: 700;
`;
const P = styled.p`
  font-size: 16px;
  color: gray;
`;
const FirstImage = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${BG});
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const SecondSection = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #147dda; */
`;
const SecondWrapper = styled.div`
  height: 90%;
  width: 80%;
  /* background-color: brown; */
`;
const InputHolder = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background-color: blue;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
const Input = styled.input`
  width: 70%;
  height: 30px;
`;
const Btn1 = styled.button`
  padding: 10px 70px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: lightslategray;
  font-size: 14px;
  font-weight: 600;
  background-color: #9be3e0;
`;
const SecondText = styled.h2`
  font-size: 35px;
  font-weight: 600 bold;
  text-align: center;
`;
const P1 = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
const Cardcontainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: chartreuse;
`;
const CardHolder = styled.div`
  width: 250px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 80px 0px 20px 20px;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  background-color: gray;
  border-radius: 50%;
  margin-top: -80px;
  margin-bottom: 20px;
  object-fit: cover;
  border: 6px solid black;
`;
const NameText = styled.div`
  font-size: 14px;
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
  color: rgba(0, 0, 0, 0.7);
  font-family: poppins;
`;
