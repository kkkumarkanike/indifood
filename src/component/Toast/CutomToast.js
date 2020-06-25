import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

function CutomToast({ authError }) {
  return (
    <div>
      <div>{authError}</div>
      {/* <button onClick={closeToast}></button> */}
    </div>
  );
}

export default CutomToast;
