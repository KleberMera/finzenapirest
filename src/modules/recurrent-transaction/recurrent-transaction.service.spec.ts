import { Test, TestingModule } from '@nestjs/testing';
import { RecurrentTransactionService } from './recurrent-transaction.service';

describe('RecurrentTransactionService', () => {
  let service: RecurrentTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurrentTransactionService],
    }).compile();

    service = module.get<RecurrentTransactionService>(RecurrentTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
