
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum FundraiserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum TransactionOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    amount_ASC = "amount_ASC",
    amount_DESC = "amount_DESC",
    user_ASC = "user_ASC",
    user_DESC = "user_DESC"
}

export class FundraiserCreateInput {
    id?: string;
    name: string;
    transactions?: TransactionCreateManyWithoutOwnerInput;
}

export class FundraiserCreateOneWithoutTransactionsInput {
    create?: FundraiserCreateWithoutTransactionsInput;
    connect?: FundraiserWhereUniqueInput;
}

export class FundraiserCreateWithoutTransactionsInput {
    id?: string;
    name: string;
}

export class FundraiserSubscriptionWhereInput {
    AND?: FundraiserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: FundraiserWhereInput;
}

export class FundraiserUpdateInput {
    name?: string;
    transactions?: TransactionUpdateManyWithoutOwnerInput;
}

export class FundraiserUpdateManyMutationInput {
    name?: string;
}

export class FundraiserUpdateOneRequiredWithoutTransactionsInput {
    create?: FundraiserCreateWithoutTransactionsInput;
    connect?: FundraiserWhereUniqueInput;
    update?: FundraiserUpdateWithoutTransactionsDataInput;
    upsert?: FundraiserUpsertWithoutTransactionsInput;
}

export class FundraiserUpdateWithoutTransactionsDataInput {
    name?: string;
}

export class FundraiserUpsertWithoutTransactionsInput {
    update: FundraiserUpdateWithoutTransactionsDataInput;
    create: FundraiserCreateWithoutTransactionsInput;
}

export class FundraiserWhereInput {
    AND?: FundraiserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    transactions_some?: TransactionWhereInput;
}

export class FundraiserWhereUniqueInput {
    id?: string;
}

export class TransactionCreateInput {
    id?: string;
    amount: number;
    user: string;
    owner: FundraiserCreateOneWithoutTransactionsInput;
}

export class TransactionCreateManyWithoutOwnerInput {
    create?: TransactionCreateWithoutOwnerInput[];
    connect?: TransactionWhereUniqueInput[];
}

export class TransactionCreateWithoutOwnerInput {
    id?: string;
    amount: number;
    user: string;
}

export class TransactionScalarWhereInput {
    AND?: TransactionScalarWhereInput[];
    OR?: TransactionScalarWhereInput[];
    NOT?: TransactionScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    amount?: number;
    amount_not?: number;
    amount_in?: number[];
    amount_not_in?: number[];
    amount_lt?: number;
    amount_lte?: number;
    amount_gt?: number;
    amount_gte?: number;
    user?: string;
    user_not?: string;
    user_in?: string[];
    user_not_in?: string[];
    user_lt?: string;
    user_lte?: string;
    user_gt?: string;
    user_gte?: string;
    user_contains?: string;
    user_not_contains?: string;
    user_starts_with?: string;
    user_not_starts_with?: string;
    user_ends_with?: string;
    user_not_ends_with?: string;
}

export class TransactionSubscriptionWhereInput {
    AND?: TransactionSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: TransactionWhereInput;
}

export class TransactionUpdateInput {
    amount?: number;
    user?: string;
    owner?: FundraiserUpdateOneRequiredWithoutTransactionsInput;
}

export class TransactionUpdateManyDataInput {
    amount?: number;
    user?: string;
}

export class TransactionUpdateManyMutationInput {
    amount?: number;
    user?: string;
}

export class TransactionUpdateManyWithoutOwnerInput {
    create?: TransactionCreateWithoutOwnerInput[];
    connect?: TransactionWhereUniqueInput[];
    set?: TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput[];
    update?: TransactionUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: TransactionUpdateManyWithWhereNestedInput[];
    deleteMany?: TransactionScalarWhereInput[];
    upsert?: TransactionUpsertWithWhereUniqueWithoutOwnerInput[];
}

export class TransactionUpdateManyWithWhereNestedInput {
    where: TransactionScalarWhereInput;
    data: TransactionUpdateManyDataInput;
}

export class TransactionUpdateWithoutOwnerDataInput {
    amount?: number;
    user?: string;
}

export class TransactionUpdateWithWhereUniqueWithoutOwnerInput {
    where: TransactionWhereUniqueInput;
    data: TransactionUpdateWithoutOwnerDataInput;
}

export class TransactionUpsertWithWhereUniqueWithoutOwnerInput {
    where: TransactionWhereUniqueInput;
    update: TransactionUpdateWithoutOwnerDataInput;
    create: TransactionCreateWithoutOwnerInput;
}

