/**
 * Hilal Teknik - İletişim Etkileşim Takibi
 * Telefon / WhatsApp / sosyal medya tıklamalarını GA4 ve Microsoft Clarity'ye gönderir.
 * Sayfa görüntüleme GA4 tarafından <head> içindeki gtag('config') ile otomatik gönderilir.
 */
(function () {
    'use strict';

    const LOCATIONS = [
        ['.floating-contact-actions', 'floating'],
        ['.site-header', 'header'],
        ['footer', 'footer'],
        ['.section--hero-modern', 'hero'],
        ['.service-actions, .drawer', 'cta_action'],
        ['.contact-section, .contact-card, .contact-info', 'contact_card']
    ];

    function getLocation(el) {
        for (let i = 0; i < LOCATIONS.length; i++) {
            if (el.closest(LOCATIONS[i][0])) return LOCATIONS[i][1];
        }
        return 'sayfa_ici';
    }

    function send(name, params) {
        // gtag/clarity <head> içinde kuyruk fonksiyonu olarak tanımlıdır; script yüklenince kuyruk işlenir
        try { if (typeof window.gtag === 'function') window.gtag('event', name, params); } catch (e) { /* yoksay */ }
        try { if (typeof window.clarity === 'function') window.clarity('event', name); } catch (e) { /* yoksay */ }
    }

    function track(type, loc) {
        const page = window.location.pathname || '/';
        if (type === 'phone' || type === 'whatsapp') {
            send('generate_lead', {
                method: type,
                event_category: 'contact',
                event_label: (type === 'phone' ? 'Telefon: ' : 'WhatsApp: ') + loc,
                button_location: loc,
                page_path: page
            });
            send(type === 'phone' ? 'phone_call' : 'whatsapp_click', {
                event_category: 'engagement',
                event_label: loc,
                page_path: page
            });
        } else {
            send('social_visit', {
                event_category: 'social',
                event_label: 'click_' + type,
                platform: type,
                button_location: loc,
                page_path: page
            });
        }
    }

    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[href]');
        if (!link) return;
        const href = link.getAttribute('href');
        let type = null;
        if (href.indexOf('tel:') === 0) type = 'phone';
        else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) type = 'whatsapp';
        else if (href.indexOf('instagram.com') !== -1) type = 'instagram';
        else if (href.indexOf('facebook.com') !== -1) type = 'facebook';
        if (type) track(type, getLocation(link));
    }, { passive: true });
})();
