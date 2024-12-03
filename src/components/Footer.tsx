import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4">
        <Separator className="mb-6" />
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
