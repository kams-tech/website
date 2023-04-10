import React, { useRef } from "react";
import { useSearchContext } from './context';

export default function SearchBox() {

    const { state, update } = useSearchContext();
    const inputRef = useRef(state.q)

    const handleKeyDown = (event) =>
        event.key === 'Enter' && update(inputRef.current.value);

    const handleSubmit = () =>
        update(inputRef.current.value);

    return (
        <div>
            <input 
                ref={inputRef}
                defaultValue={state.q}
                onKeyDown={handleKeyDown} 
                type="search" 
                placeholder="search" />

            <input 
                onClick={handleSubmit} 
                type="button" 
                value="Submit" />
        </div>
    )
}