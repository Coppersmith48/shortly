import React from "react";
import styled from "@emotion/styled";
import Imagehero from "../assets/imagehero.jpg";
import Logos from "../assets/logo.svg";
import imageinteractive from "../assets/imageinteractive.jpg";
import Pics from "../assets/image-curiosity.jpg";
import Pics2 from "../assets/image-deep-earth.jpg";
import Pics3 from "../assets/image-fisheye.jpg";
import Pics4 from "../assets/image-from-above.jpg";
import Pics5 from "../assets/image-grid.jpg";
import Pics6 from "../assets/image-soccer-team.jpg";
import Pics7 from "../assets/image-pocket-borealis.jpg";
import Pics8 from "../assets/image-night-arcade.jpg";
import Pics9 from "../assets/facebook.svg";
import Pics10 from "../assets/twitter.svg";
import Pics11 from "../assets/instagram.svg";
import Pics12 from "../assets/linkedin.svg";

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
          <FirstSectiontext1>
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          </FirstSectiontext1>
        </FirstSectionText>
      </FirstSection>
      <SecondSection>
        <Secondholder>
          <Secondimage></Secondimage>
          <Secondtext>
            <Secondtext1>
              <h1>
                THE LEADERN IN <br />
                INTERACTIVE VR
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Voluptatibus minus, porro error temporibus aliquid officia{" "}
                <br /> ad eaque, eos recusandae dicta at? Facere explicabo
                doloribus.
              </p>
            </Secondtext1>
          </Secondtext>
        </Secondholder>
      </SecondSection>
      <Sectionthree>
        <Sectionthreetexts>
          <Sectionthreetextsheader>
            <h1>OUR CREATIONS</h1>
          </Sectionthreetextsheader>
          <Button>SEE MORE</Button>
        </Sectionthreetexts>
        <Secthreecardholder>
          <Cardone>
            <Photos src={Pics2} />
          </Cardone>
          <Cardone>
            <Photos src={Pics8} />
          </Cardone>
          <Cardone>
            <Photos src={Pics6} />
          </Cardone>
          <Cardone>
            <Photos src={Pics5} />
          </Cardone>
          <Cardone>
            <Photos src={Pics4} />
          </Cardone>
          <Cardone>
            <Photos src={Pics7} />
          </Cardone>
          <Cardone>
            <Photos src={Pics} />
          </Cardone>
          <Cardone>
            <Photos src={Pics3} />
          </Cardone>
        </Secthreecardholder>
      </Sectionthree>
      <Footer>
        <Footerholder>
          <Headers>
            <Logo></Logo>
            <Socials>
              <Icon>
              <Photos src={Pics9} />
              </Icon>
              <Icon>
              <Photos src={Pics10} />
              </Icon>
              <Icon>
              <Photos src={Pics11} />
              </Icon>
              <Icon>
              <Photos src={Pics12} />
              </Icon>
            </Socials>
          </Headers>
          <Div>
            <Navbar>
              <nav>About</nav>
              <nav>Careers</nav>
              <nav>Events</nav>
              <nav>Products</nav>
              <nav>Support</nav>
            </Navbar>
            <P>@2021 Loopstudio. Alright reserved.</P>
          </Div>
        </Footerholder>
      </Footer>
    </Container>
  );
}
export default Loopstudio;
const P = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700 lighter;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  /* background-color: gold;  */
`;

const Socials = styled.div`
  width: 180px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Footerholder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 90px;
  width: 100%;
`;

const Footer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photos = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
`;

const Cardone = styled.div`
  width: 280px;
  height: 350px;

  background-color: green;
`;
const Secthreecardholder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 0px;
`;
const Button = styled.button`
  padding: 15px 40px;
  border: none;
  cursor: pointer;
  color: #5f5d5d;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
`;
const Sectionthreetextsheader = styled.div`
  padding: 0px;
  margin: 0px;
  font-weight: 200 lighter;
  color: #5f5d5d;
`;
const Sectionthreetexts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Sectionthree = styled.div`
  padding: 20px 90px;
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Secondtext1 = styled.div`
  background-color: white;
  padding: 10px 90px;
`;
const Secondtext = styled.div`
  width: 480px;
  position: absolute;
  margin-left: 500px;
  margin-top: 131px;
  background-color: white;
`;
const Secondimage = styled.div`
  height: 450px;
  width: 700px;
  background-image: url(${imageinteractive});
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Secondholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;

const SecondSection = styled.div`
  background-color: white;
  padding: 20px 90px;
  display: flex;
  margin: 30px 0px 0px 0px;
`;

const FirstSectiontext1 = styled.div`
  text-align: start;
  height: 300px;
  width: 500px;
  border: 3px solid white;
  padding: 5px 20px;
  font-size: 28px;
  font-weight: 600 lighter;
  color: white;
  display: flex;
  align-items: center;
`;

const FirstSectionText = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 90px;
  /* justify-content: center; */
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const Logo = styled.div`
  width: 180px;
  height: 70px;
  background-image: url(${Logos});
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Header = styled.div`
  padding: 20px 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstSection = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-image: url(${Imagehero});
`;

const Container = styled.div`
  height: 80vh;
  width: 100%;
`;
