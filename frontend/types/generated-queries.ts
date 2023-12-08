import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars["String"]>;
  aspect_ratio?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
  border?: InputMaybe<Scalars["String"]>;
  color?: InputMaybe<Scalars["String"]>;
  color_space?: InputMaybe<Scalars["String"]>;
  crop?: InputMaybe<Scalars["String"]>;
  default_image?: InputMaybe<Scalars["String"]>;
  delay?: InputMaybe<Scalars["String"]>;
  density?: InputMaybe<Scalars["String"]>;
  dpr?: InputMaybe<Scalars["String"]>;
  effect?: InputMaybe<Scalars["String"]>;
  fetch_format?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["String"]>;
  format?: InputMaybe<Scalars["String"]>;
  gravity?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["String"]>;
  opacity?: InputMaybe<Scalars["String"]>;
  overlay?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["String"]>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["String"]>;
  radius?: InputMaybe<Scalars["String"]>;
  transformation?: InputMaybe<Scalars["String"]>;
  underlay?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["String"]>;
  x?: InputMaybe<Scalars["String"]>;
  y?: InputMaybe<Scalars["String"]>;
  zoom?: InputMaybe<Scalars["String"]>;
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  encoding?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mimetype?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

/**  A keystone list  */
export type Destination = {
  __typename?: "Destination";
  _photoMeta?: Maybe<_QueryMeta>;
  address?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  guide?: Maybe<Guide>;
  hover_description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  photo: Array<DestinationImage>;
  website?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type Destination_PhotoMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};

/**  A keystone list  */
export type DestinationPhotoArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};

export type DestinationCreateInput = {
  address?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  guide?: InputMaybe<GuideRelateToOneInput>;
  hover_description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<DestinationImageRelateToManyInput>;
  website?: InputMaybe<Scalars["String"]>;
};

/**  A keystone list  */
export type DestinationImage = {
  __typename?: "DestinationImage";
  altText?: Maybe<Scalars["String"]>;
  destination?: Maybe<Destination>;
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
};

export type DestinationImageCreateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  destination?: InputMaybe<DestinationRelateToOneInput>;
  image?: InputMaybe<Scalars["Upload"]>;
};

export type DestinationImageRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<DestinationImageWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<DestinationImageCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DestinationImageWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type DestinationImageUpdateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  destination?: InputMaybe<DestinationRelateToOneInput>;
  image?: InputMaybe<Scalars["Upload"]>;
};

