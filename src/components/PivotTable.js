import React from 'react';
// import './App.css';
import tips from './tips';
import {
  Link
} from 'react-router-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly)


// const data = [ ['name', 'gender', 'house', 'age'],
// ['Jon', 'm', 'Stark', 14],
// ['Arya', 'f', 'Stark', 10],
// ['Cersei', 'f', 'Baratheon', 38],
// ['Tywin', 'm', 'Lannister', 67],
// ['Tyrion', 'm', 'Lannister', 34],
// ['Joffrey', 'm', 'Baratheon', 18],
// ['Bran', 'm', 'Stark', 8],
// ['Jaime', 'm', 'Lannister', 32],
// ['Sansa', 'f', 'Stark', 12]];

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);


class PivotTable extends React.Component {
  constructor(props) {
      super(props);
      this.state = props;
  }

  render() {
      return (
        <div className="pivot-table">
          <Link to="/">Move to Flexmonster Demo</Link>
          <PivotTableUI
              data={tips}
              onChange={s => this.setState(s)}
              renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
              {...this.state}
          />
        </div>
      );
  }
}

export default PivotTable;
