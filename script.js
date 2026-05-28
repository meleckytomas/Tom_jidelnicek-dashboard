const metrics = [
  ["Váha", "81 až 82 kg", "Zůstává orientační, přesnou váhu doplníš při pondělním check-inu."],
  ["Tělesný tuk", "14 až 15 %", "Zůstává orientační z chytré váhy, sleduj hlavně trend."],
  ["Srdeční tep", "56 bpm", "Průměr ze screenshotů 22. 5. až 28. 5.; roční klidový tep byl 55 bpm."],
  ["HRV", "40 ms", "Aktuální 7denní stav VST, noční průměr týdne cca 41 ms."],
  ["Kroky", "14 725 / den", "98 231 kroků za týden, celkem 78,4 km."],
  ["Spánek", "7 h 13 min", "Průměr 22. 5. až 28. 5.; cíl zůstává 7 h 45 min až 8 h."],
  ["Body Battery", "92 / 26", "Průměr vysoké a nízké hodnoty za týden 22. 5. až 28. 5."],
  ["Stres", "22", "Průměr ze screenshotů 22. 5. až 28. 5.; lepší než původní 4týdenní průměr 27."],
  ["Pulzní oxymetr", "95 %", "Průměr SpO2 za týden 22. 5. až 28. 5."]
];

const garminReports = [
  {
    period: "22. 5. - 28. 5. 2026",
    source: "Garmin Connect screenshoty, váha a pas budou doplněny v pondělí.",
    weekly: {
      avgSleep: "7 h 13 min",
      avgSleepScore: 82,
      hrvSevenDayLatest: 40,
      avgNightHrv: 41,
      avgStress: 22,
      avgCalories: 2672,
      avgHeartRate: 56,
      maxHeartRate: 164,
      avgBodyBatteryHigh: 92,
      avgBodyBatteryLow: 26,
      avgSpo2: 95,
      stepsTotal: 98231,
      stepsAverage: 14725,
      distanceKm: 78.4
    },
    intensity: {
      period: "25. 5. - 31. 5. 2026",
      total: 312,
      goal: 420,
      percent: 74,
      moderate: 104,
      vigorous: 104
    },
    daily: [
      { date: "2026-05-22", day: "pátek", sleepScore: 86, sleepDuration: "7 h 39 min", hrvSevenDay: 34, hrvNight: 34, calories: 2920, stress: 20, heartAvg: 56, heartMax: 164, bodyBatteryHigh: 91, bodyBatteryLow: 29, spo2: 97 },
      { date: "2026-05-23", day: "sobota", sleepScore: 81, sleepDuration: "6 h 29 min", hrvSevenDay: 35, hrvNight: 40, calories: 2736, stress: 30, heartAvg: 57, heartMax: 138, bodyBatteryHigh: 95, bodyBatteryLow: 18, spo2: 95 },
      { date: "2026-05-24", day: "neděle", sleepScore: 66, sleepDuration: "7 h 56 min", hrvSevenDay: 36, hrvNight: 32, calories: 2768, stress: 21, heartAvg: 55, heartMax: 158, bodyBatteryHigh: 73, bodyBatteryLow: 20, spo2: 95 },
      { date: "2026-05-25", day: "pondělí", sleepScore: 89, sleepDuration: "7 h 27 min", hrvSevenDay: 37, hrvNight: 47, calories: 3001, stress: 20, heartAvg: 55, heartMax: 164, bodyBatteryHigh: 100, bodyBatteryLow: 31, spo2: 94 },
      { date: "2026-05-26", day: "úterý", sleepScore: 72, sleepDuration: "6 h 34 min", hrvSevenDay: 38, hrvNight: 43, calories: 2906, stress: 19, heartAvg: 56, heartMax: 155, bodyBatteryHigh: 85, bodyBatteryLow: 23, spo2: 96 },
      { date: "2026-05-27", day: "středa", sleepScore: 91, sleepDuration: "7 h 13 min", hrvSevenDay: 39, hrvNight: 44, calories: 2429, stress: 24, heartAvg: 56, heartMax: 107, bodyBatteryHigh: 98, bodyBatteryLow: 25, spo2: 95 },
      { date: "2026-05-28", day: "čtvrtek", sleepScore: 87, sleepDuration: "7 h 11 min", hrvSevenDay: 40, hrvNight: 44, calories: 1946, stress: 19, heartAvg: 54, heartMax: 137, bodyBatteryHigh: 99, bodyBatteryLow: 38, spo2: 96 }
    ]
  }
];

const comparisonBaseline = {
  label: "výchozí stav",
  source: "První srovnání zatím používá původní hodnoty z dashboardu. Po dalším týdnu screenshotů se přepne na týden proti týdnu.",
  values: {
    sleepMinutes: 440,
    hrv: 35,
    heartRate: 55,
    stress: 27,
    stepsAverage: 12810,
    bodyBatteryHigh: 85,
    spo2: 95
  }
};

const days = [
  {
    day: "Pondělí",
    type: "strength",
    label: "Síla",
    training: "Garmin síla 60 až 70 minut. Volitelně 20 minut lehká chůze nebo velmi lehký výklus.",
    goal: "Silový start týdne, nepřepálit začátek.",
    meals: ["Kuře nebo krůta, rýže, zelenina, jogurtový dip.", "Protein s jahodami nebo borůvkami, případně skyr.", "Vejce, kváskový chléb, cottage, zelenina."],
    note: "Drž techniku a rezervu. Pondělí má nastavit týden, ne ho vyhrát celé najednou."
  },
  {
    day: "Úterý",
    type: "football",
    label: "Fotbal",
    training: "Fotbal 18:30 až 20:00. Žádný další běh ani silový trénink.",
    goal: "Doplnit energii před fotbalem a po něm dát lehkou bílkovinnou večeři.",
    meals: ["Těstoviny s tuňákem, rajčaty a parmazánem.", "Před fotbalem banán, kefír nebo kváskový toast se šunkou.", "Po fotbale tvaroh, protein, ovoce nebo omeleta se zeleninou."],
    note: "Fotbal je tvrdší trénink. Další intenzita by byla spíš dluh než bonus."
  },
  {
    day: "Středa",
    type: "strength",
    label: "Síla",
    training: "Garmin síla 60 až 70 minut. Doplněk pouze kroky, mobilita, protažení.",
    goal: "Síla bez zbytečného přetížení.",
    meals: ["Losos, brambory z horkovzdušné fritézy, zelenina.", "Skyr, ovoce, případně protein.", "Krůtí wrap nebo kváskový chléb, vejce, sýr, zelenina."],
    note: "Středa je kvalitní práce, ne hon na objem."
  },
  {
    day: "Čtvrtek",
    type: "recovery",
    label: "Regenerace",
    training: "Volno. Maximálně 8 až 10 tisíc kroků, lehká procházka, žádná síla ani kondiční intenzita.",
    goal: "Regenerace, HRV a nervový systém.",
    meals: ["Maso z pomalého hrnce, brambory nebo rýže, zelenina.", "Cottage, ovoce, kváskový chléb.", "Velký salát s vejci, sýrem a jogurtovým dresinkem."],
    note: "Čtvrtek není díra v plánu. Je to den, který pomáhá zvládnout pátek a víkend."
  },
  {
    day: "Pátek",
    type: "strength",
    label: "Síla",
    training: "Garmin síla 60 až 70 minut. Volitelně 15 minut lehký výklus jen při dobré energii, spánku a regeneraci.",
    goal: "Dokončit silový týden, nepřepálit víkend.",
    meals: ["Rizoto s kuřetem, hráškem a sýrem.", "Proteinové smoothie s mangem.", "Domácí hranolky z brambor, tvarohový dip, vejce nebo šunka."],
    note: "Výklus je volitelný nástroj, ne povinnost."
  },
  {
    day: "Sobota",
    type: "endurance",
    label: "Zóna 2",
    training: "Běh 40 až 60 minut v zóně 2 nebo kolo 60 až 90 minut. Tempo, při kterém jde mluvit.",
    goal: "Vytrvalost, spalování tuku, lepší klidový tep a HRV.",
    meals: ["Bowl s rýží nebo kuskusem, kuřetem, zeleninou a jogurtovým dipem.", "Kefír, ovoce, protein podle hladu.", "Těstoviny s lososem nebo rajčatovou omáčkou a sýrem."],
    note: "Zóna 2 má být klidná. Když se z toho stane závod, mění se účel dne."
  },
  {
    day: "Neděle",
    type: "football",
    label: "Fotbal",
    training: "Fotbal 9:30 až 11:30. Odpoledne pouze lehké kolo s rodinou nebo procházka.",
    goal: "Fotbal, rodina, regenerace před dalším týdnem.",
    meals: ["Po fotbale vývar nebo polévka, hlavní jídlo s masem nebo rybou, příloha, zelenina.", "Skyr, tvaroh, ovoce.", "Vejce, zelenina, kváskový chléb."],
    note: "Nedělní odpoledne nech lehké. Pondělí se pak nebude tvářit jako trest."
  }
];

