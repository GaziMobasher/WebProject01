// src/shop/shop.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
  getShopData() {
    return {
      hero: {
        title: 'PREMIUM ESSENTIALS',
        subtitle: 'Spring 2024',
        description: 'Crafted for those who understand that style isn\'t loud—it\'s confident, refined, unforgettable.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyWGzjuF6kTKfH3SWauVT6bwEXXjDH5w5b2zPaXGxAV_gIV2jiV7JaPay8MMDVJZI_1q_ZFaTvkozZLvmOuiRph5MMUTylwhE9IrmwDUVjoI5nZRn9ZZ67wVA2CjlvdrjEBjT76VTmxurTx0eT86_SfyyyoAyPdol3uLN6KUQK8I9TmuspemK3ljD8HwAcDuQsFuEKe3Ck_SdGrHGd_se2fqETQ2HYAUEoA3lori4udZ-JODe94FIoAKfpa_gCVJd2vCpQqw-j1d__'
      },
      products: [
        {
          id: '1',
          name: 'Classic White',
          price: 25,
          badge: 'ECO',
          badgeColor: 'bg-emerald-500',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBu51dfioYrnrF9C6rK1gyMV_OU0rDb_K0YVjryyP0cD-jtpRHAkHCIOBTO21eSq_SHc0g2GsJp5nUEZDcUqJ-k0mUHRU3OJ9SNNzmSYKtgkLGrkOPzponIuOsF9IxP0fSB3uew7fulqkp4DznJ1rRtNiplQeuaEizFg9FUPmaw-_jzzaoXqHxuiNvS_aY6b2IMsoMp5cuAexXL-w4UmwVz5UUeJAezXiefhBZrCMDj8piSZaK9M9nRFJ3n_vHUB6whMxgma8dLfqu',
          tall: false,
        },
        {
          id: '2',
          name: 'Midnight Navy',
          price: 25,
          badge: 'HOT',
          badgeColor: 'bg-rose-500',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaF7c_QrALb0MoJZlyaJXGe42XIjZvo95DOW1vSth2JS1BSdZoWL8uZlmvgqKhQ1duOQdOj5XzpGGBMc9XWvPgeZO_OkHmV5OsKWd96Vy432LESw0J_ydCJlPpYrmbUeWJMyzmefHFkMs18hmXwjZcRlxESWqFwM8lTrp59cReBHwbmmWYmTFFJmazblEcaa0asg1BLDmjhlpYdkLdBJZOX3adS7D2sJ_EG_Po0XW6k9wxUNAG-7Z5U2IkPUjO2yp2bnfKLjQrqmiH',
          tall: true,
        },
        {
          id: '3',
          name: 'Slate Grey',
          price: 28,
          badge: 'NEW',
          badgeColor: 'bg-amber-500',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAccnNhk9ClT99s2WruVh2rabGzEb1ioFqpLl2QkmgGtkAYGNxevR5dbRn_DmB6NCSTMrleM80Pir3lPHIKJQlTp4WTEIwxDW_8H_F6q0KtMQyvNKs_L0lMWHmUVxkkMoSe0dBpoA-FR93aPmdgfUFxusCMQKoKBFz6jSeZkBwXSQYMoK2vAHsT1Q7zhJDbrmnKeCph57LVimdRS1K66h31KJl4Tn19Rgcs2ETyEUFZFWPH4PPbzauQmK7opc6rpmUmUBxtcQU1VX8g',
          tall: true,
        },
        {
          id: '4',
          name: 'Organic Black',
          price: 30,
          badge: '★',
          badgeColor: 'bg-gray-900',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFnuPORWYmQUn7-S57bWWASlL8d2jLSaYO9Ldhbn67G3sLC_jFu95f_ViBJonaouR2_uLZ_9VtHW9GNpiXK6vTYSJ4fOsA8TFeD1TqhwKk9C0fSLqTyF6ZqhZ_vT7e6Lz4BipwhKgDRHI0ykbXnnOEOq92-Ia_99AkjnOwM1Tb7PNOq9PZoXDVRX0DWsOtfQoIFzPUuZu1FZiW-Ia4Cu4FNDMckzCzY50EIlNCJdwabmNVSzrPDAsQl7oynmzXcK26a7dbCBPqh10u',
          tall: false,
        },
      ],
    };
  }
}