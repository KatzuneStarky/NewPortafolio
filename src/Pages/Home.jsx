import React from "react";
import SocialIcons from "../Components/SocialIcons";
import { FaFacebook, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import Me from "../Components/Me";

function Home() {
    return (
        <div className="home-container">
            <Me />
            <div className="social-media">
                <SocialIcons
                    icon={<FaFacebook />}
                    content={"Facebook"}
                    background={"#3b5998"}
                    path={"/"}
                />
                <SocialIcons
                    icon={<FaLinkedin />}
                    content={"Linkedin"}
                    background={"#0e76a8"}
                    path={"https://www.linkedin.com/in/adanramirezcinseros/"}
                />
                <SocialIcons
                    icon={<FaTelegram />}
                    content={"Telegram"}
                    background={"#0088cc"}
                    path={"https://t.me/KatzuneStarky"}
                />
                <SocialIcons
                    icon={<FaGithub />}
                    content={"Github"}
                    background={"#171515"}
                    path={"https://github.com/KatzuneStarky"}
                />
            </div>
        </div>
    );
}

export default Home;
