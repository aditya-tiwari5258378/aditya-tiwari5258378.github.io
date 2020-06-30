// import React,{Component} from 'react'
// import Table from './Table'



// class App extends Component {
//     render(){
//       return (
//         <div className="container">
//           <Table />
//         </div>
//       );
//     }
//   }

//   export default App



import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction.jsx'
import About from './components/about.jsx'
//import Projects from './components/projects.jsx'
import Timeline from './components/timeline.jsx'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
		<div id="colorlib-main">
			<Introduction></Introduction>
      
			<About></About>
			<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;