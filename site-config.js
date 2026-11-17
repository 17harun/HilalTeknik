/**
 * Hilal Teknik - Ortak Site Davranışları (saf statik)
 * Sticky header, yukarı çık butonu, yumuşak kaydırma, mobil menü,
 * fareye duyarlı ambient arka plan ve görsel geri dönüş yakalayıcı.
 */
(function () {
    'use strict';

    // ==================== SCROLL: STICKY HEADER + YUKARI ÇIK (rAF ile tek dinleyici) ====================
    function initScroll() {
        const header = document.getElementById('siteHeader');
        const toTop = document.getElementById('scrollToTop');
        let ticking = false;
        let lastScrolled = null;
        let lastShow = null;

        function update() {
            const y = window.scrollY;
            const scrolled = y > 30;
            const show = y > 300;
            // DOM'a yalnızca durum değiştiğinde dokunulur
            if (scrolled !== lastScrolled) {
                lastScrolled = scrolled;
                if (header) header.classList.toggle('is-scrolled', scrolled);
            }
            if (show !== lastShow) {
                lastShow = show;
                if (toTop) toTop.classList.toggle('show', show);
            }
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }, { passive: true });
        // İlk ölçüm bir sonraki karede: başlangıçta zorunlu (senkron) yerleşim hesabını önler
        requestAnimationFrame(update);

        if (toTop) {
            toTop.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // ==================== SAYFA İÇİ ÇAPALAR İÇİN YUMUŞAK KAYDIRMA (delegasyon) ====================
    function initSmoothScroll() {
        document.addEventListener('click', function (e) {
            if (e.defaultPrevented) return;
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (href.length < 2 || href === '#!') return;
            let target = null;
            try { target = document.querySelector(href); } catch (err) { return; }
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 75, behavior: 'smooth' });
        });
    }

    // ==================== MOBİL MENÜ ====================
    function initMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const container = document.querySelector('.header-container');
        if (!toggle || !container) return;

        toggle.setAttribute('aria-expanded', 'false');

        function setOpen(open) {
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            container.classList.toggle('is-open', open);
        }

        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            setOpen(!container.classList.contains('is-open'));
        });

        document.addEventListener('click', function (e) {
            if (container.classList.contains('is-open') && (!container.contains(e.target) || e.target.closest('.desktop-nav .nav-link'))) {
                setOpen(false);
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && container.classList.contains('is-open')) setOpen(false);
        });
    }

    // ==================== FAREYE DUYARLI AMBİENT ARKA PLAN ====================
    function initInteractiveBackground() {
        const bg = document.getElementById('ambientBg');
        if (!bg) return;

        // Dokunmatik / dar ekran / azaltılmış hareket tercihinde fare takibi başlatılmaz
        // matchMedia yerleşim hesabı tetiklemez (innerWidth okumak senkron reflow yaptırır)
        if (matchMedia('(max-width: 991px), (pointer: coarse), (hover: none), (prefers-reduced-motion: reduce)').matches) return;

        let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
        let vw = window.innerWidth, vh = window.innerHeight;
        window.addEventListener('resize', function () { vw = window.innerWidth; vh = window.innerHeight; }, { passive: true });
        let running = false;

        function step() {
            currentX += (targetX - currentX) * 0.06;
            currentY += (targetY - currentY) * 0.06;
            bg.style.setProperty('--bg-mouse-x', currentX.toFixed(4));
            bg.style.setProperty('--bg-mouse-y', currentY.toFixed(4));
            // Hedefe ulaşıldığında döngü uyur (boşta 0 CPU)
            if (Math.abs(targetX - currentX) > 0.0004 || Math.abs(targetY - currentY) > 0.0004) {
                requestAnimationFrame(step);
            } else {
                running = false;
            }
        }

        window.addEventListener('pointermove', function (e) {
            targetX = (e.clientX / vw) * 2 - 1;
            targetY = (e.clientY / vh) * 2 - 1;
            if (!running) {
                running = true;
                requestAnimationFrame(step);
            }
        }, { passive: true });
    }

    // Eski panel / önbellek anahtarlarını temizle (artık kullanılmıyor)
    try {
        ['hilal_admin_gallery_items', 'hilal_site_gallery_v1', 'hilal_site_config_v1', 'hilal_admin_logged',
            'hilal_admin_session', 'hilal_analytics_daily_history'].forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) { /* depolama erişilemez */ }

    // Görsel hata yakalayıcı: önizleme yüklenemezse tam boy görsele, logo WebP ise PNG'ye dön
    document.addEventListener('error', function (e) {
        const img = e.target;
        if (!img || img.tagName !== 'IMG' || img.dataset.fallbackTried) return;
        img.dataset.fallbackTried = '1';
        const src = img.getAttribute('src') || '';
        if (img.dataset.full && src !== img.dataset.full) {
            img.src = img.dataset.full;
        } else if (src.indexOf('logo-hilal-amblem') !== -1 && /\.webp$/i.test(src)) {
            img.src = './RESIMLER/logo-hilal-amblem.png';
        }
    }, true);

    function init() {
        initScroll();
        initSmoothScroll();
        initMobileMenu();
        initInteractiveBackground();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
