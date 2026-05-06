document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar" class="fixed top-0 left-0 w-full z-50 bg-white text-gray-800 shadow-sm  transition-all duration-300">
  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    
    <h1 class="text-2xl tracking-tighter">
      <a href="index.html" class="font-bold uppercase">
        <span class="text-black">EMERALD</span> <span class="text-[#10B981]">CIRCUS</span>
      </a>
    </h1>

    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-7 font-semibold text-xs uppercase tracking-wider" id="navLinks">
        
        <li class="relative group">
          <a href="#" class="flex items-center gap-1 hover:text-[#10B981] transition">
            Home <i class="bi bi-chevron-down text-[10px]"></i>
          </a>
          <ul class="absolute left-0 mt-0 w-40 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300">
            <li><a href="index.html" class="block px-4 py-2 hover:bg-gray-50 hover:text-[#10B981]">Home 1</a></li>
            <li><a href="home2.html" class="block px-4 py-2 hover:bg-gray-50 hover:text-[#10B981]">Home 2</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="hover:text-[#10B981] transition">About</a></li>
        <li><a href="service.html" class="hover:text-[#10B981] transition">Services</a></li>
        <li><a href="perform.html" class="hover:text-[#10B981] transition">Performers</a></li>
        <li><a href="event.html" class="hover:text-[#10B981] transition">Events</a></li>
        <li><a href="gallery.html" class="hover:text-[#10B981] transition">Gallery</a></li>
        <li><a href="contact.html" class="hover:text-[#10B981] transition">Contact</a></li>
      </ul>
    </div>

    <div id="rightButtons" class="hidden lg:flex items-center gap-3">
      <button id="themeToggle" class="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:border-[#10B981] hover:text-[#10B981] transition-all">
        <i class="bi bi-moon-stars"></i>
      </button>
      <button id="rtlToggle" class="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:border-[#10B981] hover:text-[#10B981] font-bold transition-all">
        <i class="bi bi-globe2"></i>
      </button>
      <div class="h-6 w-[1px] bg-gray-200 mx-2"></div>
      <a href="login.html" class="bg-white text-[#10B981] border-2 border-[#10B981] px-5 h-10 flex items-center justify-center rounded-xl font-bold text-xs uppercase tracking-widest transition-all">Login</a>
      <a href="sign.html" class="bg-[#10B981] text-white border-2 border-[#10B981] px-5 h-10 flex items-center justify-center rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all">Sign Up</a>
    </div>

    <button id="hamburgerBtn" class="lg:hidden text-3xl text-[#10B981]"><i class="bi bi-list"></i></button>
  </div>
</header>

<div id="mobileMenuOverlay" class="fixed inset-0 bg-black/50 hidden z-40"></div>

