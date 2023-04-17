import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

enum PlatformSpec {
  mobile,desktop
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public platform : Platform)
  {
    if (platform.ANDROID || platform.IOS) {
      this.appPlatformSpec = PlatformSpec.mobile;
    } else {
      this.appPlatformSpec = PlatformSpec.desktop;
    }

  }
  title = 'my-app';
  appPlatformSpec! : PlatformSpec;
}
