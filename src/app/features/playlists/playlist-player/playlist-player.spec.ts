import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistPlayer } from './playlist-player';

describe('PlaylistPlayer', () => {
  let component: PlaylistPlayer;
  let fixture: ComponentFixture<PlaylistPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistPlayer],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