<div id="mobileMenu" class="fixed top-0 right-0 h-full w-72 bg-white z-50 transform translate-x-full transition-transform duration-300 lg:hidden shadow-2xl flex flex-col">
  <div class="flex items-center justify-between p-5 border-b">
    <h2 class="text-xl font-bold text-[#10B981]">MENU</h2>
    <button id="closeMenuBtn" class="text-3xl text-gray-500"><i class="bi bi-x-lg"></i></button>
  </div>

  <div class="p-6 overflow-y-auto">
    <ul class="space-y-5 font-semibold uppercase text-[11px] tracking-[0.2em] text-gray-600">
      
      <li>
        <button id="mobileHomeDropdownBtn" class="w-full flex items-center justify-between py-2 hover:text-[#10B981]">
          <span>HOME</span>
          <i class="bi bi-chevron-down transition-transform"></i>
        </button>
        <ul id="mobileHomeDropdownMenu" class="hidden ml-4 mt-2 space-y-3 border-l-2 border-[#10B981]/20 pl-4">
          <li><a href="index.html" class="block">Home 1</a></li>
          <li><a href="home2.html" class="block">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block hover:text-[#10B981]">About</a></li>
       <li><a href="service.html" class="block hover:text-[#10B981]">Services</a></li>
        <li><a href="perform.html" class="block hover:text-[#10B981]">Performers</a></li>
        <li><a href="event.html" class="block hover:text-[#10B981]">Events</a></li>
      <li><a href="gallery.html" class="block hover:text-[#10B981]">Gallery</a></li>
      <li><a href="contact.html" class="block hover:text-[#10B981]">Contact</a></li>
    </ul>
  </div>

  <div class="p-6 mt-2 space-y-4">
    <div class="flex justify-between items-center gap-4 mb-2">
       <button id="mobile-theme-toggle" class="flex-1 h-12 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 text-xl"><i class="bi bi-moon-stars"></i></button>
       <button id="mobile-rtl-toggle" class="flex-1 h-12 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 text-xl font-bold"><i class="bi bi-globe2"></i></button>
    </div>
    <a href="login.html" class="block w-full h-12 flex items-center justify-center bg-white text-[#10B981] border-2 border-[#10B981] rounded-xl font-bold uppercase text-xs tracking-widest">Login</a>
    <a href="sign.html" class="block w-full h-12 flex items-center justify-center bg-[#10B981] text-white border-2 border-[#10B981] rounded-xl font-bold uppercase text-xs tracking-widest shadow-md">Sign Up</a>
  </div>
</div>
`;

  // === THEME LOGIC ===
  const themeBtns = [document.getElementById("themeToggle"), document.getElementById("mobile-theme-toggle")];
  const updateThemeUI = (theme) => {
    themeBtns.forEach(btn => {
      if (btn) btn.innerHTML = theme === "dark" ? `<i class="bi bi-brightness-high-fill"></i>` : `<i class="bi bi-moon-stars"></i>`;
    });
  };
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeUI(savedTheme);

  themeBtns.forEach(btn => {
    btn?.addEventListener("click", () => {
      const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeUI(newTheme);
    });
  });

  // === RTL LOGIC ===
  const rtlBtns = [document.getElementById("rtlToggle"), document.getElementById("mobile-rtl-toggle")];
  rtlBtns.forEach(btn => {
    btn?.addEventListener("click", () => {
      const html = document.documentElement;
      html.setAttribute("dir", html.getAttribute("dir") === "rtl" ? "ltr" : "rtl");
    });
  });

  // === MOBILE MENU LOGIC ===
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    mobileMenu.classList.toggle('translate-x-0', !isOpen);
    mobileMenu.classList.toggle('translate-x-full', isOpen);
    mobileMenuOverlay.classList.toggle('hidden', isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  hamburgerBtn?.addEventListener('click', toggleMenu);
  closeMenuBtn?.addEventListener('click', toggleMenu);
  mobileMenuOverlay?.addEventListener('click', toggleMenu);

  // === DROPDOWN LOGIC ===
  const mobileHomeBtn = document.getElementById('mobileHomeDropdownBtn');
  const mobileHomeMenu = document.getElementById('mobileHomeDropdownMenu');

  mobileHomeBtn?.addEventListener('click', () => {
    mobileHomeMenu.classList.toggle('hidden');
    mobileHomeBtn.querySelector('i').classList.toggle('rotate-180');
  });

  // === ACTIVE LINK LOGIC ===
  const currentLocation = window.location.pathname.split("/").pop() || "index.html";
  const allLinks = navbar.querySelectorAll("a");

  allLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentLocation) {
      link.classList.add("nav-active");

      // Highlight Desktop parent dropdown
      const desktopParent = link.closest(".group")?.querySelector("a:first-child");
      if (desktopParent) {
        desktopParent.classList.add("nav-active");
      }

      // Highlight Mobile parent dropdown
      const mobileParentBtn = document.getElementById("mobileHomeDropdownBtn");
      if (link.closest("#mobileHomeDropdownMenu")) {
        mobileParentBtn?.classList.add("nav-active");
        // Also open the mobile dropdown if child is active
        mobileHomeMenu?.classList.remove("hidden");
        mobileHomeBtn?.querySelector('i')?.classList.add("rotate-180");
      }
    }
  });
});
