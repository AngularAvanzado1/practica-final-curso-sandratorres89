import { Component, OnInit } from '@angular/core';
import { RegionService } from './_store/region.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ab-world-bank-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  public regions$: Observable<any>;

  constructor(
    private regionService: RegionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.regionService.loadRegions();
    this.regions$ = this.regionService.getRegionsList$();
  }

  loadDetails(region) {
    this.router.navigate([`/region/${region.code}`]);
  }
}
