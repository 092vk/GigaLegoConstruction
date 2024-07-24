import React, { useState } from 'react';
import './StructuralDesignDrafting.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function StructuralDesignDrafting() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <h1 className='head1'>Structural Design and Drafting Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Building Solid Foundations with Expertise</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers comprehensive structural design and drafting services to support architects, developers, and contractors in creating safe and efficient building structures. Our meticulous approach ensures structural integrity, compliance with building codes, and seamless integration with architectural and MEP systems.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Structural Design and Drafting Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Structural Engineering Design</div>
            <div className='p1'>
              Provide structural engineering expertise to design safe and reliable building structures, including foundations, beams, columns, and framing systems. Utilize advanced software for analysis and design optimization.</div>

            <div className='head2'>Detailed Structural Drafting</div>
            <div className='p1'>
              Produce detailed structural drawings and plans, including foundation plans, framing plans, sections, and details. Ensure clarity and accuracy to facilitate construction and coordination with other disciplines.</div>

            <div className='head2'>Structural Analysis</div>
            <div className='p1'>
              Conduct structural analysis using industry-standard software to verify design performance under various loads and conditions. Optimize designs for efficiency and cost-effectiveness.</div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled structural engineers and drafters with extensive experience in residential, commercial, and industrial projects.</div>

            <div className='head2'>Integration</div>
            <div className='p1'>
              Collaborate closely with architects, MEP engineers, and contractors to ensure seamless coordination and integration of structural elements.</div>

            <div className='head2'>Quality Assurance</div>
            <div className='p1'>
              Rigorous quality checks to ensure designs meet safety standards, building codes, and client requirements.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project complexity and specific requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to build with confidence? Contact us now to discuss your structural design and drafting needs, request a consultation, or explore examples of our past projects showcasing our expertise in structural engineering.
          </div>
        )}
      </div>
    </div>
  );
}

export default StructuralDesignDrafting;
