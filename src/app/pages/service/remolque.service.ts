import { Injectable } from '@angular/core';

@Injectable()
export class RemolqueService {
  getData() {
    return [
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para moto',
        title: 'Remolques para Moto',
        description: 'Transporta tu moto de forma segura y eficiente.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para carro',
        title: 'Remolques para Carro',
        description: 'Remolques versátiles para ampliar la capacidad de carga de tu vehículo.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques de comidas',
        title: 'Remolques de Comidas',
        description: 'Soluciones prácticas para negocios gastronómicos móviles.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Food Truck',
        title: 'Food Truck',
        description: 'Espacios equipados para llevar tu cocina a cualquier lugar.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Soporte de bicicletas',
        title: 'Soporte de Bicicletas',
        description: 'Transporta tus bicicletas de manera cómoda y segura.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para mascotas',
        title: 'Remolques para Mascotas',
        description: 'La mejor opción para viajar con tus mascotas cómodamente.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques modorueda',
        title: 'Remolques Modorueda',
        description: 'Diseño innovador para mayor estabilidad y funcionalidad.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para llevar motos',
        title: 'Remolques para Llevar Motos',
        description: 'Soluciones seguras para el transporte de motocicletas.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques agrícolas',
        title: 'Remolques Agrícolas',
        description: 'Herramientas esenciales para el transporte de productos del campo.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques cerrados',
        title: 'Remolques Cerrados',
        description: 'Protección total para el transporte de mercancías.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques abiertos',
        title: 'Remolques Abiertos',
        description: 'Versatilidad y facilidad de carga para cualquier tipo de transporte.'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques plegables',
        title: 'Remolques Plegables',
        description: 'Diseño compacto y práctico para un almacenamiento eficiente.'
      }
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
