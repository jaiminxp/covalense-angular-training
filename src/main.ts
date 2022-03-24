import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BuiltinDirectivesModule } from './app/concepts/builtin-directives/builtin-directives.module';
import { ComponentsModule } from './app/concepts/components/components.module';
import { CustomEventsModule } from './app/concepts/custom-events/custom-events.module';
import { DataBindingModule } from './app/concepts/data-binding/data-binding.module';
import { LifecycleModule } from './app/concepts/lifecycle/lifecycle.module';
import { TemplateFormsModule } from './app/concepts/template-forms/template-forms.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(LifecycleModule)
  .catch((err) => console.error(err));
