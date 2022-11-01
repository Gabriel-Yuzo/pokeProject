import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPokemonsInfoComponent } from './app-pokemons-info.component';

describe('AppPokemonsInfoComponent', () => {
  let component: AppPokemonsInfoComponent;
  let fixture: ComponentFixture<AppPokemonsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPokemonsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPokemonsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
