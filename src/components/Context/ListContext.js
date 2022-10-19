import { getDocs } from "firebase/firestore";
import React, { createContext, useState, useEffect } from "react";
import db from '../services/firebase';
import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";
export const ListContext = createContext({});

const {Provider} = ListContext;

export const ListProvider = ({defaultValue = [], children}) => {
    const [list, setList] = useState(defaultValue);
    
    const clearList = () => {
        setList([]);
    }
    const updateList = async() => {
        try{
            const document = collection(db, 'Products')
            const col = await getDocs(document)
            console.log('col.docs', col.docs)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setList(result)
        }catch(error){
            console.log(error)
        }
    } 
    useEffect(() =>{
        updateList()
    }, [])

    const addGuest = async (data) => {
        
    }

    const removeGuest = async (id) => {
        try{
            await deleteDoc(doc(db, 'confirmationList', id))
        }catch (error){
            console.log(error)
        }
    }

    const context = {
        clearList,
        updateList,
        removeGuest,
        list
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}