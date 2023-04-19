import { Platform } from "@angular/cdk/platform";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-NavigationBar',
    templateUrl: './NavigationBar.component.html',
})

export class NavigationBarComponent{
    visible : boolean = false;

    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();

    toggle()
    {
        this.visible = !this.visible;
        if(this.visible)
        {
            this.open.emit('open');
        } 
        else 
        {
            this.close.emit('close');
        }
    }

}