import React from 'react';
import logo from './logo.svg';
import './App.css';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

const data = [ ['name', 'gender', 'house', 'age'],
['Jon', 'm', 'Stark', 14],
['Arya', 'f', 'Stark', 10],
['Cersei', 'f', 'Baratheon', 38],
['Tywin', 'm', 'Lannister', 67],
['Tyrion', 'm', 'Lannister', 34],
['Joffrey', 'm', 'Baratheon', 18],
['Bran', 'm', 'Stark', 8],
['Jaime', 'm', 'Lannister', 32],
['Sansa', 'f', 'Stark', 12]];

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = props;
  }

  render() {
      return (
          <PivotTableUI
              data={data}
              onChange={s => this.setState(s)}
              {...this.state}
          />
      );
  }
}

export default App;
