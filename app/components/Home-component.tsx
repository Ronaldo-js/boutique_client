import React from "react";




const HomeComponent = ({ title, description, Button, DismissButton, imageUrl, ImageComponent }) =>{
    return(
        <>
            <div className="section-container-data-home mt-3">
                <div className="home-content-data">
                    <div className="home-content">
                        <h3 className="home-title">{title}</h3>
                        <p className="home-paragraphs">{description}</p>
                        {Button && <Button />}
                    </div>
                    {ImageComponent &&
                        <div className="home-content">
                            {ImageComponent ? <ImageComponent /> : imageUrl && <img src={imageUrl} alt={title} />}
                        </div>
                    }
                </div>
                {DismissButton && 
                <div className="home-content-footer">
                    <div className="home-content">
                        {DismissButton && <DismissButton />}
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default  HomeComponent;