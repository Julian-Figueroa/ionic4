import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'contact',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'skip-backward',
      name: 'Back Drop',
      redirectTo: '/backdrop'
    },
    {
      icon: 'cloud-circle',
      name: 'Badge',
      redirectTo: '/badge'
    },
    {
      icon: 'radio-button-on',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'filing',
      name: 'Chip',
      redirectTo: '/chip'
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/datetime'
    },
    {
      icon: 'resize',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'cube',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'pricetag',
      name: 'Item',
      redirectTo: '/item'
    },
    {
      icon: 'list-box',
      name: 'List',
      redirectTo: '/list'
    },
    {
      icon: 'refresh',
      name: 'Loading',
      redirectTo: '/loading'
    },
  ];

  constructor(private menu: MenuController) { }


  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

