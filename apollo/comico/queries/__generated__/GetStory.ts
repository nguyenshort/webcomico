/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StoryStatus } from "./../../../__generated__/comicoTypes";

// ====================================================
// GraphQL query operation: GetStory
// ====================================================

export interface GetStory_story_tags {
  __typename: "Tag";
  id: string;
  name: string;
  slug: string;
}

export interface GetStory_story_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface GetStory_story_user {
  __typename: "User";
  id: string;
  name: string;
  slug: string;
}

export interface GetStory_story {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  status: StoryStatus;
  tags: GetStory_story_tags[];
  category: GetStory_story_category;
  content: string;
  avatar: string;
  authors: string;
  teams: string[];
  updatedAt: number;
  user: GetStory_story_user;
}

export interface GetStory {
  story: GetStory_story;
}

export interface GetStoryVariables {
  slug: string;
}
