import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'contact-widget',
  standalone: true,
  imports: [CommonModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
  template: `
    <p-fluid>
      <div id="contact" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
        <div class="flex mt-8">
          <div class="card flex flex-col gap-6 w-full">
            <div class="font-semibold text-xl">Contactanos</div>
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex flex-wrap gap-2 w-full">
                <label for="firstname2">Nombre y Apellido</label>
                <input pInputText id="firstname2" type="text" />
              </div>
              <div class="flex flex-wrap gap-2 w-full">
                <label for="lastname2">Correo Electronico</label>
                <input pInputText id="lastname2" type="text" />
              </div>
            </div>

            <div class="flex flex-wrap">
              <label for="address">Descripcion del remolque</label>
              <textarea pTextarea id="address" rows="4"></textarea>
            </div>
          </div>
        </div>
      </div>
    </p-fluid>
  `
})
export class ContactWidget {
  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];

  dropdownItem = null;
}
