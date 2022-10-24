import { Controller, Get, Param } from '@nestjs/common';
import { Repo } from './repos.entity';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(
    private readonly reposService: ReposService,
  ) {}

  @Get('/')
  async getRepos(): Promise<Repo[]> {
    return this.reposService.getRepos();
  }
}
