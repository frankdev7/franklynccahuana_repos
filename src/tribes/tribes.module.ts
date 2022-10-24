import { Module } from '@nestjs/common';
import { TribesService } from './tribes.service';
import { TribesController } from './tribes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/companies/company.entity';
import { Tribe } from './tribe.entity';
import { Repo } from 'src/repos/repos.entity';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe, Company, Repo]), RepositoriesModule],
  providers: [TribesService],
  controllers: [TribesController],
  exports: [TribesService]
})
export class TribesModule {}
