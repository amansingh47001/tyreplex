import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import { IoIosStar } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import Image from "next/image";

function Company() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-12 p-4 mb-8">
      <div className="md:col-span-3 flex flex-col gap-3">
        <h1 className="font-bold text-xl uppercase flex items-center flex-wrap gap-2">
          SHREE HEMKUNT TYRES AND SERVICES{" "}
          <span className="text-green-500 normal-case font-medium text-sm align-middle">
            <IoShieldCheckmark className="inline-block" /> Verified
          </span>
        </h1>
        <div className="flex flex-wrap gap-2 items-center text-xs">
          <span className=" text-white bg-green-500 font-semibold px-1 rounded">
            4.9
          </span>
          <p className="flex gap-1">
            <IoIosStar className="size-4 text-yellow-400" />
            <IoIosStar className="size-4 text-yellow-400" />
            <IoIosStar className="size-4 text-yellow-400" />
            <IoIosStar className="size-4 text-yellow-400" />
            <IoIosStar className="size-4 text-yellow-400" />
          </p>
          <span className="text-sm underline">2278 Reviews</span>
          <Button variant="outline" size="sm" className="h-7">
            Rate
          </Button>
        </div>
        <p className="flex gap-2 text-xs">
          <MapPin className="size-4 flex-none mt-0.5" /> PLOT NUMBER-09 GROUND
          FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar
          Pradesh, 201014
        </p>
        <p className="text-xs flex gap-2 items-center">
          <Clock className="size-4 flex-none" /> Open - Monday to Sunday -
          10:00AM to 8:00PM
        </p>
        <Button
          className="w-auto border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
          variant="outline"
        >
          {" "}
          Get Direction
        </Button>
      </div>
      <div className="md:col-span-4 flex gap-8 overflow-auto no-scrollbar">
        <Image src="/tyreplex/shop-img.jpg" alt="shop front" width="300" height="250" className="object-contain" />
        <Image src="/tyreplex/shop-img.jpg" alt="shop front" width="300" height="250" className="object-contain" />
        <Image src="/tyreplex/shop-img.jpg" alt="shop front" width="300" height="250" className="object-contain" />
        <Image src="/tyreplex/shop-img.jpg" alt="shop front" width="300" height="250" className="object-contain" />
        <Image src="/tyreplex/shop-img.jpg" alt="shop front" width="300" height="250" className="object-contain" />
        <Image src="/tyreplex/shop-img.jpg" alt="shop front" width="300" height="250" className="object-contain" />
      </div>
    </div>
  );
}

export default Company;
