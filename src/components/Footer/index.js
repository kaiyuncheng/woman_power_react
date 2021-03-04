import Fade from "react-reveal/Fade";
import bgFooter from '../../assets/images/bg_orange_04.png'

const Footer = () => {

  return (
    <>
      <footer
        className="text-center text-sm text-brown-dark leading-relaxed bg-cover bg-top-center bg-no-repeat pt-20 pb-16 md:pt-28 md:pb-20 px-10"
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
      <Fade bottom>
        <p>
          內容監製: 今周刊
          <br />
          專題製作:｜今周刊 數位內容部
          <br />
          數位Copyright © {new Date().getFullYear()} 今周刊.All rights reserved.
          版權所有，禁止擅自轉貼節錄
        </p>
      </Fade>
      </footer>
    </>
  );
};

export default Footer;
