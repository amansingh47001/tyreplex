import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";

import { Accessories, CarTyres, More } from "@/constant/navbar-const";

export default function Navbar() {
  return (
    <div className="py-2 shadow-md bg-white">
      <header className="container px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
          <Image
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png"
            width="150"
            height="80"
            alt="logo"
            className="object-contain"
          />
        </div>
        <nav className="gap-1.5 items-center hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Car Tyres</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="px-1.5 py-2 text-sm">
                    {CarTyres.map((carTyre) => (
                      <NavigationMenuLink key={carTyre.title}>
                        <li className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer">
                          {carTyre.title}
                        </li>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Bike Tyres</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="px-1.5 py-2 text-sm">
                    {CarTyres.map((carTyre) => (
                      <NavigationMenuLink key={carTyre.title}>
                        <li className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer">
                          {carTyre.title}
                        </li>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Tyre Pressure
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Commercial Tyres
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="px-1.5 py-2 text-sm">
                    {Accessories.map((accessory) => (
                      <NavigationMenuLink key={accessory.title}>
                        <li className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer">
                          {accessory.title}
                        </li>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="px-1.5 py-2 text-sm">
                    {More.map((moreItem) => (
                      <NavigationMenuLink key={moreItem.title}>
                        <li className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer">
                          {moreItem.title}
                        </li>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex gap-2 items-center text-sm font-medium">
          <CircleUser className="size-5" />
          Login
        </div>
      </header>
    </div>
  );
}
