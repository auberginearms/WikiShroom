/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cordycep = {
  __typename?: 'Cordycep';
  cordycepDescription?: Maybe<Scalars['String']>;
  cordycepImage?: Maybe<Scalars['String']>;
  cordycepName?: Maybe<Scalars['String']>;
};

export type PageText = {
  __typename?: 'PageText';
  pageDescription?: Maybe<Scalars['String']>;
  pageHeader?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  about: PageText;
  catalog: PageText;
  contact: PageText;
  cordyceps: Array<Cordycep>;
  getCordycep?: Maybe<Cordycep>;
  home: PageText;
  terms: PageText;
};


export type QueryGetCordycepArgs = {
  cordycepName: Scalars['String'];
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', home: { __typename?: 'PageText', pageDescription?: string | null, pageHeader?: string | null } };

export type GetContactQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactQuery = { __typename?: 'Query', contact: { __typename?: 'PageText', pageDescription?: string | null, pageHeader?: string | null } };

export type GetAboutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutQuery = { __typename?: 'Query', about: { __typename?: 'PageText', pageDescription?: string | null, pageHeader?: string | null } };

export type GetCatalogQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatalogQuery = { __typename?: 'Query', catalog: { __typename?: 'PageText', pageDescription?: string | null, pageHeader?: string | null } };

export type GetTermsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTermsQuery = { __typename?: 'Query', terms: { __typename?: 'PageText', pageDescription?: string | null, pageHeader?: string | null } };


export const GetHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"home"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageHeader"}}]}}]}}]} as unknown as DocumentNode<GetHomeQuery, GetHomeQueryVariables>;
export const GetContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageHeader"}}]}}]}}]} as unknown as DocumentNode<GetContactQuery, GetContactQueryVariables>;
export const GetAboutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAbout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageHeader"}}]}}]}}]} as unknown as DocumentNode<GetAboutQuery, GetAboutQueryVariables>;
export const GetCatalogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCatalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageHeader"}}]}}]}}]} as unknown as DocumentNode<GetCatalogQuery, GetCatalogQueryVariables>;
export const GetTermsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"terms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageHeader"}}]}}]}}]} as unknown as DocumentNode<GetTermsQuery, GetTermsQueryVariables>;