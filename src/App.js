import React, { Component } from 'react'
import './App.css';
import Nav from './Nav.js'
import Article from './Article'
import FadeIn from 'react-fade-in';
require('datejs')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      tag: "all",
      didMount: false
    }

    this.handler = this.handler.bind(this)
  }

  handler(toSet) {
    this.setState({tag: toSet})
  }

  componentDidMount() {
    fetch('https://s3.amazonaws.com/lpolepeddi/projects/gcp-fe/data.json').then(results => {
      return results.json();
    }).then(data=>{
      let pulled = data;
      this.setState({data: pulled});
      this.setState({didMount: true})
      // console.log(this.state.data);
    })
  }

  render() {
    var gridStyle = {
      float: 'none',
      margin: '0 auto'
    }
    return (
      <div>
        <Nav filterSet={this.handler}/>
        <div className="container-fluid">
          <div id = "mainCont">
            <div className = "row no-gutters">
                {this.state.data.filter(article => this.state.tag === "all" || article.tag === this.state.tag).map(filtered =>(
                  <div className={`griditem col-sm-12 col-lg-6 col-xl-3`}>
                    <Article imgurl={filtered.thumbnail} date={Date.parse(filtered.date.split('T')[0]).toString("M/dd/yyyy")} description={filtered.description} title={filtered.title} />  
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
