export type Language = "it" | "en" | "es" | "fr" | "de";

export const LANGUAGE_NAMES: Record<Language, string> = {
  it: "Italiano",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

// Flag code used by <FlagIcon /> for each language's language-switcher entry.
// Kept separate from CountryConfig.code (store region) on purpose: a user
// can browse in French while shopping on amazon.de, for example.
export const LANGUAGE_FLAG: Record<Language, string> = {
  it: "IT",
  en: "GB",
  es: "ES",
  fr: "FR",
  de: "DE",
};

export interface Translations {
  // Header / Language & Region Modal
  selectLanguageRegion: string;
  language: string;
  storeRegion: string;
  regionNotice: string;
  close: string;

  // Loading Screen
  curating: string;
  curatingSub: string;
  loadingStep1: string;
  loadingStep2: string;
  loadingStep3: string;

  // Home Screen Wizard
  fastTrackPlaceholder: string;
  wizardBack: string;
  step1Title: string;
  step1Subtitle: string;
  step2Title: string;
  step2Subtitle: string;
  step3Title: string;
  step3Subtitle: string;
  recipientHome: string;
  recipientGym: string;
  recipientOutdoor: string;
  recipientRecovery: string;
  vibeCardio: string;
  vibeStrength: string;
  vibeMobility: string;
  vibeNutrition: string;
  vibeRecovery: string;
  vibeTech: string;
  orExactAmount: string;
  customBudgetLabel: string;
  exactAmountPlaceholder: string;
  extraOptionsLabel: string;
  alreadyExperiencedLabel: string;
  extraDetailsPlaceholder: string;
  ctaShowProducts: string;

  // Voice Drawer
  voiceAssistantTitle: string;
  voiceNotSupported: string;
  voiceMicDenied: string;
  voiceListening: string;
  voiceTapToSpeak: string;
  voiceTranscriptLabel: string;
  voiceTranscriptPlaceholder: string;
  voiceSubmitBtn: string;

  // Results Deck
  newSearch: string;
  previous: string;
  next: string;
  ourPick: string;
  reviewsWord: string;
  whyPerfect: string;
  seeInStore: string;
  addToCart: string;
  copiedAndOpened: string;
  copyLink: string;
  moreProducts: string;
  saveForLater: string;
  goalNamePlaceholder: string;
  cancel: string;
  save: string;
  reminderSaved: string;
  amazonDisclaimer: string;
  shareMessagePrefix: string;
  shareMessageMiddle: string;

  // Settings Drawer
  settingsTitle: string;
  sectionInteraction: string;
  hapticLabel: string;
  sectionPermissions: string;
  micLabel: string;
  micGranted: string;
  micDenied: string;
  micPrompt: string;
  micUnknown: string;
  micOn: string;
  micBlocked: string;
  micEnableBtn: string;
  micDeniedHint: string;
  notificationsLabel: string;
  testNotificationBtn: string;
  sectionGoals: string;
  noGoals: string;
  deleteAria: string;
  sectionLegal: string;
  privacyPolicyLabel: string;
  termsLabel: string;
  affiliateLabel: string;
  sectionSupport: string;
  sendFeedbackBtn: string;

  // Legal Modal
  legalPrivacyTitle: string;
  legalPrivacyBody: string;
  legalTermsTitle: string;
  legalTermsBody: string;
  legalAffiliateTitle: string;
  legalAffiliateQuote: string;
  legalAffiliateProgramText: string;
  legalAffiliatePriceDisclaimerTitle: string;
  legalAffiliatePriceDisclaimerBody: string;

  // Cookie Banner
  cookieText: string;
  cookiePrivacyLink: string;
  cookieAccept: string;

  // Error Boundary
  errorTitle: string;
  errorMessage: string;
  errorRestartBtn: string;

  // Offline Screen
  offlineTitle: string;
  offlineMessage: string;
  offlineRetryBtn: string;
  offlineCheckingBtn: string;

  // PWA Install / In-App Browser Banners
  pwaInAppBannerText: string;
  pwaInstallTitle: string;
  pwaInstallSubtitle: string;
  pwaInstallNowBtn: string;
  pwaAddToHomeBtn: string;
  pwaIosGuideTitle: string;
  pwaIosStep1Title: string;
  pwaIosStep1Sub: string;
  pwaIosStep2Title: string;
  pwaIosStep2Sub: string;
  pwaPressShareBelow: string;
  pwaGotIt: string;
  pwaFallbackAlert: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  it: {
    selectLanguageRegion: "Lingua e Regione",
    language: "Lingua",
    storeRegion: "Regione dello Store",
    regionNotice: "I link dei prodotti si apriranno nella tua valuta e store locale.",
    close: "Chiudi",

    curating: "RICERCA IN CORSO...",
    curatingSub: "Ricerca dei prodotti più adatti al tuo obiettivo...",
    loadingStep1: "Analisi del tuo obiettivo",
    loadingStep2: "Filtro dei prodotti più efficaci per categoria",
    loadingStep3: "Preparazione link store e dettagli",

    fastTrackPlaceholder: "Hai un'idea o SOS? Parla o scrivi...",
    wizardBack: "Indietro",
    step1Title: "Per cosa ti serve?",
    step1Subtitle: "Seleziona il contesto per personalizzare",
    step2Title: "Che tipo di prodotto cerchi?",
    step2Subtitle: "Scegli la categoria più vicina al tuo obiettivo",
    step3Title: "Budget e Stile",
    step3Subtitle: "Imposta la fascia di prezzo desiderata",
    recipientHome: "A casa",
    recipientGym: "Palestra",
    recipientOutdoor: "Outdoor",
    recipientRecovery: "Recupero",
    vibeCardio: "Cardio",
    vibeStrength: "Forza",
    vibeMobility: "Yoga & Mobilità",
    vibeNutrition: "Nutrizione",
    vibeRecovery: "Recupero",
    vibeTech: "Tech",
    orExactAmount: "Oppure cifra esatta:",
    customBudgetLabel: "Personalizzato",
    exactAmountPlaceholder: "Cifra esatta (es. 18)",
    extraOptionsLabel: "OPZIONI EXTRA",
    alreadyExperiencedLabel: "Sono già esperto (voglio prodotti più avanzati)",
    extraDetailsPlaceholder: "Dettaglio extra (opzionale)",
    ctaShowProducts: "MOSTRA I PRODOTTI GIUSTI",

    voiceAssistantTitle: "Assistente Vocale AI",
    voiceNotSupported: "Riconoscimento vocale non supportato nel browser. Puoi digitare la tua idea!",
    voiceMicDenied: "Permesso microfono negato. Puoi digitare la tua idea qui sotto.",
    voiceListening: "In ascolto... Parla liberamente",
    voiceTapToSpeak: "Tocca il microfono per parlare",
    voiceTranscriptLabel: "Trascrizione Live / Idea:",
    voiceTranscriptPlaceholder: "Es. Manubri regolabili per allenarmi a casa sotto i 50€...",
    voiceSubmitBtn: "TROVA PRODOTTO ORA",

    newSearch: "Nuova Ricerca",
    previous: "Precedente",
    next: "Successivo",
    ourPick: "La nostra scelta",
    reviewsWord: "recensioni",
    whyPerfect: "Perché è perfetto:",
    seeInStore: "VEDI NELLO STORE",
    addToCart: "METTI IN CARRELLO",
    copiedAndOpened: "Copiato & Aperto!",
    copyLink: "Copia Link",
    moreProducts: "Altri 3 Prodotti",
    saveForLater: "Salva per dopo",
    goalNamePlaceholder: "Nome obiettivo (facoltativo)",
    cancel: "Annulla",
    save: "Salva",
    reminderSaved: "Promemoria salvato — te lo ricorderemo noi.",
    amazonDisclaimer: "In qualità di Affiliato Amazon, Forma AI riceve un guadagno dagli acquisti idonei.",
    shareMessagePrefix: "Ho trovato il prodotto giusto per il mio obiettivo fitness:",
    shareMessageMiddle: "Guarda qui su Amazon:",

    settingsTitle: "Impostazioni & App",
    sectionInteraction: "INTERAZIONE",
    hapticLabel: "Feedback Tattile (Vibrazione)",
    sectionPermissions: "PERMESSI & PRIVACY",
    micLabel: "Microfono (Ricerca Vocale)",
    micGranted: "Permesso concesso",
    micDenied: "Permesso negato dal browser",
    micPrompt: "Non ancora richiesto",
    micUnknown: "Da verificare",
    micOn: "Attivo",
    micBlocked: "Bloccato",
    micEnableBtn: "Attiva Permesso Microfono",
    micDeniedHint: "Hai bloccato il microfono per questo sito. Riattivalo dalle impostazioni del browser (icona lucchetto nella barra indirizzo).",
    notificationsLabel: "Notifiche PWA Promemoria",
    testNotificationBtn: "⚡ Invia Notifica di Prova PWA",
    sectionGoals: "I MIEI OBIETTIVI",
    noGoals: "Nessun obiettivo salvato. Dopo aver trovato un prodotto, potrai salvarlo per ricevere un promemoria.",
    deleteAria: "Elimina",
    sectionLegal: "LEGALE & COMPLIANCE",
    privacyPolicyLabel: "Privacy Policy (GDPR EU)",
    termsLabel: "Termini e Condizioni",
    affiliateLabel: "Affiliazione Amazon & Disclaimers",
    sectionSupport: "SUPPORTO & INFO",
    sendFeedbackBtn: "Invia un Feedback",

    legalPrivacyTitle: "Informativa sulla Privacy e Trattamento Dati (GDPR EU 2016/679)",
    legalPrivacyBody:
      "1. Titolare del Trattamento: Forma AI opera nel rispetto dei principi di minimizzazione dei dati e riservatezza.\n\n" +
      "2. Tipologia di Dati Raccolti: Forma AI NON raccoglie, profila né vende dati personali degli utenti. L'applicazione funziona interamente tramite salvataggi locali tecnici nel browser/dispositivo dell'utente (localStorage) per memorizzare le impostazioni di lingua, paese Amazon e promemoria degli obiettivi.\n\n" +
      "3. Cookie Tecnici: Vengono utilizzati esclusivamente cookie e archivi locali strettamente necessari per le funzionalità operative dell'app (stato PWA, preferenze lingua, lista promemoria). Non vengono impiegati cookie di tracciamento pubblicitario o profilazione di terze parti.\n\n" +
      "4. Servizi Terzi (Google Gemini AI & Amazon PA-API): Le elaborazioni per la raccomandazione dei prodotti avvengono lato server tramite connessioni crittografate HTTPS. Nessun identificativo dell'utente viene trasmesso ai modelli AI.\n\n" +
      "5. Diritti dell'Utente: L'utente può in qualsiasi momento cancellare i propri dati salvati semplicemente svuotando la cache del browser o ripristinando le impostazioni dell'app.",
    legalTermsTitle: "Termini e Condizioni di Utilizzo",
    legalTermsBody:
      "1. Natura del Servizio: Forma AI è un motore di raccomandazione intelligente sviluppato per suggerire prodotti fitness e wellness reperibili su store online come Amazon, per l'uso personale di chi effettua la ricerca.\n\n" +
      "2. Esclusione di Responsabilità: I suggerimenti generati dall'Intelligenza Artificiale hanno scopo informativo ed euristico. Forma AI non è il venditore diretto dei prodotti consigliati.\n\n" +
      "3. Acquisti Esterni: Gli acquisti avvengono interamente sui siti ufficiali Amazon del paese selezionato. L'utente si affida alle condizioni di vendita, garanzia e spedizione fornite direttamente da Amazon.\n\n" +
      "4. Proprietà Intellettuale: Il design, il codice e l'interfaccia di Forma AI sono protetti da copyright. I marchi Amazon e i loghi dei prodotti appartengono ai rispettivi proprietari.",
    legalAffiliateTitle: "Dichiarazione di Affiliazione Amazon & Disclaimers Obbligatori",
    legalAffiliateQuote: "In qualità di Affiliato Amazon, Forma AI riceve un guadagno dagli acquisti idonei.",
    legalAffiliateProgramText:
      "Forma AI partecipa al Programma Affiliazione Amazon EU e Amazon Associates US, un programma di affiliazione progettato per fornire ai siti un mezzo per guadagnare commissioni pubblicitarie creando link verso Amazon.it, Amazon.com e i rispettivi store internazionali.",
    legalAffiliatePriceDisclaimerTitle: "Disclaimer Prezzi e Disponibilità:",
    legalAffiliatePriceDisclaimerBody:
      "Prezzi e disponibilità dei prodotti sono forniti in tempo reale da Amazon PA-API e sono soggetti a variazioni continue. Fa fede il prezzo e la disponibilità mostrati sulla pagina prodotto di Amazon al momento dell'acquisto finale.",

    cookieText: "Forma AI utilizza cookie tecnici e servizi di affiliazione per consigliarti i prodotti giusti. Continuando ad usare l'app accetti la nostra Privacy Policy.",
    cookiePrivacyLink: "Privacy Policy",
    cookieAccept: "Accetta",

    errorTitle: "Qualcosa è andato storto",
    errorMessage: "Nessun problema — i tuoi obiettivi salvati sono al sicuro. Riprova a ripartire.",
    errorRestartBtn: "Ricomincia",

    offlineTitle: "Nessuna Connessione",
    offlineMessage: "Verifica la tua rete internet per continuare a cercare i prodotti giusti per te.",
    offlineRetryBtn: "RIPROVA",
    offlineCheckingBtn: "VERIFICA IN CORSO...",

    pwaInAppBannerText: "Per la migliore esperienza, apri in Safari o Chrome",
    pwaInstallTitle: "Installa l'App in 1 Tap",
    pwaInstallSubtitle: "Accedi all'istante dalla tua Schermata Home senza scaricare dagli store.",
    pwaInstallNowBtn: "INSTALLA SUBITO IN HOME",
    pwaAddToHomeBtn: "AGGIUNGI A SCHERMATA HOME",
    pwaIosGuideTitle: "Aggiungi a Home Screen iOS",
    pwaIosStep1Title: "Tocca il tasto 'Condividi'",
    pwaIosStep1Sub: "Si trova nella barra in basso di Safari",
    pwaIosStep2Title: "Seleziona 'Aggiungi alla schermata Home'",
    pwaIosStep2Sub: "Scorri le opzioni del menu di condivisione",
    pwaPressShareBelow: "Premi Condividi Qui Sotto",
    pwaGotIt: "HO CAPITO",
    pwaFallbackAlert: "Per installare l'app, usa il menu del tuo browser e seleziona 'Aggiungi a Schermata Home'.",
  },
  en: {
    selectLanguageRegion: "Language & Region",
    language: "Language",
    storeRegion: "Store Region",
    regionNotice: "Product links will open in your local store currency and region.",
    close: "Close",

    curating: "SEARCHING...",
    curatingSub: "Matching your goal with the best available products...",
    loadingStep1: "Analyzing your goal",
    loadingStep2: "Filtering the most effective products by category",
    loadingStep3: "Preparing store links & details",

    fastTrackPlaceholder: "Have an idea or SOS? Speak or type...",
    wizardBack: "Back",
    step1Title: "What do you need it for?",
    step1Subtitle: "Select the context to customize",
    step2Title: "What type of product are you looking for?",
    step2Subtitle: "Choose the category closest to your goal",
    step3Title: "Budget & Style",
    step3Subtitle: "Set your preferred price range",
    recipientHome: "At Home",
    recipientGym: "Gym",
    recipientOutdoor: "Outdoor",
    recipientRecovery: "Recovery",
    vibeCardio: "Cardio",
    vibeStrength: "Strength",
    vibeMobility: "Yoga & Mobility",
    vibeNutrition: "Nutrition",
    vibeRecovery: "Recovery",
    vibeTech: "Tech",
    orExactAmount: "Or exact amount:",
    customBudgetLabel: "Custom",
    exactAmountPlaceholder: "Exact amount (e.g. 18)",
    extraOptionsLabel: "EXTRA OPTIONS",
    alreadyExperiencedLabel: "I'm already experienced (I want more advanced products)",
    extraDetailsPlaceholder: "Extra details (optional)",
    ctaShowProducts: "SHOW THE RIGHT PRODUCTS",

    voiceAssistantTitle: "AI Voice Assistant",
    voiceNotSupported: "Voice recognition not supported in this browser. You can type your idea!",
    voiceMicDenied: "Microphone permission denied. You can type below.",
    voiceListening: "Listening... Speak freely",
    voiceTapToSpeak: "Tap microphone to speak",
    voiceTranscriptLabel: "Live Transcript / Idea:",
    voiceTranscriptPlaceholder: "E.g. Adjustable dumbbells for home workouts under 50€...",
    voiceSubmitBtn: "FIND PRODUCT NOW",

    newSearch: "New Search",
    previous: "Previous",
    next: "Next",
    ourPick: "Our pick",
    reviewsWord: "reviews",
    whyPerfect: "Why it's perfect:",
    seeInStore: "SEE IN STORE",
    addToCart: "ADD TO CART",
    copiedAndOpened: "Copied & Opened!",
    copyLink: "Copy Link",
    moreProducts: "3 More Products",
    saveForLater: "Save for later",
    goalNamePlaceholder: "Goal name (optional)",
    cancel: "Cancel",
    save: "Save",
    reminderSaved: "Reminder saved — we'll remind you.",
    amazonDisclaimer: "As an Amazon Associate, Forma AI earns from qualifying purchases.",
    shareMessagePrefix: "I found the right product for my fitness goal:",
    shareMessageMiddle: "Check it out on Amazon:",

    settingsTitle: "Settings & App",
    sectionInteraction: "INTERACTION",
    hapticLabel: "Haptic Feedback",
    sectionPermissions: "PERMISSIONS & PRIVACY",
    micLabel: "Microphone (Voice Search)",
    micGranted: "Permission granted",
    micDenied: "Denied by browser",
    micPrompt: "Not requested yet",
    micUnknown: "Not checked yet",
    micOn: "On",
    micBlocked: "Blocked",
    micEnableBtn: "Enable Microphone Permission",
    micDeniedHint: "You've blocked the microphone for this site. Re-enable it from your browser's site settings (padlock icon in the address bar).",
    notificationsLabel: "PWA Reminder Notifications",
    testNotificationBtn: "⚡ Send Test PWA Notification",
    sectionGoals: "MY GOALS",
    noGoals: "No saved goals yet. After finding a product, you can save it to get a reminder.",
    deleteAria: "Delete",
    sectionLegal: "LEGAL & COMPLIANCE",
    privacyPolicyLabel: "Privacy Policy (GDPR EU)",
    termsLabel: "Terms & Conditions",
    affiliateLabel: "Amazon Affiliate & Disclaimers",
    sectionSupport: "SUPPORT & INFO",
    sendFeedbackBtn: "Send Feedback",

    legalPrivacyTitle: "Privacy Policy & Data Processing Notice (GDPR EU 2016/679)",
    legalPrivacyBody:
      "1. Data Controller: Forma AI operates in accordance with the principles of data minimization and confidentiality.\n\n" +
      "2. Types of Data Collected: Forma AI does NOT collect, profile, or sell users' personal data. The app runs entirely on technical local storage in the user's browser/device (localStorage) to save language settings, Amazon country, and goal reminders.\n\n" +
      "3. Technical Cookies: Only cookies and local storage strictly necessary for the app's operation are used (PWA state, language preference, reminders list). No advertising tracking or third-party profiling cookies are used.\n\n" +
      "4. Third-Party Services (Google Gemini AI & Amazon PA-API): Product recommendation processing happens server-side over encrypted HTTPS connections. No user identifier is transmitted to the AI models.\n\n" +
      "5. User Rights: Users can delete their saved data at any time simply by clearing the browser cache or resetting the app's settings.",
    legalTermsTitle: "Terms & Conditions of Use",
    legalTermsBody:
      "1. Nature of the Service: Forma AI is a smart recommendation engine built to suggest fitness and wellness products available on online stores such as Amazon, for the personal use of the person searching.\n\n" +
      "2. Disclaimer of Liability: Suggestions generated by the AI are informational and heuristic in nature. Forma AI is not the direct seller of the recommended products.\n\n" +
      "3. External Purchases: Purchases take place entirely on the official Amazon site of the selected country. Users rely on the sales, warranty, and shipping terms provided directly by Amazon.\n\n" +
      "4. Intellectual Property: The design, code, and interface of Forma AI are protected by copyright. Amazon trademarks and product logos belong to their respective owners.",
    legalAffiliateTitle: "Amazon Affiliate Disclosure & Mandatory Disclaimers",
    legalAffiliateQuote: "As an Amazon Associate, Forma AI earns from qualifying purchases.",
    legalAffiliateProgramText:
      "Forma AI participates in the Amazon EU Associates Programme and the Amazon US Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.it, Amazon.com, and their respective international stores.",
    legalAffiliatePriceDisclaimerTitle: "Price & Availability Disclaimer:",
    legalAffiliatePriceDisclaimerBody:
      "Product prices and availability are provided in real time by the Amazon PA-API and are subject to continuous change. The price and availability shown on the Amazon product page at the time of final purchase are authoritative.",

    cookieText: "Forma AI uses technical cookies and affiliate services to recommend the right products. By continuing to use the app, you accept our Privacy Policy.",
    cookiePrivacyLink: "Privacy Policy",
    cookieAccept: "Accept",

    errorTitle: "Something went wrong",
    errorMessage: "No worries — your saved goals are safe. Let's start fresh.",
    errorRestartBtn: "Start over",

    offlineTitle: "No Connection",
    offlineMessage: "Check your internet connection to keep searching for the right products for you.",
    offlineRetryBtn: "RETRY",
    offlineCheckingBtn: "CHECKING...",

    pwaInAppBannerText: "For the best experience, open in Safari or Chrome",
    pwaInstallTitle: "Install App in 1 Tap",
    pwaInstallSubtitle: "Instant 1-tap access from your Home Screen without app stores.",
    pwaInstallNowBtn: "INSTALL NOW ON HOME",
    pwaAddToHomeBtn: "ADD TO HOME SCREEN",
    pwaIosGuideTitle: "Add to iOS Home Screen",
    pwaIosStep1Title: "Tap the 'Share' button",
    pwaIosStep1Sub: "Located in Safari's bottom bar",
    pwaIosStep2Title: "Select 'Add to Home Screen'",
    pwaIosStep2Sub: "Scroll through the options in the share sheet",
    pwaPressShareBelow: "Press Share Below",
    pwaGotIt: "GOT IT",
    pwaFallbackAlert: "To install the app, open your browser menu and select 'Add to Home Screen'.",
  },
  es: {
    selectLanguageRegion: "Idioma y Región",
    language: "Idioma",
    storeRegion: "Región de la Tienda",
    regionNotice: "Los enlaces de producto se abrirán en la moneda y tienda de tu región.",
    close: "Cerrar",

    curating: "BUSCANDO...",
    curatingSub: "Buscando los productos más adecuados para tu objetivo...",
    loadingStep1: "Analizando tu objetivo",
    loadingStep2: "Filtrando los productos más efectivos por categoría",
    loadingStep3: "Preparando enlaces y detalles de la tienda",

    fastTrackPlaceholder: "¿Tienes una idea o un SOS? Habla o escribe...",
    wizardBack: "Atrás",
    step1Title: "¿Para qué lo necesitas?",
    step1Subtitle: "Selecciona el contexto para personalizar",
    step2Title: "¿Qué tipo de producto buscas?",
    step2Subtitle: "Elige la categoría más cercana a tu objetivo",
    step3Title: "Presupuesto y Estilo",
    step3Subtitle: "Define tu rango de precio preferido",
    recipientHome: "En Casa",
    recipientGym: "Gimnasio",
    recipientOutdoor: "Aire Libre",
    recipientRecovery: "Recuperación",
    vibeCardio: "Cardio",
    vibeStrength: "Fuerza",
    vibeMobility: "Yoga y Movilidad",
    vibeNutrition: "Nutrición",
    vibeRecovery: "Recuperación",
    vibeTech: "Tecnología",
    orExactAmount: "O una cifra exacta:",
    customBudgetLabel: "Personalizado",
    exactAmountPlaceholder: "Cifra exacta (ej. 18)",
    extraOptionsLabel: "OPCIONES EXTRA",
    alreadyExperiencedLabel: "Ya tengo experiencia (quiero productos más avanzados)",
    extraDetailsPlaceholder: "Detalles adicionales (opcional)",
    ctaShowProducts: "MOSTRAR LOS PRODUCTOS IDEALES",

    voiceAssistantTitle: "Asistente de Voz AI",
    voiceNotSupported: "El reconocimiento de voz no es compatible con este navegador. ¡Puedes escribir tu idea!",
    voiceMicDenied: "Permiso de micrófono denegado. Puedes escribir tu idea abajo.",
    voiceListening: "Escuchando... Habla con libertad",
    voiceTapToSpeak: "Toca el micrófono para hablar",
    voiceTranscriptLabel: "Transcripción en Vivo / Idea:",
    voiceTranscriptPlaceholder: "Ej. Mancuernas ajustables para entrenar en casa por menos de 50€...",
    voiceSubmitBtn: "BUSCAR PRODUCTO AHORA",

    newSearch: "Nueva Búsqueda",
    previous: "Anterior",
    next: "Siguiente",
    ourPick: "Nuestra elección",
    reviewsWord: "reseñas",
    whyPerfect: "Por qué es perfecto:",
    seeInStore: "VER EN LA TIENDA",
    addToCart: "AÑADIR AL CARRITO",
    copiedAndOpened: "¡Copiado y Abierto!",
    copyLink: "Copiar Enlace",
    moreProducts: "3 Productos Más",
    saveForLater: "Guardar para después",
    goalNamePlaceholder: "Nombre del objetivo (opcional)",
    cancel: "Cancelar",
    save: "Guardar",
    reminderSaved: "Recordatorio guardado — te avisaremos.",
    amazonDisclaimer: "Como Afiliado de Amazon, Forma AI obtiene ingresos por las compras que cumplen los requisitos.",
    shareMessagePrefix: "Encontré el producto ideal para mi objetivo fitness:",
    shareMessageMiddle: "Míralo aquí en Amazon:",

    settingsTitle: "Ajustes y App",
    sectionInteraction: "INTERACCIÓN",
    hapticLabel: "Vibración Táctil",
    sectionPermissions: "PERMISOS Y PRIVACIDAD",
    micLabel: "Micrófono (Búsqueda por Voz)",
    micGranted: "Permiso concedido",
    micDenied: "Denegado por el navegador",
    micPrompt: "Aún no solicitado",
    micUnknown: "Por verificar",
    micOn: "Activo",
    micBlocked: "Bloqueado",
    micEnableBtn: "Activar Permiso de Micrófono",
    micDeniedHint: "Has bloqueado el micrófono para este sitio. Reactívalo desde la configuración del sitio en tu navegador (icono de candado en la barra de direcciones).",
    notificationsLabel: "Notificaciones PWA de Recordatorio",
    testNotificationBtn: "⚡ Enviar Notificación de Prueba PWA",
    sectionGoals: "MIS OBJETIVOS",
    noGoals: "Aún no hay objetivos guardados. Después de encontrar un producto, podrás guardarlo para recibir un recordatorio.",
    deleteAria: "Eliminar",
    sectionLegal: "LEGAL Y CUMPLIMIENTO",
    privacyPolicyLabel: "Política de Privacidad (RGPD UE)",
    termsLabel: "Términos y Condiciones",
    affiliateLabel: "Afiliación Amazon y Avisos Legales",
    sectionSupport: "SOPORTE E INFO",
    sendFeedbackBtn: "Enviar Comentarios",

    legalPrivacyTitle: "Política de Privacidad y Tratamiento de Datos (RGPD UE 2016/679)",
    legalPrivacyBody:
      "1. Responsable del Tratamiento: Forma AI opera respetando los principios de minimización de datos y confidencialidad.\n\n" +
      "2. Tipo de Datos Recopilados: Forma AI NO recopila, perfila ni vende datos personales de los usuarios. La aplicación funciona enteramente mediante almacenamiento técnico local en el navegador/dispositivo del usuario (localStorage) para guardar el idioma, el país de Amazon y los recordatorios de objetivos.\n\n" +
      "3. Cookies Técnicas: Solo se utilizan cookies y almacenamiento local estrictamente necesarios para el funcionamiento de la app (estado PWA, preferencia de idioma, lista de recordatorios). No se utilizan cookies de seguimiento publicitario ni de perfilado de terceros.\n\n" +
      "4. Servicios de Terceros (Google Gemini AI y Amazon PA-API): El procesamiento de las recomendaciones de productos se realiza en el servidor mediante conexiones HTTPS cifradas. No se transmite ningún identificador del usuario a los modelos de IA.\n\n" +
      "5. Derechos del Usuario: El usuario puede eliminar sus datos guardados en cualquier momento simplemente vaciando la caché del navegador o restableciendo la configuración de la app.",
    legalTermsTitle: "Términos y Condiciones de Uso",
    legalTermsBody:
      "1. Naturaleza del Servicio: Forma AI es un motor de recomendación inteligente diseñado para sugerir productos de fitness y bienestar disponibles en tiendas online como Amazon, para el uso personal de quien realiza la búsqueda.\n\n" +
      "2. Exclusión de Responsabilidad: Las sugerencias generadas por la Inteligencia Artificial tienen fines informativos y heurísticos. Forma AI no es el vendedor directo de los productos recomendados.\n\n" +
      "3. Compras Externas: Las compras se realizan íntegramente en los sitios oficiales de Amazon del país seleccionado. El usuario se somete a las condiciones de venta, garantía y envío proporcionadas directamente por Amazon.\n\n" +
      "4. Propiedad Intelectual: El diseño, el código y la interfaz de Forma AI están protegidos por derechos de autor. Las marcas de Amazon y los logotipos de productos pertenecen a sus respectivos propietarios.",
    legalAffiliateTitle: "Declaración de Afiliación Amazon y Avisos Legales Obligatorios",
    legalAffiliateQuote: "Como Afiliado de Amazon, Forma AI obtiene ingresos por las compras que cumplen los requisitos.",
    legalAffiliateProgramText:
      "Forma AI participa en el Programa de Afiliados de Amazon EU y en Amazon Associates US, un programa de afiliación diseñado para ofrecer a los sitios un medio de obtener comisiones publicitarias mediante enlaces a Amazon.it, Amazon.com y sus respectivas tiendas internacionales.",
    legalAffiliatePriceDisclaimerTitle: "Aviso sobre Precios y Disponibilidad:",
    legalAffiliatePriceDisclaimerBody:
      "Los precios y la disponibilidad de los productos se proporcionan en tiempo real a través de Amazon PA-API y están sujetos a cambios continuos. Prevalecen el precio y la disponibilidad mostrados en la página del producto de Amazon en el momento de la compra final.",

    cookieText: "Forma AI utiliza cookies técnicas y servicios de afiliación para recomendarte los productos adecuados. Al seguir usando la app, aceptas nuestra Política de Privacidad.",
    cookiePrivacyLink: "Política de Privacidad",
    cookieAccept: "Aceptar",

    errorTitle: "Algo salió mal",
    errorMessage: "No te preocupes — tus objetivos guardados están a salvo. Vuelve a intentarlo.",
    errorRestartBtn: "Empezar de nuevo",

    offlineTitle: "Sin Conexión",
    offlineMessage: "Comprueba tu conexión a internet para seguir buscando los productos ideales para ti.",
    offlineRetryBtn: "REINTENTAR",
    offlineCheckingBtn: "VERIFICANDO...",

    pwaInAppBannerText: "Para la mejor experiencia, abre en Safari o Chrome",
    pwaInstallTitle: "Instala la App en 1 Toque",
    pwaInstallSubtitle: "Acceso instantáneo desde tu Pantalla de Inicio sin pasar por las tiendas de apps.",
    pwaInstallNowBtn: "INSTALAR AHORA EN INICIO",
    pwaAddToHomeBtn: "AÑADIR A PANTALLA DE INICIO",
    pwaIosGuideTitle: "Añadir a la Pantalla de Inicio en iOS",
    pwaIosStep1Title: "Toca el botón 'Compartir'",
    pwaIosStep1Sub: "Se encuentra en la barra inferior de Safari",
    pwaIosStep2Title: "Selecciona 'Añadir a pantalla de inicio'",
    pwaIosStep2Sub: "Desplázate por las opciones del menú para compartir",
    pwaPressShareBelow: "Pulsa Compartir Abajo",
    pwaGotIt: "ENTENDIDO",
    pwaFallbackAlert: "Para instalar la app, abre el menú de tu navegador y selecciona 'Añadir a pantalla de inicio'.",
  },
  fr: {
    selectLanguageRegion: "Langue et Région",
    language: "Langue",
    storeRegion: "Région de la Boutique",
    regionNotice: "Les liens produits s'ouvriront dans la devise et la boutique de votre région.",
    close: "Fermer",

    curating: "RECHERCHE EN COURS...",
    curatingSub: "Recherche des produits les plus adaptés à votre objectif...",
    loadingStep1: "Analyse de votre objectif",
    loadingStep2: "Filtrage des produits les plus efficaces par catégorie",
    loadingStep3: "Préparation des liens et détails de la boutique",

    fastTrackPlaceholder: "Une idée ou un SOS ? Parlez ou écrivez...",
    wizardBack: "Retour",
    step1Title: "Pour quel usage ?",
    step1Subtitle: "Sélectionnez le contexte pour personnaliser",
    step2Title: "Quel type de produit recherchez-vous ?",
    step2Subtitle: "Choisissez la catégorie la plus proche de votre objectif",
    step3Title: "Budget et Style",
    step3Subtitle: "Définissez votre fourchette de prix préférée",
    recipientHome: "À la Maison",
    recipientGym: "Salle de Sport",
    recipientOutdoor: "Plein Air",
    recipientRecovery: "Récupération",
    vibeCardio: "Cardio",
    vibeStrength: "Force",
    vibeMobility: "Yoga & Mobilité",
    vibeNutrition: "Nutrition",
    vibeRecovery: "Récupération",
    vibeTech: "Tech",
    orExactAmount: "Ou un montant précis :",
    customBudgetLabel: "Personnalisé",
    exactAmountPlaceholder: "Montant précis (ex. 18)",
    extraOptionsLabel: "OPTIONS SUPPLÉMENTAIRES",
    alreadyExperiencedLabel: "J'ai déjà de l'expérience (je veux des produits plus avancés)",
    extraDetailsPlaceholder: "Détails supplémentaires (facultatif)",
    ctaShowProducts: "AFFICHER LES BONS PRODUITS",

    voiceAssistantTitle: "Assistant Vocal IA",
    voiceNotSupported: "La reconnaissance vocale n'est pas prise en charge par ce navigateur. Vous pouvez saisir votre idée !",
    voiceMicDenied: "Autorisation du microphone refusée. Vous pouvez saisir votre idée ci-dessous.",
    voiceListening: "Écoute en cours... Parlez librement",
    voiceTapToSpeak: "Touchez le micro pour parler",
    voiceTranscriptLabel: "Transcription en Direct / Idée :",
    voiceTranscriptPlaceholder: "Ex. Haltères réglables pour s'entraîner à la maison à moins de 50€...",
    voiceSubmitBtn: "TROUVER LE PRODUIT MAINTENANT",

    newSearch: "Nouvelle Recherche",
    previous: "Précédent",
    next: "Suivant",
    ourPick: "Notre choix",
    reviewsWord: "avis",
    whyPerfect: "Pourquoi c'est parfait :",
    seeInStore: "VOIR SUR LA BOUTIQUE",
    addToCart: "AJOUTER AU PANIER",
    copiedAndOpened: "Copié & Ouvert !",
    copyLink: "Copier le Lien",
    moreProducts: "3 Autres Produits",
    saveForLater: "Enregistrer pour plus tard",
    goalNamePlaceholder: "Nom de l'objectif (facultatif)",
    cancel: "Annuler",
    save: "Enregistrer",
    reminderSaved: "Rappel enregistré — nous vous le rappellerons.",
    amazonDisclaimer: "En tant que Partenaire Amazon, Forma AI perçoit une rémunération sur les achats éligibles.",
    shareMessagePrefix: "J'ai trouvé le bon produit pour mon objectif fitness :",
    shareMessageMiddle: "Regardez ici sur Amazon :",

    settingsTitle: "Réglages & App",
    sectionInteraction: "INTERACTION",
    hapticLabel: "Retour Haptique (Vibration)",
    sectionPermissions: "AUTORISATIONS & CONFIDENTIALITÉ",
    micLabel: "Microphone (Recherche Vocale)",
    micGranted: "Autorisation accordée",
    micDenied: "Refusée par le navigateur",
    micPrompt: "Pas encore demandée",
    micUnknown: "À vérifier",
    micOn: "Activé",
    micBlocked: "Bloqué",
    micEnableBtn: "Activer l'Autorisation du Microphone",
    micDeniedHint: "Vous avez bloqué le microphone pour ce site. Réactivez-le depuis les réglages du site dans votre navigateur (icône cadenas dans la barre d'adresse).",
    notificationsLabel: "Notifications PWA de Rappel",
    testNotificationBtn: "⚡ Envoyer une Notification PWA de Test",
    sectionGoals: "MES OBJECTIFS",
    noGoals: "Aucun objectif enregistré pour le moment. Après avoir trouvé un produit, vous pourrez l'enregistrer pour recevoir un rappel.",
    deleteAria: "Supprimer",
    sectionLegal: "LÉGAL & CONFORMITÉ",
    privacyPolicyLabel: "Politique de Confidentialité (RGPD UE)",
    termsLabel: "Conditions Générales",
    affiliateLabel: "Partenariat Amazon & Mentions Légales",
    sectionSupport: "ASSISTANCE & INFOS",
    sendFeedbackBtn: "Envoyer un Avis",

    legalPrivacyTitle: "Politique de Confidentialité et Traitement des Données (RGPD UE 2016/679)",
    legalPrivacyBody:
      "1. Responsable du Traitement : Forma AI opère dans le respect des principes de minimisation des données et de confidentialité.\n\n" +
      "2. Types de Données Collectées : Forma AI ne collecte, ne profile ni ne vend AUCUNE donnée personnelle des utilisateurs. L'application fonctionne entièrement via un stockage local technique dans le navigateur/appareil de l'utilisateur (localStorage) pour mémoriser la langue, le pays Amazon et les rappels d'objectifs.\n\n" +
      "3. Cookies Techniques : Seuls des cookies et des stockages locaux strictement nécessaires au fonctionnement de l'app sont utilisés (état PWA, préférence de langue, liste des rappels). Aucun cookie de suivi publicitaire ni de profilage tiers n'est utilisé.\n\n" +
      "4. Services Tiers (Google Gemini AI & Amazon PA-API) : Le traitement des recommandations de produits s'effectue côté serveur via des connexions chiffrées HTTPS. Aucun identifiant utilisateur n'est transmis aux modèles d'IA.\n\n" +
      "5. Droits de l'Utilisateur : L'utilisateur peut à tout moment supprimer ses données enregistrées en vidant simplement le cache du navigateur ou en réinitialisant les réglages de l'app.",
    legalTermsTitle: "Conditions Générales d'Utilisation",
    legalTermsBody:
      "1. Nature du Service : Forma AI est un moteur de recommandation intelligent conçu pour suggérer des produits fitness et bien-être disponibles sur des boutiques en ligne comme Amazon, pour l'usage personnel de la personne qui effectue la recherche.\n\n" +
      "2. Exclusion de Responsabilité : Les suggestions générées par l'Intelligence Artificielle ont un but informatif et heuristique. Forma AI n'est pas le vendeur direct des produits recommandés.\n\n" +
      "3. Achats Externes : Les achats s'effectuent entièrement sur les sites officiels Amazon du pays sélectionné. L'utilisateur se fie aux conditions de vente, de garantie et de livraison fournies directement par Amazon.\n\n" +
      "4. Propriété Intellectuelle : Le design, le code et l'interface de Forma AI sont protégés par le droit d'auteur. Les marques Amazon et les logos des produits appartiennent à leurs propriétaires respectifs.",
    legalAffiliateTitle: "Déclaration de Partenariat Amazon & Mentions Légales Obligatoires",
    legalAffiliateQuote: "En tant que Partenaire Amazon, Forma AI perçoit une rémunération sur les achats éligibles.",
    legalAffiliateProgramText:
      "Forma AI participe au Programme Partenaires Amazon EU et à Amazon Associates US, un programme d'affiliation conçu pour permettre aux sites de percevoir des commissions publicitaires en créant des liens vers Amazon.it, Amazon.com et leurs boutiques internationales respectives.",
    legalAffiliatePriceDisclaimerTitle: "Avis sur les Prix et la Disponibilité :",
    legalAffiliatePriceDisclaimerBody:
      "Les prix et la disponibilité des produits sont fournis en temps réel par l'API PA d'Amazon et sont soumis à des variations continues. Le prix et la disponibilité affichés sur la page produit Amazon au moment de l'achat final font foi.",

    cookieText: "Forma AI utilise des cookies techniques et des services d'affiliation pour vous recommander les bons produits. En continuant à utiliser l'app, vous acceptez notre Politique de Confidentialité.",
    cookiePrivacyLink: "Politique de Confidentialité",
    cookieAccept: "Accepter",

    errorTitle: "Un problème est survenu",
    errorMessage: "Pas d'inquiétude — vos objectifs enregistrés sont en sécurité. Réessayons.",
    errorRestartBtn: "Recommencer",

    offlineTitle: "Aucune Connexion",
    offlineMessage: "Vérifiez votre connexion internet pour continuer à chercher les bons produits pour vous.",
    offlineRetryBtn: "RÉESSAYER",
    offlineCheckingBtn: "VÉRIFICATION EN COURS...",

    pwaInAppBannerText: "Pour une meilleure expérience, ouvrez dans Safari ou Chrome",
    pwaInstallTitle: "Installez l'App en 1 Geste",
    pwaInstallSubtitle: "Accès instantané depuis votre écran d'accueil, sans passer par les stores.",
    pwaInstallNowBtn: "INSTALLER MAINTENANT",
    pwaAddToHomeBtn: "AJOUTER À L'ÉCRAN D'ACCUEIL",
    pwaIosGuideTitle: "Ajouter à l'Écran d'Accueil iOS",
    pwaIosStep1Title: "Touchez le bouton 'Partager'",
    pwaIosStep1Sub: "Se trouve dans la barre inférieure de Safari",
    pwaIosStep2Title: "Sélectionnez 'Sur l'écran d'accueil'",
    pwaIosStep2Sub: "Faites défiler les options du menu de partage",
    pwaPressShareBelow: "Appuyez sur Partager Ci-dessous",
    pwaGotIt: "COMPRIS",
    pwaFallbackAlert: "Pour installer l'app, ouvrez le menu de votre navigateur et sélectionnez 'Sur l'écran d'accueil'.",
  },
  de: {
    selectLanguageRegion: "Sprache & Region",
    language: "Sprache",
    storeRegion: "Store-Region",
    regionNotice: "Produktlinks öffnen sich in der Währung und im Store deiner Region.",
    close: "Schließen",

    curating: "SUCHE LÄUFT...",
    curatingSub: "Wir suchen die passendsten Produkte für dein Ziel...",
    loadingStep1: "Analyse deines Ziels",
    loadingStep2: "Filtern der effektivsten Produkte nach Kategorie",
    loadingStep3: "Vorbereitung von Store-Links & Details",

    fastTrackPlaceholder: "Hast du eine Idee oder einen SOS? Sprich oder tippe...",
    wizardBack: "Zurück",
    step1Title: "Wofür brauchst du es?",
    step1Subtitle: "Wähle den Kontext zur Personalisierung",
    step2Title: "Welche Art von Produkt suchst du?",
    step2Subtitle: "Wähle die Kategorie, die deinem Ziel am nächsten kommt",
    step3Title: "Budget & Stil",
    step3Subtitle: "Lege deine bevorzugte Preisspanne fest",
    recipientHome: "Zuhause",
    recipientGym: "Fitnessstudio",
    recipientOutdoor: "Outdoor",
    recipientRecovery: "Regeneration",
    vibeCardio: "Cardio",
    vibeStrength: "Kraft",
    vibeMobility: "Yoga & Mobilität",
    vibeNutrition: "Ernährung",
    vibeRecovery: "Regeneration",
    vibeTech: "Technik",
    orExactAmount: "Oder genauer Betrag:",
    customBudgetLabel: "Individuell",
    exactAmountPlaceholder: "Genauer Betrag (z. B. 18)",
    extraOptionsLabel: "ZUSATZOPTIONEN",
    alreadyExperiencedLabel: "Ich bin bereits erfahren (ich möchte fortgeschrittenere Produkte)",
    extraDetailsPlaceholder: "Zusätzliche Details (optional)",
    ctaShowProducts: "DIE PASSENDEN PRODUKTE ANZEIGEN",

    voiceAssistantTitle: "KI-Sprachassistent",
    voiceNotSupported: "Spracherkennung wird von diesem Browser nicht unterstützt. Du kannst deine Idee eintippen!",
    voiceMicDenied: "Mikrofonzugriff verweigert. Du kannst deine Idee unten eintippen.",
    voiceListening: "Ich höre zu... Sprich frei",
    voiceTapToSpeak: "Zum Sprechen aufs Mikrofon tippen",
    voiceTranscriptLabel: "Live-Transkript / Idee:",
    voiceTranscriptPlaceholder: "Z. B. Verstellbare Kurzhanteln für Heimtraining unter 50€...",
    voiceSubmitBtn: "PRODUKT JETZT FINDEN",

    newSearch: "Neue Suche",
    previous: "Zurück",
    next: "Weiter",
    ourPick: "Unsere Wahl",
    reviewsWord: "Bewertungen",
    whyPerfect: "Warum es perfekt passt:",
    seeInStore: "IM STORE ANSEHEN",
    addToCart: "IN DEN WARENKORB",
    copiedAndOpened: "Kopiert & Geöffnet!",
    copyLink: "Link Kopieren",
    moreProducts: "3 Weitere Produkte",
    saveForLater: "Für später speichern",
    goalNamePlaceholder: "Zielname (optional)",
    cancel: "Abbrechen",
    save: "Speichern",
    reminderSaved: "Erinnerung gespeichert — wir erinnern dich rechtzeitig.",
    amazonDisclaimer: "Als Amazon-Partner verdient Forma AI an qualifizierten Käufen.",
    shareMessagePrefix: "Ich habe das richtige Produkt für mein Fitnessziel gefunden:",
    shareMessageMiddle: "Schau es dir auf Amazon an:",

    settingsTitle: "Einstellungen & App",
    sectionInteraction: "INTERAKTION",
    hapticLabel: "Haptisches Feedback (Vibration)",
    sectionPermissions: "BERECHTIGUNGEN & DATENSCHUTZ",
    micLabel: "Mikrofon (Sprachsuche)",
    micGranted: "Berechtigung erteilt",
    micDenied: "Vom Browser verweigert",
    micPrompt: "Noch nicht angefragt",
    micUnknown: "Noch zu prüfen",
    micOn: "Aktiv",
    micBlocked: "Blockiert",
    micEnableBtn: "Mikrofonberechtigung Aktivieren",
    micDeniedHint: "Du hast das Mikrofon für diese Website blockiert. Aktiviere es erneut in den Website-Einstellungen deines Browsers (Schloss-Symbol in der Adressleiste).",
    notificationsLabel: "PWA-Erinnerungsbenachrichtigungen",
    testNotificationBtn: "⚡ Test-PWA-Benachrichtigung Senden",
    sectionGoals: "MEINE ZIELE",
    noGoals: "Noch keine Ziele gespeichert. Nachdem du ein Produkt gefunden hast, kannst du es speichern, um eine Erinnerung zu erhalten.",
    deleteAria: "Löschen",
    sectionLegal: "RECHTLICHES & COMPLIANCE",
    privacyPolicyLabel: "Datenschutzerklärung (DSGVO EU)",
    termsLabel: "Allgemeine Geschäftsbedingungen",
    affiliateLabel: "Amazon-Partnerprogramm & Hinweise",
    sectionSupport: "SUPPORT & INFOS",
    sendFeedbackBtn: "Feedback Senden",

    legalPrivacyTitle: "Datenschutzerklärung und Datenverarbeitung (DSGVO EU 2016/679)",
    legalPrivacyBody:
      "1. Verantwortlicher: Forma AI arbeitet nach den Grundsätzen der Datenminimierung und Vertraulichkeit.\n\n" +
      "2. Art der Erhobenen Daten: Forma AI sammelt, profiliert oder verkauft KEINE personenbezogenen Daten der Nutzer. Die App funktioniert vollständig über technische lokale Speicherung im Browser/Gerät des Nutzers (localStorage), um Spracheinstellungen, Amazon-Land und Zielerinnerungen zu speichern.\n\n" +
      "3. Technische Cookies: Es werden ausschließlich Cookies und lokale Speicher verwendet, die für den Betrieb der App unbedingt erforderlich sind (PWA-Status, Spracheinstellung, Erinnerungsliste). Es werden keine Werbe-Tracking- oder Profiling-Cookies von Drittanbietern verwendet.\n\n" +
      "4. Drittanbieterdienste (Google Gemini AI & Amazon PA-API): Die Verarbeitung der Produktempfehlungen erfolgt serverseitig über verschlüsselte HTTPS-Verbindungen. Es wird keine Nutzerkennung an die KI-Modelle übermittelt.\n\n" +
      "5. Rechte der Nutzer: Nutzer können ihre gespeicherten Daten jederzeit löschen, indem sie einfach den Browser-Cache leeren oder die App-Einstellungen zurücksetzen.",
    legalTermsTitle: "Allgemeine Geschäftsbedingungen",
    legalTermsBody:
      "1. Art des Dienstes: Forma AI ist eine intelligente Empfehlungs-Engine, die Fitness- und Wellness-Produkte vorschlägt, die auf Online-Shops wie Amazon erhältlich sind, für den persönlichen Gebrauch der suchenden Person.\n\n" +
      "2. Haftungsausschluss: Die von der Künstlichen Intelligenz generierten Vorschläge dienen zu Informationszwecken und sind heuristischer Natur. Forma AI ist nicht der direkte Verkäufer der empfohlenen Produkte.\n\n" +
      "3. Externe Käufe: Käufe erfolgen ausschließlich auf den offiziellen Amazon-Seiten des ausgewählten Landes. Nutzer verlassen sich auf die Verkaufs-, Garantie- und Versandbedingungen, die direkt von Amazon bereitgestellt werden.\n\n" +
      "4. Geistiges Eigentum: Design, Code und Benutzeroberfläche von Forma AI sind urheberrechtlich geschützt. Amazon-Marken und Produktlogos gehören ihren jeweiligen Eigentümern.",
    legalAffiliateTitle: "Amazon-Partnerprogramm-Erklärung & Verpflichtende Hinweise",
    legalAffiliateQuote: "Als Amazon-Partner verdient Forma AI an qualifizierten Käufen.",
    legalAffiliateProgramText:
      "Forma AI nimmt am Amazon-Partnerprogramm EU und am Amazon Associates US-Programm teil, einem Partnerprogramm, das Websites eine Möglichkeit bietet, durch Links zu Amazon.it, Amazon.com und den jeweiligen internationalen Stores Werbekostenerstattungen zu verdienen.",
    legalAffiliatePriceDisclaimerTitle: "Hinweis zu Preisen und Verfügbarkeit:",
    legalAffiliatePriceDisclaimerBody:
      "Preise und Verfügbarkeit der Produkte werden in Echtzeit über die Amazon PA-API bereitgestellt und unterliegen laufenden Änderungen. Maßgeblich sind Preis und Verfügbarkeit, die zum Zeitpunkt des endgültigen Kaufs auf der Amazon-Produktseite angezeigt werden.",

    cookieText: "Forma AI verwendet technische Cookies und Partnerprogramm-Dienste, um dir die richtigen Produkte zu empfehlen. Durch die weitere Nutzung der App stimmst du unserer Datenschutzerklärung zu.",
    cookiePrivacyLink: "Datenschutzerklärung",
    cookieAccept: "Akzeptieren",

    errorTitle: "Etwas ist schiefgelaufen",
    errorMessage: "Kein Problem — deine gespeicherten Ziele sind sicher. Versuchen wir es noch einmal.",
    errorRestartBtn: "Neu starten",

    offlineTitle: "Keine Verbindung",
    offlineMessage: "Überprüfe deine Internetverbindung, um weiter nach den richtigen Produkten für dich zu suchen.",
    offlineRetryBtn: "ERNEUT VERSUCHEN",
    offlineCheckingBtn: "WIRD ÜBERPRÜFT...",

    pwaInAppBannerText: "Öffne die App in Safari oder Chrome für die beste Erfahrung",
    pwaInstallTitle: "App in 1 Tipp Installieren",
    pwaInstallSubtitle: "Sofortiger Zugriff über deinen Homescreen, ganz ohne App Stores.",
    pwaInstallNowBtn: "JETZT AUF HOMESCREEN INSTALLIEREN",
    pwaAddToHomeBtn: "ZUM HOMESCREEN HINZUFÜGEN",
    pwaIosGuideTitle: "Zum iOS-Homescreen Hinzufügen",
    pwaIosStep1Title: "Tippe auf die Schaltfläche 'Teilen'",
    pwaIosStep1Sub: "Befindet sich in der unteren Leiste von Safari",
    pwaIosStep2Title: "Wähle 'Zum Home-Bildschirm'",
    pwaIosStep2Sub: "Scrolle durch die Optionen im Teilen-Menü",
    pwaPressShareBelow: "Tippe Unten auf Teilen",
    pwaGotIt: "VERSTANDEN",
    pwaFallbackAlert: "Um die App zu installieren, öffne das Menü deines Browsers und wähle 'Zum Home-Bildschirm'.",
  },
};
