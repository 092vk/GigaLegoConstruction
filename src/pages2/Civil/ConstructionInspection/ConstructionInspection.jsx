import React, { useState } from 'react';
import './ConstructionInspection.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data1.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/Ap2Data'


function ConstructionInspection() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <div className='s'>
        <h1 className='head1'>Construction Inspection Services by GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Ensuring Quality and Compliance at Every Stage</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers thorough construction inspection services to ensure your projects meet the highest standards of quality and compliance. Our expert inspectors provide detailed assessments and reports to help you identify issues early and maintain project integrity.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Construction Inspection Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Pre-Construction Inspections</div>
            <div className='p1'>
              Conduct site assessments and review plans to ensure all pre-construction requirements are met. Identify potential issues and recommend corrective actions before construction begins.</div>

            <div className='head2'>Ongoing Construction Inspections</div>
            <div className='p1'>
              Perform regular inspections throughout the construction process to monitor progress and ensure adherence to design specifications, building codes, and safety regulations. Provide detailed reports and actionable feedback.</div>

            <div className='head2'>Final Inspections</div>
            <div className='p1'>
              Conduct comprehensive final inspections to verify that all construction work meets specified standards and requirements. Ensure all issues are addressed before project completion and handover.</div>

            <div className='head2'>Specialized Inspections</div>
            <div className='p1'>
              Offer specialized inspections for specific aspects of construction, such as electrical systems, plumbing, HVAC, and structural elements. Ensure all components meet relevant standards and regulations.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Certified inspectors with extensive experience in various aspects of construction.</div>

            <div className='head2'>Thoroughness</div>
            <div className='p1'>
              Detailed inspections and comprehensive reports to identify and address issues early.</div>

            <div className='head2'>Compliance</div>
            <div className='p1'>
              Ensure all construction work meets relevant codes, standards, and regulations.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project scope and specific requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to ensure your construction projects meet the highest standards of quality and compliance? Contact us now to discuss your specific needs, request a consultation, or learn more about our construction inspection services.
          </div>
        )}
      </div>
    </div>
  );
}

export default ConstructionInspection;
