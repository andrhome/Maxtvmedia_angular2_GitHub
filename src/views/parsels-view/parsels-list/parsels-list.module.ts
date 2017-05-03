import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ParselsListComponent } from "./parsels-list.component";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CreateIncomingParselComponent } from "./create-parsel/create-incoming-parsel.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [ParselsListComponent, CreateIncomingParselComponent]
})
export class ParselsListModule {}
