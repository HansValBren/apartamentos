/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="container mx-auto min-w-screen-lg px-4 md:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Encuentra tu hogar ideal
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground">
            Busca en nuestra selección de hermosos apartamentos y encuentra el perfecto para ti.
          </p>
          <div className="mt-6 mb-6">
            <Link href={"#bienes"}
            className="items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Empieza a explorar
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/apa.jpg"
            alt="Featured Home"
            className="rounded-lg object-cover w-full h-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero; 
