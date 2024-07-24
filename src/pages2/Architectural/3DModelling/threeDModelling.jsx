import React, { useState } from 'react';
import './threeDModelling.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function ThreeDModelling() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Dynamic 3D Modeling Services by GigaLego Construction</h1>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Bring Your Designs to Life with Expert 3D Modeling</h2>
        <Ap imageSlide={imageSlide}/>

        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction specializes in creating detailed and realistic 3D models that enhance visualization, communication, and innovation in your projects. Whether you're in architecture, engineering, or product design, our 3D modeling services empower you to showcase your ideas with precision and creativity.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our 3D Modeling Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Customized 3D Models</div>
            <div className='p1'>
              Transform concepts, sketches, or 2D drawings into lifelike 3D models using advanced CAD software. Visualize spatial relationships, simulate designs, and present ideas effectively.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise and Innovation</div>
            <div className='p1'>
              With a team of skilled 3D modelers and designers, we bring years of experience and innovative thinking to every project. Our commitment to quality ensures that your 3D models are not only visually stunning but also technically accurate and functional.
            </div>
            <div className='head2'>Collaborative Approach</div>
            <div className='p1'>
              We collaborate closely with our clients to understand their vision and requirements. This collaborative approach ensures that the final 3D models align perfectly with your project goals and expectations.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <>
            <div className='head2'>Flexible Pricing</div>
            <div className='p1'>Contact us for competitive pricing based on project complexity and requirements.</div>
          </>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <>
            <div className='head2'>Consultation and Project Planning</div>
            <div className='p1'>
              Ready to bring your designs to life with our 3D modeling services? Contact us today to schedule a consultation. We'll discuss your project needs, provide insights into our process, and offer a personalized quote.
            </div>
            <div className='head2'>Experience Our Expertise</div>
            <div className='p1'>
              Explore examples of our past 3D modeling projects to see how we've helped clients transform their ideas into reality. Let's embark on your next design journey together.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ThreeDModelling;
