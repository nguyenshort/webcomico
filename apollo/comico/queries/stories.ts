import gql from 'graphql-tag'

export const GET_STORY = gql`
    query GetStory($slug: String!) {
        story(slug: $slug) {
            id
            name
            slug
            status
            tags {
                id
                name
                slug
            }
            category {
                id
                name
                slug
            }
            content
            avatar
            authors
            teams
            updatedAt
            user {
                id
                name
                slug
            }
        }
    }
`

export const GET_FEATURED = gql`
    query GetFeatured($filter: GetStoriesFilter!) {
        stories(filter: $filter) {
            id
            name
            slug
            avatar
            authors
            content
            category {
                id
                name
                slug
            }
        }
    }
`

export const GET_HOME_RANKING = gql`
    query GetHomeRanking($filter: GetStoriesFilter!) {
        stories(filter: $filter) {
            id
            name
            slug
            avatar
            category {
                id
                name
                slug
            }
        }
    }
`

export const HOME_ENDED = gql`
    query HomeEnded($filter: GetStoriesFilter!) {
        stories(filter: $filter) {
            id
            name
            slug
            avatar
            category {
                id
                name
                slug
            }
        }
    }
`
