import React, { Component } from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";



// Note: ContextMenuTrigger and ContextMenu id same
// More exmple :> https://github.com/vkbansal/react-contextmenu/tree/master/examples
// read Doc:>https://github.com/vkbansal/react-contextmenu


// use CSS
import style from './RightClick.module.scss'

export default class RightClick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }


    handleClick = (e, data) => {
        alert(` menu item click ${ data.item}` )
    }

    render() {

        return (
            <div className={style.bg}>
                <ContextMenuTrigger id="add_same_id">
                    <div className={style.hight}>Right Click for Open Menu</div>
                </ContextMenuTrigger>
                <ContextMenu className={style.menu} id="add_same_id">

                    
                        
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Post" }}
                            className={style.menuItem}
                            >
                          Home
                        </MenuItem>
                        
                    
                   
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Post" }}
                            className={style.menuItem}
                        >
                            Post
                        </MenuItem>
                   
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Create Post" }}
                            className={style.menuItem}
                        >
                            Create Post
                        </MenuItem>
                  
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Categories" }}
                            className={style.menuItem}
                        >
                            All Post
                        </MenuItem>

                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Stats" }}
                            className={style.menuItem}
                        >
                            Stats
                        </MenuItem>
                 
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Signup" }}
                            className={style.menuItem}
                        >
                            Chat
                        </MenuItem>

                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Settings" }}
                            className={style.menuItem}
                        >
                            Settings
                        </MenuItem>
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Profile" }}
                            className={style.menuItem}
                        >
                            Profile
                        </MenuItem>
                    
                        <MenuItem
                            onClick={this.handleClick}
                            data={{ item: "Logout" }}
                            className={style.menuItem}
                        >
                            Logout
                        </MenuItem>
                  

                </ContextMenu>
            </div>
        )
    }
}

