// src/shop/shop.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
  getShopData() {
    return {
      hero: {
        title: 'PREMIUM ESSENTIALS',
        subtitle: 'Spring 2025',
        description: 'Crafted for maestros.',
        image: '/images/nr.png',
        scale: 80,
      },
      products: [
        {
          id: '1',
          name: 'Akira Tee',
          price: 25,
          badge: 'ECO',
          badgeColor: 'bg-emerald-500',
          image: '/images/akira.png',
          tall: false,
          scale: 100,
        },
        {
          id: '2',
          name: 'Final Fantasy 7 Tee',
          price: 25,
          badge: 'HOT',
          badgeColor: 'bg-rose-500',
          image: '/images/ff.png',
          tall: true,
          scale: 90,
        },
        {
          id: '3',
          name: 'Raguel Tee',
          price: 28,
          badge: 'NEW',
          badgeColor: 'bg-amber-500',
          image: '/images/raguel.png',
          tall: true,
          scale: 80,
        },
        {
          id: '4',
          name: 'Zoot Times Tee',
          price: 30,
          badge: '★',
          badgeColor: 'bg-gray-900',
          image: '/images/zoot.png',
          tall: false,
          scale: 90,
        },
      ],
    };
  }
}