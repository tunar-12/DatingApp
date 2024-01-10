import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequstCount = 0;


  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequstCount++;
    this.spinnerService.show(undefined, {
      type: 'pacman',
      bdColor: 'rgba(rgba(0, 0, 0, 0.8))',
      color: '#fff'
    })
  }

  idle() {
    this.busyRequstCount--;
    if(this.busyRequstCount<=0){
      this.busyRequstCount = 0;
      this.spinnerService.hide();
    }
  }
}
