import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import FlexMonster from './components/FlexMonster';
import PivotTable from './components/PivotTable';
// import Home from './components/home';


class App extends React.Component {
 
  render() {
      return (
        <div className="App">
         
          <div className="App-intro">
            <BrowserRouter>
              <Switch>
                {/* <Route exact path="/"  component={Home} /> */}
                <Route exact path="/" component={FlexMonster} />
                <Route path="/pivottable" component={PivotTable} />
              </Switch>
            </BrowserRouter>
          </div>
          
        </div>
      );
  }
}

export default App;
