'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/course', label: 'Course' },
  { href: '/cre-tool', label: 'CRE Tool' },
  { href: '/research', label: 'Research' },
  { href: 'https://vines-connection.vercel.app', label: 'Main Site' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <Image
            src="/vine-logo.png"
            alt="VINE Logo"
            width={48}
            height={48}
            className="navbar-vine-logo"
            priority
          />
          <span className="logo-text">
            <span className="logo-cr">COLLAPSE RECURSION</span>
            <span className="logo-full">The Logic of Coherence</span>
          </span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/course" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Begin Course →
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
