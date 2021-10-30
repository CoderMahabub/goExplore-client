import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        //return for Redirect to the initial page after login
        return signInWithPopup(auth, googleProvider)

    }

    // Observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return unsubscribe;
    }, [])


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError("");
            });
    }

    //Returns
    return {
        googleSignIn,
        user,
        error,
        handleLogout,
        loading
    }
}
export default useFirebase;