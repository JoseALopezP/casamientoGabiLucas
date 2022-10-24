import { createContext, useState } from "react";

export const ListContext = createContext({});

const {Provider} = ListContext;

export const ListProvider = ({defaultValue = [], children}) => {
    const [list, setList] = useState(defaultValue);
    

    const context = {

    }
    return(
        <>
            <Provider value={context}>
                {children}
            </Provider>
        </>
    )
}