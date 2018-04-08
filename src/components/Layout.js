import React from 'react';
import Aux from '../containers/hoc/Aux';
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";

const layout = (props) =>(
    <Aux>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main>
            <BurgerBuilder/>
        </main>
    </Aux>
);

export default layout;
