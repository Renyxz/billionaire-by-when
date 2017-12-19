import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return(
            <nav className="navbar fixed-top">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-dollar"></i> BWHEN
                </Link>

                <div className="navbar-nav d-flex flex-row">
                    <Link className="nav-item" to="/about">About</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;


