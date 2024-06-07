import React from 'react';
import Thankyou from '../images/thank-you.jpg';

const Dialog = ({ isOpen, onClose }) => {
  return (
    <div className={`dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        {isOpen && (
          <>
            <img src={Thankyou} alt="React Logo" />
          </>
        )}
      </div>
    </div>
  );
};

export default Dialog;
