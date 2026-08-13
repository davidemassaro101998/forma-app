import { GiftItem, QuizState, CountryConfig } from "../types";

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

// Dati di fallback usati solo quando l'API Gemini non e disponibile
// (chiave mancante, errore, timeout) — garantiscono che l'utente veda
// comunque 3 prodotti coerenti invece di un errore vuoto.
export function generateSmartFallbackGifts(quiz: QuizState, country: CountryConfig): GiftItem[] {
  const sym = country.symbol || "€";
  const budgetRange = parseBudgetRange(quiz.budget);

  const getPrice = (fraction: number) => {
    const val = Math.round(budgetRange.min + (budgetRange.max - budgetRange.min) * fraction);
    const finalVal = Math.min(val, budgetRange.max);
    return `${sym}${finalVal}`;
  };

  const vibeLower = (quiz.vibe || "").toLowerCase();
  const extraLower = (quiz.extraDetails || "").toLowerCase();
  const combinedText = `${vibeLower} ${extraLower}`;

  // Categoria specifica: Yoga & Mobilità
  if (combinedText.includes("yoga") || combinedText.includes("mobilit") || combinedText.includes("stretch")) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: "Tappetino Yoga Antiscivolo Spessore 6mm con Cinghia",
        price: getPrice(0.4),
        reason: `Buon grip e ammortizzazione, comodo da trasportare per allenarti ovunque.`,
        matchScore: 98,
        tag: "Più Scelto",
        amazonSearchQuery: "Tappetino Yoga Antiscivolo 6mm Cinghia",
        category: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 3210,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: "Set Fasce Elastiche di Resistenza per Stretching e Mobilità",
        price: getPrice(0.3),
        reason: `3 livelli di resistenza per allungamento assistito e recupero muscolare.`,
        matchScore: 96,
        tag: "Essenziale",
        amazonSearchQuery: "Fasce Elastiche Resistenza Stretching",
        category: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 2450,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: "Blocchi Yoga in Eva Ad Alta Densità (Coppia)",
        price: getPrice(0.7),
        reason: `Supporto stabile per migliorare postura e allineamento nelle posizioni più impegnative.`,
        matchScore: 97,
        tag: "Top Qualità",
        amazonSearchQuery: "Blocchi Yoga Eva Alta Densità Coppia",
        category: "yoga",
        imageUrl: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 1890,
        isPrime: true,
      },
    ];
  }

  // Categoria specifica: Forza / Palestra
  if (combinedText.includes("forza") || combinedText.includes("palestra") || combinedText.includes("manubri") || combinedText.includes("pesi")) {
    return [
      {
        id: `forma-${Date.now()}-0`,
        title: "Manubri Regolabili 2x10kg con Sistema a Ghiera",
        price: getPrice(0.8),
        reason: `Passa da un peso all'altro in pochi secondi, ideale per allenarti a casa senza ingombro.`,
        matchScore: 99,
        tag: "Più Scelto",
        amazonSearchQuery: "Manubri Regolabili 10kg Ghiera",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 3980,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: "Panca Piana Pieghevole Regolabile Multiposizione",
        price: getPrice(0.6),
        reason: `Struttura robusta e pieghevole, perfetta per allenamenti a corpo libero e con pesi.`,
        matchScore: 96,
        tag: "Essenziale",
        amazonSearchQuery: "Panca Piana Pieghevole Regolabile",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 1650,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: "Kettlebell in Ghisa Rivestita 12kg",
        price: getPrice(0.35),
        reason: `Presa comoda e antiscivolo, ottimo per esercizi funzionali e allenamento total body.`,
        matchScore: 97,
        tag: "Top Qualità",
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
        title: "Elastici Fitness Set 5 Livelli di Resistenza con Sacca",
        price: getPrice(0.6),
        reason: `Versatili per tonificazione e riscaldamento, comodi da portare ovunque.`,
        matchScore: 97,
        tag: "Più Scelto",
        amazonSearchQuery: "Elastici Fitness Set 5 Livelli Sacca",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 4210,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: "Bottiglia Termica Sportiva 1L a Tenuta Stagna",
        price: getPrice(0.4),
        reason: `Mantiene la temperatura per ore, indispensabile per ogni sessione di allenamento.`,
        matchScore: 95,
        tag: "Essenziale",
        amazonSearchQuery: "Bottiglia Termica Sportiva 1L",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 3540,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: "Corda per Saltare Professionale con Cuscinetti a Sfera",
        price: getPrice(0.85),
        reason: `Rotazione fluida e regolabile in lunghezza, ottima per cardio ad alta intensità.`,
        matchScore: 96,
        tag: "Top Qualità",
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
        title: "Tappeto Fitness Pieghevole Antiscivolo con Borsa",
        price: getPrice(0.6),
        reason: `Superficie ampia per allenamenti a corpo libero, si ripiega per riporlo facilmente.`,
        matchScore: 97,
        tag: "Più Scelto",
        amazonSearchQuery: "Tappeto Fitness Pieghevole Antiscivolo",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 2340,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: "Foam Roller per Massaggio Muscolare ad Alta Densità",
        price: getPrice(0.4),
        reason: `Rilascio miofasciale efficace per il recupero post-allenamento.`,
        matchScore: 96,
        tag: "Essenziale",
        amazonSearchQuery: "Foam Roller Massaggio Alta Densità",
        category: "recovery",
        imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 3120,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: "Fascia Cardio Bluetooth per Monitoraggio Frequenza Cardiaca",
        price: getPrice(0.85),
        reason: `Dati precisi in tempo reale, si sincronizza con le principali app fitness.`,
        matchScore: 97,
        tag: "Top Qualità",
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
        title: "Set Manubri Regolabili 2x15kg con Base di Supporto",
        price: getPrice(0.85),
        reason: `Copertura di più fasce di peso in un unico set compatto, ideale per casa.`,
        matchScore: 98,
        tag: "Più Scelto",
        amazonSearchQuery: "Set Manubri Regolabili 15kg Base",
        category: "strength",
        imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        reviewsCount: 2560,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-1`,
        title: "Smartwatch Fitness con GPS e Monitoraggio Sonno",
        price: getPrice(0.8),
        reason: `Traccia allenamenti, battito e recupero, batteria a lunga durata.`,
        matchScore: 97,
        tag: "Top Qualità",
        amazonSearchQuery: "Smartwatch Fitness GPS Monitoraggio Sonno",
        category: "tech",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        reviewsCount: 4890,
        isPrime: true,
      },
      {
        id: `forma-${Date.now()}-2`,
        title: "Pistola Massaggiante Percussiva Portatile con 6 Testine",
        price: getPrice(0.65),
        reason: `Recupero muscolare profondo, comoda e silenziosa, ottima dopo allenamenti intensi.`,
        matchScore: 96,
        tag: "Originale",
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
      title: "Cyclette Pieghevole Magnetica con App di Allenamento",
      price: getPrice(0.85),
      reason: `Allenamento cardio completo a casa, si ripiega per risparmiare spazio.`,
      matchScore: 98,
      tag: "Più Scelto",
      amazonSearchQuery: "Cyclette Pieghevole Magnetica App",
      category: "cardio",
      imageUrl: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      reviewsCount: 1980,
      isPrime: true,
    },
    {
      id: `forma-${Date.now()}-1`,
      title: "Set Bilancieri e Dischi in Ghisa Completo per Casa",
      price: getPrice(0.7),
      reason: `Kit completo per allenamento di forza progressivo senza dover andare in palestra.`,
      matchScore: 97,
      tag: "Top Qualità",
      amazonSearchQuery: "Set Bilanciere Dischi Ghisa Casa",
      category: "strength",
      imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewsCount: 1230,
      isPrime: true,
    },
    {
      id: `forma-${Date.now()}-2`,
      title: "Pistola Massaggiante Pro con Display e 8 Testine Intercambiabili",
      price: getPrice(0.5),
      reason: `Recupero muscolare di livello professionale, controllo di precisione dell'intensità.`,
      matchScore: 96,
      tag: "Originale",
      amazonSearchQuery: "Pistola Massaggiante Pro Display 8 Testine",
      category: "recovery",
      imageUrl: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewsCount: 2140,
      isPrime: true,
    },
  ].map((item, index) => ({ ...item, id: `forma-${Date.now()}-${index}-${Math.floor(Math.random() * 1000)}` }));
}
