import gql from 'graphql-tag'

export const GET_TAGS = gql`
    query GetTags($filter: GetTagsFilter!) {
        tags(filter: $filter) {
            id
            name
            slug
        }
    }
`
