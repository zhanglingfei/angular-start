import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom.component';
import { HomeComponent } from './pages/home/home.component';

const customRoutes: Routes = [
	{
		path: '',
		component: CustomComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent,
				data: {
					title: '系统主页'
				}
			},
			{
				path: 'map',
				loadChildren: './pages/map/map.module#MapModule',
			},
			{
				path: 'globe',
				loadChildren: './pages/globe/globe.module#GlobeModule',
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(customRoutes)
	],
	exports: [
		RouterModule
	]
})

export class CustomRoutingModule {
}
