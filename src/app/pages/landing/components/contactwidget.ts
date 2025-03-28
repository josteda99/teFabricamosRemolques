import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { TrailerService } from '../../service/trailer.service';
import { selectItemI } from '../../../shared/interfaces/select-item.interface';
import { emailPattern } from '../../../shared/utils/validation-utils';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'contact-widget',
  standalone: true,
  imports: [CommonModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, SelectModule, ReactiveFormsModule, ToastModule],
  providers: [TrailerService, MessageService],
  template: `
    <div id="contact">
      <div class="text-center pt-10">
        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Contactanos</div>
      </div>
      <p-fluid>
        <div class="py-6 px-6 lg:px-20  mx-0 lg:mx-20" [formGroup]="contactForm">
          <div class="flex mt-8">
            <div class="card flex flex-col gap-6 w-full">
              <div>
                <h4>Informacion de contacto</h4>
              </div>
              <div class="flex flex-col md:flex-row gap-6">
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="name">Nombre y apellido*</label>
                  <input pInputText id="name" type="text" [ngClass]="{ 'ng-invalid ng-dirty border-200': name?.invalid && checkInvalidFields() }" formControlName="name" />
                </div>
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="email">Correo electronico*</label>
                  <input pInputText id="email" type="email" [ngClass]="{ 'ng-invalid ng-dirty border-200': email?.invalid && checkInvalidFields() }" formControlName="email" />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-6">
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="phone">Telefono*</label>
                  <input pInputText id="phone" type="phone" [ngClass]="{ 'ng-invalid ng-dirty border-200': phone?.invalid && checkInvalidFields() }" formControlName="phone" />
                </div>
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="contact_preference">Preferencia de contacto</label>
                  <p-select
                    formControlName="contactPreference"
                    [options]="contactOptions"
                    optionLabel="name"
                    optionValue="name"
                    placeholder="Whatsapp, Telefono, Email..."
                    class="w-full"
                  />
                </div>
              </div>
              <div>
                <h5>Informacion del remolque</h5>
              </div>
              <div class="flex flex-col md:flex-row gap-6">
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="trailer_type">Tipo de remolque*</label>
                  <p-select
                    formControlName="trailerType"
                    [options]="trailerOptions"
                    optionLabel="name"
                    placeholder="Remolque para ..."
                    optionValue="name"
                    [ngClass]="{ 'ng-invalid ng-dirty border-200': trailerType?.invalid && checkInvalidFields() }"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="dimensions">Dimensiones aproximadas</label>
                  <div class="flex ">
                    <input pInputText id="dimensions" placeholder="largo (m)" type="number" formControlName="length" />
                    <input class="ml-3" pInputText id="dimensions" placeholder="ancho (m)" type="number" formControlName="width" />
                    <input class="ml-3" pInputText id="dimensions" placeholder="alto (m)" type="number" formControlName="heigth" />
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 w-full">
                  <label for="capacity">Capacidad de carga</label>
                  <input pInputText id="capacity" placeholder="kg" type="number" />
                </div>
              </div>

              <div class="flex flex-wrap">
                <label for="additional">Descripcion adicional del remolque</label>
                <textarea pTextarea id="additional" rows="4" placeholder="Quisiera que tuviera..." formControlName="additional"></textarea>
              </div>

              <div class="w-full ">
                <button pButton type="button" label="Enviar" icon="pi pi-check" (click)="sendContactEmail()" class="w-3rem"></button>
              </div>
            </div>
          </div>
        </div>
      </p-fluid>
    </div>
    <p-toast />
  `
})
export class ContactWidget implements OnInit {
  private trailerService = inject(TrailerService);
  private messageService = inject(MessageService);

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.required, emailPattern], nonNullable: true }),
    phone: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    contactPreference: new FormControl(''),
    trailerType: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    length: new FormControl(0),
    width: new FormControl(0),
    heigth: new FormControl(0),
    capacity: new FormControl(0),
    additional: new FormControl('')
  });

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get trailerType() {
    return this.contactForm.get('trailerType');
  }

  public trailerOptions: selectItemI[] = [];
  public checkInvalidFields = signal(false);

  public contactOptions: selectItemI[] = [
    { name: 'Whatsapp', code: 'WhatsApp' },
    { name: 'Telefono', code: 'Telefono' },
    { name: 'Email', code: 'Email' }
  ];

  public ngOnInit(): void {
    this.trailerService.getImages().then((trailers) => (this.trailerOptions = trailers.map((trailer) => ({ name: trailer.title, code: trailer.title }))));
  }

  public sendContactEmail(): void {
    this.checkInvalidFields.set(true);
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ingresa todos los campos obligatorios' });
      return;
    }

    console.log('send email');
  }
}
