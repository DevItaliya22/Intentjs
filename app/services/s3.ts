import { __, Inject, Injectable } from '@intentjs/core';
import { UserDbRepository } from 'app/repositories/userDbRepository';

@Injectable()
export class S3Service {
  constructor(
    @Inject('USER_DB_REPO') private readonly users: UserDbRepository,
  ) {}

  
}
