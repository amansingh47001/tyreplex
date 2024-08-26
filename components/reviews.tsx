import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Reviews() {
  return (
    <>
      <div className="mx-4 font-semibold text-sm text-neutral-900">
        2278 Google Reviews
      </div>
      <div className="flex gap-3.5 m-4 mt-2 overflow-x-auto no-scrollbar">
        <div className="w-72 md:w-[400px] flex-none border rounded p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-sm">Md Nasir</p>
          </div>
          <p className="line-clamp-3 text-sm text-neutral-700 my-3">
            Excellent service from start to finish. 100% satisfaction with the
            job, professionalism and overall service.We were delighted with your
            courteous , prompt and professional service. We would plan to reuse
            your services and recommend these to friends and family. You came to
            us as a recommendation and this proved accurate.
          </p>
        </div>
        <div className="w-72 md:w-[400px] flex-none border rounded p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="https://github.com/shad.png" />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-sm">Rohit Bhati</p>
          </div>
          <p className="line-clamp-3 text-sm text-neutral-700 my-3">
            Went for Tyre change . Ultimate service by shoppe boys. Owner
            behavior very cool. Guide as per ur budget. Highly recommended.
          </p>
        </div>
        <div className="w-72 md:w-[400px] flex-none border rounded p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="https://githu.com/shadcn.png" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-sm">Pradeep Kumar</p>
          </div>
          <p className="line-clamp-3 text-sm text-neutral-700 my-3">
            Best tyre shop in Indirapuram. Good dealing with customer. All types
            tyre available here. Price also responsible. Overall good
            experience.
          </p>
        </div>
        <div className="w-72 md:w-[400px] flex-none border rounded p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-sm">Md Nasir</p>
          </div>
          <p className="line-clamp-3 text-sm text-neutral-700 my-3">
            Excellent service from start to finish. 100% satisfaction with the
            job, professionalism and overall service.We were delighted with your
            courteous , prompt and professional service. We would plan to reuse
            your services and recommend these to friends and family. You came to
            us as a recommendation and this proved accurate.
          </p>
        </div>
        <div className="w-72 md:w-[400px] flex-none border rounded p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="https://github.com/shad.png" />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-sm">Rohit Bhati</p>
          </div>
          <p className="line-clamp-3 text-sm text-neutral-700 my-3">
            Went for Tyre change . Ultimate service by shoppe boys. Owner
            behavior very cool. Guide as per ur budget. Highly recommended.
          </p>
        </div>
        <div className="w-72 md:w-[400px] flex-none border rounded p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="https://githu.com/shadcn.png" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-sm">Pradeep Kumar</p>
          </div>
          <p className="line-clamp-3 text-sm text-neutral-700 my-3">
            Best tyre shop in Indirapuram. Good dealing with customer. All types
            tyre available here. Price also responsible. Overall good
            experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
