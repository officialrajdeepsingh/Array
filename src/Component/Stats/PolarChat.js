import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';

import Jumbotron from 'react-bootstrap/Jumbotron';



//scss
import style from './DefaultStatics.module.scss';

export default class PolarChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        Polar:{
            datasets: [{
                data: [
                  11,
                  16,
                  7,
                  3,
                  14
                ],
                backgroundColor: [
                  '#FF6384',
                  '#4BC0C0',
                  '#FFCE56',
                  '#E7E9ED',
                  '#36A2EB'
                ],
                label: 'Polar Chart' // for legend
              }],
              labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
              ]
        }             
      }
}




    render() {
        return (
          <>
            <Jumbotron className={style.statsBg}>
            
                  <Polar 
                    data={this.state.Polar}
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