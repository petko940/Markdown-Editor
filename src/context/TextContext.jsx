import { createContext, useState } from "react";

const TextContext = createContext();

const TextProvider = ({ children }) => {
    const [content, setContent] = useState('test1');

    return (
        <TextContext.Provider value={{ content, setContent }}>
            {children}
        </TextContext.Provider>
    );
};

export { TextContext, TextProvider };
