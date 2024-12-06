import React from "react";
// import Image from "next/legacy/image";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


const Header: React.FC = () => {
  return (
    <header className="bg-gray-600 bg-opacity-10 p-8 rounded-3xl border-2">
          <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
      <h1 className="text-4xl font-bold mb-2">Piyush Choudhari</h1>
      <h2 className="text-xl text-gray-400 mb-4">Developer & Data Analyst</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Pune, India 🇮🇳</h3>
    </header>
  );
};

export default Header;
