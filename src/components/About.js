import React, { useState } from 'react'


export default function About() {
  const [mystyle, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btnText, changebtnText] = useState('Also Change the Accordian theme to Dark')

  const handleStyleClick = () => {
    if (mystyle.color != 'white') {
      changebtnText('Also Change the Accordian theme to Dark')
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      })

    }
    else {
      changebtnText('Also Change the Accordian theme to Light')
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }

  return (
    <>
      <div className="container p-0 pt-4 my-3" style={mystyle}>
        <h2 className='mt-0 mx-4 mb-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" >
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                Our Features
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis consectetur nemo quo harum doloremque ullam dolorum nisi in commodi et quasi placeat consequuntur expedita natus quia. Vel, magnam quam. Et eligendi, veritatis nihil ut pariatur tempora consequuntur aperiam illum provident molestias quos tempore, ea quis doloribus voluptatem! Accusantium impedit amet, hic magni modi eaque! Cum, provident. Odio, ducimus blanditiis! Debitis, illum doloribus eaque nemo, molestias, natus quas ea quisquam dicta eveniet omnis alias vero corporis vel provident? Exercitationem eius explicabo facilis dolorem ullam dicta. Molestias quisquam quaerat voluptate praesentium dolore porro nulla magni doloribus ex quas, tempora atque maxime!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                Our Purpose
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis consectetur nemo quo harum doloremque ullam dolorum nisi in commodi et quasi placeat consequuntur expedita natus quia. Vel, magnam quam. Et eligendi, veritatis nihil ut pariatur tempora consequuntur aperiam illum provident molestias quos tempore, ea quis doloribus voluptatem! Accusantium impedit amet, hic magni modi eaque! Cum, provident. Odio, ducimus blanditiis! Debitis, illum doloribus eaque nemo, molestias, natus quas ea quisquam dicta eveniet omnis alias vero corporis vel provident? Exercitationem eius explicabo facilis dolorem ullam dicta. Molestias quisquam quaerat voluptate praesentium dolore porro nulla magni doloribus ex quas, tempora atque maxime!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                Our Team
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis consectetur nemo quo harum doloremque ullam dolorum nisi in commodi et quasi placeat consequuntur expedita natus quia. Vel, magnam quam. Et eligendi, veritatis nihil ut pariatur tempora consequuntur aperiam illum provident molestias quos tempore, ea quis doloribus voluptatem! Accusantium impedit amet, hic magni modi eaque! Cum, provident. Odio, ducimus blanditiis! Debitis, illum doloribus eaque nemo, molestias, natus quas ea quisquam dicta eveniet omnis alias vero corporis vel provident? Exercitationem eius explicabo facilis dolorem ullam dicta. Molestias quisquam quaerat voluptate praesentium dolore porro nulla magni doloribus ex quas, tempora atque maxime!
              </div>
            </div>
          </div>
        </div>
      <div className="container">
        <button className="btn btn-primary my-4" onClick={handleStyleClick}>{btnText}</button>
      </div>
      </div>


    </>
  )
}
