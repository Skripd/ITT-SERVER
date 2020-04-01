import { Module } from '@nestjs/common';
import { FundraiserResolver } from './fundraiser/fundraiser.resolver';
import { TransactionResolver } from './transaction/transaction.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FundraiserResolver, TransactionResolver]
})
export class IttClientModule {}
