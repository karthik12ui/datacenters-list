import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RayonsoftServicesDb } from './marketplace-rayonsoft-services';
export class LocalDbService implements InMemoryDbService {
    createDb(): any {
        return {
            'rayonsoft-services': RayonsoftServicesDb.RayonsoftServices,
        };
    }
}
