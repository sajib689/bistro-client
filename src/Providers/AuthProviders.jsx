import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../Firebase/Firebase.config';
import axios from "axios";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    useEffect( () => {
     const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // get token from the server
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email: currentUser.email})
            .then( data => {
                console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
            })
            } else {
                localStorage.removeItem('access-token')

            }
            
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSign,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;