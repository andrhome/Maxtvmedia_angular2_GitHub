import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import {TopnavbarComponent} from "./topnavbar.component.ts";
import {LogOutComponent} from "../../../components/logout-component/logout.component";

@NgModule({
    declarations: [TopnavbarComponent, LogOutComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [TopnavbarComponent],
})
export class TopnavbarModule {}
