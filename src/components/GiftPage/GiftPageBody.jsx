import React, {useContext, useEffect, useRef} from 'react';
import { GListContext } from '../Context/GiftListContext';
import GiftCard from './GiftCard';
import SendGift from './SendGift';

const GiftPageBody = () => {
    const {gList, updateGList} = useContext(GListContext);
    const ref = useRef(null);
    useEffect(() =>{
        updateGList()
    }, [])
    const itemType = '';
    const clicked = () =>{
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className='giftlListBlock'>
            <div className="overflow-auto">
                {gList.map( (itm) => {
                    return(
                        itm.status && <GiftCard item={itm} clicked={clicked}/>
                    );
                })}
            </div>
            <SendGift type={itemType}/>
            <div ref={ref}></div>
        </div>
    );
}

export default GiftPageBody;
