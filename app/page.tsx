'use client';
// import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css";
import "./buttons.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import HomeComponent from "./components/Home-component";


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
    <div  className="section-container-home">
      <div className="">
        {/* <h1>Message du backend :</h1>
        <p>{message}</p> */}
        <HomeComponent/>
      </div>
    </div>
  );
}
