import { Component, OnInit } from '@angular/core';
import { ModalController } from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ModalController,
      componentProps: {
        'prop1': 1,
        'prop2': 2
      }
    });
  }
}
