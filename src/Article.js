import React from 'react';
import './Article.css';


class Article extends React.Component {
    render() {
        return(
            <div id="blk">
                <img src={this.props.imgurl}></img>
                <h6>{this.props.date}</h6>
                <h5><b>{this.props.title}</b></h5>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Article;