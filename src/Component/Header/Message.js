import React, { Component } from 'react';


import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'



// scss for array
import style from './Message.module.scss';

//image
import girl6 from "../Image/girl6.jpg";
import man5 from "../Image/man5.jpg";
import man4 from "../Image/man4.jpg";

export default class DefaultHaeder extends Component {

     render() {
         return (
            <>
                <Media  className='mt-2'>
                    <Image src={man5} className={style.notificatioImage} roundedCircle />
                        <Media.Body className='p-1'>
                            <h6 className={style.mediaCardheading}>Taylor</h6>
                            <p className={style.mediaCardtext}> Taylor Send Message for your read this  </p>
                        </Media.Body>
                </Media>
                                            
                <Media className='mt-2'>
                    <Image src={man4} className={style.notificatioImage} roundedCircle />
                        <Media.Body className='p-1'>
                        <h6 className={style.mediaCardheading}>Alex Iby</h6>
                        <p className={style.mediaCardtext}> Alex Iby Send Message for your read this  </p>
                        </Media.Body>
                </Media>
                
                <Media className='mt-2'>
                    <Image src={girl6} className={style.notificatioImage} roundedCircle />
                        <Media.Body className='p-1'>
                        <h6 className={style.mediaCardheading}>Jacey</h6>
                        <p className={style.mediaCardtext}> Jacey Send Message for your read this  </p>
                        </Media.Body>
                </Media>                                
            </>
        )
    }
}
