import React, { useState } from 'react';
import './StructuralSteelDetailing.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data1.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/Ap2Data'

function StructuralSteelDetailing() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <div className='s'>
        <h1 className='head1'>Structural Steel Detailing Services by GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Precision Detailing for Robust Steel Structures</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction specializes in providing detailed structural steel detailing services that support architects, engineers, and fabricators in creating accurate and buildable steel structures. Our expertise ensures precision, compliance with industry standards, and seamless integration with the overall design.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Structural Steel Detailing Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Shop Drawings</div>
            <div className='p1'>
              Develop detailed shop drawings for the fabrication of steel components, including beams, columns, braces, trusses, and connections. Ensure clarity and accuracy to facilitate efficient manufacturing and assembly.</div>

            <div className='head2'>Erection Drawings</div>
            <div className='p1'>
              Produce comprehensive erection drawings that guide the on-site assembly of steel structures. Detail the sequence of erection, connections, and alignment to ensure smooth and safe construction.</div>

            <div className='head2'>BIM Integration</div>
            <div className='p1'>
              Integrate structural steel detailing with Building Information Modeling (BIM) to enhance coordination and clash detection. Provide a comprehensive 3D model that supports collaboration among all project stakeholders.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced detailers proficient in the latest steel detailing software and standards.</div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality checks to ensure precise and error-free detailing.</div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline fabrication and construction processes with detailed and clear drawings.
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
            Ready to enhance your steel construction projects with professional detailing services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past structural steel detailing projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default StructuralSteelDetailing;
