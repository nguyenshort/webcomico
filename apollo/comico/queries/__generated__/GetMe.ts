/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./../../../__generated__/comicoTypes";

// ====================================================
// GraphQL query operation: GetMe
// ====================================================

export interface GetMe_me {
  __typename: "User";
  id: string;
  name: string;
  slug: string;
  role: Role;
  avatar: string | null;
}

export interface GetMe {
  me: GetMe_me;
}
