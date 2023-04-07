import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return(
        <div className="info-content">
            <div className="picture">

            </div>
       {/*<img src="./img/picture.png" />*/}
        <h3 className="info-name">Laura Smith</h3>
        <h5 className="info-description">Frontend Developer</h5>
        <small className="info-site">laurasmith.website</small>
        <div className="buttons">
            <span className="button-email"> <FontAwesomeIcon icon={faEnvelope} /> Email</span> <span className="button-linkedin"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</span>
        </div>
        </div>
    )
}