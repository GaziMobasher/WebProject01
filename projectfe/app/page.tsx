// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  badge: string;
  badgeColor: string;
  image: string;
  tall?: boolean;
}

interface PageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  products: Product[];
}

export default function HomePage() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/shop', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#32a862] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-semibold">Error: {error || 'No data available'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Ambient Background Effects - GREEN GRADIENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#32a862]/20 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-emerald-500/15 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-full min-h-screen bg-white">
        
        {/* Header with Diagonal Cut - GREEN GRADIENT */}
        <header className="relative h-16 md:h-20 bg-gradient-to-br from-[#32a862] via-emerald-500 to-green-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
          
          <div className="relative h-full flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Empty space in center for logo */}
            <div className="flex-1"></div>
            
            <button className="-mt-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all -mt-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Diagonal Bottom Edge */}
          <div className="absolute -bottom-1 left-0 right-0 h-8 bg-white" 
               style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }} />
        </header>

        {/* Logo Section - White Region */}
        <section className="bg-white py-6 md:py-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center">
            <div className="flex items-center justify-center gap-4">
              <Image 
                src="/icons/logo.png" 
                alt="AURA Logo" 
                width={150}
                height={60}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight" 
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Tee Bay
              </h1>
            </div>
          </div>
        </section>

        {/* Hero Section - Magazine Style */}
        <section className="px-6 md:px-12 pt-8 md:pt-16 pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Hero Image Container */}
            <div className="relative order-2 md:order-1">
              {/* Large Quote Mark Decoration - GREEN */}
              <div className="absolute -left-4 md:-left-8 -top-6 md:-top-12 text-[120px] md:text-[180px] font-serif text-[#32a862]/20 leading-none select-none z-0">
                "
              </div>
              
              <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl"
                   style={{ 
                     transform: 'rotate(-1deg)',
                     boxShadow: '20px 20px 60px rgba(0,0,0,0.1), -20px -20px 60px rgba(255,255,255,0.5)'
                   }}>
                <div className="aspect-[3/4] md:aspect-[4/5] relative">
                  <img
                    src={pageData.hero.image}
                    alt="Hero"
                    className="w-full h-full object-cover"
                    style={{ transform: 'rotate(1deg)' }}
                  />
                  
                  {/* Floating Badge - GREEN */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-bounce"
                       style={{ animationDuration: '3s' }}>
                    <span className="text-xs font-black text-[#32a862] tracking-wider">NEW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Headline - Editorial Style */}
            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              {/* Eyebrow Text - GREEN */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#32a862]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[#32a862] uppercase">
                  {pageData.hero.subtitle}
                </span>
                <div className="h-px flex-1 md:hidden bg-gradient-to-l from-transparent to-[#32a862]" />
              </div>

              {/* Title with GREEN GRADIENT */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                <span className="block text-gray-900">{pageData.hero.title.split(' ')[0]}</span>
                <span className="block bg-gradient-to-r from-[#32a862] via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  {pageData.hero.title.split(' ')[1]}
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md"
                 style={{ fontFamily: '"Merriweather", serif' }}>
                {pageData.hero.description}
              </p>

              {/* CTA Button - GREEN GRADIENT */}
              <button className="group relative w-full md:w-auto md:px-12 h-14 md:h-16 bg-gray-900 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#32a862] to-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-bold tracking-wider text-sm md:text-base uppercase">
                  Explore Collection
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
          {/* Section Header - GREEN ACCENT */}
          <div className="mb-6 md:mb-10 flex items-end justify-between">
            <div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Featured
              </h3>
              <div className="mt-1 h-1 w-16 md:w-24 bg-gradient-to-r from-[#32a862] to-emerald-500 rounded-full" />
            </div>
            <button className="text-xs md:text-sm font-bold text-[#32a862] tracking-wider uppercase flex items-center gap-1 hover:gap-2 transition-all">
              View All
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Product Grid - Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {pageData.products.map((product, idx) => (
              <div
                key={product.id}
                className="group relative"
                style={{ 
                  gridRow: product.tall ? 'span 2' : 'span 1',
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Product Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className={`relative ${product.tall ? 'aspect-[3/5]' : 'aspect-square'} overflow-hidden bg-gray-100`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge */}
                    <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg`}>
                      {product.badge}
                    </div>

                    {/* Quick Add - Appears on Hover */}
                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>

                  {/* Product Info - GREEN PRICE */}
                  <div className="p-3 md:p-4">
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1 tracking-tight" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-gray-400 font-medium">$</span>
                        <span className="text-lg md:text-xl font-black text-[#32a862]">{product.price}</span>
                      </div>
                      <button className="text-gray-300 hover:text-rose-500 transition-colors">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation - Mobile Only - GREEN ACTIVE STATE */}
        <nav className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/80 backdrop-blur-xl border-t border-gray-200">
          <div className="flex items-center justify-around px-8 py-3">
            {[
              { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home', active: true },
              { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Search' },
              { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Saved' },
              { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Profile' },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-1 transition-all ${
                  item.active ? 'text-[#32a862] scale-110' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={item.active ? 2.5 : 2} d={item.icon} />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-wider">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>

      </div>

      {/* Custom Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}} />
    </div>
  );
}