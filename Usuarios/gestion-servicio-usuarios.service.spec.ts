import { TestBed } from '@angular/core/testing';

import { GestionServicioUsuariosService } from './gestion-servicio-usuarios.service';

describe('GestionServicioUsuariosService', () => {
  let service: GestionServicioUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionServicioUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
