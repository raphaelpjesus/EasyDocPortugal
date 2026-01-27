import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { CompaniesModule } from './companies/companies.module';
import { WorkersModule } from './workers/workers.module';
import { WorksitesModule } from './worksites/worksites.module';
import { MachinesModule } from './machines/machines.module';

@Module({
  imports: [
    PrismaModule,
    CompaniesModule,
    WorkersModule,
    WorksitesModule,
    MachinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
