import React from 'react';
import './Nav.css';


class Nav extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selected: -1
        }
    }

    logger() {
        console.log("clicked");
    }

    render() {
        var selectedStyle = {
            className: 'list-inline-item selected'
        }
        var unselectedStyle = {
            className: 'list-inline-item'
        }
        return (
            <div id="nav">
                <img id="logo" onClick={() => {this.props.filterSet('all'); this.setState({selected: 0})}} src='https://s3.amazonaws.com/lpolepeddi/projects/gcp-fe/logo.jpg'></img>
                <hr></hr>
                <div className="nav-items">
                    <ul className="list-inline">
                        <li className={this.state.selected === 1 ? selectedStyle.className : unselectedStyle.className} onClick={() => {this.props.filterSet('research'); this.setState({selected: 1})}}>Research</li>
                        <li className={this.state.selected === 2 ? selectedStyle.className : unselectedStyle.className} onClick={() => {this.props.filterSet('education'); this.setState({selected: 2})}}>Education</li>
                        <li className={this.state.selected === 3 ? selectedStyle.className : unselectedStyle.className} onClick={() => {this.props.filterSet('communityBuilding'); this.setState({selected: 3})}}>Community building</li>
                        <li className={this.state.selected === 4 ? selectedStyle.className : unselectedStyle.className} onClick={() => {this.props.filterSet('publicEngagement'); this.setState({selected: 4})}}>Public engagement</li>
                    </ul>
                </div>
                <hr id="btmhr"></hr>
            </div>
        );
    }

    
}


export default Nav;