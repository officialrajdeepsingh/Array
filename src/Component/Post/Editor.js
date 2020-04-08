import React, { Component } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './EditorTool'

//bootstrap component
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';


//scss
import style from "./Editor.module.scss";


//data for post
import data from './postData.json';


export default class DefaultPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postItem: []
        }
    }

    submitPost() {
        alert(" Check Data In Developer Tool");

    }

    componentDidMount() {
        console.log('Article data: ', this.editorInstance)
      }


    render() {



        return (
            
                <div className={style.tableBg}>
                <LinkContainer to='/post'> 
                      <h1 className={style.iconBack}> &#8592; </h1>
                </LinkContainer>
                    <div id={style.CustomHeight} className=' m-2 mb-3 '>
                        {
                            Object.entries(data[1].blocks).map((data, val) => {
                                return <EditorJs key={val} tools={EDITOR_JS_TOOLS}
                                    instanceRef={instance => this.editorInstance = instance}
                                    holder="custom"
                                    data={
                                        {
                                            time: 1556098174501,
                                            blocks: [
                                                {
                                                    type: data[1].type,
                                                    data: {
                                                        text: data[1].data.text,
                                                        level: data[1].data.level,
                                                        style: data[1].data.style,
                                                        items: data[1].data.items,
                                                        file: data[1].data.file,
                                                        caption: data[1].data.caption,
                                                        withBorder: data[1].data.withBorder,
                                                        stretched: data[1].data.stretched,
                                                        withBackground: data[1].data.withBackground,
                                                    }
                                                }
                                            ]
                                        }
                                    }>
                                    <div id="custom" className={style.custom} ></div>
                                </EditorJs>
                            })
                        }

                    </div>
                    <Button onClick={this.submitPost} className={style.editorButton} >Submit</Button>
                </div>
        )
    }
}
