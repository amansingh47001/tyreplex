import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import { Accessories, CarTyres, More } from "@/constant/navbar-const";
import Image from "next/image";

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png"
              width="100"
              height="50"
              alt="logo"
              className="object-contain"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Car Types</AccordionTrigger>
              <AccordionContent>
                <ul className="px-1.5 py-2 text-sm">
                  {CarTyres.map((carTyre) => (
                    <li
                      key={carTyre.title}
                      className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer"
                    >
                      {carTyre.title}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Bike Tyres</AccordionTrigger>
              <AccordionContent>
                <ul className="px-1.5 py-2 text-sm">
                  {CarTyres.map((carTyre) => (
                    <li
                      key={carTyre.title}
                      className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer"
                    >
                      {carTyre.title}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <div className="text-sm font-medium py-4 border-b">
              Tyre Pressure
            </div>
            <div className="text-sm font-medium py-4 border-b">
              Commercial Tyres
            </div>
            <AccordionItem value="item-3">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent>
                <ul className="px-1.5 py-2 text-sm">
                  {Accessories.map((accessory) => (
                    <li
                      key={accessory.title}
                      className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer"
                    >
                      {accessory.title}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>More</AccordionTrigger>
              <AccordionContent>
                <ul className="px-1.5 py-2 text-sm">
                  {More.map((moreItem) => (
                    <li
                      key={moreItem.title}
                      className="hover:bg-neutral-100 py-1.5 px-2 text-nowrap rounded cursor-pointer"
                    >
                      {moreItem.title}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-rose-500 hover:bg-rose-500/90 text-white">
              Login / Signup
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
