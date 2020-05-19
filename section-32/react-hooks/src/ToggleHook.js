import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

function ToggleHook() {
    const [state, toggleState] = useToggle(true);
    const [iphone, toggleIphone] = useToggle(true);

    return (
        <div>
            <h1 onClick={() => toggleState(state)}>{state ? '🍎' : '🥩'}</h1>
            <h1 onClick={() => toggleIphone(iphone)}>{iphone ? '📱' : '🇨🇱'}</h1>
        </div>
    )
}

export default ToggleHook
