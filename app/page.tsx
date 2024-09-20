'use client';
// import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css";
import "./buttons.css";
import { useEffect, useState } from "react";
import axios from 'axios';


export default function Home() {

  // const [message, setMessage] = useState('');

  // useEffect(() =>{
  //   // Appel API avec axios    
  //   axios.get('http://localhost:5000/objet/hello')
  //   .then(response =>{
  //     setMessage(response.data.message);
  //   })
  //   .catch(error =>{
  //     console.error('Erreur lors de la récupération des données:', error);
  //   });

  // }, []);
  
  return (
    <div  className="section-container">
      <div className="">
        {/* <h1>Message du backend :</h1>
        <p>{message}</p> */}
        <h2>Accueil</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore in veritatis eos doloremque fuga, omnis aliquam similique quibusdam dolorem consectetur obcaecati corrupti nam labore cupiditate saepe cumque vero quasi?</p>
      </div>
    </div>
  );
}
