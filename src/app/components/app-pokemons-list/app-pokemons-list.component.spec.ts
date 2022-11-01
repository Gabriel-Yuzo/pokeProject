import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPokemonsListComponent } from './app-pokemons-list.component';

describe('AppPokemonsListComponent', () => {
  let component: AppPokemonsListComponent;
  let fixture: ComponentFixture<AppPokemonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPokemonsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
