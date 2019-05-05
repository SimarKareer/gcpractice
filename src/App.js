import React, { Component } from 'react'
import './App.css';
import Nav from './Nav.js'
import Article from './Article'
import StackGrid from "react-stack-grid";
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
    })
  }

  render() {
    return (
      <div>
        <Nav filterSet={this.handler}/>
        <StackGrid columnWidth={300} gutterWidth={50}>
          {this.state.data.filter(article => this.state.tag === "all" || article.tag === this.state.tag).map(filtered =>(
              <Article imgurl={filtered.thumbnail} date={Date.parse(filtered.date.split('T')[0]).toString("M/dd/yyyy")} description={filtered.description} title={filtered.title} />  
          ))}
        </StackGrid>
        
      </div>
    );
  }
}

export default App;
