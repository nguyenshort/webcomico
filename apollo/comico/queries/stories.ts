import gql from 'graphql-tag'

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
