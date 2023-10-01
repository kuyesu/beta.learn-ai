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



  return (
    <Pricing
      session={session}
      user={session?.user}
      products={products}
      subscription={subscription}
    />
  );
}
