import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => setUser(loggedInUser));
        return () => unsubscribe();
    }, [])

    // 1. Sign up using email and password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2. Email Verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // 3. Update UserName and Photo URL
    const updateUser = (name, photo_URL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo_URL,
        })
    }

    const authInfo = { user, signUp, verifyEmail, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;