import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ParselsListComponent } from "./parsels-list.component";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../../../components/list-component/list.component';
import { AddingFormComponent } from '../../../components/adding-form-component/addin-form.component'

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ParselsListComponent,
        ListComponent,
        AddingFormComponent
    ]
})
export class ParselsListModule {}
