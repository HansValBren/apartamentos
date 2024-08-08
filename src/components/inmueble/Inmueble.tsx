/* eslint-disable @next/next/no-img-element */
'use client';
import { BathIcon, BedIcon, HouseIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Inmueble() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const properties = [
    {
      id: 1,
      image: '/apa.jpg',
      address: 'Barrio Los Ángeles, Cañas, GTE',
      price: 150000,
      beds: 2,
      baths: 1,
      type: 'Casa',
      ocuppied: true,
      floor: 'Primera planta',
    },
    {
      id: 2,
      image: '/apa.jpg',
      address: 'Barrio Los Ángeles, Cañas, GTE',
      price: 90000,
      beds: 1,
      baths: 1,
      type: 'Apto.',
      ocuppied: false,
      floor: 'Primera planta',
    },
    {
      id: 3,
      image: '/apa.jpg',
      address: 'Barrio Los Ángeles, Cañas, GTE',
      price: 90000,
      beds: 1,
      baths: 1,
      type: 'Apto.',
      ocuppied: true,
      floor: 'Segunda planta',
    },
    {
      id: 4,
      image: '/apa.jpg',
      address: 'Barrio Los Ángeles, Cañas, GTE',
      price: 90000,
      beds: 1,
      baths: 1,
      type: 'Apto.',
      ocuppied: false,
      floor: 'Segunda planta',
    },
  ];

  return (
    <div ref={ref} className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: 'linear' }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">Inmuebles</h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: 'linear', delay: index * 0.3 }}
            className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
          >
            <p
              className={`absolute right-0 z-20 ${property.ocuppied ? 'bg-amber-500' : 'bg-emerald-500'} rounded-bl-lg rounded-tl-lg px-4 py-2 text-sm font-bold text-white`}
            >
              {property.ocuppied ? 'Ocupado' : 'Disponible'}
            </p>

            <div className="transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                loading="lazy"
                src={property.image}
                width={400}
                height={250}
                alt={property.address}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.address}</h3>
                <p className="text-xl font-bold text-primary">Mensualidad por ₡{property.price.toLocaleString()}</p>
                <p className="text-lg font-bold text-primary">{property.floor}</p>
                <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                  <BedIcon className="h-4 w-4" />
                  <span>
                    {property.beds} {property.beds > 1 ? 'cuartos' : 'cuarto'}
                  </span>
                  <BathIcon className="h-4 w-4" />
                  <span>
                    {property.baths} {property.baths > 1 ? 'baños' : 'baño'}
                  </span>
                  <HouseIcon className="h-4 w-4" />
                  <span>{property.type} </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
