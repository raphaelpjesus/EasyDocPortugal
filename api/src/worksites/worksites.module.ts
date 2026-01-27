import { Module } from '@nestjs/common';
import { WorksitesService } from './worksites.service';
import { WorksitesController } from './worksites.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WorksitesController],
  providers: [WorksitesService],
})
export class WorksitesModule {}
