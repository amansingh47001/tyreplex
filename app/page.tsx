import Navbar from "@/components/navbar";
import { Metadata } from "next";

import Reviews from "@/components/reviews";
import Company from "@/components/company";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoShieldCheckmark } from "react-icons/io5";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TyreBrandFilter } from "@/components/tyre-brand";
import { Input } from "@/components/ui/input";
import { Check, Search } from "lucide-react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "SHREE HEMKUNT TYRES AND SERVICES, Tyre dealer situated in Ghaziabad",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="container px-4 md:px-8">
        <div className="my-4 py-6 border rounded-md bg-white">
          <Company />
          <Reviews />
        </div>
      </section>
      <section className="container px-4 md:px-8">
        <div className="bg-white p-4 border rounded-md mb-4">
          <h6 className="font-semibold">Deals</h6>
          <div className="flex gap-4 my-3 overflow-x-auto no-scrollbar">
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
            <div className="w-56 flex-none border rounded-md p-3">
              <div className="flex justify-center items-center mb-4">
                <div className="w-40 h-12 rounded bg-neutral-400 flex items-center justify-center">
                  LOGO
                </div>
              </div>
              <p className="text-center">MRF</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-8">
        <div className="bg-white p-4 border rounded-md mb-4">
          <h6 className="font-semibold">Services offered by this dealer</h6>
          <div className="flex gap-4 my-3 overflow-x-auto no-scrollbar">
            <div className="w-60 xs:w-72 flex-none flex flex-col justify-between gap-3 items-center border rounded-md p-6">
              <div className="flex flex-1 justify-center items-center mb-4">
                <Image
                  src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png"
                  width="100"
                  height="100"
                  alt="image"
                />
              </div>
              <p className="text-center font-bold">Wheel Balancing</p>
              <Button className="bg-rose-600 text-white hover:bg-rose-600/90">
                Book Now
              </Button>
            </div>
            <div className="w-60 xs:w-72 flex-none flex flex-col justify-center gap-3 items-center border rounded-md p-6">
              <div className="flex flex-1 justify-center items-center">
                <Image
                  src="https://cdn.tyreplex.net/images/wheel-alignment.png"
                  width="100"
                  height="100"
                  alt="iamge"
                />
              </div>
              <p className="text-center font-bold">Wheel Alignment</p>
              <Button className="bg-rose-600 text-white hover:bg-rose-600/90">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-8 mb-6 mt-8">
        <h6 className="font-semibold mb-4 text-lg">
          Tyres sold by this dealer
        </h6>
        <div className="flex flex-wrap gap-2 justify-between items-center mb-4">
          <div className="relative">
            <Input
              className="pl-8 bg-white"
              type="text"
              placeholder="For Ex: DL01AB1111"
            />
            <Search className="size-4 text-neutral-700 absolute top-2.5 left-2" />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <TyreBrandFilter />
            <Select defaultValue="most-popular">
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Most Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Most Popular</SelectLabel>
                  <SelectItem value="most-popular">Most Popular</SelectItem>
                  <SelectItem value="high-to-low">Price High to Low</SelectItem>
                  <SelectItem value="low-to-high">Price Low to High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Select Vehicle Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Vehicle Type</SelectLabel>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="bike">Bike</SelectItem>
                  <SelectItem value="scooter">Scooter</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
          <div className="relative overflow-hidden border rounded p-4 bg-white">
            <span className="absolute right-0 top-0 bg-yellow-100 py-0.5 rounded-bl px-1 capitalize font-medium text-sm align-middle">
              <IoShieldCheckmark className="inline-block" /> 5 year warranty
            </span>
            <div className="absolute -right-16 -bottom-7">
              <Image
                src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png"
                alt="tyre"
                width="178"
                height="178"
              />
            </div>
            <div className="text-purple-900 font-extrabold text-2xl mb-3">
              apollo
            </div>
            <h6 className="uppercase text-sm mb-4">amazer 4g life</h6>
            <p className="text-sm mb-4">145/80 R12</p>
            <p className="flex items-center gap-2 text-xs">
              <span className=" text-white bg-green-500 font-semibold px-1 rounded">
                4.9
              </span>
              320 Reviews
            </p>
            <p className="my-2">&#x20b9; 3,126</p>
            <p className="text-xs text-green-600">Offer Available</p>
            <p className="text-xs mt-4">Tube Type</p>
          </div>
        </div>
        <div className="text-center my-4 underline underline-offset-2">
          Load More
        </div>
      </section>

      <div className="container px-4 md:px-8 my-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container px-4 md:px-8">
        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-semibold mb-4">Payment Mode</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ul className="text-sm space-y-4 font-medium">
              <li>
                <Check className="size-5 inline-block mr-2 text-green-500 font-bold" />
                Deposit to Account
              </li>
              <li>
                <Check className="size-5 inline-block mr-2 text-green-500 font-bold" />
                Credit Card/Debit Card
              </li>
              <li>
                <Check className="size-5 inline-block mr-2 text-green-500 font-bold" />
                Wallets &#40;PayTM/PhonePe/Amazon etc.&#41;
              </li>
            </ul>
            <ul className="text-sm space-y-4 font-medium">
              <li>
                <Check className="size-5 inline-block mr-2 text-green-500 font-bold" />
                Net Banking
              </li>
              <li>
                <Check className="size-5 inline-block mr-2 text-green-500 font-bold" />
                UPI
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="mt-4 bg-white">
        <div className="bg-amber-200 border border-amber-300 p-4">
          <div className="container px-4 md:px-8 flex gap-4">
            <Image
              src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png"
              height="80"
              width="80"
              alt="Ask question"
              className="flex-none object-contain"
            />
            <div className="">
              <h6 className="font-semibold text-base md:text-lg">
                Have a question about Tyres?
              </h6>
              <p className="mb-2 text-xs md:text-sm">
                Get an answer in about 24 hours from our experts.
              </p>
              <Input
                type="text"
                className="bg-white rounded-full"
                placeholder="Ask or search your question"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container px-4 md:px-8 py-6">
          <div>
            <Image
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png"
              width="100"
              height="40"
              alt="logo"
            />
            <p className="flex gap-2 items-center mt-4">
              <FaFacebookSquare className="size-5 text-blue-800 cursor-pointer" />
              <FaInstagram className="size-5 text-purple-800 cursor-pointer" />
            </p>
          </div>
          <div className="text-sm">
            <p className="mb-2 font-semibold uppercase">Resources</p>
            <ul className="space-y-2">
              <li className="hover:text-rose-600 cursor-pointer">About Us</li>
              <li className="hover:text-rose-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-rose-600 cursor-pointer">Career</li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="mb-2 font-semibold uppercase">Legals</p>
            <ul className="space-y-2">
              <li className="hover:text-rose-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-rose-600 cursor-pointer">
                Terms of Use
              </li>
              <li className="hover:text-rose-600 cursor-pointer">
                Shipping and Return Policy
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="mb-2 font-semibold uppercase">For Businesses</p>
            <ul className="space-y-2">
              <li className="hover:text-rose-600 cursor-pointer">
                Are you a tyre dealer?
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="bg-white py-2 text-xs text-left md:text-center border-t px-4">
          &#169; 2024 TyrePlex Technologies & Commerce Pvt. Ltd. | All Rights
          Reserved.
        </div>
      </footer>
    </main>
  );
}
