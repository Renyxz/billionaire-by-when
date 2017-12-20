import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS
import './css/index.css';
import './css/App.css';

// Components
import App from './components/App';
import Navbar from './components/Navbar';
import About from './components/About';
import Report from './components/Report';

// Service
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={ App } />
            <Route path="/" component={ Navbar } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/report" component={ Report } />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
