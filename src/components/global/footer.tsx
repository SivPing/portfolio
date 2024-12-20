import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-accent text-3xl font-semibold mb-4">
              Virak Sim
            </h3>
            <p className="mb-4">
              I&apos;m specialize in creating amazing digital experiences for
              our clients worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>simvirak210721@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+855 93 821 749</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:mt-2">
            <h3 className="text-accent text-2xl  font-semibold mb-4">
              About me
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:mt-2">
            <h3 className="text-accent text-2xl  font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:mt-2">
            <h3 className="text-accent text-2xl font-semibold mb-4">
              Follow me
            </h3>
            <p className="mb-4">Follow for more</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100075883281267"
                className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://x.com/virak_sim"
                className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/rakhie06/"
                className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sim-virak-1974912a9/"
                className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © {new Date().getFullYear()} Virak. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
