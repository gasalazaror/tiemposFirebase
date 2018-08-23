import { RecuperacionModule } from './recuperacion.module';

describe('RecuperacionModule', () => {
  let recuperacionModule: RecuperacionModule;

  beforeEach(() => {
    recuperacionModule = new RecuperacionModule();
  });

  it('should create an instance', () => {
    expect(recuperacionModule).toBeTruthy();
  });
});