const mealRotationWeeks = [
  {
    title: "Týden 1 - středomořský základ",
    focus: "Jednoduché restaurace přes den, doma lehké bílkovinné večeře a fritéza.",
    meals: [
      {
        lunch: { name: "Restaurace: kuřecí prsa, rýže, zelenina, jogurtový dip", protein: 45, note: "Vyber grilované nebo pečené maso, omáčku spíš bokem." },
        snack: { name: "Protein s jahodami a kefírem", protein: 30, note: "1 odměrka Nutrend + kefír + jahody. Mixér, 3 minuty." },
        dinner: { name: "Vejce, cottage, kváskový chléb, zelenina", protein: 48, note: "Rychlá večeře bez těžkého vaření. Vejce můžeš udělat na pánvi nebo v Crisp režimu." }
      },
      {
        lunch: { name: "Restaurace: těstoviny s tuňákem nebo kuřetem, rajčata", protein: 42, note: "Bez smetanové omáčky, ideálně rajčatový základ a parmazán." },
        snack: { name: "Banán + kefír před fotbalem", protein: 12, note: "Lehká energie, netlačit velké jídlo těsně před hrou." },
        dinner: { name: "Po fotbale tvaroh s kakaem, ovocem a proteinem", protein: 50, note: "Tvaroh + půl až 1 odměrka proteinu + ovoce. Lehké a rychlé po 20:00." }
      },
      {
        lunch: { name: "Restaurace: losos nebo kuře, brambory, zelenina", protein: 45, note: "Ideál po silovém dni, když je možnost ryby." },
        snack: { name: "Skyr, borůvky, trochu medu", protein: 25, note: "Řízená sladká varianta bez ořechů." },
        dinner: { name: "Krůtí wrap se zeleninou a jogurtovým dresinkem", protein: 45, note: "Tortilla, krůtí/šunka, sýr, zelenina, jogurt. 10 minut." }
      },
      {
        lunch: { name: "Restaurace: maso na zelenině, rýže nebo brambory", protein: 45, note: "Regenerační den. Drž normální porci, žádný trest." },
        snack: { name: "Cottage, ovoce, kváskový chléb", protein: 30, note: "Dobré na stabilní energii bez sladkého nájezdu." },
        dinner: { name: "Velký salát s vejci, sýrem a jogurtovým dresinkem", protein: 42, note: "2 až 3 vejce, sýr, zelenina, jogurtový dresink." }
      },
      {
        lunch: { name: "Restaurace: kuřecí rizoto, hrášek, sýr", protein: 42, note: "Dobrá volba před dokončením silového týdne." },
        snack: { name: "Proteinové mango smoothie", protein: 30, note: "Mango + kefír/mléko + 1 odměrka proteinu." },
        dinner: { name: "Crisp domácí hranolky, tvarohový dip, vejce", protein: 40, note: "Brambory v Crisp/fritéze, tvaroh + jogurt + bylinky, 2 vejce." }
      },
      {
        lunch: { name: "Domácí kuřecí bowl s rýží a zeleninou", protein: 50, note: "Kuře na pánvi, rýže, zelenina, jogurtový dip. Vhodné po zóně 2." },
        snack: { name: "Kefír, ovoce, protein podle hladu", protein: 25, note: "Při delším běhu/kole klidně protein přidej." },
        dinner: { name: "Těstoviny s lososem a rajčatovou omáčkou", protein: 45, note: "Losos + passata + těstoviny + parmazán. Středomořský základ." }
      },
      {
        lunch: { name: "Po fotbale: vývar + maso/ryba, brambory, zelenina", protein: 50, note: "Normální rodinný oběd, jen drž bílkovinu jako kotvu." },
        snack: { name: "Skyr nebo tvaroh s ovocem", protein: 30, note: "Lehká svačina po aktivním dopoledni." },
        dinner: { name: "Omeleta se žampiony, sýrem a kváskovým chlebem", protein: 42, note: "Jediné houby: žampiony. 3 vejce, sýr, zelenina." }
      }
    ]
  },
  {
    title: "Týden 2 - krevety, sushi a lehké večeře",
    focus: "Více ryb, krevety a lehčí středomořské večeře bez smažení.",
    meals: [
      {
        lunch: { name: "Restaurace: kuřecí steak, brambory, salát", protein: 45, note: "Jednoduché, dobré po pondělní síle." },
        snack: { name: "Skyr s jahodami a medem", protein: 25, note: "Sladké pod kontrolou." },
        dinner: { name: "Crisp lososové brambory s cottage dipem", protein: 45, note: "Brambory v Crisp, k tomu cottage + jogurt + bylinky, případně losos z pánve." }
      },
      {
        lunch: { name: "Restaurace: sushi set s lososem/tuňákem", protein: 35, note: "Skvělé, jen když je porce menší, doplň protein večer." },
        snack: { name: "Toast se šunkou a kefír před fotbalem", protein: 25, note: "Lepší než těžké jídlo před intenzitou." },
        dinner: { name: "Po fotbale omeleta se zeleninou", protein: 40, note: "3 vejce, šunka nebo sýr, zelenina. Lehké a rychlé." }
      },
      {
        lunch: { name: "Restaurace: těstoviny s krevetami a rajčaty", protein: 40, note: "Středomořská volba, bez smetanové omáčky." },
        snack: { name: "Protein s borůvkami", protein: 30, note: "1 odměrka + kefír/mléko + borůvky." },
        dinner: { name: "Krůtí maso z pomalého hrnce, rýže, salát", protein: 50, note: "Maso, rajčata, kořenová zelenina, koření. Udělej víc porcí." }
      },
      {
        lunch: { name: "Restaurace: ryba, brambory, zelenina", protein: 42, note: "Regeneračně lehké, přitom dost bílkovin." },
        snack: { name: "Cottage a ovoce", protein: 28, note: "Jednoduchá svačina do okna 16:8." },
        dinner: { name: "Řecký salát s vejci a jogurtovým dresinkem", protein: 38, note: "Zelenina, sýr, 2 až 3 vejce, jogurtový dresink." }
      },
      {
        lunch: { name: "Restaurace: kuře, kuskus/rýže, zelenina", protein: 45, note: "Drž přílohu, ať je energie na sílu." },
        snack: { name: "Mango protein smoothie", protein: 30, note: "Mango + protein + kefír." },
        dinner: { name: "Crisp brambory, šunka, vejce, tvarohový dip", protein: 42, note: "Domácí páteční comfort bez smažení." }
      },
      {
        lunch: { name: "Krevetová bowl s rýží a zeleninou", protein: 45, note: "Krevety na pánvi 5 minut, rýže, zelenina, jogurtovo-citronový dip." },
        snack: { name: "Kefír s ovocem a skořicí", protein: 16, note: "Lehké, vhodné i při chuti na sladké." },
        dinner: { name: "Rajčatové těstoviny s tuňákem a parmazánem", protein: 45, note: "Rychlá večeře, zásobní jídlo z konzervy." }
      },
      {
        lunch: { name: "Po fotbale: kuře nebo ryba, brambory, zelenina", protein: 50, note: "Nedělní klasika, nic komplikovaného." },
        snack: { name: "Tvaroh s kakaem a ovocem", protein: 35, note: "Sladké bez chaosu." },
        dinner: { name: "Kváskový chléb, cottage, vejce, zelenina", protein: 42, note: "Jednoduché ukončení týdne." }
      }
    ]
  },
  {
    title: "Týden 3 - pomalý hrnec a stabilní energie",
    focus: "Více meal-prep jídel, pomalý hrnec a jídla, která drží režim bez přemýšlení.",
    meals: [
      {
        lunch: { name: "Restaurace: krůtí/kuřecí, rýže, zelenina", protein: 45, note: "Bez smažení, omáčka bokem." },
        snack: { name: "Protein s jahodami", protein: 30, note: "Rychle doplní denní příjem." },
        dinner: { name: "Pomalý hrnec: hovězí/krůtí na zelenině", protein: 55, note: "Maso, rajčata, kořenová zelenina. Porce na 2 až 3 dny." }
      },
      {
        lunch: { name: "Restaurace: těstoviny s kuřetem a rajčaty", protein: 42, note: "Před fotbalem klidně větší oběd." },
        snack: { name: "Banán + skyr", protein: 25, note: "Před fotbalem, když je hlad větší." },
        dinner: { name: "Po fotbale tvarohovo-proteinový krém", protein: 50, note: "Tvaroh, protein, kakao, ovoce. Bez těžké přílohy." }
      },
      {
        lunch: { name: "Restaurace: losos, brambory, zelenina", protein: 45, note: "Silový den, dobrá volba tuku a bílkovin." },
        snack: { name: "Cottage s kváskovým chlebem", protein: 30, note: "Stabilní energie." },
        dinner: { name: "Wrap s masem z pomalého hrnce", protein: 48, note: "Zbytky masa, tortilla, zelenina, jogurtový dip." }
      },
      {
        lunch: { name: "Restaurace: salát s kuřetem, vejcem nebo sýrem", protein: 40, note: "Regenerační den, ale pořád bílkoviny." },
        snack: { name: "Kefír s jahodami a skořicí", protein: 16, note: "Lehké na trávení." },
        dinner: { name: "Omeleta se žampiony a sýrem", protein: 42, note: "3 vejce, žampiony, sýr. Hotovo do 12 minut." }
      },
      {
        lunch: { name: "Restaurace: rizoto s kuřetem nebo krůtou", protein: 42, note: "Dobré před pátkem, neřešit extrémní deficit." },
        snack: { name: "Protein s mangem", protein: 30, note: "Po práci nebo před večeří." },
        dinner: { name: "Crisp americké brambory, cottage, šunka", protein: 38, note: "Brambory v Crisp/fritéze, cottage a šunka pro bílkoviny." }
      },
      {
        lunch: { name: "Kuřecí kuskus bowl se zeleninou", protein: 50, note: "Rychlá domácí bowl po vytrvalosti." },
        snack: { name: "Skyr s ovocem", protein: 25, note: "Podle hladu přidej půl odměrky proteinu." },
        dinner: { name: "Sushi nebo poke bowl s lososem/krevetami", protein: 35, note: "Když je sushi/poke venku, dobrá víkendová varianta." }
      },
      {
        lunch: { name: "Po fotbale: vývar + maso, brambory/rýže, zelenina", protein: 50, note: "Doplnit, ale nepřejíst se na večer." },
        snack: { name: "Tvaroh s ovocem", protein: 35, note: "Jednoduché doplnění." },
        dinner: { name: "Salát s tuňákem, vejcem a jogurtovým dresinkem", protein: 45, note: "Lehká nedělní večeře." }
      }
    ]
  },
  {
    title: "Týden 4 - lehčí středomořský týden",
    focus: "Ryby, kuře, krevety, zelenina a řízené sladké varianty.",
    meals: [
      {
        lunch: { name: "Restaurace: kuře, brambory, zelenina", protein: 45, note: "Jednoduchý silový základ." },
        snack: { name: "Skyr, borůvky, med", protein: 25, note: "Sladké řízeně." },
        dinner: { name: "Crisp losos, brambory, jogurtový dip", protein: 48, note: "Brambory Crisp/fritéza, losos pánev/trouba, dip z jogurtu." }
      },
      {
        lunch: { name: "Restaurace: kuřecí těstoviny s rajčaty", protein: 42, note: "Příloha před fotbalem dává smysl." },
        snack: { name: "Toast se šunkou + kefír", protein: 25, note: "Lehký předzápasový set." },
        dinner: { name: "Po fotbale skyr + protein + ovoce", protein: 45, note: "Když je pozdě, drž to lehké." }
      },
      {
        lunch: { name: "Restaurace: krevety/ryba, rýže, zelenina", protein: 40, note: "Středomořská volba, žádné smažení." },
        snack: { name: "Cottage a ovoce", protein: 28, note: "Vhodné mezi obědem a večeří." },
        dinner: { name: "Krůtí wrap s rajčaty a sýrem", protein: 45, note: "Rychlá domácí večeře po síle." }
      },
      {
        lunch: { name: "Restaurace: maso, zelenina, rýže/brambory", protein: 45, note: "Volnější den, drž porci normální." },
        snack: { name: "Kefír s ovocem", protein: 16, note: "Lehké a dobré pro trávení." },
        dinner: { name: "Caprese salát plus vejce a kváskový chléb", protein: 38, note: "Mozzarella/sýr, rajčata, 2 vejce, chléb." }
      },
      {
        lunch: { name: "Restaurace: kuřecí bowl nebo rizoto", protein: 45, note: "Pátek = dotáhnout sílu, nepodjíst se." },
        snack: { name: "Mango protein smoothie", protein: 30, note: "Mango, kefír/mléko, protein." },
        dinner: { name: "Domácí hranolky z fritézy, tvarohový dip, vejce", protein: 40, note: "Comfort jídlo bez smažení v oleji." }
      },
      {
        lunch: { name: "Krevetové těstoviny s rajčaty a parmazánem", protein: 42, note: "Krevety na pánvi, passata, těstoviny, parmazán." },
        snack: { name: "Proteinová zmrzlina bez ořechů", protein: 30, note: "Mražené ovoce, skyr/kefír, protein. Mixér." },
        dinner: { name: "Tuňákový salát s kváskovým chlebem", protein: 42, note: "Tuňák, vejce, zelenina, jogurtový dresink." }
      },
      {
        lunch: { name: "Po fotbale: sushi/poke nebo ryba s přílohou", protein: 40, note: "Když je sushi, vybírej losos/tuňák/krevety." },
        snack: { name: "Skyr nebo tvaroh s ovocem", protein: 30, note: "Podle hladu a rodinného programu." },
        dinner: { name: "Omeleta se sýrem, zeleninou a žampiony", protein: 42, note: "Lehký návrat do režimu před pondělkem." }
      }
    ]
  }
];

