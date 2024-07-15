import React, { useState } from 'react';
import './RevitFamilyCreation.css';

function RevitFamilyCreation() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='FloorPlanConversion'>
      <h1 className='head1'>Revit Family Creation Services by GigaLego Construction</h1>

      <div className='content'>
        <h2 onClick={() => toggleSection('section1')}>Customized Revit Families</h2>
        {visibleSection === 'section1' && (
          <div className='p1'>
            GigaLego Construction specializes in creating custom Revit families to streamline your design process and ensure consistency across projects. Our Revit family creation services are tailored to meet your specific project requirements, enhancing efficiency and accuracy in BIM modeling.
          </div>
        )}

        <h2 onClick={() => toggleSection('section2')}>Our Revit Family Creation Services</h2>
        {visibleSection === 'section2' && (
          <>
            <div className='head2'>Custom Revit Family Creation</div>
            <div className='p1'>
              Develop custom Revit families for architectural elements, structural components, MEP (Mechanical, Electrical, and Plumbing) systems, furniture, fixtures, and equipment (FF&E), and more. Ensure that all Revit families adhere to your project standards and specifications.</div>

            <div className='head2'>Parameterization and Flexibility</div>
            <div className='p1'>
              Parameterize Revit families to allow for flexibility in design iterations and variations. Customize family parameters to accommodate different project needs and design changes.</div>

            <div className='head2'>Quality Assurance and Validation</div>
            <div className='p1'>
              Conduct rigorous quality checks to ensure that all Revit families are accurate, functional, and compliant with Revit standards. Validate family performance to optimize BIM workflows and project outcomes.</div>

            <div className='head2'>Integration with BIM Models</div>
            <div className='p1'>
              Integrate custom Revit families seamlessly into BIM models to enhance visualization, coordination, and collaboration among project stakeholders. Ensure consistency and accuracy across all project phases.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section3')}>Why Choose Us?</h2>
        {visibleSection === 'section3' && (
          <>
            <div className='head2'>Expertise</div>
            <div className='p1'>
              Experienced Revit professionals with in-depth knowledge of Revit family creation and management.</div>

            <div className='head2'>Customization</div>
            <div className='p1'>
              Tailored solutions to meet your specific design and project requirements.</div>

            <div className='head2'>Efficiency</div>
            <div className='p1'>
              Streamline design workflows and improve project efficiency with customized Revit families.
            </div>
          </>
        )}

        <h2 onClick={() => toggleSection('section4')}>Pricing and Consultation</h2>
        {visibleSection === 'section4' && (
          <div className='p1'>
            Customized Quotes: Contact us for personalized pricing based on the complexity and scope of Revit family creation requirements.
          </div>
        )}

        <h2 onClick={() => toggleSection('section5')}>Get Started Today!</h2>
        {visibleSection === 'section5' && (
          <div className='p1'>
            Ready to optimize your BIM workflows with custom Revit family creation services? Contact us now to discuss your specific needs, request a consultation, or explore examples of our past Revit family creation projects.
          </div>
        )}
      </div>
    </div>
  );
}

export default RevitFamilyCreation;
