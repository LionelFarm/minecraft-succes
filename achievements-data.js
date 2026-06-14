// ====================================================================
// Liste des succès et des paliers de récompenses.
// Ces données sont identiques pour tout le monde (pas besoin de Firestore).
// Pour ajouter / modifier un succès, modifie simplement ce fichier.
// L'id de chaque succès doit rester unique (utilisé par le bot, voir
// bot/rewards-map.js).
// ====================================================================

const achievements = [
    // FACILES (10-20 points)
    { id: 1, title: "Premier Sang", desc: "Tuer un monstre hostile", difficulty: "easy", points: 10, reward: "5 steaks" },
    { id: 2, title: "Bûcheron", desc: "Récolter 64 bûches de bois", difficulty: "easy", points: 10, reward: "1 hache en fer" },
    { id: 3, title: "Mineur Débutant", desc: "Miner 32 blocs de pierre", difficulty: "easy", points: 10, reward: "1 pioche en fer" },
    { id: 4, title: "Fermier", desc: "Planter 20 graines de blé", difficulty: "easy", points: 15, reward: "10 pains" },
    { id: 5, title: "Pêcheur", desc: "Attraper 5 poissons", difficulty: "easy", points: 15, reward: "1 canne à pêche enchantée (Luck I)" },
    { id: 6, title: "Éleveur", desc: "Faire naître 3 animaux", difficulty: "easy", points: 15, reward: "1 selle" },
    { id: 7, title: "Explorateur", desc: "Découvrir 3 biomes différents", difficulty: "easy", points: 20, reward: "1 carte vierge + boussole" },
    { id: 8, title: "Premier Abri", desc: "Construire une maison avec lit et coffre", difficulty: "easy", points: 20, reward: "1 lanterne" },

    // MOYENS (25-40 points)
    { id: 9, title: "Full Fer", desc: "Obtenir une armure complète en fer", difficulty: "medium", points: 25, reward: "16 lingots de fer" },
    { id: 10, title: "Diamants !", desc: "Miner 5 diamants", difficulty: "medium", points: 30, reward: "2 diamants bonus" },
    { id: 11, title: "Nether Explorer", desc: "Entrer dans le Nether", difficulty: "medium", points: 30, reward: "8 obsidiennes" },
    { id: 12, title: "Potion Master", desc: "Fabriquer 3 potions différentes", difficulty: "medium", points: 35, reward: "5 verrues du Nether + 3 bouteilles d'eau" },
    { id: 13, title: "Enchanteur", desc: "Enchanter un objet au niveau 30", difficulty: "medium", points: 35, reward: "15 lapis-lazuli" },
    { id: 14, title: "Village Protector", desc: "Repousser un raid de pillards", difficulty: "medium", points: 40, reward: "Totem d'immortalité" },
    { id: 15, title: "Redstone Engineer", desc: "Créer un mécanisme redstone fonctionnel", difficulty: "medium", points: 30, reward: "32 redstone + 4 pistons" },
    { id: 16, title: "Bibliothécaire", desc: "Avoir une bibliothèque de 15 étagères", difficulty: "medium", points: 25, reward: "1 livre enchanté Réparation (Mending)" },

    // DIFFICILES (50-75 points)
    { id: 17, title: "Full Diamant", desc: "Obtenir une armure complète en diamant", difficulty: "hard", points: 50, reward: "4 diamants + livre Unbreaking II" },
    { id: 18, title: "Dragon Slayer", desc: "Vaincre l'Ender Dragon", difficulty: "hard", points: 75, reward: "Élytre" },
    { id: 19, title: "Wither Hunter", desc: "Vaincre le Wither", difficulty: "hard", points: 75, reward: "Étoile du Nether + 32 blocs de quartz" },
    { id: 20, title: "Ocean Monument", desc: "Conquérir un monument océanique", difficulty: "hard", points: 60, reward: "Conduit + 8 blocs de prismarine" },
    { id: 21, title: "Bastion Raider", desc: "Piller un bastion du Nether", difficulty: "hard", points: 55, reward: "Lingot de Netherite" },
    { id: 22, title: "100 Niveaux", desc: "Atteindre le niveau 100 d'XP", difficulty: "hard", points: 50, reward: "Meule + 20 bouteilles d'XP" },
    { id: 23, title: "La Collection", desc: "Posséder toutes les têtes de mob", difficulty: "hard", points: 65, reward: "Tête de dragon" },

    // EXTRÊMES (100+ points)
    { id: 24, title: "Full Netherite", desc: "Obtenir une armure complète en Netherite", difficulty: "extreme", points: 100, reward: "Pomme dorée enchantée x3" },
    { id: 25, title: "Beacon Master", desc: "Activer une balise niveau 4", difficulty: "extreme", points: 100, reward: "Balise supplémentaire + choix de 2 effets permanents" },
    { id: 26, title: "All Advancements", desc: "Débloquer tous les progrès Minecraft", difficulty: "extreme", points: 150, reward: "Stack de diamants (64)" },
    { id: 27, title: "Hardcore Legend", desc: "Survivre 100 jours in-game sans mourir", difficulty: "extreme", points: 120, reward: "Armure Netherite Protection IV complète" },
    { id: 28, title: "Mega Base", desc: "Construire une base de plus de 1000 blocs", difficulty: "extreme", points: 100, reward: "Shulker Box + 27 blocs au choix" },

    // ===== SUCCÈS "GRIND" (compteurs) =====

    // FACILES (10-20 points)
    { id: 29, title: "Boucher", desc: "Tuer 50 vaches", difficulty: "easy", points: 15, reward: "10 steaks" },
    { id: 30, title: "Chasseur de Poulets", desc: "Tuer 50 poulets", difficulty: "easy", points: 15, reward: "16 plumes" },
    { id: 31, title: "Tonte", desc: "Récolter 30 laine de mouton", difficulty: "easy", points: 15, reward: "1 lit" },
    { id: 32, title: "Carrière", desc: "Miner 100 blocs de pierre", difficulty: "easy", points: 20, reward: "8 torches" },
    { id: 33, title: "Sable à gogo", desc: "Miner 64 blocs de sable", difficulty: "easy", points: 10, reward: "10 blocs de verre" },

    // MOYENS (25-40 points)
    { id: 34, title: "Charbonnier", desc: "Miner 64 blocs de charbon", difficulty: "medium", points: 25, reward: "32 torches" },
    { id: 35, title: "Zombie Slayer", desc: "Tuer 50 zombies", difficulty: "medium", points: 30, reward: "16 lingots de fer" },
    { id: 36, title: "Archer Killer", desc: "Tuer 30 squelettes", difficulty: "medium", points: 30, reward: "1 arc + 32 flèches" },
    { id: 37, title: "Araignées Écrasées", desc: "Tuer 30 araignées", difficulty: "medium", points: 25, reward: "16 fils" },
    { id: 38, title: "Éleveur Pro", desc: "Faire naître 10 animaux", difficulty: "medium", points: 30, reward: "1 cloche" },
    { id: 39, title: "Mineur Acharné", desc: "Miner 200 blocs de pierre", difficulty: "medium", points: 35, reward: "1 pioche enchantée Efficiency I" },

    // DIFFICILES (50-75 points) - les "gros" succès de grind
    { id: 40, title: "Vache Folle", desc: "Tuer 100 vaches", difficulty: "hard", points: 50, reward: "32 steaks" },
    { id: 41, title: "Creeper Hunter", desc: "Tuer 50 creepers", difficulty: "hard", points: 55, reward: "32 poudre à canon" },
    { id: 42, title: "Enderman Slayer", desc: "Tuer 30 endermen", difficulty: "hard", points: 60, reward: "16 perles d'ender" },
    { id: 43, title: "Mineur Légendaire", desc: "Miner 20 diamants", difficulty: "hard", points: 65, reward: "5 diamants bonus" },
    { id: 44, title: "Pilleur de Piglins", desc: "Tuer 50 piglins", difficulty: "hard", points: 55, reward: "1 lingot de Netherite" },

    // EXTRÊMES (100+ points) - les succès vraiment longs
    { id: 45, title: "Apocalypse Zombie", desc: "Tuer 200 zombies", difficulty: "extreme", points: 100, reward: "Armure complète en fer enchantée" },
    { id: 46, title: "Maître Mineur", desc: "Miner 64 diamants", difficulty: "extreme", points: 150, reward: "9 lingots de Netherite" },
    { id: 47, title: "Éleveur Suprême", desc: "Faire naître 100 animaux", difficulty: "extreme", points: 100, reward: "Cheval équipé + armure de cheval en diamant" },
    { id: 48, title: "Sans Égratignure", desc: "Survivre 20 jours sans subir de dégâts", difficulty: "extreme", points: 120, reward: "Pomme dorée enchantée x5" },

    // ===== SUCCÈS - VAGUE 2 =====

    // FACILES (10-20 points)
    { id: 49, title: "Pêche Intensive", desc: "Attraper 20 poissons", difficulty: "easy", points: 20, reward: "1 seau" },
    { id: 50, title: "Jardin Fleuri", desc: "Récolter 20 fleurs", difficulty: "easy", points: 10, reward: "3 pots de fleur" },
    { id: 51, title: "Apiculteur", desc: "Récolter du miel 5 fois", difficulty: "easy", points: 20, reward: "5 pots de miel" },
    { id: 52, title: "Décorateur", desc: "Fabriquer 10 objets de décoration différents", difficulty: "easy", points: 15, reward: "4 tableaux" },

    // MOYENS (25-40 points)
    { id: 53, title: "Bûcheron Pro", desc: "Récolter 256 bûches de bois", difficulty: "medium", points: 30, reward: "1 hache enchantée Efficiency I" },
    { id: 54, title: "Dompteur", desc: "Apprivoiser 5 loups ou chats", difficulty: "medium", points: 25, reward: "8 os" },
    { id: 55, title: "Cheminot", desc: "Parcourir 1000 blocs en wagon de mine", difficulty: "medium", points: 30, reward: "32 rails" },
    { id: 56, title: "Architecte", desc: "Construire une structure (pont, tour...) de 50 blocs", difficulty: "medium", points: 25, reward: "16 blocs de pierre taillée" },
    { id: 57, title: "Maître Brasseur", desc: "Fabriquer 10 potions", difficulty: "medium", points: 35, reward: "10 verrues du Nether" },

    // DIFFICILES (50-75 points)
    { id: 58, title: "Conquérant du Nether", desc: "Tuer 20 blazes", difficulty: "hard", points: 60, reward: "16 bâtons de blaze" },
    { id: 59, title: "Chasseur de Larmes", desc: "Tuer 10 ghasts", difficulty: "hard", points: 65, reward: "10 larmes de ghast" },
    { id: 60, title: "Nuit Infernale", desc: "Survivre une nuit entière à l'extérieur sans subir de dégâts", difficulty: "hard", points: 50, reward: "Armure de cuir enchantée" },
    { id: 61, title: "Forgeron Diamant", desc: "Obtenir 5 diamants en moins de 30 minutes de jeu (depuis le spawn)", difficulty: "hard", points: 70, reward: "Pioche en diamant Fortune II" },

    // EXTRÊMES (100+ points)
    { id: 62, title: "Marathon", desc: "Jouer 50 heures cumulées sur le serveur", difficulty: "extreme", points: 100, reward: "Élytre" },
    { id: 63, title: "Ferme Industrielle", desc: "Récolter 1000 cultures au total (blé, carottes, pommes de terre...)", difficulty: "extreme", points: 120, reward: "Shulker Box remplie de graines variées" },

    // ===== SUCCÈS - VAGUE 3 =====

    // FACILES (10-20 points)
    { id: 64, title: "Premiers Outils", desc: "Fabriquer un set complet d'outils en pierre", difficulty: "easy", points: 10, reward: "1 set d'outils en pierre bonus" },
    { id: 65, title: "Récolte d'Halloween", desc: "Récolter 10 citrouilles", difficulty: "easy", points: 10, reward: "1 lanterne de citrouille" },
    { id: 66, title: "Cueilleur de Champignons", desc: "Récolter 20 champignons", difficulty: "easy", points: 10, reward: "5 ragoûts de champignons" },
    { id: 67, title: "Randonneur", desc: "Parcourir 5000 blocs à pied", difficulty: "easy", points: 15, reward: "1 paire de bottes en cuir" },
    { id: 68, title: "Nageur", desc: "Parcourir 500 blocs à la nage", difficulty: "easy", points: 10, reward: "1 casque en carapace de tortue" },
    { id: 69, title: "Collectionneur de Coquillages", desc: "Récolter 5 coquilles de nautile", difficulty: "easy", points: 20, reward: "5 coquilles de nautile bonus" },
    { id: 70, title: "Premier Enchantement", desc: "Enchanter un objet pour la première fois", difficulty: "easy", points: 15, reward: "5 lapis-lazuli" },
    { id: 71, title: "Cuisinier", desc: "Cuire 30 aliments au four", difficulty: "easy", points: 15, reward: "Plats variés (poulet + porc cuits)" },
    { id: 72, title: "Mineur de Cuivre", desc: "Miner 32 blocs de cuivre brut", difficulty: "easy", points: 15, reward: "16 lingots de cuivre" },
    { id: 73, title: "Trésor Englouti", desc: "Trouver et explorer une épave de navire", difficulty: "easy", points: 20, reward: "1 boussole + 8 lingots de fer" },
    { id: 74, title: "Premier Élevage", desc: "Faire un premier croisement d'animaux", difficulty: "easy", points: 10, reward: "1 seau de lait" },
    { id: 75, title: "Bricoleur du Dimanche", desc: "Réparer un outil à l'enclume", difficulty: "easy", points: 15, reward: "1 enclume" },

    // MOYENS (25-40 points)
    { id: 76, title: "Sniper", desc: "Tuer 10 mobs à l'arc à plus de 20 blocs de distance", difficulty: "medium", points: 30, reward: "32 flèches" },
    { id: 77, title: "Tunnelier", desc: "Creuser un tunnel de 100 blocs de long", difficulty: "medium", points: 30, reward: "1 pioche en fer + 8 torches" },
    { id: 78, title: "Tanneur", desc: "Fabriquer une armure complète en cuir", difficulty: "medium", points: 25, reward: "1 set d'armure en cuir bonus" },
    { id: 79, title: "Récolteur de Cactus", desc: "Récolter 64 cactus", difficulty: "medium", points: 25, reward: "16 teintures vertes" },
    { id: 80, title: "Maître du Feu", desc: "Allumer 10 feux avec un briquet", difficulty: "medium", points: 25, reward: "1 briquet" },
    { id: 81, title: "Sculpteur", desc: "Fabriquer 10 blocs décoratifs différents", difficulty: "medium", points: 25, reward: "16 blocs de quartz" },
    { id: 82, title: "Pilleur de Donjon", desc: "Trouver et vider un coffre de butin dans un donjon", difficulty: "medium", points: 35, reward: "2 diamants" },
    { id: 83, title: "Ami des Dauphins", desc: "Nourrir un dauphin avec du poisson 5 fois", difficulty: "medium", points: 30, reward: "5 poissons tropicaux" },
    { id: 84, title: "Premier Portail", desc: "Construire un portail du Nether fonctionnel", difficulty: "medium", points: 30, reward: "8 obsidiennes bonus" },
    { id: 85, title: "Premier Beacon", desc: "Activer une balise (niveau 1)", difficulty: "medium", points: 35, reward: "5 émeraudes" },
    { id: 86, title: "Commerçant", desc: "Faire 20 échanges avec des villageois", difficulty: "medium", points: 30, reward: "5 émeraudes" },
    { id: 87, title: "Couveur", desc: "Récolter 30 œufs", difficulty: "medium", points: 25, reward: "1 gâteau" },
    { id: 88, title: "Pêcheur Chanceux", desc: "Attraper un objet rare en pêchant (livre enchanté, selle, nom tag...)", difficulty: "medium", points: 35, reward: "1 canne à pêche enchantée bonus" },
    { id: 89, title: "Alchimiste", desc: "Brasser une potion de soin", difficulty: "medium", points: 25, reward: "3 potions de soin" },

    // DIFFICILES (50-75 points)
    { id: 90, title: "Chasseur de Vex", desc: "Tuer 10 vex", difficulty: "hard", points: 55, reward: "16 émeraudes" },
    { id: 91, title: "Évocateur Vaincu", desc: "Tuer un Evoker", difficulty: "hard", points: 60, reward: "1 totem d'immortalité" },
    { id: 92, title: "Chasseur de Capitaines", desc: "Tuer 5 pillards capitaines (porteurs de bannière)", difficulty: "hard", points: 55, reward: "1 bannière inquiétante (ominous banner)" },
    { id: 93, title: "Explorateur des Abysses", desc: "Explorer 3 ruines/monuments sous-marins", difficulty: "hard", points: 60, reward: "1 conduit" },
    { id: 94, title: "Forgeron du Bastion", desc: "Récupérer 5 fragments de Netherite", difficulty: "hard", points: 65, reward: "1 lingot de Netherite bonus" },
    { id: 95, title: "Chasseur de Hoglins", desc: "Tuer 20 hoglins", difficulty: "hard", points: 55, reward: "16 cuirs" },
    { id: 96, title: "Strider Tamer", desc: "Apprivoiser et monter un strider", difficulty: "hard", points: 50, reward: "10 champignons écarlates" },
    { id: 97, title: "Plongeur de Lave", desc: "Traverser une mer de lave grâce à une potion de résistance au feu", difficulty: "hard", points: 60, reward: "3 potions de résistance au feu" },
    { id: 98, title: "Chasseur de Shulkers", desc: "Tuer 10 shulkers", difficulty: "hard", points: 70, reward: "10 coquilles de shulker" },
    { id: 99, title: "Ingénieur Redstone", desc: "Construire une ferme automatique fonctionnelle (mobs ou cultures)", difficulty: "hard", points: 60, reward: "32 redstone + 16 répéteurs" },
    { id: 100, title: "Voie Express", desc: "Construire un réseau de rails de 2000 blocs", difficulty: "hard", points: 65, reward: "64 rails" },
    { id: 101, title: "Chasseur de Trésors II", desc: "Trouver et récupérer le butin de 3 cartes au trésor", difficulty: "hard", points: 60, reward: "3 diamants" },
    { id: 102, title: "Élevage Intensif", desc: "Avoir un enclos contenant 20 animaux", difficulty: "hard", points: 50, reward: "1 cloche bonus" },
    { id: 103, title: "Maître Enchanteur", desc: "Enchanter 10 objets différents", difficulty: "hard", points: 55, reward: "10 lapis-lazuli + 1 livre enchanté" },

    // EXTRÊMES (100+ points)
    { id: 104, title: "Triple Wither", desc: "Vaincre le Wither 3 fois", difficulty: "extreme", points: 150, reward: "3 étoiles du Nether" },
    { id: 105, title: "Gardien de l'Œuf", desc: "Récupérer l'œuf de dragon après une 2e victoire sur l'Ender Dragon", difficulty: "extreme", points: 150, reward: "1 œuf de dragon" },
    { id: 106, title: "Speedrun Total", desc: "Vaincre l'Ender Dragon en moins de 3h de jeu cumulées sur ce monde", difficulty: "extreme", points: 200, reward: "1 Élytre + 32 fusées" },
    { id: 107, title: "Usine Automatisée", desc: "Construire une machine redstone complexe (tri automatique, ferme XP...)", difficulty: "extreme", points: 130, reward: "1 Shulker Box remplie de redstone" },
    { id: 108, title: "Ferme à XP", desc: "Construire une ferme XP fonctionnelle générant un niveau 30 en continu", difficulty: "extreme", points: 120, reward: "20 bouteilles d'expérience" },
    { id: 109, title: "Citadelle", desc: "Construire une base de plus de 5000 blocs", difficulty: "extreme", points: 150, reward: "Stack de blocs au choix (64)" },
    { id: 110, title: "Collection d'Armures", desc: "Posséder une armure complète de chaque matériau (cuir, fer, or, diamant, Netherite)", difficulty: "extreme", points: 130, reward: "1 set complet Netherite enchanté" },
    { id: 111, title: "Zoo Légendaire", desc: "Avoir au moins un exemplaire de chaque animal apprivoisable dans un enclos", difficulty: "extreme", points: 120, reward: "1 laisse + 1 selle" },
    { id: 112, title: "Maître du Temps", desc: "Jouer 100 heures cumulées sur le serveur", difficulty: "extreme", points: 150, reward: "1 Élytre + 32 fusées" },
    { id: 113, title: "Le Tout", desc: "Compléter 100% de tous les autres succès", difficulty: "extreme", points: 200, reward: "Coffre légendaire : set Netherite enchanté + Élytre + 2 totems d'immortalité" },
];

