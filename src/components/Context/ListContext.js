import React, { createContext, useState} from "react";
import { collection, getDocs, doc, addDoc, deleteDoc } from 'firebase/firestore';
import db from '../services/firebase';
export const ListContext = createContext({});

const {Provider} = ListContext;

export const ListProvider = ({defaultValue = [], children}) => {
    const [list, setList] = useState(defaultValue);
    const [qDinner, setQDinner] = useState(defaultValue);
    const collectionReference = collection(db, "confirmationList");

    const clearList = () => {
        setList([]);
    }


    const updateList = async() => {
        try{
            const document = collection(db, 'confirmationList')
            const col = await getDocs(document)
            console.log('col.docs', col.docs)
            const result = await col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setList(result)
        }catch(error){
            console.log(error)
        }
    }

    const getListLength = () => {
        return list.length()
    }

    const addGuest = async(data) => {
        try {
            await addDoc(collectionReference, data);
            console.log(5);
        } catch (error) {
            console.log(error)
        }
    }

    const removeGuest = async (id) => {
        try{
            await deleteDoc(doc(db, 'confirmationList', id))
            updateList();
        }catch (error){
            console.log(error)
        }
    }

    const context = {
        clearList,
        updateList,
        removeGuest,
        addGuest,
        getListLength,
        list,
        setQDinner,
        qDinner
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}