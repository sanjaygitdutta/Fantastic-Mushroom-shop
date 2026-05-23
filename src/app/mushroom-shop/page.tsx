import { Suspense } from 'react';
import MushroomShop from '../../views/MushroomShop';

export async function generateMetadata() {
  return {
    title: 'Fresh Mushrooms Delivered — Shop Global Varieties | Fantastic Food',
    description: 'Order premium Paddy Straw, Oyster, and Milky mushrooms. Farm-fresh quality delivered directly to your doorstep. Best prices guaranteed.',
    alternates: {
      canonical: 'https://www.fantasticfood.in/mushroom-shop',
    },
  };
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" />
        </div>
      }
    >
      <MushroomShop />
    </Suspense>
  );
}
