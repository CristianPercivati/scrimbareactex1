import React from 'react'
import About from './About';
import Info from './Info';
import Interests from './Interests';
import Footer from './Footer';

const Card = () => {

return(
<div className="card-container">
<Info />  
<About /> 
<Interests /> 
<Footer />
</div>
)
}

export default Card