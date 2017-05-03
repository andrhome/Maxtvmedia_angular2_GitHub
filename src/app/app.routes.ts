import {Routes} from "@angular/router";
import {mainViewComponent} from "../views/main-view/main-view.component";
import {minorViewComponent} from "../views/minor-view/minor-view.component";
import {ParselTypeComponent} from "../views/parsels-view/parsel-type/parsel-type.component";
import {PostServicesComponent} from "../views/parsels-view/post-services/post-services.component";
import {ParselsListComponent} from "../views/parsels-view/parsels-list/parsels-list.component";
import {CreateIncomingParselComponent} from "../views/parsels-view/parsels-list/create-parsel/create-incoming-parsel.component";

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'mainView', pathMatch: 'full'},

    // App views
    {path: 'mainView', component: mainViewComponent},
    {path: 'minorView', component: minorViewComponent},
    {path: 'parselTypeView', component: ParselTypeComponent},
    {path: 'postServicesView', component: PostServicesComponent},
    {path: 'parselsListView', component: ParselsListComponent},
    {path: 'create-incoming-parsel', component: CreateIncomingParselComponent},

    // Handle all other routes
    {path: '**',    component: mainViewComponent }
];
