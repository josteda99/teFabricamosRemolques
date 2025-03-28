import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { PhotoService } from '../../service/photo.service';
import { RemolqueService } from '../../service/remolque.service';

@Component({
  selector: 'gallery-widget',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule],
  providers: [RemolqueService, PhotoService],
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
    <div id="gallery" class="py-6  lg:px-20 mt-8 mx-0 lg:mx-10">
      <div class="grid grid-cols-12 gap-4 justify-center">
        <div class="col-span-12 text-center mt-20 mb-6">
          <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Nuestros Productos</div>
          <span class="text-muted-color text-2xl">Soluciones innovadoras para cada necesidad</span>
        </div>
      </div>
      <div class="col-span-12 text-center mt-20 mb-6">
        <p-carousel [value]="images" [numVisible]="3" [numScroll]="3" [circular]="true" [responsiveOptions]="carouselResponsiveOptions" [autoplayInterval]="5000">
          <ng-template let-remolque #item>
            <div class="border border-surface rounded-border m-2 p-4">
              <div class="mb-4">
                <div class="relative mx-auto aspect-square">
                  <img [src]="remolque.itemImageSrc" [alt]="remolque.name" class="w-full h-full object-cover mx-auto rounded-border" />
                </div>
              </div>
              <div class="mb-4 font-bold">
                <h4>{{ remolque.title }}</h4>
              </div>
              <div class="flex justify-between items-center">
                <span> {{ remolque.description }} </span>
              </div>
            </div>
          </ng-template>
        </p-carousel>
      </div>
    </div>
  `
})
export class GalleryWidget {
  images!: any[];

  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private remolqueService: RemolqueService) {}

  ngOnInit() {
    this.remolqueService.getImages().then((images) => {
      this.images = images;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}
