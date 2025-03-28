import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { TrailerService } from '../../service/trailer.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'map-contact-widget',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FluidModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    TextareaModule,
    SelectModule,
    ReactiveFormsModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [TrailerService, MessageService],
  template: `
    <div id="map">
      <div class="text-center pt-10">
        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">¿Dónde encontrarnos?</div>
        <span class="text-muted-color text-2xl">Nos encontramos en la Av Cl 80 #90-68, al frente de la estación de transmilenio Cra 90</span>
      </div>
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248.52323683697756!2d-74.10539069593702!3d4.705310045485244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b4b7109b855%3A0x150516ac231d2e12!2sAv%20Cl%2080%20%2390-68%2C%20Engativ%C3%A1%2C%20Bogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1743188090279!5m2!1ses!2sco"
        width="1000"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <p-toast />
  `,
  styles: [
    `
      .map-container {
        height: 500px;
        width: 100%;
      }
      .iframe-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 40px;
      }
    `
  ]
})
export class MapContactWidget {}
