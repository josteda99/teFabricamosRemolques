import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clients-widget',
  standalone: true,
  imports: [CommonModule],
  template: ` <div id="clients" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div
        class="col-span-12 mt-20 mb-20 p-2 md:p-20"
        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
      >
        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
          <div class="text-gray-900 mb-2 text-3xl font-semibold">Nuestros Clientes</div>
          <span class="text-gray-600 text-2xl">Estadisticas y marcas con las que hemos trabajado</span>
          <div class="grid mt-10">
            <div class="col-12">
              <h2 class="text-8xl">58</h2>
              <span>Clientes satisfechos</span>
            </div>
          </div>
          <div class="grid mt-10">
            <div class="grid grid-cols-5 gap-4 justify-center items-center">
              <img src="https://1000marcas.net/wp-content/uploads/2019/11/McDonalds-logo.png" alt="Client 1" class="w-24 h-24 object-cover mx-auto" />
              <img src="https://brandlogos.net/wp-content/uploads/2022/10/coca-cola-logo_brandlogos.net_8kh4z-512x512.png" alt="Client 2" class="w-24 h-24 object-cover mx-auto" />
              <img src="https://www.elcorral.com/img/logo/logo_old.png" alt="Client 3" class="w-24 h-24 object-cover mx-auto" />
              <img
                src="https://images.squarespace-cdn.com/content/v1/6049e33a3512a120620cfe14/1633010113498-F2D3X5PBBMB5IF0F7E9F/01_C%26W_Logo_Moneda_Ag_2020.png"
                alt="Client 3"
                class="w-24 h-24 object-cover mx-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1879px-Burger_King_2020.svg.png"
                alt="Client 3"
                class="w-24 h-24 object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
})
export class ClientsWidget {}
