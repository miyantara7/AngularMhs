import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertsComponent } from './inserts.component';

describe('InsertsComponent', () => {
  let component: InsertsComponent;
  let fixture: ComponentFixture<InsertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
