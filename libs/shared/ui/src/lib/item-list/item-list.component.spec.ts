import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import { Component } from '@angular/core';

@Component({
  selector: `test-item-list`,
  template: `
  <be-ui-item-list [items]="items"></be-ui-item-list>
  `
})

class TestItemList {
 items = [{
   'id': 'testId1',
   'code': 'testCode1',
   'name': 'testName1'
 },
 {
  'id': 'testId2',
  'code': 'testCode2',
  'name': 'testName2'
 }]
}

describe('ItemListComponent', () => {
  let component: TestItemList;
  let fixture: ComponentFixture<TestItemList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestItemList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should load item', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('span').length).toBe(2);
  });
});
