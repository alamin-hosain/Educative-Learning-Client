import React, { createContext } from 'react';

const AuthContext = createContext();

const ContextProvider = ({ children }) => {

    const authInfo = { name: 'rahim' }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;