/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetTagsFilter } from "./../../../__generated__/comicoTypes";

// ====================================================
// GraphQL query operation: GetTags
// ====================================================

export interface GetTags_tags {
  __typename: "Tag";
  id: string;
  name: string;
  slug: string;
}

export interface GetTags {
  tags: GetTags_tags[];
}

export interface GetTagsVariables {
  filter: GetTagsFilter;
}
