import React, { Component } from 'react';

import Doughnut from './DoughnutChart'
import Bar from './BarChart'
import Line from './LineChart'
import Radar from './RadarChart'
import Polar from './PolarChat'


//scss
import style from './DefaultStatics.module.scss';

export default class Stats extends Component {

    render() {
        return (
          <>
              <h2 className={style.tittle}>  Charts</h2>
                <Line/>
                <Bar/>
                <Doughnut/>
                <Radar />
                <Polar />
                <div className={style.blockStata}>
                    <h2 className={style.recommendTittle }> <span className={style.firstSpan}> Note : </span> <span className={style.secondSpan}> We Recommended you to Only Bar and Line Chart </span>  </h2>
                </div>
          </>
        )
    }
    
}
