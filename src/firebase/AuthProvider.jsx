import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase.config';

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    //Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    //LogIn user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Log out user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //User sign in with Google
    const googleProvider = new GoogleAuthProvider()
    const registerWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
















    //Observer user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();
    }, []);


    console.log(user)

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        registerWithGoogle
    }

    return <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider