import React from 'react';
import './Nav.css';


class Nav extends React.Component {
    render() {
        return(
            <div id="nav">
                <hr></hr>
                <div className="nav-items">
                    <ul class="list-inline">
                        <li class="list-inline-item">Home</li>
                        <li class="list-inline-item">Products</li>
                        <li class="list-inline-item">About Us</li>
                        <li class="list-inline-item">Contact</li>
                    </ul>
                </div>
                <hr></hr>
            </div>
        );
    }
}


export default Nav;