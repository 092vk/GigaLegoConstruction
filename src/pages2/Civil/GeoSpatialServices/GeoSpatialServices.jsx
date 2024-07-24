import React, { useState } from 'react';
import './GeoSpatialServices.css';
import Slider from '../../../components/slider/Slider'
import data from '../../../utils/data/data1.json'
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/Ap2Data'

function GeoSpatialServices() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <div className='s'>
        <h1 className='head1'>Geospatial Services by GigaLego Construction</h1>
        <Ap imageSlide={imageSlide}/>
        <Slider cardsData={data} />
      </div>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Enhancing Projects with Spatial Intelligence</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers specialized geospatial services that leverage spatial data and technology to enhance planning, design, and execution of projects. Whether you're in urban planning, infrastructure development, or environmental management, our geospatial solutions provide valuable insights and support informed decision-making.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Geospatial Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>GIS Mapping and Analysis</div>
            <div className='p1'>
              Utilize Geographic Information Systems (GIS) to map and analyze spatial data. Visualize geographical features, demographics, and environmental factors to support planning and design processes.</div>

            <div className='head2'>Remote Sensing and Aerial Imagery</div>
            <div className='p1'>
              Harness remote sensing technologies and aerial imagery to gather data on terrain, land use, and environmental conditions. Support accurate site assessment and monitoring.</div>

            <div className='head2'>Spatial Modeling and Visualization</div>
            <div className='p1'>
              Develop spatial models and visualizations to simulate scenarios, assess impacts, and optimize spatial layouts. Enhance understanding and communication of complex spatial relationships.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced geospatial analysts and GIS specialists with proficiency in spatial data management and analysis.</div>

              <div className='head2'>Decision Support</div>
              <div className='p1'>
                Provide actionable insights and data-driven recommendations to support project planning and management.</div>

                <div className='head2'>Integration</div>
                <div className='p1'>
                  Seamlessly integrate geospatial data with CAD and BIM workflows for comprehensive project visualization and analysis.
                </div>
              </>
        )}

              <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
              {visibleSection === 'section4' && (
                <div className='p1'>
                  Customized Quotes: Contact us for personalized pricing based on project requirements and scope.
                </div>
              )}

              <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
              {visibleSection === 'section5' && (
                <div className='p1'>
                  Ready to leverage spatial intelligence for your projects? Contact us now to discuss your specific geospatial needs, request a consultation, or learn more about how our geospatial services can enhance your project outcomes.
                </div>
              )}
            </div>
          </div>
        );
}

        export default GeoSpatialServices;
