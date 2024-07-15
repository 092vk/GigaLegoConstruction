import React, { useState } from 'react';
import './ScanToBIM.css';

function ScanToBIM() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Scan to BIM Services by GigaLego Construction</h1>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Bridging Reality with Digital Precision</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers cutting-edge Scan to BIM services that transform physical structures into accurate digital models. Our advanced scanning technology and BIM expertise ensure precise documentation and enhanced project management for renovations, retrofits, and new constructions.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Scan to BIM Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>3D Laser Scanning</div>
            <div className='p1'>
              Utilize high-definition 3D laser scanning technology to capture detailed and accurate measurements of existing structures. Generate comprehensive point cloud data for precise modeling.</div>

            <div className='head2'>Point Cloud to BIM Conversion</div>
            <div className='p1'>
              Convert point cloud data into detailed Building Information Models (BIM). Create accurate 3D models that reflect the exact conditions of the physical site, including all architectural and structural elements.</div>

            <div className='head2'>As-Built Documentation</div>
            <div className='p1'>
              Produce accurate as-built documentation for existing buildings and infrastructure. Ensure that all modifications and additions are precisely documented for future reference and project planning.</div>

            <div className='head2'>Renovation and Retrofit Planning</div>
            <div className='p1'>
              Support renovation and retrofit projects with accurate BIM models derived from existing structures. Facilitate better planning, coordination, and execution of modifications.</div>

            <div className='head2'>Quality Assurance and Control</div>
            <div className='p1'>
              Conduct thorough quality checks to ensure the accuracy and completeness of the BIM models. Validate that the models align with the scanned data and meet project requirements.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Advanced Technology</div>
            <div className='p1'>
              State-of-the-art 3D laser scanning equipment for precise and efficient data capture.</div>

            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled BIM professionals with extensive experience in Scan to BIM projects.</div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality control processes to ensure high accuracy and reliability of BIM models.</div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline project workflows with accurate digital representations of physical structures.
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
            Ready to bridge the gap between physical structures and digital models? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past Scan to BIM projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default ScanToBIM;
