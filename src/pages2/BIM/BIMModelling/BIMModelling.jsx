import React, { useState } from 'react';
import './BIMModelling.css';

function BIMModelling() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>BIM Modeling Services by GigaLego Construction</h1>
      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Transforming Design with Advanced BIM Solutions</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers comprehensive BIM (Building Information Modeling) services to support architects, engineers, and construction professionals in creating detailed and accurate digital representations of their projects. Our BIM expertise enhances collaboration, accuracy, and project efficiency.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our BIM Modeling Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>3D BIM Modeling</div>
            <div className='p1'>
              Develop detailed 3D BIM models for architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) systems. Visualize every aspect of the project in a virtual environment to improve design and coordination.
            </div>

            <div className='head2'>4D BIM for Construction Sequencing</div>
            <div className='p1'>
              Incorporate time-related data into the BIM model to create 4D BIM models. Visualize construction sequences and schedules to enhance project planning and on-site execution.
            </div>

            <div className='head2'>5D BIM for Cost Estimation</div>
            <div className='p1'>
              Link BIM models with cost data to generate 5D BIM models. Provide accurate quantity takeoffs and cost estimations to support budgeting and financial management.
            </div>

            <div className='head2'>Clash Detection and Coordination</div>
            <div className='p1'>
              Utilize BIM models to identify and resolve clashes between different building systems early in the design phase. Ensure seamless coordination and integration among all project stakeholders.
            </div>

            <div className='head2'>As-Built BIM Models</div>
            <div className='p1'>
              Create accurate as-built BIM models to document existing conditions and modifications made during construction. Support facility management and future renovation projects with precise digital records.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced BIM professionals proficient in the latest BIM software and standards.
            </div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality checks to ensure precise and reliable BIM models.
            </div>

            <div className='head2'>Collaboration</div>
            <div className='p1'>
              Enhance project collaboration and communication through a centralized BIM platform.
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
            Ready to transform your projects with advanced BIM modeling services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past BIM projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default BIMModelling;
