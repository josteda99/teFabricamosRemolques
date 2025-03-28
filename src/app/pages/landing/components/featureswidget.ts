import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'features-widget',
  standalone: true,
  imports: [CommonModule],
  template: ` <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-12 text-center mt-20 mb-6">
        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Nuestros servicios</div>
        <span class="text-muted-color text-2xl">Descubre los servicios que ofrecemos para satisfacer tus necesidades.</span>
      </div>

      <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
        <div
          style="height: 167px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
        >
          <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
            <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi pi-comments !text-2xl text-yellow-700"></i>
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">Asesoramiento</h5>
            <span class="text-surface-600 dark:text-surface-200">Recibe orientación experta adaptada a tus necesidades.</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
        <div
          style="height: 167px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
        >
          <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
            <div class="flex items-center justify-center bg-cyan-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi pi pi-truck !text-2xl text-cyan-700"></i>
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">Alquiler de Remolques</h5>
            <span class="text-surface-600 dark:text-surface-200">Encuentra el remolque perfecto para cada ocasión.</span>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
        <div
          style="height: 167px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
        >
          <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
            <div class="flex items-center justify-center bg-indigo-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi pi pi-palette !text-2xl text-indigo-700"></i>
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">Diseños Innovadores</h5>
            <span class="text-surface-600 dark:text-surface-200">Personaliza carros, motos, bicicletas y más con creatividad.</span>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
        <div
          style="height: 167px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
        >
          <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
            <div class="flex items-center justify-center bg-slate-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi pi pi pi-wrench !text-2xl text-slate-700"></i>
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">Reparación de Remolques</h5>
            <span class="text-surface-600 dark:text-surface-200">Mantenimiento y arreglos para que sigas en movimiento.</span>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
        <div
          style="height: 167px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
        >
          <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
            <div class="flex items-center justify-center bg-orange-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi pi pi pi-cog !text-2xl text-orange-700"></i>
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">Soporte Técnico</h5>
            <span class="text-surface-600 dark:text-surface-200">Atención especializada para cualquier inconveniente.</span>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
        <div
          style="height: 167px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
        >
          <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
            <div class="flex items-center justify-center bg-pink-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
              <i class="pi pi-fw pi pi pi pi-wallet !text-2xl text-pink-700"></i>
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">Economía</h5>
            <span class="text-surface-600 dark:text-surface-200">Soluciones accesibles sin comprometer la calidad.</span>
          </div>
        </div>
      </div>

      <div
        class="col-span-12 mt-20 mb-20 p-2 md:p-20"
        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
      >
        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
          <div class="text-gray-900 mb-2 text-3xl font-semibold">Nuestro objetivo</div>
          <span class="text-gray-600 text-2xl">Compromiso con la calidad y la innovación</span>
          <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
            “Nos esforzamos por ofrecer soluciones de transporte versátiles, seguras y adaptadas a las necesidades de cada cliente, garantizando siempre la mejor calidad y
            funcionalidad.”
          </p>
        </div>
      </div>
    </div>
  </div>`
})
export class FeaturesWidget {}
