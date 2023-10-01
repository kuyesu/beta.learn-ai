import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  // const dummyStripePrices = [
  //   {
  //     id: 'price_1JG9zjF5xjJ9yYQJYpJYb0iD',
  //     active: true,
  //     currency: 'usd',
  //     unit_amount: 500,
  //     product: {
  //       id: 'prod_JG9zjF5xjJ9yYQJY'
  //     }
  //   },
  //   {
  //     id: 'price_1JG9zjF5xjJ9yYQJYpJYb0iD',
  //     active: true,
  //     currency: 'usd',
  //     unit_amount: 500,
  //     product: {
  //       id: 'prod_JG9zjF5xjJ9yYQJY'
  //     }
  //   }
  // ];

  const dummyStripeProduct = {
  id: 'dummy_product_id',
  name: 'Dummy Product',
  description: 'This is a dummy product for testing purposes.',
  prices: [
    {
      id: 'dummy_price_id',
      unit_amount: 1000, // Price in cents
      currency: 'usd',
      interval: 'month',
      description: 'Monthly subscription',
    },
    {
      id: 'dummy_price_yearly_id',
      unit_amount: 10000, // Price in cents
      currency: 'usd',
      interval: 'year',
      description: 'Yearly subscription',
    },
  ],
};


  return (
    <Pricing
      session={session}
      user={session?.user}
      products={products}
      subscription={subscription}
    />
  );
}
