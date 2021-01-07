import React from "react";


import Image from "../../elements/Image";
import logo from "../../../assets/images/logo.svg";
const Logo = ({ className, ...props }) => {
    

    return (
        <div className="logo-container">
            <Image src={logo} alt="Open" width={64} height={64} />
        </div>
    );
};

export default Logo;
