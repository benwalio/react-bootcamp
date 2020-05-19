import { useState } from 'react';

function useToggle(initVal = false) {
    const [state, setstate] = useState(initVal);
    const toggle = () => {
        setstate(!state);
    }
    return [state, toggle];
}

export default useToggle;