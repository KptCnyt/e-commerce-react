import React from "react";
import "./index.css"


let Logo = require("./imageAvatar.png")


export const ProfileCard = () => {
    return (
    <img className="profile" src={Logo}/>
    )
}