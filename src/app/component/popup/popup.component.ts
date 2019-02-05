import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
/*
  onClose(){
    this.dialog.closeAll();
  }
*/
}
