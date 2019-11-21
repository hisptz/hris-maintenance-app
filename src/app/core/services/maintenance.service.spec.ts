import { TestBed } from '@angular/core/testing';

import { MaintenanceService } from './maintenance.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MaintenanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MaintenanceService = TestBed.get(MaintenanceService);
    expect(service).toBeTruthy();
  });
});
