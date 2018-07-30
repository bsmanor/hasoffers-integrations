import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// Angular-Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { TokenVerificatorComponent } from './token-verificator/token-verificator.component';

// Router routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'affiliate', component: AffiliateComponent },
  { path: 'network', component: NetworkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AffiliateComponent,
    NetworkComponent,
    TokenVerificatorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    FlexLayoutModule, BrowserAnimationsModule,
    MatDialogModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatChipsModule, MatDividerModule,
    MatSidenavModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule,
    MatListModule, MatTableModule, MatSelectModule, MatProgressSpinnerModule, MatTooltipModule, MatSnackBarModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
