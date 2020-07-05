import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

function CutomToast({ authError }) {
  return (
    <div>
      <div
        style={{
          fontWeight: 'bold',
          marginLeft: '0.4rem',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {authError}
      </div>
      {/* <button onClick={closeToast}></button> */}
    </div>
  );
}

export default CutomToast;
