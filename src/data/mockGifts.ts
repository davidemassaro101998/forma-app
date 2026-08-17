import { GiftItem, QuizState, CountryConfig } from "../types";
import { Language } from "./translations";

export interface BudgetRange {
  min: number;
  max: number;
  label: string;
}

export function parseBudgetRange(budgetRaw: string): BudgetRange {
  if (!budgetRaw) {
    return { min: 25, max: 50, label: "25-50€" };
  }

  const clean = budgetRaw.replace(/\s+/g, "").replace(/\$/g, "").replace(/€/g, "");

  if (clean.includes("<25") || clean.includes("<30") || clean.startsWith("<")) {
    const val = parseInt(clean.replace("<", ""), 10) || 25;
    return { min: 10, max: Math.min(val, 25), label: `<${val}€` };
  }

  if (clean.includes(">100") || clean.startsWith(">")) {
    return { min: 100, max: 300, label: ">100€" };
  }

  if (clean.includes("-")) {
    const parts = clean.split("-").map((p) => parseInt(p, 10)).filter((n) => !isNaN(n));
    if (parts.length >= 2) {
      return { min: parts[0], max: parts[1], label: `${parts[0]}-${parts[1]}€` };
    }
  }

  const num = parseInt(clean, 10);
  if (!isNaN(num) && num > 0) {
    const minVal = Math.max(5, Math.floor(num * 0.75));
    return { min: minVal, max: num, label: `${num}€` };
  }

  return { min: 25, max: 50, label: "25-50€" };
}

// The 3 fixed diversification badges, mirroring server.ts's GIFT_TAGS so
// the offline fallback catalog reads identically to a real AI response.
const TAGS: Record<Language, [string, string, string]> = {
  en: ["Top Pick", "Essential", "Top Quality"],
  it: ["Più Scelto", "Essenziale", "Top Qualità"],
  es: ["Más Elegido", "Esencial", "Máxima Calidad"],
  fr: ["Le Plus Choisi", "Essentiel", "Qualité Supérieure"],
  de: ["Meistgewählt", "Unverzichtbar", "Top-Qualität"],
};

interface ProductCopy {
  title: string;
  reason: string;
  query: string;
}

