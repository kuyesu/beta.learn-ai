
import { getSession, getSubscription, getActiveProductsWithPrices } from '@/app/supabase-server';

import Pricing from '@/components/Pricing';
import RootApp from '@/components/root';


export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <RootApp />
  );
}