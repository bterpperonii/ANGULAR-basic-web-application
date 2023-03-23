import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Structure } from 'src/app/interface';
import { StructureService } from 'src/app/rest-service/structure/structure.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit{
  structure: Structure = {
    structureId: '',
    data: ''
  };
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private structureService: StructureService
  ) { }

  ngOnInit() {
    this.getStructureByid();
  }

  async getStructureByid(): Promise<void> {
    const structureId = Number(this.route.snapshot.paramMap.get('structureId'));
    this.structureService.getStructureById(structureId).subscribe(structure => this.structure = structure);
  }

  goBack(): void {
    this.location.back();
  }
}
