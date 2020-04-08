import React, { Component } from 'react'
import {Bar } from 'react-chartjs-2';
import Jumbotron from 'react-bootstrap/Jumbotron'

//scss
import style from './DefaultStatics.module.scss'

export default class DefaultStatics extends Component {

  constructor(props){
    super(props);
    this.state = {
        barData:{
          labels: [0,10,20,30,40,50],
            datasets: [
              { 
                label: 'Today',
                backgroundColor: '#4C5270',
                hoverBackgroundColor: '#E8A3FF',
                data: [40,35,28,19,20,46]
              },
              { 
                label: 'Yesterday',
                backgroundColor: '#7FD5F9',
                hoverBackgroundColor: '#C26DEF',
                data: [30,35,22,19,25,36]
              },
              { 
                label: 'Month',
                backgroundColor: '#F652A0',
                hoverBackgroundColor: '#10316b',
                data: [46,32,28,15,20,46]
              },
            ]
        }
    }
  }





    render() {
        return (
            <Jumbotron className={style.statsDefaultbg}>
                        
                  <Bar 
                    data={this.state.barData}
                    height={350}
                    options={{
                      maintainAspectRatio: false,
                      title:{
                        display:true,
                        text: "Today Stats",
                        fontSize:22,
                        fontColor:'grey',
                        position:'top',
                      },
                     
                      
                      legend:{
                        display:true,
                        position:'top',
                        padding: 40,
                        align	:'end',
                        width:10,
                        height:10,
                        border:'none',
                        labels: {
                                 fontColor:'#23273a',
                                 padding:30,
                                 fontSize:16,
                              }
                      }
                    }}
                  />
            
            </Jumbotron >
        )
    }
}
