import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentasticoClientAppHomeComponent } from './rentastico-client-app-home.component';

describe('RentasticoClientAppHomeComponent', () => {
  let component: RentasticoClientAppHomeComponent;
  let fixture: ComponentFixture<RentasticoClientAppHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RentasticoClientAppHomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentasticoClientAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
