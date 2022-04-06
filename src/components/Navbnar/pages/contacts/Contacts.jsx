import React from 'react'
// import DemoCarousel from '../carousel/DemoCarousel'
import FooTter from '../footer/FooTter'
import ContactUs from '../homePage/contactUs/ContactUs'
// import Customer from '../homePage/customer/Customer'

const Contacts = () => {
  return (
    <div>
 <div className="imgContainerAbout">
        <img src='./img/contakt.png' />
      </div>
      <ContactUs />
{/* <Customer /> */}
{/* <DemoCarousel /> */}
      <FooTter />
    </div>
  )
}

export default Contacts
