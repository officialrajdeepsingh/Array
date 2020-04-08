import React, { Component } from 'react'

import SettingForm from './SettingForm';

// Bootstrap Components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//scss
import style from './DefaultSettings.module.scss';




export default class DefaultSettings extends Component {
    render() {
        return (


                <Row className={style.rowBox}>
                    <Col sm={12} xl={4} xs={12} md={4} lg={4} className={style.bgWhite} >
                        <div className={style.bgImage}></div>
                        <h3 className={style.headTitle}> James Smith</h3>
                        <h3 className={style.userName}> @jamessmith</h3>

                        <div className={style.icon}>
                            <svg  className={style.facebookIcon} width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M4.04263 13.8497V7.04908H5.54446L5.74349 4.70554H4.04263L4.04519 3.53254C4.04519 2.92133 4.09166 2.59379 4.79399 2.59379H5.73286V0.25H4.23083C2.42663 0.25 1.79159 1.38687 1.79159 3.29875V4.70579H0.666992V7.04933H1.79159V13.8497H4.04263Z" fill="#23273A"/>
                            </svg>

                           
                            <svg className={style.twitterIcon} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M4.7005 3.16016L4.7215 3.59266L4.37173 3.53971C3.0987 3.33671 1.98653 2.64816 1.04223 1.49183L0.580566 0.918081L0.461667 1.34179C0.209833 2.28629 0.370734 3.28375 0.895334 3.95458C1.17513 4.32533 1.11217 4.37829 0.629533 4.15762C0.461666 4.087 0.314767 4.03404 0.300767 4.06054C0.2518 4.12229 0.4197 4.92558 0.5526 5.24333C0.734467 5.6847 1.10517 6.11725 1.51087 6.3732L1.85363 6.57625L1.44793 6.58508C1.0562 6.58508 1.04223 6.59391 1.0842 6.77925C1.2241 7.35304 1.77667 7.96208 2.39223 8.22691L2.8259 8.41229L2.44817 8.69475C1.8886 9.10079 1.2311 9.33029 0.573566 9.34795C0.2588 9.35679 0 9.39208 0 9.41858C0 9.50683 0.853366 10.0012 1.35 10.1954C2.8399 10.7691 4.60957 10.522 5.93857 9.54216C6.88287 8.84479 7.82717 7.45895 8.26783 6.11725C8.50567 5.40225 8.7435 4.09583 8.7435 3.46912C8.7435 3.06304 8.76447 3.01008 9.1562 2.52462C9.387 2.24212 9.60387 1.93321 9.64583 1.84491C9.71577 1.67721 9.70877 1.67721 9.35203 1.82725C8.75747 2.09208 8.67353 2.05675 8.96733 1.65954C9.18417 1.37708 9.44297 0.865123 9.44297 0.715039C9.44297 0.688581 9.33803 0.732706 9.21913 0.812165C9.09323 0.900415 8.81343 1.03283 8.6036 1.11225L8.22587 1.26233L7.88313 0.97104C7.69427 0.812165 7.42847 0.635623 7.28857 0.582623C6.93183 0.459039 6.38623 0.476706 6.0645 0.617956C5.19013 1.01516 4.63753 2.03912 4.7005 3.16016Z" fill="#23273A"/>
                            </svg>


                            <svg className={style.youtubeIcon} width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.1108 2.41313C10.9881 1.82409 10.6266 1.36021 10.1677 1.2028C9.33589 0.916672 6.00033 0.916672 6.00033 0.916672C6.00033 0.916672 2.66476 0.916672 1.83293 1.2028C1.37396 1.36021 1.01249 1.82409 0.889825 2.41313C0.666992 3.48076 0.666992 5.70834 0.666992 5.70834C0.666992 5.70834 0.666992 7.93584 0.889825 9.00355C1.01249 9.59259 1.37396 10.0565 1.83293 10.214C2.66476 10.5 6.00033 10.5 6.00033 10.5C6.00033 10.5 9.33589 10.5 10.1677 10.214C10.6266 10.0565 10.9881 9.59259 11.1108 9.00355C11.3337 7.93584 11.3337 5.70834 11.3337 5.70834C11.3337 5.70834 11.3337 3.48076 11.1108 2.41313Z" fill="#23273A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 7.99999V3.83333L7.66667 5.91674L5 7.99999Z" fill="white"/>
                            </svg>

                        </div>
                       
                        <p className={style.paraGraf}> Lorem ipsum dolor sit amet consectetur sicing elit. repude laudant dolorem ipsum veritatis null voltatem illo ut harum minima similique.</p>
                   
                    </Col>
                    
                    <Col sm={12} xl={7} xs={12} md={7} lg={7} className={style.bgWhite} >
                     
                            <SettingForm />
                     
                    </Col>
                </Row>
            


        )

    }
}
