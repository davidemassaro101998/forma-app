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

// Fallback data used only when the Gemini API is unavailable
// (missing key, error, timeout) — guarantees the user still sees
// 3 coherent products instead of an empty error state.
export function generateSmartFallbackGifts(
  quiz: QuizState,
  country: CountryConfig,
  language: Language = "it"
): GiftItem[] {
  const sym = country.symbol || "€";
  const budgetRange = parseBudgetRange(quiz.budget);
  const t = (it: string, en: string) => (language === "it" ? it : en);

  const getPrice = (fraction: number) => {
    const val = Math.round(budgetRange.min + (budgetRange.max - budgetRange.min) * fraction);
    const finalVal = Math.min(val, budgetRange.max);
    return `${sym}${finalVal}`;
  };

  const vibeLower = (quiz.vibe || "").toLowerCase();
  const extraLower = (quiz.extraDetails || "").toLowerCase();
  const combinedText = `${vibeLower} ${extraLower}`;

  // Category specific: Yoga & Mobility
  if (combinedText.includes("yoga") || combinedText.includes("mobilit") || combinedText.includes("stretch")) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: t("Tappetino Yoga Antiscivolo Spessore 6mm con Cinghia", "Non-Slip Yoga Mat, 6mm Thick, with Carry Strap"),
        price: getPrice(0.4),
        reason: t(
          `Buon grip e ammortizzazione, comodo da trasportare per allenarti ovunque.`,
          `Great grip and cushioning, easy to carry so you can train anywhere.`
        ),
        matchScore: 98,
        tag: t("Più Scelto", "Top Pick"),
        amazonSearchQuery: "Tappetino Yoga Antiscivolo 6mm Cinghia",
        category: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 3210,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: t("Set Fasce Elastiche di Resistenza per Stretching e Mobilità", "Resistance Band Set for Stretching and Mobility"),
        price: getPrice(0.3),
        reason: t(
          `3 livelli di resistenza per allungamento assistito e recupero muscolare.`,
          `3 resistance levels for assisted stretching and muscle recovery.`
        ),
        matchScore: 96,
        tag: t("Essenziale", "Essential"),
        amazonSearchQuery: "Fasce Elastiche Resistenza Stretching",
        category: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 2450,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: t("Blocchi Yoga in Eva Ad Alta Densità (Coppia)", "High-Density EVA Yoga Blocks (Pair)"),
        price: getPrice(0.7),
        reason: t(
          `Supporto stabile per migliorare postura e allineamento nelle posizioni più impegnative.`,
          `Stable support to improve posture and alignment in more demanding poses.`
        ),
        matchScore: 97,
        tag: t("Top Qualità", "Top Quality"),
        amazonSearchQuery: "Blocchi Yoga Eva Alta Densità Coppia",
        category: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 1890,
        isPrime: true,
      },
    ];
  }

  // Category specific: Strength / Gym
  if (combinedText.includes("forza") || combinedText.includes("palestra") || combinedText.includes("manubri") || combinedText.includes("pesi") || combinedText.includes("strength") || combinedText.includes("gym")) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: t("Manubri Regolabili 2x10kg con Sistema a Ghiera", "2x10kg Adjustable Dumbbells with Dial System"),
        price: getPrice(0.8),
        reason: t(
          `Passa da un peso all'altro in pochi secondi, ideale per allenarti a casa senza ingombro.`,
          `Switch between weights in seconds, ideal for training at home without clutter.`
        ),
        matchScore: 99,
        tag: t("Più Scelto", "Top Pick"),
        amazonSearchQuery: "Manubri Regolabili 10kg Ghiera",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 3980,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: t("Panca Piana Pieghevole Regolabile Multiposizione", "Adjustable Folding Multi-Position Weight Bench"),
        price: getPrice(0.6),
        reason: t(
          `Struttura robusta e pieghevole, perfetta per allenamenti a corpo libero e con pesi.`,
          `Sturdy folding frame, perfect for bodyweight and weighted workouts.`
        ),
        matchScore: 96,
        tag: t("Essenziale", "Essential"),
        amazonSearchQuery: "Panca Piana Pieghevole Regolabile",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 1650,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: t("Kettlebell in Ghisa Rivestita 12kg", "12kg Coated Cast Iron Kettlebell"),
        price: getPrice(0.35),
        reason: t(
          `Presa comoda e antiscivolo, ottimo per esercizi funzionali e allenamento total body.`,
          `Comfortable non-slip grip, great for functional exercises and full-body training.`
        ),
        matchScore: 97,
        tag: t("Top Qualità", "Top Quality"),
        amazonSearchQuery: "Kettlebell Ghisa Rivestita 12kg",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        reviewsCount: 2760,
        isPrime: true,
      },
    ];
  }

  // Tier 1: Budget < 25€
  if (budgetRange.max <= 25) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: t("Elastici Fitness Set 5 Livelli di Resistenza con Sacca", "5-Level Resistance Band Set with Carry Bag"),
        price: getPrice(0.6),
        reason: t(
          `Versatili per tonificazione e riscaldamento, comodi da portare ovunque.`,
          `Versatile for toning and warm-ups, easy to bring anywhere.`
        ),
        matchScore: 97,
        tag: t("Più Scelto", "Top Pick"),
        amazonSearchQuery: "Elastici Fitness Set 5 Livelli Sacca",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 4210,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: t("Bottiglia Termica Sportiva 1L a Tenuta Stagna", "1L Leak-Proof Insulated Sports Bottle"),
        price: getPrice(0.4),
        reason: t(
          `Mantiene la temperatura per ore, indispensabile per ogni sessione di allenamento.`,
          `Keeps drinks at temperature for hours, essential for every workout session.`
        ),
        matchScore: 95,
        tag: t("Essenziale", "Essential"),
        amazonSearchQuery: "Bottiglia Termica Sportiva 1L",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 3540,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: t("Corda per Saltare Professionale con Cuscinetti a Sfera", "Professional Jump Rope with Ball Bearings"),
        price: getPrice(0.85),
        reason: t(
          `Rotazione fluida e regolabile in lunghezza, ottima per cardio ad alta intensità.`,
          `Smooth rotation and adjustable length, great for high-intensity cardio.`
        ),
        matchScore: 96,
        tag: t("Top Qualità", "Top Quality"),
        amazonSearchQuery: "Corda per Saltare Professionale Cuscinetti",
        category: "cardio",
        imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 2890,
        isPrime: true,
      },
    ].map((item, index) => ({ ...item, id: `forma-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}` }));
  }

  // Tier 2: Budget 25 - 50€
  if (budgetRange.max <= 50) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: t("Tappeto Fitness Pieghevole Antiscivolo con Borsa", "Folding Non-Slip Fitness Mat with Carry Bag"),
        price: getPrice(0.6),
        reason: t(
          `Superficie ampia per allenamenti a corpo libero, si ripiega per riporlo facilmente.`,
          `Large surface for bodyweight workouts, folds up for easy storage.`
        ),
        matchScore: 97,
        tag: t("Più Scelto", "Top Pick"),
        amazonSearchQuery: "Tappeto Fitness Pieghevole Antiscivolo",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 2340,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: t("Foam Roller per Massaggio Muscolare ad Alta Densità", "High-Density Muscle Massage Foam Roller"),
        price: getPrice(0.4),
        reason: t(
          `Rilascio miofasciale efficace per il recupero post-allenamento.`,
          `Effective myofascial release for post-workout recovery.`
        ),
        matchScore: 96,
        tag: t("Essenziale", "Essential"),
        amazonSearchQuery: "Foam Roller Massaggio Alta Densità",
        category: "recovery",
        imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 3120,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: t("Fascia Cardio Bluetooth per Monitoraggio Frequenza Cardiaca", "Bluetooth Heart Rate Monitor Chest Strap"),
        price: getPrice(0.85),
        reason: t(
          `Dati precisi in tempo reale, si sincronizza con le principali app fitness.`,
          `Accurate real-time data, syncs with the main fitness apps.`
        ),
        matchScore: 97,
        tag: t("Top Qualità", "Top Quality"),
        amazonSearchQuery: "Fascia Cardio Bluetooth Frequenza Cardiaca",
        category: "tech",
        imageUrl: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        reviewsCount: 1780,
        isPrime: true,
      },
    ].map((item, index) => ({ ...item, id: `forma-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}` }));
  }

  // Tier 3: Budget 50 - 100€
  if (budgetRange.max <= 100) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: t("Set Manubri Regolabili 2x15kg con Base di Supporto", "2x15kg Adjustable Dumbbell Set with Stand"),
        price: getPrice(0.85),
        reason: t(
          `Copertura di più fasce di peso in un unico set compatto, ideale per casa.`,
          `Covers multiple weight ranges in one compact set, ideal for home use.`
        ),
        matchScore: 98,
        tag: t("Più Scelto", "Top Pick"),
        amazonSearchQuery: "Set Manubri Regolabili 15kg Base",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 2560,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: t("Smartwatch Fitness con GPS e Monitoraggio Sonno", "Fitness Smartwatch with GPS and Sleep Tracking"),
        price: getPrice(0.8),
        reason: t(
          `Traccia allenamenti, battito e recupero, batteria a lunga durata.`,
          `Tracks workouts, heart rate and recovery, with long battery life.`
        ),
        matchScore: 97,
        tag: t("Top Qualità", "Top Quality"),
        amazonSearchQuery: "Smartwatch Fitness GPS Monitoraggio Sonno",
        category: "tech",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 4890,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: t("Pistola Massaggiante Percussiva Portatile con 6 Testine", "Portable Percussion Massage Gun with 6 Heads"),
        price: getPrice(0.65),
        reason: t(
          `Recupero muscolare profondo, comoda e silenziosa, ottima dopo allenamenti intensi.`,
          `Deep muscle recovery, quiet and comfortable, great after intense workouts.`
        ),
        matchScore: 96,
        tag: t("Originale", "Original"),
        amazonSearchQuery: "Pistola Massaggiante Percussiva Portatile",
        category: "recovery",
        imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 3450,
        isPrime: true,
      },
    ].map((item, index) => ({ ...item, id: `forma-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}` }));
  }

  // Tier 4: Budget > 100€
  return [
    {
      id: `forma-${Date.now()}-0`,
      title: t("Cyclette Pieghevole Magnetica con App di Allenamento", "Folding Magnetic Exercise Bike with Training App"),
      price: getPrice(0.85),
      reason: t(
        `Allenamento cardio completo a casa, si ripiega per risparmiare spazio.`,
        `Complete cardio workout at home, folds up to save space.`
      ),
      matchScore: 98,
      tag: t("Più Scelto", "Top Pick"),
      amazonSearchQuery: "Cyclette Pieghevole Magnetica App",
      category: "cardio",
      imageUrl: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      reviewsCount: 1980,
      isPrime: true,
    },
    {
      id: `forma-${Date.now()}-1`,
      title: t("Set Bilancieri e Dischi in Ghisa Completo per Casa", "Complete Home Barbell and Cast Iron Plate Set"),
      price: getPrice(0.7),
      reason: t(
        `Kit completo per allenamento di forza progressivo senza dover andare in palestra.`,
        `Complete kit for progressive strength training without going to the gym.`
      ),
      matchScore: 97,
      tag: t("Top Qualità", "Top Quality"),
      amazonSearchQuery: "Set Bilanciere Dischi Ghisa Casa",
      category: "strength",
      imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewsCount: 1230,
      isPrime: true,
    },
    {
      id: `forma-${Date.now()}-2`,
      title: t("Pistola Massaggiante Pro con Display e 8 Testine Intercambiabili", "Pro Massage Gun with Display and 8 Interchangeable Heads"),
      price: getPrice(0.5),
      reason: t(
        `Recupero muscolare di livello professionale, controllo di precisione dell'intensità.`,
        `Professional-grade muscle recovery with precise intensity control.`
      ),
      matchScore: 96,
      tag: t("Originale", "Original"),
      amazonSearchQuery: "Pistola Massaggiante Pro Display 8 Testine",
      category: "recovery",
      imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewsCount: 2140,
      isPrime: true,
    },
  ].map((item, index) => ({ ...item, id: `forma-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}` }));
}
