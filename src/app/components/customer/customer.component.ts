import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public navigateToSection(section:any) {
      const elmnt = document.getElementById(section);
      if(elmnt) elmnt.scrollIntoView({ behavior: "smooth" });
}
}
