import "./main.css";
import { GitHub } from "./svg-main"
import { OpenIn } from "./svg-main"
import pokemonapp from "../images/pokemonapp.png"
import dhama from "../images/dhama.png"
import coincase from "../images/coinCase.png"



export const Main = () => {
  return(
    <>
    <div className="portfolio-container">
     <h2 id="portfillo">Portfolio</h2>

      <div className="portfolio">
          <img src={coincase} alt="placeholder" />
            <article className="portfolio-text">
               <h3>CoinCase</h3>
              <p>I created a crypto tracker, it uses a crypto Api and retreaves currnet information inclusing top trending coins, Market cap, lows and highs</p>
              <div className="tech-stack">
                  <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>Axios</li>
                    <li>React Router</li>
                    <li>SCSS</li>
                  </ul>
                  </div>
              <div className="portfolio-links">
                 <a href="https://github.com/Antcharles22/crypto" target="_blank"><GitHub /> </a>
                 <a href="https://playful-heliotrope-c18b11.netlify.app/" target="_blank"><OpenIn /> </a>  
               </div>
            </article>
        </div>
      
   
        <div className="portfolio">
            <img src={pokemonapp} alt="placeholder" />
             <article className="portfolio-text">
              <h3>PokemonApi</h3>
              <p>I create a pokemon team builder. The app allows you to gather information from an api and create a team of six pokemon.</p>
              <div className="tech-stack">
                  <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Api</li>
                  </ul>
                  </div>
             <div className="portfolio-links">
                 <a href="https://github.com/Antcharles22/pokemon-api" target="_blank"><GitHub /> </a>
                 <a href="https://subtle-buttercream-e58505.netlify.app/" target="_blank"><OpenIn /> </a>  
               </div>
            </article>
        </div>

        <div className="portfolio">
            <img src={dhama} alt="placeholder" />
            <article className="portfolio-text">
            <h3>Dhama Arts</h3>
            <p>I build a site to help an artist to showcase his work and for possible clients to find and message him</p>
            <div className="tech-stack">
                  <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  </div>
            <div className="portfolio-links">
                 <a href="https://github.com/Antcharles22/art-portfillo" target="_blank"><GitHub /> </a>
                 <a href="https://comforting-kitten-110bf8.netlify.app/" target="_blank"><OpenIn /> </a>  
               </div>
            </article>
        </div>

     </div>
     </>
  )
}


