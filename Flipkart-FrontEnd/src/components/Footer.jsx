import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b border-gray-600 pb-6 text-sm">
        {/* About Section */}
        <div>
          <h3 className="text-gray-400 mb-2 font-semibold">ABOUT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Flipkart Stories</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Corporate Information</a></li>
          </ul>
        </div>

        {/* Group Companies */}
        <div>
          <h3 className="text-gray-400 mb-2 font-semibold">GROUP COMPANIES</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Myntra</a></li>
            <li><a href="#" className="hover:text-white">Cleartrip</a></li>
            <li><a href="#" className="hover:text-white">Shopsy</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-gray-400 mb-2 font-semibold">HELP</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Payments</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div>
          <h3 className="text-gray-400 mb-2 font-semibold">CONSUMER POLICY</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Sitemap</a></li>
          </ul>
        </div>

        {/* Mail Us Section */}
        <div className="col-span-2 lg:col-span-1 border-t pt-6 lg:border-t-0 lg:pt-0 lg:border-l border-gray-600 pl-6">
          <h3 className="text-gray-400 mb-2 font-semibold">Mail Us:</h3>
          <p className="text-sm">Flipkart Internet Private Limited,<br />Bengaluru, 560103, Karnataka, India</p>

          <h3 className="text-gray-400 font-semibold mt-4">Social</h3>
          <div className="flex space-x-3 mt-2">
            <a href="#"><FaFacebook size={20} className="hover:text-blue-400" /></a>
            <a href="#"><FaXTwitter size={20} className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube size={20} className="hover:text-red-400" /></a>
            <a href="#"><FaInstagram size={20} className="hover:text-pink-400" /></a>
          </div>   
        </div>
      </div>
       

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 space-y-4 md:space-y-0 ">
        <div className="flex space-x-4 text-white text-center">
          <a href="#" className="hover:text-yellow-400">🛍️ Become a Seller</a>
          <a href="#" className="hover:text-yellow-400">⭐ Advertise</a>
          <a href="#" className="hover:text-yellow-400">🎁 Gift Cards</a>
          <a href="#" className="hover:text-yellow-400">❓ Help Center</a>
        </div>
        <p>© 2007-2025Flipkart.com</p>
        <div className="flex space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 w-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 w-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="h-6 w-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/2560px-PhonePe_Logo.svg.png" alt="Phonepe" className="h-6 w-auto" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt="Gpay" className="h-6 w-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
