import React, { useState } from 'react';
import './CadConversion.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data1.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/Ap2Data'

function CadConversion() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
    
      <div className='s'>
        <h1 className='head1'>CAD Conversion with GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Transforming Traditional Designs into Digital Excellence</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            We specialize in CAD conversion services designed to modernize your design processes. As a new startup, we're dedicated to delivering precise, efficient, and cost-effective solutions tailored to meet your specific needs.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our CAD Conversion Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>2D CAD Conversion</div>
            <div className='p1'>
              Digitize hand-drawn sketches and blueprints into editable digital formats (DWG, DXF). Ensure accuracy and detail preservation with our meticulous approach to 2D CAD conversion.
            </div>

            <div className='head2'>3D CAD Conversion</div>
            <div className='p1'>
              Transform physical models or sketches into detailed 3D CAD models. Experience enhanced visualization and collaboration capabilities with our 3D conversion services.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Quality Assurance</div>
            <div className='p1'>
              Our team of CAD experts ensures every conversion meets rigorous quality standards.
            </div>

            <div className='head2'>Affordable Pricing</div>
            <div className='p1'>
              Competitive rates designed to fit startup budgets, with flexible pricing options for different project sizes.
            </div>

            <div className='head2'>Personalized Approach</div>
            <div className='p1'>
              Tailored solutions to meet your unique project requirements, ensuring your satisfaction every step of the way.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Pricing: Contact us to discuss your project requirements and receive a personalized quote based on the scope of work.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Let's Get Started!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Whether you're an architect, engineer, or designer, we're here to help you streamline your design workflow and bring your visions to life. Contact us today to discuss your project needs and receive a personalized quote.
          </div>
        )}
      </div>
    </div>
  );
}

export default CadConversion;
