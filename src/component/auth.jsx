import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 查看登入資訊
    console.log(auth?.currentUser?.email);

    // Email登入
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    // Google登入
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    // 登出
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <input type="text" placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}> Sign In </button>
            <button onClick={signInWithGoogle}> Sing In With Google </button>
            <button onClick={logout}> Logout </button>
        </div>
    )
}

