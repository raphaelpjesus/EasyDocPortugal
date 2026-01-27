import { Test, TestingModule } from '@nestjs/testing';
import { WorksitesController } from './worksites.controller';

describe('WorksitesController', () => {
  let controller: WorksitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorksitesController],
    }).compile();

    controller = module.get<WorksitesController>(WorksitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
