import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';
import { DebtModule } from './debt/debt.module';
import { DniModule } from './dni/dni.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BalanceModule } from './balance/balance.module';
import { TicketsModule } from './ia/tickets/tickets.module';
import { MetaModule } from './meta/meta.module';
import { GraficModule } from './grafic/grafic.module';
import { DeviceModule } from './device/device.module';
import { SalaryModule } from './salary/salary.module';

import { PrinterModule } from './printer/printer.module';
import { ReportModule } from './report/report.module';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    AuthModule,
    PrismaModule,
    CategoryModule,
    TransactionModule,
    DebtModule,
    DniModule,
    FirebaseModule,
    NotificationsModule,
    BalanceModule,
    TicketsModule,
    MetaModule,
    GraficModule,
    DeviceModule,
    SalaryModule,
    ReportModule,
    PrinterModule,
    FinanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
