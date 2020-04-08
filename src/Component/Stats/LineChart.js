import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import Jumbotron from 'react-bootstrap/Jumbotron'

//scss
import style from './DefaultStatics.module.scss';

export default class LineChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        lineData:{
            labels: [0,1,2,3,],
            datasets:[            
                {
                  label: 'Today',
                  fill: false,
                  lineTension: 0.5,
                  backgroundColor: 'white',
                  borderColor: 'blueviolet',
                  pointBorderColor: 'pink',
                  pointBackgroundColor: 'white',
                  pointBorderWidth: 2,
                  pointHoverRadius: 10,
                  pointHoverBackgroundColor: 'white',
                  pointHoverBorderColor: 'black',
                  pointHoverBorderWidth: 5,
                  pointRadius:4,
                  pointHitRadius: 2,
                  borderCapStyle:'round',
                  borderJoinStyle:'round',
                  data:[
                      10,35,21,30
                    ]
                },
                {
                  label: 'Yestraday',
                  fill: false,
                  lineTension: 0.5,
                  backgroundColor: 'white',
                  borderColor: 'pink',
                  pointBorderColor: 'blueviolet',
                  pointBackgroundColor: 'white',
                  pointBorderWidth: 2,
                  pointHoverRadius: 10,
                  pointHoverBackgroundColor: 'blueviolet',
                  pointHoverBorderColor: 'white',
                  pointHoverBorderWidth: 5,
                  pointRadius:4,
                  pointHitRadius: 2,
                  data:[
                       45, 25,40,20
                    ]
                },
                {
                  label: 'Month',
                  fill: false,
                  lineTension: 0.5,
                  backgroundColor: 'white',
                  borderColor: 'blue',
                  pointBorderColor: 'pink',
                  pointBackgroundColor: 'white',
                  pointBorderWidth: 2,
                  pointHoverRadius: 10,
                  pointHoverBackgroundColor: 'pink',
                  pointHoverBorderColor: 'white',
                  pointHoverBorderWidth: 5,
                  pointRadius:4,
                  pointHitRadius: 2,
                  data:[
                     20,45,15,40
                    ]
                    
                },
            ]
        }             
      }
}

    render() {
        return (
          <>
            <Jumbotron className={style.statsBg}>
            
                  <Line 
                    data={this.state.lineData}
                    options={{
                      title:{
                        display:true,
                        text: "Line  Stats",
                        fontSize:18,
                        position:'top',
                        fontColor:'#23273a',
                        padding: 20,
                      },
                     
                      
                      legend:{
                        display:true,
                        position:'top',
                        fontColor:'#23273a',
                        padding: 20,
                        align	:'end',
                      }
                    }}
                  />

            </Jumbotron >
          </>
        )
    }
    
}
