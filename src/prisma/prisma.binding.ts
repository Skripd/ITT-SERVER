import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    transactions: <T = Array<Transaction | null>>(args: { where?: TransactionWhereInput | null, orderBy?: TransactionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fundraisers: <T = Array<Fundraiser | null>>(args: { where?: FundraiserWhereInput | null, orderBy?: FundraiserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    transaction: <T = Transaction | null>(args: { where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    fundraiser: <T = Fundraiser | null>(args: { where: FundraiserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    transactionsConnection: <T = TransactionConnection>(args: { where?: TransactionWhereInput | null, orderBy?: TransactionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fundraisersConnection: <T = FundraiserConnection>(args: { where?: FundraiserWhereInput | null, orderBy?: FundraiserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createTransaction: <T = Transaction>(args: { data: TransactionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFundraiser: <T = Fundraiser>(args: { data: FundraiserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTransaction: <T = Transaction | null>(args: { data: TransactionUpdateInput, where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFundraiser: <T = Fundraiser | null>(args: { data: FundraiserUpdateInput, where: FundraiserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTransaction: <T = Transaction | null>(args: { where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFundraiser: <T = Fundraiser | null>(args: { where: FundraiserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertTransaction: <T = Transaction>(args: { where: TransactionWhereUniqueInput, create: TransactionCreateInput, update: TransactionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFundraiser: <T = Fundraiser>(args: { where: FundraiserWhereUniqueInput, create: FundraiserCreateInput, update: FundraiserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTransactions: <T = BatchPayload>(args: { data: TransactionUpdateManyMutationInput, where?: TransactionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFundraisers: <T = BatchPayload>(args: { data: FundraiserUpdateManyMutationInput, where?: FundraiserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTransactions: <T = BatchPayload>(args: { where?: TransactionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFundraisers: <T = BatchPayload>(args: { where?: FundraiserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    transaction: <T = TransactionSubscriptionPayload | null>(args: { where?: TransactionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    fundraiser: <T = FundraiserSubscriptionPayload | null>(args: { where?: FundraiserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Transaction: (where?: TransactionWhereInput) => Promise<boolean>
  Fundraiser: (where?: FundraiserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateFundraiser {
  count: Int!
}

type AggregateTransaction {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Fundraiser implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction!]
}

"""A connection to a list of items."""
type FundraiserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FundraiserEdge]!
  aggregate: AggregateFundraiser!
}

input FundraiserCreateInput {
  id: ID
  name: String!
  transactions: TransactionCreateManyWithoutOwnerInput
}

input FundraiserCreateOneWithoutTransactionsInput {
  create: FundraiserCreateWithoutTransactionsInput
  connect: FundraiserWhereUniqueInput
}

input FundraiserCreateWithoutTransactionsInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type FundraiserEdge {
  """The item at the end of the edge."""
  node: Fundraiser!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FundraiserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type FundraiserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type FundraiserSubscriptionPayload {
  mutation: MutationType!
  node: Fundraiser
  updatedFields: [String!]
  previousValues: FundraiserPreviousValues
}

input FundraiserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FundraiserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FundraiserWhereInput
}

input FundraiserUpdateInput {
  name: String
  transactions: TransactionUpdateManyWithoutOwnerInput
}

input FundraiserUpdateManyMutationInput {
  name: String
}

input FundraiserUpdateOneRequiredWithoutTransactionsInput {
  create: FundraiserCreateWithoutTransactionsInput
  connect: FundraiserWhereUniqueInput
  update: FundraiserUpdateWithoutTransactionsDataInput
  upsert: FundraiserUpsertWithoutTransactionsInput
}

input FundraiserUpdateWithoutTransactionsDataInput {
  name: String
}

input FundraiserUpsertWithoutTransactionsInput {
  update: FundraiserUpdateWithoutTransactionsDataInput!
  create: FundraiserCreateWithoutTransactionsInput!
}

input FundraiserWhereInput {
  """Logical AND on all given filters."""
  AND: [FundraiserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  transactions_some: TransactionWhereInput
}

input FundraiserWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createTransaction(data: TransactionCreateInput!): Transaction!
  createFundraiser(data: FundraiserCreateInput!): Fundraiser!
  updateTransaction(data: TransactionUpdateInput!, where: TransactionWhereUniqueInput!): Transaction
  updateFundraiser(data: FundraiserUpdateInput!, where: FundraiserWhereUniqueInput!): Fundraiser
  deleteTransaction(where: TransactionWhereUniqueInput!): Transaction
  deleteFundraiser(where: FundraiserWhereUniqueInput!): Fundraiser
  upsertTransaction(where: TransactionWhereUniqueInput!, create: TransactionCreateInput!, update: TransactionUpdateInput!): Transaction!
  upsertFundraiser(where: FundraiserWhereUniqueInput!, create: FundraiserCreateInput!, update: FundraiserUpdateInput!): Fundraiser!
  updateManyTransactions(data: TransactionUpdateManyMutationInput!, where: TransactionWhereInput): BatchPayload!
  updateManyFundraisers(data: FundraiserUpdateManyMutationInput!, where: FundraiserWhereInput): BatchPayload!
  deleteManyTransactions(where: TransactionWhereInput): BatchPayload!
  deleteManyFundraisers(where: FundraiserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction]!
  fundraisers(where: FundraiserWhereInput, orderBy: FundraiserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fundraiser]!
  transaction(where: TransactionWhereUniqueInput!): Transaction
  fundraiser(where: FundraiserWhereUniqueInput!): Fundraiser
  transactionsConnection(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TransactionConnection!
  fundraisersConnection(where: FundraiserWhereInput, orderBy: FundraiserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FundraiserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  transaction(where: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload
  fundraiser(where: FundraiserSubscriptionWhereInput): FundraiserSubscriptionPayload
}

type Transaction implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Float!
  user: String!
  owner: Fundraiser!
}

"""A connection to a list of items."""
type TransactionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TransactionEdge]!
  aggregate: AggregateTransaction!
}

input TransactionCreateInput {
  id: ID
  amount: Float!
  user: String!
  owner: FundraiserCreateOneWithoutTransactionsInput!
}

input TransactionCreateManyWithoutOwnerInput {
  create: [TransactionCreateWithoutOwnerInput!]
  connect: [TransactionWhereUniqueInput!]
}

input TransactionCreateWithoutOwnerInput {
  id: ID
  amount: Float!
  user: String!
}

"""An edge in a connection."""
type TransactionEdge {
  """The item at the end of the edge."""
  node: Transaction!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TransactionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  amount_ASC
  amount_DESC
  user_ASC
  user_DESC
}

type TransactionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Float!
  user: String!
}

input TransactionScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  user: String

  """All values that are not equal to given value."""
  user_not: String

  """All values that are contained in given list."""
  user_in: [String!]

  """All values that are not contained in given list."""
  user_not_in: [String!]

  """All values less than the given value."""
  user_lt: String

  """All values less than or equal the given value."""
  user_lte: String

  """All values greater than the given value."""
  user_gt: String

  """All values greater than or equal the given value."""
  user_gte: String

  """All values containing the given string."""
  user_contains: String

  """All values not containing the given string."""
  user_not_contains: String

  """All values starting with the given string."""
  user_starts_with: String

  """All values not starting with the given string."""
  user_not_starts_with: String

  """All values ending with the given string."""
  user_ends_with: String

  """All values not ending with the given string."""
  user_not_ends_with: String
}

type TransactionSubscriptionPayload {
  mutation: MutationType!
  node: Transaction
  updatedFields: [String!]
  previousValues: TransactionPreviousValues
}

input TransactionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TransactionWhereInput
}

input TransactionUpdateInput {
  amount: Float
  user: String
  owner: FundraiserUpdateOneRequiredWithoutTransactionsInput
}

input TransactionUpdateManyDataInput {
  amount: Float
  user: String
}

input TransactionUpdateManyMutationInput {
  amount: Float
  user: String
}

input TransactionUpdateManyWithoutOwnerInput {
  create: [TransactionCreateWithoutOwnerInput!]
  connect: [TransactionWhereUniqueInput!]
  set: [TransactionWhereUniqueInput!]
  disconnect: [TransactionWhereUniqueInput!]
  delete: [TransactionWhereUniqueInput!]
  update: [TransactionUpdateWithWhereUniqueWithoutOwnerInput!]
  updateMany: [TransactionUpdateManyWithWhereNestedInput!]
  deleteMany: [TransactionScalarWhereInput!]
  upsert: [TransactionUpsertWithWhereUniqueWithoutOwnerInput!]
}

input TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput!
  data: TransactionUpdateManyDataInput!
}

input TransactionUpdateWithoutOwnerDataInput {
  amount: Float
  user: String
}

input TransactionUpdateWithWhereUniqueWithoutOwnerInput {
  where: TransactionWhereUniqueInput!
  data: TransactionUpdateWithoutOwnerDataInput!
}

input TransactionUpsertWithWhereUniqueWithoutOwnerInput {
  where: TransactionWhereUniqueInput!
  update: TransactionUpdateWithoutOwnerDataInput!
  create: TransactionCreateWithoutOwnerInput!
}

input TransactionWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  user: String

  """All values that are not equal to given value."""
  user_not: String

  """All values that are contained in given list."""
  user_in: [String!]

  """All values that are not contained in given list."""
  user_not_in: [String!]

  """All values less than the given value."""
  user_lt: String

  """All values less than or equal the given value."""
  user_lte: String

  """All values greater than the given value."""
  user_gt: String

  """All values greater than or equal the given value."""
  user_gte: String

  """All values containing the given string."""
  user_contains: String

  """All values not containing the given string."""
  user_not_contains: String

  """All values starting with the given string."""
  user_starts_with: String

  """All values not starting with the given string."""
  user_not_starts_with: String

  """All values ending with the given string."""
  user_ends_with: String

  """All values not ending with the given string."""
  user_not_ends_with: String
  owner: FundraiserWhereInput
}

input TransactionWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type FundraiserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type TransactionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'user_ASC' |
  'user_DESC'

export interface FundraiserCreateInput {
  id?: ID_Input | null
  name: String
  transactions?: TransactionCreateManyWithoutOwnerInput | null
}

export interface FundraiserCreateOneWithoutTransactionsInput {
  create?: FundraiserCreateWithoutTransactionsInput | null
  connect?: FundraiserWhereUniqueInput | null
}

export interface FundraiserCreateWithoutTransactionsInput {
  id?: ID_Input | null
  name: String
}

export interface FundraiserSubscriptionWhereInput {
  AND?: FundraiserSubscriptionWhereInput[] | FundraiserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FundraiserWhereInput | null
}

export interface FundraiserUpdateInput {
  name?: String | null
  transactions?: TransactionUpdateManyWithoutOwnerInput | null
}

export interface FundraiserUpdateManyMutationInput {
  name?: String | null
}

export interface FundraiserUpdateOneRequiredWithoutTransactionsInput {
  create?: FundraiserCreateWithoutTransactionsInput | null
  connect?: FundraiserWhereUniqueInput | null
  update?: FundraiserUpdateWithoutTransactionsDataInput | null
  upsert?: FundraiserUpsertWithoutTransactionsInput | null
}

export interface FundraiserUpdateWithoutTransactionsDataInput {
  name?: String | null
}

export interface FundraiserUpsertWithoutTransactionsInput {
  update: FundraiserUpdateWithoutTransactionsDataInput
  create: FundraiserCreateWithoutTransactionsInput
}

export interface FundraiserWhereInput {
  AND?: FundraiserWhereInput[] | FundraiserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  transactions_some?: TransactionWhereInput | null
}

export interface FundraiserWhereUniqueInput {
  id?: ID_Input | null
}

export interface TransactionCreateInput {
  id?: ID_Input | null
  amount: Float
  user: String
  owner: FundraiserCreateOneWithoutTransactionsInput
}

export interface TransactionCreateManyWithoutOwnerInput {
  create?: TransactionCreateWithoutOwnerInput[] | TransactionCreateWithoutOwnerInput | null
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
}

export interface TransactionCreateWithoutOwnerInput {
  id?: ID_Input | null
  amount: Float
  user: String
}

export interface TransactionScalarWhereInput {
  AND?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  OR?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  NOT?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  amount?: Float | null
  amount_not?: Float | null
  amount_in?: Float[] | Float | null
  amount_not_in?: Float[] | Float | null
  amount_lt?: Float | null
  amount_lte?: Float | null
  amount_gt?: Float | null
  amount_gte?: Float | null
  user?: String | null
  user_not?: String | null
  user_in?: String[] | String | null
  user_not_in?: String[] | String | null
  user_lt?: String | null
  user_lte?: String | null
  user_gt?: String | null
  user_gte?: String | null
  user_contains?: String | null
  user_not_contains?: String | null
  user_starts_with?: String | null
  user_not_starts_with?: String | null
  user_ends_with?: String | null
  user_not_ends_with?: String | null
}

export interface TransactionSubscriptionWhereInput {
  AND?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TransactionWhereInput | null
}

export interface TransactionUpdateInput {
  amount?: Float | null
  user?: String | null
  owner?: FundraiserUpdateOneRequiredWithoutTransactionsInput | null
}

export interface TransactionUpdateManyDataInput {
  amount?: Float | null
  user?: String | null
}

export interface TransactionUpdateManyMutationInput {
  amount?: Float | null
  user?: String | null
}

export interface TransactionUpdateManyWithoutOwnerInput {
  create?: TransactionCreateWithoutOwnerInput[] | TransactionCreateWithoutOwnerInput | null
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  set?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  disconnect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  delete?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  update?: TransactionUpdateWithWhereUniqueWithoutOwnerInput[] | TransactionUpdateWithWhereUniqueWithoutOwnerInput | null
  updateMany?: TransactionUpdateManyWithWhereNestedInput[] | TransactionUpdateManyWithWhereNestedInput | null
  deleteMany?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  upsert?: TransactionUpsertWithWhereUniqueWithoutOwnerInput[] | TransactionUpsertWithWhereUniqueWithoutOwnerInput | null
}

export interface TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput
  data: TransactionUpdateManyDataInput
}

export interface TransactionUpdateWithoutOwnerDataInput {
  amount?: Float | null
  user?: String | null
}

export interface TransactionUpdateWithWhereUniqueWithoutOwnerInput {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateWithoutOwnerDataInput
}

export interface TransactionUpsertWithWhereUniqueWithoutOwnerInput {
  where: TransactionWhereUniqueInput
  update: TransactionUpdateWithoutOwnerDataInput
  create: TransactionCreateWithoutOwnerInput
}

export interface TransactionWhereInput {
  AND?: TransactionWhereInput[] | TransactionWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  amount?: Float | null
  amount_not?: Float | null
  amount_in?: Float[] | Float | null
  amount_not_in?: Float[] | Float | null
  amount_lt?: Float | null
  amount_lte?: Float | null
  amount_gt?: Float | null
  amount_gte?: Float | null
  user?: String | null
  user_not?: String | null
  user_in?: String[] | String | null
  user_not_in?: String[] | String | null
  user_lt?: String | null
  user_lte?: String | null
  user_gt?: String | null
  user_gte?: String | null
  user_contains?: String | null
  user_not_contains?: String | null
  user_starts_with?: String | null
  user_not_starts_with?: String | null
  user_ends_with?: String | null
  user_not_ends_with?: String | null
  owner?: FundraiserWhereInput | null
}

export interface TransactionWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateFundraiser {
  count: Int
}

export interface AggregateTransaction {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Fundraiser extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  transactions?: Array<Transaction> | null
}

/*
 * A connection to a list of items.

 */
export interface FundraiserConnection {
  pageInfo: PageInfo
  edges: Array<FundraiserEdge | null>
  aggregate: AggregateFundraiser
}

/*
 * An edge in a connection.

 */
export interface FundraiserEdge {
  node: Fundraiser
  cursor: String
}

export interface FundraiserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface FundraiserSubscriptionPayload {
  mutation: MutationType
  node?: Fundraiser | null
  updatedFields?: Array<String> | null
  previousValues?: FundraiserPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Transaction extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount: Float
  user: String
  owner: Fundraiser
}

/*
 * A connection to a list of items.

 */
export interface TransactionConnection {
  pageInfo: PageInfo
  edges: Array<TransactionEdge | null>
  aggregate: AggregateTransaction
}

/*
 * An edge in a connection.

 */
export interface TransactionEdge {
  node: Transaction
  cursor: String
}

export interface TransactionPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount: Float
  user: String
}

export interface TransactionSubscriptionPayload {
  mutation: MutationType
  node?: Transaction | null
  updatedFields?: Array<String> | null
  previousValues?: TransactionPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string