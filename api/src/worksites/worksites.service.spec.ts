import { Test, TestingModule } from '@nestjs/testing';
import { WorksitesService } from './worksites.service';

describe('WorksitesService', () => {
  let service: WorksitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorksitesService],
    }).compile();

    service = module.get<WorksitesService>(WorksitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
