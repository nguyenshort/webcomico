import { defineNuxtPlugin } from '#app'

import { getAuth } from 'firebase-admin/auth'
import firebaseApp from "~/config/firebase-admin";
import {useCookie, useRuntimeConfig} from "#imports";
import {useUserStore} from "~/store/user"

/**
 * Auth cơ bản ở đây
 * Token setup thủ công sẽ hết hạn sau 1 giờ = thời gian token firebase hết hạn
 */
export default defineNuxtPlugin(async () => {

    /**
     * `
     * const userStore = useUserStore()
     *
     *     const auth = getAuth(firebaseApp)
     *     const cookieOptions = useRuntimeConfig().public.firebaseAuthCookie
     *
     *     const cookie = useCookie(`${cookieOptions.name}-token`)
     *
     *     if (!cookie.value) {
     *        return
     *     }
     *
     *     try {
     *         const decoded = await auth.verifyIdToken(cookie.value)
     *
     *         if(decoded) {
     *             userStore.setUserFirebase(decoded.uid)
     *         }
     *     } catch (e) {
     *        //
     *     }
     * `
     */

})
