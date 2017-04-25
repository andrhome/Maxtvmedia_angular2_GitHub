import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PostServicesComponent } from './post-services.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [PostServicesComponent]
})
export class PostServicesModule {}
