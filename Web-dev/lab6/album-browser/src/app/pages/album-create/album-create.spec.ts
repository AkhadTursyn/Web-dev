import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCreate } from './album-create';

describe('AlbumCreate', () => {
  let component: AlbumCreate;
  let fixture: ComponentFixture<AlbumCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
