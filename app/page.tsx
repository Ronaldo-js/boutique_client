'use client';
// import Image from "next/image";
// import styles from "./page.module.css";
import "./globals.css";
import "./buttons.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import imageCar from "./img/corten.png"
// import imageCar from 'next/image';
import HomeComponent from "./components/Home-component";
import Button from "./components/Buttons-component";
import { faCheck } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import Image from "@/node_modules/next/image";


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
      <div className="section-container-home-datas">
        <div className="section-container-home-data">
          {/* <h1>Message du backend :</h1>
          <p>{message}</p> */}
          <HomeComponent
            title="Setup guide"
            description="Use this personalized guide to get your store up and running."

            ImageComponent={()=>(
              <Image
                src={imageCar}
                alt="Shopify +"
                width={116}
                height={36}
                priority
              />
            )}

            Button={()=>(
              <Button
                icon={faCheck}
                className="btn-light"
                label={" Done"}
                type="button"
                />
            )}
            
            DismissButton = {()=>(
              <Button
                label={"Dismiss guide"}
                className ="btn-light"
                type="button"
              />
            )}

          />
        </div>
        <div className="section-container-home-data">
          <HomeComponent
            title={"Get inspired to launch your business"}
            description = "lorem ispsum dollar sit ammet lecli cilar  "        
            Button={()=>(
              <Button
                className="btn-light"
                label={"view exemple"}
                type="button"
                />
            )}
          />
        </div>

        <div className="section-container-home-data">
          <HomeComponent
            title={"Write product descriptions in seconds"}
            description = "Automatically generate unique 
            and compelling descriptions with Shopify Magic. 
            Add a new product description or edit an existing one 
            to get started.

            "        
            Button={()=>(
              <Button
                className="btn-light"
                label={"Try shopify Magic"}
                type="button"
                />
            )}
          />
        </div>
      </div>
      
    </div>
  );
}
