// import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css";
import "./buttons.css";

export default function Home() {
  return (
    <div>
        <h1>Accueil</h1> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore, id maiores aut delectus explicabo qui assumenda consectetur, 
            libero minus consequatur odit? Sint corrupti autem fuga, aspernatur dolore est? Facere, architecto?
          </p>
          <button className="btn-secondary" >Bonjour</button>
    </div>
  );
}
