import { Module } from '@nestjs/common';
import { ReposService } from './repos.service';
import { ReposController } from './repos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from 'src/metrics/metric.entity';
import { Tribe } from 'src/tribes/tribe.entity';
import { Repo } from './repos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repo, Tribe, Metric])],
  providers: [ReposService],
  controllers: [ReposController]
})
export class ReposModule { }
