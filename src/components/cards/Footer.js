import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function About(){
    return(
        <div className="footer">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#918E9B" />
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#918E9B" />
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" color="#918E9B" />
            <FontAwesomeIcon icon={faGithubSquare} size="2x" color="#918E9B" />
       </div> 
    )
}