import React, { useState } from 'react';
import './VolumetricEstimation.css';

function VolumetricEstimation() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <h1 className='head1'>Volumetric Estimation Services by GigaLego Construction</h1>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Accurate Volume Calculations for Efficient Project Planning</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers precise volumetric estimation services to support architects, engineers, and contractors in accurately calculating material volumes for various construction projects. Our detailed estimations ensure efficient resource planning, cost management, and project execution.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Volumetric Estimation Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Material Volume Calculations</div>
            <div className='p1'>
              Provide accurate calculations of material volumes, including concrete, soil, aggregate, and other construction materials. Support precise procurement and reduce material wastage.</div>

            <div className='head2'>Cut and Fill Analysis</div>
            <div className='p1'>
              Conduct cut and fill analysis for site grading and earthwork projects. Ensure optimal balance of cut and fill volumes to minimize transportation costs and environmental impact.</div>

            <div className='head2'>3D Modeling Integration</div>
            <div className='p1'>
              Integrate volumetric estimations with 3D modeling to visualize material quantities in the context of the project. Enhance understanding and communication of material requirements among stakeholders.</div>

            <div className='head2'>Project Cost Estimation</div>
            <div className='p1'>
              Combine volumetric estimations with cost data to provide comprehensive project cost estimates. Support budget planning and financial management.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced estimators proficient in using advanced software for accurate volumetric calculations.</div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous quality checks to ensure precise and reliable estimations.</div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline material procurement and project planning with detailed volumetric data.
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
            Ready to enhance your project planning with accurate volumetric estimation services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past volumetric estimation projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default VolumetricEstimation;