export class TransactionWhereInput {
    AND?: TransactionWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    amount?: number;
    amount_not?: number;
    amount_in?: number[];
    amount_not_in?: number[];
    amount_lt?: number;
    amount_lte?: number;
    amount_gt?: number;
    amount_gte?: number;
    user?: string;
    user_not?: string;
    user_in?: string[];
    user_not_in?: string[];
    user_lt?: string;
    user_lte?: string;
    user_gt?: string;
    user_gte?: string;
    user_contains?: string;
    user_not_contains?: string;
    user_starts_with?: string;
    user_not_starts_with?: string;
    user_ends_with?: string;
    user_not_ends_with?: string;
    owner?: FundraiserWhereInput;
}

export class TransactionWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateFundraiser {
    count: number;
}

export class AggregateTransaction {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Fundraiser implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name: string;
    transactions?: Transaction[];
}

export class FundraiserConnection {
    pageInfo: PageInfo;
    edges: FundraiserEdge[];
    aggregate: AggregateFundraiser;
}

export class FundraiserEdge {
    node: Fundraiser;
    cursor: string;
}

export class FundraiserPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name: string;
}

export class FundraiserSubscriptionPayload {
    mutation: MutationType;
    node?: Fundraiser;
    updatedFields?: string[];
    previousValues?: FundraiserPreviousValues;
}

export abstract class IMutation {
    abstract createTransaction(data: TransactionCreateInput): Transaction | Promise<Transaction>;
    abstract createFundraiser(data: FundraiserCreateInput): Fundraiser | Promise<Fundraiser>;
    abstract updateTransaction(data: TransactionUpdateInput, where: TransactionWhereUniqueInput): Transaction | Promise<Transaction>;
    abstract updateFundraiser(data: FundraiserUpdateInput, where: FundraiserWhereUniqueInput): Fundraiser | Promise<Fundraiser>;
    abstract deleteTransaction(where: TransactionWhereUniqueInput): Transaction | Promise<Transaction>;
    abstract deleteFundraiser(where: FundraiserWhereUniqueInput): Fundraiser | Promise<Fundraiser>;
    abstract upsertTransaction(where: TransactionWhereUniqueInput, create: TransactionCreateInput, update: TransactionUpdateInput): Transaction | Promise<Transaction>;
    abstract upsertFundraiser(where: FundraiserWhereUniqueInput, create: FundraiserCreateInput, update: FundraiserUpdateInput): Fundraiser | Promise<Fundraiser>;
    abstract updateManyTransactions(data: TransactionUpdateManyMutationInput, where?: TransactionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyFundraisers(data: FundraiserUpdateManyMutationInput, where?: FundraiserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyTransactions(where?: TransactionWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyFundraisers(where?: FundraiserWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract transactions(where?: TransactionWhereInput, orderBy?: TransactionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Transaction[] | Promise<Transaction[]>;
    abstract fundraisers(where?: FundraiserWhereInput, orderBy?: FundraiserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Fundraiser[] | Promise<Fundraiser[]>;
    abstract transaction(where: TransactionWhereUniqueInput): Transaction | Promise<Transaction>;
    abstract fundraiser(where: FundraiserWhereUniqueInput): Fundraiser | Promise<Fundraiser>;
    abstract transactionsConnection(where?: TransactionWhereInput, orderBy?: TransactionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): TransactionConnection | Promise<TransactionConnection>;
    abstract fundraisersConnection(where?: FundraiserWhereInput, orderBy?: FundraiserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): FundraiserConnection | Promise<FundraiserConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract transaction(where?: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload | Promise<TransactionSubscriptionPayload>;
    abstract fundraiser(where?: FundraiserSubscriptionWhereInput): FundraiserSubscriptionPayload | Promise<FundraiserSubscriptionPayload>;
}

export class Transaction implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    amount: number;
    user: string;
    owner: Fundraiser;
}

export class TransactionConnection {
    pageInfo: PageInfo;
    edges: TransactionEdge[];
    aggregate: AggregateTransaction;
}

export class TransactionEdge {
    node: Transaction;
    cursor: string;
}

export class TransactionPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    amount: number;
    user: string;
}

export class TransactionSubscriptionPayload {
    mutation: MutationType;
    node?: Transaction;
    updatedFields?: string[];
    previousValues?: TransactionPreviousValues;
}

export type DateTime = any;
export type Long = any;
