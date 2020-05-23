import { useState, useEffect } from 'react'

export default function useLocalStorageState(key, initVal) {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(initVal));
        } catch (e) {
            val = initVal;
        }
        return val;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}