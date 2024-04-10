import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVariantComponent } from './list-variant.component';

describe('ListVariantComponent', () => {
  let component: ListVariantComponent;
  let fixture: ComponentFixture<ListVariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVariantComponent]
    });
    fixture = TestBed.createComponent(ListVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
