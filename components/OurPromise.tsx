export default function OurPromiseSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* IZQUIERDA: Título, iconos y ticket */}
        <div className="flex flex-col items-start space-y-10">
          {/* Título */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-[#D97706]">Our Promise</h2>
        <p className="mt-2 text-gray-700">
          therts no secret spell - only honest the wark.
        </p>
      </div>

          {/* Iconos */}
          <div className="flex justify-between w-full space-x-6">
            {/* Delivery */}
            <div className="flex flex-col items-center text-red-700 relative">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -10" />
                  <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
                  <path d="M6 10h12" />
                  <path d="M6 16h12" />
                  <path d="M9 20v1" />
                  <path d="M15 20v1" />
                </svg>
              </div>
              <p className="font-bold text-center mt-2 uppercase text-sm">On Time Delivery</p>
            </div>

            {/* Designs */}
            <div className="flex flex-col items-center text-red-700 relative">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                  <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"/>
                </svg>
              </div>
              <p className="font-bold text-center mt-2 uppercase text-sm">500+ Designs</p>
            </div>

            {/* Orders */}
            <div className="flex flex-col items-center text-red-700 relative">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                  <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"/>
                </svg>
              </div>
              <p className="font-bold text-center mt-2 uppercase text-sm">2 Cr+ Orders</p>
            </div>

            {/* Baked */}
            <div className="flex flex-col items-center text-red-700 relative">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 9h18"/>
                  <path d="M3 15h18"/>
                  <path d="M8 4c.485 .445 3.5 3.312 3.5 8c0 .663 -.07 4.848 -3.5 8"/>
                  <path d="M15 4a17 17 0 0 1 2.004 8c0 1.51 -.201 4.628 -2.004 8"/>
                  <path d="M18.778 20h-13.556a2.22 2.22 0 0 1 -2.222 -2.222v-11.556c0 -1.227 .995 -2.222 2.222 -2.222h13.556c1.227 0 2.222 .995 2.222 2.222v11.556a2.22 2.22 0 0 1 -2.222 2.222"/>
                </svg>
              </div>
              <p className="font-bold text-center mt-2 uppercase text-sm">Baked Fresh</p>
            </div>
          </div>

          {/* Ticket con imagen */}
          <div className="flex items-center space-x-4 mt-6">
            <img src="/ticket.png" alt="Special Ticket" className="w-32 h-auto rounded-lg shadow"/>
            <h2 className="text-gray-700 font-bold">THE MAGICAL TICKET</h2>
            <p className="mt-20 text-gray-700">
          add 3 reninders in your account .
          </p>
          </div>

          {/* Personas debajo del ticket */}
          <div className="flex flex-col items-start mt-6 space-y-2">
            <div className="flex space-x-3">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" />
              <img src="https://randomuser.me/api/portraits/women/12.jpg" className="w-10 h-10 rounded-full" />
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-bold">+99</span>
            </div>
            <p className="text-gray-600 text-sm">Trusted by thousands of happy customers</p>
          </div>
        </div>

        {/* DERECHA: Imágenes de postres */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1562440499-59aa12f3a00b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604152135912-04a2d2b4f8be?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589308078054-115a2ee23cd7?auto=format&fit=crop&w=600&q=80",
          ].map((src, idx) => (
            <img key={idx} src={src} alt={`Postre ${idx+1}`} className="w-full h-40 object-cover rounded-lg shadow-lg"/>
          ))}
        </div>
      </div>
    </section>
  )
}