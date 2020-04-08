import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import Jumbotron from 'react-bootstrap/Jumbotron'

//scss
import style from './DefaultStatics.module.scss';

export default class DoughnutChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        Doughnut:{
            labels: [
              'Red',
              'Green',
              'Yellow'
            ],
            datasets: [{
              data: [300, 50, 100],
              backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
              ],
              hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
              ]
            }]
          }
    }
}

    render() {
        return (
          <>
           <Jumbotron className={style.statsBg} >
                   <Doughnut 
                    data={this.state.Doughnut}
                    height={500}
                    options={{
                      maintainAspectRatio: false,
                       title:{
                        display:true,
                        text: "Doughnut Stats",
                        fontSize:18, 
                        fontColor:'#23273a',
                       
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
