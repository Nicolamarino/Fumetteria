import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { TitoloPaginaComponent } from 'src/app/components/titolo-pagina/titolo-pagina.component';
import { BottonePaginaComponent } from 'src/app/components/bottone-pagina/bottone-pagina.component';
import { CustomLinkComponent } from 'src/app/components/custom-link/custom-link.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage, TitoloPaginaComponent, BottonePaginaComponent, CustomLinkComponent]
})
export class RegisterPageModule {}
