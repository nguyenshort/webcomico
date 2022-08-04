/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CounterScope {
  DAY = "DAY",
  HOUR = "HOUR",
  MONTH = "MONTH",
  TOTAL = "TOTAL",
  WEEK = "WEEK",
  YEAR = "YEAR",
}

export enum Role {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  SP_ADMIN = "SP_ADMIN",
  USER = "USER",
}

export enum StoryStatus {
  DROP = "DROP",
  END = "END",
  ON_GOING = "ON_GOING",
}

export interface GetStoriesFilter {
  authors?: string | null;
  category?: string | null;
  day?: string | null;
  group?: string | null;
  limit: number;
  offset: number;
  order?: number | null;
  scope?: CounterScope | null;
  sort: string;
  status?: StoryStatus[] | null;
  teams?: string[] | null;
  user?: string | null;
}

export interface GetTagsFilter {
  limit: number;
  offset: number;
  order?: number | null;
  sort: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
