"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Profile",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 7.5"
        />
      </svg>
    ),
  },
  {
    label: "Blogs",
    href: "/posts",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M12 20q-1.2-.95-2.6-1.475T6.5 18q-1.05 0-2.062.275T2.5 19.05q-.525.275-1.012-.025T1 18.15V6.1q0-.275.138-.525T1.55 5.2q1.15-.6 2.4-.9T6.5 4q1.45 0 2.838.375T12 5.5v12.1q1.275-.8 2.675-1.2T17.5 16q.9 0 1.763.15T21 16.6v-12q.375.125.738.263t.712.337q.275.125.413.375T23 6.1v12.05q0 .575-.487.875t-1.013.025q-.925-.5-1.937-.775T17.5 18q-1.5 0-2.9.525T12 20m2-5V5.5l5-5v10zm-4 1.625v-9.9q-.825-.35-1.713-.537T6.5 6q-.925 0-1.8.175T3 6.7v9.925q.875-.325 1.738-.475T6.5 16t1.763.15t1.737.475m0 0v-9.9z"
        />
      </svg>
    ),
  },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-5 bg-black/70 rounded-lg text-white backdrop-blur-lg backdrop-brightness-200 backdrop-invert"
    >
      <div className="flex items-center w-30 gap-8 justify-center  px-6 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-sm ${
                isActive ? "text-blue-400" : "text-white"
              }`}
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
