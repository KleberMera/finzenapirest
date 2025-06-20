import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './config/prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { DebtModule } from './modules/debt/debt.module';
import { DniModule } from './modules/dni/dni.module';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BalanceModule } from './modules/balance/balance.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { GoalModule } from './modules/goal/goal.module';
import { GraficModule } from './modules/grafic/grafic.module';
import { DeviceModule } from './modules/device/device.module';
import { SalaryModule } from './modules/salary/salary.module';


import { FinanceModule } from './modules/finance/finance.module';
import { FcmNotificationModule } from './modules/fcm-notification/fcm-notification.module';
import { S3Module } from './config/s3/s3.module';

import { RecurrentTransactionModule } from './modules/recurrent-transaction/recurrent-transaction.module';
import { MethodModule } from './modules/method/method.module';
import { SendNotificationModule } from './modules/send-notification/send-notification.module';
import { UserModule } from './modules/user/user.module';
import { GraficAdminModule } from './modules/admin/grafic-admin/grafic-admin.module';
import { LocalStorageModule } from './config/local-storage/local-storage.module';

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
    GoalModule,
    GraficModule,
    DeviceModule,
    SalaryModule,
    FinanceModule,
    FcmNotificationModule,
    S3Module,
    LocalStorageModule,
    MethodModule,
    RecurrentTransactionModule,
    SendNotificationModule,
    UserModule,
    GraficAdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
