import React, { useState } from 'react';
import './BIMForInfrastructure.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data1.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/Ap2Data'


function BIMForInfrastructure() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <div className='s'>
        <h1 className='head1'>BIM for Infrastructure Services by GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Transforming Infrastructure Projects with Cutting-Edge BIM Technology</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers state-of-the-art Building Information Modeling (BIM) services for infrastructure projects, ensuring comprehensive planning, design, and management. Our BIM expertise enhances collaboration, accuracy, and efficiency throughout the project lifecycle.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our BIM for Infrastructure Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>3D Modeling and Visualization</div>
            <div className='p1'>
              Create detailed 3D models of infrastructure projects, including roads, bridges, tunnels, and utilities. Enhance visualization and understanding of complex projects, aiding in design and decision-making.
            </div>

            <div className='head2'>Clash Detection and Coordination</div>
            <div className='p1'>
              Utilize BIM to detect and resolve clashes between different infrastructure components early in the design phase. Ensure seamless coordination among all stakeholders and disciplines.
            </div>

            <div className='head2'>Quantity Takeoff and Estimation</div>
            <div className='p1'>
              Generate accurate quantity takeoffs and cost estimations directly from the BIM model. Improve budgeting and resource planning with precise data.
            </div>

            <div className='head2'>Construction Sequencing and Scheduling</div>
            <div className='p1'>
              Develop detailed construction sequences and schedules using 4D BIM. Visualize project timelines and optimize construction workflows for better time management.
            </div>

            <div className='head2'>Asset Management</div>
            <div className='p1'>
              Implement 5D BIM for asset management, linking BIM data with lifecycle management. Enhance maintenance planning and operational efficiency of infrastructure assets.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled BIM professionals with extensive experience in infrastructure projects.
            </div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Precise modeling and data management to ensure project accuracy and efficiency.
            </div>

            <div className='head2'>Innovation</div>
            <div className='p1'>
              Leverage advanced BIM technology to enhance project outcomes and deliverables.
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
            Ready to transform your infrastructure projects with advanced BIM technology? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past BIM for infrastructure projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default BIMForInfrastructure;
