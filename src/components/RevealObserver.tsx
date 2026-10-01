'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