export type DestinationImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DestinationImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DestinationImageWhereInput>>>;
  altText?: InputMaybe<Scalars["String"]>;
  altText_contains?: InputMaybe<Scalars["String"]>;
  altText_contains_i?: InputMaybe<Scalars["String"]>;
  altText_ends_with?: InputMaybe<Scalars["String"]>;
  altText_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_i?: InputMaybe<Scalars["String"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not?: InputMaybe<Scalars["String"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]>;
  altText_not_contains_i?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_not_i?: InputMaybe<Scalars["String"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not_starts_with?: InputMaybe<Scalars["String"]>;
  altText_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  altText_starts_with?: InputMaybe<Scalars["String"]>;
  altText_starts_with_i?: InputMaybe<Scalars["String"]>;
  destination?: InputMaybe<DestinationWhereInput>;
  destination_is_null?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  image?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DestinationImageWhereUniqueInput = {
  id: Scalars["ID"];
};

export type DestinationImagesCreateInput = {
  data?: InputMaybe<DestinationImageCreateInput>;
};

export type DestinationImagesUpdateInput = {
  data?: InputMaybe<DestinationImageUpdateInput>;
  id: Scalars["ID"];
};

export type DestinationRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<DestinationWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<DestinationCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DestinationWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type DestinationRelateToOneInput = {
  connect?: InputMaybe<DestinationWhereUniqueInput>;
  create?: InputMaybe<DestinationCreateInput>;
  disconnect?: InputMaybe<DestinationWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type DestinationUpdateInput = {
  address?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  guide?: InputMaybe<GuideRelateToOneInput>;
  hover_description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<DestinationImageRelateToManyInput>;
  website?: InputMaybe<Scalars["String"]>;
};

export type DestinationWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DestinationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DestinationWhereInput>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_contains_i?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_ends_with_i?: InputMaybe<Scalars["String"]>;
  address_i?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_contains_i?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  address_not_i?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with_i?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_i?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_i?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_i?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_not_i?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_i?: InputMaybe<Scalars["String"]>;
  guide?: InputMaybe<GuideWhereInput>;
  guide_is_null?: InputMaybe<Scalars["Boolean"]>;
  hover_description?: InputMaybe<Scalars["String"]>;
  hover_description_contains?: InputMaybe<Scalars["String"]>;
  hover_description_contains_i?: InputMaybe<Scalars["String"]>;
  hover_description_ends_with?: InputMaybe<Scalars["String"]>;
  hover_description_ends_with_i?: InputMaybe<Scalars["String"]>;
  hover_description_i?: InputMaybe<Scalars["String"]>;
  hover_description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hover_description_not?: InputMaybe<Scalars["String"]>;
  hover_description_not_contains?: InputMaybe<Scalars["String"]>;
  hover_description_not_contains_i?: InputMaybe<Scalars["String"]>;
  hover_description_not_ends_with?: InputMaybe<Scalars["String"]>;
  hover_description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  hover_description_not_i?: InputMaybe<Scalars["String"]>;
  hover_description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hover_description_not_starts_with?: InputMaybe<Scalars["String"]>;
  hover_description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  hover_description_starts_with?: InputMaybe<Scalars["String"]>;
  hover_description_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  /**  condition must be true for all nodes  */
  photo_every?: InputMaybe<DestinationImageWhereInput>;
  /**  condition must be false for all nodes  */
  photo_none?: InputMaybe<DestinationImageWhereInput>;
  /**  condition must be true for at least 1 node  */
  photo_some?: InputMaybe<DestinationImageWhereInput>;
  website?: InputMaybe<Scalars["String"]>;
  website_contains?: InputMaybe<Scalars["String"]>;
  website_contains_i?: InputMaybe<Scalars["String"]>;
  website_ends_with?: InputMaybe<Scalars["String"]>;
  website_ends_with_i?: InputMaybe<Scalars["String"]>;
  website_i?: InputMaybe<Scalars["String"]>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  website_not?: InputMaybe<Scalars["String"]>;
  website_not_contains?: InputMaybe<Scalars["String"]>;
  website_not_contains_i?: InputMaybe<Scalars["String"]>;
  website_not_ends_with?: InputMaybe<Scalars["String"]>;
  website_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  website_not_i?: InputMaybe<Scalars["String"]>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  website_not_starts_with?: InputMaybe<Scalars["String"]>;
  website_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  website_starts_with?: InputMaybe<Scalars["String"]>;
  website_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type DestinationWhereUniqueInput = {
  id: Scalars["ID"];
};

export type DestinationsCreateInput = {
  data?: InputMaybe<DestinationCreateInput>;
};

export type DestinationsUpdateInput = {
  data?: InputMaybe<DestinationUpdateInput>;
  id: Scalars["ID"];
};

/**  A keystone list  */
export type Guide = {
  __typename?: "Guide";
  _destinationsMeta?: Maybe<_QueryMeta>;
  altText?: Maybe<Scalars["String"]>;
  destinations: Array<Destination>;
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
  location_info?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type Guide_DestinationsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};

/**  A keystone list  */
export type GuideDestinationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};

export type GuideCreateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  destinations?: InputMaybe<DestinationRelateToManyInput>;
  image?: InputMaybe<Scalars["Upload"]>;
  location_info?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
};

export type GuideRelateToOneInput = {
  connect?: InputMaybe<GuideWhereUniqueInput>;
  create?: InputMaybe<GuideCreateInput>;
  disconnect?: InputMaybe<GuideWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type GuideUpdateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  destinations?: InputMaybe<DestinationRelateToManyInput>;
  image?: InputMaybe<Scalars["Upload"]>;
  location_info?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
};

export type GuideWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<GuideWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<GuideWhereInput>>>;
  altText?: InputMaybe<Scalars["String"]>;
  altText_contains?: InputMaybe<Scalars["String"]>;
  altText_contains_i?: InputMaybe<Scalars["String"]>;
  altText_ends_with?: InputMaybe<Scalars["String"]>;
  altText_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_i?: InputMaybe<Scalars["String"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not?: InputMaybe<Scalars["String"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]>;
  altText_not_contains_i?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_not_i?: InputMaybe<Scalars["String"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not_starts_with?: InputMaybe<Scalars["String"]>;
  altText_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  altText_starts_with?: InputMaybe<Scalars["String"]>;
  altText_starts_with_i?: InputMaybe<Scalars["String"]>;
  /**  condition must be true for all nodes  */
  destinations_every?: InputMaybe<DestinationWhereInput>;
  /**  condition must be false for all nodes  */
  destinations_none?: InputMaybe<DestinationWhereInput>;
  /**  condition must be true for at least 1 node  */
  destinations_some?: InputMaybe<DestinationWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  image?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  location_info?: InputMaybe<Scalars["String"]>;
  location_info_contains?: InputMaybe<Scalars["String"]>;
  location_info_contains_i?: InputMaybe<Scalars["String"]>;
  location_info_ends_with?: InputMaybe<Scalars["String"]>;
  location_info_ends_with_i?: InputMaybe<Scalars["String"]>;
  location_info_i?: InputMaybe<Scalars["String"]>;
  location_info_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  location_info_not?: InputMaybe<Scalars["String"]>;
  location_info_not_contains?: InputMaybe<Scalars["String"]>;
  location_info_not_contains_i?: InputMaybe<Scalars["String"]>;
  location_info_not_ends_with?: InputMaybe<Scalars["String"]>;
  location_info_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  location_info_not_i?: InputMaybe<Scalars["String"]>;
  location_info_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  location_info_not_starts_with?: InputMaybe<Scalars["String"]>;
  location_info_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  location_info_starts_with?: InputMaybe<Scalars["String"]>;
  location_info_starts_with_i?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_contains?: InputMaybe<Scalars["String"]>;
  status_contains_i?: InputMaybe<Scalars["String"]>;
  status_ends_with?: InputMaybe<Scalars["String"]>;
  status_ends_with_i?: InputMaybe<Scalars["String"]>;
  status_i?: InputMaybe<Scalars["String"]>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_not?: InputMaybe<Scalars["String"]>;
  status_not_contains?: InputMaybe<Scalars["String"]>;
  status_not_contains_i?: InputMaybe<Scalars["String"]>;
  status_not_ends_with?: InputMaybe<Scalars["String"]>;
  status_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  status_not_i?: InputMaybe<Scalars["String"]>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_not_starts_with?: InputMaybe<Scalars["String"]>;
  status_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  status_starts_with?: InputMaybe<Scalars["String"]>;
  status_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type GuideWhereUniqueInput = {
  id: Scalars["ID"];
};

export type GuidesCreateInput = {
  data?: InputMaybe<GuideCreateInput>;
};

export type GuidesUpdateInput = {
  data?: InputMaybe<GuideUpdateInput>;
  id: Scalars["ID"];
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  viewsHash: Scalars["String"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars["ID"];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  /**  Create a single Destination item.  */
  createDestination?: Maybe<Destination>;
  /**  Create a single DestinationImage item.  */
  createDestinationImage?: Maybe<DestinationImage>;
  /**  Create multiple DestinationImage items.  */
  createDestinationImages?: Maybe<Array<Maybe<DestinationImage>>>;
  /**  Create multiple Destination items.  */
  createDestinations?: Maybe<Array<Maybe<Destination>>>;
  /**  Create a single Guide item.  */
  createGuide?: Maybe<Guide>;
  /**  Create multiple Guide items.  */
  createGuides?: Maybe<Array<Maybe<Guide>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single Destination item by ID.  */
  deleteDestination?: Maybe<Destination>;
  /**  Delete a single DestinationImage item by ID.  */
  deleteDestinationImage?: Maybe<DestinationImage>;
  /**  Delete multiple DestinationImage items by ID.  */
  deleteDestinationImages?: Maybe<Array<Maybe<DestinationImage>>>;
  /**  Delete multiple Destination items by ID.  */
  deleteDestinations?: Maybe<Array<Maybe<Destination>>>;
  /**  Delete a single Guide item by ID.  */
  deleteGuide?: Maybe<Guide>;
  /**  Delete multiple Guide items by ID.  */
  deleteGuides?: Maybe<Array<Maybe<Guide>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  /**  Update a single Destination item by ID.  */
  updateDestination?: Maybe<Destination>;
  /**  Update a single DestinationImage item by ID.  */
  updateDestinationImage?: Maybe<DestinationImage>;
  /**  Update multiple DestinationImage items by ID.  */
  updateDestinationImages?: Maybe<Array<Maybe<DestinationImage>>>;
  /**  Update multiple Destination items by ID.  */
  updateDestinations?: Maybe<Array<Maybe<Destination>>>;
  /**  Update a single Guide item by ID.  */
  updateGuide?: Maybe<Guide>;
  /**  Update multiple Guide items by ID.  */
  updateGuides?: Maybe<Array<Maybe<Guide>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateDestinationArgs = {
  data?: InputMaybe<DestinationCreateInput>;
};

export type MutationCreateDestinationImageArgs = {
  data?: InputMaybe<DestinationImageCreateInput>;
};

export type MutationCreateDestinationImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<DestinationImagesCreateInput>>>;
};

export type MutationCreateDestinationsArgs = {
  data?: InputMaybe<Array<InputMaybe<DestinationsCreateInput>>>;
};

export type MutationCreateGuideArgs = {
  data?: InputMaybe<GuideCreateInput>;
};

export type MutationCreateGuidesArgs = {
  data?: InputMaybe<Array<InputMaybe<GuidesCreateInput>>>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};

export type MutationDeleteDestinationArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDestinationImageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDestinationImagesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteDestinationsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteGuideArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteGuidesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationUpdateDestinationArgs = {
  data?: InputMaybe<DestinationUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateDestinationImageArgs = {
  data?: InputMaybe<DestinationImageUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateDestinationImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<DestinationImagesUpdateInput>>>;
};

export type MutationUpdateDestinationsArgs = {
  data?: InputMaybe<Array<InputMaybe<DestinationsUpdateInput>>>;
};

export type MutationUpdateGuideArgs = {
  data?: InputMaybe<GuideUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateGuidesArgs = {
  data?: InputMaybe<Array<InputMaybe<GuidesUpdateInput>>>;
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  SecretMismatch = "SECRET_MISMATCH",
  SecretNotSet = "SECRET_NOT_SET",
}

export type Query = {
  __typename?: "Query";
  /**  Search for the Destination item with the matching ID.  */
  Destination?: Maybe<Destination>;
  /**  Search for the DestinationImage item with the matching ID.  */
  DestinationImage?: Maybe<DestinationImage>;
  /**  Search for the Guide item with the matching ID.  */
  Guide?: Maybe<Guide>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Retrieve the meta-data for the DestinationImage list.  */
  _DestinationImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Destination list.  */
  _DestinationsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Guide list.  */
  _GuidesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all DestinationImage items which match the where clause.  */
  _allDestinationImagesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Destination items which match the where clause.  */
  _allDestinationsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Guide items which match the where clause.  */
  _allGuidesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all DestinationImage items which match the where clause.  */
  allDestinationImages?: Maybe<Array<Maybe<DestinationImage>>>;
  /**  Search for all Destination items which match the where clause.  */
  allDestinations?: Maybe<Array<Maybe<Destination>>>;
  /**  Search for all Guide items which match the where clause.  */
  allGuides?: Maybe<Array<Maybe<Guide>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars["String"]>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryDestinationArgs = {
  where: DestinationWhereUniqueInput;
};

export type QueryDestinationImageArgs = {
  where: DestinationImageWhereUniqueInput;
};

export type QueryGuideArgs = {
  where: GuideWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllDestinationImagesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};

export type Query_AllDestinationsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};

export type Query_AllGuidesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortGuidesBy>>;
  where?: InputMaybe<GuideWhereInput>;
};

export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};

export type QueryAllDestinationImagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};

export type QueryAllDestinationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};

export type QueryAllGuidesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortGuidesBy>>;
  where?: InputMaybe<GuideWhereInput>;
};

export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortDestinationImagesBy {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  DestinationAsc = "destination_ASC",
  DestinationDesc = "destination_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

export enum SortDestinationsBy {
  AddressAsc = "address_ASC",
  AddressDesc = "address_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  GuideAsc = "guide_ASC",
  GuideDesc = "guide_DESC",
  HoverDescriptionAsc = "hover_description_ASC",
  HoverDescriptionDesc = "hover_description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PhotoAsc = "photo_ASC",
  PhotoDesc = "photo_DESC",
  WebsiteAsc = "website_ASC",
  WebsiteDesc = "website_DESC",
}

export enum SortGuidesBy {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  DestinationsAsc = "destinations_ASC",
  DestinationsDesc = "destinations_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LocationInfoAsc = "location_info_ASC",
  LocationInfoDesc = "location_info_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
}

export enum SortUsersBy {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MagicAuthIssuedAtAsc = "magicAuthIssuedAt_ASC",
  MagicAuthIssuedAtDesc = "magicAuthIssuedAt_DESC",
  MagicAuthRedeemedAtAsc = "magicAuthRedeemedAt_ASC",
  MagicAuthRedeemedAtDesc = "magicAuthRedeemedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PasswordResetIssuedAtAsc = "passwordResetIssuedAt_ASC",
  PasswordResetIssuedAtDesc = "passwordResetIssuedAt_DESC",
  PasswordResetRedeemedAtAsc = "passwordResetRedeemedAt_ASC",
  PasswordResetRedeemedAtDesc = "passwordResetRedeemedAt_DESC",
}

/**  A keystone list  */
export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  magicAuthIssuedAt?: Maybe<Scalars["String"]>;
  magicAuthRedeemedAt?: Maybe<Scalars["String"]>;
  magicAuthToken_is_set?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  passwordResetIssuedAt?: Maybe<Scalars["String"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["String"]>;
  passwordResetToken_is_set?: Maybe<Scalars["Boolean"]>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars["String"]>;
  email_contains?: InputMaybe<Scalars["String"]>;
  email_contains_i?: InputMaybe<Scalars["String"]>;
  email_ends_with?: InputMaybe<Scalars["String"]>;
  email_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_i?: InputMaybe<Scalars["String"]>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not?: InputMaybe<Scalars["String"]>;
  email_not_contains?: InputMaybe<Scalars["String"]>;
  email_not_contains_i?: InputMaybe<Scalars["String"]>;
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  email_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_not_i?: InputMaybe<Scalars["String"]>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  email_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  email_starts_with?: InputMaybe<Scalars["String"]>;
  email_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  passwordResetToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  password_is_set?: InputMaybe<Scalars["Boolean"]>;
};

export type UserWhereUniqueInput = {
  id: Scalars["ID"];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type _ListAccess = {
  __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars["JSON"]>;
};

export type _ListInputTypes = {
  __typename?: "_ListInputTypes";
  /** Create mutation input type name */
  createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars["String"]>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars["String"]>;
};

export type _ListMeta = {
  __typename?: "_ListMeta";
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars["String"]>;
  /** The Keystone list key */
  key?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The list's data path */
  path?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  plural?: Maybe<Scalars["String"]>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars["String"]>;
};

export type _ListMutations = {
  __typename?: "_ListMutations";
  /** Create mutation name */
  create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars["String"]>;
};

export type _ListQueries = {
  __typename?: "_ListQueries";
  /** Single-item query name */
  item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  meta?: Maybe<Scalars["String"]>;
};

export type _ListSchema = {
  __typename?: "_ListSchema";
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: "_ListSchemaFields";
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The path of the field in its list */
  path?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  __typename?: "_ListSchemaRelatedFields";
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _QueryMeta = {
  __typename?: "_QueryMeta";
  count?: Maybe<Scalars["Int"]>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars["Boolean"]>;
  key?: InputMaybe<Scalars["String"]>;
};

export type AllGuidesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type AllGuidesQueryQuery = {
  __typename?: "Query";
  allGuides?: Array<{
    __typename?: "Guide";
    id: string;
    name?: string | null;
    location_info?: string | null;
    status?: string | null;
    destinations: Array<{
      __typename?: "Destination";
      id: string;
      name?: string | null;
      hover_description?: string | null;
      photo: Array<{
        __typename?: "DestinationImage";
        id: string;
        image?: {
          __typename?: "CloudinaryImage_File";
          publicUrlTransformed?: string | null;
        } | null;
      }>;
    }>;
  } | null> | null;
};

export type CreateGuideMutationVariables = Exact<{
  name: Scalars["String"];
  location_info?: InputMaybe<Scalars["String"]>;
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
}>;

export type CreateGuideMutation = {
  __typename?: "Mutation";
  createGuide?: {
    __typename?: "Guide";
    id: string;
    name?: string | null;
  } | null;
};

export type GetGuideQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetGuideQuery = {
  __typename?: "Query";
  Guide?: {
    __typename?: "Guide";
    id: string;
    name?: string | null;
    location_info?: string | null;
    status?: string | null;
    altText?: string | null;
    image?: {
      __typename?: "CloudinaryImage_File";
      publicUrlTransformed?: string | null;
    } | null;
    destinations: Array<{
      __typename?: "Destination";
      id: string;
      name?: string | null;
      hover_description?: string | null;
      photo: Array<{
        __typename?: "DestinationImage";
        id: string;
        image?: {
          __typename?: "CloudinaryImage_File";
          publicUrlTransformed?: string | null;
        } | null;
      }>;
    }>;
  } | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
  } | null;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword:
    | {
        __typename?: "UserAuthenticationWithPasswordFailure";
        message: string;
        code: PasswordAuthErrorCode;
      }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        item: {
          __typename?: "User";
          id: string;
          email?: string | null;
          name?: string | null;
        };
      };
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; endSession: boolean };

export type SignUpMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
  } | null;
};