const recipes = [
  ["Losos s americkými bramborami", "Jídla z horkovzdušné fritézy", "Středa, po síle nebo jako víkendový oběd.", "Losos, brambory, zelenina, jogurtový dip.", "Brambory okořeň a dej do fritézy, lososa upeč vedle nebo na pánvi, přidej zeleninu.", "35 až 45 g"],
  ["Krůtí na zelenině z pomalého hrnce", "Jídla z pomalého hrnce", "Čtvrtek nebo jídlo do práce.", "Krůtí maso, kořenová zelenina, rajčata, rýže nebo brambory.", "Vše dej do hrnce, vař pomalu, rozděl na porce.", "40 až 55 g"],
  ["Proteinové smoothie s ovocem", "Jídla po tréninku", "Po tréninku nebo jako svačina.", "Nutrend Whey, mléko nebo kefír, jahody, mango nebo borůvky.", "Rozmixuj tekutinu, ovoce a 1 až 2 odměrky proteinu.", "25 až 35 g"],
  ["Kuřecí bowl", "Jídla do práce", "Oběd v silový nebo vytrvalostní den.", "Kuře, rýže nebo kuskus, zelenina, jogurtový dip.", "Uvař základ, maso opeč, vše dej do misky a přidej dip.", "40 až 55 g"],
  ["Rychlá omeleta", "Rychlá jídla", "Večeře, hlavně po fotbale.", "Vejce, zelenina, sýr, šunka podle hladu.", "Opeč zeleninu, přidej vejce a sýr, nech zatuhnout.", "30 až 45 g"],
  ["Těstoviny s tuňákem nebo lososem", "Jídla po tréninku", "Úterý oběd nebo sobotní večeře.", "Těstoviny, tuňák nebo losos, rajčata, parmazán.", "Uvař těstoviny, promíchej s rybou, rajčaty a sýrem.", "35 až 50 g"],
  ["Domácí hranolky s tvarohovým dipem", "Jídla z horkovzdušné fritézy", "Pátek večer bez pocitu zákazu.", "Brambory, tvaroh, jogurt, bylinky, vejce nebo šunka.", "Brambory upeč dokřupava, tvaroh rozmíchej s jogurtem a bylinkami.", "30 až 45 g"],
  ["Skyr s ovocem a trochou medu", "Sladké řízené varianty", "Když přijde chuť na sladké.", "Skyr, ovoce, malá lžička medu.", "Smíchej a jez pomalu, ideálně mimo obrazovku.", "20 až 30 g"],
  ["Tvaroh s kakaem a ovocem", "Sladké řízené varianty", "Večerní sladká varianta.", "Tvaroh, kakao, ovoce, případně trochu medu.", "Rozmíchej tvaroh s kakaem, přidej ovoce.", "30 až 45 g"],
  ["Kefír s jahodami a skořicí", "Sladké řízené varianty", "Lehká svačina v alergickém období.", "Kefír, jahody, skořice.", "Rozmixuj nebo jen promíchej ve sklenici.", "10 až 18 g"],
  ["Domácí proteinová zmrzlina bez ořechů", "Sladké řízené varianty", "Kontrolované sladké po náročném dni.", "Mražené ovoce, protein, skyr nebo kefír.", "Rozmixuj mražené ovoce s proteinem a skyrem do husté konzistence.", "25 až 40 g"],
  ["Tvaroh po fotbale", "Večeře po fotbale", "Úterý večer, když je pozdě.", "Tvaroh, protein, ovoce nebo kakao.", "Smíchej, drž porci lehkou a nejez zbytečně těžce před spaním.", "35 až 50 g"],
  ["Crisp losos s bramborami a jogurtovým dipem", "Jídla z horkovzdušné fritézy", "Silový den nebo lehčí víkendová večeře.", "Losos, brambory, bílý jogurt, citron, zelenina.", "Brambory dej do Whirlpool Crisp nebo fritézy, lososa opeč na pánvi nebo dopeč vedle. Jogurt smíchej s citronem a bylinkami.", "45 až 50 g"],
  ["Krevetové rajčatové těstoviny", "Jídla po tréninku", "Sobota nebo den, kdy chceš středomořskou večeři.", "Krevety, těstoviny, passata, rajčata, parmazán.", "Krevety orestuj 4 až 5 minut, přidej passatu a rajčata, promíchej s těstovinami a posyp parmazánem.", "40 až 45 g"],
  ["Krůtí maso z pomalého hrnce", "Jídla z pomalého hrnce", "Meal-prep na středu, čtvrtek nebo wrap.", "Krůtí maso, rajčata, kořenová zelenina, rýže nebo wrap.", "Maso, zeleninu a rajčata dej do pomalého hrnce na několik hodin. Hotové maso rozděl na porce k rýži nebo do wrapu.", "45 až 55 g"],
  ["Krevetová bowl s rýží", "Jídla po tréninku", "Po zóně 2 nebo jako lehký víkendový oběd.", "Krevety, rýže, zelenina, jogurtovo-citronový dip.", "Uvař rýži, krevety krátce opeč, přidej zeleninu a dip z jogurtu, citronu a bylinek.", "40 až 48 g"],
  ["Omeleta se žampiony a sýrem", "Rychlá jídla", "Regenerační den nebo nedělní večeře.", "Vejce, žampiony, sýr, zelenina, kváskový chléb.", "Žampiony krátce opeč, přidej vejce a sýr. Podávej se zeleninou a podle hladu s kváskovým chlebem.", "38 až 45 g"],
  ["Proteinový krém po fotbale", "Večeře po fotbale", "Úterý večer, když je pozdě a nechceš těžké jídlo.", "Tvaroh, Nutrend Whey, kakao, ovoce.", "Tvaroh rozmíchej s půl až jednou odměrkou proteinu, kakaem a ovocem. Drž lehkou porci před spaním.", "45 až 55 g"],
  ["Vepřová panenka s bramborami z fritézy", "Jídla z horkovzdušné fritézy", "Silový den, když chceš změnu od kuřecího.", "Vepřová panenka, brambory, cuketa nebo salát, jogurtovo-hořčičný dip.", "Panenku osol, opepři a krátce opeč na pánvi nebo v troubě. Brambory udělej ve fritéze/Crisp, k tomu salát a dip z jogurtu, hořčice a bylinek.", "45 až 55 g"],
  ["Hovězí mleté s rajčaty a rýží", "Jídla do práce", "Meal-prep na dny, kdy nejde restaurace.", "Libovější hovězí mleté, krájená rajčata, rajčatový protlak, rýže, zelenina.", "Mleté maso orestuj, přidej rajčata, protlak a koření. Podávej s rýží a zeleninou, případně rozděl na krabičky.", "40 až 55 g"],
  ["Celozrnné pečivo s cottage a šunkou", "Rychlá jídla", "Rychlá večeře nebo záchrana v jídelním okně.", "Celozrnné pečivo, cottage nebo Palouček, kvalitní šunka, okurka, rajčata.", "Pečivo doplň cottage/čerstvým sýrem, šunkou a zeleninou. Hodí se, když nechceš vařit.", "30 až 45 g"],
  ["Řecký jogurt s proteinem a mraženým ovocem", "Sladké řízené varianty", "Když je chuť na sladké, ale chceš držet bílkoviny.", "Řecký jogurt nebo skyr, Nutrend Whey, mražené jahody/borůvky/mango, trochu medu nebo džemu.", "Jogurt rozmíchej s proteinem, přidej mražené ovoce. Med nebo džem drž jako malý doplněk, ne základ.", "35 až 50 g"],
  ["Tuňákovo-fazolový salát s pečivem", "Jídla do práce", "Rychlé jídlo ze zásob ve spíži.", "Tuňák, fazole nebo cizrna z konzervy, okurka, rajčata, olivový olej, celozrnné pečivo.", "Konzervy slij, promíchej se zeleninou, citronem a trochou olivového oleje. Přidej pečivo podle hladu.", "35 až 50 g"]
];

function inferRecipeDetails(meal, mealType) {
  const text = `${meal.name} ${meal.note}`.toLowerCase();
  const isRestaurant = text.includes("restaurace");
  const ingredients = [];
  const steps = [];

  if (text.includes("kuře") || text.includes("kuřecí")) ingredients.push("kuřecí maso");
  if (text.includes("krůt")) ingredients.push("krůtí maso");
  if (text.includes("panenka")) ingredients.push("vepřová panenka");
  if (text.includes("hovězí") || text.includes("mleté")) ingredients.push("hovězí maso nebo libovější hovězí mleté");
  if (text.includes("losos") || text.includes("ryba")) ingredients.push("losos nebo jiná ryba");
  if (text.includes("tuňák")) ingredients.push("tuňák");
  if (text.includes("krevety")) ingredients.push("krevety");
  if (text.includes("vejce") || text.includes("omeleta")) ingredients.push("vejce");
  if (text.includes("šunka")) ingredients.push("kvalitní šunka");
  if (text.includes("skyr")) ingredients.push("skyr");
  if (text.includes("tvaroh")) ingredients.push("tvaroh");
  if (text.includes("cottage")) ingredients.push("cottage");
  if (text.includes("palouček") || text.includes("čerstvý sýr")) ingredients.push("čerstvý sýr typu Palouček");
  if (text.includes("kefír")) ingredients.push("kefír");
  if (text.includes("mléko")) ingredients.push("mléko");
  if (text.includes("řecký jogurt")) ingredients.push("řecký jogurt");
  if (text.includes("pudding") || text.includes("pudink")) ingredients.push("high protein pudink");
  if (text.includes("protein")) ingredients.push("Nutrend Whey Protein");
  if (text.includes("rýže")) ingredients.push("rýže");
  if (text.includes("brambor") || text.includes("hranolky")) ingredients.push("brambory");
  if (text.includes("těstoviny")) ingredients.push("těstoviny");
  if (text.includes("kuskus")) ingredients.push("kuskus");
  if (text.includes("wrap") || text.includes("tortilla")) ingredients.push("wrap nebo tortilla");
  if (text.includes("kváskov")) ingredients.push("kváskový chléb");
  if (text.includes("celozrn")) ingredients.push("celozrnné pečivo");
  if (text.includes("sushi") || text.includes("poke")) ingredients.push("sushi rýže nebo rýže do poke", "losos/tuňák/krevety", "okurka", "sójová omáčka");
  if (text.includes("fazole") || text.includes("cizrna")) ingredients.push("fazole nebo cizrna");
  if (text.includes("rajč")) ingredients.push("rajčata nebo passata");
  if (text.includes("zelenin") || text.includes("salát")) ingredients.push("zelenina");
  if (text.includes("cuketa")) ingredients.push("cuketa");
  if (text.includes("okurka")) ingredients.push("okurka");
  if (text.includes("avokádo")) ingredients.push("avokádo");
  if (text.includes("žampiony")) ingredients.push("žampiony");
  if (text.includes("sýr") || text.includes("parmazán") || text.includes("mozzarella")) ingredients.push("sýr nebo parmazán");
  if (text.includes("jogurt") || text.includes("dip") || text.includes("dresink")) ingredients.push("bílý jogurt", "citron", "bylinky");
  if (text.includes("jahod")) ingredients.push("jahody");
  if (text.includes("borův")) ingredients.push("borůvky");
  if (text.includes("mango")) ingredients.push("mango");
  if (text.includes("mražené ovoce")) ingredients.push("mražené ovoce");
  if (text.includes("ovoce")) ingredients.push("ovoce");
  if (text.includes("kakao")) ingredients.push("kakao");
  if (text.includes("med")) ingredients.push("med");
  if (text.includes("džem")) ingredients.push("džem bez ořechů");
  if (text.includes("banán")) ingredients.push("banán");

  if (!ingredients.length) ingredients.push("hlavní bílkovina podle jídla", "příloha podle dne", "zelenina", "jogurtový dip");

  if (isRestaurant) {
    steps.push("Domácí varianta: zvol stejnou hlavní bílkovinu jako v restauraci a připrav ji grilovaně, na pánvi nebo v troubě.");
  }
  if (text.includes("pomalý hrnec")) {
    steps.push("Maso, rajčata a zeleninu dej do pomalého hrnce, osol, okořeň a nech táhnout několik hodin.");
  } else if (text.includes("crisp") || text.includes("brambor") || text.includes("hranolky")) {
    steps.push("Brambory nakrájej, lehce osol a připrav ve Whirlpool Crisp nebo horkovzdušné fritéze.");
  } else if (text.includes("smoothie") || text.includes("protein") || text.includes("skyr") || text.includes("tvaroh") || text.includes("kefír")) {
    steps.push("Mléčný základ smíchej nebo rozmixuj s ovocem a proteinem podle potřeby.");
  } else if (text.includes("omeleta") || text.includes("vejce")) {
    steps.push("Vejce připrav na pánvi se zeleninou, žampiony, sýrem nebo šunkou.");
  } else if (text.includes("těstoviny")) {
    steps.push("Uvař těstoviny, bílkovinu krátce opeč a promíchej s rajčatovým základem.");
  } else if (text.includes("bowl") || text.includes("rýže") || text.includes("kuskus")) {
    steps.push("Uvař přílohu, opeč bílkovinu a vše slož do bowl se zeleninou a jogurtovým dipem.");
  } else if (text.includes("sushi") || text.includes("poke")) {
    steps.push("Domácí varianta: připrav rýži, přidej rybu nebo krevety, okurku, zeleninu a lehké dochucení.");
  } else {
    steps.push("Připrav bílkovinu jednoduše na pánvi nebo v troubě, přidej přílohu a zeleninu.");
  }

  steps.push("Drž porci v jídelním okně 16:8 a bílkoviny počítej do denního cíle 120 až 150 g.");

  return {
    ingredients: [...new Set(ingredients)].join(", "),
    steps: steps.join(" ")
  };
}

