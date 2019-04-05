import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RestangularModule} from "ngx-restangular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      RestangularModule.forRoot((RestangularProvider) => {
              RestangularProvider.setBaseUrl('http://api.ingotportal.local/app_dev.php/api/v1');
              RestangularProvider.setDefaultHeaders(
                  {
                      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJsZXdpcy5oaWRlc0B3YXJyYW50LWdyb3VwLmNvbSIsImlwIjoiOjoxIiwiZXhwIjoxNTU0NTQ3NzA4LCJpYXQiOjE1NTQ0NjEzMDh9.V7LK91K3aGO1MXpuUZZKEQNBRPqawCwv-s7OYuNNpi61lAyxBla3VuanKiqhFIMlT1B-N5erYzkbhTADc2tDOEtcWqxwvWCT_yUddSz3yesDPJcVQUXVFANcoq6J5EuiJ130R9nE0pD9C0nh27s5Z_sDqJXErNH55bWfOt98aVFXPU5XYjwdns91xKctJfrxhKTb6GtnaVK51AMxu-0GhYM46PsOaVkaG1tdalW7333mFdq6Gw_AJIqoq4A-ac__xV3hTntBGfnH5Lx6y72JxAEqEwNb0BDOARxhN0GCtyacHI8R71xN1Fj9Y_XatqlWq9OJua5HgS488CDVPIvLE5_3ecCtT9J_CpEMalYQaDFflB7i2gJgnT4RwlRg3ex8u7hgktHRcL8MMcWupINVksA0q3a31CTNHCpXJYaqTtloOEtz6JHJqYLVDdBzQpF96X6qF-mry5O4abb3yiayysVeDPYlRSyFxDfVW91aNNdDLreJDCBMhZtAKZ317PqTd8dQXxrVpFA-_qnONo5EVlD4uZjWZ0ZE15jEbFKvU_1tJdLasEWRrqm3i2qhlJ5unowO7GjtBJpaaeN1N1Mx4o3lmWuIyu79ucpMwlAbjHQuVjHKz7F0mVvguSxWawUT0hEteyykUm2AEWpRF1TBZClT25bZYYeBron95Y77Cfs',
                  }
              );
          }
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
