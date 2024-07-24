import React, { useState } from 'react';
import './FabricationDrawing.css';
import Ap from '../../../components/Ap/Ap'
import imageSlide from '../../../utils/dataSliderImage/ApData'

function FabricationDrawing() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>

      <h1 className='head1'>Fabrication Drawing Services by GigaLego Construction</h1>
      <Ap imageSlide={imageSlide}/>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Precision Drawings for Efficient Fabrication</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction offers expert fabrication drawing services to support manufacturers and fabricators in creating accurate and detailed blueprints for various construction components. Our meticulous approach ensures that your fabrication processes are smooth, efficient, and error-free.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Fabrication Drawing Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Component Drawings</div>
            <div className='p1'>
              Develop detailed drawings for individual components, including dimensions, materials, and fabrication techniques. Ensure every piece is accurately represented to facilitate precise manufacturing.</div>

            <div className='head2'>Assembly Drawings</div>
            <div className='p1'>
              Create comprehensive assembly drawings that guide the fabrication and assembly of complex structures. Include step-by-step instructions and detailed views to ensure clarity and accuracy.</div>

            <div className='head2'>Weldment Drawings</div>
            <div className='p1'>
              Produce specialized weldment drawings that detail welding specifications, joint types, and welding sequences. Support high-quality and compliant welding processes.</div>

            <div className='head2'>BOM (Bill of Materials)</div>
            <div className='p1'>
              Generate detailed Bills of Materials that list all components, materials, and quantities required for fabrication. Ensure accurate material procurement and inventory management.</div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Skilled drafters with extensive experience in producing fabrication drawings for various industries.</div>

            <div className='head2'>Precision</div>
            <div className='p1'>
              Rigorous quality checks to ensure drawings are accurate and comply with industry standards.</div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline your fabrication processes with clear and detailed drawings that minimize errors and rework.</div>
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
            Ready to optimize your fabrication projects with professional drawing services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past fabrication drawing projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default FabricationDrawing;
