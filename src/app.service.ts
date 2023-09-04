import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  validateCompanyData(data: Object): Object {
    return { data: data, verified: true }
  }

}
