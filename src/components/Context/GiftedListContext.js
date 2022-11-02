import React, { createContext, useState} from "react";
import { collection, getDocs, doc, addDoc, deleteDoc } from 'firebase/firestore';
import db from '../services/firebase';
export const GiftedListContext = createContext({});

const {Provider} = GiftedListContext;

export const GiftedListProvider = ({defaultValue = [], children}) => {
    const [giftedList, setGiftedList] = useState(defaultValue);
    const collectionReference = collection(db, "giftsList");


    const updateGiftedList = async() => {
        try{
            const document = collection(db, 'giftsList')
            const col = await getDocs(document)
            console.log('col.docs', col.docs)
            const result = await col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setGiftedList(result)
        }catch(error){
            console.log(error)
        }
    }
    const addGifted = async(data) => {
        try {
            await addDoc(collectionReference, data);
        } catch (error) {
            console.log(error)
        }
    }
    const removeGifted = async(id) => {
        try {
            await deleteDoc(doc(db, 'giftsList', id))
            await updateGiftedList();
        } catch (error) {
            console.log(error);
        }
    }
    const context = {
        addGifted,
        updateGiftedList,
        removeGifted,
        giftedList,
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}