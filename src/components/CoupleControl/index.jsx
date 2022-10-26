import React from 'react';
import ConfirmedList from './ConfirmedList';
import Links from './links';
import './index.css';
import GiftedList from './GiftedList';
import GiftList from './GiftList';
import AddGifts from './AddGifts';

const CoupleControl = () => {
    return (
        <>
            <Links/>
            <ConfirmedList/>
            <GiftedList/>
            <GiftList/>
            <AddGifts/>
        </>
    );
}

export default CoupleControl;
