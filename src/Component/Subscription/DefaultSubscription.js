import React, { Component } from 'react';
import YearlySubscription from './YearlySubscription';
import MontlySubscription from './MontlySubscription';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



//scss here
import style from './Subscription.module.scss'

export default class MontlySub extends Component {

    constructor(props){
        super(props);
            this.state={
              YearlySubscription:false
            }
        
    }
    MonntlySubscription=(e)=>{
        
        this.setState({
            YearlySubscription:false
        })
    }
    YearlySubscription=(e)=>{
        
       this.setState({
            YearlySubscription:true
        })
    }
    render() {
        return (

            <Container fluid={true} className={style.Bg}  >
                <Row className='p-4'> 
              
                    <Col sm={6} xl={6} xs={6} md={6} lg={6} >
                            
                                <h2 className={style.headTitle}>Subscription</h2>
                       
                    </Col>
                    <Col sm={6} xl={6} xs={6} md={6} lg={6}  >

                            <div className='d-flex flex-column flex-md-row justify-content-around m-auto text w-75'>
                              
                                    <Button href='#' onClick={this.MonntlySubscription} className={ (this.state.YearlySubscription)? style.liteTitle:style.darkTitle  }> Montly </Button>
                             
                                    <Button href='#' onClick={this.YearlySubscription} className={(this.state.YearlySubscription)? style.darkTitle:style.liteTitle }> Yearly </Button>
                             
                            </div>

                    </Col>

                    {
                        (this.state.YearlySubscription)? <YearlySubscription/> : <MontlySubscription/> 
                    }

                </Row>
            </Container>
        )
    }
}
