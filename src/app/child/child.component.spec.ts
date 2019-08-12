import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';
import { LocationService } from '../shared/services/location.service';
import { LocationServiceMock } from '../shared/test-helpers/mocks/location.service.mock';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
      providers: [{ provide: LocationService, useClass: LocationServiceMock }]
    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render latitude and longitude passed as input parameter', () => {
    const fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    component.latitude = 18.578821075179366;
    component.longitude = 73.73917436547346;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement
    // Test Input Params
    expect(compiled.querySelector('#latitude').textContent).toContain('Latitude : 18.578821075179366');
    expect(compiled.querySelector('#longitude').textContent).toContain('Longitude : 73.73917436547346');
    // Test Service call logic
    expect(compiled.querySelector('.city').textContent).toContain('City : Pune City');
    expect(compiled.querySelector('.postalCode').textContent).toContain('PostalCode : 411051');
  });
});
