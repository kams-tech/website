import React from 'react';
import { useMenuContext } from './context';
import Burger from 'hamburger-react';

const Hamburger = () => {

    const { state, toggle } = useMenuContext()

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