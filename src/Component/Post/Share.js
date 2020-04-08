import React, { Component } from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    WorkplaceShareButton,
    WorkplaceIcon,
    LineShareButton,
    LineIcon
 
} from "react-share";




// scss for array
import style from './Share.module.scss';




export default class Share extends Component {


    render() {
        const shareUrl = 'https://rajdeepsingh.dev/';
        const title = 'Build With Array';
        return (
            <div  className={style.JumbotronIhhans}>
                
            <span onClick={this.props.checkShow} className={style.icon}>&#9587;</span>
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className={style.shareButton}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className={style.shareButton}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className={style.shareButton}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className={style.shareButton}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
        
       
               <LinkedinShareButton url={shareUrl} 
                    className={style.shareButton}
                    >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
     
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className={style.shareButton}
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>

                <WorkplaceShareButton
                    url={shareUrl}
                    quote={title}
                    className={style.shareButton}
                >
                    <WorkplaceIcon size={32} round />
                </WorkplaceShareButton>
     
                <LineShareButton
                    url={shareUrl}
                    title={title}
                    className={style.shareButton}
                >
                    <LineIcon size={32} round />
                </LineShareButton>
        </div>
        )
    }
}