// Localized copy for every fallback product slot, used only when the
// Gemini API is unavailable (missing key, error, timeout) — guarantees the
// user still sees 3 coherent products in their own language instead of an
// empty error or (as before) Italian text regardless of selected language.
const CONTENT: Record<string, Record<Language, ProductCopy>> = {
  yogaMat: {
    it: { title: "Tappetino Yoga Antiscivolo Spessore 6mm con Cinghia", reason: "Buon grip e ammortizzazione, comodo da trasportare per allenarti ovunque.", query: "Tappetino Yoga Antiscivolo 6mm Cinghia" },
    en: { title: "6mm Non-Slip Yoga Mat with Carry Strap", reason: "Good grip and cushioning, easy to carry so you can train anywhere.", query: "6mm Non-Slip Yoga Mat Carry Strap" },
    es: { title: "Esterilla de Yoga Antideslizante 6mm con Correa", reason: "Buen agarre y amortiguación, cómoda de transportar para entrenar en cualquier lugar.", query: "Esterilla Yoga Antideslizante 6mm Correa" },
    fr: { title: "Tapis de Yoga Antidérapant 6mm avec Sangle", reason: "Bonne adhérence et amorti, facile à transporter pour s'entraîner partout.", query: "Tapis Yoga Antidérapant 6mm Sangle" },
    de: { title: "Rutschfeste Yogamatte 6mm mit Trageband", reason: "Guter Grip und Dämpfung, leicht zu transportieren für Training überall.", query: "Rutschfeste Yogamatte 6mm Trageband" },
  },
  yogaBands: {
    it: { title: "Set Fasce Elastiche di Resistenza per Stretching e Mobilità", reason: "3 livelli di resistenza per allungamento assistito e recupero muscolare.", query: "Fasce Elastiche Resistenza Stretching" },
    en: { title: "Resistance Band Set for Stretching and Mobility", reason: "3 resistance levels for assisted stretching and muscle recovery.", query: "Resistance Bands Stretching Set" },
    es: { title: "Set de Bandas Elásticas de Resistencia para Estiramiento", reason: "3 niveles de resistencia para estiramientos asistidos y recuperación muscular.", query: "Bandas Elásticas Resistencia Estiramiento" },
    fr: { title: "Set d'Élastiques de Résistance pour Étirements", reason: "3 niveaux de résistance pour étirements assistés et récupération musculaire.", query: "Élastiques Résistance Étirements Set" },
    de: { title: "Widerstandsband-Set für Dehnung und Mobilität", reason: "3 Widerstandsstufen für unterstütztes Dehnen und Muskelregeneration.", query: "Widerstandsbänder Dehnung Set" },
  },
  yogaBlocks: {
    it: { title: "Blocchi Yoga in Eva Ad Alta Densità (Coppia)", reason: "Supporto stabile per migliorare postura e allineamento nelle posizioni più impegnative.", query: "Blocchi Yoga Eva Alta Densità Coppia" },
    en: { title: "High-Density EVA Yoga Blocks (Pair)", reason: "Stable support to improve posture and alignment in more demanding poses.", query: "High-Density EVA Yoga Blocks Pair" },
    es: { title: "Bloques de Yoga EVA de Alta Densidad (Par)", reason: "Soporte estable para mejorar postura y alineación en las posturas más exigentes.", query: "Bloques Yoga EVA Alta Densidad Par" },
    fr: { title: "Blocs de Yoga EVA Haute Densité (Paire)", reason: "Support stable pour améliorer la posture et l'alignement dans les postures exigeantes.", query: "Blocs Yoga EVA Haute Densité Paire" },
    de: { title: "Hochdichte EVA-Yogablöcke (Paar)", reason: "Stabile Unterstützung für bessere Haltung und Ausrichtung bei anspruchsvollen Posen.", query: "EVA Yogablöcke Hochdichte Paar" },
  },
  dumbbells: {
    it: { title: "Manubri Regolabili 2x10kg con Sistema a Ghiera", reason: "Passa da un peso all'altro in pochi secondi, ideale per allenarti a casa senza ingombro.", query: "Manubri Regolabili 10kg Ghiera" },
    en: { title: "Adjustable Dumbbells 2x10kg Quick-Lock System", reason: "Switch weights in seconds — ideal for home workouts without the clutter.", query: "Adjustable Dumbbells 10kg Quick-Lock" },
    es: { title: "Mancuernas Ajustables 2x10kg con Sistema de Anilla", reason: "Cambia de peso en segundos, ideal para entrenar en casa sin ocupar espacio.", query: "Mancuernas Ajustables 10kg Anilla" },
    fr: { title: "Haltères Réglables 2x10kg Système à Molette", reason: "Changez de poids en quelques secondes, idéal pour s'entraîner chez soi sans encombrement.", query: "Haltères Réglables 10kg Molette" },
    de: { title: "Verstellbare Kurzhanteln 2x10kg Schnellverschluss", reason: "Gewicht in Sekunden wechseln — ideal fürs Training zu Hause ohne Platzverschwendung.", query: "Verstellbare Kurzhanteln 10kg Schnellverschluss" },
  },
  bench: {
    it: { title: "Panca Piana Pieghevole Regolabile Multiposizione", reason: "Struttura robusta e pieghevole, perfetta per allenamenti a corpo libero e con pesi.", query: "Panca Piana Pieghevole Regolabile" },
    en: { title: "Folding Adjustable Multi-Position Bench", reason: "Sturdy, foldable frame — perfect for bodyweight and weighted workouts alike.", query: "Folding Adjustable Multi-Position Bench" },
    es: { title: "Banco Plano Plegable Ajustable Multiposición", reason: "Estructura robusta y plegable, perfecta para entrenamientos con peso corporal y pesas.", query: "Banco Plano Plegable Ajustable" },
    fr: { title: "Banc de Musculation Pliable Multiposition", reason: "Structure robuste et pliable, parfaite pour l'entraînement au poids du corps et aux poids.", query: "Banc Musculation Pliable Multiposition" },
    de: { title: "Klappbare Verstellbare Multiposition-Trainingsbank", reason: "Robuster, klappbarer Rahmen — perfekt für Workouts mit und ohne Gewichte.", query: "Klappbare Trainingsbank Verstellbar" },
  },
  kettlebell: {
    it: { title: "Kettlebell in Ghisa Rivestita 12kg", reason: "Presa comoda e antiscivolo, ottimo per esercizi funzionali e allenamento total body.", query: "Kettlebell Ghisa Rivestita 12kg" },
    en: { title: "12kg Coated Cast Iron Kettlebell", reason: "Comfortable, non-slip grip — great for functional and total-body training.", query: "12kg Coated Cast Iron Kettlebell" },
    es: { title: "Kettlebell de Hierro Fundido Revestido 12kg", reason: "Agarre cómodo y antideslizante, ideal para ejercicios funcionales y entrenamiento total.", query: "Kettlebell Hierro Fundido 12kg" },
    fr: { title: "Kettlebell en Fonte Revêtue 12kg", reason: "Prise confortable et antidérapante, idéal pour l'entraînement fonctionnel et corps entier.", query: "Kettlebell Fonte Revêtue 12kg" },
    de: { title: "12kg Beschichtete Gusseisen-Kettlebell", reason: "Komfortabler, rutschfester Griff — ideal für funktionelles Ganzkörpertraining.", query: "Kettlebell Gusseisen Beschichtet 12kg" },
  },
  resistanceBandsSet: {
    it: { title: "Elastici Fitness Set 5 Livelli di Resistenza con Sacca", reason: "Versatili per tonificazione e riscaldamento, comodi da portare ovunque.", query: "Elastici Fitness Set 5 Livelli Sacca" },
    en: { title: "5-Level Resistance Bands Set with Carry Bag", reason: "Versatile for toning and warm-ups, easy to bring anywhere.", query: "Resistance Bands 5-Level Set Carry Bag" },
    es: { title: "Set de Bandas Elásticas Fitness 5 Niveles con Bolsa", reason: "Versátiles para tonificar y calentar, fáciles de llevar a cualquier sitio.", query: "Bandas Elásticas Fitness 5 Niveles Bolsa" },
    fr: { title: "Set d'Élastiques Fitness 5 Niveaux avec Sac", reason: "Polyvalents pour le tonus et l'échauffement, faciles à emporter partout.", query: "Élastiques Fitness 5 Niveaux Sac" },
    de: { title: "Fitnessbänder-Set 5 Stufen mit Tragetasche", reason: "Vielseitig für Straffung und Aufwärmen, überall einfach mitzunehmen.", query: "Fitnessbänder 5 Stufen Set Tragetasche" },
  },
  thermalBottle: {
    it: { title: "Bottiglia Termica Sportiva 1L a Tenuta Stagna", reason: "Mantiene la temperatura per ore, indispensabile per ogni sessione di allenamento.", query: "Bottiglia Termica Sportiva 1L" },
    en: { title: "1L Leak-Proof Sports Thermal Bottle", reason: "Keeps temperature for hours — a must-have for every training session.", query: "1L Leak-Proof Sports Thermal Bottle" },
    es: { title: "Botella Térmica Deportiva 1L Hermética", reason: "Mantiene la temperatura durante horas, imprescindible en cada sesión de entrenamiento.", query: "Botella Térmica Deportiva 1L" },
    fr: { title: "Bouteille Thermique de Sport 1L Étanche", reason: "Garde la température pendant des heures, indispensable pour chaque séance d'entraînement.", query: "Bouteille Thermique Sport 1L" },
    de: { title: "1L Auslaufsichere Sport-Thermosflasche", reason: "Hält die Temperatur stundenlang — unverzichtbar für jede Trainingseinheit.", query: "Sport Thermosflasche 1L Auslaufsicher" },
  },
  jumpRope: {
    it: { title: "Corda per Saltare Professionale con Cuscinetti a Sfera", reason: "Rotazione fluida e regolabile in lunghezza, ottima per cardio ad alta intensità.", query: "Corda per Saltare Professionale Cuscinetti" },
    en: { title: "Professional Jump Rope with Ball Bearings", reason: "Smooth, length-adjustable rotation — great for high-intensity cardio.", query: "Professional Jump Rope Ball Bearings" },
    es: { title: "Comba de Saltar Profesional con Rodamientos", reason: "Rotación fluida y ajustable en longitud, ideal para cardio de alta intensidad.", query: "Comba Saltar Profesional Rodamientos" },
    fr: { title: "Corde à Sauter Professionnelle à Roulements", reason: "Rotation fluide et longueur réglable, idéale pour le cardio haute intensité.", query: "Corde à Sauter Professionnelle Roulements" },
    de: { title: "Profi-Springseil mit Kugellagern", reason: "Flüssige, längenverstellbare Rotation — ideal für hochintensives Cardio.", query: "Springseil Profi Kugellager" },
  },
  fitnessMat: {
    it: { title: "Tappeto Fitness Pieghevole Antiscivolo con Borsa", reason: "Superficie ampia per allenamenti a corpo libero, si ripiega per riporlo facilmente.", query: "Tappeto Fitness Pieghevole Antiscivolo" },
    en: { title: "Folding Non-Slip Fitness Mat with Bag", reason: "Large surface for bodyweight training, folds flat for easy storage.", query: "Folding Non-Slip Fitness Mat" },
    es: { title: "Colchoneta Fitness Plegable Antideslizante con Bolsa", reason: "Amplia superficie para entrenamiento con peso corporal, se pliega para guardarla fácilmente.", query: "Colchoneta Fitness Plegable Antideslizante" },
    fr: { title: "Tapis de Fitness Pliable Antidérapant avec Sac", reason: "Grande surface pour l'entraînement au poids du corps, se plie facilement pour le rangement.", query: "Tapis Fitness Pliable Antidérapant" },
    de: { title: "Klappbare Rutschfeste Fitnessmatte mit Tasche", reason: "Große Fläche für Bodyweight-Training, lässt sich platzsparend zusammenfalten.", query: "Fitnessmatte Klappbar Rutschfest" },
  },
  foamRoller: {
    it: { title: "Foam Roller per Massaggio Muscolare ad Alta Densità", reason: "Rilascio miofasciale efficace per il recupero post-allenamento.", query: "Foam Roller Massaggio Alta Densità" },
    en: { title: "High-Density Muscle Massage Foam Roller", reason: "Effective myofascial release for post-workout recovery.", query: "High-Density Foam Roller Massage" },
    es: { title: "Rodillo de Espuma de Masaje Muscular Alta Densidad", reason: "Liberación miofascial eficaz para la recuperación post-entrenamiento.", query: "Rodillo Espuma Masaje Alta Densidad" },
    fr: { title: "Rouleau de Massage Musculaire Haute Densité", reason: "Libération myofasciale efficace pour la récupération post-entraînement.", query: "Rouleau de Massage Haute Densité" },
    de: { title: "Hochdichte Faszienrolle für Muskelmassage", reason: "Effektive myofasziale Lösung für die Regeneration nach dem Training.", query: "Faszienrolle Hochdicht Massage" },
  },
  heartRateBand: {
    it: { title: "Fascia Cardio Bluetooth per Monitoraggio Frequenza Cardiaca", reason: "Dati precisi in tempo reale, si sincronizza con le principali app fitness.", query: "Fascia Cardio Bluetooth Frequenza Cardiaca" },
    en: { title: "Bluetooth Heart Rate Monitor Chest Strap", reason: "Precise real-time data, syncs with all major fitness apps.", query: "Bluetooth Heart Rate Monitor Chest Strap" },
    es: { title: "Banda de Pecho Bluetooth Monitor de Frecuencia Cardíaca", reason: "Datos precisos en tiempo real, se sincroniza con las principales apps de fitness.", query: "Banda Pecho Bluetooth Frecuencia Cardíaca" },
    fr: { title: "Ceinture Cardio Bluetooth de Fréquence Cardiaque", reason: "Données précises en temps réel, se synchronise avec les principales apps fitness.", query: "Ceinture Cardio Bluetooth Fréquence" },
    de: { title: "Bluetooth-Herzfrequenz-Brustgurt", reason: "Präzise Echtzeitdaten, synchronisiert mit allen wichtigen Fitness-Apps.", query: "Bluetooth Herzfrequenz Brustgurt" },
  },
  dumbbellsSet2: {
    it: { title: "Set Manubri Regolabili 2x15kg con Base di Supporto", reason: "Copertura di più fasce di peso in un unico set compatto, ideale per casa.", query: "Set Manubri Regolabili 15kg Base" },
    en: { title: "Adjustable Dumbbell Set 2x15kg with Stand", reason: "Covers multiple weight ranges in one compact set, ideal for home use.", query: "Adjustable Dumbbell Set 15kg Stand" },
    es: { title: "Set de Mancuernas Ajustables 2x15kg con Soporte", reason: "Cubre varios rangos de peso en un set compacto, ideal para casa.", query: "Set Mancuernas Ajustables 15kg Soporte" },
    fr: { title: "Set d'Haltères Réglables 2x15kg avec Support", reason: "Couvre plusieurs plages de poids dans un set compact, idéal à la maison.", query: "Set Haltères Réglables 15kg Support" },
    de: { title: "Verstellbares Kurzhantel-Set 2x15kg mit Ständer", reason: "Deckt mehrere Gewichtsbereiche in einem kompakten Set ab, ideal für zu Hause.", query: "Kurzhantel Set Verstellbar 15kg Ständer" },
  },
  smartwatch: {
    it: { title: "Smartwatch Fitness con GPS e Monitoraggio Sonno", reason: "Traccia allenamenti, battito e recupero, batteria a lunga durata.", query: "Smartwatch Fitness GPS Monitoraggio Sonno" },
    en: { title: "Fitness Smartwatch with GPS and Sleep Tracking", reason: "Tracks workouts, heart rate, and recovery with long battery life.", query: "Fitness Smartwatch GPS Sleep Tracking" },
    es: { title: "Smartwatch Fitness con GPS y Monitor de Sueño", reason: "Rastrea entrenamientos, pulso y recuperación, batería de larga duración.", query: "Smartwatch Fitness GPS Monitor Sueño" },
    fr: { title: "Montre Connectée Fitness avec GPS et Suivi Sommeil", reason: "Suit entraînements, fréquence cardiaque et récupération, longue autonomie.", query: "Montre Connectée Fitness GPS Sommeil" },
    de: { title: "Fitness-Smartwatch mit GPS und Schlaftracking", reason: "Erfasst Training, Puls und Erholung bei langer Akkulaufzeit.", query: "Fitness Smartwatch GPS Schlaftracking" },
  },
  massageGunPortable: {
    it: { title: "Pistola Massaggiante Percussiva Portatile con 6 Testine", reason: "Recupero muscolare profondo, comoda e silenziosa, ottima dopo allenamenti intensi.", query: "Pistola Massaggiante Percussiva Portatile" },
    en: { title: "Portable Percussion Massage Gun, 6 Heads", reason: "Deep muscle recovery, quiet and compact — great after intense workouts.", query: "Portable Percussion Massage Gun 6 Heads" },
    es: { title: "Pistola de Masaje Percusión Portátil 6 Cabezales", reason: "Recuperación muscular profunda, cómoda y silenciosa, ideal tras entrenamientos intensos.", query: "Pistola Masaje Percusión Portátil 6 Cabezales" },
    fr: { title: "Pistolet de Massage Percussion Portable 6 Têtes", reason: "Récupération musculaire profonde, compact et silencieux, idéal après un entraînement intense.", query: "Pistolet Massage Percussion Portable 6 Têtes" },
    de: { title: "Tragbare Massagepistole mit 6 Aufsätzen", reason: "Tiefe Muskelregeneration, leise und kompakt — ideal nach intensivem Training.", query: "Massagepistole Tragbar 6 Aufsätze" },
  },
  exerciseBike: {
    it: { title: "Cyclette Pieghevole Magnetica con App di Allenamento", reason: "Allenamento cardio completo a casa, si ripiega per risparmiare spazio.", query: "Cyclette Pieghevole Magnetica App" },
    en: { title: "Folding Magnetic Exercise Bike with Training App", reason: "Complete cardio workout at home, folds flat to save space.", query: "Folding Magnetic Exercise Bike App" },
    es: { title: "Bicicleta Estática Plegable Magnética con App", reason: "Entrenamiento cardio completo en casa, se pliega para ahorrar espacio.", query: "Bicicleta Estática Plegable Magnética App" },
    fr: { title: "Vélo d'Appartement Pliable Magnétique avec App", reason: "Entraînement cardio complet à la maison, se plie pour économiser de la place.", query: "Vélo Appartement Pliable Magnétique App" },
    de: { title: "Klappbares Magnetheimtrainer-Fahrrad mit App", reason: "Komplettes Cardio-Training zu Hause, platzsparend klappbar.", query: "Heimtrainer Klappbar Magnet App" },
  },
  barbellSet: {
    it: { title: "Set Bilancieri e Dischi in Ghisa Completo per Casa", reason: "Kit completo per allenamento di forza progressivo senza dover andare in palestra.", query: "Set Bilanciere Dischi Ghisa Casa" },
    en: { title: "Complete Home Barbell and Cast Iron Plates Set", reason: "Complete kit for progressive strength training without a gym membership.", query: "Home Barbell Cast Iron Plates Set" },
    es: { title: "Set Completo de Barra y Discos de Hierro para Casa", reason: "Kit completo para entrenamiento de fuerza progresivo sin ir al gimnasio.", query: "Set Barra Discos Hierro Casa" },
    fr: { title: "Set Complet Barre et Disques en Fonte pour Maison", reason: "Kit complet pour un entraînement de force progressif sans aller en salle.", query: "Set Barre Disques Fonte Maison" },
    de: { title: "Komplettes Langhantel- und Gusseisenscheiben-Set", reason: "Komplettes Kit für progressives Krafttraining ohne Fitnessstudio.", query: "Langhantel Gusseisen Set Zuhause" },
  },
  massageGunPro: {
    it: { title: "Pistola Massaggiante Pro con Display e 8 Testine Intercambiabili", reason: "Recupero muscolare di livello professionale, controllo di precisione dell'intensità.", query: "Pistola Massaggiante Pro Display 8 Testine" },
    en: { title: "Pro Massage Gun with Display, 8 Interchangeable Heads", reason: "Professional-grade muscle recovery with precise intensity control.", query: "Pro Massage Gun Display 8 Heads" },
    es: { title: "Pistola de Masaje Pro con Pantalla y 8 Cabezales", reason: "Recuperación muscular de nivel profesional con control preciso de intensidad.", query: "Pistola Masaje Pro Pantalla 8 Cabezales" },
    fr: { title: "Pistolet de Massage Pro Écran et 8 Têtes Interchangeables", reason: "Récupération musculaire de niveau professionnel avec contrôle précis de l'intensité.", query: "Pistolet Massage Pro Écran 8 Têtes" },
    de: { title: "Profi-Massagepistole mit Display, 8 Aufsätzen", reason: "Muskelregeneration auf Profi-Niveau mit präziser Intensitätskontrolle.", query: "Massagepistole Profi Display 8 Aufsätze" },
  },
};

