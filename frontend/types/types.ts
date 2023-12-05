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
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']>;
  aspect_ratio?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  color_space?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  default_image?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  density?: InputMaybe<Scalars['String']>;
  dpr?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  fetch_format?: InputMaybe<Scalars['String']>;
  flags?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  opacity?: InputMaybe<Scalars['String']>;
  overlay?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  transformation?: InputMaybe<Scalars['String']>;
  underlay?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['String']>;
  y?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/**  A keystone list  */
export type Destination = {
  __typename?: 'Destination';
  _photoMeta?: Maybe<_QueryMeta>;
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  guide?: Maybe<Guide>;
  hover_description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo: Array<DestinationImage>;
  website?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Destination_PhotoMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};


/**  A keystone list  */
export type DestinationPhotoArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};

export type DestinationCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  guide?: InputMaybe<GuideRelateToOneInput>;
  hover_description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<DestinationImageRelateToManyInput>;
  website?: InputMaybe<Scalars['String']>;
};

/**  A keystone list  */
export type DestinationImage = {
  __typename?: 'DestinationImage';
  altText?: Maybe<Scalars['String']>;
  destination?: Maybe<Destination>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
};

export type DestinationImageCreateInput = {
  altText?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<DestinationRelateToOneInput>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type DestinationImageRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<DestinationImageWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<DestinationImageCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DestinationImageWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type DestinationImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<DestinationRelateToOneInput>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type DestinationImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DestinationImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DestinationImageWhereInput>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_contains_i?: InputMaybe<Scalars['String']>;
  altText_ends_with?: InputMaybe<Scalars['String']>;
  altText_ends_with_i?: InputMaybe<Scalars['String']>;
  altText_i?: InputMaybe<Scalars['String']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_contains_i?: InputMaybe<Scalars['String']>;
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  altText_not_ends_with_i?: InputMaybe<Scalars['String']>;
  altText_not_i?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  altText_not_starts_with_i?: InputMaybe<Scalars['String']>;
  altText_starts_with?: InputMaybe<Scalars['String']>;
  altText_starts_with_i?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<DestinationWhereInput>;
  destination_is_null?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DestinationImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export type DestinationImagesCreateInput = {
  data?: InputMaybe<DestinationImageCreateInput>;
};

export type DestinationImagesUpdateInput = {
  data?: InputMaybe<DestinationImageUpdateInput>;
  id: Scalars['ID'];
};

export type DestinationRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<DestinationWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<DestinationCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DestinationWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type DestinationRelateToOneInput = {
  connect?: InputMaybe<DestinationWhereUniqueInput>;
  create?: InputMaybe<DestinationCreateInput>;
  disconnect?: InputMaybe<DestinationWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type DestinationUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  guide?: InputMaybe<GuideRelateToOneInput>;
  hover_description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<DestinationImageRelateToManyInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type DestinationWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DestinationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DestinationWhereInput>>>;
  address?: InputMaybe<Scalars['String']>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_i?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_i?: InputMaybe<Scalars['String']>;
  address_i?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_not?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_i?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_i?: InputMaybe<Scalars['String']>;
  address_not_i?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_i?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_i?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  guide?: InputMaybe<GuideWhereInput>;
  guide_is_null?: InputMaybe<Scalars['Boolean']>;
  hover_description?: InputMaybe<Scalars['String']>;
  hover_description_contains?: InputMaybe<Scalars['String']>;
  hover_description_contains_i?: InputMaybe<Scalars['String']>;
  hover_description_ends_with?: InputMaybe<Scalars['String']>;
  hover_description_ends_with_i?: InputMaybe<Scalars['String']>;
  hover_description_i?: InputMaybe<Scalars['String']>;
  hover_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hover_description_not?: InputMaybe<Scalars['String']>;
  hover_description_not_contains?: InputMaybe<Scalars['String']>;
  hover_description_not_contains_i?: InputMaybe<Scalars['String']>;
  hover_description_not_ends_with?: InputMaybe<Scalars['String']>;
  hover_description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  hover_description_not_i?: InputMaybe<Scalars['String']>;
  hover_description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hover_description_not_starts_with?: InputMaybe<Scalars['String']>;
  hover_description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  hover_description_starts_with?: InputMaybe<Scalars['String']>;
  hover_description_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  photo_every?: InputMaybe<DestinationImageWhereInput>;
  /**  condition must be false for all nodes  */
  photo_none?: InputMaybe<DestinationImageWhereInput>;
  /**  condition must be true for at least 1 node  */
  photo_some?: InputMaybe<DestinationImageWhereInput>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_i?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_i?: InputMaybe<Scalars['String']>;
  website_i?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_i?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_i?: InputMaybe<Scalars['String']>;
  website_not_i?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_i?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type DestinationWhereUniqueInput = {
  id: Scalars['ID'];
};

export type DestinationsCreateInput = {
  data?: InputMaybe<DestinationCreateInput>;
};

export type DestinationsUpdateInput = {
  data?: InputMaybe<DestinationUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Guide = {
  __typename?: 'Guide';
  _destinationsMeta?: Maybe<_QueryMeta>;
  destinations: Array<Destination>;
  id: Scalars['ID'];
  location_info?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Guide_DestinationsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};


/**  A keystone list  */
export type GuideDestinationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};

export type GuideCreateInput = {
  destinations?: InputMaybe<DestinationRelateToManyInput>;
  location_info?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type GuideRelateToOneInput = {
  connect?: InputMaybe<GuideWhereUniqueInput>;
  create?: InputMaybe<GuideCreateInput>;
  disconnect?: InputMaybe<GuideWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type GuideUpdateInput = {
  destinations?: InputMaybe<DestinationRelateToManyInput>;
  location_info?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type GuideWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<GuideWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<GuideWhereInput>>>;
  /**  condition must be true for all nodes  */
  destinations_every?: InputMaybe<DestinationWhereInput>;
  /**  condition must be false for all nodes  */
  destinations_none?: InputMaybe<DestinationWhereInput>;
  /**  condition must be true for at least 1 node  */
  destinations_some?: InputMaybe<DestinationWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  location_info?: InputMaybe<Scalars['String']>;
  location_info_contains?: InputMaybe<Scalars['String']>;
  location_info_contains_i?: InputMaybe<Scalars['String']>;
  location_info_ends_with?: InputMaybe<Scalars['String']>;
  location_info_ends_with_i?: InputMaybe<Scalars['String']>;
  location_info_i?: InputMaybe<Scalars['String']>;
  location_info_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_info_not?: InputMaybe<Scalars['String']>;
  location_info_not_contains?: InputMaybe<Scalars['String']>;
  location_info_not_contains_i?: InputMaybe<Scalars['String']>;
  location_info_not_ends_with?: InputMaybe<Scalars['String']>;
  location_info_not_ends_with_i?: InputMaybe<Scalars['String']>;
  location_info_not_i?: InputMaybe<Scalars['String']>;
  location_info_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_info_not_starts_with?: InputMaybe<Scalars['String']>;
  location_info_not_starts_with_i?: InputMaybe<Scalars['String']>;
  location_info_starts_with?: InputMaybe<Scalars['String']>;
  location_info_starts_with_i?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_contains_i?: InputMaybe<Scalars['String']>;
  status_ends_with?: InputMaybe<Scalars['String']>;
  status_ends_with_i?: InputMaybe<Scalars['String']>;
  status_i?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_not?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_contains_i?: InputMaybe<Scalars['String']>;
  status_not_ends_with?: InputMaybe<Scalars['String']>;
  status_not_ends_with_i?: InputMaybe<Scalars['String']>;
  status_not_i?: InputMaybe<Scalars['String']>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_not_starts_with?: InputMaybe<Scalars['String']>;
  status_not_starts_with_i?: InputMaybe<Scalars['String']>;
  status_starts_with?: InputMaybe<Scalars['String']>;
  status_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type GuideWhereUniqueInput = {
  id: Scalars['ID'];
};

export type GuidesCreateInput = {
  data?: InputMaybe<GuideCreateInput>;
};

export type GuidesUpdateInput = {
  data?: InputMaybe<GuideUpdateInput>;
  id: Scalars['ID'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  viewsHash: Scalars['String'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
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
  endSession: Scalars['Boolean'];
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
  email: Scalars['String'];
  password: Scalars['String'];
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
  id: Scalars['ID'];
};


export type MutationDeleteDestinationImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDestinationImagesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteDestinationsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteGuideArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGuidesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationUpdateDestinationArgs = {
  data?: InputMaybe<DestinationUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateDestinationImageArgs = {
  data?: InputMaybe<DestinationImageUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateDestinationImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<DestinationImagesUpdateInput>>>;
};


export type MutationUpdateDestinationsArgs = {
  data?: InputMaybe<Array<InputMaybe<DestinationsUpdateInput>>>;
};


export type MutationUpdateGuideArgs = {
  data?: InputMaybe<GuideUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateGuidesArgs = {
  data?: InputMaybe<Array<InputMaybe<GuidesUpdateInput>>>;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
  SecretNotSet = 'SECRET_NOT_SET'
}

export type Query = {
  __typename?: 'Query';
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
  appVersion?: Maybe<Scalars['String']>;
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
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};


export type Query_AllDestinationsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};


export type Query_AllGuidesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortGuidesBy>>;
  where?: InputMaybe<GuideWhereInput>;
};


export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};


export type QueryAllDestinationImagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationImagesBy>>;
  where?: InputMaybe<DestinationImageWhereInput>;
};


export type QueryAllDestinationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortDestinationsBy>>;
  where?: InputMaybe<DestinationWhereInput>;
};


export type QueryAllGuidesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortGuidesBy>>;
  where?: InputMaybe<GuideWhereInput>;
};


export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortDestinationImagesBy {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export enum SortDestinationsBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GuideAsc = 'guide_ASC',
  GuideDesc = 'guide_DESC',
  HoverDescriptionAsc = 'hover_description_ASC',
  HoverDescriptionDesc = 'hover_description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export enum SortGuidesBy {
  DestinationsAsc = 'destinations_ASC',
  DestinationsDesc = 'destinations_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationInfoAsc = 'location_info_ASC',
  LocationInfoDesc = 'location_info_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export enum SortUsersBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC'
}

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetToken_is_set?: InputMaybe<Scalars['Boolean']>;
  password_is_set?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
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
  type?: Maybe<Scalars['String']>;
};


export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};
