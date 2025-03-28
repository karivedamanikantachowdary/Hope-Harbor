import React from "react"
import About from './About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import photo1 from '../images/photo1.jpeg';
const Home = () =>{
    return(
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="diaplay-4 fw-bolder mb-4 text-center text-white">
                                DONATE & HELP
                            </h1>
                            <p className="lead text-center fs-4 mb-5 text-white">It's not how much we give but how much love we put into giving</p>
                           
                        </div>
                    </div>
                </div>
                </section>          
        </div>
        
    );
}

export default Home;
