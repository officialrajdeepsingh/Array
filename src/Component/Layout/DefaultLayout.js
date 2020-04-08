import React, { Component } from 'react';

// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Own Component 
import DefaultSidebar from '../Sidebar/DefaultSidebar';
import DefaultHeader from '../Header/DefaultHeader';
import DefaultDashboard from '../Dashboard/DefaultDashboard';
import DefaultPost from '../Post/DefaultPost';
import Card from '../Card/DefaultCard';
import Editor from '../Post/Editor';
import DefaultForm from '../Form/DefaultForm';
import Categories from '../Post/Categories';
import Button from '../Button/Buttons';
import RightClick from '../RightClick/RightClick';
import Colorpicker from '../Colorpicker/Colorpicker';
import Icon from '../Icon/Icon';
import DefaultSettings from '../Settings/DefaultSettings';
import DefaultSubscription from '../Subscription/DefaultSubscription';
import Stats from '../Stats/Stats';
import NotFound from '../404/DefaultNotFound';
import DefaultLogin from '../Login/DefaultLogin';
import DefaultSignup from '../Sign-up/DefaultSignup';


// all compoenent from react bootsrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// scss for array
import style from './DefaultLayout.module.scss';


export default class DefaultLayout extends Component {


    render() {

        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/signup" exact component={DefaultSignup} />
                        <Route path="/login" component={DefaultLogin} />
                        <>
                            <Container fluid={true}  >
                                <Row>
                                    <Col sm='none' xl={2} xs='none' md='none' lg={2} className={style.ourThink} >
                                       
                                            <DefaultSidebar />
                                    
                                    </Col>
                                    <Col sm={12} xl={10} xs={12} md={12} lg={10} className={style.containerBg} >
                                        <DefaultHeader />
                                        <Switch>
                                            <Route path="/" exact strict  component={DefaultDashboard} />
                                            <Route path="/post" component={DefaultPost} />
                                            <Route path="/editor" component={Editor} />
                                            <Route path="/card" component={Card} />
                                            <Route path="/categories" component={Categories} />
                                            <Route path="/button" component={Button} />
                                            <Route path="/rightclick" component={RightClick} />
                                            <Route path="/colorpicker" component={Colorpicker} />
                                            <Route path="/icon" component={Icon} />
                                            <Route path="/form" component={DefaultForm} />
                                            <Route path="/stats" component={Stats} />
                                            <Route path="/settings" component={DefaultSettings} />
                                            <Route path="/subscription" component={DefaultSubscription} />
                                            <Route path="/notfound" component={NotFound} />
                                            <Route path="*" component={NotFound} />
                                        </Switch>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    </Switch>
                </Router>
            </>
        )
    }
}
