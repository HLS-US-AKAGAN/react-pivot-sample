import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster';
import {
  Link
} from 'react-router-dom';

const FlexMonster = () => {
    return(
    <div className="pivot-table">
          <Link to="/pivottable">Move to PivotTable.js Demo</Link>
          <FlexmonsterReact.Pivot toolbar={true}
            componentFolder="https://cdn.flexmonster.com/"
            width="100%"
            report="https://cdn.flexmonster.com/reports/report.json"
          />
        </div>);
}

export default FlexMonster;
