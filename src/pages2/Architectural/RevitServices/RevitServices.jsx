import React, { useState } from 'react';
import './RevitServices.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data1.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function RevitServices() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <div className='s'>
        <h1 className='head1'>Revit Services by GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>
      

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Enhance Your Designs with Revit Expertise</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers comprehensive Revit services to streamline your design processes and enhance collaboration. Whether you're in architecture, engineering, or construction, our Revit services leverage advanced technology to transform your concepts into detailed, intelligent 3D models.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Revit Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Revit Modeling</div>
            <div className='p1'>
              Create detailed 3D models using Revit software for architecture, structure, and MEP (Mechanical, Electrical, Plumbing) disciplines. Ensure BIM (Building Information Modeling) compliance and integration across project phases.
            </div>

            <div className='head2'>Revit Family Creation</div>
            <div className='p1'>
              Develop custom Revit families and components tailored to your project requirements. Enhance design efficiency and standardization with parametric families that meet industry standards.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>BIM Expertise</div>
            <div className='p1'>
              Proficiency in leveraging Revit for efficient design coordination and project management.
            </div>

            <div className='head2'>Collaborative Workflows</div>
            <div className='p1'>
              Facilitate seamless collaboration between architects, engineers, and contractors.
            </div>

            <div className='head2'>Project Efficiency</div>
            <div className='p1'>
              Streamline design iterations and improve decision-making with intelligent 3D modeling and data-rich information.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project complexity and scope.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to optimize your design workflow with Revit services? Contact us now to discuss your specific project needs, request a consultation, or learn more about how our Revit expertise can benefit your projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default RevitServices;
