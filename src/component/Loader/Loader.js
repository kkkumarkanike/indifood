import React from 'react';
import loader from '../../images/loader.gif';

function Loader() {
  return (
    <div className='loading_gif'>
      <img src={loader} alt='Loading' />
    </div>
  );
}

export default Loader;
