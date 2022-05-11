import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dining',
    loadChildren: () => import('./dining/dining.module').then( m => m.DiningPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'list-view',
    loadChildren: () => import('./shared/list-view/list-view.module').then( m => m.ListViewPageModule)
  },
  {
    path: 'restarant-dining',
    loadChildren: () => import('./shared/restarant-dining/restarant-dining.module').then( m => m.RestarantDiningPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./shared/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./shared/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'rough',
    loadChildren: () => import('./shared/rough-space/rough/rough.module').then( m => m.RoughPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./shared/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./shared/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'book-place',
    loadChildren: () => import('./book-place/book-place.module').then( m => m.BookPlacePageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./shared/booking/booking.module').then( m => m.BookingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
