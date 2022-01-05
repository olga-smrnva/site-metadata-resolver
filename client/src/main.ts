import "./polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * Create a simple Angular app so you could get metadata for a url:
 * 1. Enter some url,
 * 2. Click on an 'get details' button.
 * 3. Go to the server and fetch metadata for this url.
 * note: see image at './output.png'
 **/
