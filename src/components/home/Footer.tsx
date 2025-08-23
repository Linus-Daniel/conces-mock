import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">CONCES</h3>
            <p className="text-gray-400 mb-4">
              Empowering students through faith-centered education and community
              support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/173jPb1P73/"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaFacebook className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/concesofficial?igsh=MXZ4aW5wb2Q5M2IxNg=="
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaInstagram className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://x.com/concesofficial?t=l3hLqtzs5ZHcgBrUV0PfNw&s=09"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaTwitter className="fa-brands fa-twitter" />
              </a>
            
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer">
                  All Products
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Apparel</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Accessories
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Books</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Gift Cards
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">FAQs</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Shipping Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Returns & Exchanges
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Size Guide
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">About CONCES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer">
                  Our Mission
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Student Projects
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Scholarship Program
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Alumni Network
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Careers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 CONCES. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-white cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
