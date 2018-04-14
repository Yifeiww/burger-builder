import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolBar = (props) => {
    return (
        <div className={classes.ToolBar}>
            <DrawerToggle openDrawer={props.toggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav><NavigationItems/></nav>
        </div>
    );
};

export default toolBar;