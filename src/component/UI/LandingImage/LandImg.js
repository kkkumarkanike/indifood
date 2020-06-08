import React from "react";
import Aux from './../../../hoc/Auxilary';
import './LangImg.css';
import banner from './../../../images/landing.svg';


const  landImg = props =>{
    return (
        <Aux>
            <br/>
                <section className="landing-image" >
                    <div className="text">
                        <div className="layer">

                        </div>
                        <p className="head">IndiFood</p>
                        <p className="para">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed
                            to an unknown typesetter in the 15th century.
                        </p>
                        <button className="get-started">Get started</button>
                        <br/><br/><br/><br/><br/>
                    </div>
                    <div className="banner-image" style={{textAlign : "center"}}>
                        <img src={banner} alt="image" className="image"/>
                    </div>
                </section>
        </Aux>
    );
}

export default landImg;