// Paliers de récompenses (informatif - non distribués automatiquement)
const rewardTiers = [
    { points: 50, icon: "🥉", title: "Apprenti", reward: "Coffre de départ : 32 fer, 16 or, nourriture x64" },
    { points: 100, icon: "🥈", title: "Aventurier", reward: "Kit exploration : carte, boussole, lunettes, cheval" },
    { points: 200, icon: "🥇", title: "Héros", reward: "Épée diamant Sharpness III + bouclier" },
    { points: 350, icon: "💎", title: "Champion", reward: "Pioche Netherite Efficiency IV + Fortune II" },
    { points: 500, icon: "👑", title: "Légende", reward: "Élytre + 32 fusées + armure complète enchantée" },
    { points: 750, icon: "⚡", title: "Mythique", reward: "Commande admin : spawn 1 item de ton choix" },
    { points: 1000, icon: "🌟", title: "Divin", reward: "Mode créatif pendant 10 minutes" },
    { points: 1500, icon: "🏔️", title: "Vétéran", reward: "Choix d'un enchantement légendaire sur une arme ou un outil" },
    { points: 2500, icon: "🔥", title: "Maître Suprême", reward: "1 set complet d'armure Netherite déjà enchantée" },
    { points: 4000, icon: "🌌", title: "Ascendant", reward: "Un avantage permanent au choix (à définir avec l'admin)" },
    { points: 6000, icon: "♾️", title: "Chasseur de Succès Ultime", reward: "Titre honorifique + statue/monument à ton nom sur le serveur" }
];
