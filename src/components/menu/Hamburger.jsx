import React, { useContext } from 'react';
import { MenuContext } from './context';
import Burger from 'hamburger-react';

const Hamburger = () => {

    const { state, toggle } = useContext(MenuContext)

    return (
        <div>
            <pre>{JSON.stringify(state)}</pre>
            <Burger
                toggled={state.isOpen}
                toggle={toggle}
                onToggle={toggle} />
        </div>
    )


}

export default Hamburger;