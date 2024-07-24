import React, { useState } from 'react';
import './PresentationDrawings.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function PresentationDrawings() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Presentation Drawings with GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Stunning Presentation Drawings Through Precision CAD Conversion</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            At GigaLego Construction, we specialize in creating captivating presentation drawings that showcase your designs with clarity and elegance. Whether you need to impress clients, stakeholders, or investors, our CAD conversion services ensure your concepts are presented in their best light.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Presentation Drawing Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>CAD to Presentation Drawings</div>
            <div className='p1'>
              Transform CAD files into polished presentation drawings that highlight key design elements, textures, and colors. Enhance visual appeal and convey your design vision effectively.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Visual Impact</div>
            <div className='p1'>
              Create stunning visuals that enhance your presentations and proposals.
            </div>

            <div className='head2'>Detail Orientation</div>
            <div className='p1'>
              Ensure every aspect of your design is accurately represented and visually appealing.
            </div>

            <div className='head2'>Client Satisfaction</div>
            <div className='p1'>
              We prioritize your vision and ensure our drawings meet your expectations.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Pricing: Contact us to discuss your project requirements and receive a personalized quote based on the scope of work.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to elevate your presentations with professional CAD to presentation drawing services? Contact us now to discuss your project needs or schedule a consultation with our team.
          </div>
        )}
      </div>
    </div>
  );
}

export default PresentationDrawings;
