/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetStoriesFilter } from "./../../../__generated__/comicoTypes";

// ====================================================
// GraphQL query operation: GetFeatured
// ====================================================

export interface GetFeatured_stories_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface GetFeatured_stories {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  avatar: string;
  authors: string;
  content: string;
  category: GetFeatured_stories_category;
}

export interface GetFeatured {
  stories: GetFeatured_stories[];
}

export interface GetFeaturedVariables {
  filter: GetStoriesFilter;
}
