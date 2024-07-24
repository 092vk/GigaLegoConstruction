import React, { useState } from 'react';
import './GlassShopDrawings.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'


function GlassShopDrawings() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Glass Shop Drawings by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Precision Drawings for Glass Fabrication and Installation</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction specializes in producing detailed glass shop drawings that facilitate the fabrication and installation of glass components. Our CAD conversion services ensure accuracy and clarity, supporting architects, contractors, and manufacturers in achieving seamless project execution.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Glass Shop Drawing Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Detailed Glass Drawings</div>
            <div className='p1'>
              Convert architectural designs into precise shop drawings for glass panels, windows, doors, and facades. Ensure compatibility with fabrication processes and adherence to structural and aesthetic requirements.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled CAD technicians with experience in glass fabrication standards and techniques.
            </div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality checks to ensure drawings meet industry standards and project specifications.
            </div>

            <div className='head2'>Collaboration</div>
            <div className='p1'>
              Facilitate clear communication and coordination between design teams, fabricators, and installers.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Custom Quotes: Contact us for personalized pricing based on project scope and requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to streamline your glass fabrication projects with professional shop drawings? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past glass shop drawing projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default GlassShopDrawings;
