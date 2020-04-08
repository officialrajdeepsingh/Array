import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

import Jumbotron from 'react-bootstrap/Jumbotron';



//scss
import style from './DefaultStatics.module.scss';

export default class RadarChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        Radar:{
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
              {
                label: 'Design dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: 'Coding dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 101]
              },
              {
                label: 'Reset dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'blueviolet',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'pink',
                data: [41, 58, 49, 79, 96, 69, 82]
              },
            ]
        }             
      }
}




    render() {
        return (
          <>
            <Jumbotron className={style.statsBg}>
            
                  <Radar 
                    data={this.state.Radar}
                    options={{
                      title:{
                        display:true,
                        text: "Radar Stats",
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