function pick(key: string, language: Language): ProductCopy {
  return CONTENT[key]?.[language] || CONTENT[key]?.en;
}

// Dati di fallback usati solo quando l'API Gemini non e disponibile
// (chiave mancante, errore, timeout) — garantiscono che l'utente veda
// comunque 3 prodotti coerenti invece di un errore vuoto.
export function generateSmartFallbackGifts(quiz: QuizState, country: CountryConfig, language: Language = "en"): GiftItem[] {
  const sym = country.symbol || "€";
  const budgetRange = parseBudgetRange(quiz.budget);
  const [tagTopPick, tagEssential, tagTopQuality] = TAGS[language] || TAGS.en;

  const getPrice = (fraction: number) => {
    const val = Math.round(budgetRange.min + (budgetRange.max - budgetRange.min) * fraction);
    const finalVal = Math.min(val, budgetRange.max);
    return `${sym}${finalVal}`;
  };

  const vibeLower = (quiz.vibe || "").toLowerCase();
  const extraLower = (quiz.extraDetails || "").toLowerCase();
  const combinedText = `${vibeLower} ${extraLower}`;

  function buildCard(key: string, opts: { price: string; matchScore: number; tag: string; category: string; imageUrl: string; rating: number; reviewsCount: number }): Omit<GiftItem, "id"> {
    const content = pick(key, language);
    return {
      title: content.title,
      price: opts.price,
      reason: content.reason,
      matchScore: opts.matchScore,
      tag: opts.tag,
      amazonSearchQuery: content.query,
      category: opts.category,
      imageUrl: opts.imageUrl,
      rating: opts.rating,
      reviewsCount: opts.reviewsCount,
      isPrime: true,
    };
  }

  function withIds(cards: Omit<GiftItem, "id">[]): GiftItem[] {
    return cards.map((item, index) => ({
      ...item,
      id: `forma-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}`,
    }));
  }

  // Categoria specifica: Yoga & Mobilità
  if (combinedText.includes("yoga") || combinedText.includes("mobilit") || combinedText.includes("stretch")) {
    return withIds([
      buildCard("yogaMat", { price: getPrice(0.4), matchScore: 98, tag: tagTopPick, category: "yoga", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 3210 }),
      buildCard("yogaBands", { price: getPrice(0.3), matchScore: 96, tag: tagEssential, category: "yoga", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 2450 }),
      buildCard("yogaBlocks", { price: getPrice(0.7), matchScore: 97, tag: tagTopQuality, category: "yoga", imageUrl: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 1890 }),
    ]);
  }

  // Categoria specifica: Forza / Palestra
  if (combinedText.includes("forza") || combinedText.includes("palestra") || combinedText.includes("manubri") || combinedText.includes("pesi")) {
    return withIds([
      buildCard("dumbbells", { price: getPrice(0.8), matchScore: 99, tag: tagTopPick, category: "strength", imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 3980 }),
      buildCard("bench", { price: getPrice(0.6), matchScore: 96, tag: tagEssential, category: "strength", imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 1650 }),
      buildCard("kettlebell", { price: getPrice(0.35), matchScore: 97, tag: tagTopQuality, category: "strength", imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=600&q=80", rating: 4.8, reviewsCount: 2760 }),
    ]);
  }

  // Tier 1: Budget < 25€
  if (budgetRange.max <= 25) {
    return withIds([
      buildCard("resistanceBandsSet", { price: getPrice(0.6), matchScore: 97, tag: tagTopPick, category: "accessories", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 4210 }),
      buildCard("thermalBottle", { price: getPrice(0.4), matchScore: 95, tag: tagEssential, category: "accessories", imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 3540 }),
      buildCard("jumpRope", { price: getPrice(0.85), matchScore: 96, tag: tagTopQuality, category: "cardio", imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 2890 }),
    ]);
  }

  // Tier 2: Budget 25 - 50€
  if (budgetRange.max <= 50) {
    return withIds([
      buildCard("fitnessMat", { price: getPrice(0.6), matchScore: 97, tag: tagTopPick, category: "accessories", imageUrl: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 2340 }),
      buildCard("foamRoller", { price: getPrice(0.4), matchScore: 96, tag: tagEssential, category: "recovery", imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 3120 }),
      buildCard("heartRateBand", { price: getPrice(0.85), matchScore: 97, tag: tagTopQuality, category: "tech", imageUrl: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?auto=format&fit=crop&w=600&q=80", rating: 4.5, reviewsCount: 1780 }),
    ]);
  }

  // Tier 3: Budget 50 - 100€
  if (budgetRange.max <= 100) {
    return withIds([
      buildCard("dumbbellsSet2", { price: getPrice(0.85), matchScore: 98, tag: tagTopPick, category: "strength", imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 2560 }),
      buildCard("smartwatch", { price: getPrice(0.8), matchScore: 97, tag: tagTopQuality, category: "tech", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 4890 }),
      buildCard("massageGunPortable", { price: getPrice(0.65), matchScore: 96, tag: tagEssential, category: "recovery", imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 3450 }),
    ]);
  }

  // Tier 4: Budget > 100€
  return withIds([
    buildCard("exerciseBike", { price: getPrice(0.85), matchScore: 98, tag: tagTopPick, category: "cardio", imageUrl: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviewsCount: 1980 }),
    buildCard("barbellSet", { price: getPrice(0.7), matchScore: 97, tag: tagTopQuality, category: "strength", imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 1230 }),
    buildCard("massageGunPro", { price: getPrice(0.5), matchScore: 96, tag: tagEssential, category: "recovery", imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviewsCount: 2140 }),
  ]);
}
