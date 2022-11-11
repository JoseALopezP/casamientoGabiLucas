import React, { createContext, useState} from "react";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';
import db from '../services/firebase';
export const GListContext = createContext({});

const {Provider} = GListContext;

export const GListProvider = ({defaultValue = [], children}) => {
    const [gList, setGList] = useState(defaultValue);
    const [idSelected, setIdSelected] = useState('');
    const collectionReference = collection(db, "askedGifts");

    const updateGList = async() => {
        try{
            const document = collection(db, 'askedGifts')
            const col = await getDocs(document)
            const result = await col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setGList(result)
        }catch(error){
            console.log(error)
        }
    }

    const selectId = (id) =>{
        if(id === idSelected){
            setIdSelected('');
        }else{
            setIdSelected(id);
        }
    }
    const selectGift = async() => {
        const result = doc(db, "askedGifts", idSelected);
        await updateDoc(result, {
        status: false
        });
    }

    const addGift = async(data) => {
        try {
            await addDoc(collectionReference, data);
        } catch (error) {
            console.log(error)
        }
    }

    const removeGift = async (id) => {
        try{
            await deleteDoc(doc(db, 'askedGifts', id))
            await updateGList();
        }catch (error){
            console.log(error)
        }
    }
    const context = {
        addGift,
        updateGList,
        selectGift,
        gList,
        idSelected,
        selectId, 
        setIdSelected,
        removeGift
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}