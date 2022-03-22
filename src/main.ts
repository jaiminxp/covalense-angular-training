import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BuiltinDirectivesModule } from './app/concepts/builtin-directives/builtin-directives.module';
import { ComponentsModule } from './app/concepts/components/components.module';
import { DataBindingModule } from './app/concepts/data-binding/data-binding.module';
import { TemplateFormsModule } from './app/concepts/template-forms/template-forms.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(BuiltinDirectivesModule)
  .catch((err) => console.error(err));
