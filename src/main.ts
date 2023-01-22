import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { resolve } from "path";
import * as dotenv from "dotenv";


dotenv.config({ path: resolve(__dirname, "../.env") });


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
