import React, { Component } from 'react';
import Aux from '../../containers/hoc/Aux';
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import ToolBar from '../Navigation/ToolBar/ToolBar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    };

    toggleClickedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render() {
        return (
            <Aux>
                <ToolBar toggleClicked={this.toggleClickedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
                <main className={classes.Content}>
                    <BurgerBuilder/>
                </main>
            </Aux>);
    }
}

export default Layout;
