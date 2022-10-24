import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Metric } from 'src/metrics/metric.entity';
import { Tribe } from 'src/tribes/tribe.entity';
import { Repository } from 'typeorm';
import { Repo } from './repos.entity';

@Injectable()
export class ReposService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>,
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>,
  ) { }

  async getRepos(): Promise<Repo[]> {
    return await this.repoRepository.find();
  }
}
