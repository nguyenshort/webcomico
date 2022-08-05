import { defineStore } from 'pinia'
import {useNuxtApp, useRoute} from "#imports";
import {ApolloClient} from "@apollo/client/core";
import {GetStory, GetStory_story, GetStoryVariables} from "~/apollo/comico/queries/__generated__/GetStory";
import {GET_STORY} from "~/apollo/comico/queries/stories";


interface State {
    _story?: GetStory_story
}

export const useStoryStore = defineStore('story', {
    state: (): State => ({
        _story: undefined
    }),

    getters: {
        story: (state) => state._story
    },

    actions: {
        async getStory() {

            const { $apollo } = useNuxtApp()
            const { params } = useRoute()

            try {

                const { data } = await ($apollo.apolloClient as ApolloClient<any>).query<GetStory, GetStoryVariables>({
                    query: GET_STORY,
                    variables: {
                        slug: params.slug as string
                    }
                })

                if(data.story) {
                    this._story = data.story
                }

            } catch (e) {}
        }

    }
})
