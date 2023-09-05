import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  validateCompanyData(data: Object): Object {
    return { data: data, verified: true }
  }

}
