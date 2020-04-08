import React, { Component } from 'react';


// reactbootstrap component
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'


// scss for array
import style from './Gmail.module.scss';


// Image
import girl5 from "../Image/girl5.jpg";
import girl7 from "../Image/girl7.jpg";
import man3 from "../Image/man3.jpg";


export default class DefaultHaeder extends Component {


    render() {
      


        return (
            <>
                 <Media  className='mt-2'>
                    <Image src={girl5} className={style.notificatioImage} roundedCircle />
                        <Media.Body className='p-1'>
                            <h6 className={style.mediaCardheading}>Selle Valiant</h6>
                            <p className={style.mediaCardtext}> Selle Valiant Send Gmail for your read this  </p>
                        </Media.Body>
                </Media>


                <Media className='mt-2'>
                    <Image src={man3} className={style.notificatioImage} roundedCircle />
                        <Media.Body className='p-1'>
                        <h6 className={style.mediaCardheading}>Joseph Gonzalez</h6>
                        <p className={style.mediaCardtext} > Joseph Gonzalez Send Gmail for your read this  </p>
                        </Media.Body>
                </Media>
                
                <Media className='mt-2'>
                    <Image src={girl7} className={style.notificatioImage} roundedCircle />
                        <Media.Body className='p-1'>
                        <h6 className={style.mediaCardheading}>Thom Holmes</h6>
                        <p className={style.mediaCardtext}> Thom Holmes Send Gmail for your read this  </p>
                        </Media.Body>
                </Media>                                
            </>
        )
    }
}
