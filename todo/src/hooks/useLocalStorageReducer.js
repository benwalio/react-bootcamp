import { useReducer, useEffect } from 'react'

export default function useLocalStorageState(key, initVal, reducer) {
    const [state, dispatch] = useReducer(reducer, initVal, 
    
    () => {
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

    return [state, dispatch]
}