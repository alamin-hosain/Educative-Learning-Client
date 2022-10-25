import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {

    // 1. Sign up using email and password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2. Email Verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const authInfo = { signUp, verifyEmail }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;