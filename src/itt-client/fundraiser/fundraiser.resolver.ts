import { Resolver, Mutation, Query, Args, Info, Subscription } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { Fundraiser, BatchPayload } from 'src/prisma/prisma.binding';
import { Permissions } from 'src/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/gql-auth.guard';
import { PermissionsGuard } from 'src/permissions.guard';

@Resolver()
export class FundraiserResolver {

    constructor(private readonly prismaService: PrismaService) {}

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('fundraisers')
    @Permissions('itt-server:user')
    async getFundraisers(@Args() args, @Info() info): Promise<Fundraiser[]> {
      return this.prismaService.query.fundraisers(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('fundraiser')
    @Permissions('itt-server:user')
    async getFundraiser(@Args() args, @Info() info): Promise<Fundraiser> {
      return this.prismaService.query.fundraiser(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('fundraisersConnection')
    @Permissions('itt-server:user')
    async getFundraisersConnection(@Args() args, @Info() info): Promise<Fundraiser> {
      return this.prismaService.query.fundraisersConnection(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('createFundraiser')
    @Permissions('itt-server:poweruser')
    async createFundraiser(@Args() args, @Info() info): Promise<Fundraiser> {
      return this.prismaService.mutation.createFundraiser(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateFundraiser')
    @Permissions('itt-server:poweruser')
    async updateFundraiser(@Args() args, @Info() info): Promise<Fundraiser> {
      return this.prismaService.mutation.updateFundraiser(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateManyFundraisers')
    @Permissions('itt-server:poweruser')
    async updateManyFundraisers(@Args() args, @Info() info): Promise<BatchPayload> {
      return this.prismaService.mutation.updateManyFundraisers(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteFundraiser')
    @Permissions('itt-server:poweruser')
    async deleteFundraiser(@Args() args, @Info() info): Promise<Fundraiser> {
      return this.prismaService.mutation.deleteFundraiser(args, info);
    }
  
    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteManyFundraisers')
    @Permissions('itt-server:admin')
    async deleteManyFundraisers(@Args() args, @Info() info): Promise<BatchPayload> {
      return this.prismaService.mutation.deleteManyFundraisers(args, info);
    }
  
    // @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Subscription('fundraiser')
    // @Permissions('itt-server:user')
    onFundraiserMutation(@Args() args, @Info() info) {
      console.log('arguments::\n', args);
      console.log('\n\ninfo::\n', info);
      return this.prismaService.subscription.fundraiser(args, info);
    }
  }
