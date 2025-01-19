import "./banner.css";


import { Github } from "./svg-banner";
import { Linkedin } from "./svg-banner";
import { Reect } from "./svg-banner";
import { Illustration } from "./svg-banner";
import { Js } from "./svg-banner";
import { Css } from "./svg-banner";
import { Html } from "./svg-banner";
import { Ps } from "./svg-banner";
import Me  from "../images/me.jpg"





export const Banner = () => {
    return(
        <div className="banner-container">
            <div className="banner">
            <img src={ Me } alt="placeholder" />
            <h2>Anthony Charles</h2>
            <ul>
                    <li className="icon1">London, England</li>
                    <li className="icon2"><a href="https://www.linkedin.com/in/anthony-charles-39a928153/" target="_blank"> <Github /></a></li>
                    <li className="icon3"><a href='https://github.com/Antcharles22' target="_blank"><Linkedin /></a> </li>
                </ul>
            </div>
            <div className="banner-right">
                <h1>Front-end Developer</h1>
                <p>Welcome to my portfolio! I’m a creative individual with a diverse background in various artistic mediums. Over the years, I’ve explored everything from graphic design to photography, each experience enriching my understanding of visual storytelling.

                Currently, I’m channeling my creativity into front-end development, where I combine my artistic vision with technical skills to create engaging, user-friendly web experiences. I’m passionate about crafting beautiful interfaces that not only look great but also function seamlessly.

                Join me on this journey as I blend art and technology to bring ideas to life!</p>
                <div className="logos">
                    <Reect />
                    <Illustration />
                    <Js />
                    <Css />
                    <Html />
                    <Ps />
                </div>
            </div>    
        </div>
    )
};