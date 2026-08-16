 function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Avio. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Designed & Built by{" "}
          <span className="font-semibold text-gray-900">
            Franklyn, Emmanuel & Precious
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;