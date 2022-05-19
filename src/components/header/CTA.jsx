import React from 'react';
import CVru from '../../assets/CVru.pdf';
import CVeng from '../../assets/CVeng.pdf';

function CTA() {
  return (
    <>
      <div className="cta">
        <a href={CVru} download className="btn">Dowload CV Ru</a>
        <a href={CVeng} download className="btn">Dowload CV Eng</a>

      </div>
      <div className="cta">
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </>
  );
}

export default CTA;
