export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#b23a2b] to-[#d96b5f] text-white overflow-hidden">
      
      {/* Background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-1/3"></div>
        <div className="absolute w-40 h-40 bg-white/10 rounded-full bottom-10 left-10"></div>
        <div className="absolute w-60 h-60 bg-white/10 rounded-full top-20 right-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left - Cake Image */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-white p-4 rounded-full shadow-xl">
            <img
              src="/cake.png"
              alt="cake"
              className="w-72 h-72 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            DECADENT <br />
            CHOCOLATE <br />
            BLISS!
          </h2>

          <p className="text-lg text-white/90">
            Satisfy Your Sweet Cravings
          </p>

          {/* Offer */}
          <div className="inline-flex flex-col items-start bg-white text-[#b23a2b] px-4 py-2 rounded-full shadow-md">
            <span className="text-xs uppercase tracking-wide">
              Special Offer
            </span>
            <span className="font-bold text-sm">
              SAVE 20%
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Cakes (bigger + moved left) */}
      <div className="hidden md:flex flex-col gap-5 absolute right-30 top-20">
        
        {/* Top */}
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
          alt="dessert"
          className="w-30 h-30 rounded-full object-cover border-4 border-white shadow-lg"
        />

        {/* Bottom */}
        <img
          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
          alt="dessert"
          className="w-30 h-30 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
}