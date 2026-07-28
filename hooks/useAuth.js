import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function useAuth() {
    const [user, setUser] = useState(null);

    // this will trigger evertime a user logs in or logs out
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log('Got user:', user);
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, []);

    return { user };
}