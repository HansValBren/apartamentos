import LoginForm from './components/LoginForm';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
export default async function Login() {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex min-h-screen flex-col items-end justify-center bg-[url("/apamo.webp")] bg-cover p-24'>
      {!session ? (
        <LoginForm />
      ) : (
        <div className="rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
          <h1 className="text-3xl text-black/70">Ya iniciaste sesión</h1>
        </div>
      )}
    </div>
  );
}
