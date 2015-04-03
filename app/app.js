import React from 'react';
import DemoApp from './components/DemoApp.react';

console.log('loaded');

React.render(
    <DemoApp />,
    document.getElementById("example")
);

