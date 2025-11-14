import {createContext, useEffect, useState} from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);


	const createNewUser = (email, passwrod) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, passwrod);
	};

	const logout = () => {
		setLoading(true);
		return signOut(auth)
	}

	const updateUserProfile = (updatedData) => {
		return updateProfile(auth.currentUser, updatedData);
	}

	const userLogin = (email, password) => {
	setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const authInfo = {
		user,
		setUser,
		createNewUser,
		logout,
		userLogin,
		loading,
		updateUserProfile
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		})

		return () => {
			unsubscribe();
		}
	}, []);

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
