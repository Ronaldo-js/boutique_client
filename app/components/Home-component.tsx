import React from "react";




const HomeComponent = ({ title, description, Button, DismissButton, imageUrl, ImageComponent }) =>{
    return(
        <>
            <div className="">
                <div className=" p-4 flex justify-between mb-4 border-b border-gray-200">
                    <div className="" >
                        <h3 className="text-xl font-semibold mb-3">{title}</h3>
                        <p className="mb-2">{description}</p>
                        {Button && <Button />}
                    </div>
                    {ImageComponent &&
                        <div className="content-center rounded-lg">
                            {ImageComponent ? <ImageComponent /> : imageUrl && <img src={imageUrl} alt={title} />}
                        </div>
                    }
                </div>
                {DismissButton && 
                <div className="pb-3">
                    <div className="flex justify-end ">
                        {DismissButton && <DismissButton />}
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default  HomeComponent;