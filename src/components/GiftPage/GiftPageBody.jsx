import React, {useContext, useEffect} from 'react';
import { GListContext } from '../Context/GiftListContext';
import GiftCard from './GiftCard';
import SendGift from './SendGift';

const GiftPageBody = () => {
    const {gList, updateGList} = useContext(GListContext);
    useEffect(() =>{
        updateGList()
    }, [])
    const itemType = '';
    return (
        <div className='giftlListBlock'>
            <div className="overflow-auto">
                {gList.map( (itm) => {
                    return(
                        itm.status && <GiftCard item={itm} key={itm.id}/>
                    );
                })}
            </div>
            <SendGift type={itemType}/>
        </div>
    );
}

export default GiftPageBody;
