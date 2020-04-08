
import React, { Component } from 'react';

import Message from './Message';
import Gmail from './Gmail';

//react-bootstrap copomponent
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


// scss for array
import style from './Notify.module.scss';

// Logo for Array
import notificationIcon from '../Image/notification.svg';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          notify: false,
          gmailShow: false,
         
        }
      }
    
      
    notifyHandler = () => {
        this.setState({
        notify: !this.state.notify
        })
    }
    gmailHandler = (event) => {
        event.preventDefault();
        this.setState({
          gmailShow: true
        })
      }
      messageHandler = (event) => {
        event.preventDefault();
        this.setState({
          gmailShow: false
        })
      }
      

      
    render() {
        return (
             <div className=' d-flex justify-content-between'>
                <Image src={notificationIcon} className={style.notifyIcon} onClick={this.notifyHandler} roundedCircle />
               
                <div className={this.state.notify ? style.notify : style.none} >
                    <div className="d-flex justify-content-between p-2">
                      <Button onClick={this.messageHandler} className={style.buttonNotification} type="submit">
                        Message
                      </Button>
                      <Button onClick={this.gmailHandler} className={style.buttonNotification} type="submit" >
                        Gmail
                      </Button>
                    </div>
                    <div className='p-2'> 

                      {
                        this.state.gmailShow ? <Gmail /> : <Message />
                      }

                    </div>
                </div>

              </div>
        )
    }
}
