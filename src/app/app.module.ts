import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/404/page-not-found.component';
import { LoginService } from './pages/login/login.service';
import { EDatePipe } from './pipes/eDate.pipe';
import { ETimePipe } from './pipes/eTime.pipe';
import { RequestService } from './services/request.service';
import { DateTimeService } from './services/datetime.service';
import { FilePathService } from './services/filepath.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ConfirmDialogModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent,
		EDatePipe,
		ETimePipe
	],
	providers: [
		AuthGuard,
		AuthService,
		RequestService,
		LoginService,
		DateTimeService,
		FilePathService,
		ConfirmationService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
	}
}
