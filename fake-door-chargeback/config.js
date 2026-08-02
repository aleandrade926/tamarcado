// CONFIGURAÇÕES GLOBAIS DO PILOTO

const CONFIG = {
    CHECKOUT_URL: "", // Ex: "https://pay.stripe.com/sua-url"
    LEAD_ENDPOINT: "", // Ex: "https://hook.us1.make.com/xxxxxxxx"
    CHECKLIST_URL: "checklist-chargeback.pdf",
    GA4_ID: "", // Ex: "G-XXXXXXXXXX"
    PRIVACY_CONTACT_EMAIL: "", // OBRIGATÓRIO PARA LIBERAR TRÁFEGO
    CONTROLLER_NAME: "" // Ex: "Nome da Empresa ou Responsável"
};

// Verifica obrigatoriedade de privacidade
if (!CONFIG.PRIVACY_CONTACT_EMAIL) {
    console.error("ERRO: PRIVACY_CONTACT_EMAIL não configurado. A página não deve ser liberada para tráfego.");
}

// Atribuição de Origem (Armazenamento Persistente)
function initAttribution() {
    if (typeof sessionStorage !== 'undefined' && !sessionStorage.getItem('first_referrer')) {
        sessionStorage.setItem('first_referrer', document.referrer || 'direto');
        sessionStorage.setItem('landing_page', window.location.pathname);
        
        const params = new URLSearchParams(window.location.search);
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
            const val = params.get(param);
            if (val) sessionStorage.setItem(`stored_${param}`, val);
        });
    }
}
initAttribution();

function getAttribution() {
    const params = new URLSearchParams(window.location.search);
    
    const getStoredOrCurrent = (key) => {
        return params.get(key) || (typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(`stored_${key}`) : null) || '';
    };

    return {
        utm_source: getStoredOrCurrent('utm_source'),
        utm_medium: getStoredOrCurrent('utm_medium'),
        utm_campaign: getStoredOrCurrent('utm_campaign'),
        utm_term: getStoredOrCurrent('utm_term'),
        utm_content: getStoredOrCurrent('utm_content'),
        first_referrer: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('first_referrer') || '' : '',
        landing_page: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('landing_page') || window.location.pathname : window.location.pathname,
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        timestamp: new Date().toISOString()
    };
}

// Inicialização automática do GA4
if (CONFIG.GA4_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA4_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', CONFIG.GA4_ID, { send_page_view: false });
}

function preserveUTMs(targetUrl) {
    const target = new URL(targetUrl, window.location.origin);
    const attr = getAttribution();
    if(attr.utm_source) target.searchParams.set('utm_source', attr.utm_source);
    if(attr.utm_medium) target.searchParams.set('utm_medium', attr.utm_medium);
    if(attr.utm_campaign) target.searchParams.set('utm_campaign', attr.utm_campaign);
    if(attr.utm_term) target.searchParams.set('utm_term', attr.utm_term);
    if(attr.utm_content) target.searchParams.set('utm_content', attr.utm_content);
    return target.toString();
}

function trackEvent(eventName, additionalParams = {}, callback = null) {
    const finalParams = { ...getAttribution(), ...additionalParams, page_path: window.location.pathname };
    
    // Console fallback
    console.log(`[Analytics] ${eventName}`, finalParams);
    
    let callbackCalled = false;
    const safeCallback = () => {
        if (!callbackCalled && callback) {
            callbackCalled = true;
            callback();
        }
    };

    if (typeof window.gtag === 'function') {
        const gtagParams = { ...finalParams, transport_type: 'beacon', event_callback: safeCallback };
        window.gtag('event', eventName, gtagParams);
        // Fallback timeout se o GA4 falhar ou demorar muito
        if (callback) setTimeout(safeCallback, 1000);
    } else {
        safeCallback();
    }
}
