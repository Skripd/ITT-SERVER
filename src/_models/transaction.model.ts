export interface ITransaction {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    amount?: number;
    user?: string;
    owner?: string;
}
