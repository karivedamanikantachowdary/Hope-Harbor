import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import photo1 from '../images/photo1.jpeg';
const About = () =>{
    return(
        // <div>
        //     <section id="about" >
        //         <div className="container my-5">
        //             <Container fluid>
        //               <Row>
        //                    <Col sm={6}>
        //                     <Image src={photo1}/>
        //                    </Col>
        //                    <Col sm={6}>
        //                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto, ullam illum sint fugit illo tempore labore ipsa repellendus obcaecati? Assumenda tempore voluptatibus exercitationem eveniet?</p>
        //                    </Col>
        //                  </Row>
        //             </Container>
        //             </div>
               
        //     </section>
        <div>
        
             <section id="about">
                <div className="container my-5 py-5">
                       <div className='row'>
                           <div className='col-md-6'>
                               <Image src={photo1} className='w-75 mt-5'/>
                           </div> 
                         <div className='col-md-6'>
                           <h2 className='fs-5 mb-0'>About us</h2>
                           <h1 className='display-6 mb-2'>Who<b>We</b>Are</h1>
                           <hr className='w-50'/>
                          <p className='lead mb-4'>HopeHarbor serves as a platform facilitating the essential support for orphanages by connecting donors with the needs of children. It focuses on providing crucial necessities such as food, clothing, and health checkups. Through effective communication channels, we bridge the gap between those willing to contribute and orphanages in need, ensuring a streamlined and impactful process.</p>
                          
                          </div>
                        </div>     
                   </div>
           </section>
           </div>
           
            
    );
}

export default About;