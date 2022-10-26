import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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

    // 4. Sing In with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 5. Sing Up using Gmail
    const signUpUsingGamil = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // 6. Sign Up Using Github
    const signUpUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const authInfo = { user, signUp, verifyEmail, updateUser, signIn, signUpUsingGamil, signUpUsingGithub }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;