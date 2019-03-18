import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'badge', loadChildren: './pages/badge/badge.module#BadgePageModule' },
  { path: 'button', loadChildren: './pages/button/button.module#ButtonPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'chip', loadChildren: './pages/chip/chip.module#ChipPageModule' },
  { path: 'datetime', loadChildren: './pages/datetime/datetime.module#DatetimePageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'backdrop', loadChildren: './pages/backdrop/backdrop.module#BackdropPageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'item', loadChildren: './pages/item/item.module#ItemPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
