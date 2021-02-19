import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCategoriaComponent } from './grid-categoria.component';

describe('GridCategoriaComponent', () => {
  let component: GridCategoriaComponent;
  let fixture: ComponentFixture<GridCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
