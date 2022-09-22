import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComoEuEraAntesDeVocePage } from './como-eu-era-antes-de-voce.page';

describe('ComoEuEraAntesDeVocePage', () => {
  let component: ComoEuEraAntesDeVocePage;
  let fixture: ComponentFixture<ComoEuEraAntesDeVocePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoEuEraAntesDeVocePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComoEuEraAntesDeVocePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
