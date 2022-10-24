import React, { createContext } from 'react';

const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;