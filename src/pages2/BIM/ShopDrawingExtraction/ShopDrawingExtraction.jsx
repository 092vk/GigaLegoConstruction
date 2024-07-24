import React, { useState } from 'react';
import './ShopDrawingExtraction.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'


function ShopDrawingExtraction() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Shop Drawing Extraction Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>


      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Detailed Drawings for Precise Fabrication</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers specialized shop drawing extraction services to support manufacturers and fabricators in creating accurate and detailed blueprints from BIM models and architectural designs. Our expertise ensures precise fabrication and smooth assembly processes.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Shop Drawing Extraction Services</h2>
        {visibleSection === 'section2' && (
          <>

            <div className='head2'>Architectural Shop Drawings</div>
            <div className='p1'>
              Extract detailed architectural shop drawings, including floor plans, elevations, sections, and details. Ensure that every architectural element is accurately represented for efficient fabrication and construction.</div>

            <div className='head2'>Structural Shop Drawings</div>
            <div className='p1'>
              Produce comprehensive structural shop drawings from BIM models, detailing beams, columns, connections, and other structural components. Support precise fabrication and assembly with clear and accurate drawings.</div>

            <div className='head2'>MEP Shop Drawings</div>
            <div className='p1'>
              Generate detailed Mechanical, Electrical, and Plumbing (MEP) shop drawings from BIM models. Ensure that all MEP systems are accurately represented and coordinated for efficient installation.</div>

            <div className='head2'>Steel and Metal Fabrication Drawings</div>
            <div className='p1'>
              Extract precise shop drawings for steel and metal fabrication, including detailed connections, joints, and assembly instructions. Facilitate accurate and efficient manufacturing processes.</div>

            <div className='head2'>Clash Detection and Coordination</div>
            <div className='p1'>
              Utilize BIM models to identify and resolve clashes between different building systems during the shop drawing extraction process. Ensure seamless integration and coordination among all project components.</div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled professionals with extensive experience in extracting shop drawings from BIM models and architectural designs.</div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality checks to ensure precise and reliable shop drawings.</div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline fabrication and construction processes with detailed and clear drawings.
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
            Ready to enhance your fabrication and construction projects with professional shop drawing extraction services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past shop drawing projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopDrawingExtraction;
