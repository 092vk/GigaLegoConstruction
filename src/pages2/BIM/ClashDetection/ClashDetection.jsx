import React, { useState } from 'react';
import './ClashDetection.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function ClashDetection() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Clash Detection Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>
      
      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Ensuring Seamless Integration and Error Prevention</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers advanced clash detection services to identify and resolve clashes between different building systems and components early in the design phase. Our expertise in BIM (Building Information Modeling) enhances project coordination, reduces rework costs, and ensures smooth construction processes.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Clash Detection Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Multi-disciplinary Clash Detection</div>
            <div className='p1'>
              Utilize specialized BIM software to detect clashes between architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) systems. Identify conflicts in spatial requirements, clearance, and installation sequences.
            </div>

            <div className='head2'>Detailed Clash Reports</div>
            <div className='p1'>
              Generate detailed clash reports highlighting the exact location and nature of conflicts. Provide actionable recommendations for resolving clashes to minimize design changes and construction delays.
            </div>

            <div className='head2'>Collaborative Resolution</div>
            <div className='p1'>
              Facilitate collaborative efforts among project stakeholders to resolve clashes efficiently. Coordinate design modifications and adjustments to ensure that all building systems work seamlessly together.
            </div>

            <div className='head2'>Integration with BIM Workflow</div>
            <div className='p1'>
              Integrate clash detection seamlessly into the BIM workflow to streamline coordination and communication. Ensure that all team members have access to up-to-date clash information for informed decision-making.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled BIM professionals with extensive experience in clash detection and coordination.
            </div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Reduce construction costs and delays by identifying and resolving clashes early in the design phase.
            </div>

            <div className='head2'>Quality Assurance</div>
            <div className='p1'>
              Ensure high-quality project outcomes through rigorous clash detection and resolution processes.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project complexity and specific clash detection requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to enhance project coordination and prevent clashes with professional clash detection services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past clash detection projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default ClashDetection;
