import React, { useState } from 'react';
import './BIMCoordination.css';

function BIMCoordination() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>BIM Coordination Services by GigaLego Construction</h1>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Enhancing Collaboration and Integration in Construction Projects</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers comprehensive BIM coordination services to ensure seamless integration of architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) systems. Our BIM coordination expertise improves project efficiency, reduces clashes, and enhances overall design and construction quality.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our BIM Coordination Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Clash Detection and Resolution</div>
            <div className='p1'>
              Utilize advanced BIM software to detect clashes between different building systems early in the design phase. Resolve clashes through collaborative efforts to prevent rework and delays during construction.
            </div>

            <div className='head2'>Multi-disciplinary Coordination</div>
            <div className='p1'>
              Coordinate architectural, structural, and MEP disciplines within a single BIM environment. Ensure that all building systems align and work together efficiently to meet project requirements and specifications.
            </div>

            <div className='head2'>Model Review and Validation</div>
            <div className='p1'>
              Conduct thorough reviews and validations of BIM models to ensure accuracy, completeness, and compliance with project standards. Validate design intent and functionality to optimize project outcomes.
            </div>

            <div className='head2'>Construction Sequencing and Planning</div>
            <div className='p1'>
              Develop detailed construction sequences and plans using 4D BIM. Visualize project timelines and optimize construction workflows for improved coordination and on-site efficiency.
            </div>

            <div className='head2'>Communication and Collaboration</div>
            <div className='p1'>
              Facilitate clear communication and collaboration among project stakeholders through a centralized BIM platform. Ensure that all team members are aligned with project goals and requirements.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled BIM professionals with extensive experience in coordinating complex construction projects.
            </div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline project workflows and reduce rework with proactive clash detection and resolution.
            </div>

            <div className='head2'>Quality Assurance</div>
            <div className='p1'>
              Ensure high-quality design and construction through rigorous model review and validation processes.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project complexity and specific coordination requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to improve coordination and integration in your construction projects with professional BIM coordination services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past BIM coordination projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default BIMCoordination;
