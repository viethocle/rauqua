import { AppErrorHandler } from './common/errorHandle/appErrorHandler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderLayoutComponent } from './components/layout/header-layout/header-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/auth/signUp/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    HeaderLayoutComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en',
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
