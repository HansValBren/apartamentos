import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type Session } from 'next-auth';
import Link from 'next/link';

export default function DropdownUser({ session }: { session: Session | null }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center gap-1 ${session ? 'px-3 py-1.5' : 'p-2'} rounded-full bg-zinc-800`}
      >
        <span className="text-white">{session?.user?.name}</span>
        {/* <Button variant="outline" size="icon">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          {!session ? (
            <Link
              href="/api/auth/signin"
              className="text-sm font-medium text-muted-foreground decoration-2 hover:underline hover:decoration-indigo-500"
              prefetch={false}
            >
              Iniciar sesión
            </Link>
          ) : (
            <Link href="/api/auth/signout" className="text-sm font-medium text-muted-foreground" prefetch={false}>
              Cerrar sesión
            </Link>
          )}
        </DropdownMenuItem>
        {/* <DropdownMenuItem>
        <Link href="#" prefetch={false}>
          Contact
        </Link>
      </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
