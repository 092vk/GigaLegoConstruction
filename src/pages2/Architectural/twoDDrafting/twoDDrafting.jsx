import React, { useState } from 'react';
import './TwoDDrafting.css';

function TwoDDrafting() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Precision 2D Drafting Services by GigaLego Construction</h1>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Enhance Your Projects with Expert 2D Drafting</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers comprehensive 2D drafting services to transform your sketches, blueprints, or ideas into detailed and accurate technical drawings. Whether you're an architect, engineer, or designer, our CAD experts are here to support your project needs.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our 2D Drafting Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Customized Technical Drawings</div>
            <div className='p1'>
              Convert hand-drawn sketches or physical blueprints into precise 2D CAD formats (DWG, DXF). Ensure clarity, accuracy, and compliance with industry standards.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Our CAD technicians specialize in converting concepts into detailed technical drawings.
            </div>

            <div className='head2'>Quality Assurance</div>
            <div className='p1'>
              Rigorous checks to ensure accuracy and adherence to project specifications.
            </div>

            <div className='head2'>Timely Delivery</div>
            <div className='p1'>
              We prioritize your project timelines to meet deadlines effectively.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Competitive Pricing: Contact us for pricing tailored to your project requirements and budget.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get in Touch Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to streamline your design process with professional 2D drafting services? Contact us now to discuss your project needs or request a consultation with our team.
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoDDrafting;
