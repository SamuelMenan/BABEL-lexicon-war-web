export default function MenuSection() {
  return (
    <section className="relative -mt-8 z-10 w-full">
      
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full bg-white rounded-t-3xl px-4 md:px-10 py-10 shadow-xl">
        
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Left Side */}
            <div>
              <h2 className="text-2xl font-bold text-[#b23a2b]">
                Menu
              </h2>

              <p className="text-sm text-gray-500">
                What will you wish for?
              </p>

              {/* ICONS (your SVGs) */}
              <div className="flex gap-3 mt-4 text-[#b23a2b]">
                
                {/* 1 */}
                <div className="p-2 bg-[#fff3f1] rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" />
                    <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" />
                  </svg>
                </div>

                {/* 2 */}
                <div className="p-2 bg-[#fff3f1] rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3a8 8 0 0 1 8 8v6.954c0 1.2-.7 2.2-1.8 2.7c-1.1.5-2.4.2-3.2-.7a.65.65 0 0 0-1 0a2.6 2.6 0 0 1-4.2 0a.65.65 0 0 0-.5-.2c-.2 0-.4.1-.6.3a2.8 2.8 0 0 1-4.8-2v-7a8 8 0 0 1 8-8z" />
                  </svg>
                </div>

                {/* 3 */}
                <div className="p-2 bg-[#fff3f1] rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3z" />
                  </svg>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - CATEGORIES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
              
              {/* CLASSIC */}
              <div className="flex flex-col items-center justify-center bg-gray-50 hover:bg-[#fff3f1] transition rounded-2xl px-6 py-5 shadow-sm cursor-pointer min-w-[120px]">
                <svg className="w-7 h-7 text-[#b23a2b] mb-2" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8" />
                  <path d="M12 4l1.5 1.6a2 2 0 1 1 -3 .1l1.5 -1.7" />
                </svg>
                <span className="text-sm font-semibold text-[#5a2d2d]">
                  CLASSIC
                </span>
              </div>

              {/* DOURMET */}
              <div className="flex flex-col items-center justify-center bg-gray-50 hover:bg-[#fff3f1] transition rounded-2xl px-6 py-5 shadow-sm cursor-pointer min-w-[120px]">
                <svg className="w-7 h-7 text-[#b23a2b] mb-2" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 20c-2 -2 -4 -5 -1 -8c-1 -4 3 -7 5 -7c.5 -1 1.5 -1.5 2.5 -1.5c1 0 2 .5 2.5 1.5c2 0 6 3 5 7c3 3 1 6 -1 8" />
                </svg>
                <span className="text-sm font-semibold text-[#5a2d2d]">
                  DOURMET
                </span>
              </div>

              {/* DESSERTS */}
              <div className="flex flex-col items-center justify-center bg-gray-50 hover:bg-[#fff3f1] transition rounded-2xl px-6 py-5 shadow-sm cursor-pointer min-w-[120px]">
                <svg className="w-7 h-7 text-[#b23a2b] mb-2" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 17v-5a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8h17" />
                </svg>
                <span className="text-sm font-semibold text-[#5a2d2d]">
                  DESSERTS
                </span>
              </div>

              {/* COOKIES */}
              <div className="flex flex-col items-center justify-center bg-gray-50 hover:bg-[#fff3f1] transition rounded-2xl px-6 py-5 shadow-sm cursor-pointer min-w-[120px]">
                <svg className="w-7 h-7 text-[#b23a2b] mb-2" fill="currentColor">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-sm font-semibold text-[#5a2d2d]">
                  COOKIES
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}