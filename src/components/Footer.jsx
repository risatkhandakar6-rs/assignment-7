import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white mt-auto mt-10">
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold">
          Keen<span className="font-normal">Keeper</span>
        </h2>
        <p className="text-sm text-gray-300 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="text-sm font-semibold mt-6 mb-3">Social Links</h3>
        <div className="flex justify-center gap-3">
          <a href="#" className="bg-white text-[#244D3F] w-8 h-8 rounded-full flex items-center justify-center">
            <FaYoutube size={14} />
          </a>
          <a href="#" className="bg-white text-[#244D3F] w-8 h-8 rounded-full flex items-center justify-center">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="bg-white text-[#244D3F] w-8 h-8 rounded-full flex items-center justify-center">
            <FaXTwitter size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}