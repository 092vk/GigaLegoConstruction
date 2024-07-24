import React, { useState } from 'react';
import './DrainageSewerageDesign.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function DrainageSewerageDesign() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <h1 className='head1'>Drainage and Sewerage Design Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Ensuring Efficient Water Management Solutions</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction specializes in comprehensive drainage and sewerage design services that optimize water management for residential, commercial, and municipal projects. Our expertise ensures sustainable and efficient solutions that meet regulatory standards and enhance environmental stewardship.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Drainage and Sewerage Design Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Stormwater Management</div>
            <div className='p1'>
              Design stormwater drainage systems to manage runoff effectively, including collection, conveyance, and storage solutions. Ensure compliance with local regulations and environmental considerations.</div>

            <div className='head2'>Sewer System Design</div>
            <div className='p1'>
              Develop sewerage networks and infrastructure plans for sanitary sewer systems. Optimize layout and capacity to accommodate population growth and future expansion.</div>

            <div className='head2'>Site Drainage Plans</div>
            <div className='p1'>
              Create detailed site drainage plans to mitigate flooding risks and ensure proper water flow across the site. Incorporate sustainable drainage techniques for eco-friendly solutions.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced engineers proficient in hydraulic modeling and drainage system design.</div>

            <div className='head2'>Compliance</div>
            <div className='p1'>
              Ensure designs meet regulatory requirements and environmental standards.</div>

            <div className='head2'>Sustainability</div>
            <div className='p1'>
              Incorporate green infrastructure and sustainable practices for long-term water management solutions.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project scope and specific requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to enhance your project with professional drainage and sewerage design services? Contact us now to discuss your specific needs, request a consultation, or learn more about our expertise in water management solutions.
          </div>
        )}
      </div>
    </div>
  );
}

export default DrainageSewerageDesign;