function getRotationRecipes() {
  return mealRotationWeeks.flatMap((week, weekIndex) => week.meals.flatMap((dayMeals, dayIndex) => {
    const mealTypes = [
      ["lunch", "Oběd"],
      ["snack", "Svačina"],
      ["dinner", "Večeře"]
    ];
    return mealTypes.map(([key, label]) => {
      const meal = dayMeals[key];
      const details = inferRecipeDetails(meal, label);
      return [
        `T${weekIndex + 1} ${days[dayIndex].day} - ${label}: ${meal.name.replace("Restaurace: ", "")}`,
        `Rotace jídel - ${label}`,
        `${week.title}, ${days[dayIndex].day}. ${meal.note}`,
        details.ingredients,
        details.steps,
        `${meal.protein} g`
      ];
    });
  }));
}

function getAllRecipes() {
  return [...recipes, ...getRotationRecipes()];
}

const shoppingCategories = ["Vše", "Bílkoviny", "Mléčné", "Sacharidy a přílohy", "Ovoce", "Zelenina", "Luštěniny a konzervy", "Dochucení", "Rychlé záchrany", "Suplementy"];

const baseShoppingItems = [
  { id: "chicken-turkey", name: "Kuře nebo krůta", category: "Bílkoviny", amount: "1 až 2 kg", frequency: "týdně", note: "Bowl, rizoto, rýže se zeleninou, jídlo do práce." },
  { id: "salmon", name: "Losos", category: "Bílkoviny", amount: "2 porce", frequency: "týdně", note: "Středa nebo sobota, dobré i kvůli omega 3." },
  { id: "shrimp", name: "Krevety", category: "Bílkoviny", amount: "1 až 2 balení", frequency: "podle týdne", note: "Krevetové těstoviny, bowl, poke nebo domácí sushi varianta." },
  { id: "tuna", name: "Tuňák", category: "Bílkoviny", amount: "2 až 4 konzervy", frequency: "týdně", note: "Rychlé těstoviny, záchrana do práce." },
  { id: "beef", name: "Hovězí maso", category: "Bílkoviny", amount: "1 balení", frequency: "podle rotace", note: "Pomalý hrnec, maso na zelenině." },
  { id: "ground-beef", name: "Libovější hovězí mleté", category: "Bílkoviny", amount: "1 až 2 balení", frequency: "podle týdne", note: "Rajčatová omáčka, rýže, těstoviny, krabičky." },
  { id: "pork-tenderloin", name: "Vepřová panenka", category: "Bílkoviny", amount: "1 balení", frequency: "podle týdne", note: "Rychlá změna od kuřecího, dobrá k bramborám a zelenině." },
  { id: "eggs", name: "Vejce", category: "Bílkoviny", amount: "10 až 15 ks", frequency: "týdně", note: "Večeře, omeleta, salát, po fotbale." },
  { id: "ham", name: "Kvalitní šunka", category: "Bílkoviny", amount: "1 až 2 balení", frequency: "týdně", note: "Toast, kváskový chléb, rychlá večeře." },
  { id: "skyr", name: "Skyr", category: "Mléčné", amount: "4 až 6 ks", frequency: "týdně", note: "Svačina, sladká řízená varianta, doplnění bílkovin." },
  { id: "curd", name: "Tvaroh", category: "Mléčné", amount: "3 až 5 ks", frequency: "týdně", note: "Večeře po fotbale, kakao s ovocem, dip." },
  { id: "cottage", name: "Cottage", category: "Mléčné", amount: "2 až 4 ks", frequency: "týdně", note: "Kváskový chléb, svačina, večeře." },
  { id: "fresh-cheese", name: "Čerstvý sýr / Palouček", category: "Mléčné", amount: "2 až 4 ks", frequency: "týdně", note: "Pečivo, rychlá večeře, lehký základ místo pomazánek." },
  { id: "kefir", name: "Kefír", category: "Mléčné", amount: "2 až 4 lahve", frequency: "týdně", note: "Před fotbalem, smoothie, trávení." },
  { id: "milk", name: "Mléko", category: "Mléčné", amount: "2 až 4 l", frequency: "týdně", note: "Smoothie, protein, vaření. Vol podle tolerance a cíle." },
  { id: "yogurt", name: "Bílý jogurt", category: "Mléčné", amount: "1 velké balení", frequency: "týdně", note: "Dip, dresink, bowl." },
  { id: "greek-yogurt", name: "Řecký jogurt / high protein jogurt", category: "Mléčné", amount: "2 až 5 ks", frequency: "týdně", note: "Sladká řízená varianta, svačina, doplnění bílkovin." },
  { id: "protein-pudding", name: "High protein pudink", category: "Mléčné", amount: "2 až 4 ks", frequency: "podle chuti", note: "Rychlá sladká záchrana bez vaření." },
  { id: "mozzarella-feta", name: "Mozzarella nebo feta", category: "Mléčné", amount: "1 až 2 ks", frequency: "podle týdne", note: "Caprese, řecký salát, středomořské večeře." },
  { id: "grana-padano", name: "Grana Padano / parmazán", category: "Mléčné", amount: "1 ks", frequency: "průběžně", note: "Těstoviny, rizoto, saláty, dochucení bez těžké omáčky." },
  { id: "sourdough", name: "Kváskový chléb / pečivo", category: "Sacharidy a přílohy", amount: "1 až 2 ks", frequency: "týdně", note: "Večeře, toast před fotbalem." },
  { id: "wholegrain-pastry", name: "Celozrnné pečivo", category: "Sacharidy a přílohy", amount: "1 až 2 balení", frequency: "týdně", note: "Rychlá večeře, svačina, pečivo k salátu." },
  { id: "rice", name: "Rýže", category: "Sacharidy a přílohy", amount: "zásoba", frequency: "průběžně", note: "Kuře, bowl, pomalý hrnec." },
  { id: "sushi-rice", name: "Sushi rýže / poke rýže", category: "Sacharidy a přílohy", amount: "zásoba", frequency: "podle chuti", note: "Domácí sushi nebo poke bowl s lososem, tuňákem či krevetami." },
  { id: "pasta", name: "Těstoviny", category: "Sacharidy a přílohy", amount: "2 balení", frequency: "týdně", note: "Tuňák, losos, rajčatová omáčka." },
  { id: "potatoes", name: "Brambory", category: "Sacharidy a přílohy", amount: "2 až 3 kg", frequency: "týdně", note: "Americké brambory, hranolky, příloha." },
  { id: "couscous", name: "Kuskus", category: "Sacharidy a přílohy", amount: "1 balení", frequency: "průběžně", note: "Rychlá bowl varianta." },
  { id: "gnocchi", name: "Gnocchi", category: "Sacharidy a přílohy", amount: "1 balení", frequency: "podle chuti", note: "Rychlá pánev s kuřecím, rajčaty nebo zeleninou." },
  { id: "bananas", name: "Banány", category: "Ovoce", amount: "5 až 7 ks", frequency: "týdně", note: "Před fotbalem, rychlá energie." },
  { id: "berries", name: "Jahody / borůvky", category: "Ovoce", amount: "mražené nebo čerstvé", frequency: "týdně", note: "Protein, skyr, tvaroh, sladké chutě." },
  { id: "frozen-fruit", name: "Mražené ovoce do smoothie", category: "Ovoce", amount: "2 až 4 sáčky", frequency: "průběžně", note: "Jahody, borůvky, mango. Proteinové smoothie a zmrzlina." },
  { id: "mango", name: "Mango", category: "Ovoce", amount: "mražené", frequency: "průběžně", note: "Smoothie, proteinová zmrzlina." },
  { id: "apples", name: "Jablka nebo sezónní ovoce", category: "Ovoce", amount: "5 ks", frequency: "týdně", note: "Svačina, skyr, tvaroh." },
  { id: "leafy", name: "Listový salát", category: "Zelenina", amount: "1 až 2 balení", frequency: "týdně", note: "Čtvrteční salát, bowl, večeře." },
  { id: "tomatoes", name: "Rajčata", category: "Zelenina", amount: "1 balení", frequency: "týdně", note: "Těstoviny, saláty, omeleta." },
  { id: "cucumber", name: "Okurka", category: "Zelenina", amount: "1 až 2 ks", frequency: "týdně", note: "Večeře, chléb, saláty." },
  { id: "zucchini", name: "Cuketa", category: "Zelenina", amount: "2 až 4 ks", frequency: "týdně", note: "Pánev, příloha, fritéza, těstoviny." },
  { id: "radishes", name: "Ředkvičky", category: "Zelenina", amount: "1 svazek", frequency: "podle chuti", note: "Pečivo, salát, rychlá křupavá zelenina." },
  { id: "avocado", name: "Avokádo", category: "Zelenina", amount: "1 až 2 ks", frequency: "podle týdne", note: "Salát, pečivo, bowl. Hlídá se porce kvůli energii." },
  { id: "frozen-veg", name: "Mražená zelenina", category: "Zelenina", amount: "2 balení", frequency: "týdně", note: "Rizoto, rychlá příloha, záchrana." },
  { id: "root-veg", name: "Kořenová zelenina", category: "Zelenina", amount: "1 balení", frequency: "týdně", note: "Pomalý hrnec, vývar, maso na zelenině." },
  { id: "mushrooms", name: "Žampiony", category: "Zelenina", amount: "1 balení", frequency: "podle týdne", note: "Omeleta, jediná houbová varianta, kterou chceš v plánu." },
  { id: "beans-chickpeas", name: "Fazole / cizrna v konzervě", category: "Luštěniny a konzervy", amount: "2 až 4 konzervy", frequency: "průběžně", note: "Tuňákový salát, rychlá bowl, záloha do práce." },
  { id: "lentils", name: "Čočka / červená čočka", category: "Luštěniny a konzervy", amount: "zásoba", frequency: "průběžně", note: "Rychlá polévka, omáčka, příloha s vyšší sytostí." },
  { id: "canned-tomatoes", name: "Krájená rajčata v konzervě", category: "Luštěniny a konzervy", amount: "2 až 4 ks", frequency: "průběžně", note: "Mleté hovězí, těstoviny, pomalý hrnec." },
  { id: "tomato-paste", name: "Rajčatový protlak", category: "Luštěniny a konzervy", amount: "1 až 2 ks", frequency: "průběžně", note: "Zahuštění rajčatové omáčky bez smetany." },
  { id: "parmesan-cheese", name: "Parmazán / tvrdý sýr", category: "Dochucení", amount: "1 ks", frequency: "průběžně", note: "Těstoviny, rizoto, wrap." },
  { id: "olive-oil", name: "Olivový olej", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Středomořská kuchyně, saláty, ryby, krevety." },
  { id: "lemon", name: "Citron", category: "Dochucení", amount: "2 až 4 ks", frequency: "týdně", note: "Jogurtové dipy, ryby, krevety, saláty." },
  { id: "herbs", name: "Bylinky", category: "Dochucení", amount: "čerstvé nebo sušené", frequency: "průběžně", note: "Jogurtový dip, ryby, brambory, saláty." },
  { id: "soy-sauce", name: "Sójová omáčka", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Sushi a poke varianta." },
  { id: "cocoa", name: "Kakao", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Tvaroh s kakaem místo náhodného sladkého." },
  { id: "honey", name: "Med", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Malé množství do skyru nebo tvarohu." },
  { id: "cinnamon", name: "Skořice", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Kefír, ovoce, tvaroh." },
  { id: "mustard", name: "Hořčice", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Jogurtový dip, maso, pečivo." },
  { id: "pickles", name: "Okurky / nakládaná zelenina", category: "Dochucení", amount: "1 sklenice", frequency: "průběžně", note: "K pečivu, salátu, rychlé večeři." },
  { id: "jam", name: "Džem / ochucený med", category: "Dochucení", amount: "1 ks", frequency: "podle chuti", note: "Řízené sladké do jogurtu nebo tvarohu. Bez ořechů." },
  { id: "tomato-passata", name: "Rajčatová passata", category: "Rychlé záchrany", amount: "2 ks", frequency: "týdně", note: "Těstoviny, pomalý hrnec, rychlá omáčka." },
  { id: "wraps", name: "Wrapy", category: "Rychlé záchrany", amount: "1 balení", frequency: "týdně", note: "Krůtí wrap, rychlý oběd." },
  { id: "protein-powder", name: "Nutrend Whey Protein", category: "Suplementy", amount: "hlídat zásobu", frequency: "průběžně", note: "Smoothie, dorovnání bílkovin, po tréninku." },
  { id: "electrolytes-stock", name: "Elektrolyty", category: "Suplementy", amount: "hlídat zásobu", frequency: "průběžně", note: "Fotbal, delší běh/kolo, horko." }
];

const supplementGoals = ["Vše", "Denní základ", "Výkon", "Regenerace", "Spánek a stres", "Klouby", "Volitelné"];

const supplements = [
  {
    id: "creatine",
    name: "Kreatin",
    category: "Denní základ",
    goals: ["Denní základ", "Výkon"],
    active: true,
    dosage: "5",
    unit: "g",
    frequency: "denně",
    timing: "Po tréninku nebo s obědem",
    foodLink: "Může být s jídlem",
    trainingLink: "Užívat i v netréninkové dny",
    note: "Není potřeba cyklovat. Důležitá je pravidelnost.",
    warning: "",
    priority: 1,
    optional: false
  },
  {
    id: "omega3",
    name: "Omega 3",
    category: "Denní základ",
    goals: ["Denní základ", "Regenerace", "Klouby"],
    active: true,
    dosage: "dle etikety",
    unit: "",
    frequency: "denně",
    timing: "Oběd nebo hlavní jídlo",
    foodLink: "S jídlem obsahujícím tuk",
    trainingLink: "Podpora regenerace",
    note: "Dobré zařadit k prvnímu většímu jídlu dne.",
    warning: "Hlídat souběh s produkty obsahujícími vitamin D nebo vitamin A.",
    priority: 2,
    optional: false
  },
  {
    id: "d3k2",
    name: "Vitamin D3 + K2",
    category: "Denní základ",
    goals: ["Denní základ"],
    active: true,
    dosage: "5000 IU + 150",
    unit: "mcg K2",
    frequency: "obden",
    timing: "Oběd nebo hlavní jídlo",
    foodLink: "S jídlem obsahujícím tuk",
    trainingLink: "Nepřímo přes zdraví a regeneraci",
    note: "Režim obden je v aplikaci záměrně jako opatrnější výchozí nastavení.",
    warning: "Neužívat dlouhodobě bezhlavě bez kontroly krevních hodnot.",
    priority: 2,
    optional: false
  },
  {
    id: "vitamin-c",
    name: "Vitamin C",
    category: "Regenerace",
    goals: ["Denní základ", "Regenerace", "Klouby"],
    active: true,
    dosage: "dle etikety",
    unit: "",
    frequency: "denně",
    timing: "Oběd",
    foodLink: "Vhodné k jídlu",
    trainingLink: "Podpora imunity a regenerace",
    note: "Ideálně liposomální varianta, pokud ti sedí.",
    warning: "",
    priority: 3,
    optional: false
  },
  {
    id: "b-complex",
    name: "B komplex",
    category: "Denní základ",
    goals: ["Denní základ"],
    active: true,
    dosage: "dle etikety",
    unit: "",
    frequency: "ráno nebo dopoledne",
    timing: "Oběd / první jídlo",
    foodLink: "S jídlem",
    trainingLink: "Podpora energie, ne stimulant",
    note: "Pokud by zhoršoval spánek, neposouvat na večer.",
    warning: "U dlouhodobého užívání dává smysl kontrola B12 a dalších hodnot.",
    priority: 4,
    optional: false
  },
  {
    id: "magnesium-performance",
    name: "Hořčík na výkon",
    category: "Výkon",
    goals: ["Denní základ", "Výkon"],
    active: true,
    dosage: "dle etikety",
    unit: "mg",
    frequency: "podle tréninku",
    timing: "Oběd nebo odpoledne",
    foodLink: "S jídlem, pokud dráždí žaludek",
    trainingLink: "Vhodný v tréninkové dny",
    note: "Eviduj odděleně od večerního hořčíku.",
    warning: "Více druhů hořčíku se sčítá.",
    priority: 5,
    optional: false
  },
  {
    id: "magnesium-sleep",
    name: "Hořčík na spánek",
    category: "Spánek a stres",
    goals: ["Denní základ", "Regenerace", "Spánek a stres"],
    active: true,
    dosage: "dle etikety",
    unit: "mg",
    frequency: "večer",
    timing: "Večer",
    foodLink: "Spíš mimo calcium a zinek",
    trainingLink: "Zvýraznit po náročnějších dnech",
    note: "Večer preferuj variantu, která ti sedí na zklidnění.",
    warning: "Sčítá se s ostatními typy hořčíku.",
    priority: 1,
    optional: false
  },
  {
    id: "zinc",
    name: "Zinek",
    category: "Denní základ",
    goals: ["Denní základ"],
    active: true,
    dosage: "dle etikety",
    unit: "mg",
    frequency: "denně nebo dle potřeby",
    timing: "Oběd",
    foodLink: "S jídlem",
    trainingLink: "Nepřímá podpora režimu",
    note: "Pokud nesedí žaludku, neber nalačno.",
    warning: "Nedávat ideálně současně s větší dávkou calcia nebo hořčíku.",
    priority: 5,
    optional: false
  },
  {
    id: "probiotics",
    name: "Probiotika s vlákninou",
    category: "Denní základ",
    goals: ["Denní základ", "Regenerace"],
    active: true,
    dosage: "dle návodu",
    unit: "",
    frequency: "dle návodu",
    timing: "Oběd nebo podle etikety",
    foodLink: "Podle návodu produktu",
    trainingLink: "Podpora trávení",
    note: "Zařazeno hlavně pro trávení a pravidelnost.",
    warning: "",
    priority: 5,
    optional: false
  },
  {
    id: "calcium",
    name: "Calcium",
    category: "Denní základ",
    goals: ["Denní základ"],
    active: true,
    dosage: "dle etikety",
    unit: "mg",
    frequency: "podle potřeby",
    timing: "S jídlem mimo zinek/hořčík",
    foodLink: "S jídlem",
    trainingLink: "Nepřímá podpora",
    note: "Nedávat automaticky ke každému minerálu najednou.",
    warning: "Calcium, hořčík a zinek mohou soupeřit ve vstřebávání.",
    priority: 6,
    optional: false
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    category: "Spánek a stres",
    goals: ["Regenerace", "Spánek a stres"],
    active: true,
    dosage: "dle etikety",
    unit: "",
    frequency: "večer podle tolerance",
    timing: "Večer",
    foodLink: "S večerním jídlem nebo po něm",
    trainingLink: "Zklidnění po náročnějším dni",
    note: "Nech vypnutelnou podle tolerance a subjektivní odezvy.",
    warning: "Pokud nesedí náladě, trávení nebo spánku, vypnout.",
    priority: 4,
    optional: false
  },
  {
    id: "protein",
    name: "Protein",
    category: "Výkon",
    goals: ["Denní základ", "Výkon", "Regenerace"],
    active: true,
    dosage: "1 až 2",
    unit: "odměrky podle potřeby",
    frequency: "podle příjmu bílkovin",
    timing: "Po tréninku nebo v jídelním okně",
    foodLink: "Počítat do denních 120 až 150 g bílkovin",
    trainingLink: "Vhodný po tréninku",
    note: "Není povinný každý den. Je to nástroj pro dorovnání bílkovin.",
    warning: "",
    priority: 3,
    optional: false
  },
  {
    id: "electrolytes",
    name: "Elektrolyty",
    category: "Výkon",
    goals: ["Výkon"],
    active: true,
    dosage: "dle pocení",
    unit: "",
    frequency: "při delší aktivitě nebo horku",
    timing: "Před nebo během delší aktivity",
    foodLink: "Není nutné vázat na jídlo",
    trainingLink: "Do 1 h většinou voda, 1 až 3 h dle pocení, nad 3 h cíleně hlídat.",
    note: "U fotbalu, delšího běhu, kola a horka zvaž cíleně.",
    warning: "",
    priority: 2,
    optional: false
  },
  {
    id: "msm",
    name: "MSM",
    category: "Klouby",
    goals: ["Klouby", "Volitelné"],
    active: false,
    dosage: "volitelně",
    unit: "",
    frequency: "podle potřeby",
    timing: "S jídlem",
    foodLink: "S jídlem",
    trainingLink: "Volitelné pro klouby a dlouhodobou prevenci",
    note: "Vedené jako volitelný doplněk, ne aktivní denní suplementace.",
    warning: "",
    priority: 8,
    optional: true
  },
  {
    id: "glucosamine-chondroitin",
    name: "Glukosamin + chondroitin",
    category: "Klouby",
    goals: ["Klouby", "Volitelné"],
    active: false,
    dosage: "volitelně",
    unit: "",
    frequency: "podle potřeby",
    timing: "S jídlem",
    foodLink: "S jídlem",
    trainingLink: "Volitelné pro klouby",
    note: "Jen jako evidence možnosti, ne denní základ.",
    warning: "",
    priority: 8,
    optional: true
  },
  {
    id: "curcumin",
    name: "Kurkumin",
    category: "Klouby",
    goals: ["Klouby", "Volitelné"],
    active: false,
    dosage: "volitelně",
    unit: "",
    frequency: "podle potřeby",
    timing: "S jídlem",
    foodLink: "Často lépe s tukem podle produktu",
    trainingLink: "Volitelně při větší zátěži",
    note: "Není aktivní denní suplementace.",
    warning: "",
    priority: 8,
    optional: true
  }
];

const storageKey = "tomasCheckinsV2";
const mealWeekKey = "tomasMealWeekV1";
const supplementSettingsKey = "tomasSupplementSettingsV2";
const supplementLogKey = "tomasSupplementLogV2";
const supplementVisibilityKey = "tomasSupplementVisibilityV2";
const shoppingStateKey = "tomasShoppingStateV2";
const customShoppingKey = "tomasCustomShoppingV2";
const $ = (selector) => document.querySelector(selector);

function renderMetrics() {
  $("#metrics").innerHTML = metrics.map(([name, value, text]) => `
    <article class="metric-card">
      <span>${name}</span>
      <strong>${value}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function parseDurationToMinutes(value) {
  const match = value.match(/(\d+)\s*h\s*(\d+)?/);
  if (!match) return 0;
  return Number(match[1]) * 60 + Number(match[2] || 0);
}

function minutesToSleepLabel(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return `${hours} h ${mins} min`;
}

function getCurrentWeeklyValues() {
  const report = garminReports[0];
  return {
    sleepMinutes: parseDurationToMinutes(report.weekly.avgSleep),
    hrv: report.weekly.hrvSevenDayLatest,
    heartRate: report.weekly.avgHeartRate,
    stress: report.weekly.avgStress,
    stepsAverage: report.weekly.stepsAverage,
    bodyBatteryHigh: report.weekly.avgBodyBatteryHigh,
    spo2: report.weekly.avgSpo2
  };
}

function getPreviousWeeklyValues() {
  const previousReport = garminReports[1];
  if (!previousReport) return comparisonBaseline;
  return {
    label: previousReport.period,
    source: "Srovnání je proti minulému nahranému týdnu.",
    values: {
      sleepMinutes: parseDurationToMinutes(previousReport.weekly.avgSleep),
      hrv: previousReport.weekly.hrvSevenDayLatest,
      heartRate: previousReport.weekly.avgHeartRate,
      stress: previousReport.weekly.avgStress,
      stepsAverage: previousReport.weekly.stepsAverage,
      bodyBatteryHigh: previousReport.weekly.avgBodyBatteryHigh,
      spo2: previousReport.weekly.avgSpo2
    }
  };
}

function comparisonText(metric, current, previous) {
  const diff = current - previous;
  const abs = Math.abs(diff);
  if (abs < 0.1) return "beze změny";
  const direction = diff > 0 ? "nahoru" : "dolů";
  if (metric === "Spánek") return `${direction} o ${Math.round(abs)} min`;
  if (metric === "Kroky") return `${direction} o ${formatNumber(Math.round(abs))} kroků/den`;
  if (metric === "SpO2") return `${direction} o ${abs.toFixed(0)} p. b.`;
  return `${direction} o ${abs.toFixed(0)}`;
}

function metricValueLabel(metric, value) {
  if (metric === "Spánek") return minutesToSleepLabel(value);
  if (metric === "Kroky") return `${formatNumber(value)} / den`;
  if (metric === "SpO2") return `${value} %`;
  if (metric === "HRV") return `${value} ms`;
  if (metric === "Tep") return `${value} bpm`;
  return String(value);
}

function renderWeeklyComparison() {
  const intro = $("#weeklyComparisonIntro");
  const cards = $("#weeklyComparisonCards");
  if (!intro || !cards) return;
  const current = getCurrentWeeklyValues();
  const previous = getPreviousWeeklyValues();
  const report = garminReports[0];
  const comparisons = [
    { name: "Spánek", key: "sleepMinutes", goodDirection: 1, note: "Cíl zůstává 7 h 45 min až 8 h." },
    { name: "HRV", key: "hrv", goodDirection: 1, note: "Stabilita je důležitější než rekord." },
    { name: "Tep", key: "heartRate", goodDirection: -1, note: "Nižší trend bývá dobrý signál regenerace." },
    { name: "Stres", key: "stress", goodDirection: -1, note: "Nižší stres podporuje HRV i spánek." },
    { name: "Kroky", key: "stepsAverage", goodDirection: 1, note: "Pozor jen na čtvrteční regenerační strop." },
    { name: "Body Battery", key: "bodyBatteryHigh", goodDirection: 1, note: "Ber jako orientaci ranního dobití." },
    { name: "SpO2", key: "spo2", goodDirection: 1, note: "Spíš kontrolka než výkonová metrika." }
  ];

  intro.textContent = `${report.period}. ${previous.source}`;
  cards.innerHTML = comparisons.map((item) => {
    const now = current[item.key];
    const before = previous.values[item.key];
    const diff = now - before;
    const tone = Math.abs(diff) < 0.1 ? "neutral" : diff * item.goodDirection > 0 ? "good" : "warn";
    return `
      <article class="metric-card comparison-card">
        <span>${item.name}</span>
        <strong>${metricValueLabel(item.name, now)}</strong>
        <p><b>Proti ${previous.label}:</b> ${comparisonText(item.name, now, before)}.</p>
        <p class="comparison-note ${tone}">${item.note}</p>
      </article>
    `;
  }).join("");
  drawWeeklyComparisonChart(comparisons, current, previous.values);
}

function drawWeeklyComparisonChart(comparisons, current, previous) {
  const canvas = $("#weeklyComparisonChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#dbe7f5";
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    const y = 42 + i * 52;
    ctx.beginPath();
    ctx.moveTo(42, y);
    ctx.lineTo(width - 24, y);
    ctx.stroke();
  }

  const chart = comparisons.map((item) => {
    const now = current[item.key];
    const before = previous[item.key];
    const diffPercent = before ? ((now - before) / before) * 100 : 0;
    return { ...item, diffPercent };
  });
  const maxAbs = Math.max(5, ...chart.map((item) => Math.abs(item.diffPercent)));
  const zeroY = Math.round(height / 2);
  const usableHeight = height - 92;
  const barWidth = Math.min(58, (width - 96) / chart.length - 16);

  ctx.strokeStyle = "#8ba5c8";
  ctx.beginPath();
  ctx.moveTo(42, zeroY);
  ctx.lineTo(width - 24, zeroY);
  ctx.stroke();

  chart.forEach((item, index) => {
    const x = 54 + index * ((width - 100) / chart.length);
    const barHeight = Math.max(3, Math.abs(item.diffPercent) / maxAbs * (usableHeight / 2));
    const positive = item.diffPercent >= 0;
    const y = positive ? zeroY - barHeight : zeroY;
    ctx.fillStyle = item.diffPercent * item.goodDirection >= 0 ? "#1267d8" : "#df842c";
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "#0a1f3b";
    ctx.font = "700 13px system-ui";
    ctx.fillText(`${item.diffPercent > 0 ? "+" : ""}${item.diffPercent.toFixed(0)}%`, x, positive ? y - 8 : y + barHeight + 18);
    ctx.fillStyle = "#5c6a7f";
    ctx.font = "12px system-ui";
    ctx.fillText(item.name, x - 2, height - 22);
  });
}

function renderDayTabs() {
  $("#dayTabs").innerHTML = days.map((item, index) => `
    <button class="tab ${index === 0 ? "active" : ""}" type="button" data-day="${index}">${item.day}</button>
  `).join("");
  $("#dayTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderDay(Number(button.dataset.day));
  });
  renderDay(0);
}

function getAutoMealWeekIndex() {
  const start = new Date("2026-05-18T00:00:00");
  const now = new Date();
  const diffDays = Math.floor((now - start) / 86400000);
  const week = Math.floor(Math.max(diffDays, 0) / 7);
  return week % mealRotationWeeks.length;
}

function getSelectedMealWeekIndex() {
  const saved = localStorage.getItem(mealWeekKey);
  if (saved === null) return getAutoMealWeekIndex();
  const parsed = Number(saved);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed >= mealRotationWeeks.length) {
    localStorage.removeItem(mealWeekKey);
    return getAutoMealWeekIndex();
  }
  return parsed;
}

function getMealForDay(dayIndex) {
  return mealRotationWeeks[getSelectedMealWeekIndex()].meals[dayIndex];
}

function proteinClass(protein) {
  if (protein >= 45) return "protein-high";
  if (protein >= 30) return "protein-mid";
  return "protein-low";
}

function proteinBadge(protein) {
  return `<span class="protein-badge ${proteinClass(protein)}">${protein} g bílkovin</span>`;
}

function renderMealWeekSelect() {
  const selected = getSelectedMealWeekIndex();
  $("#mealWeekSelect").innerHTML = mealRotationWeeks.map((week, index) => `
    <option value="${index}" ${index === selected ? "selected" : ""}>${week.title}</option>
  `).join("");
  $("#mealWeekSummary").textContent = mealRotationWeeks[selected].focus;
}

function bindMealWeekSelect() {
  $("#mealWeekSelect").addEventListener("change", (event) => {
    localStorage.setItem(mealWeekKey, event.target.value);
    renderMealWeekSelect();
    renderMeals();
    renderNextWeekShoppingList();
    const activeDay = document.querySelector(".tab.active");
    renderDay(Number(activeDay?.dataset.day || 0));
  });
}

function renderDay(index) {
  const item = days[index];
  const meal = getMealForDay(index);
  $("#dayDetail").innerHTML = `
    <section>
      <div class="day-meta">
        <span class="pill ${item.type}">${item.label}</span>
        ${item.type === "football" ? '<span class="pill alert">Počítat jako tvrdý trénink</span>' : ""}
      </div>
      <h3>${item.day}</h3>
      <p>${item.training}</p>
      <div class="focus-box"><strong>Cíl dne:</strong> ${item.goal}</div>
    </section>
    <aside>
      <h3>Jídlo</h3>
      <p><b>Oběd:</b> ${meal.lunch.name} ${proteinBadge(meal.lunch.protein)}<br><small>${meal.lunch.note}</small></p>
      <p><b>Svačina:</b> ${meal.snack.name} ${proteinBadge(meal.snack.protein)}<br><small>${meal.snack.note}</small></p>
      <p><b>Večeře:</b> ${meal.dinner.name} ${proteinBadge(meal.dinner.protein)}<br><small>${meal.dinner.note}</small></p>
      <p>${item.note}</p>
    </aside>
  `;
}

function renderMeals() {
  $("#mealGrid").innerHTML = days.map((item, index) => `
    <article class="meal-card">
      <span class="pill ${item.type}">${item.day}</span>
      <h3>${item.label}</h3>
      ${renderMealBlock(getMealForDay(index).lunch, "Oběd")}
      ${renderMealBlock(getMealForDay(index).snack, "Svačina")}
      ${renderMealBlock(getMealForDay(index).dinner, "Večeře")}
    </article>
  `).join("");
}

function renderMealBlock(meal, label) {
  return `
    <div class="meal-line">
      <div><b>${label}:</b> ${meal.name}</div>
      ${proteinBadge(meal.protein)}
      <small>${meal.note}</small>
    </div>
  `;
}

function renderRecipes(active = "Vše") {
  const allRecipes = getAllRecipes();
  const categories = ["Vše", ...new Set(allRecipes.map((recipe) => recipe[1]))];
  $("#recipeFilters").innerHTML = categories.map((category) => `
    <button class="filter ${category === active ? "active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");
  const visible = active === "Vše" ? allRecipes : allRecipes.filter((recipe) => recipe[1] === active);
  $("#recipeGrid").innerHTML = visible.map(([name, category, when, ingredients, steps, protein]) => `
    <article class="recipe-card">
      <span class="pill neutral">${category}</span>
      <h3>${name}</h3>
      <p><b>Kdy se hodí:</b> ${when}</p>
      <p><b>Suroviny:</b> ${ingredients}</p>
      <p><b>Postup:</b> ${steps}</p>
      <p><b>Bílkoviny:</b> <span class="protein-badge ${proteinClass(parseInt(protein, 10) || 0)}">${protein}</span></p>
    </article>
  `).join("");
}

function bindRecipeFilters() {
  $("#recipeFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) renderRecipes(button.dataset.category);
  });
}

function getShoppingState() {
  return JSON.parse(localStorage.getItem(shoppingStateKey) || "{}");
}

function saveShoppingState(state) {
  localStorage.setItem(shoppingStateKey, JSON.stringify(state));
}

function getCustomShoppingItems() {
  return JSON.parse(localStorage.getItem(customShoppingKey) || "[]");
}

function saveCustomShoppingItems(items) {
  localStorage.setItem(customShoppingKey, JSON.stringify(items));
}

function getShoppingItems() {
  return [...baseShoppingItems, ...getCustomShoppingItems()];
}

function renderShoppingFilters(active = "Vše") {
  $("#shoppingFilters").innerHTML = shoppingCategories.map((category) => `
    <button class="filter ${category === active ? "active" : ""}" type="button" data-shopping-category="${category}">${category}</button>
  `).join("");
  renderShoppingList(active);
}

function renderShoppingList(active = "Vše") {
  const state = getShoppingState();
  const items = getShoppingItems().filter((item) => active === "Vše" || item.category === active);
  const boughtCount = items.filter((item) => state[item.id]).length;
  $("#shoppingSummary").textContent = `${boughtCount}/${items.length} položek odškrtnuto. Pravidelný nákup drží jídelníček jednodušší.`;
  $("#shoppingList").innerHTML = shoppingCategories
    .filter((category) => category !== "Vše")
    .map((category) => {
      const categoryItems = items.filter((item) => item.category === category);
      if (!categoryItems.length) return "";
      return `
        <section class="shopping-category">
          <h3>${category}</h3>
          <div>
            ${categoryItems.map((item) => `
              <label class="shopping-item ${state[item.id] ? "done" : ""}">
                <input type="checkbox" data-shopping-id="${item.id}" ${state[item.id] ? "checked" : ""} />
                <span>
                  <strong>${item.name}</strong>
                  <small>${item.amount || "dle potřeby"} · ${item.frequency || "průběžně"}</small>
                  <em>${item.note || ""}</em>
                </span>
              </label>
            `).join("")}
          </div>
        </section>
      `;
    }).join("");
}

const mealIngredientRules = [
  ["chicken-turkey", ["kuř", "krůt"]],
  ["beef", ["hověz"]],
  ["ground-beef", ["mleté"]],
  ["pork-tenderloin", ["panenka"]],
  ["salmon", ["losos", "ryba"]],
  ["shrimp", ["krevet"]],
  ["tuna", ["tuňák"]],
  ["eggs", ["vejce", "omelet"]],
  ["ham", ["šunk"]],
  ["skyr", ["skyr"]],
  ["curd", ["tvaroh"]],
  ["cottage", ["cottage"]],
  ["fresh-cheese", ["palouček", "čerstvý sýr"]],
  ["kefir", ["kefír", "kefir"]],
  ["milk", ["mléko"]],
  ["greek-yogurt", ["řecký jogurt", "high protein jogurt"]],
  ["protein-pudding", ["pudding", "pudink"]],
  ["yogurt", ["jogurt", "dip", "dresink"]],
  ["mozzarella-feta", ["mozzarella", "feta", "řecký salát", "sýr"]],
  ["grana-padano", ["grana", "parmazán"]],
  ["sourdough", ["kváskov", "toast"]],
  ["wholegrain-pastry", ["celozrn"]],
  ["rice", ["rýže", "rizoto", "bowl"]],
  ["sushi-rice", ["sushi", "poke"]],
  ["pasta", ["těstovin"]],
  ["potatoes", ["brambor", "hranol"]],
  ["couscous", ["kuskus"]],
  ["gnocchi", ["gnocchi"]],
  ["wraps", ["wrap", "tortilla"]],
  ["bananas", ["banán"]],
  ["berries", ["jahod", "borůvk", "ovoce"]],
  ["frozen-fruit", ["mražené ovoce", "smoothie", "zmrzlina"]],
  ["mango", ["mango"]],
  ["apples", ["sezónní ovoce", "jabl"]],
  ["leafy", ["salát", "zelenina"]],
  ["tomatoes", ["rajč"]],
  ["cucumber", ["okurk", "sushi", "poke"]],
  ["zucchini", ["cuketa"]],
  ["radishes", ["ředkvič"]],
  ["avocado", ["avokádo"]],
  ["frozen-veg", ["hrášek", "mražen"]],
  ["root-veg", ["kořenová", "vývar"]],
  ["mushrooms", ["žampion"]],
  ["beans-chickpeas", ["fazole", "cizrna"]],
  ["lentils", ["čočka", "červená čočka"]],
  ["canned-tomatoes", ["krájená rajčata", "rajčata v konzervě"]],
  ["tomato-paste", ["protlak"]],
  ["parmesan-cheese", ["parmazán", "tvrdý sýr"]],
  ["olive-oil", ["středomoř", "oliv", "losos", "krevet", "salát"]],
  ["lemon", ["citron", "losos", "krevet", "dip"]],
  ["herbs", ["bylink", "dip", "dresink"]],
  ["soy-sauce", ["sushi", "poke"]],
  ["cocoa", ["kakao"]],
  ["honey", ["med"]],
  ["jam", ["džem"]],
  ["mustard", ["hořčic"]],
  ["pickles", ["nakládan", "okurky"]],
  ["cinnamon", ["skořic"]],
  ["tomato-passata", ["rajčatová omáčka", "passata", "rajčaty"]],
  ["protein-powder", ["protein"]],
  ["electrolytes-stock", ["fotbal", "zóna 2", "běh", "kolo"]]
];

function mealTextForIngredients(meal) {
  return `${meal.name} ${meal.note || ""}`.toLowerCase();
}

function getIngredientIdsForMeal(meal) {
  const text = mealTextForIngredients(meal);
  return mealIngredientRules
    .filter(([, tokens]) => tokens.some((token) => text.includes(token)))
    .map(([id]) => id);
}

function getNextMealWeekIndex() {
  return (getSelectedMealWeekIndex() + 1) % mealRotationWeeks.length;
}

function buildNextWeekShoppingList() {
  const weekIndex = getNextMealWeekIndex();
  const week = mealRotationWeeks[weekIndex];
  const catalog = new Map(baseShoppingItems.map((item) => [item.id, item]));
  const usage = new Map();
  const mealLabels = { lunch: "oběd", snack: "svačina", dinner: "večeře" };

  week.meals.forEach((dayMeals, dayIndex) => {
    Object.entries(dayMeals).forEach(([mealType, meal]) => {
      getIngredientIdsForMeal(meal).forEach((id) => {
        if (!catalog.has(id)) return;
        const current = usage.get(id) || { ...catalog.get(id), count: 0, uses: [] };
        current.count += 1;
        current.uses.push(`${days[dayIndex].day} ${mealLabels[mealType]}: ${meal.name.replace("Restaurace: ", "")}`);
        usage.set(id, current);
      });
    });
  });

  const items = [...usage.values()].sort((a, b) => {
    const categoryOrder = shoppingCategories.indexOf(a.category) - shoppingCategories.indexOf(b.category);
    return categoryOrder || b.count - a.count || a.name.localeCompare(b.name, "cs");
  });

  return { week, items };
}

function renderNextWeekShoppingList() {
  const target = $("#nextWeekShoppingList");
  const summary = $("#nextShoppingSummary");
  if (!target || !summary) return;

  const { week, items } = buildNextWeekShoppingList();
  summary.textContent = `${week.title}. Vygenerováno z obědů, svačin a večeří v rotaci.`;

  target.innerHTML = shoppingCategories
    .filter((category) => category !== "Vše")
    .map((category) => {
      const categoryItems = items.filter((item) => item.category === category);
      if (!categoryItems.length) return "";
      return `
        <section class="next-shopping-category">
          <h4>${category}</h4>
          <div>
            ${categoryItems.map((item) => `
              <article class="next-shopping-item">
                <div>
                  <strong>${item.name}</strong>
                  <small>${item.amount || "dle potřeby"} · ${item.frequency || "průběžně"} · ${item.count}× v plánu</small>
                </div>
                <p>${item.note || ""}</p>
                <em>${item.uses.slice(0, 2).join("<br>")}${item.uses.length > 2 ? "<br>+ další jídla v týdnu" : ""}</em>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    }).join("");
}

function initShopping() {
  const categorySelect = $("#shoppingForm select[name='category']");
  categorySelect.innerHTML = shoppingCategories
    .filter((category) => category !== "Vše")
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");

  renderShoppingFilters();
  renderNextWeekShoppingList();
  $("#shoppingFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) renderShoppingFilters(button.dataset.shoppingCategory);
  });
  $("#shoppingList").addEventListener("change", (event) => {
    const input = event.target.closest("input[data-shopping-id]");
    if (!input) return;
    const state = getShoppingState();
    state[input.dataset.shoppingId] = input.checked;
    saveShoppingState(state);
    const activeFilter = $("#shoppingFilters .active")?.dataset.shoppingCategory || "Vše";
    renderShoppingList(activeFilter);
  });
  $("#clearShopping").addEventListener("click", () => {
    localStorage.removeItem(shoppingStateKey);
    const activeFilter = $("#shoppingFilters .active")?.dataset.shoppingCategory || "Vše";
    renderShoppingList(activeFilter);
  });
  $("#shoppingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const item = Object.fromEntries(data.entries());
    const customItems = getCustomShoppingItems();
    customItems.push({
      id: `custom-${Date.now()}`,
      name: item.name,
      category: item.category,
      amount: item.amount || "dle potřeby",
      frequency: "podle potřeby",
      note: item.note || "Vlastní položka"
    });
    saveCustomShoppingItems(customItems);
    form.reset();
    categorySelect.value = item.category;
    renderShoppingFilters(item.category);
  });
}

function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}

function getSupplementSettings() {
  return JSON.parse(localStorage.getItem(supplementSettingsKey) || "{}");
}

function saveSupplementSettings(settings) {
  localStorage.setItem(supplementSettingsKey, JSON.stringify(settings));
}

function getSupplementLog() {
  return JSON.parse(localStorage.getItem(supplementLogKey) || "{}");
}

function saveSupplementLog(log) {
  localStorage.setItem(supplementLogKey, JSON.stringify(log));
}

function getSupplementVisibility() {
  return { daily: false, weekly: false, cards: false, ...JSON.parse(localStorage.getItem(supplementVisibilityKey) || "{}") };
}

function saveSupplementVisibility(visibility) {
  localStorage.setItem(supplementVisibilityKey, JSON.stringify(visibility));
}

function applySupplementVisibility() {
  const visibility = getSupplementVisibility();
  $("#toggleSupplementDaily").checked = visibility.daily;
  $("#toggleSupplementWeekly").checked = visibility.weekly;
  $("#toggleSupplementCards").checked = visibility.cards;
  $("#supplementDailySection").classList.toggle("is-hidden", !visibility.daily);
  $("#supplementCardsSection").classList.toggle("is-hidden", !visibility.cards);
  $("#supplementWeeklyHeading").classList.toggle("is-hidden", !visibility.weekly);
  $("#supplementWeekly").classList.toggle("is-hidden", !visibility.weekly);
}

function bindSupplementVisibility() {
  $("#toggleSupplementDaily").addEventListener("change", (event) => {
    const visibility = getSupplementVisibility();
    visibility.daily = event.target.checked;
    saveSupplementVisibility(visibility);
    applySupplementVisibility();
  });
  $("#toggleSupplementWeekly").addEventListener("change", (event) => {
    const visibility = getSupplementVisibility();
    visibility.weekly = event.target.checked;
    saveSupplementVisibility(visibility);
    applySupplementVisibility();
  });
  $("#toggleSupplementCards").addEventListener("change", (event) => {
    const visibility = getSupplementVisibility();
    visibility.cards = event.target.checked;
    saveSupplementVisibility(visibility);
    applySupplementVisibility();
  });
}

function dateKeyForOffset(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function getSupplement(item) {
  const settings = getSupplementSettings()[item.id] || {};
  return { ...item, ...settings };
}

function isSupplementActive(item) {
  return getSupplement(item).active;
}

function shouldShowSupplementToday(item, day) {
  const supplement = getSupplement(item);
  if (!supplement.active) return false;
  const isTraining = ["strength", "football", "endurance"].includes(day.type);
  const isLongActivity = ["football", "endurance"].includes(day.type);
  const isHardDay = ["football", "endurance"].includes(day.type);
  if (supplement.id === "electrolytes") return isLongActivity;
  if (supplement.id === "protein") return isTraining;
  if (supplement.id === "magnesium-performance") return day.type === "strength" || day.type === "endurance";
  if (supplement.id === "ashwagandha") return isHardDay || day.type === "recovery";
  if (supplement.id === "magnesium-sleep") return true;
  if (supplement.optional) return false;
  return true;
}

function getDaySupplementPlan(dayIndex) {
  const day = days[dayIndex];
  return supplements
    .filter((item) => shouldShowSupplementToday(item, day))
    .map((item) => getSupplement(item))
    .sort((a, b) => a.priority - b.priority || a.name.localeCompare(b.name, "cs"));
}

function getSupplementTiming(item, day) {
  if (item.id === "creatine" && day.type === "recovery") return "S obědem";
  if (item.id === "creatine") return "Po tréninku";
  if (item.id === "electrolytes") return day.type === "endurance" ? "Před / během zóny 2" : "Před / během fotbalu";
  if (item.id === "protein" && day.type !== "recovery") return "Po tréninku nebo v okně 16:8";
  return item.timing;
}

function renderSupplementDaySelect() {
  $("#supplementDaySelect").innerHTML = days.map((day, index) => `
    <option value="${index}" ${index === getTodayIndex() ? "selected" : ""}>${day.day}</option>
  `).join("");
}

function renderSupplementChecklist() {
  const dayIndex = Number($("#supplementDaySelect").value);
  const day = days[dayIndex];
  const dateKey = dateKeyForOffset(dayIndex - getTodayIndex());
  const log = getSupplementLog();
  const done = log[dateKey] || {};
  const plan = getDaySupplementPlan(dayIndex);
  const checkedCount = plan.filter((item) => done[item.id]).length;
  const hardText = day.type === "recovery"
    ? "Regenerační den: kreatin zůstává, intenzitu nepřidávat."
    : day.type === "endurance" || day.type === "football"
      ? "Náročnější den: pohlídat elektrolyty podle pocení a večerní hořčík."
      : "Tréninkový den: kreatin po tréninku, protein jen podle bílkovin.";

  $("#supplementDaySummary").textContent = `${day.day}: ${hardText} Splněno ${checkedCount}/${plan.length}.`;
  $("#supplementChecklist").innerHTML = plan.map((item) => `
    <label class="supplement-check ${done[item.id] ? "done" : ""}">
      <input type="checkbox" data-supplement-check="${item.id}" ${done[item.id] ? "checked" : ""} />
      <span>
        <strong>${item.name}</strong>
        <small>${getSupplementTiming(item, day)} · ${item.dosage} ${item.unit} · ${item.frequency}</small>
      </span>
    </label>
  `).join("");
}

function bindSupplementChecklist() {
  $("#supplementDaySelect").addEventListener("change", renderSupplementChecklist);
  $("#supplementChecklist").addEventListener("change", (event) => {
    const input = event.target.closest("input[data-supplement-check]");
    if (!input) return;
    const dayIndex = Number($("#supplementDaySelect").value);
    const dateKey = dateKeyForOffset(dayIndex - getTodayIndex());
    const log = getSupplementLog();
    log[dateKey] = log[dateKey] || {};
    log[dateKey][input.dataset.supplementCheck] = input.checked;
    saveSupplementLog(log);
    renderSupplementChecklist();
    renderSupplementWeekly();
  });
}

function renderSupplementFilters(active = "Vše") {
  $("#supplementFilters").innerHTML = supplementGoals.map((goal) => `
    <button class="filter ${goal === active ? "active" : ""}" type="button" data-supplement-goal="${goal}">${goal}</button>
  `).join("");
  renderSupplementCards(active);
}

function renderSupplementCards(active = "Vše") {
  const visible = supplements
    .map(getSupplement)
    .filter((item) => active === "Vše" || item.goals.includes(active) || (active === "Volitelné" && item.optional))
    .sort((a, b) => Number(a.optional) - Number(b.optional) || a.priority - b.priority);

  $("#supplementGrid").innerHTML = visible.map((item) => `
    <article class="supplement-card ${item.active ? "" : "inactive"}">
      <div class="supplement-card-head">
        <div>
          <span class="pill ${item.optional ? "neutral" : "good"}">${item.category}</span>
          <h3>${item.name}</h3>
        </div>
        <label class="switch" title="Aktivní / neaktivní">
          <input type="checkbox" data-supplement-active="${item.id}" ${item.active ? "checked" : ""} />
          <span></span>
        </label>
      </div>
      <div class="supplement-fields">
        <label>Dávkování<input data-supplement-field="${item.id}:dosage" value="${item.dosage}" /></label>
        <label>Jednotka<input data-supplement-field="${item.id}:unit" value="${item.unit}" /></label>
        <label>Frekvence<input data-supplement-field="${item.id}:frequency" value="${item.frequency}" /></label>
        <label>Značka<input data-supplement-field="${item.id}:brand" value="${item.brand || ""}" placeholder="např. Nutrend" /></label>
      </div>
      <p><b>Čas:</b> ${item.timing}</p>
      <p><b>Jídlo:</b> ${item.foodLink}</p>
      <p><b>Trénink:</b> ${item.trainingLink}</p>
      <label class="note-field">Poznámka<textarea data-supplement-field="${item.id}:note" rows="2">${item.note}</textarea></label>
      ${item.warning ? `<p class="warning-text"><b>Upozornění:</b> ${item.warning}</p>` : ""}
      ${item.optional ? `<p class="muted-text">Volitelný doplněk. Není součást aktivního denního základu.</p>` : ""}
    </article>
  `).join("");
}

function bindSupplementCards() {
  $("#supplementFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) renderSupplementFilters(button.dataset.supplementGoal);
  });
  $("#supplementGrid").addEventListener("change", (event) => {
    const activeInput = event.target.closest("input[data-supplement-active]");
    const field = event.target.closest("[data-supplement-field]");
    const settings = getSupplementSettings();
    if (activeInput) {
      const id = activeInput.dataset.supplementActive;
      settings[id] = settings[id] || {};
      settings[id].active = activeInput.checked;
    }
    if (field) {
      const [id, key] = field.dataset.supplementField.split(":");
      settings[id] = settings[id] || {};
      settings[id][key] = field.value;
    }
    saveSupplementSettings(settings);
    const activeFilter = $("#supplementFilters .active")?.dataset.supplementGoal || "Vše";
    renderSupplementFilters(activeFilter);
    renderSupplementChecklist();
    renderSupplementWeekly();
  });
}

function renderSupplementWeekly() {
  const log = getSupplementLog();
  const activeSupplements = supplements.map(getSupplement).filter((item) => item.active && !item.optional);
  const daysBack = Array.from({ length: 7 }, (_, index) => dateKeyForOffset(index - 6));
  $("#supplementWeekly").innerHTML = activeSupplements.map((item) => {
    const usedDays = daysBack.filter((date) => log[date]?.[item.id]);
    const missedDays = daysBack.filter((date) => !log[date]?.[item.id]);
    const percent = Math.round((usedDays.length / daysBack.length) * 100);
    return `
      <article class="weekly-card">
        <div>
          <strong>${item.name}</strong>
          <span>${usedDays.length}/7 dní</span>
        </div>
        <div class="mini-progress"><div><i style="width: ${percent}%"></i></div></div>
        <p>${percent}% adherence</p>
        <small>Vynecháno: ${missedDays.length ? missedDays.join(", ") : "nic v posledních 7 dnech"}</small>
      </article>
    `;
  }).join("");
}

function initSupplements() {
  renderSupplementDaySelect();
  renderSupplementChecklist();
  renderSupplementFilters();
  renderSupplementWeekly();
  applySupplementVisibility();
  bindSupplementVisibility();
  bindSupplementChecklist();
  bindSupplementCards();
}

function getCheckins() {
  return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

function saveCheckins(items) {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

function evaluate(current, previous) {
  const notes = [];
  if (previous) {
    const weightDiff = current.weight - previous.weight;
    const waistDiff = current.waist - previous.waist;
    if (weightDiff < -0.8) notes.push("Váha klesla rychle. Pohlídej energii, sílu a neřež jídlo zbytečně hluboko.");
    if (Math.abs(weightDiff) < 0.3 && waistDiff < -0.4) notes.push("Váha se drží, ale pas klesá. To je přesně pozitivní signál rekompozice.");
    if (current.hrv < previous.hrv - 2 && current.rhr > previous.rhr + 2) notes.push("HRV klesá a klidový tep roste. Tento týden uber intenzitu a škrtni volitelné výklusy.");
  }
  if (current.cravings >= 7) notes.push("Chutě jsou vysoko. Naplánuj řízenou sladkou variantu: skyr, tvaroh, kefír nebo protein s ovocem.");
  if (current.sleep < 7) notes.push("Spánek je pod 7 hodin. Nezesiluj trénink, nejdřív oprav večerní režim.");
  if (current.energy <= 4) notes.push("Energie je nízko. Drž základní plán, ale nepřidávej nic navíc.");
  if (!notes.length) notes.push("Signály vypadají stabilně. Drž plán, čtvrtek nech lehký a fotbal počítej jako tvrdou intenzitu.");
  return notes;
}

function renderEvaluation(notes) {
  $("#evaluation").innerHTML = `<ul class="clean-list">${notes.map((note) => `<li>${note}</li>`).join("")}</ul>`;
  $("#nextWeekAdvice").textContent = notes[0];
}

function formatNumber(value) {
  return new Intl.NumberFormat("cs-CZ").format(value);
}

function renderGarminMetrics() {
  const report = garminReports[0];
  const weekly = report.weekly;
  const intensity = report.intensity;
  const intensityWidth = Math.min(intensity.percent, 100);
  $("#garminSummary").innerHTML = `
    <article class="metric-card">
      <span>Období</span>
      <strong>${report.period}</strong>
      <p>${report.source}</p>
    </article>
    <article class="metric-card">
      <span>Spánek</span>
      <strong>${weekly.avgSleep}</strong>
      <p>Průměrné skóre ${weekly.avgSleepScore}. Cíl je posunout se blíž k 7 h 45 min až 8 h.</p>
    </article>
    <article class="metric-card">
      <span>HRV</span>
      <strong>${weekly.hrvSevenDayLatest} ms</strong>
      <p>Poslední 7denní průměr. Průměr noční HRV za týden cca ${weekly.avgNightHrv} ms.</p>
    </article>
    <article class="metric-card">
      <span>Tep</span>
      <strong>${weekly.avgHeartRate} bpm</strong>
      <p>Průměr denních hodnot, týdenní maximum ${weekly.maxHeartRate} bpm.</p>
    </article>
    <article class="metric-card">
      <span>Stres</span>
      <strong>${weekly.avgStress}</strong>
      <p>Průměr týdne, nejvyšší den byl 30 v sobotu.</p>
    </article>
    <article class="metric-card">
      <span>Body Battery</span>
      <strong>${weekly.avgBodyBatteryHigh}/${weekly.avgBodyBatteryLow}</strong>
      <p>Průměr vysoké a nízké hodnoty za týden. Čtvrtek končil nejvýš: 99/38.</p>
    </article>
    <article class="metric-card">
      <span>Pulzní oxymetr</span>
      <strong>${weekly.avgSpo2} %</strong>
      <p>Průměr SpO2 za týden. Denní hodnoty byly v rozmezí 94 až 97 %.</p>
    </article>
    <article class="metric-card">
      <span>Kalorie</span>
      <strong>${formatNumber(weekly.avgCalories)}</strong>
      <p>Průměr spálených kalorií za den v období ${report.period}.</p>
    </article>
    <article class="metric-card">
      <span>Kroky</span>
      <strong>${formatNumber(weekly.stepsAverage)} / den</strong>
      <p>Celkem ${formatNumber(weekly.stepsTotal)} kroků a ${weekly.distanceKm.toString().replace(".", ",")} km.</p>
    </article>
    <article class="metric-card">
      <span>Intenzivní minuty</span>
      <strong>${intensity.total}/${intensity.goal}</strong>
      <p>${intensity.percent}% cíle, ${intensity.moderate} min střední a ${intensity.vigorous} min vysoká intenzita.</p>
      <div class="mini-progress"><div><i style="width: ${intensityWidth}%"></i></div></div>
    </article>
  `;

  $("#garminDailyBody").innerHTML = report.daily.map((item) => `
    <tr>
      <td><b>${item.day}</b><br>${item.date}</td>
      <td>Skóre ${item.sleepScore}<br>${item.sleepDuration}</td>
      <td>${item.hrvSevenDay} ms 7denní<br>${item.hrvNight} ms noční</td>
      <td>${item.heartAvg} bpm průměr<br>${item.heartMax} bpm max</td>
      <td>${item.stress}</td>
      <td>${item.bodyBatteryHigh} vysoká<br>${item.bodyBatteryLow} nízká</td>
      <td>${item.spo2} %</td>
      <td>${formatNumber(item.calories)}</td>
    </tr>
  `).join("");
}

function renderHistory() {
  const items = getCheckins().sort((a, b) => a.date.localeCompare(b.date));
  $("#historyBody").innerHTML = items.length ? items.map((item) => `
    <tr>
      <td>${item.date}</td>
      <td>${item.weight}</td>
      <td>${item.waist}</td>
      <td>${item.hrv}</td>
      <td>${item.rhr}</td>
      <td>${item.sleep}</td>
      <td>${item.energy}</td>
      <td>${item.cravings}</td>
      <td>${item.note || ""}</td>
    </tr>
  `).join("") : `<tr><td class="empty-row" colspan="9">Zatím tu nejsou žádná měření.</td></tr>`;
  drawChart(items);
}

function drawChart(items) {
  const canvas = $("#trendChart");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcfb";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#dfe6e1";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const y = 26 + i * 45;
    ctx.beginPath();
    ctx.moveTo(44, y);
    ctx.lineTo(width - 22, y);
    ctx.stroke();
  }
  if (items.length < 2) {
    ctx.fillStyle = "#667277";
    ctx.font = "16px system-ui";
    ctx.fillText("Graf se zobrazí po zadání alespoň dvou check-inů.", 52, 138);
    return;
  }
  const series = [
    ["weight", "#3f7fc7", "Váha"],
    ["hrv", "#4d9a69", "HRV"],
    ["rhr", "#df842c", "Klidový tep"]
  ];
  series.forEach(([key, color, label], index) => {
    const values = items.map((item) => Number(item[key]));
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    values.forEach((value, i) => {
      const x = 52 + (i * (width - 96)) / (values.length - 1);
      const y = height - 42 - ((value - min) * (height - 82)) / range;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fillText(label, 54 + index * 118, 22);
  });
}

function bindCheckin() {
  const form = $("#checkinForm");
  form.date.valueAsDate = new Date();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const item = Object.fromEntries(data.entries());
    ["weight", "waist", "hrv", "rhr", "sleep", "energy", "cravings"].forEach((key) => {
      item[key] = Number(item[key]);
    });
    const items = getCheckins().filter((saved) => saved.date !== item.date);
    const previous = items.sort((a, b) => a.date.localeCompare(b.date)).at(-1);
    items.push(item);
    saveCheckins(items);
    renderEvaluation(evaluate(item, previous));
    renderHistory();
    form.reset();
    form.date.valueAsDate = new Date();
  });
  $("#clearHistory").addEventListener("click", () => {
    if (!confirm("Opravdu smazat celou historii měření?")) return;
    localStorage.removeItem(storageKey);
    renderHistory();
    $("#evaluation").textContent = "Historie je smazaná. Zadej nový check-in a doporučení začne znovu.";
  });
}

renderMetrics();
renderWeeklyComparison();
renderMealWeekSelect();
bindMealWeekSelect();
renderDayTabs();
renderMeals();
renderRecipes();
bindRecipeFilters();
initShopping();
initSupplements();
bindCheckin();
renderGarminMetrics();
renderHistory();
