import React, { useState } from 'react';
import './FloorPlanConversion.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data2.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/Ap2Data'


function FloorPlanConversion() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  }; 

  return (
    <div className='FloorPlanConversion'>
      

      <div className='s'>
        <h1 className='head1'>2D and 3D Floor Plan Conversion with GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Elevate Your Designs with Precision CAD Conversion</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            At GigaLego Construction, we specialize in transforming floor plans into accurate and detailed digital formats. Whether you need 2D floor plan conversion for traditional layouts or advanced 3D models for immersive visualization, our CAD conversion services are tailored to meet your architectural and design needs.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Floor Plan Conversion Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>2D Floor Plan Conversion</div>
            <div className='p1'>
              Convert hand-drawn sketches or physical blueprints into editable 2D CAD formats (DWG, DXF). Ensure precise replication of room dimensions, layout details, and annotations for seamless integration into your design workflow.
            </div>

            <div className='head2'>3D Floor Plan Conversion</div>
            <div className='p1'>
              Create detailed and immersive 3D models from 2D floor plans. Visualize spatial relationships, explore interior design options, and enhance client presentations with our advanced 3D conversion services.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (<>
            <div className='head2'>Expertise</div>
          <div className='p1'>
            Trusted by architects and designers for our precision and attention to detail in CAD conversion services.</div>

            <div className='head2'>Quality</div>
          <div className='p1'>
            Ensure high-quality outputs with rigorous quality checks and adherence to industry standards.</div>

            <div className='head2'>Customization</div>
          <div className='p1'>
            Tailor-made solutions to fit your specific project requirements, ensuring optimal results and client satisfaction.
          </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <>
            <div className='head2'>2D Floor Plan Conversion</div>
            <div className='p1'>
            Starting from ₹X per plan. Prices vary based on complexity and project size.</div>

            <div className='head2'>3D Floor Plan Conversion</div>
            <div className='p1'>
            Custom pricing available. Contact us to discuss your specific needs and receive a personalized quote.</div>
          </>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to transform your floor plans? Contact us today to discuss your project needs, request a consultation, or get a quote for our CAD conversion services.
          </div>
        )}
      </div>
    </div>
  );
}

export default FloorPlanConversion;
