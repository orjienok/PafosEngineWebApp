import { Component, Input } from "@angular/core";

enum PlatformSpec {desktop = "desktop",mobile = "mobile"};

@Component({
    selector: "app-ContentContainer",
    templateUrl: "./ContentContainer.component.html",
})

export class ContentContainerComponent{
    @Input() platform! : PlatformSpec;

}