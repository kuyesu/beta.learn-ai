import { getSession } from '@/app/supabase-server';
import AuthUI from './AuthUI';

import { redirect } from 'next/navigation';
import Logo from '@/components/icons/Logo';
import Image from 'next/image';
import { FaRobot } from 'react-icons/fa';

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    return redirect('/account');
  }

  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-xl p-8 bg-zinc-900 rounded-2xl m-auto w-[29rem] outline-none text-zinc-100 ring-2 ring-pink-500 ring-opacity-50">
        <div className="flex justify-center pb-12 ">
          <FaRobot className="text-4xl text-pink-500" />
        </div>
        <AuthUI />
      </div>
    </div>
  );
}
