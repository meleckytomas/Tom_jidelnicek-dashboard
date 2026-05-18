const metrics = [
  ["Váha", "81 až 82 kg", "Výchozí stav, cíl není padat rychle."],
  ["Tělesný tuk", "14 až 15 %", "Chytrá váha je orientační, sleduj trend."],
  ["Klidový tep", "55 bpm", "Roční průměr, dobrý ukazatel regenerace."],
  ["HRV", "34 až 36 ms", "Stabilita je teď důležitější než rekord."],
  ["Kroky", "12 810 / den", "Silný základ, ve čtvrtek vědomě ubrat."],
  ["Spánek", "7 h 20 min", "Cíl posunout blíž k 7 h 45 min až 8 h."],
  ["Body Battery", "80 až 90", "Ranní stav většinou solidní."],
  ["Stres", "27 / 25", "4 týdny / rok, alergie může dočasně přidat zátěž."]
];

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
  ["Tvaroh po fotbale", "Večeře po fotbale", "Úterý večer, když je pozdě.", "Tvaroh, protein, ovoce nebo kakao.", "Smíchej, drž porci lehkou a nejez zbytečně těžce před spaním.", "35 až 50 g"]
];

const shoppingCategories = ["Vše", "Bílkoviny", "Mléčné", "Sacharidy a přílohy", "Ovoce", "Zelenina", "Dochucení", "Rychlé záchrany", "Suplementy"];

