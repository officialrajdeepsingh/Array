import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import Jumbotron from 'react-bootstrap/Jumbotron'

//scss
import style from './DefaultStatics.module.scss';

export default class BarChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        barData:{
          labels: [0,10,20,30,40,50],
            datasets: [
              { 
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [40,35,28,19,20,46]}
            ]
          }
      }
}

    render() {
        return (
          <>
            <Jumbotron className={style.statsBg} >
                  <Bar 
                    data={this.state.barData}
                    height={500}
                    options={{
                      maintainAspectRatio: false,
                      title:{
                        display:true,
                        text: "Bar Stats",
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
