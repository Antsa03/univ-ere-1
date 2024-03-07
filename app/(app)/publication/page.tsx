import CreatePub from "@/components/CreatePub";
import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

function PublicationPage() {
  return (
    <div className="flex flex-col gap-6 xl:ml-[370px] border-l border-r border-gray-200 w-full">
      <div className="flex py-8 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h1 className="h1 ml-8">Publication </h1>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <CreatePub />
    </div>
  );
}

export default PublicationPage;
