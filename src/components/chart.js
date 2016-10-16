import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <Sparklines style={{height: '120px', width: '120px'}} data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
  )
};

export default Chart;
