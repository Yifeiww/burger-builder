import React from 'react';
import classes from './Modal.css';
import Aux from '../../../containers/hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => {
    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.clicked}/>
            <div
                className={classes.Modal}
                style={{
                    opacity: props.show? 1 : 0,
                    transform: props.show? 'translateY(0)' : 'translateY(-100vh)'
                }}
            >{props.children}</div>
        </Aux>);
};

export default modal;