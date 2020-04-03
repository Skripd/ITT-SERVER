import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { Transaction, BatchPayload } from 'src/prisma/prisma.binding';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/gql-auth.guard';
import { PermissionsGuard } from 'src/permissions.guard';
import { Permissions } from 'src/permissions.decorator';

@Resolver()
export class TransactionResolver {
    constructor(private readonly prismaService: PrismaService) {}

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('transactions')
    @Permissions('itt-server:user')
    async getTransactions(@Args() args, @Info() info): Promise<Transaction[]> {
      return this.prismaService.query.transactions(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('transaction')
    @Permissions('itt-server:user')
    async getTransaction(@Args() args, @Info() info): Promise<Transaction> {
      return this.prismaService.query.transaction(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('transactionsConnection')
    @Permissions('itt-server:user')
    async getFundraisersConnection(@Args() args, @Info() info): Promise<BatchPayload> {
      return this.prismaService.query.fundraisersConnection(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('createTransaction')
    @Permissions('itt-server:user')
    async createTransaction(@Args() args, @Info() info): Promise<Transaction> {
      return this.prismaService.mutation.createTransaction(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateTransaction')
    @Permissions('itt-server:user')
    async updateTransaction(@Args() args, @Info() info): Promise<Transaction> {
      return this.prismaService.mutation.updateTransaction(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateManyTransactions')
    @Permissions('itt-server:poweruser')
    async updateManyTransactions(@Args() args, @Info() info): Promise<BatchPayload> {
      return this.prismaService.mutation.updateManyTransactions(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteTransaction')
    @Permissions('itt-server:user')
    async deleteTransaction(@Args() args, @Info() info): Promise<Transaction> {
      return this.prismaService.mutation.deleteTransaction(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteManyTransactions')
    @Permissions('itt-server:poweruser')
    async deleteManyTransactions(@Args() args, @Info() info): Promise<BatchPayload> {
      return this.prismaService.mutation.deleteManyTransactions(args, info);
    }
  
    // @UseGuards(GqlAuthGuard, PermissionsGuard)
    // @Permissions('itt-server:user')
    @Subscription('transaction')
    onTransactionMutation(@Args() args, @Info() info) {
      console.log(args, '\n\n' ,JSON.stringify(info));
      return this.prismaService.subscription.transaction(args, info);
     }
}
