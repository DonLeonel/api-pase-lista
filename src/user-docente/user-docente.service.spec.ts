import { Test, TestingModule } from '@nestjs/testing';
import { UserDocenteService } from './user-docente.service';

describe('UserDocenteService', () => {
  let service: UserDocenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDocenteService],
    }).compile();

    service = module.get<UserDocenteService>(UserDocenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
