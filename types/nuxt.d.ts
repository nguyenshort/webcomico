import anime from "animejs"
import {FirebaseApp} from "@firebase/app"
import {Auth} from "@firebase/auth"
import {ApolloClient} from "@apollo/client/core";

type IApollo = {
    apolloClient: ApolloClient<any>
}

interface ICustomContext {
    $anime: (params: anime.AnimeParams) => anime.AnimeInstance
    $firebaseApp: FirebaseApp
    $firebaseAuth: Auth
    $apollo: IApollo
}

declare module '#app' {
    interface NuxtApp extends ICustomContext {}
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends ICustomContext {}
}

export { }
