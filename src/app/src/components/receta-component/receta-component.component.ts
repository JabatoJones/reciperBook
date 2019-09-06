import { Component, OnInit, Input } from '@angular/core';
import { Reciper } from '../../models/reciper.model';

@Component({
  selector: 'app-receta-component',
  templateUrl: './receta-component.component.html',
  styleUrls: ['./receta-component.component.css']
})
export class RecetaComponentComponent implements OnInit {

  @Input() public reciper: any;

  lookAt: string = "Look at the recipe ";
  ingredients:string = "The ingredients are: ";
  constructor() { }

  ngOnInit() {
  }
   /**
   * openWindow simulate a modal window 
   * @param reciper Object contains reciper
   */
  openWindow(reciper:Reciper) {
    //Resize modal
    let theReciper = new Reciper(reciper);
    let left = (screen.width / 2) - (800 / 2);
    let top = (screen.height / 2) - (600 / 2);
    window.open(theReciper.hrefReciper, theReciper.nameReciper, 'width=800, height=600, top='+top+', left='+left);
  }



}
