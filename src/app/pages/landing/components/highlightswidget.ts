import { Component } from '@angular/core';

@Component({
  selector: 'highlights-widget',
  styles: [
    `
      .aspect-square {
        position: relative;
        width: 100%;
        padding-top: 100%;
      }

      .aspect-square img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `
  ],
  template: `
    <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
      <div class="text-center">
        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Características</div>
        <span class="text-muted-color text-2xl">Que todo remolque debe tener</span>
      </div>

      <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
        <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none" style="border-radius: 8px">
          <!-- <img src="https://triciclosdecarga.com/img/productos/remolque-para-moto-azul-large-1.jpg" class="w-11/12" alt="mockup mobile" /> -->
          <div class="relative mx-auto aspect-square">
            <img src="https://triciclosdecarga.com/img/productos/remolque-para-moto-azul-large-1.jpg" alt="materiales" class="w-full h-full object-cover mx-auto rounded-border" />
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
          <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
            <i class="pi pi-fw pi-hammer !text-4xl text-purple-700"></i>
          </div>
          <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Construcción</div>
          <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px">
            Fabricamos remolques con <strong>materiales de alta resistencia</strong>, garantizando una <strong>estructura robusta y duradera</strong>. Nuestro
            <strong>sistema de enganche</strong> asegura <strong>máxima estabilidad</strong> en el transporte, mientras que la <strong>amplia capacidad de carga</strong> permite
            adaptarse a diversas necesidades sin comprometer el rendimiento.
          </span>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
        <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
          <div class="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
            <i class="pi pi-fw pi-shield !text-3xl text-yellow-700"></i>
          </div>
          <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Diseño Seguro, Funcional y Confortable</div>
          <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px">
            Nuestros remolques ofrecen <strong>seguridad y firmeza</strong> en cualquier tipo de terreno, garantizando estabilidad en el transporte. Diseñados para una
            <strong>simplicidad en la carga y descarga</strong>, optimizan el tiempo y esfuerzo. Además, su estructura ergonómica brinda una experiencia de
            <strong>confort</strong> y eficiencia en cada uso.
          </span>
        </div>

        <div class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-yellow-100 p-0" style="border-radius: 8px">
          <!-- <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png" class="w-11/12" alt="mockup" /> -->
          <div class="relative mx-auto aspect-square">
            <img src="https://easyhitch.com.co/wp-content/uploads/2022/03/remolque.jpg" alt="materiales" class="w-full h-full object-cover mx-auto rounded-border" />
          </div>
        </div>
      </div>
    </div>
  `
})
export class HighlightsWidget {}
