import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            if (currentUser) {
                axios.post('https://sound-wave-server.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
        
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;