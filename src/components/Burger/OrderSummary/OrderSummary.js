import React from 'react';
import Aux from '../../../containers/hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => (
            <li key={igKey}><span style={{ textTransform: 'capitalize'}}>{igKey} </span>: $ {props.ingredients[igKey]}</li>
        ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
            <Button clicked={props.cancelPurchasing} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continuePurchasing} btnType='Success'>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;