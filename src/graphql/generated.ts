import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Auth = {
  __typename?: 'Auth';
  expiration: Scalars['Int'];
  token: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateOrganizationInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateProjectInput = {
  causes?: InputMaybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  endDate?: InputMaybe<Scalars['Date']>;
  isRecurring: Scalars['Boolean'];
  name: Scalars['String'];
  organizationId: Scalars['ID'];
  recurringDays?: InputMaybe<Array<InputMaybe<DaysOfTheWeek>>>;
  remoteOptions: RemoteOption;
  requiredSkills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate: Scalars['Date'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  type: UserType;
};

export type CreateVolunteerProfileInput = {
  availableDays?: InputMaybe<Array<InputMaybe<DaysOfTheWeek>>>;
  availableHoursPerWeek?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  interestedCauses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  remoteOptions: RemoteOption;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId: Scalars['ID'];
};

export enum DaysOfTheWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type Mutation = {
  __typename?: 'Mutation';
  createOrganization: Organization;
  createProject: Project;
  createUser: Auth;
  createVolunteerProfile: VolunteerProfile;
  deleteOrganization: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteVolunteerProfile: Scalars['Boolean'];
  updateOrganization?: Maybe<Organization>;
  updateProject?: Maybe<Project>;
  updateUser?: Maybe<User>;
  updateVolunteerProfile?: Maybe<VolunteerProfile>;
};


export type MutationCreateOrganizationArgs = {
  orgInput: CreateOrganizationInput;
};


export type MutationCreateProjectArgs = {
  projectInput: CreateProjectInput;
};


export type MutationCreateUserArgs = {
  userInput: CreateUserInput;
};


export type MutationCreateVolunteerProfileArgs = {
  profileInput: CreateVolunteerProfileInput;
};


export type MutationDeleteOrganizationArgs = {
  orgId: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationDeleteVolunteerProfileArgs = {
  profileId: Scalars['ID'];
};


export type MutationUpdateOrganizationArgs = {
  orgId: Scalars['ID'];
  orgInput: UpdateOrganizationInput;
};


export type MutationUpdateProjectArgs = {
  projectId: Scalars['ID'];
  projectInput: UpdateProjectInput;
};


export type MutationUpdateUserArgs = {
  userId: Scalars['ID'];
  userInput?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateVolunteerProfileArgs = {
  profileId: Scalars['ID'];
  profileInput: UpdateVolunteerProfileInput;
};

export type Organization = {
  __typename?: 'Organization';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['ID'];
  causes?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  endDate?: Maybe<Scalars['Date']>;
  isRecurring: Scalars['Boolean'];
  name: Scalars['String'];
  organization: Organization;
  recurringDays?: Maybe<Array<Maybe<DaysOfTheWeek>>>;
  remoteOptions: RemoteOption;
  requiredSkills?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  login: Auth;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  project?: Maybe<Project>;
  projectMatchForVolunteer?: Maybe<Array<Maybe<Project>>>;
  projects?: Maybe<Array<Project>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  volunteerProfile?: Maybe<VolunteerProfile>;
  volunteerProfiles?: Maybe<Array<VolunteerProfile>>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryOrganizationArgs = {
  organizationId: Scalars['ID'];
};


export type QueryProjectArgs = {
  projectId: Scalars['ID'];
};


export type QueryProjectMatchForVolunteerArgs = {
  profileId: Scalars['ID'];
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};


export type QueryVolunteerProfileArgs = {
  profileId: Scalars['ID'];
};

export enum RemoteOption {
  Notremote = 'NOTREMOTE',
  Opentoboth = 'OPENTOBOTH',
  Remoteonly = 'REMOTEONLY'
}

export type UpdateOrganizationInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  causes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  isRecurring?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  recurringDays?: InputMaybe<Array<InputMaybe<DaysOfTheWeek>>>;
  remoteOptions?: InputMaybe<RemoteOption>;
  requiredSkills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserType>;
};

export type UpdateVolunteerProfileInput = {
  availableDays?: InputMaybe<Array<InputMaybe<DaysOfTheWeek>>>;
  availableHoursPerWeek?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  interestedCauses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  remoteOptions?: InputMaybe<RemoteOption>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  type: UserType;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum UserType {
  Organization = 'ORGANIZATION',
  Volunteer = 'VOLUNTEER'
}

export type VolunteerProfile = {
  __typename?: 'VolunteerProfile';
  _id: Scalars['ID'];
  availableDays?: Maybe<Array<Maybe<DaysOfTheWeek>>>;
  availableHoursPerWeek?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  interestedCauses?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  remoteOptions: RemoteOption;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateOrganizationInput: CreateOrganizationInput;
  CreateProjectInput: CreateProjectInput;
  CreateUserInput: CreateUserInput;
  CreateVolunteerProfileInput: CreateVolunteerProfileInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DaysOfTheWeek: DaysOfTheWeek;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  RemoteOption: RemoteOption;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateOrganizationInput: UpdateOrganizationInput;
  UpdateProjectInput: UpdateProjectInput;
  UpdateUserInput: UpdateUserInput;
  UpdateVolunteerProfileInput: UpdateVolunteerProfileInput;
  User: ResolverTypeWrapper<User>;
  UserType: UserType;
  VolunteerProfile: ResolverTypeWrapper<VolunteerProfile>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auth: Auth;
  Boolean: Scalars['Boolean'];
  CreateOrganizationInput: CreateOrganizationInput;
  CreateProjectInput: CreateProjectInput;
  CreateUserInput: CreateUserInput;
  CreateVolunteerProfileInput: CreateVolunteerProfileInput;
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Organization: Organization;
  Project: Project;
  Query: {};
  String: Scalars['String'];
  UpdateOrganizationInput: UpdateOrganizationInput;
  UpdateProjectInput: UpdateProjectInput;
  UpdateUserInput: UpdateUserInput;
  UpdateVolunteerProfileInput: UpdateVolunteerProfileInput;
  User: User;
  VolunteerProfile: VolunteerProfile;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  expiration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'orgInput'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'projectInput'>>;
  createUser?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'userInput'>>;
  createVolunteerProfile?: Resolver<ResolversTypes['VolunteerProfile'], ParentType, ContextType, RequireFields<MutationCreateVolunteerProfileArgs, 'profileInput'>>;
  deleteOrganization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'orgId'>>;
  deleteProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'projectId'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'userId'>>;
  deleteVolunteerProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteVolunteerProfileArgs, 'profileId'>>;
  updateOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'orgId' | 'orgInput'>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'projectId' | 'projectInput'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'userId'>>;
  updateVolunteerProfile?: Resolver<Maybe<ResolversTypes['VolunteerProfile']>, ParentType, ContextType, RequireFields<MutationUpdateVolunteerProfileArgs, 'profileId' | 'profileInput'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  causes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  isRecurring?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  recurringDays?: Resolver<Maybe<Array<Maybe<ResolversTypes['DaysOfTheWeek']>>>, ParentType, ContextType>;
  remoteOptions?: Resolver<ResolversTypes['RemoteOption'], ParentType, ContextType>;
  requiredSkills?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  login?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'email' | 'password'>>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'organizationId'>>;
  organizations?: Resolver<Maybe<Array<ResolversTypes['Organization']>>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'projectId'>>;
  projectMatchForVolunteer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType, RequireFields<QueryProjectMatchForVolunteerArgs, 'profileId'>>;
  projects?: Resolver<Maybe<Array<ResolversTypes['Project']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'userId'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  volunteerProfile?: Resolver<Maybe<ResolversTypes['VolunteerProfile']>, ParentType, ContextType, RequireFields<QueryVolunteerProfileArgs, 'profileId'>>;
  volunteerProfiles?: Resolver<Maybe<Array<ResolversTypes['VolunteerProfile']>>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['UserType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VolunteerProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['VolunteerProfile'] = ResolversParentTypes['VolunteerProfile']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  availableDays?: Resolver<Maybe<Array<Maybe<ResolversTypes['DaysOfTheWeek']>>>, ParentType, ContextType>;
  availableHoursPerWeek?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  interestedCauses?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  remoteOptions?: Resolver<ResolversTypes['RemoteOption'], ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Auth?: AuthResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  VolunteerProfile?: VolunteerProfileResolvers<ContextType>;
};

