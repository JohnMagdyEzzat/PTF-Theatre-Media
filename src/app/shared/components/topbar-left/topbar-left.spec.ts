import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarLeft } from './topbar-left';

describe('TopbarLeft', () => {
  let component: TopbarLeft;
  let fixture: ComponentFixture<TopbarLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarLeft],
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarLeft);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
