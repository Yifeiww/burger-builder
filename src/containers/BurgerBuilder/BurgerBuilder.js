import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.7,
    meat: 1.0,
    cheese: 0.7,
    bacon: 0.8
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        price: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchasablity(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, igNum) => (sum + igNum));
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type] + 1;
        let updatedPrice = this.state.price;
        updatedPrice = updatedPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            price: updatedPrice
        });
        this.updatePurchasablity(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type] <= 0) {
            return;
        }
        updatedIngredients[type] = updatedIngredients[type] - 1;
        let updatedPrice = this.state.price;
        updatedPrice = updatedPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            price: updatedPrice
        });
        this.updatePurchasablity(updatedIngredients);
    };

    purchasingHandler = () => {
        this.setState({purchasing: true});
    };

    cancelPurchasingHandler = () => {
        this.setState({purchasing: false});
    };

    continueCheckout = () => {
        alert('You continued!');
    };

    render() {
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (

            <Aux>
                <Modal show={this.state.purchasing} clicked={this.cancelPurchasingHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelPurchasing={this.cancelPurchasingHandler}
                        continuePurchasing={this.continueCheckout}
                        price={this.state.price}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disable={disableInfo}
                    price={this.state.price}
                    purchasable={this.state.purchasable}
                    order={this.purchasingHandler}
                />
            </Aux>
        );

    }
}

export default BurgerBuilder;