import { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initializeAuthentication from "./../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpUsingEmailPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateDisplayName(name);
                setError("");
            })
            .catch((error) => {
                setError(error?.message);
            });
    };

    const addDisplayName = (name) => {
        console.log(name, typeof name);
        setDisplayName(name);
    };

    const updateDisplayName = (name) => {
        updateProfile(auth.currentUser, { displayName: name }).then(
            (result) => {}
        );
    };

    const loginUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => setError(error.message));
    };

    const loginUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => setError(error?.message));
    };

    const logOut = () => {
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .catch((error) => setError(error?.message));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
        });
    }, []);

    return {
        user,
        error,
        displayName,
        signUpUsingEmailPassword,
        loginUsingEmailPassword,
        loginUsingGoogle,
        logOut,
    };
};

export default useFirebase;
