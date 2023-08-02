import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostComponent } from './http-post.component';

describe('HttpPostComponent', () => {
  let component: HttpPostComponent;
  let fixture: ComponentFixture<HttpPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpPostComponent]
    });
    fixture = TestBed.createComponent(HttpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
