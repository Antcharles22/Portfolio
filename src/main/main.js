import "./main.css";
import { GitHub } from "./svg-main"
import { OpenIn } from "./svg-main"
import pokemonapp from "../images/pokemonapp.png"
import dhama from "../images/dhama.png"



export const Main = () => {
  return(
    <>
    <h2>Portfolio</h2>
    <div className="portfolio-container">
        <div className="portfolio">
            <img src={pokemonapp} alt="placeholder" />
             <article className="portfolio-text">
              <h3>PokemonApi</h3>
              <p>I create a pokemon team builder. The app allows you to gather information from an api and create a team of six pokemon.</p>
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
            <div className="portfolio-links">
                 <a href="https://github.com/Antcharles22/art-portfillo" target="_blank"><GitHub /> </a>
                 <a href="https://comforting-kitten-110bf8.netlify.app/" target="_blank"><OpenIn /> </a>  
               </div>
            </article>
        </div>
        <div className="portfolio">
            <h4>coming soon!</h4>
            <article className="portfolio-text">
            <h3>Project-3</h3>
            <p>crypto tracker</p>
            </article>
        </div>

     </div>
     </>
  )
}


