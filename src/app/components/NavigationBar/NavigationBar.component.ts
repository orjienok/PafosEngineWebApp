import { Platform } from "@angular/cdk/platform";
import { Component } from "@angular/core";

enum PlatformState {
    mobile,
    desktop
}

@Component({
    selector: 'app-NavigationBar',
    templateUrl: './NavigationBar.component.html',
})

export class NavigationBarComponent{
    visible : boolean = false;

    toggle()
    {
        this.visible = !this.visible;
        console.log(this.visible);
    }
}