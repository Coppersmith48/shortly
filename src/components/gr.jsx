import React from "react";
import styled from "@emotion/styled";
import Imagehero from "../assets/image-hero.jpg";
import Logos from "../assets/logo.svg";
import Images from "../assets/image-interactive.jpg";
import Images1 from "../assets/image-curiosity.jpg";
import Images2 from "../assets/image-deep-earth.jpg";
import Images3 from "../assets/image-fisheye.jpg";
import Images4 from "../assets/image-from-above.jpg";
import Images5 from "../assets/image-grid.jpg";
import Images6 from "../assets/image-soccer-team.jpg";
import Images7 from "../assets/image-pocket-borealis.jpg";
import Images8 from "../assets/image-night-arcade.jpg";

function Loopstudio() {
  return (
    <Container>
      <FirstSection>
        <Header>
          <Logo></Logo>
          <Navbar>
            <nav>About</nav>
            <nav>Careers</nav>
            <nav>Events</nav>
            <nav>Products</nav>
            <nav>Support</nav>
          </Navbar>
        </Header>
        <FirstSectionText>
          <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </FirstSectionText>
      </FirstSection>
      <SecondSection>
        <Image> </Image>
        <Text>
          <p> THE LEADER IN INTARACTIVE VR</p>
          <Lorem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            atque sapiente sit incidunt non alias illum quisquam possimus
            deleniti quaerat delectus perspiciatis ex dolorem placeat.
            Doloremque facere unde architecto eius?
          </Lorem>
        </Text>
      </SecondSection>
      <ThirdSection>
        <OurCreation>
          Our Creation
          <Button>SEE ALL</Button>
        </OurCreation>
      </ThirdSection>
      <CardSection>
        <Card>
          <Images0 src={Images1} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images2} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images3} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images4} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images5} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images6} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images7} />
          <Com>MARS BOTS</Com>
        </Card>
        <Card>
          <Images0 src={Images8} />
          <Com>MARS BOTS</Com>
        </Card>
      </CardSection>

      <Footer>
        <Div>
          <Logo></Logo>
          <Navbar>
            <nav>About</nav>
            <nav>Careers</nav>
            <nav>Events</nav>
            <nav>Products</nav>
            <nav>Support</nav>
          </Navbar>
        </Div>
        <Media>
          <Md>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
          </Md>
          <p>2023 Loopstudio. Alright reserved</p>
        </Media>
      </Footer>
    </Container>
  );
}
export default Loopstudio;

const FirstSectionText = styled.div`
  height: 300px;
  width: 450px;
  text-align: start;
  border: 3px solid white;
  margin: 20px 0px 0px 20px;
  font-size: 59px;
  font-weight: 600 lighter;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px 40px;
  margin: 80px 0px 0px 0px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  font-weight: 400;
  font-size: 14px;
  color: white;
`;

const Logo = styled.div`
  width: 180px;
  height: 50px;
  background-image: url(${Logos});
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Header = styled.div`
  padding: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstSection = styled.div`
  object-fit: cover;
  padding: 0px 150px;
  /* width: 100%; */
  height: 100%;
  background-image: url(${Imagehero});
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: orangered; */
`;

const SecondSection = styled.div`
  padding: 0px 150px;
  display: flex;
  position: relative;
  height: 700px;
`;

const Image = styled.div`
  background-image: url(${Images});
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 700px;
  height: 450px;
  margin: 80px 0px 0px 0px;
`;

const Text = styled.div`
  padding: 30px 100px;
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  position: absolute;
  margin: 80px 0px 0px 0px;
  left: 700px;
  top: 150px;
  font-weight: 500;
  font-size: 50px;
`;
const Lorem = styled.div`
  font-weight: light;
  font-size: 14px;
  text-align: justify;
`;
const ThirdSection = styled.div`
  /* width: 100%; */
  padding: 0px 150px;
`;
const OurCreation = styled.div`
  padding: 20px 0px;
  font-size: 50px;
  font-weight: 460;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: white;
  border: 1px solid black;
`;

const CardSection = styled.div`
  /* width: 100%; */
  padding: 0px 150px 150px 150px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Card = styled.div`
  width: 250px;
  height: 320px;
  z-index: 10px;
  position: relative;
`;
const Images0 = styled.img`
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  background-color: black;
  padding: 10px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Div = styled.div``;
const Md = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;
const Media = styled.div`
  height: 60px;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: lighter;
  font-size: 16px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: white;
`;
const Com = styled.div`
  z-index: 20px;
  position: absolute;
  top: 280px;
  left: 10px;
  color: white;
  font-size: 20px;
`;
