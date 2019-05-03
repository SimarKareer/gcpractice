import React from 'react';
import './Nav.css';


class Nav extends React.Component {
    logger() {
        console.log("clicked");
    }
    render() {
        return(
            <div id="nav">
                <img id="logo" onClick={() => this.props.filterSet('all')} src='https://s3.amazonaws.com/lpolepeddi/projects/gcp-fe/logo.jpg'></img>
                <hr></hr>
                <div className="nav-items">
                    <ul className="list-inline">
                        <li tabindex='1' onClick={() => this.props.filterSet('research')} className="list-inline-item">Research</li>
                        <li tabindex='1' onClick={() => this.props.filterSet('education')} className="list-inline-item">Education</li>
                        <li tabindex='1' onClick={() => this.props.filterSet('communityBuilding')} className="list-inline-item">Community building</li>
                        <li tabindex='1' onClick={() => this.props.filterSet('publicEngagement')} className="list-inline-item">Public engagement</li>
                    </ul>
                </div>
                <hr></hr>
            </div>
        );
    }

    
}


export default Nav;