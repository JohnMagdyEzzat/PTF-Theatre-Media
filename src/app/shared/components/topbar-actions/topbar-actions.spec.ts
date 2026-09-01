import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarActions } from './topbar-actions';

describe('TopbarActions', () => {
  let component: TopbarActions;
  let fixture: ComponentFixture<TopbarActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarActions],
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
