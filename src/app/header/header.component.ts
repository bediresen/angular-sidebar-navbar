import {Component, HostListener, Input, OnInit} from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchHasOverlay = false;

  constructor() { }

  @HostListener('window:resize' , ['$event'])
  onResize(event:any){
    this.checkCanShowSearchHasOverlay(window.innerWidth);
  }
  ngOnInit(): void {
this.checkCanShowSearchHasOverlay(window.innerWidth);
  }

  getHeadClass(): string{
    let styleClass = "";
    if(this.collapsed && this.screenWidth > 768){
      styleClass = "head-trimmed";
    }else{
      styleClass =  "head-md-screen";
    }
    return styleClass;
  }

  checkCanShowSearchHasOverlay(innerWidth: number): void{
    if(innerWidth < 845){
      this.canShowSearchHasOverlay = true;
    }else{
      this.canShowSearchHasOverlay = false;
    }
  }

}
