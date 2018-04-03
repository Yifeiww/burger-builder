import React from 'react';
import Aux from '../containers/hoc/Aux';

const layout = (props) =>(
    <Aux>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main>
            <p>Burger</p>
            <p>BurgerBuilder</p>
        </main>
    </Aux>
);

export default layout;
