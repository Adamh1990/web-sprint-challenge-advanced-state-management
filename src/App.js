import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import { FETCH_START } from './actions/index.js'
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <FETCH_START/>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.


// import React, { Component } from "react";

// import AddForm from './components/AddForm';
// import SmurfDisplay from './components/SmurfDisplay';
// import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <nav className="navbar navbar-dark bg-primary">
//           <a className="navbar-brand">Smurf Village Database</a>
//         </nav>
//         <main>
//           <SmurfDisplay />
//           <AddForm />
//         </main>
//       </div>
//     );
//   }
// }

// export default App;
