import React, { Component } from 'react';

// all compoenent from react bootsrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'


// scss
import style from './Buttons.module.scss';

// https://react-bootstrap.netlify.com/components/buttons/
// Read  more about the button on react-bootstrap

// https://getbootstrap.com/docs/4.4/components/buttons/
// Read  more about the button on getbootstrap


export default class DefaultButton extends Component {
    render() {
        return (
         
                <Container className={style.bg}>
                    <Button className={style.blue}>Submit</Button>
                    <Button className={style.indigo} >Submit</Button>
                    <Button className={style.purple} >Submit</Button>
                    <Button className={style.pink} >Submit</Button>
                    <Button className={style.red} >Submit</Button>
                    <Button className={style.orange} >Submit</Button>
                    <Button className={style.yellow} >Submit</Button>
                    <Button className={style.green} >Submit</Button>
                    <Button className={style.teal} >Submit</Button>
                    <Button className={style.gray} >Submit</Button>
                    

                    {/*  html for dropdown*/}

                    <div className='d-flex justify-content-around'>
                        <Dropdown>
                            <Dropdown.Toggle className={style.dropDownblue} id="dropdown-basic">
                                Click Here!
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Home</Dropdown.Item>
                                <Dropdown.Item >About</Dropdown.Item>
                                <Dropdown.Item >Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className={style.dropDownpurple} id="dropdown-basic">
                              Click to Me!
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Home</Dropdown.Item>
                                <Dropdown.Item >About</Dropdown.Item>
                                <Dropdown.Item >Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className={style.dropDownred} id="dropdown-basic">
                              Click Here!
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Home</Dropdown.Item>
                                <Dropdown.Item >About</Dropdown.Item>
                                <Dropdown.Item >Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className='d-flex mt-4 justify-content-around'>
                        <Dropdown>
                            <Dropdown.Toggle className={style.dropDownpink} id="dropdown-basic">
                                Click Me!
                                </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Home</Dropdown.Item>
                                <Dropdown.Item >About</Dropdown.Item>
                                <Dropdown.Item >Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className={style.dropDownpink} id="dropdown-basic">
                                   Click Me!
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Home</Dropdown.Item>
                                <Dropdown.Item >About</Dropdown.Item>
                                <Dropdown.Item >Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            
        )
    }
}
