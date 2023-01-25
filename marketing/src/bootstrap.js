import React from 'react';
import ReactDOM from 'react-dom';

import App from './app'

const mount = (element) => {
  ReactDOM.render(
    <App/>,
    element
  )
}

if(process.env.NODE_ENV === 'development') {
  const devRootNode = document.querySelector('#marketing-dev-root-node')

  if(devRootNode) {
    mount(devRootNode)
  }
}

export { mount };
