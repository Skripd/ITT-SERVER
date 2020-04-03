import { ITransaction } from "./transaction.model";

export interface IFundraiser {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    transactions?: ITransaction[];
    count?: number;
}