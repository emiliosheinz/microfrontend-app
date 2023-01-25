import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
  ReactDOM.render(
    <h1>Hi there!</h1>,
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
