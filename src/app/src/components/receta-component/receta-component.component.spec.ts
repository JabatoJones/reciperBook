import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaComponentComponent } from './receta-component.component';

describe('RecetaComponentComponent', () => {
  let component: RecetaComponentComponent;
  let fixture: ComponentFixture<RecetaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
