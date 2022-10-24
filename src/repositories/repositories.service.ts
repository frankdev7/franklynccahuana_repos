import { Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryDto } from './dto/repository.dto';
import { StatusDto } from './dto/status.dto';
import dataRepository from './mock/data.json';
import dataStatus from './mock/status.json';
@Injectable()
export class RepositoriesService {
  constructor() { }

  async getRepositories(): Promise<RepositoryDto[]> {
    let repositoriesDtos = [];
    dataRepository.repositories.forEach(repository =>
      repositoriesDtos.push(new RepositoryDto(repository.id, repository.state))
    );

    return repositoriesDtos;
  }

  async getStatus(cod: string): Promise<StatusDto> {
    let status = dataStatus.status.filter(obj => obj.cod === cod);
    if (status.length === 0)
      throw new NotFoundException();
    return new StatusDto(status[0].cod, status[0].desc);
  }
}
