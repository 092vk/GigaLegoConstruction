import React, { useState } from 'react';
import './ConstructionDrawings.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function ConstructionDrawings() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Construction Drawing Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Detailed Drawings for Seamless Project Execution</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction specializes in producing accurate and comprehensive construction drawings that serve as essential blueprints for building projects. Our CAD conversion services ensure clarity, precision, and adherence to industry standards, supporting architects, engineers, and contractors throughout the construction process.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Construction Drawing Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Architectural Drawings</div>
            <div className='p1'>
              Convert architectural designs into detailed construction drawings, including floor plans, elevations, sections, and details. Ensure clarity and accuracy to facilitate construction activities and permit approvals.</div>

            <div className='head2'>Structural Drawings</div>
            <div className='p1'>
              Produce structural drawings that detail the design and placement of structural elements, reinforcing bars, and foundation plans. Support structural engineers and contractors in ensuring structural integrity.</div>

            <div className='head2'>MEP Drawings</div>
            <div className='p1'>
              Create MEP (Mechanical, Electrical, Plumbing) drawings that outline the layout and specifications of mechanical, electrical, and plumbing systems. Facilitate coordination among MEP engineers and trades.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled CAD technicians experienced in producing construction drawings across architectural, structural, and MEP disciplines.</div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality assurance processes to ensure drawings meet regulatory requirements and project specifications.</div>

            <div className='head2'>Project Support</div>
            <div className='p1'>
              Facilitate clear communication and coordination among project stakeholders for seamless project execution.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Custom Quotes: Contact us for personalized pricing based on project complexity and scope.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to streamline your construction projects with professional construction drawing services? Contact us now to discuss your specific project needs, request a consultation, or explore examples of our past construction drawing projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default ConstructionDrawings;
