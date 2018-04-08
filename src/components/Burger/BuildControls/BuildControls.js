import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Price: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map((control) => (
            <BuildControl
                label={control.label}
                key={control.label}
                add={() => props.addIngredient(control.type)}
                remove={() => props.removeIngredient(control.type)}
                disable={props.disable[control.type]}
            />
        ))}
        <button
            disabled={!props.purchasable}
            className={classes.OrderButton}
            onClick={props.order}
        >ORDER NOW</button>
    </div>
);

export default buildControls;