const baseShoppingItems = [
  { id: "chicken-turkey", name: "Kuře nebo krůta", category: "Bílkoviny", amount: "1 až 2 kg", frequency: "týdně", note: "Bowl, rizoto, rýže se zeleninou, jídlo do práce." },
  { id: "salmon", name: "Losos", category: "Bílkoviny", amount: "2 porce", frequency: "týdně", note: "Středa nebo sobota, dobré i kvůli omega 3." },
  { id: "tuna", name: "Tuňák", category: "Bílkoviny", amount: "2 až 4 konzervy", frequency: "týdně", note: "Rychlé těstoviny, záchrana do práce." },
  { id: "eggs", name: "Vejce", category: "Bílkoviny", amount: "10 až 15 ks", frequency: "týdně", note: "Večeře, omeleta, salát, po fotbale." },
  { id: "ham", name: "Kvalitní šunka", category: "Bílkoviny", amount: "1 až 2 balení", frequency: "týdně", note: "Toast, kváskový chléb, rychlá večeře." },
  { id: "skyr", name: "Skyr", category: "Mléčné", amount: "4 až 6 ks", frequency: "týdně", note: "Svačina, sladká řízená varianta, doplnění bílkovin." },
  { id: "curd", name: "Tvaroh", category: "Mléčné", amount: "3 až 5 ks", frequency: "týdně", note: "Večeře po fotbale, kakao s ovocem, dip." },
  { id: "cottage", name: "Cottage", category: "Mléčné", amount: "2 až 4 ks", frequency: "týdně", note: "Kváskový chléb, svačina, večeře." },
  { id: "kefir", name: "Kefír", category: "Mléčné", amount: "2 až 4 lahve", frequency: "týdně", note: "Před fotbalem, smoothie, trávení." },
  { id: "yogurt", name: "Bílý jogurt", category: "Mléčné", amount: "1 velké balení", frequency: "týdně", note: "Dip, dresink, bowl." },
  { id: "sourdough", name: "Kváskový chléb / pečivo", category: "Sacharidy a přílohy", amount: "1 až 2 ks", frequency: "týdně", note: "Večeře, toast před fotbalem." },
  { id: "rice", name: "Rýže", category: "Sacharidy a přílohy", amount: "zásoba", frequency: "průběžně", note: "Kuře, bowl, pomalý hrnec." },
  { id: "pasta", name: "Těstoviny", category: "Sacharidy a přílohy", amount: "2 balení", frequency: "týdně", note: "Tuňák, losos, rajčatová omáčka." },
  { id: "potatoes", name: "Brambory", category: "Sacharidy a přílohy", amount: "2 až 3 kg", frequency: "týdně", note: "Americké brambory, hranolky, příloha." },
  { id: "couscous", name: "Kuskus", category: "Sacharidy a přílohy", amount: "1 balení", frequency: "průběžně", note: "Rychlá bowl varianta." },
  { id: "bananas", name: "Banány", category: "Ovoce", amount: "5 až 7 ks", frequency: "týdně", note: "Před fotbalem, rychlá energie." },
  { id: "berries", name: "Jahody / borůvky", category: "Ovoce", amount: "mražené nebo čerstvé", frequency: "týdně", note: "Protein, skyr, tvaroh, sladké chutě." },
  { id: "mango", name: "Mango", category: "Ovoce", amount: "mražené", frequency: "průběžně", note: "Smoothie, proteinová zmrzlina." },
  { id: "apples", name: "Jablka nebo sezónní ovoce", category: "Ovoce", amount: "5 ks", frequency: "týdně", note: "Svačina, skyr, tvaroh." },
  { id: "leafy", name: "Listový salát", category: "Zelenina", amount: "1 až 2 balení", frequency: "týdně", note: "Čtvrteční salát, bowl, večeře." },
  { id: "tomatoes", name: "Rajčata", category: "Zelenina", amount: "1 balení", frequency: "týdně", note: "Těstoviny, saláty, omeleta." },
  { id: "cucumber", name: "Okurka", category: "Zelenina", amount: "1 až 2 ks", frequency: "týdně", note: "Večeře, chléb, saláty." },
  { id: "frozen-veg", name: "Mražená zelenina", category: "Zelenina", amount: "2 balení", frequency: "týdně", note: "Rizoto, rychlá příloha, záchrana." },
  { id: "root-veg", name: "Kořenová zelenina", category: "Zelenina", amount: "1 balení", frequency: "týdně", note: "Pomalý hrnec, vývar, maso na zelenině." },
  { id: "parmesan-cheese", name: "Parmazán / tvrdý sýr", category: "Dochucení", amount: "1 ks", frequency: "průběžně", note: "Těstoviny, rizoto, wrap." },
  { id: "cocoa", name: "Kakao", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Tvaroh s kakaem místo náhodného sladkého." },
  { id: "honey", name: "Med", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Malé množství do skyru nebo tvarohu." },
  { id: "cinnamon", name: "Skořice", category: "Dochucení", amount: "zásoba", frequency: "průběžně", note: "Kefír, ovoce, tvaroh." },
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

function renderDay(index) {
  const item = days[index];
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
      <p><b>Oběd:</b> ${item.meals[0]}</p>
      <p><b>Svačina:</b> ${item.meals[1]}</p>
      <p><b>Večeře:</b> ${item.meals[2]}</p>
      <p>${item.note}</p>
    </aside>
  `;
}

function renderMeals() {
  $("#mealGrid").innerHTML = days.map((item) => `
    <article class="meal-card">
      <span class="pill ${item.type}">${item.day}</span>
      <h3>${item.label}</h3>
      <p><b>Oběd:</b> ${item.meals[0]}</p>
      <p><b>Svačina:</b> ${item.meals[1]}</p>
      <p><b>Večeře:</b> ${item.meals[2]}</p>
    </article>
  `).join("");
}

function renderRecipes(active = "Vše") {
  const categories = ["Vše", ...new Set(recipes.map((recipe) => recipe[1]))];
  $("#recipeFilters").innerHTML = categories.map((category) => `
    <button class="filter ${category === active ? "active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");
  const visible = active === "Vše" ? recipes : recipes.filter((recipe) => recipe[1] === active);
  $("#recipeGrid").innerHTML = visible.map(([name, category, when, ingredients, steps, protein]) => `
    <article class="recipe-card">
      <span class="pill neutral">${category}</span>
      <h3>${name}</h3>
      <p><b>Kdy se hodí:</b> ${when}</p>
      <p><b>Suroviny:</b> ${ingredients}</p>
      <p><b>Postup:</b> ${steps}</p>
      <p><b>Bílkoviny:</b> ${protein}</p>
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

function initShopping() {
  const categorySelect = $("#shoppingForm select[name='category']");
  categorySelect.innerHTML = shoppingCategories
    .filter((category) => category !== "Vše")
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");

  renderShoppingFilters();
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
  return JSON.parse(localStorage.getItem(supplementVisibilityKey) || '{"daily":false,"weekly":false}');
}

function saveSupplementVisibility(visibility) {
  localStorage.setItem(supplementVisibilityKey, JSON.stringify(visibility));
}

function applySupplementVisibility() {
  const visibility = getSupplementVisibility();
  $("#toggleSupplementDaily").checked = visibility.daily;
  $("#toggleSupplementWeekly").checked = visibility.weekly;
  $("#supplementDailySection").classList.toggle("is-hidden", !visibility.daily);
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
renderDayTabs();
renderMeals();
renderRecipes();
bindRecipeFilters();
initShopping();
initSupplements();
bindCheckin();
renderHistory();
