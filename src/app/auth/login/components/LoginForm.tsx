'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function LoginForm() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get('email'));
    console.log(data.get('password'));
    const res = await signIn('credentials', {
      redirect: false,
      email: data.get('email'),
      password: data.get('password'),
    });
    console.log(res);
    if (res?.error) {
      console.log('Error al iniciar sesión');
      router.push('/auth/login');
      router.refresh();
    } else {
      console.log('Iniciando sesión');
      router.push('/');
      router.refresh();
    }
  }

  return (
    <div className="md:px-6 lg:px-8">
      <div className="grid place-items-center md:grid-cols-1 lg:gap-12">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Iniciar Sesión</h2>
        <div className="rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="josé@gmail.com"
                  className="focus:ring-none mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-none"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Contraseña
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*****"
                  className="focus:ring-none mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-none"
                />
              </div>
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-blue-600 md:px-12 md:text-base"
              >
                Iniciar Sesión
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
