document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
<footer class="bg-white dark:bg-[#0F172A] text-gray-800 dark:text-gray-100 w-full border-t border-gray-100 dark:border-white/5 transition-colors duration-300">

  <div class="max-w-7xl mx-auto px-6 py-16">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      <div>
       <h1 class="text-2xl tracking-tighter">
      <a href="index.html" class="font-bold uppercase">
        <span class="text-black">EMERALD</span> <span class="text-[#10B981]">CIRCUS</span>
      </a>
    </h1>

        <p class="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
          The premier booking agency for world-class circus talent. 
          From corporate galas to private spectacles, we bring the magic to your stage.
        </p>

        <div class="flex gap-5 mt-6 text-xl text-gray-800 dark:text-white">
          <a href="#" class="hover:text-[#10B981] transition-transform hover:scale-110"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#10B981] transition-transform hover:scale-110"><i class="bi bi-youtube"></i></a>
          <a href="#" class="hover:text-[#10B981] transition-transform hover:scale-110"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#10B981] transition-transform hover:scale-110"><i class="bi bi-tiktok"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">
          The Acts
        </h3>
        <ul class="space-y-3 text-sm font-semibold">
          <li><a href="acrobats.html" class="hover:text-[#10B981] transition flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Aerialist & Acrobats</a>
          </li>
          <li><a href="fire.html" class="hover:text-[#10B981] transition flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Fire & Light Shows</a>
          </li>
          <li><a href="clowns.html" class="hover:text-[#10B981] transition flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Clowns & Mimes</a>
          </li>
          <li><a href="magic.html" class="hover:text-[#10B981] transition flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Illusionists</a>
          </li>
        </ul>
      </div>

       <div>
         <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400 ">
           The Agency
         </h3>
         <ul class="space-y-3 text-sm font-semibold">
           <li><a href="about.html" class="hover:text-[#10B981] transition">About</a></li>
           <li><a href="event.html" class="hover:text-[#10B981] transition">Event Packages</a></li>
           <li><a href="services.html" class="hover:text-[#10B981] transition">Services</a></li>
           <li><a href="gallery.html" class="hover:text-[#10B981] transition">Showcase Gallery</a></li>
           <li><a href="contact.html" class="hover:text-[#10B981] transition">Booking FAQs</a></li>
         </ul>
       </div>

      <div>
        <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">
          Inquiries
        </h3>

        <ul class="space-y-4 text-sm font-semibold">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-[#FFD60A]"></i>
            <span>Emerald Square, London, UK</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-[#FFD60A]"></i>
            <span>+44 20 7946 0123</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope-fill text-[#FFD60A]"></i>
            <span class="border-b-2 border-[#10B981]/30 hover:border-[#10B981] hover:text-[#10B981] transition cursor-pointer">events@emeraldcircus.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="bg-gray-50 dark:bg-white/5 py-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 px-4">
    © ${new Date().getFullYear()} Emerald Circus Agency. Where Spectacle Meets Professionalism.
  </div>

</footer>
`;
});