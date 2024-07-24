import React, { useState } from 'react';
import './ConstructionCostEstimation.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function ConstructionCostEstimation() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Construction Cost Estimation Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Accurate Estimates for Informed Project Planning</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers reliable construction cost estimation services to support architects, developers, and contractors in planning and budgeting for building projects. Our detailed cost estimates provide clarity and confidence, ensuring projects are financially viable and well-managed from inception to completion.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Construction Cost Estimation Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Detailed Quantity Takeoffs</div>
            <div className='p1'>
              Produce comprehensive quantity takeoffs from architectural and engineering drawings. Calculate quantities of materials, labor, and equipment needed for accurate cost projections.</div>

            <div className='head2'>Cost Database Utilization</div>
            <div className='p1'>
              Utilize industry-standard cost databases and historical data to benchmark and validate cost estimates. Ensure accuracy and reliability in forecasting project expenses.</div>

            <div className='head2'>Value Engineering</div>
            <div className='p1'>
              Provide value engineering services to optimize project costs without compromising quality or functionality. Identify cost-saving opportunities and alternative materials or methods.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced estimators with deep knowledge of construction practices and cost factors.</div>

            <div className='head2'>Accuracy</div>
            <div className='p1'>
              Rigorous methodologies and quality checks to ensure precise cost projections.</div>

            <div className='head2'>Transparency</div>
            <div className='p1'>
              Provide detailed breakdowns and explanations to facilitate client understanding and decision-making.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on project size and complexity.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to streamline your project planning with professional construction cost estimation services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past cost estimation projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default ConstructionCostEstimation;
