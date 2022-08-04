/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetStoriesFilter } from "./../../../__generated__/comicoTypes";

// ====================================================
// GraphQL query operation: GetHomeRanking
// ====================================================

export interface GetHomeRanking_stories_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface GetHomeRanking_stories {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  avatar: string;
  category: GetHomeRanking_stories_category;
}

export interface GetHomeRanking {
  stories: GetHomeRanking_stories[];
}

export interface GetHomeRankingVariables {
  filter: GetStoriesFilter;
}
