import React from 'react';
import preLoader from '../../../assets/img/loading.gif';

let Preloader = (props) => {
  return  <img style={{ width: 100, height: 100 }}  src={ preLoader }/>
}
export  default Preloader;