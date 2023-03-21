import { StructureService } from './../../../rest-service/structure/structure.service';
import { Component, OnInit } from '@angular/core';
import { Structure } from 'src/app/interface';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit{

  structures: Structure[] = [];
  constructor(private structureService: StructureService) { }

  ngOnInit(): void {
    this.getStructures();
  }

  getStructures(): void {
    this.structureService.getStructures().subscribe((structures) => {
      this.structures = structures;
    })
  }
}
  
