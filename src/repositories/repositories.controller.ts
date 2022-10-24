import { Controller, Get, Param } from '@nestjs/common';
import { RepositoryDto } from './dto/repository.dto';
import { StatusDto } from './dto/status.dto';
import { RepositoriesService } from './repositories.service';

@Controller('mock')
export class RepositoriesController {
  constructor(
    private readonly repositoriesService: RepositoriesService,
  ) { }

  @Get('')
  async getRepositories(): Promise<RepositoryDto[]> {
    return this.repositoriesService.getRepositories();
  }

  @Get(':cod')
  async getStatus(@Param('cod') cod: string): Promise<StatusDto> {
    return this.repositoriesService.getStatus(cod);
  }
}
