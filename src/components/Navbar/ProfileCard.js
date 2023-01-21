import React from "react";
import "./index.css"


let Logo = require("./imageAvatar.png")


export const ProfileCard = () => {
    return (
        <div>
            <img className="profile hover:border-2 rounded-3xl border-orange-400" src={Logo}/>
        </div>
    
    )
}