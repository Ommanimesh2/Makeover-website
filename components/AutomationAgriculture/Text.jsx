import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Typewriter from 'typewriter-effect';
const Text = () => {
  return (
    <div className='leftText'>
      <div className="highlightedText">
      <Typewriter options={{
    strings: ['Automation in','Agriculture'],
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString('Automation in Agriculture')
      .callFunction(() => {
        console.log(' ');
      })
      .pauseFor(500)
      .deleteAll()
      .callFunction(() => {
        console.log(' ');
      })
      .start();
  }}
/>
      </div>
      <div className="mainText">
      ​a single-click platform or super app that helps farmers to maximize profits through the Mobility Integrated Artificial Intelligence-based solution.

      </div>
      <Button>More Details</Button>
    </div>
  )
}

export default Text