export const AllGuidesQueryDocument = gql`
  query allGuidesQuery {
    allGuides {
      id
      name
      location_info
      status
      destinations {
        id
        name
        hover_description
        photo {
          id
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useAllGuidesQueryQuery__
 *
 * To run a query within a React component, call `useAllGuidesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGuidesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGuidesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGuidesQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllGuidesQueryQuery,
    AllGuidesQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllGuidesQueryQuery, AllGuidesQueryQueryVariables>(
    AllGuidesQueryDocument,
    options,
  );
}
export function useAllGuidesQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllGuidesQueryQuery,
    AllGuidesQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllGuidesQueryQuery, AllGuidesQueryQueryVariables>(
    AllGuidesQueryDocument,
    options,
  );
}
export type AllGuidesQueryQueryHookResult = ReturnType<
  typeof useAllGuidesQueryQuery
>;
export type AllGuidesQueryLazyQueryHookResult = ReturnType<
  typeof useAllGuidesQueryLazyQuery
>;
export type AllGuidesQueryQueryResult = Apollo.QueryResult<
  AllGuidesQueryQuery,
  AllGuidesQueryQueryVariables
>;
export function refetchAllGuidesQueryQuery(
  variables?: AllGuidesQueryQueryVariables,
) {
  return { query: AllGuidesQueryDocument, variables: variables };
}
export const CreateGuideDocument = gql`
  mutation createGuide(
    $name: String!
    $location_info: String
    $altText: String
    $image: Upload
  ) {
    createGuide(
      data: {
        name: $name
        location_info: $location_info
        altText: $altText
        image: $image
      }
    ) {
      id
      name
    }
  }
`;
export type CreateGuideMutationFn = Apollo.MutationFunction<
  CreateGuideMutation,
  CreateGuideMutationVariables
