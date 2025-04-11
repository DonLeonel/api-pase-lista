import { Test, TestingModule } from '@nestjs/testing';
import { UserDocenteController } from './user-docente.controller';
import { UserDocenteService } from './user-docente.service';

describe('UserDocenteController', () => {
  let controller: UserDocenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDocenteController],
      providers: [UserDocenteService],
    }).compile();

    controller = module.get<UserDocenteController>(UserDocenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
