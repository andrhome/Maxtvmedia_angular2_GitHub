import {Routes} from "@angular/router";
import {mainViewComponent} from "../views/main-view/main-view.component";
import {minorViewComponent} from "../views/minor-view/minor-view.component";
import {ParselTypeComponent} from "../views/parsels-view/parsel-type/parsel-type.component";
import {PostServicesComponent} from "../views/parsels-view/post-services/post-services.component";
import {ParselsListComponent} from "../views/parsels-view/parsels-list/parsels-list.component";
import {LogInComponent} from "../views/login-view/login.component";

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'mainView', pathMatch: 'full'},

    // App views
    {path: 'mainView', component: mainViewComponent},
    {path: 'minorView', component: minorViewComponent},
    {path: 'parcelTypeView', component: ParselTypeComponent},
    {path: 'postServicesView', component: PostServicesComponent},
    {path: 'parcelsListView', component: ParselsListComponent},
    {path: 'login', component: LogInComponent},

    // Handle all other routes
    {path: '**',    component: mainViewComponent }
];
