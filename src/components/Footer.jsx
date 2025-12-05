import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-6">
        
      <div className="info flex items-center justify-between gap-4 py-4">
        <p className="text-sm">
          More ways to shop: Find an Apple Store or other retailer near you.
        </p>

        <img
          src="/logo.svg"
          alt="Apple logo"
          className="h-6 w-auto object-contain shrink-0"
        />
      </div>

      <hr className="my-4" />


      <div className="links flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-xs">
          Copyright © 2024 Apple Inc. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-3 text-xs">
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
