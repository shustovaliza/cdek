"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    new window.CDEKWidget({
      from: "Москва",
      defaultLocation: "Москва",
      root: "cdek-map",
      apiKey: "7c3bc71a-dca2-4b9c-af91-1ec2e9078d27",
      canChoose: true,
      servicePath:
        "https://api.alfabulls.develop.pearwood.io/cdek/static/service.php",
      lang: "rus",
      currency: "RUB",
      hideFilters: {
        type: true,
      },
      forceFilters: {
        type: "PVZ",
      },
      goods: [{ length: 25, width: 17, height: 7, weight: 6000 }],
      tariffs: {
        office: [136],
        door: [137],
      },
      onChoose(type: any, tariff: any, address: any) {
        console.log(type, tariff, address);
      },
    });
  }, []);
  return <div id="cdek-map" style={{ height: "600px" }}></div>;
}
