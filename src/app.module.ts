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


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule, PrismaModule, CategoryModule, TransactionModule, DebtModule, DniModule, FirebaseModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
