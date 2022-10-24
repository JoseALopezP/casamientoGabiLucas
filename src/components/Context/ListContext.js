import { createContext, useState } from "react";

export const ListContext = createContext({});

const {Provider} = ListContext;

export const ListProvider = ({defaultValue = [], children}) => {
    const [list, setList] = useState(defaultValue);
    
<<<<<<< HEAD

    const context = {

=======
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

    const getListLength = () => {
        return list.length()
    }

    const addGuest = async (data) => {
        try {
            await setDoc(doc(db, "confirmationList"), data);
        } catch (error) {
            console.log(error)
        }
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
        addGuest,
        getListLength,
        list
>>>>>>> 27d13c5387bfc93d95c9020e270cc4ca5ddae764
    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}