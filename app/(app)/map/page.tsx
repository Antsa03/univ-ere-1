import Map from "@/components/Map";
import React from "react";

function MapPage() {
  return (
    <div className="relative xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow py-4">
      <div className="bg-white/90 bg-blend-saturation  w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2 z-50-">
        <h1 className="h1 mb-8">Localisation </h1>
      </div>
      <div className="p-8 w-full h-full z-0">
        <Map />
      </div>
    </div>
  );
}

export default MapPage;
