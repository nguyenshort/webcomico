/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetStoriesFilter } from "./../../../__generated__/comicoTypes";

// ====================================================
// GraphQL query operation: HomeEnded
// ====================================================

export interface HomeEnded_stories_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface HomeEnded_stories {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  avatar: string;
  category: HomeEnded_stories_category;
}

export interface HomeEnded {
  stories: HomeEnded_stories[];
}

export interface HomeEndedVariables {
  filter: GetStoriesFilter;
}
