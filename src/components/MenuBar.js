import React, { useContext, useState } from 'react'
import {Header, Image, Menu, MenuItem, Message, Segment, Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { AuthContext } from "../context/auth";

function MenuBar(){
    const { user, logout } = useContext(AuthContext)
    const pathname = window.location.pathname;

    const path = pathname === '/' ? 'home' : pathname.substring(1);
    const [activeItem, setActiveItem] = useState(path);
    const handleItemClick = (e, { name }) => setActiveItem(name);

    const menuBar = user ? (
        <Menu pointing secondary size={"massive"} color={"pink"}>
            <Menu.Item
                name={user.username}
                active
                as={Link}
                to={"/"}
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='logout'
                    onClick={logout}
                />
            </Menu.Menu>
        </Menu>

    ) : (
        <Menu pointing secondary size={"massive"} color={"teal"}>
            <Menu stackable>
                <Menu.Item>
                    <img alt={'homeLogo'} src={'https://www.clipartmax.com/png/middle/224-2246413_home-icon-pink-png.png'} />
                </Menu.Item>
            </Menu>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to={"/"}
            />
            <Menu.Menu position='right'>
                <Menu stackable>
                    <MenuItem>
                    <img alt={'userLogo'} src={'https://www.clipartmax.com/png/middle/112-1128911_user-icon-pink.png'} />
                     </MenuItem>
                </Menu>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to={"/login"}
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={Link}
                    to={"/register"}
                />
            </Menu.Menu>
        </Menu>
    )

    return menuBar;
}
export default MenuBar;