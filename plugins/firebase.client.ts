// plugins/firebase.client.ts
import { defineNuxtPlugin } from '#app';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import {getAnalytics} from "firebase/analytics";
import {useUserStore} from "~/store/user";

export default defineNuxtPlugin((nuxtApp) => {

    const userStore = useUserStore()

    const firebaseConfig = {
        apiKey: "AIzaSyAkdiTiwBaL2n62wnSOKY91SwjKd1ROxh0",
        authDomain: "fan-e73a4.firebaseapp.com",
        databaseURL: "https://fan-e73a4-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fan-e73a4",
        storageBucket: "fan-e73a4.appspot.com",
        messagingSenderId: "39917336518",
        appId: "1:39917336518:web:9654ab85399dccbf2964c7",
        measurementId: "G-R0EHRWSZ20"
    }

    const firebaseApp = initializeApp(firebaseConfig)

    const firebaseAnalytics = getAnalytics(firebaseApp)

    const firebaseAuth = getAuth(firebaseApp)

    nuxtApp.hooks.hook('app:mounted', async () => {
        /**
         * Lắng nghe token thay đổi
         */
        firebaseAuth.onIdTokenChanged(async (user) => {
            console.log('Auth change...')
            if (user) {
                const token = await user.getIdToken()
                // Gi tooken
                await setServerSession(token)

                // setup store
                userStore.setUID(user.uid)
                userStore.setToken(token)

                await userStore.onLogin()
            }
            else {
                await setServerSession('')
                userStore.onLogout()
            }
        })

    })

    return {
        provide: {
            firebaseApp,
            firebaseAnalytics,
            firebaseAuth
        }
    }

})

function setServerSession(token: string) {
    return $fetch('/api/session', {
        method: 'POST',
        body: {
            token,
        },
    })
}
