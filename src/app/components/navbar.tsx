'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    const pathname = usePathname();
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const navListRef = useRef<HTMLUListElement | null>(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const [isIndicatorReady, setIsIndicatorReady] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [themeReveal, setThemeReveal] = useState<{ x: number; y: number; isDark: boolean } | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/proyek' },
        { label: 'Skills', href: '/keahlian' },
        { label: 'About', href: '/tentang' },
        { label: 'Contact', href: '/kontak' },
        { label: 'CV', href: '/cv' }
    ];

    useEffect(() => {
        const updateIndicator = () => {
            const activeLink = linkRefs.current[pathname];

            if (!activeLink) {
                return;
            }

            const list = navListRef.current;
            if (!list) {
                return;
            }

            const linkRect = activeLink.getBoundingClientRect();
            const listRect = list.getBoundingClientRect();
            setIndicator({
                left: linkRect.left - listRect.left,
                width: linkRect.width,
            });
            setIsIndicatorReady(true);
        };

        const frame = window.requestAnimationFrame(updateIndicator);
        window.addEventListener('resize', updateIndicator);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('resize', updateIndicator);
        };
    }, [pathname]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const savedTheme = window.localStorage.getItem("ipann-theme");
        const shouldUseDarkMode = savedTheme === "dark";

        setIsDarkMode(shouldUseDarkMode);
        document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        document.documentElement.classList.toggle("dark", isDarkMode);
        window.localStorage.setItem("ipann-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    function toggleTheme(origin: { x: number; y: number }) {
        const nextMode = !isDarkMode;
        document.documentElement.style.setProperty("--theme-x", `${origin.x}px`);
        document.documentElement.style.setProperty("--theme-y", `${origin.y}px`);

        const updateTheme = () => setIsDarkMode(nextMode);
        const transitionDocument = document as Document & {
            startViewTransition?: (update: () => void) => void;
        };

        if (transitionDocument.startViewTransition) {
            transitionDocument.startViewTransition(updateTheme);
        } else {
            setThemeReveal({ x: origin.x, y: origin.y, isDark: nextMode });
            updateTheme();
        }
    }

    return (
        <nav className="global-navbar fixed left-0 right-0 top-0 z-50 mx-auto w-full px-3 pt-3 sm:px-6 sm:pt-4">
            <div className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-4xl border border-blue-200/80 bg-blue-50/80 px-3 py-3 shadow-[0_12px_30px_rgba(30,64,175,0.08)] backdrop-blur sm:gap-4 sm:px-4">
                <Link href="/" className="flex shrink-0 items-center gap-3 pl-1" aria-label="Ipann home">
                    <Image src="/ipann/logoIpann.jpg" alt="Logo Ipann" width={42} height={42}
                        className="h-9 w-9 rounded-full object-contain shadow-sm" />
                    <span className="text-sm font-semibold tracking-wide text-blue-950">Irfan Syah</span>
                </Link>
                <ul ref={navListRef} className="relative hidden min-w-0 items-center gap-1 sm:flex">
                    {menuItems.map((item) => (
                            <li key={item.href}>
                                <div className="group relative">
                                    <Link href={item.href} ref={(element) => { linkRefs.current[item.href] = element; }} className={pathname === item.href ?
                                        'block px-3 py-2 text-xs font-medium text-blue-800 sm:px-4 sm:text-sm'
                                        : 'block rounded-xl px-3 py-2 text-xs font-medium text-blue-900/65 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-800 sm:px-4 sm:text-sm'}>
                                            {item.label === "CV" ? (
                                                <span className="inline-flex items-center gap-1.5"><span className="text-sm" aria-hidden="true">▤</span>{item.label}</span>
                                            ) : item.label}
                                    </Link>
                                    {item.label === "CV" && (
                                        <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-44 -translate-x-1/2 translate-y-1 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-center text-[11px] leading-4 text-blue-900/70 opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                                            Lihat curriculum vitae saya
                                        </span>
                                    )}
                                </div>
                            </li>
                    ))}
                    <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-blue-700 transition-[left,width,opacity] duration-300 ease-out ${isIndicatorReady ? "opacity-100" : "opacity-0"}`}
                        style={{ left: indicator.left, width: indicator.width }}
                    />
                </ul>
                <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
                <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} mobile />
                <button
                    type="button"
                    aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-blue-200 bg-white/70 text-blue-800 transition-colors hover:bg-blue-100 sm:hidden"
                >
                    <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                        <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                        <span className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                    </span>
                </button>
            </div>
            {themeReveal && (
                <div
                    aria-hidden="true"
                    className={`theme-reveal ${themeReveal.isDark ? "theme-reveal-dark" : "theme-reveal-light"}`}
                    style={{ "--theme-x": `${themeReveal.x}px`, "--theme-y": `${themeReveal.y}px` } as CSSProperties}
                    onAnimationEnd={() => setThemeReveal(null)}
                />
            )}
            <div className={`fixed inset-0 z-40 bg-blue-950/25 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
            <aside className={`fixed right-0 top-0 z-50 flex h-full w-[min(82vw,20rem)] flex-col border-l border-blue-200 bg-blue-50 px-6 py-6 shadow-2xl transition-transform duration-300 ease-out sm:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!isMenuOpen}>
                <div className="flex items-center justify-between border-b border-blue-200 pb-5">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Navigation</p>
                        <p className="mt-1 text-lg font-bold text-blue-950">Irfan Syah</p>
                    </div>
                    <button type="button" aria-label="Tutup menu navigasi" onClick={() => setIsMenuOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 text-xl text-blue-800 hover:bg-blue-100">&times;</button>
                </div>
                <ul className="mt-8 space-y-2">
                    {menuItems.filter((item) => item.href !== '/cv').map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${pathname === item.href ? 'bg-blue-700 text-white' : 'text-blue-900/70 hover:bg-blue-100 hover:text-blue-800'}`}>
                                {item.label}
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/cv" onClick={() => setIsMenuOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${pathname === '/cv' ? 'bg-blue-700 text-white' : 'text-blue-900/70 hover:bg-blue-100 hover:text-blue-800'}`}>
                            <span className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-lg border border-current text-xs" aria-hidden="true">▤</span>CV</span>
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </li>
                </ul>
                <button type="button" onClick={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
                }} className="mt-6 flex items-center justify-between rounded-xl border border-blue-200 px-4 py-3 text-sm font-semibold text-blue-900/70 hover:bg-blue-100">
                    <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
                    <span aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
                </button>
                <div className="mt-auto border-t border-blue-200 pt-5 text-xs leading-5 text-blue-900/55">Portfolio pribadi<br />Moh. Irfan Syah</div>
            </aside>
        </nav>
    );
}