>;

/**
 * __useCreateGuideMutation__
 *
 * To run a mutation, you first call `useCreateGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuideMutation, { data, loading, error }] = useCreateGuideMutation({
 *   variables: {
 *      name: // value for 'name'
 *      location_info: // value for 'location_info'
 *      altText: // value for 'altText'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateGuideMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateGuideMutation,
    CreateGuideMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateGuideMutation, CreateGuideMutationVariables>(
    CreateGuideDocument,
    options,
  );
}
export type CreateGuideMutationHookResult = ReturnType<
  typeof useCreateGuideMutation
>;
export type CreateGuideMutationResult =
  Apollo.MutationResult<CreateGuideMutation>;
export type CreateGuideMutationOptions = Apollo.BaseMutationOptions<
  CreateGuideMutation,
  CreateGuideMutationVariables
>;
export const GetGuideDocument = gql`
  query getGuide($id: ID!) {
    Guide(where: { id: $id }) {
      id
      name
      location_info
      status
      image {
        publicUrlTransformed
      }
      altText
      destinations {
        id
        name
        hover_description
        photo {
          id
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useGetGuideQuery__
 *
 * To run a query within a React component, call `useGetGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuideQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGuideQuery(
  baseOptions: Apollo.QueryHookOptions<GetGuideQuery, GetGuideQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGuideQuery, GetGuideQueryVariables>(
    GetGuideDocument,
    options,
  );
}
export function useGetGuideLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGuideQuery,
    GetGuideQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGuideQuery, GetGuideQueryVariables>(
    GetGuideDocument,
    options,
  );
}
export type GetGuideQueryHookResult = ReturnType<typeof useGetGuideQuery>;
export type GetGuideLazyQueryHookResult = ReturnType<
  typeof useGetGuideLazyQuery
>;
export type GetGuideQueryResult = Apollo.QueryResult<
  GetGuideQuery,
  GetGuideQueryVariables
>;
export function refetchGetGuideQuery(variables: GetGuideQueryVariables) {
  return { query: GetGuideDocument, variables: variables };
}
export const UserDocument = gql`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
  return { query: UserDocument, variables: variables };
}
export const SignInDocument = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
        code
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options,
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignOutDocument = gql`
  mutation signOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    options,
  );
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const SignUpDocument = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export type CloudinaryImage_FileKeySpecifier = (
  | "encoding"
  | "filename"
  | "id"
  | "mimetype"
  | "originalFilename"
  | "path"
  | "publicUrl"
  | "publicUrlTransformed"
  | CloudinaryImage_FileKeySpecifier
)[];
export type CloudinaryImage_FileFieldPolicy = {
  encoding?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  mimetype?: FieldPolicy<any> | FieldReadFunction<any>;
  originalFilename?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DestinationKeySpecifier = (
  | "_photoMeta"
  | "address"
  | "description"
  | "guide"
  | "hover_description"
  | "id"
  | "name"
  | "photo"
  | "website"
  | DestinationKeySpecifier
)[];
export type DestinationFieldPolicy = {
  _photoMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  address?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  guide?: FieldPolicy<any> | FieldReadFunction<any>;
  hover_description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  website?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DestinationImageKeySpecifier = (
  | "altText"
  | "destination"
  | "id"
  | "image"
  | DestinationImageKeySpecifier
)[];
export type DestinationImageFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  destination?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GuideKeySpecifier = (
  | "_destinationsMeta"
  | "altText"
  | "destinations"
  | "id"
  | "image"
  | "location_info"
  | "name"
  | "status"
  | GuideKeySpecifier
)[];
export type GuideFieldPolicy = {
  _destinationsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  destinations?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  location_info?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminMetaKeySpecifier = (
  | "enableSessionItem"
  | "enableSignout"
  | "list"
  | "lists"
  | KeystoneAdminMetaKeySpecifier
)[];
export type KeystoneAdminMetaFieldPolicy = {
  enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>;
  enableSignout?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaKeySpecifier = (
  | "createView"
  | "customViewsHash"
  | "fieldMeta"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "viewsHash"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaItemViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaListViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIListMetaKeySpecifier = (
  | "description"
  | "fields"
  | "hideCreate"
  | "hideDelete"
  | "initialColumns"
  | "initialSort"
  | "isHidden"
  | "itemQueryName"
  | "key"
  | "label"
  | "labelField"
  | "listQueryName"
  | "pageSize"
  | "path"
  | "plural"
  | "singular"
  | KeystoneAdminUIListMetaKeySpecifier
)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  hideCreate?: FieldPolicy<any> | FieldReadFunction<any>;
  hideDelete?: FieldPolicy<any> | FieldReadFunction<any>;
  initialColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  initialSort?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelField?: FieldPolicy<any> | FieldReadFunction<any>;
  listQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUISortKeySpecifier = (
  | "direction"
  | "field"
  | KeystoneAdminUISortKeySpecifier
)[];
export type KeystoneAdminUISortFieldPolicy = {
  direction?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneMetaKeySpecifier = (
  | "adminMeta"
  | KeystoneMetaKeySpecifier
)[];
export type KeystoneMetaFieldPolicy = {
  adminMeta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "authenticateUserWithPassword"
  | "createDestination"
  | "createDestinationImage"
  | "createDestinationImages"
  | "createDestinations"
  | "createGuide"
  | "createGuides"
  | "createInitialUser"
  | "createUser"
  | "createUsers"
  | "deleteDestination"
  | "deleteDestinationImage"
  | "deleteDestinationImages"
  | "deleteDestinations"
  | "deleteGuide"
  | "deleteGuides"
  | "deleteUser"
  | "deleteUsers"
  | "endSession"
  | "updateDestination"
  | "updateDestinationImage"
  | "updateDestinationImages"
  | "updateDestinations"
  | "updateGuide"
  | "updateGuides"
  | "updateUser"
  | "updateUsers"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  createDestination?: FieldPolicy<any> | FieldReadFunction<any>;
  createDestinationImage?: FieldPolicy<any> | FieldReadFunction<any>;
  createDestinationImages?: FieldPolicy<any> | FieldReadFunction<any>;
  createDestinations?: FieldPolicy<any> | FieldReadFunction<any>;
  createGuide?: FieldPolicy<any> | FieldReadFunction<any>;
  createGuides?: FieldPolicy<any> | FieldReadFunction<any>;
  createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteDestination?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteDestinationImage?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteDestinationImages?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteDestinations?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteGuide?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteGuides?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDestination?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDestinationImage?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDestinationImages?: FieldPolicy<any> | FieldReadFunction<any>;
  updateDestinations?: FieldPolicy<any> | FieldReadFunction<any>;
  updateGuide?: FieldPolicy<any> | FieldReadFunction<any>;
  updateGuides?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "Destination"
  | "DestinationImage"
  | "Guide"
  | "User"
  | "_DestinationImagesMeta"
  | "_DestinationsMeta"
  | "_GuidesMeta"
  | "_UsersMeta"
  | "_allDestinationImagesMeta"
  | "_allDestinationsMeta"
  | "_allGuidesMeta"
  | "_allUsersMeta"
  | "_ksListsMeta"
  | "allDestinationImages"
  | "allDestinations"
  | "allGuides"
  | "allUsers"
  | "appVersion"
  | "authenticatedItem"
  | "keystone"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  Destination?: FieldPolicy<any> | FieldReadFunction<any>;
  DestinationImage?: FieldPolicy<any> | FieldReadFunction<any>;
  Guide?: FieldPolicy<any> | FieldReadFunction<any>;
  User?: FieldPolicy<any> | FieldReadFunction<any>;
  _DestinationImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _DestinationsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _GuidesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allDestinationImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allDestinationsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allGuidesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  allDestinationImages?: FieldPolicy<any> | FieldReadFunction<any>;
  allDestinations?: FieldPolicy<any> | FieldReadFunction<any>;
  allGuides?: FieldPolicy<any> | FieldReadFunction<any>;
  allUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  appVersion?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "email"
  | "id"
  | "magicAuthIssuedAt"
  | "magicAuthRedeemedAt"
  | "magicAuthToken_is_set"
  | "name"
  | "passwordResetIssuedAt"
  | "passwordResetRedeemedAt"
  | "passwordResetToken_is_set"
  | "password_is_set"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  password_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "code"
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = (
  | "item"
  | "sessionToken"
  | UserAuthenticationWithPasswordSuccessKeySpecifier
)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListAccessKeySpecifier = (
  | "auth"
  | "create"
  | "delete"
  | "read"
  | "update"
  | _ListAccessKeySpecifier
)[];
export type _ListAccessFieldPolicy = {
  auth?: FieldPolicy<any> | FieldReadFunction<any>;
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  read?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListInputTypesKeySpecifier = (
  | "createInput"
  | "createManyInput"
  | "updateInput"
  | "updateManyInput"
  | "whereInput"
  | "whereUniqueInput"
  | _ListInputTypesKeySpecifier
)[];
export type _ListInputTypesFieldPolicy = {
  createInput?: FieldPolicy<any> | FieldReadFunction<any>;
  createManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMetaKeySpecifier = (
  | "access"
  | "description"
  | "key"
  | "label"
  | "name"
  | "path"
  | "plural"
  | "schema"
  | "singular"
  | _ListMetaKeySpecifier
)[];
export type _ListMetaFieldPolicy = {
  access?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMutationsKeySpecifier = (
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "update"
  | "updateMany"
  | _ListMutationsKeySpecifier
)[];
export type _ListMutationsFieldPolicy = {
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  createMany?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMany?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMany?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListQueriesKeySpecifier = (
  | "item"
  | "list"
  | "meta"
  | _ListQueriesKeySpecifier
)[];
export type _ListQueriesFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaKeySpecifier = (
  | "fields"
  | "inputTypes"
  | "mutations"
  | "queries"
  | "relatedFields"
  | "type"
  | _ListSchemaKeySpecifier
)[];
export type _ListSchemaFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  inputTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  mutations?: FieldPolicy<any> | FieldReadFunction<any>;
  queries?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedFields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaFieldsKeySpecifier = (
  | "name"
  | "path"
  | "type"
  | _ListSchemaFieldsKeySpecifier
)[];
export type _ListSchemaFieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaRelatedFieldsKeySpecifier = (
  | "fields"
  | "type"
  | _ListSchemaRelatedFieldsKeySpecifier
)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _QueryMetaKeySpecifier = ("count" | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CloudinaryImage_FileKeySpecifier
      | (() => undefined | CloudinaryImage_FileKeySpecifier);
    fields?: CloudinaryImage_FileFieldPolicy;
  };
  Destination?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DestinationKeySpecifier
      | (() => undefined | DestinationKeySpecifier);
    fields?: DestinationFieldPolicy;
  };
  DestinationImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DestinationImageKeySpecifier
      | (() => undefined | DestinationImageKeySpecifier);
    fields?: DestinationImageFieldPolicy;
  };
  Guide?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GuideKeySpecifier
      | (() => undefined | GuideKeySpecifier);
    fields?: GuideFieldPolicy;
  };
  KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminMetaKeySpecifier
      | (() => undefined | KeystoneAdminMetaKeySpecifier);
    fields?: KeystoneAdminMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMetaCreateView?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaItemView?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaItemViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaListView?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaListViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy;
  };
  KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIListMetaKeySpecifier
      | (() => undefined | KeystoneAdminUIListMetaKeySpecifier);
    fields?: KeystoneAdminUIListMetaFieldPolicy;
  };
  KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUISortKeySpecifier
      | (() => undefined | KeystoneAdminUISortKeySpecifier);
    fields?: KeystoneAdminUISortFieldPolicy;
  };
  KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneMetaKeySpecifier
      | (() => undefined | KeystoneMetaKeySpecifier);
    fields?: KeystoneMetaFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAuthenticationWithPasswordFailure?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordFailureKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier);
    fields?: UserAuthenticationWithPasswordFailureFieldPolicy;
  };
  UserAuthenticationWithPasswordSuccess?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordSuccessKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier);
    fields?: UserAuthenticationWithPasswordSuccessFieldPolicy;
  };
  _ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListAccessKeySpecifier
      | (() => undefined | _ListAccessKeySpecifier);
    fields?: _ListAccessFieldPolicy;
  };
  _ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListInputTypesKeySpecifier
      | (() => undefined | _ListInputTypesKeySpecifier);
    fields?: _ListInputTypesFieldPolicy;
  };
  _ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListMetaKeySpecifier
      | (() => undefined | _ListMetaKeySpecifier);
    fields?: _ListMetaFieldPolicy;
  };
  _ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListMutationsKeySpecifier
      | (() => undefined | _ListMutationsKeySpecifier);
    fields?: _ListMutationsFieldPolicy;
  };
  _ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListQueriesKeySpecifier
      | (() => undefined | _ListQueriesKeySpecifier);
    fields?: _ListQueriesFieldPolicy;
  };
  _ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListSchemaKeySpecifier
      | (() => undefined | _ListSchemaKeySpecifier);
    fields?: _ListSchemaFieldPolicy;
  };
  _ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListSchemaFieldsKeySpecifier
      | (() => undefined | _ListSchemaFieldsKeySpecifier);
    fields?: _ListSchemaFieldsFieldPolicy;
  };
  _ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListSchemaRelatedFieldsKeySpecifier
      | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier);
    fields?: _ListSchemaRelatedFieldsFieldPolicy;
  };
  _QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _QueryMetaKeySpecifier
      | (() => undefined | _QueryMetaKeySpecifier);
    fields?: _QueryMetaFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
