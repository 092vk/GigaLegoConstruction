import React, { useState } from 'react'
import './Value.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from '../../utils/accordion'

function Values() {
  return (
    <section className='v-wrapper'>
      <div className="paddings innerWidth flexCenter v-container">
        {/* {left side} */}
        <div className="v-left">
          <div className="image-container">
            <img src="./ourservices.png" alt="" />
          </div>
        </div>  

        {/* {right side} */}
        <div className="flexColStart v-right">
          <span className='sideBorder'>
            <span className='orangeText'>Our Services</span> <br />
            <span className='primaryText'>Services We Provide</span>
          </span>
          <span className='secondaryText'>Value we give to you</span>


          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            { data.map((item,i)=>{

              const [className,setClassName]=useState(null)

              return(
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>

                      <AccordionItemState>
                        {({expanded})=>expanded ? setClassName("expanded"):setClassName("collapsed")}
                      </AccordionItemState>

                      <div className="flexCenter icon">
                        {item.icon}
                      </div>
                      <span className='flexCenter'>
                        {item.heading}
                      </span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Values