//import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
//import 'alpinejs';

/* declare global {
  interface Window {
    counter: () => {
      count: number;
      inc: () => void;
    };
  }
}

window.counter = function() {
  return {
    count: 0,
    inc() {
      this.count += 1;
    }
  };
}; */

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);