import React from "react";
import { debounce } from "lodash";
import { toast } from "react-toastify";

const Debounce2 = () => {
    const debouncedHandleSearch = debounce((event) => {
        if (!event.target.value) {
            return;
        }
        toast('Search request has been sent');
    }, 500);

    const handleSearch = (event) => {
        if (!event.target.value) {
            return;
        }
        toast('Search request has been sent');
    };

    return (
        <>
        <h2>Debounce search</h2>
            <input
                id="debounced-search-term"
                placeholder="Search"
                onChange={debouncedHandleSearch}
            />
            <h2>Simple search</h2>
            <input
                id="search-term"
                placeholder="Search"
                onChange={handleSearch}
            />
        </>
    );
};

export default Debounce2;
