import { Injectable } from '@angular/core';

@Injectable()
export class RemolqueService {
  getData() {
    return [
      {
        itemImageSrc: 'https://triciclosdecarga.com/img/productos/remolque-para-moto-azul-large-1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para moto',
        title: 'Remolques para Moto',
        description: 'Transporta tu moto de forma segura y eficiente.'
      },
      {
        itemImageSrc: 'https://paratucarro.com/wp-content/uploads/2021/07/Remolque-estacas-4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para carro',
        title: 'Remolques para Carro',
        description: 'Remolques versátiles para ampliar la capacidad de carga de tu vehículo.'
      },
      {
        itemImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHnqjmZ3QlSGbiaWnnXJb90li0nc3RdyQjA&s',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques de comidas',
        title: 'Remolques de Comidas',
        description: 'Soluciones prácticas para negocios gastronómicos móviles.'
      },
      {
        itemImageSrc: 'https://revistadiners.com.co/wp-content/uploads/2024/03/food_truck_1200x800_2024.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Food Truck',
        title: 'Food Truck',
        description: 'Espacios equipados para llevar tu cocina a cualquier lugar.'
      },
      {
        itemImageSrc: 'https://dinoautos.com/wp-content/uploads/2022/06/porta-bicicletas-carro_0000_Capa-5.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Soporte de bicicletas',
        title: 'Soporte de Bicicletas',
        description: 'Transporta tus bicicletas de manera cómoda y segura.'
      },
      {
        itemImageSrc: 'https://m.media-amazon.com/images/I/91L-iYL7HfL.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para mascotas',
        title: 'Remolques para Mascotas',
        description: 'La mejor opción para viajar con tus mascotas cómodamente.'
      },
      {
        itemImageSrc: 'https://i.pinimg.com/736x/39/24/50/39245025fbbe21d7b017ad7e4fa8638d.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques monorueda',
        title: 'Remolques Monorueda',
        description: 'Diseño innovador para mayor estabilidad y funcionalidad.'
      },
      {
        itemImageSrc: 'https://www.moto1pro.com/sites/default/files/remolques_moto_4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques para llevar motos',
        title: 'Remolques para Llevar Motos',
        description: 'Soluciones seguras para el transporte de motocicletas.'
      },
      {
        itemImageSrc: 'https://comercialderiegos.com/wp-content/uploads/2020/09/Comercial-de-Riegos_Remolque_carroceria_04.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques agrícolas',
        title: 'Remolques Agrícolas',
        description: 'Herramientas esenciales para el transporte de productos del campo.'
      },
      {
        itemImageSrc: 'https://remolquescuni.com/wp-content/uploads/2021/05/Remolque-de-fibra-ONNE-S.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques cerrados',
        title: 'Remolques Cerrados',
        description: 'Protección total para el transporte de mercancías.'
      },
      {
        itemImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRVt8hW38bmdVk85lfXhsyug0D1i83f31pw&s',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Remolques abiertos',
        title: 'Remolques Abiertos',
        description: 'Versatilidad y facilidad de carga para cualquier tipo de transporte.'
      },
      {
        itemImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1nJLZkk4B9K0feIBqeMikwQF4cHzovEWhw&s',
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
