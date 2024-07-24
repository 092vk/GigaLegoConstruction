import React, { useState } from 'react';
import './threeDWalkThroughAnimation.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'


function ThreeDWalkThroughAnimation() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Engaging 3D Walkthrough Animation Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Immerse Your Audience with Interactive 3D Walkthroughs</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers compelling 3D walkthrough animation services that transform architectural designs into immersive virtual experiences. Whether you're presenting to clients, marketing a property, or showcasing a new development, our animations bring your vision to life with realism and impact.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our 3D Walkthrough Animation Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Interactive Virtual Tours</div>
            <div className='p1'>
              Create interactive 3D walkthroughs that allow viewers to explore and experience your designs from every angle. Navigate through spaces, visualize layouts, and showcase key features with fluid motion and detail.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Visualization Excellence</div>
            <div className='p1'>
              High-quality animations that enhance understanding and engagement.
            </div>

            <div className='head2'>Enhanced Communication</div>
            <div className='p1'>
              Clearly communicate design intent and functionality to stakeholders.
            </div>

            <div className='head2'>Client Satisfaction</div>
            <div className='p1'>
              Tailored animations that align with your project goals and expectations.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us to discuss your project specifics and receive a personalized quote.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to captivate your audience with immersive 3D walkthrough animations? Contact us now to discuss your project requirements, schedule a consultation, or view examples of our past animations.
          </div>
        )}
      </div>
    </div>
  );
}

export default ThreeDWalkThroughAnimation;
