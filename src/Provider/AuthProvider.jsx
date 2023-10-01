import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../Config/firebase.config';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    //login with google
    const googleLOgin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
   
// sign up user
 const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 //sign in user
 const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 // sign out user

 const logOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
 }


 // update user profile
 const handleUpdateProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}


// using observer
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
       setLoading(false)
     })
     return ()=>{
       unSubscribe()
     }
   },[])

    const authInfo = {
        googleLOgin,
        createUser,
        signInUser,
        user,
        logOutUser,
        loading,
        handleUpdateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;