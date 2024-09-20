import React from "react";




const HomeComponent = ({ title, description, Button, DismissButton, imageUrl, ImageComponent }) =>{
    return(
        <>

            <div className="section-container-data-home">
                <h3 className="home-title">{title}aaa</h3>
                <p className="home-paragraphs">{description}</p>
                {Button && <Button />}
                {ImageComponent ? <ImageComponent /> : imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
                {DismissButton && <DismissButton />}
            </div>
                
                  
             
                  
        
        </>
    )
}

export default  HomeComponent;