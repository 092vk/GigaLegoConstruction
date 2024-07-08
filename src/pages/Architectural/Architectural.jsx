import React from 'react';
import './Architectural.css';

function Architectural() {
  return (
    <section className="arch-wrapper">
      <div className="arch-heading">
        <h1>Architectural</h1>
      </div>
      <div className="arch-content">
        <div className="arch-info">
          <p>
            Revit is a Building Information Modeling (BIM) software widely used in the architecture, engineering, and construction industries. <br></br>It allows professionals to design buildings and structures with a focus on collaboration, efficiency, and accuracy.
          </p>
          <h2>Properties of Revit Services:</h2>
          <ul>
            <li><strong>Building Information Modeling (BIM)</strong>: Revit enables the creation of 3D models that include intelligent information about the building components.</li>
            <li><strong>Collaboration</strong>: It facilitates real-time collaboration among architects, engineers, and other stakeholders, enhancing project coordination and communication.</li>
            <li><strong>Parametric Design</strong>: Revit's parametric modeling capabilities allow users to create intelligent design elements that can be easily modified and updated.</li>
            <li><strong>Visualization</strong>: The software provides powerful visualization tools for rendering realistic images and animations of the proposed designs.</li>
            <li><strong>Documentation</strong>: Revit automates the generation of construction documentation, including floor plans, elevations, sections, and schedules.</li>
          </ul>
        </div>
        <div className="arch-prices">
          <h2>Prices Rates in the Indian Market:</h2>
          <p>Pricing for Revit services in India can vary based on several factors:</p>
          <ul>
            <li>Project Size and Complexity</li>
            <li>Scope of Work</li>
            <li>Experience and Expertise</li>
            <li>Location</li>
          </ul>
          <p>As of the latest market trends (2024), approximate pricing can range as follows:</p>
          <ul>
            <li><strong>Basic Revit Modeling</strong>: ₹500 to ₹1,500 per hour</li>
            <li><strong>Detailing and Documentation</strong>: ₹800 to ₹2,000 per hour</li>
            <li><strong>Rendering and Visualization</strong>: ₹1,000 to ₹3,000 per hour</li>
            <li><strong>BIM Coordination and Clash Detection</strong>: ₹1,200 to ₹3,500 per hour</li>
          </ul>
        </div>
        <div className="arch-images">
          <img src="path/to/image1.jpg" alt="Architectural design 1" />
          <img src="path/to/image2.jpg" alt="Architectural design 2" />
          <img src="path/to/image3.jpg" alt="Architectural design 3" />
        </div>
      </div>
    </section>
  );
}

export default Architectural;
