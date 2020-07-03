import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { BeUiModule } from '@practica-final/shared/ui';
import { RegionService } from './_store/region.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Observer } from 'rxjs';

class FakeRegionService {
  loadRegions(){};

  getRegionsList$() {
    return new Observable<any>((observer: Observer<any>) => {
      observer.next([
        {
          'id': 'testId1',
          'code': 'testCode1',
          'name': 'testName1'
        },
        {
         'id': 'testId2',
         'code': 'testCode2',
         'name': 'testName2'
        }
      ]);
    });
  }
}

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsComponent ],
      imports: [BeUiModule, RouterTestingModule],
      providers: [
        { provide: RegionService, useClass: FakeRegionService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should load regions', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('be-ui-item-list').length).toBe(1);
  });
});
