import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bottom-0 bg-zinc-950 px-4 py-6 text-muted-foreground md:px-6 lg:px-8">
      <div className="mx-auto flex items-center justify-between md:px-24">
        <p className="text-sm text-slate-400">&copy; 2024 Las Flores</p>
        <nav className="flex items-center gap-4">
          <Link
            href="https://wa.me/72711499"
            className="flex transform items-center text-slate-400 underline decoration-2 underline-offset-4 transition duration-500 ease-out hover:scale-105 hover:text-green-500 hover:underline hover:decoration-green-500"
            prefetch={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp cursor-pointer"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            <p className="text-sm text-current">WhatsApp: 7271-1499</p>
          </Link>
          {/* <Link href="#" className="hover:underlin text-sm" prefetch={false}>
              Privacy
            </Link> */}
        </nav>
      </div>
    </footer>
  );
}
