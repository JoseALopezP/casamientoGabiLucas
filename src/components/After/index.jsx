import React from 'react';
import Counter from '../Counter';
import Introduction from '../Introduction';
import GiftPage from '../GiftPage';

const After = () => {
    return (
        <>
            <Introduction/>
            <Counter time={1670643000000}/>
            <GiftPage/>
        </>
    );
}

export default After;
