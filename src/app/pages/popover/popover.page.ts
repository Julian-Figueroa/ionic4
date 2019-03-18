import { Component, OnInit } from '@angular/core';
import { PopoverController } from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverController,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
  }

}
