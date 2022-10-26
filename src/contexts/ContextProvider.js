import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    // 1. Sign up using email and password
    const signUp = (email, password) => {
        setLoading(true);
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
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 5. Sing Up using Gmail
    const signUpUsingGamil = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // 6. Sign Up Using Github
    const signUpUsingGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // 7. Sign Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = { user, signUp, verifyEmail, updateUser, signIn, signUpUsingGamil, signUpUsingGithub, logOut, loading, setLoading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;