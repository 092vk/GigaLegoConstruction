import React, { useState } from 'react';
import './LeanConstruction.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function LeanConstruction() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Lean Construction Principles by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Enhancing Efficiency and Value in Construction Projects</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction integrates lean construction principles to optimize project workflows, reduce waste, and enhance overall project outcomes. Our approach emphasizes collaboration, continuous improvement, and delivering maximum value to clients.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Lean Construction Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Value Stream Mapping</div>
            <div className='p1'>
              Identify and streamline value-adding activities while eliminating non-value-adding processes. Optimize project workflows to enhance efficiency and reduce lead times.
            </div>

            <div className='head2'>Last Planner System</div>
            <div className='p1'>
              Implement a collaborative scheduling and coordination system to improve reliability and predictability in project delivery. Enhance communication and coordination among project teams.
            </div>

            <div className='head2'>Pull Planning</div>
            <div className='p1'>
              Utilize pull planning techniques to align project activities with actual demand and client requirements. Improve resource allocation and minimize delays.
            </div>

            <div className='head2'>Kaizen and Continuous Improvement</div>
            <div className='p1'>
              Promote a culture of continuous improvement through Kaizen events and feedback loops. Empower teams to identify and implement process improvements throughout the project lifecycle.
            </div>

            <div className='head2'>Integrated Project Delivery (IPD)</div>
            <div className='p1'>
              Facilitate integrated project delivery methods to foster collaboration among all project stakeholders. Enhance decision-making and project outcomes through early involvement and shared risk/reward.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced in applying lean construction principles to optimize project workflows and enhance efficiency.
            </div>

            <div className='head2'>Value-driven Approach</div>
            <div className='p1'>
              Focus on delivering maximum value to clients through waste reduction and process optimization.
            </div>

            <div className='head2'>Collaboration</div>
            <div className='p1'>
              Foster collaborative relationships among project teams to achieve common goals and objectives.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Solutions: Contact us to discuss your project needs and explore how our lean construction services can benefit your project.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to streamline your construction projects and maximize value with lean construction principles? Contact us now to learn more about our lean construction services, request a consultation, or explore examples of our past lean construction projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default LeanConstruction;
