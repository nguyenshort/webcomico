import { defineStore } from 'pinia'
import {GetMe, GetMe_me} from "~/apollo/comico/queries/__generated__/GetMe";
import {useNuxtApp} from "#imports";
import {GET_ME} from "~/apollo/comico/queries/user";
import {ApolloClient} from "@apollo/client/core";


interface State extends Record<string, any>{
    uid?: string,
    token?: string
    user?: GetMe_me
}

export const useUserStore = defineStore('user', {
    state: (): State => ({
        uid: '',
        token: '',
        user: undefined
    }),

    actions: {

        setUID(uuid: string) {
            this.uid = uuid
        },

        setToken(token: string) {
            this.token = token
        },

        async onLogin() {

            const { $apollo } = useNuxtApp()

            try {

                const { data } = await ($apollo.apolloClient as ApolloClient<any>).query<GetMe>({
                    query: GET_ME
                })

                if(data.me) {
                    this.user = data.me
                } else {
                    this.onLogout()
                }

            } catch (e) {}
        },

        onLogout() {
            this.uid = ''
            this.token = ''
            this.user = undefined
        }

    }
})
