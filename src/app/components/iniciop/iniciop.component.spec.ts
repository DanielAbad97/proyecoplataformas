import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopComponent } from './iniciop.component';

describe('IniciopComponent', () => {
  let component: IniciopComponent;
  let fixture: ComponentFixture<IniciopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
