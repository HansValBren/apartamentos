import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Sheet } from "../ui/sheet";
import { MenuIcon, MountainIcon, Flower, MessageCircleIcon } from "lucide-react";
import { SheetTrigger, SheetContent } from "../ui/sheet";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "../ui/navigation-menu";
function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-background/80 backdrop-blur-sm dark:bg-background/80 sticky top-0 z-50">

      <div className="flex items-center gap-16">
        <Link href="#" className="flex items-center transition duration-500 ease-out hover:text-amber-500 transform hover:scale-105 text-muted-foreground" prefetch={false}>
          <Flower className="w-6 h-6  text-black " />
          <Flower className="w-6 h-6  " />
          <span className="ml-2 font-semibold text-lg ">Las Flores</span>
        </Link>
        <a href="https://wa.me/72711499 " className="transition ease-out duration-500 transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline text-green-500 cursor-pointer icon-tabler-brand-whatsapp "><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
        </a>

        {/* <MessageCircleIcon className="w-6 h-6 text-muted-foreground hover:text-green-600 transition duration-500 ease-in-out cursor-pointer" /> */}
      </div>

      <nav className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center gap-6">
            <NavigationMenuLink asChild>
              <Link href="#hero" className="text-md text-sm font-medium text-muted-foreground hover:underline decoration-2 hover:decoration-amber-500" prefetch={false}>
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#bienes" className="text-md text-sm font-medium text-muted-foreground hover:underline decoration-2 hover:decoration-amber-500" prefetch={false}>
                Inmuebles
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#contacto" className="text-sm font-medium text-muted-foreground hover:underline decoration-2 hover:decoration-amber-500" prefetch={false}>
                Contacto
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-background">
          <div className="grid gap-4 p-4">
          <Link href="#" className="flex items-center text-amber-500" prefetch={false}>
          <Flower className="w-6 h-6  text-black " />
          <Flower className="w-6 h-6  " />
          <span className="ml-2 font-semibold text-lg ">Las Flores</span>
        </Link>
            <nav className="grid gap-2">
            <Link href="#" className="text-md text-sm font-medium text-foreground hover:underline decoration-2 hover:decoration-amber-500" prefetch={false}>
                Home
              </Link>
              <Link href="#bienes" className="text-md text-sm font-medium text-foreground hover:underline decoration-2 hover:decoration-amber-500" prefetch={false}>
                Inmuebles
              </Link>
              <Link href="#contacto" className="text-md text-sm font-medium text-foreground hover:underline decoration-2 hover:decoration-amber-500" prefetch={false}>
                Contacto
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>


  )
}

export default Header