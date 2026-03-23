const questions = [
    {q:"Capitale du Bénin ?", r:["Cotonou","Porto-Novo"], c:"Porto-Novo"},
    {q:"7 x 8 ?", r:["54","56"], c:"56"},
    {q:"Planète rouge ?", r:["Mars","Vénus"], c:"Mars"},
    {q:"Vainqueur C1 2024 ?", r:["Dortmund","Real Madrid"], c:"Real Madrid"},
    {q:"Capitale de la France ?", r:["Lyon","Paris"], c:"Paris"},
    {q:"Plus grand mammifère ?", r:["Éléphant","Baleine bleue"], c:"Baleine bleue"},
    {q:"Club de Mbappé en 2026 ?", r:["PSG","Real Madrid"], c:"Real Madrid"},
    {q:"Organe qui pompe le sang ?", r:["Poumon","Cœur"], c:"Cœur"},
    {q:"Monnaie du Bénin ?", r:["Naira","Franc CFA"], c:"Franc CFA"},
    {q:"Peintre de la Joconde ?", r:["Da Vinci","Picasso"], c:"Da Vinci"},
    {q:"Planète la plus proche du Soleil ?", r:["Vénus","Mercure"], c:"Mercure"},
    {q:"Jours année bissextile ?", r:["365","366"], c:"366"},
    {q:"Symbole de l'eau ?", r:["CO2","H2O"], c:"H2O"},
    {q:"Président du Bénin ?", r:["Patrice Talon","Boni Yayi"], c:"Patrice Talon"},
    {q:"Fleuve le plus long ?", r:["Nil","Amazone"], c:"Amazone"},
    {q:"Langue du Brésil ?", r:["Espagnol","Portugais"], c:"Portugais"},
    {q:"Nombre d'États aux USA ?", r:["40","50"], c:"50"},
    {q:"Animal le plus rapide ?", r:["Lion","Guépard"], c:"Guépard"},
    {q:"Capitale du Nigeria ?", r:["Lagos","Abuja"], c:"Abuja"},
    {q:"Découvreur de l'Amérique ?", r:["C. Colomb","V. de Gama"], c:"C. Colomb"},
    {q:"Couleur de l'émeraude ?", r:["Bleu","Vert"], c:"Vert"},
    {q:"Minutes dans une heure ?", r:["60","100"], c:"60"},
    {q:"Plus petit pays du monde ?", r:["Monaco","Vatican"], c:"Vatican"},
    {q:"Continent de l'Égypte ?", r:["Asie","Afrique"], c:"Afrique"},
    {q:"Capitale du Togo ?", r:["Lomé","Kara"], c:"Lomé"},
    {q:"Gaz absorbé par les plantes ?", r:["Oxygène","CO2"], c:"CO2"},
    {q:"Métal le plus précieux ?", r:["Argent","Or"], c:"Or"},
    {q:"Nombre de continents ?", r:["5","7"], c:"7"},
    {q:"Capitale de l'Angleterre ?", r:["Londres","Manchester"], c:"Londres"},
    {q:"Oiseau qui ne vole pas ?", r:["Aigle","Autruche"], c:"Autruche"},
    {q:"Meilleur buteur (CR7 ou Messi) ?", r:["Messi","Cristiano Ronaldo"], c:"Cristiano Ronaldo"},
    {q:"Instrument de Mozart ?", r:["Guitare","Piano"], c:"Piano"},
    {q:"Capitale de l'Espagne ?", r:["Barcelone","Madrid"], c:"Madrid"},
    {q:"Fruit du cidre ?", r:["Poire","Pomme"], c:"Pomme"},
    {q:"Plus grand océan ?", r:["Atlantique","Pacifique"], c:"Pacifique"},
    {q:"Bras d'une pieuvre ?", r:["6","8"], c:"8"},
    {q:"Pays du Soleil Levant ?", r:["Chine","Japon"], c:"Japon"},
    {q:"Inventeur du téléphone ?", r:["Graham Bell","Edison"], c:"Graham Bell"},
    {q:"Capitale de l'Italie ?", r:["Rome","Milan"], c:"Rome"},
    {q:"Pattes d'une araignée ?", r:["6","8"], c:"8"},
    {q:"Sommet le plus haut ?", r:["Everest","K2"], c:"Everest"},
    {q:"Pays de la Tour de Pise ?", r:["France","Italie"], c:"Italie"},
    {q:"Capitale du Ghana ?", r:["Accra","Kumasi"], c:"Accra"},
    {q:"Ingrédient du chocolat ?", r:["Lait","Cacao"], c:"Cacao"},
    {q:"Dieu de la foudre ?", r:["Hades","Zeus"], c:"Zeus"},
    {q:"100 / 4 ?", r:["20","25"], c:"25"},
    {q:"Désert le plus chaud ?", r:["Sahara","Gobi"], c:"Sahara"},
    {q:"Bateau coulé en 1912 ?", r:["Britannic","Titanic"], c:"Titanic"},
    {q:"Capitale de l'Allemagne ?", r:["Munich","Berlin"], c:"Berlin"},
    {q:"Auteur de Harry Potter ?", r:["J.K. Rowling","Molière"], c:"J.K. Rowling"},
    {q:"Couleur du ciel ?", r:["Bleu","Gris"], c:"Bleu"},
    {q:"Roi de la jungle ?", r:["Tigre","Lion"], c:"Lion"},
    {q:"Capitale du Sénégal ?", r:["Dakar","Saint-Louis"], c:"Dakar"},
    {q:"Nombre de côtés hexagone ?", r:["5","6"], c:"6"},
    {q:"Fruit du vin ?", r:["Pomme","Raisin"], c:"Raisin"},
    {q:"Capitale du Maroc ?", r:["Casablanca","Rabat"], c:"Rabat"},
    {q:"Plus grande île ?", r:["Madagascar","Groenland"], c:"Groenland"},
    {q:"Capitale de la Russie ?", r:["Saint-Pét.","Moscou"], c:"Moscou"},
    {q:"Inventeur de l'ampoule ?", r:["Edison","Tesla"], c:"Edison"},
    {q:"Capitale du Mali ?", r:["Bamako","Kayes"], c:"Bamako"},
    {q:"Gaz respiré par l'humain ?", r:["CO2","Oxygène"], c:"Oxygène"},
    {q:"Sport de Rafael Nadal ?", r:["Foot","Tennis"], c:"Tennis"},
    {q:"Capitale de la Belgique ?", r:["Bruxelles","Anvers"], c:"Bruxelles"},
    {q:"Os le plus long ?", r:["Humérus","Fémur"], c:"Fémur"},
    {q:"Capitale du Canada ?", r:["Toronto","Ottawa"], c:"Ottawa"},
    {q:"Couleur du soleil ?", r:["Jaune","Blanc"], c:"Blanc"},
    {q:"Vitesse de la lumière ?", r:["300 000 km/s","150 000 km/s"], c:"300 000 km/s"},
    {q:"Capitale de la Chine ?", r:["Shanghai","Pékin"], c:"Pékin"},
    {q:"Matière des bougies ?", r:["Plastique","Cire"], c:"Cire"},
    {q:"Capitale du Japon ?", r:["Kyoto","Tokyo"], c:"Tokyo"},
    {q:"Nombre de joueurs au foot ?", r:["10","11"], c:"11"},
    {q:"Plus grand désert ?", r:["Sahara","Antarctique"], c:"Antarctique"},
    {q:"Capitale du Portugal ?", r:["Porto","Lisbonne"], c:"Lisbonne"},
    {q:"Animal à trompe ?", r:["Rhinocéros","Éléphant"], c:"Éléphant"},
    {q:"Capitale de l'Algérie ?", r:["Oran","Alger"], c:"Alger"},
    {q:"Somme 15 + 27 ?", r:["42","32"], c:"42"},
    {q:"Nombre de cordes guitare ?", r:["4","6"], c:"6"},
    {q:"Capitale de l'Égypte ?", r:["Le Caire","Alexandrie"], c:"Le Caire"},
    {q:"Planète aux anneaux ?", r:["Jupiter","Saturne"], c:"Saturne"},
    {q:"Capitale de la Grèce ?", r:["Sparte","Athènes"], c:"Athènes"},
    {q:"Sport de Stephen Curry ?", r:["Basket","Tennis"], c:"Basket"},
    {q:"Capitale de la Suisse ?", r:["Genève","Berne"], c:"Berne"},
    {q:"Plus haute cascade ?", r:["Niagara","Saut de l'Ange"], c:"Saut de l'Ange"},
    {q:"Capitale de l'Inde ?", r:["Mumbai","New Delhi"], c:"New Delhi"},
    {q:"Peau du serpent ?", r:["Poils","Écailles"], c:"Écailles"},
    {q:"Capitale de la Turquie ?", r:["Istanbul","Ankara"], c:"Ankara"},
    {q:"Nombre de dents adulte ?", r:["28","32"], c:"32"},
    {q:"Capitale de l'Argentine ?", r:["Rosario","Buenos Aires"], c:"Buenos Aires"},
    {q:"Premier homme sur lune ?", r:["Armstrong","Aldrin"], c:"Armstrong"},
    {q:"Capitale de la Suède ?", r:["Stockholm","Oslo"], c:"Stockholm"},
    {q:"Couleur du sang ?", r:["Bleu","Rouge"], c:"Rouge"},
    {q:"Capitale de la Côte d'Ivoire ?", r:["Abidjan","Yamoussoukro"], c:"Yamoussoukro"},
    {q:"Inventeur de Facebook ?", r:["Elon Musk","Zuckerberg"], c:"Zuckerberg"},
    {q:"Capitale du Cameroun ?", r:["Douala","Yaoundé"], c:"Yaoundé"},
    {q:"Étoile de notre système ?", r:["Lune","Soleil"], c:"Soleil"},
    {q:"Capitale du Brésil ?", r:["Rio","Brasilia"], c:"Brasilia"},
    {q:"Âge de la majorité au Bénin ?", r:["18","21"], c:"18"},
    {q:"Capitale de l'Afrique du Sud ?", r:["Pretoria","Johannesburg"], c:"Pretoria"},
    {q:"Unité de température ?", r:["Litre","Celsius"], c:"Celsius"},
    {q:"Dernière lettre alphabet ?", r:["Y","Z"], c:"Z"}
];

let score = 0; let index = 0;

function checkKey() {
    if(document.getElementById('pass-key').value === "2026") {
        document.getElementById('lock-screen').style.display = "none";
        document.getElementById('game-screen').style.display = "block";
        loadQ();
    } else { alert("Clé incorrecte !"); }
}

function loadQ() {
    const q = questions[index];
    document.getElementById('q-text').innerText = (index + 1) + ". " + q.q;
    const optDiv = document.getElementById('options'); optDiv.innerHTML = "";
    q.r.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice; btn.className = "btn-option";
        btn.onclick = () => {
            if(choice === q.c) score += 10;
            index++;
            if(index < questions.length) loadQ();
            else { alert("Score : " + score + "/1000"); location.reload(); }
        };
        optDiv.appendChild(btn);
    });
      }
  
