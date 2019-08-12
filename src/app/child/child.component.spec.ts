import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent]
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
    expect(compiled.querySelector('#latitude').textContent).toContain('Latitude : 18.578821075179366');
    expect(compiled.querySelector('#longitude').textContent).toContain('Longitude : 73.73917436547346');
  });
});
