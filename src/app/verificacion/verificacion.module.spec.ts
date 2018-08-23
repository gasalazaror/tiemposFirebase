import { VerificacionModule } from './verificacion.module';

describe('VerificacionModule', () => {
  let verificacionModule: VerificacionModule;

  beforeEach(() => {
    verificacionModule = new VerificacionModule();
  });

  it('should create an instance', () => {
    expect(verificacionModule).toBeTruthy();
  });
});
