/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

function Hero() {
  return (
    <div className="mx-auto flex items-center justify-center md:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Encuentra tu hogar ideal</h1>
          <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Busca en nuestra selección de hermosos apartamentos y encuentra el perfecto para ti.
          </p>
          <div className="">
            <Link
              href={'#inmuebles'}
              className="items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Explorar
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/apa.jpg" alt="Featured Home" className="h-auto w-full max-w-md rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
