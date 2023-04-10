import React, { useRef, useState } from "react";

export default function SearchBox({ q }) {

    const [searchTerm, setSearchTerm] = useState(q)
    const inputRef = useRef(searchTerm)

    const handleKeyDown = (event) =>
        event.key === 'Enter' && setSearchTerm(inputRef.current.value);

    const handleClick = () =>
        setSearchTerm(inputRef.current.value);

    return (
        <div>
            <input 
                ref={inputRef} 
                onKeyDown={handleKeyDown} 
                type="search" 
                placeholder="search" />

            <input 
                onClick={handleClick} 
                type="button" 
                value="Submit" />
        </div>
    )
}