import {
  ApolloClient,
  InMemoryCache,
  createHttpLink, ApolloLink,
} from '@apollo/client/core'
import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable'
import { defineNuxtPlugin } from '#app'
import {VueLoadingIndicatorInstance} from "@nguyenshort/vue3-loading-indicator";
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";
import {useRuntimeConfig} from "#imports";
import {useUserStore} from "~/store/user";

export default defineNuxtPlugin((nuxtApp) => {


  const config = useRuntimeConfig()

  const $loading: VueLoadingIndicatorInstance =
      nuxtApp.vueApp.config.globalProperties.$loading

  const roundTripLink = new ApolloLink((operation, forward) => {
    // Called before operation is sent to server
    operation.setContext({ start: Date.now() })
    // $loading?.start()

    return forward(operation).map((data) => {
      // if (data.errors) {
      //   $loading?.fail()
      // } else {
      //   $loading?.finish()
      // }

      // Called after server responds
      const time = Date.now() - operation.getContext().start
      console.log(
          `Operation: ${operation.operationName} took ${time} to complete`
      )
      return data
    })
  })

  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: config.public.comico_graphql,
    headers: {}
  })

  const authLink = setContext((_, { headers }) => {
    const useUser = useUserStore()
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ` + useUser.token
      }
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(
          ({ message, extensions }) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Code: ${extensions.category}`
            )
            switch (extensions.category) {
              case 'authentication':
                console.log('authentication')
            }
          }
          // Xoá cookie, đăng xuất, login
      )
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  })



  const cache = new InMemoryCache()

  let apolloClient: ApolloClient<any>

  if (process.server) {
    apolloClient = new ApolloClient({
      ssrMode: true,
      link: roundTripLink.concat(errorLink.concat(authLink.concat(httpLink))),
      cache,
      connectToDevTools: true
    })
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload.data.apollo = apolloClient.extract()
    })
  }
  else {
    apolloClient = new ApolloClient({
      link: roundTripLink.concat(errorLink.concat(authLink.concat(httpLink))),
      cache,
      connectToDevTools: true
    })
  }

  provideApolloClient(apolloClient)
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient })
})
