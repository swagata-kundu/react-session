import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Welcome to React session';

ReactDOM.render(<div > {
  title
} </div>,
  document.getElementById('app')
);

module.hot.accept();