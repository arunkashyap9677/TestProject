import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  testvar = "Test variable";
  isDisabled: boolean = true;
  styleClasses: string = "boldclass italicsClass";
  isBold: boolean = true;
  isItalic: boolean = true;
  isColor: boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }

  ApplyClasses()
  {
    let classes = 
    {
      "boldClass" : this.isBold,
      "italicsClass" : this.isItalic,
      "colorClass" : this.isColor,
    }

    return classes;

  }

}
