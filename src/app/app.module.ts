//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//3rd Party Library Imports
import { UIRouterModule } from "@uirouter/angular";
import { RestangularModule } from "ngx-restangular";
//Application Imports
import { AppComponent } from './app.component';
import { IngotBaseModule } from "./ingot-base/ingot-base.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      RestangularModule.forRoot((RestangularProvider) => {
          RestangularProvider.setBaseUrl('http://api.ingotportal.local/app_dev.php/api/v1');
          RestangularProvider.setDefaultHeaders(
              {
                  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJsZXdpcy5oaWRlc0B3YXJyYW50LWdyb3VwLmNvbSIsImlwIjoiOjoxIiwiZXhwIjoxNTU0NzkxOTQyLCJpYXQiOjE1NTQ3MDU1NDJ9.n_Imqi_IWJeG3LG51rBSTV1D8i9kyF411wmWOm8Ug9WzdQ7xdTDx7i3tz-dpLwj6YjKpEbC6jmjwfYDWpI8RkQ83xkvgNkSb3NKsBiw1LwWiQPpvOdRpg1T6nS8JOAnbsdrAi3hFhQnPpud3pTg96swc9SrCybpDb4Zl0pPzw6WUjDxmYJ-dce6dRQTUs-xDUY5W_eumcnmJ0yY0EXTV79F2c-rFQtNV22RoTBOmsgcWUu3e8XvpSDvEIc9PkuUxVYuMG9yXLakncl7lhOG0MPu3J1vRx7P_PgZsgWzrWL5UD1L_sJXE003ZZSvvLe8bUnLWqbZeH-M9mdpK5OH7xxDrsWeVGgNom65sB4uqj4v7mNXLmFejvJJEujmUscurUIdSpigKqP1_OuzdFyCbtvvEX8KxE1gbgp7EBrcGx0V99ib8grdsf9_NWLaE61UZJP3f-BYua06OXa4gSbhJya7dkwfWsCakmRYOsiGU7tpqBRGnSW2eysQ8L_l2UAlnPdNsSoNhi1sOsLiHVi9M4CDL7bmflJL5ZEizSLBzFO8sMR-22Bj_07X7Wy60di8BCVm5d-Ta1Pedz-XzVmSp9kJ5lZw0D6SqL-Nf48X40YbWNiD0abYYdXWS60vnz5YxZFufn5X-P0g2vBe3ON-Ob4KvW2MBgwYcPVO7fvu8SLA',
              }
          );
      }),
      UIRouterModule.forRoot({ states: [ ], useHash: true, otherwise: '/' }),
      IngotBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
