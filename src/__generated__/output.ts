import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Account = {
  brand?: Maybe<AccountBrand>;
  categories: Array<SelectCategory>;
  tariffs: Array<Tariff>;
};

export type AccountBrand = {
  about?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Int']['output'];
  category: SelectCategory;
  city: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postedCount: Scalars['Int']['output'];
  subscribers: Array<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type Advertising = {
  alt?: Maybe<Scalars['String']['output']>;
  bigImagePath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  smallImagePath?: Maybe<Scalars['String']['output']>;
  type: AdvertisingType;
  url?: Maybe<Scalars['String']['output']>;
};

export enum AdvertisingType {
  Banner = 'BANNER',
  Card = 'CARD',
  Catalog = 'CATALOG',
  Large = 'LARGE',
  Small = 'SMALL'
}

export type AllAdvertisements = {
  advertisements: Array<Advertising>;
  count: Scalars['Int']['output'];
};

export type AllAnnouncements = {
  announcements: Array<AnnouncementCard>;
  count: Scalars['Int']['output'];
};

export type AllAnnouncementsAdmin = {
  announcements: Array<AnnouncementCardAdmin>;
  count: Scalars['Int']['output'];
};

export type AllBrands = {
  brands: Array<BrandCard>;
  count: Scalars['Int']['output'];
};

export type AllCategories = {
  categories: Array<CategoryCard>;
  count: Scalars['Int']['output'];
};

export type AllProducts = {
  count: Scalars['Int']['output'];
  products: Array<ProductCard>;
};

export type AllReviews = {
  count: Scalars['Int']['output'];
  reviews: Array<ReviewCard>;
};

export type AnnouncementCard = {
  about: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  maxPrice: Scalars['Int']['output'];
  minPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orders: Array<NestedOrder>;
  posterPath: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  pricesFull: Array<Price>;
  rating: Scalars['String']['output'];
  sku: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type AnnouncementCardAdmin = {
  about: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  maxPrice: Scalars['Int']['output'];
  minPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orders: Array<NestedOrder>;
  posterPath: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  pricesFull: Array<Price>;
  rating: Scalars['String']['output'];
  sku: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type Brand = {
  about?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isBrandOwner: Scalars['Boolean']['output'];
  isSubscribed: Scalars['Boolean']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postedCount: Scalars['Int']['output'];
  rating: Scalars['String']['output'];
  reviews: Array<ReviewCard>;
  reviewsCount: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  telegram?: Maybe<Scalars['String']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type BrandCard = {
  about?: Maybe<Scalars['String']['output']>;
  category: NestedCategory;
  city: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rating: Scalars['String']['output'];
  reviewsCount: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type BrandQueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Sort>;
  reviewsCount?: InputMaybe<Sort>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
};

export type CategoryCard = {
  bigImagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  smallImagePath: Scalars['String']['output'];
};

export type CategoryQueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
};

export type CreateBrandInput = {
  about: Scalars['String']['input'];
  city: Scalars['String']['input'];
  logoPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateProductInput = {
  about: Scalars['String']['input'];
  minQuantity: Scalars['Float']['input'];
  minQuantity2?: InputMaybe<Scalars['Float']['input']>;
  minQuantity3?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  price2?: InputMaybe<Scalars['Float']['input']>;
  price3?: InputMaybe<Scalars['Float']['input']>;
};

export type FullestQueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
};

export type JwtAuthConfirmationInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type JwtAuthLoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type JwtAuthResetInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type JwtAuthVerificationInput = {
  email: Scalars['String']['input'];
};

export type Mutation = {
  balanceTopUp: YookassaPayment;
  createBrand: BrandCard;
  createProduct: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteProductAdmin: Scalars['Boolean']['output'];
  jwtConfirmation: Scalars['Boolean']['output'];
  jwtLogin: SessionUserResponse;
  jwtReset: Scalars['Boolean']['output'];
  jwtVerification: Scalars['Boolean']['output'];
  logout: Scalars['Boolean']['output'];
  placeOrder: NestedOrder;
  telegramAuth: SessionUserResponse;
  updateBrand: Brand;
  updateBrandAdmin: Brand;
  updateProduct: Product;
  updateProductAdmin: Product;
  updateUserProfile: Scalars['Boolean']['output'];
};


export type MutationBalanceTopUpArgs = {
  data: YookassaInput;
};


export type MutationCreateBrandArgs = {
  input: CreateBrandInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductAdminArgs = {
  brandId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type MutationJwtConfirmationArgs = {
  data: JwtAuthConfirmationInput;
};


export type MutationJwtLoginArgs = {
  data: JwtAuthLoginInput;
};


export type MutationJwtResetArgs = {
  data: JwtAuthResetInput;
};


export type MutationJwtVerificationArgs = {
  data: JwtAuthVerificationInput;
};


export type MutationPlaceOrderArgs = {
  data: OrderInput;
};


export type MutationTelegramAuthArgs = {
  data: TelegramAuthInput;
};


export type MutationUpdateBrandArgs = {
  id: Scalars['Float']['input'];
  input: UpdateBrandInput;
};


export type MutationUpdateBrandAdminArgs = {
  id: Scalars['Float']['input'];
  input: UpdateBrandInputAdmin;
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductAdminArgs = {
  brandId: Scalars['Int']['input'];
  data: UpdateProductInputAdmin;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserInput;
};

export type NestedBrand = {
  about?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type NestedCategory = {
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type NestedOrder = {
  expirationDate?: Maybe<Scalars['String']['output']>;
  isLittleLeft?: Maybe<Scalars['Boolean']['output']>;
  tariff: NestedTariff;
};

export type NestedProductBrand = {
  about?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isBrandOwner: Scalars['Boolean']['output'];
  isSubscribed: Scalars['Boolean']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rating: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  telegram?: Maybe<Scalars['String']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type NestedTariff = {
  type: TariffType;
};

export type OrderInput = {
  productId: Scalars['Int']['input'];
  tariffType: TariffType;
};

export type Price = {
  minQuantity: Scalars['String']['output'];
  price: Scalars['String']['output'];
};

export type Product = {
  about: Scalars['String']['output'];
  category: NestedCategory;
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagesPaths: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posterPath: Scalars['String']['output'];
  prices: Array<Price>;
  provider: NestedProductBrand;
  rating: Scalars['String']['output'];
  reviews: Array<ReviewCard>;
  reviewsCount: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
  videoPath?: Maybe<Scalars['String']['output']>;
  views: Scalars['Int']['output'];
};

export type ProductCard = {
  category: NestedCategory;
  city: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  maxPrice: Scalars['Int']['output'];
  minPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posterPath: Scalars['String']['output'];
  provider: NestedBrand;
  ratesCount: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

export type ProductQueryInput = {
  brandCity?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  views?: InputMaybe<Sort>;
};

export type Profile = {
  email?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  account: Account;
  advertisements: AllAdvertisements;
  advertisementsByTypes: Array<Advertising>;
  announcements: AllAnnouncements;
  announcementsAdmin: AllAnnouncementsAdmin;
  brand: Brand;
  brands: AllBrands;
  categories: AllCategories;
  currentProduct: Product;
  jwtRegister: SessionUserResponse;
  products: AllProducts;
  reviews: AllReviews;
  selectCategories: Array<SelectCategory>;
  user: SessionUser;
};


export type QueryAdvertisementsArgs = {
  query: FullestQueryInput;
};


export type QueryAdvertisementsByTypesArgs = {
  types: Array<AdvertisingType>;
};


export type QueryAnnouncementsArgs = {
  query: ProductQueryInput;
};


export type QueryAnnouncementsAdminArgs = {
  query: ProductQueryInput;
};


export type QueryBrandArgs = {
  slug: Scalars['String']['input'];
};


export type QueryBrandsArgs = {
  query: BrandQueryInput;
};


export type QueryCategoriesArgs = {
  query: CategoryQueryInput;
};


export type QueryCurrentProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJwtRegisterArgs = {
  token: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  query: ProductQueryInput;
};


export type QueryReviewsArgs = {
  query: QueryInput;
};

export type QueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
};

export type ReviewCard = {
  authorName: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

export type SelectCategory = {
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Seo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SessionProfile = {
  email?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type SessionUser = {
  profile: SessionProfile;
  role: UserRole;
};

export type SessionUserResponse = {
  user: SessionUser;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC',
  Rate = 'RATE'
}

export type Tariff = {
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  type: TariffType;
};

export enum TariffType {
  Fill = 'FILL',
  Top = 'TOP',
  Vip = 'VIP'
}

export type TelegramAuthInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateBrandInput = {
  about: Scalars['String']['input'];
  city: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateBrandInputAdmin = {
  about: Scalars['String']['input'];
  city: Scalars['String']['input'];
  logoPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type UpdateProductInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  minQuantity: Scalars['Float']['input'];
  minQuantity2?: InputMaybe<Scalars['Float']['input']>;
  minQuantity3?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  price2?: InputMaybe<Scalars['Float']['input']>;
  price3?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateProductInputAdmin = {
  about?: InputMaybe<Scalars['String']['input']>;
  imagesPaths: Array<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posterPath: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Provider = 'PROVIDER'
}

export type YookassaInput = {
  amount: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type YookassaPayment = {
  paymentUrl: Scalars['String']['output'];
};

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type JwtConfirmationMutationVariables = Exact<{
  data: JwtAuthConfirmationInput;
}>;


export type JwtConfirmationMutation = { jwtConfirmation: boolean };

export type JwtLoginMutationVariables = Exact<{
  data: JwtAuthLoginInput;
}>;


export type JwtLoginMutation = { jwtLogin: { user: { role: UserRole, profile: { email?: string | null, login: string, phone?: string | null } } } };

export type JwtResetMutationVariables = Exact<{
  data: JwtAuthResetInput;
}>;


export type JwtResetMutation = { jwtReset: boolean };

export type JwtVerificationMutationVariables = Exact<{
  data: JwtAuthVerificationInput;
}>;


export type JwtVerificationMutation = { jwtVerification: boolean };

export type TelegramAuthMutationVariables = Exact<{
  data: TelegramAuthInput;
}>;


export type TelegramAuthMutation = { telegramAuth: { user: { role: UserRole, profile: { email?: string | null, login: string, phone?: string | null } } } };

export type BalanceTopUpMutationVariables = Exact<{
  data: YookassaInput;
}>;


export type BalanceTopUpMutation = { balanceTopUp: { paymentUrl: string } };

export type CreateBrandMutationVariables = Exact<{
  input: CreateBrandInput;
}>;


export type CreateBrandMutation = { createBrand: { id: number, name: string, slug: string, city: string, logoPath: string, about?: string | null, rating: string } };

export type UpdateBrandMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  input: UpdateBrandInput;
}>;


export type UpdateBrandMutation = { updateBrand: { id: number, name: string, city: string, about?: string | null } };

export type UpdateBrandAdminMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  input: UpdateBrandInputAdmin;
}>;


export type UpdateBrandAdminMutation = { updateBrandAdmin: { id: number, name: string, city: string, logoPath: string, slug: string, about?: string | null } };

export type PlaceOrderMutationVariables = Exact<{
  data: OrderInput;
}>;


export type PlaceOrderMutation = { placeOrder: { expirationDate?: string | null, isLittleLeft?: boolean | null, tariff: { type: TariffType } } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { deleteProduct: boolean };

export type DeleteProductAdminMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  brandId: Scalars['Int']['input'];
}>;


export type DeleteProductAdminMutation = { deleteProductAdmin: boolean };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { createProduct: boolean };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateProductInput;
}>;


export type UpdateProductMutation = { updateProduct: { id: number, name: string, about: string } };

export type UpdateProductAdminMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateProductInputAdmin;
  brandId: Scalars['Int']['input'];
}>;


export type UpdateProductAdminMutation = { updateProductAdmin: { id: number, name: string, about: string } };

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserProfileMutation = { updateUserProfile: boolean };

export type AdvertisementsByTypesQueryVariables = Exact<{
  types: Array<AdvertisingType> | AdvertisingType;
}>;


export type AdvertisementsByTypesQuery = { advertisementsByTypes: Array<{ id: number, smallImagePath?: string | null, bigImagePath: string, url?: string | null, alt?: string | null, resolution?: string | null, type: AdvertisingType }> };

export type AdvertisementsQueryVariables = Exact<{
  query: FullestQueryInput;
}>;


export type AdvertisementsQuery = { advertisements: { count: number, advertisements: Array<{ id: number, smallImagePath?: string | null, bigImagePath: string, url?: string | null, alt?: string | null, resolution?: string | null, type: AdvertisingType }> } };

export type JwtRegisterQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type JwtRegisterQuery = { jwtRegister: { user: { role: UserRole, profile: { email?: string | null, login: string, phone?: string | null } } } };

export type BrandQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type BrandQuery = { brand: { id: number, name: string, logoPath: string, city: string, postedCount: number, rating: string, phone?: string | null, whatsapp?: string | null, telegram?: string | null, isSubscribed: boolean, isBrandOwner: boolean, about?: string | null, reviewsCount: number, createdAt: string, reviews: Array<{ id: number, authorName: string, comment: string, rating: number, createdAt: string }> } };

export type BrandsQueryVariables = Exact<{
  query: BrandQueryInput;
}>;


export type BrandsQuery = { brands: { count: number, brands: Array<{ id: number, name: string, slug: string, logoPath: string, rating: string, reviewsCount: number, about?: string | null, city: string, category: { name: string, slug: string } }> } };

export type CategoriesQueryVariables = Exact<{
  query: CategoryQueryInput;
}>;


export type CategoriesQuery = { categories: { count: number, categories: Array<{ name: string, slug: string, smallImagePath: string, bigImagePath: string }> } };

export type SelectCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectCategoriesQuery = { selectCategories: Array<{ id: number, name: string }> };

export type CurrentProductQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CurrentProductQuery = { currentProduct: { id: number, name: string, about: string, sku: string, posterPath: string, videoPath?: string | null, imagesPaths: Array<string>, rating: string, reviewsCount: number, views: number, createdAt: string, prices: Array<{ price: string, minQuantity: string }>, reviews: Array<{ id: number, authorName: string, comment: string, rating: number, createdAt: string }>, category: { name: string, slug: string }, provider: { id: number, rating: string, phone?: string | null, whatsapp?: string | null, telegram?: string | null, name: string, slug: string, city: string, logoPath: string, isSubscribed: boolean, isBrandOwner: boolean } } };

export type ProductsQueryVariables = Exact<{
  query: ProductQueryInput;
}>;


export type ProductsQuery = { products: { count: number, products: Array<{ id: number, name: string, posterPath: string, minPrice: number, maxPrice: number, rating: number, ratesCount: number, category: { name: string, slug: string }, provider: { name: string, slug: string, logoPath: string, city: string } }> } };

export type ReviewsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ReviewsQuery = { reviews: { count: number, reviews: Array<{ id: number }> } };

export type AccountQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountQuery = { account: { brand?: { id: number, name: string, about?: string | null, balance: number, email?: string | null, phone?: string | null, whatsapp?: string | null, telegram?: string | null, logoPath: string, city: string, postedCount: number, subscribers: Array<string>, createdAt: string, category: { id: number, name: string } } | null, tariffs: Array<{ price: number, duration?: number | null, description?: string | null, type: TariffType }>, categories: Array<{ id: number, name: string }> } };

export type AnnouncementsQueryVariables = Exact<{
  query: ProductQueryInput;
}>;


export type AnnouncementsQuery = { announcements: { count: number, announcements: Array<{ id: number, name: string, posterPath: string, minPrice: number, maxPrice: number, rating: string, city: string, sku: string, views: number, createdAt: string, about: string, pricesFull: Array<{ price: string, minQuantity: string }>, orders: Array<{ expirationDate?: string | null, isLittleLeft?: boolean | null, tariff: { type: TariffType } }> }> } };

export type AnnouncementsAdminQueryVariables = Exact<{
  query: ProductQueryInput;
}>;


export type AnnouncementsAdminQuery = { announcementsAdmin: { count: number, announcements: Array<{ id: number, name: string, posterPath: string, minPrice: number, maxPrice: number, rating: string, city: string, sku: string, views: number, createdAt: string, about: string, pricesFull: Array<{ price: string, minQuantity: string }>, orders: Array<{ expirationDate?: string | null, isLittleLeft?: boolean | null, tariff: { type: TariffType } }> }> } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { user: { role: UserRole, profile: { email?: string | null, login: string, phone?: string | null } } };


export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const JwtConfirmationDocument = gql`
    mutation JwtConfirmation($data: JwtAuthConfirmationInput!) {
  jwtConfirmation(data: $data)
}
    `;
export type JwtConfirmationMutationFn = Apollo.MutationFunction<JwtConfirmationMutation, JwtConfirmationMutationVariables>;

/**
 * __useJwtConfirmationMutation__
 *
 * To run a mutation, you first call `useJwtConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtConfirmationMutation, { data, loading, error }] = useJwtConfirmationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtConfirmationMutation(baseOptions?: Apollo.MutationHookOptions<JwtConfirmationMutation, JwtConfirmationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtConfirmationMutation, JwtConfirmationMutationVariables>(JwtConfirmationDocument, options);
      }
export type JwtConfirmationMutationHookResult = ReturnType<typeof useJwtConfirmationMutation>;
export type JwtConfirmationMutationResult = Apollo.MutationResult<JwtConfirmationMutation>;
export type JwtConfirmationMutationOptions = Apollo.BaseMutationOptions<JwtConfirmationMutation, JwtConfirmationMutationVariables>;
export const JwtLoginDocument = gql`
    mutation JwtLogin($data: JwtAuthLoginInput!) {
  jwtLogin(data: $data) {
    user {
      profile {
        email
        login
        phone
      }
      role
    }
  }
}
    `;
export type JwtLoginMutationFn = Apollo.MutationFunction<JwtLoginMutation, JwtLoginMutationVariables>;

/**
 * __useJwtLoginMutation__
 *
 * To run a mutation, you first call `useJwtLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtLoginMutation, { data, loading, error }] = useJwtLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtLoginMutation(baseOptions?: Apollo.MutationHookOptions<JwtLoginMutation, JwtLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtLoginMutation, JwtLoginMutationVariables>(JwtLoginDocument, options);
      }
export type JwtLoginMutationHookResult = ReturnType<typeof useJwtLoginMutation>;
export type JwtLoginMutationResult = Apollo.MutationResult<JwtLoginMutation>;
export type JwtLoginMutationOptions = Apollo.BaseMutationOptions<JwtLoginMutation, JwtLoginMutationVariables>;
export const JwtResetDocument = gql`
    mutation JwtReset($data: JwtAuthResetInput!) {
  jwtReset(data: $data)
}
    `;
export type JwtResetMutationFn = Apollo.MutationFunction<JwtResetMutation, JwtResetMutationVariables>;

/**
 * __useJwtResetMutation__
 *
 * To run a mutation, you first call `useJwtResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtResetMutation, { data, loading, error }] = useJwtResetMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtResetMutation(baseOptions?: Apollo.MutationHookOptions<JwtResetMutation, JwtResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtResetMutation, JwtResetMutationVariables>(JwtResetDocument, options);
      }
export type JwtResetMutationHookResult = ReturnType<typeof useJwtResetMutation>;
export type JwtResetMutationResult = Apollo.MutationResult<JwtResetMutation>;
export type JwtResetMutationOptions = Apollo.BaseMutationOptions<JwtResetMutation, JwtResetMutationVariables>;
export const JwtVerificationDocument = gql`
    mutation JwtVerification($data: JwtAuthVerificationInput!) {
  jwtVerification(data: $data)
}
    `;
export type JwtVerificationMutationFn = Apollo.MutationFunction<JwtVerificationMutation, JwtVerificationMutationVariables>;

/**
 * __useJwtVerificationMutation__
 *
 * To run a mutation, you first call `useJwtVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtVerificationMutation, { data, loading, error }] = useJwtVerificationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtVerificationMutation(baseOptions?: Apollo.MutationHookOptions<JwtVerificationMutation, JwtVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtVerificationMutation, JwtVerificationMutationVariables>(JwtVerificationDocument, options);
      }
export type JwtVerificationMutationHookResult = ReturnType<typeof useJwtVerificationMutation>;
export type JwtVerificationMutationResult = Apollo.MutationResult<JwtVerificationMutation>;
export type JwtVerificationMutationOptions = Apollo.BaseMutationOptions<JwtVerificationMutation, JwtVerificationMutationVariables>;
export const TelegramAuthDocument = gql`
    mutation TelegramAuth($data: TelegramAuthInput!) {
  telegramAuth(data: $data) {
    user {
      profile {
        email
        login
        phone
      }
      role
    }
  }
}
    `;
export type TelegramAuthMutationFn = Apollo.MutationFunction<TelegramAuthMutation, TelegramAuthMutationVariables>;

/**
 * __useTelegramAuthMutation__
 *
 * To run a mutation, you first call `useTelegramAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTelegramAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [telegramAuthMutation, { data, loading, error }] = useTelegramAuthMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useTelegramAuthMutation(baseOptions?: Apollo.MutationHookOptions<TelegramAuthMutation, TelegramAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TelegramAuthMutation, TelegramAuthMutationVariables>(TelegramAuthDocument, options);
      }
export type TelegramAuthMutationHookResult = ReturnType<typeof useTelegramAuthMutation>;
export type TelegramAuthMutationResult = Apollo.MutationResult<TelegramAuthMutation>;
export type TelegramAuthMutationOptions = Apollo.BaseMutationOptions<TelegramAuthMutation, TelegramAuthMutationVariables>;
export const BalanceTopUpDocument = gql`
    mutation BalanceTopUp($data: YookassaInput!) {
  balanceTopUp(data: $data) {
    paymentUrl
  }
}
    `;
export type BalanceTopUpMutationFn = Apollo.MutationFunction<BalanceTopUpMutation, BalanceTopUpMutationVariables>;

/**
 * __useBalanceTopUpMutation__
 *
 * To run a mutation, you first call `useBalanceTopUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBalanceTopUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [balanceTopUpMutation, { data, loading, error }] = useBalanceTopUpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useBalanceTopUpMutation(baseOptions?: Apollo.MutationHookOptions<BalanceTopUpMutation, BalanceTopUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BalanceTopUpMutation, BalanceTopUpMutationVariables>(BalanceTopUpDocument, options);
      }
export type BalanceTopUpMutationHookResult = ReturnType<typeof useBalanceTopUpMutation>;
export type BalanceTopUpMutationResult = Apollo.MutationResult<BalanceTopUpMutation>;
export type BalanceTopUpMutationOptions = Apollo.BaseMutationOptions<BalanceTopUpMutation, BalanceTopUpMutationVariables>;
export const CreateBrandDocument = gql`
    mutation CreateBrand($input: CreateBrandInput!) {
  createBrand(input: $input) {
    id
    name
    slug
    city
    logoPath
    about
    rating
  }
}
    `;
export type CreateBrandMutationFn = Apollo.MutationFunction<CreateBrandMutation, CreateBrandMutationVariables>;

/**
 * __useCreateBrandMutation__
 *
 * To run a mutation, you first call `useCreateBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBrandMutation, { data, loading, error }] = useCreateBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBrandMutation(baseOptions?: Apollo.MutationHookOptions<CreateBrandMutation, CreateBrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBrandMutation, CreateBrandMutationVariables>(CreateBrandDocument, options);
      }
export type CreateBrandMutationHookResult = ReturnType<typeof useCreateBrandMutation>;
export type CreateBrandMutationResult = Apollo.MutationResult<CreateBrandMutation>;
export type CreateBrandMutationOptions = Apollo.BaseMutationOptions<CreateBrandMutation, CreateBrandMutationVariables>;
export const UpdateBrandDocument = gql`
    mutation UpdateBrand($id: Float!, $input: UpdateBrandInput!) {
  updateBrand(id: $id, input: $input) {
    id
    name
    city
    about
  }
}
    `;
export type UpdateBrandMutationFn = Apollo.MutationFunction<UpdateBrandMutation, UpdateBrandMutationVariables>;

/**
 * __useUpdateBrandMutation__
 *
 * To run a mutation, you first call `useUpdateBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBrandMutation, { data, loading, error }] = useUpdateBrandMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBrandMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBrandMutation, UpdateBrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBrandMutation, UpdateBrandMutationVariables>(UpdateBrandDocument, options);
      }
export type UpdateBrandMutationHookResult = ReturnType<typeof useUpdateBrandMutation>;
export type UpdateBrandMutationResult = Apollo.MutationResult<UpdateBrandMutation>;
export type UpdateBrandMutationOptions = Apollo.BaseMutationOptions<UpdateBrandMutation, UpdateBrandMutationVariables>;
export const UpdateBrandAdminDocument = gql`
    mutation UpdateBrandAdmin($id: Float!, $input: UpdateBrandInputAdmin!) {
  updateBrandAdmin(id: $id, input: $input) {
    id
    name
    city
    logoPath
    slug
    about
  }
}
    `;
export type UpdateBrandAdminMutationFn = Apollo.MutationFunction<UpdateBrandAdminMutation, UpdateBrandAdminMutationVariables>;

/**
 * __useUpdateBrandAdminMutation__
 *
 * To run a mutation, you first call `useUpdateBrandAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBrandAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBrandAdminMutation, { data, loading, error }] = useUpdateBrandAdminMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBrandAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBrandAdminMutation, UpdateBrandAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBrandAdminMutation, UpdateBrandAdminMutationVariables>(UpdateBrandAdminDocument, options);
      }
export type UpdateBrandAdminMutationHookResult = ReturnType<typeof useUpdateBrandAdminMutation>;
export type UpdateBrandAdminMutationResult = Apollo.MutationResult<UpdateBrandAdminMutation>;
export type UpdateBrandAdminMutationOptions = Apollo.BaseMutationOptions<UpdateBrandAdminMutation, UpdateBrandAdminMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($data: OrderInput!) {
  placeOrder(data: $data) {
    expirationDate
    isLittleLeft
    tariff {
      type
    }
  }
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  deleteProduct(id: $id)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DeleteProductAdminDocument = gql`
    mutation DeleteProductAdmin($id: Int!, $brandId: Int!) {
  deleteProductAdmin(id: $id, brandId: $brandId)
}
    `;
export type DeleteProductAdminMutationFn = Apollo.MutationFunction<DeleteProductAdminMutation, DeleteProductAdminMutationVariables>;

/**
 * __useDeleteProductAdminMutation__
 *
 * To run a mutation, you first call `useDeleteProductAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductAdminMutation, { data, loading, error }] = useDeleteProductAdminMutation({
 *   variables: {
 *      id: // value for 'id'
 *      brandId: // value for 'brandId'
 *   },
 * });
 */
export function useDeleteProductAdminMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductAdminMutation, DeleteProductAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductAdminMutation, DeleteProductAdminMutationVariables>(DeleteProductAdminDocument, options);
      }
export type DeleteProductAdminMutationHookResult = ReturnType<typeof useDeleteProductAdminMutation>;
export type DeleteProductAdminMutationResult = Apollo.MutationResult<DeleteProductAdminMutation>;
export type DeleteProductAdminMutationOptions = Apollo.BaseMutationOptions<DeleteProductAdminMutation, DeleteProductAdminMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input)
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: Int!, $data: UpdateProductInput!) {
  updateProduct(id: $id, data: $data) {
    id
    name
    about
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const UpdateProductAdminDocument = gql`
    mutation UpdateProductAdmin($id: Int!, $data: UpdateProductInputAdmin!, $brandId: Int!) {
  updateProductAdmin(id: $id, data: $data, brandId: $brandId) {
    id
    name
    about
  }
}
    `;
export type UpdateProductAdminMutationFn = Apollo.MutationFunction<UpdateProductAdminMutation, UpdateProductAdminMutationVariables>;

/**
 * __useUpdateProductAdminMutation__
 *
 * To run a mutation, you first call `useUpdateProductAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductAdminMutation, { data, loading, error }] = useUpdateProductAdminMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      brandId: // value for 'brandId'
 *   },
 * });
 */
export function useUpdateProductAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductAdminMutation, UpdateProductAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductAdminMutation, UpdateProductAdminMutationVariables>(UpdateProductAdminDocument, options);
      }
export type UpdateProductAdminMutationHookResult = ReturnType<typeof useUpdateProductAdminMutation>;
export type UpdateProductAdminMutationResult = Apollo.MutationResult<UpdateProductAdminMutation>;
export type UpdateProductAdminMutationOptions = Apollo.BaseMutationOptions<UpdateProductAdminMutation, UpdateProductAdminMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: UpdateUserInput!) {
  updateUserProfile(input: $input)
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const AdvertisementsByTypesDocument = gql`
    query AdvertisementsByTypes($types: [AdvertisingType!]!) {
  advertisementsByTypes(types: $types) {
    id
    smallImagePath
    bigImagePath
    url
    alt
    resolution
    type
  }
}
    `;

/**
 * __useAdvertisementsByTypesQuery__
 *
 * To run a query within a React component, call `useAdvertisementsByTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvertisementsByTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvertisementsByTypesQuery({
 *   variables: {
 *      types: // value for 'types'
 *   },
 * });
 */
export function useAdvertisementsByTypesQuery(baseOptions: Apollo.QueryHookOptions<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables> & ({ variables: AdvertisementsByTypesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>(AdvertisementsByTypesDocument, options);
      }
export function useAdvertisementsByTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>(AdvertisementsByTypesDocument, options);
        }
export function useAdvertisementsByTypesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>(AdvertisementsByTypesDocument, options);
        }
export type AdvertisementsByTypesQueryHookResult = ReturnType<typeof useAdvertisementsByTypesQuery>;
export type AdvertisementsByTypesLazyQueryHookResult = ReturnType<typeof useAdvertisementsByTypesLazyQuery>;
export type AdvertisementsByTypesSuspenseQueryHookResult = ReturnType<typeof useAdvertisementsByTypesSuspenseQuery>;
export type AdvertisementsByTypesQueryResult = Apollo.QueryResult<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>;
export const AdvertisementsDocument = gql`
    query Advertisements($query: FullestQueryInput!) {
  advertisements(query: $query) {
    advertisements {
      id
      smallImagePath
      bigImagePath
      url
      alt
      resolution
      type
    }
    count
  }
}
    `;

/**
 * __useAdvertisementsQuery__
 *
 * To run a query within a React component, call `useAdvertisementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvertisementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvertisementsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useAdvertisementsQuery(baseOptions: Apollo.QueryHookOptions<AdvertisementsQuery, AdvertisementsQueryVariables> & ({ variables: AdvertisementsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvertisementsQuery, AdvertisementsQueryVariables>(AdvertisementsDocument, options);
      }
export function useAdvertisementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvertisementsQuery, AdvertisementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvertisementsQuery, AdvertisementsQueryVariables>(AdvertisementsDocument, options);
        }
export function useAdvertisementsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvertisementsQuery, AdvertisementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvertisementsQuery, AdvertisementsQueryVariables>(AdvertisementsDocument, options);
        }
export type AdvertisementsQueryHookResult = ReturnType<typeof useAdvertisementsQuery>;
export type AdvertisementsLazyQueryHookResult = ReturnType<typeof useAdvertisementsLazyQuery>;
export type AdvertisementsSuspenseQueryHookResult = ReturnType<typeof useAdvertisementsSuspenseQuery>;
export type AdvertisementsQueryResult = Apollo.QueryResult<AdvertisementsQuery, AdvertisementsQueryVariables>;
export const JwtRegisterDocument = gql`
    query JwtRegister($token: String!) {
  jwtRegister(token: $token) {
    user {
      profile {
        email
        login
        phone
      }
      role
    }
  }
}
    `;

/**
 * __useJwtRegisterQuery__
 *
 * To run a query within a React component, call `useJwtRegisterQuery` and pass it any options that fit your needs.
 * When your component renders, `useJwtRegisterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJwtRegisterQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useJwtRegisterQuery(baseOptions: Apollo.QueryHookOptions<JwtRegisterQuery, JwtRegisterQueryVariables> & ({ variables: JwtRegisterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JwtRegisterQuery, JwtRegisterQueryVariables>(JwtRegisterDocument, options);
      }
export function useJwtRegisterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JwtRegisterQuery, JwtRegisterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JwtRegisterQuery, JwtRegisterQueryVariables>(JwtRegisterDocument, options);
        }
export function useJwtRegisterSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<JwtRegisterQuery, JwtRegisterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JwtRegisterQuery, JwtRegisterQueryVariables>(JwtRegisterDocument, options);
        }
export type JwtRegisterQueryHookResult = ReturnType<typeof useJwtRegisterQuery>;
export type JwtRegisterLazyQueryHookResult = ReturnType<typeof useJwtRegisterLazyQuery>;
export type JwtRegisterSuspenseQueryHookResult = ReturnType<typeof useJwtRegisterSuspenseQuery>;
export type JwtRegisterQueryResult = Apollo.QueryResult<JwtRegisterQuery, JwtRegisterQueryVariables>;
export const BrandDocument = gql`
    query Brand($slug: String!) {
  brand(slug: $slug) {
    id
    name
    logoPath
    city
    postedCount
    rating
    phone
    whatsapp
    telegram
    isSubscribed
    isBrandOwner
    about
    reviews {
      id
      authorName
      comment
      rating
      createdAt
    }
    reviewsCount
    createdAt
  }
}
    `;

/**
 * __useBrandQuery__
 *
 * To run a query within a React component, call `useBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBrandQuery(baseOptions: Apollo.QueryHookOptions<BrandQuery, BrandQueryVariables> & ({ variables: BrandQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
      }
export function useBrandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandQuery, BrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
        }
export function useBrandSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandQuery, BrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
        }
export type BrandQueryHookResult = ReturnType<typeof useBrandQuery>;
export type BrandLazyQueryHookResult = ReturnType<typeof useBrandLazyQuery>;
export type BrandSuspenseQueryHookResult = ReturnType<typeof useBrandSuspenseQuery>;
export type BrandQueryResult = Apollo.QueryResult<BrandQuery, BrandQueryVariables>;
export const BrandsDocument = gql`
    query Brands($query: BrandQueryInput!) {
  brands(query: $query) {
    brands {
      id
      name
      slug
      logoPath
      rating
      reviewsCount
      about
      city
      category {
        name
        slug
      }
    }
    count
  }
}
    `;

/**
 * __useBrandsQuery__
 *
 * To run a query within a React component, call `useBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useBrandsQuery(baseOptions: Apollo.QueryHookOptions<BrandsQuery, BrandsQueryVariables> & ({ variables: BrandsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
      }
export function useBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export function useBrandsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export type BrandsQueryHookResult = ReturnType<typeof useBrandsQuery>;
export type BrandsLazyQueryHookResult = ReturnType<typeof useBrandsLazyQuery>;
export type BrandsSuspenseQueryHookResult = ReturnType<typeof useBrandsSuspenseQuery>;
export type BrandsQueryResult = Apollo.QueryResult<BrandsQuery, BrandsQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($query: CategoryQueryInput!) {
  categories(query: $query) {
    categories {
      name
      slug
      smallImagePath
      bigImagePath
    }
    count
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables> & ({ variables: CategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const SelectCategoriesDocument = gql`
    query SelectCategories {
  selectCategories {
    id
    name
  }
}
    `;

/**
 * __useSelectCategoriesQuery__
 *
 * To run a query within a React component, call `useSelectCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<SelectCategoriesQuery, SelectCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectCategoriesQuery, SelectCategoriesQueryVariables>(SelectCategoriesDocument, options);
      }
export function useSelectCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectCategoriesQuery, SelectCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectCategoriesQuery, SelectCategoriesQueryVariables>(SelectCategoriesDocument, options);
        }
export function useSelectCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SelectCategoriesQuery, SelectCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SelectCategoriesQuery, SelectCategoriesQueryVariables>(SelectCategoriesDocument, options);
        }
export type SelectCategoriesQueryHookResult = ReturnType<typeof useSelectCategoriesQuery>;
export type SelectCategoriesLazyQueryHookResult = ReturnType<typeof useSelectCategoriesLazyQuery>;
export type SelectCategoriesSuspenseQueryHookResult = ReturnType<typeof useSelectCategoriesSuspenseQuery>;
export type SelectCategoriesQueryResult = Apollo.QueryResult<SelectCategoriesQuery, SelectCategoriesQueryVariables>;
export const CurrentProductDocument = gql`
    query CurrentProduct($id: Int!) {
  currentProduct(id: $id) {
    id
    name
    about
    sku
    posterPath
    videoPath
    imagesPaths
    prices {
      price
      minQuantity
    }
    rating
    reviews {
      id
      authorName
      comment
      rating
      createdAt
    }
    reviewsCount
    category {
      name
      slug
    }
    provider {
      id
      rating
      phone
      whatsapp
      telegram
      name
      slug
      city
      logoPath
      isSubscribed
      isBrandOwner
    }
    views
    createdAt
  }
}
    `;

/**
 * __useCurrentProductQuery__
 *
 * To run a query within a React component, call `useCurrentProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCurrentProductQuery(baseOptions: Apollo.QueryHookOptions<CurrentProductQuery, CurrentProductQueryVariables> & ({ variables: CurrentProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentProductQuery, CurrentProductQueryVariables>(CurrentProductDocument, options);
      }
export function useCurrentProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentProductQuery, CurrentProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentProductQuery, CurrentProductQueryVariables>(CurrentProductDocument, options);
        }
export function useCurrentProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CurrentProductQuery, CurrentProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentProductQuery, CurrentProductQueryVariables>(CurrentProductDocument, options);
        }
export type CurrentProductQueryHookResult = ReturnType<typeof useCurrentProductQuery>;
export type CurrentProductLazyQueryHookResult = ReturnType<typeof useCurrentProductLazyQuery>;
export type CurrentProductSuspenseQueryHookResult = ReturnType<typeof useCurrentProductSuspenseQuery>;
export type CurrentProductQueryResult = Apollo.QueryResult<CurrentProductQuery, CurrentProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($query: ProductQueryInput!) {
  products(query: $query) {
    products {
      id
      name
      posterPath
      minPrice
      maxPrice
      rating
      ratesCount
      category {
        name
        slug
      }
      provider {
        name
        slug
        logoPath
        city
      }
    }
    count
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews($query: QueryInput!) {
  reviews(query: $query) {
    reviews {
      id
    }
    count
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables> & ({ variables: ReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export function useReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsSuspenseQueryHookResult = ReturnType<typeof useReviewsSuspenseQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const AccountDocument = gql`
    query Account {
  account {
    brand {
      id
      name
      about
      balance
      email
      phone
      whatsapp
      telegram
      logoPath
      city
      postedCount
      subscribers
      category {
        id
        name
      }
      createdAt
    }
    tariffs {
      price
      duration
      description
      type
    }
    categories {
      id
      name
    }
  }
}
    `;

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountQuery(baseOptions?: Apollo.QueryHookOptions<AccountQuery, AccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
      }
export function useAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export function useAccountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountSuspenseQueryHookResult = ReturnType<typeof useAccountSuspenseQuery>;
export type AccountQueryResult = Apollo.QueryResult<AccountQuery, AccountQueryVariables>;
export const AnnouncementsDocument = gql`
    query Announcements($query: ProductQueryInput!) {
  announcements(query: $query) {
    announcements {
      id
      name
      posterPath
      minPrice
      maxPrice
      rating
      pricesFull {
        price
        minQuantity
      }
      city
      sku
      views
      createdAt
      about
      orders {
        expirationDate
        isLittleLeft
        tariff {
          type
        }
      }
    }
    count
  }
}
    `;

/**
 * __useAnnouncementsQuery__
 *
 * To run a query within a React component, call `useAnnouncementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnouncementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnouncementsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useAnnouncementsQuery(baseOptions: Apollo.QueryHookOptions<AnnouncementsQuery, AnnouncementsQueryVariables> & ({ variables: AnnouncementsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnouncementsQuery, AnnouncementsQueryVariables>(AnnouncementsDocument, options);
      }
export function useAnnouncementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnouncementsQuery, AnnouncementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnouncementsQuery, AnnouncementsQueryVariables>(AnnouncementsDocument, options);
        }
export function useAnnouncementsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AnnouncementsQuery, AnnouncementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnnouncementsQuery, AnnouncementsQueryVariables>(AnnouncementsDocument, options);
        }
export type AnnouncementsQueryHookResult = ReturnType<typeof useAnnouncementsQuery>;
export type AnnouncementsLazyQueryHookResult = ReturnType<typeof useAnnouncementsLazyQuery>;
export type AnnouncementsSuspenseQueryHookResult = ReturnType<typeof useAnnouncementsSuspenseQuery>;
export type AnnouncementsQueryResult = Apollo.QueryResult<AnnouncementsQuery, AnnouncementsQueryVariables>;
export const AnnouncementsAdminDocument = gql`
    query AnnouncementsAdmin($query: ProductQueryInput!) {
  announcementsAdmin(query: $query) {
    announcements {
      id
      name
      posterPath
      minPrice
      maxPrice
      rating
      pricesFull {
        price
        minQuantity
      }
      city
      sku
      views
      createdAt
      about
      orders {
        expirationDate
        isLittleLeft
        tariff {
          type
        }
      }
    }
    count
  }
}
    `;

/**
 * __useAnnouncementsAdminQuery__
 *
 * To run a query within a React component, call `useAnnouncementsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnouncementsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnouncementsAdminQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useAnnouncementsAdminQuery(baseOptions: Apollo.QueryHookOptions<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables> & ({ variables: AnnouncementsAdminQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables>(AnnouncementsAdminDocument, options);
      }
export function useAnnouncementsAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables>(AnnouncementsAdminDocument, options);
        }
export function useAnnouncementsAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables>(AnnouncementsAdminDocument, options);
        }
export type AnnouncementsAdminQueryHookResult = ReturnType<typeof useAnnouncementsAdminQuery>;
export type AnnouncementsAdminLazyQueryHookResult = ReturnType<typeof useAnnouncementsAdminLazyQuery>;
export type AnnouncementsAdminSuspenseQueryHookResult = ReturnType<typeof useAnnouncementsAdminSuspenseQuery>;
export type AnnouncementsAdminQueryResult = Apollo.QueryResult<AnnouncementsAdminQuery, AnnouncementsAdminQueryVariables>;
export const UserDocument = gql`
    query User {
  user {
    profile {
      email
      login
      phone
    }
    role
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
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;