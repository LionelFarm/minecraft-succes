// ====================================================================
// Liste des succès et des paliers de récompenses.
// Ces données sont identiques pour tout le monde (pas besoin de Firestore).
// Pour ajouter / modifier un succès, modifie simplement ce fichier.
// L'id de chaque succès doit rester unique (utilisé par le bot et le
// datapack d'auto-détection).
//
// NOTE : toutes les descriptions ci-dessous correspondent à une condition
// que le jeu sait mesurer, pour que TOUT soit détecté automatiquement.
//
// CHAMP "cat" (nature du succès) :
//   combat       ⚔️  tuer des mobs / des joueurs, équipement de combat
//   minage       ⛏️  minerais, pierre, creuser
//   metier       🌾  ferme, élevage, pêche, commerce, cuisine
//   construction 🏗️  poser des blocs, artisanat, décoration
//   magie        🧪  enchantements, potions, redstone
//   aventure     🧭  exploration, structures, dimensions, boss
//   prestige     🏅  temps de jeu, survie longue, niveaux, 100%
//
// ÉQUILIBRAGE : "hardcore / strict" — le matériel se mérite. Les objets
// de prestige (Netherite, Élytre...) ne tombent que sur des succès longs.
// ====================================================================

const achievements = [
    // FACILES (10-20 points)
    { id: 1, title: "Premier Sang", desc: "Tuer ta première créature", cat: "combat", difficulty: "easy", points: 10, reward: "5 steaks" },
    { id: 2, title: "Bûcheron", desc: "Récolter 64 bûches de bois", cat: "metier", difficulty: "easy", points: 10, reward: "1 hache en fer" },
    { id: 3, title: "Mineur Débutant", desc: "Miner 32 blocs de pierre", cat: "minage", difficulty: "easy", points: 10, reward: "1 pioche en fer" },
    { id: 4, title: "Fermier", desc: "Planter 20 graines de blé", cat: "metier", difficulty: "easy", points: 15, reward: "10 pains" },
    { id: 5, title: "Pêcheur", desc: "Attraper 5 poissons", cat: "metier", difficulty: "easy", points: 15, reward: "1 canne à pêche enchantée (Luck I)" },
    { id: 6, title: "Éleveur", desc: "Faire naître 3 animaux", cat: "metier", difficulty: "easy", points: 15, reward: "1 selle" },
    { id: 7, title: "Explorateur", desc: "Sprinter sur 2000 blocs cumulés", cat: "aventure", difficulty: "easy", points: 20, reward: "1 carte vierge + boussole" },
    { id: 8, title: "Premier Abri", desc: "Dormir dans un lit", cat: "aventure", difficulty: "easy", points: 20, reward: "1 lanterne" },

    // MOYENS (25-40 points)
    { id: 9, title: "Full Fer", desc: "Porter une armure complète en fer", cat: "combat", difficulty: "medium", points: 25, reward: "16 lingots de fer" },
    { id: 10, title: "Diamants !", desc: "Miner 5 diamants", cat: "minage", difficulty: "medium", points: 30, reward: "2 diamants bonus" },
    { id: 11, title: "Nether Explorer", desc: "Entrer dans le Nether", cat: "aventure", difficulty: "medium", points: 30, reward: "8 obsidiennes" },
    { id: 12, title: "Potion Master", desc: "Brasser une potion", cat: "magie", difficulty: "medium", points: 35, reward: "5 verrues du Nether + 3 bouteilles d'eau" },
    { id: 13, title: "Enchanteur", desc: "Enchanter 3 objets", cat: "magie", difficulty: "medium", points: 35, reward: "15 lapis-lazuli" },
    { id: 14, title: "Village Protector", desc: "Repousser un raid de pillards", cat: "combat", difficulty: "medium", points: 40, reward: "Totem d'immortalité" },
    { id: 15, title: "Redstone Engineer", desc: "Miner 64 minerais de redstone", cat: "minage", difficulty: "medium", points: 30, reward: "32 redstone + 4 pistons" },
    { id: 16, title: "Bibliothécaire", desc: "Fabriquer 15 étagères", cat: "construction", difficulty: "medium", points: 25, reward: "1 livre enchanté Réparation (Mending)" },

    // DIFFICILES (50-75 points)
    { id: 17, title: "Full Diamant", desc: "Porter une armure complète en diamant", cat: "combat", difficulty: "hard", points: 50, reward: "4 diamants + livre Unbreaking II" },
    { id: 18, title: "Dragon Slayer", desc: "Vaincre l'Ender Dragon", cat: "aventure", difficulty: "hard", points: 75, reward: "Élytre" },
    { id: 19, title: "Wither Hunter", desc: "Vaincre le Wither", cat: "combat", difficulty: "hard", points: 75, reward: "Étoile du Nether + 32 blocs de quartz" },
    { id: 20, title: "Ocean Monument", desc: "Tuer un Gardien Ancien (monument océanique)", cat: "aventure", difficulty: "hard", points: 60, reward: "Conduit + 8 blocs de prismarine" },
    { id: 21, title: "Bastion Raider", desc: "Miner 5 blackstone doré (bastion)", cat: "aventure", difficulty: "hard", points: 55, reward: "Lingot de Netherite" },
    { id: 22, title: "100 Niveaux", desc: "Atteindre le niveau 100 d'XP", cat: "prestige", difficulty: "hard", points: 50, reward: "Meule + 20 bouteilles d'XP" },
    { id: 23, title: "La Collection", desc: "Tuer 5 wither-squelettes (récolter une tête)", cat: "combat", difficulty: "hard", points: 65, reward: "Tête de dragon" },

    // EXTRÊMES (100+ points)
    { id: 24, title: "Full Netherite", desc: "Porter une armure complète en Netherite", cat: "combat", difficulty: "extreme", points: 100, reward: "Pomme dorée enchantée x2" },
    { id: 25, title: "Beacon Master", desc: "Fabriquer une balise", cat: "construction", difficulty: "extreme", points: 100, reward: "Balise supplémentaire + choix de 2 effets permanents" },
    { id: 26, title: "Exterminateur", desc: "Tuer 500 créatures au total", cat: "combat", difficulty: "extreme", points: 150, reward: "16 diamants" },
    { id: 27, title: "Hardcore Legend", desc: "Survivre 100 jours in-game sans mourir", cat: "prestige", difficulty: "extreme", points: 120, reward: "Armure Netherite Protection IV complète" },
    { id: 28, title: "Mega Base", desc: "Poser 1000 blocs de construction", cat: "construction", difficulty: "extreme", points: 100, reward: "Shulker Box + 27 blocs au choix" },

    // ===== SUCCÈS "GRIND" (compteurs) =====

    // FACILES (10-20 points)
    { id: 29, title: "Boucher", desc: "Tuer 50 vaches", cat: "combat", difficulty: "easy", points: 15, reward: "10 steaks" },
    { id: 30, title: "Chasseur de Poulets", desc: "Tuer 50 poulets", cat: "combat", difficulty: "easy", points: 15, reward: "16 plumes" },
    { id: 31, title: "Tonte", desc: "Tondre 30 fois (avec des cisailles)", cat: "metier", difficulty: "easy", points: 15, reward: "1 lit" },
    { id: 32, title: "Carrière", desc: "Miner 100 blocs de pierre", cat: "minage", difficulty: "easy", points: 20, reward: "8 torches" },
    { id: 33, title: "Sable à gogo", desc: "Miner 64 blocs de sable", cat: "minage", difficulty: "easy", points: 10, reward: "10 blocs de verre" },

    // MOYENS (25-40 points)
    { id: 34, title: "Charbonnier", desc: "Miner 64 blocs de charbon", cat: "minage", difficulty: "medium", points: 25, reward: "32 torches" },
    { id: 35, title: "Zombie Slayer", desc: "Tuer 50 zombies", cat: "combat", difficulty: "medium", points: 30, reward: "16 lingots de fer" },
    { id: 36, title: "Archer Killer", desc: "Tuer 30 squelettes", cat: "combat", difficulty: "medium", points: 30, reward: "1 arc + 32 flèches" },
    { id: 37, title: "Araignées Écrasées", desc: "Tuer 30 araignées", cat: "combat", difficulty: "medium", points: 25, reward: "16 fils" },
    { id: 38, title: "Éleveur Pro", desc: "Faire naître 10 animaux", cat: "metier", difficulty: "medium", points: 30, reward: "1 cloche" },
    { id: 39, title: "Mineur Acharné", desc: "Miner 200 blocs de pierre", cat: "minage", difficulty: "medium", points: 35, reward: "1 pioche enchantée Efficiency I" },

    // DIFFICILES (50-75 points) - les "gros" succès de grind
    { id: 40, title: "Vache Folle", desc: "Tuer 100 vaches", cat: "combat", difficulty: "hard", points: 50, reward: "32 steaks" },
    { id: 41, title: "Creeper Hunter", desc: "Tuer 50 creepers", cat: "combat", difficulty: "hard", points: 55, reward: "32 poudre à canon" },
    { id: 42, title: "Enderman Slayer", desc: "Tuer 30 endermen", cat: "combat", difficulty: "hard", points: 60, reward: "16 perles d'ender" },
    { id: 43, title: "Mineur Légendaire", desc: "Miner 20 diamants", cat: "minage", difficulty: "hard", points: 65, reward: "5 diamants bonus" },
    { id: 44, title: "Pilleur de Piglins", desc: "Tuer 50 piglins", cat: "combat", difficulty: "hard", points: 55, reward: "1 lingot de Netherite" },

    // EXTRÊMES (100+ points) - les succès vraiment longs
    { id: 45, title: "Apocalypse Zombie", desc: "Tuer 200 zombies", cat: "combat", difficulty: "extreme", points: 100, reward: "Armure complète en fer enchantée" },
    { id: 46, title: "Maître Mineur", desc: "Miner 64 diamants", cat: "minage", difficulty: "extreme", points: 150, reward: "4 lingots de Netherite" },
    { id: 47, title: "Éleveur Suprême", desc: "Faire naître 100 animaux", cat: "metier", difficulty: "extreme", points: 100, reward: "Cheval équipé + armure de cheval en diamant" },
    { id: 48, title: "Sans Égratignure", desc: "Survivre 20 jours sans subir de dégâts", cat: "prestige", difficulty: "extreme", points: 120, reward: "Pomme dorée enchantée x5" },

    // ===== SUCCÈS - VAGUE 2 =====

    // FACILES (10-20 points)
    { id: 49, title: "Pêche Intensive", desc: "Attraper 20 poissons", cat: "metier", difficulty: "easy", points: 20, reward: "1 seau" },
    { id: 50, title: "Jardin Fleuri", desc: "Récolter 20 fleurs", cat: "metier", difficulty: "easy", points: 10, reward: "3 pots de fleur" },
    { id: 51, title: "Apiculteur", desc: "Remplir 5 fioles (récolter du miel)", cat: "metier", difficulty: "easy", points: 20, reward: "5 pots de miel" },
    { id: 52, title: "Décorateur", desc: "Fabriquer 10 tableaux", cat: "construction", difficulty: "easy", points: 15, reward: "4 tableaux" },

    // MOYENS (25-40 points)
    { id: 53, title: "Bûcheron Pro", desc: "Récolter 256 bûches de bois", cat: "metier", difficulty: "medium", points: 30, reward: "1 hache enchantée Efficiency I" },
    { id: 54, title: "Dompteur", desc: "Apprivoiser un animal (loup, chat...)", cat: "metier", difficulty: "medium", points: 25, reward: "8 os" },
    { id: 55, title: "Cheminot", desc: "Parcourir 1000 blocs en wagon de mine", cat: "aventure", difficulty: "medium", points: 30, reward: "32 rails" },
    { id: 56, title: "Architecte", desc: "Poser 100 blocs de construction", cat: "construction", difficulty: "medium", points: 25, reward: "16 blocs de pierre taillée" },
    { id: 57, title: "Maître Brasseur", desc: "Récolter 16 verrues du Nether", cat: "magie", difficulty: "medium", points: 35, reward: "10 verrues du Nether" },

    // DIFFICILES (50-75 points)
    { id: 58, title: "Conquérant du Nether", desc: "Tuer 20 blazes", cat: "combat", difficulty: "hard", points: 60, reward: "16 bâtons de blaze" },
    { id: 59, title: "Chasseur de Larmes", desc: "Tuer 10 ghasts", cat: "combat", difficulty: "hard", points: 65, reward: "10 larmes de ghast" },
    { id: 60, title: "Nuit Infernale", desc: "Survivre 3 jours in-game sans mourir", cat: "prestige", difficulty: "hard", points: 50, reward: "Armure de cuir enchantée" },
    { id: 61, title: "Forgeron Diamant", desc: "Miner 10 diamants", cat: "minage", difficulty: "hard", points: 70, reward: "Pioche en diamant Fortune II" },

    // EXTRÊMES (100+ points)
    { id: 62, title: "Marathon", desc: "Jouer 50 heures cumulées sur le serveur", cat: "prestige", difficulty: "extreme", points: 100, reward: "Élytre" },
    { id: 63, title: "Ferme Industrielle", desc: "Récolter 1000 cultures (blé, carottes, pommes de terre...)", cat: "metier", difficulty: "extreme", points: 120, reward: "Shulker Box remplie de graines variées" },

    // ===== SUCCÈS - VAGUE 3 =====

    // FACILES (10-20 points)
    { id: 64, title: "Premiers Outils", desc: "Fabriquer une pioche en pierre", cat: "construction", difficulty: "easy", points: 10, reward: "1 set d'outils en pierre bonus" },
    { id: 65, title: "Récolte d'Halloween", desc: "Récolter 10 citrouilles", cat: "metier", difficulty: "easy", points: 10, reward: "1 lanterne de citrouille" },
    { id: 66, title: "Cueilleur de Champignons", desc: "Récolter 20 champignons", cat: "metier", difficulty: "easy", points: 10, reward: "5 ragoûts de champignons" },
    { id: 67, title: "Randonneur", desc: "Parcourir 5000 blocs à pied", cat: "aventure", difficulty: "easy", points: 15, reward: "1 paire de bottes en cuir" },
    { id: 68, title: "Nageur", desc: "Parcourir 500 blocs à la nage", cat: "aventure", difficulty: "easy", points: 10, reward: "1 casque en carapace de tortue" },
    { id: 69, title: "Collectionneur de Coquillages", desc: "Récolter 5 coquilles de nautile", cat: "aventure", difficulty: "easy", points: 20, reward: "5 coquilles de nautile bonus" },
    { id: 70, title: "Premier Enchantement", desc: "Enchanter un objet pour la première fois", cat: "magie", difficulty: "easy", points: 15, reward: "5 lapis-lazuli" },
    { id: 71, title: "Cuisinier", desc: "Manger 30 aliments", cat: "metier", difficulty: "easy", points: 15, reward: "Plats variés (poulet + porc cuits)" },
    { id: 72, title: "Mineur de Cuivre", desc: "Miner 32 blocs de cuivre brut", cat: "minage", difficulty: "easy", points: 15, reward: "16 lingots de cuivre" },
    { id: 73, title: "Trésor Englouti", desc: "Trouver un Cœur de la mer (trésor englouti)", cat: "aventure", difficulty: "easy", points: 20, reward: "1 boussole + 8 lingots de fer" },
    { id: 74, title: "Premier Élevage", desc: "Faire un premier croisement d'animaux", cat: "metier", difficulty: "easy", points: 10, reward: "1 seau de lait" },
    { id: 75, title: "Bricoleur du Dimanche", desc: "Réparer un outil à l'enclume", cat: "construction", difficulty: "easy", points: 15, reward: "1 enclume" },

    // MOYENS (25-40 points)
    { id: 76, title: "Sniper", desc: "Tirer 100 flèches à l'arc", cat: "combat", difficulty: "medium", points: 30, reward: "32 flèches" },
    { id: 77, title: "Tunnelier", desc: "Miner 500 blocs de pierre (tunnel)", cat: "minage", difficulty: "medium", points: 30, reward: "1 pioche en fer + 8 torches" },
    { id: 78, title: "Tanneur", desc: "Porter une armure complète en cuir", cat: "combat", difficulty: "medium", points: 25, reward: "1 set d'armure en cuir bonus" },
    { id: 79, title: "Récolteur de Cactus", desc: "Récolter 64 cactus", cat: "metier", difficulty: "medium", points: 25, reward: "16 teintures vertes" },
    { id: 80, title: "Maître du Feu", desc: "Allumer 10 feux avec un briquet", cat: "construction", difficulty: "medium", points: 25, reward: "1 briquet" },
    { id: 81, title: "Sculpteur", desc: "Fabriquer 16 briques de pierre", cat: "construction", difficulty: "medium", points: 25, reward: "16 blocs de quartz" },
    { id: 82, title: "Pilleur de Donjon", desc: "Ramasser 5 émeraudes", cat: "aventure", difficulty: "medium", points: 35, reward: "2 diamants" },
    { id: 83, title: "Ami des Dauphins", desc: "Donner 5 poissons crus (à un dauphin)", cat: "metier", difficulty: "medium", points: 30, reward: "5 poissons tropicaux" },
    { id: 84, title: "Premier Portail", desc: "Miner 10 obsidiennes (pour un portail)", cat: "aventure", difficulty: "medium", points: 30, reward: "8 obsidiennes bonus" },
    { id: 85, title: "Premier Beacon", desc: "Obtenir une étoile du Nether", cat: "aventure", difficulty: "medium", points: 35, reward: "5 émeraudes" },
    { id: 86, title: "Commerçant", desc: "Faire 20 échanges avec des villageois", cat: "metier", difficulty: "medium", points: 30, reward: "5 émeraudes" },
    { id: 87, title: "Couveur", desc: "Récolter 30 œufs", cat: "metier", difficulty: "medium", points: 25, reward: "1 gâteau" },
    { id: 88, title: "Pêcheur Chanceux", desc: "Attraper 50 poissons", cat: "metier", difficulty: "medium", points: 35, reward: "1 canne à pêche enchantée bonus" },
    { id: 89, title: "Alchimiste", desc: "Boire une potion", cat: "magie", difficulty: "medium", points: 25, reward: "3 potions de soin" },

    // DIFFICILES (50-75 points)
    { id: 90, title: "Chasseur de Vex", desc: "Tuer 10 vex", cat: "combat", difficulty: "hard", points: 55, reward: "16 émeraudes" },
    { id: 91, title: "Évocateur Vaincu", desc: "Tuer un Evoker", cat: "combat", difficulty: "hard", points: 60, reward: "1 totem d'immortalité" },
    { id: 92, title: "Chasseur de Capitaines", desc: "Tuer un capitaine pillard", cat: "combat", difficulty: "hard", points: 55, reward: "1 bannière inquiétante (ominous banner)" },
    { id: 93, title: "Explorateur des Abysses", desc: "Nager 2000 blocs cumulés", cat: "aventure", difficulty: "hard", points: 60, reward: "1 conduit" },
    { id: 94, title: "Forgeron du Bastion", desc: "Miner 5 débris antiques", cat: "minage", difficulty: "hard", points: 65, reward: "1 lingot de Netherite bonus" },
    { id: 95, title: "Chasseur de Hoglins", desc: "Tuer 20 hoglins", cat: "combat", difficulty: "hard", points: 55, reward: "16 cuirs" },
    { id: 96, title: "Strider Tamer", desc: "Obtenir une selle (pour chevaucher un strider)", cat: "aventure", difficulty: "hard", points: 50, reward: "10 champignons écarlates" },
    { id: 97, title: "Plongeur de Lave", desc: "Tuer 20 cubes de magma", cat: "combat", difficulty: "hard", points: 60, reward: "3 potions de résistance au feu" },
    { id: 98, title: "Chasseur de Shulkers", desc: "Tuer 10 shulkers", cat: "combat", difficulty: "hard", points: 70, reward: "10 coquilles de shulker" },
    { id: 99, title: "Ingénieur Redstone", desc: "Fabriquer 8 répéteurs", cat: "magie", difficulty: "hard", points: 60, reward: "32 redstone + 16 répéteurs" },
    { id: 100, title: "Voie Express", desc: "Poser 256 rails", cat: "construction", difficulty: "hard", points: 65, reward: "64 rails" },
    { id: 101, title: "Chasseur de Trésors II", desc: "Ramasser 10 diamants", cat: "aventure", difficulty: "hard", points: 60, reward: "3 diamants" },
    { id: 102, title: "Élevage Intensif", desc: "Faire naître 50 animaux", cat: "metier", difficulty: "hard", points: 50, reward: "1 cloche bonus" },
    { id: 103, title: "Maître Enchanteur", desc: "Enchanter 10 objets différents", cat: "magie", difficulty: "hard", points: 55, reward: "10 lapis-lazuli + 1 livre enchanté" },

    // EXTRÊMES (100+ points)
    { id: 104, title: "Triple Wither", desc: "Vaincre le Wither 3 fois", cat: "combat", difficulty: "extreme", points: 150, reward: "3 étoiles du Nether" },
    { id: 105, title: "Gardien de l'Œuf", desc: "Posséder l'œuf de dragon", cat: "aventure", difficulty: "extreme", points: 150, reward: "1 œuf de dragon" },
    { id: 106, title: "Double Dragon", desc: "Vaincre l'Ender Dragon 2 fois", cat: "aventure", difficulty: "extreme", points: 200, reward: "1 Élytre + 32 fusées" },
    { id: 107, title: "Usine Automatisée", desc: "Fabriquer 16 pistons", cat: "magie", difficulty: "extreme", points: 130, reward: "1 Shulker Box remplie de redstone" },
    { id: 108, title: "Ferme à XP", desc: "Atteindre le niveau 50 d'XP", cat: "prestige", difficulty: "extreme", points: 120, reward: "20 bouteilles d'expérience" },
    { id: 109, title: "Citadelle", desc: "Poser 5000 blocs de construction", cat: "construction", difficulty: "extreme", points: 150, reward: "Stack de blocs au choix (64)" },
    { id: 110, title: "Collection d'Armures", desc: "Porter une armure complète en or", cat: "combat", difficulty: "medium", points: 40, reward: "8 lingots d'or + 2 diamants" },
    { id: 111, title: "Zoo Légendaire", desc: "Faire naître 200 animaux", cat: "metier", difficulty: "extreme", points: 120, reward: "1 laisse + 1 selle" },
    { id: 112, title: "Maître du Temps", desc: "Jouer 100 heures cumulées sur le serveur", cat: "prestige", difficulty: "extreme", points: 150, reward: "1 Élytre + 32 fusées" },
    { id: 113, title: "Le Tout", desc: "Compléter 100% de tous les autres succès", cat: "prestige", difficulty: "extreme", points: 200, reward: "Coffre légendaire : set Netherite enchanté + Élytre + 2 totems d'immortalité" },

    // ====================================================================
    // ===== VAGUE 4 — PACK PvP + NOUVELLES CATÉGORIES (équilibrage strict)
    // ====================================================================

    // --- ⚔️ COMBAT & PvP (joueurs) ---
    { id: 114, title: "Premier Duel", desc: "Tuer ton premier joueur ennemi", cat: "combat", difficulty: "easy", points: 20, reward: "8 flèches + 5 steaks" },
    { id: 115, title: "Bagarreur", desc: "Tuer 10 joueurs ennemis", cat: "combat", difficulty: "medium", points: 40, reward: "16 flèches + 1 bouclier" },
    { id: 116, title: "Redouté", desc: "Tuer 25 joueurs ennemis", cat: "combat", difficulty: "hard", points: 65, reward: "3 pommes dorées" },
    { id: 117, title: "Tueur de Légende", desc: "Tuer 50 joueurs ennemis", cat: "combat", difficulty: "extreme", points: 120, reward: "8 diamants" },
    { id: 118, title: "Seigneur de Guerre", desc: "Tuer 100 joueurs ennemis", cat: "combat", difficulty: "extreme", points: 200, reward: "2 lingots de Netherite" },

    // --- ⚔️ COMBAT (nouveaux mobs) ---
    { id: 119, title: "Chasseur de Sorcières", desc: "Tuer 20 sorcières", cat: "combat", difficulty: "medium", points: 30, reward: "8 fioles + 4 redstone" },
    { id: 120, title: "Briseur de Slimes", desc: "Tuer 50 slimes", cat: "combat", difficulty: "medium", points: 30, reward: "16 boules de slime" },
    { id: 121, title: "Cauchemar", desc: "Tuer 20 phantoms", cat: "combat", difficulty: "medium", points: 35, reward: "8 membranes de phantom" },
    { id: 122, title: "Fléau des Noyés", desc: "Tuer 40 noyés", cat: "combat", difficulty: "medium", points: 30, reward: "1 trident (si chance) — sinon 16 lingots de cuivre" },
    { id: 123, title: "Anti-Pillards", desc: "Tuer 50 pillards", cat: "combat", difficulty: "hard", points: 55, reward: "1 arbalète + 16 flèches" },
    { id: 124, title: "Tombeur de Ravageur", desc: "Tuer 5 ravageurs", cat: "combat", difficulty: "hard", points: 65, reward: "8 émeraudes + 1 selle" },
    { id: 125, title: "Gardien Vaincu", desc: "Tuer 30 gardiens", cat: "combat", difficulty: "hard", points: 60, reward: "8 cristaux de prismarine + 8 prismarine" },
    { id: 126, title: "Le Silence", desc: "Vaincre le Warden", cat: "combat", difficulty: "extreme", points: 200, reward: "1 hameçon de l'Ancienne Cité + 8 diamants" },
    { id: 127, title: "Boucherie Totale", desc: "Tuer 1000 créatures au total", cat: "combat", difficulty: "extreme", points: 150, reward: "1 épée diamant Sharpness III" },

    // --- ⛏️ MINAGE (nouveaux minerais) ---
    { id: 128, title: "Mineur de Fer", desc: "Miner 64 minerais de fer", cat: "minage", difficulty: "medium", points: 30, reward: "8 lingots de fer" },
    { id: 129, title: "Chercheur d'Or", desc: "Miner 32 minerais d'or", cat: "minage", difficulty: "medium", points: 35, reward: "8 lingots d'or" },
    { id: 130, title: "Lapis pour Tous", desc: "Miner 64 minerais de lapis-lazuli", cat: "minage", difficulty: "easy", points: 20, reward: "16 lapis-lazuli" },
    { id: 131, title: "Filon d'Émeraude", desc: "Miner 5 minerais d'émeraude", cat: "minage", difficulty: "hard", points: 60, reward: "3 émeraudes" },
    { id: 132, title: "Maître des Profondeurs", desc: "Miner 2000 blocs de pierre", cat: "minage", difficulty: "hard", points: 65, reward: "1 pioche diamant Efficiency III" },
    { id: 133, title: "Roche en Fusion", desc: "Miner 32 obsidiennes", cat: "minage", difficulty: "medium", points: 35, reward: "8 obsidiennes bonus" },

    // --- 🌾 MÉTIERS ---
    { id: 134, title: "Grand Pêcheur", desc: "Attraper 100 poissons", cat: "metier", difficulty: "hard", points: 55, reward: "1 canne à pêche Chance de la mer II" },
    { id: 135, title: "Marchand Aguerri", desc: "Faire 50 échanges avec des villageois", cat: "metier", difficulty: "medium", points: 35, reward: "8 émeraudes" },
    { id: 136, title: "Maître Éleveur", desc: "Faire naître 500 animaux", cat: "metier", difficulty: "extreme", points: 130, reward: "2 cloches + 1 armure de cheval en fer" },
    { id: 137, title: "Festin", desc: "Manger 100 aliments", cat: "metier", difficulty: "medium", points: 30, reward: "1 gâteau + 16 carottes dorées" },
    { id: 138, title: "Moissonneur", desc: "Récolter 500 cultures", cat: "metier", difficulty: "medium", points: 35, reward: "1 houe en fer + 32 os-poudre" },
    { id: 139, title: "Tonte Pro", desc: "Tondre 100 moutons", cat: "metier", difficulty: "medium", points: 30, reward: "16 laine blanche" },

    // --- 🏗️ CONSTRUCTION ---
    { id: 140, title: "Maçon", desc: "Poser 2500 blocs de construction", cat: "construction", difficulty: "hard", points: 60, reward: "1 Shulker Box (vide)" },
    { id: 141, title: "Bâtisseur d'Empire", desc: "Poser 10000 blocs de construction", cat: "construction", difficulty: "extreme", points: 150, reward: "2 Shulker Box + 64 pierre taillée" },
    { id: 142, title: "Réseau Ferroviaire", desc: "Poser 512 rails", cat: "construction", difficulty: "hard", points: 55, reward: "64 rails + 8 rails propulsés" },

    // --- 🧪 MAGIE ---
    { id: 143, title: "Apprenti Sorcier", desc: "Enchanter 25 objets", cat: "magie", difficulty: "hard", points: 55, reward: "32 lapis-lazuli + 1 livre enchanté" },
    { id: 144, title: "Archimage", desc: "Enchanter 50 objets", cat: "magie", difficulty: "extreme", points: 120, reward: "1 table d'enchantement + 1 livre Réparation (Mending)" },
    { id: 145, title: "Distillateur", desc: "Boire 25 potions", cat: "magie", difficulty: "medium", points: 35, reward: "1 alambic + 8 verrues du Nether" },

    // --- 🧭 AVENTURE ---
    { id: 146, title: "Globe-Trotter", desc: "Marcher 25000 blocs à pied", cat: "aventure", difficulty: "hard", points: 55, reward: "1 paire de bottes Feather Falling II" },
    { id: 147, title: "Sprinteur Olympique", desc: "Sprinter 10000 blocs", cat: "aventure", difficulty: "medium", points: 35, reward: "16 carottes dorées" },
    { id: 148, title: "Aviateur", desc: "Voler 5000 blocs en élytre", cat: "aventure", difficulty: "hard", points: 65, reward: "32 fusées de feu d'artifice" },
    { id: 149, title: "Sauteur", desc: "Sauter 5000 fois", cat: "aventure", difficulty: "medium", points: 30, reward: "1 paire de bottes en fer" },
    { id: 150, title: "Roi des Mers", desc: "Nager 5000 blocs cumulés", cat: "aventure", difficulty: "hard", points: 55, reward: "1 casque Respiration III" },

    // --- 🏅 PRESTIGE ---
    { id: 151, title: "Survivant Aguerri", desc: "Survivre 7 jours in-game sans mourir", cat: "prestige", difficulty: "hard", points: 70, reward: "2 pommes dorées" },
    { id: 152, title: "Vétéran", desc: "Jouer 25 heures cumulées sur le serveur", cat: "prestige", difficulty: "medium", points: 40, reward: "5 bouteilles d'expérience" },
    { id: 153, title: "Aspirant", desc: "Atteindre le niveau 30 d'XP", cat: "prestige", difficulty: "easy", points: 20, reward: "1 meule + 5 bouteilles d'XP" },
];

// Libellés et icônes des natures (pour l'affichage du site)
const categories = {
    combat:       { label: "Combat & PvP",  icon: "⚔️", color: "#ef4444" },
    minage:       { label: "Minage",        icon: "⛏️", color: "#a78bfa" },
    metier:       { label: "Métiers",       icon: "🌾", color: "#22c55e" },
    construction: { label: "Construction",  icon: "🏗️", color: "#f59e0b" },
    magie:        { label: "Magie",         icon: "🧪", color: "#06b6d4" },
    aventure:     { label: "Aventure",      icon: "🧭", color: "#3b82f6" },
    prestige:     { label: "Prestige",      icon: "🏅", color: "#eab308" },
};

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
