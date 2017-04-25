import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
import { ParselTypeComponent } from "./parsel-type.component";
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [ParselTypeComponent]
})
export class ParselTypeModule {}
