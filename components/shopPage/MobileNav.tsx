import { Home, ShoppingBag, Search, User } from "lucide-react";
import React from "react";

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black-300 backdrop-blur-xl border-t border-gray-100 p-4 pb-6 flex justify-around z-50 rounded-t-4xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <BottomNavLink icon={Home} label="Home" />
      <BottomNavLink icon={ShoppingBag} label="Shop" active />
      <BottomNavLink href="/search" icon={Search} label="Search" />
      <BottomNavLink href="/profile" icon={User} label="Profile" />
    </div>
  );
};
function BottomNavLink({ icon: Icon, label, active, href }: any) {
  return (
    <button
      className={`flex flex-col items-center gap-1 ${
        active ? "text-orange-500" : "text-gray-400"
      }`}
    >
      <Icon className={`w-6 h-6 ${active ? "fill-current" : ""}`} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

export default MobileNav;
