// ====================================================================
// Données du PASS DE FACTION pour le site (miroir de bot/faction-pass.js).
// money = euros donnés à CHAQUE membre en ligne au palier.
// icon  = id de texture (CDN nerothe, via PASS_ICON_BASE déjà défini).
// ====================================================================
const FACTION_PASS_TIER_COST = 5;

const factionTiersData = [
    { tier: 1,  label: "Ration de guerre",        icon: "cooked_beef",            count: 16, extra: 1, money: 20 },
    { tier: 2,  label: "Petit arsenal",           icon: "iron_ingot",             count: 8,  extra: 1, money: 25 },
    { tier: 3,  label: "Réserve de flèches",      icon: "arrow",                  count: 64, extra: 1, money: 25 },
    { tier: 4,  label: "Potions de soin",         icon: "splash_potion",          count: 4,  extra: 0, money: 30 },
    { tier: 5,  label: "Lingots de fer",          icon: "iron_ingot",             count: 16, extra: 0, money: 40 },
    { tier: 6,  label: "Boucliers",               icon: "shield",                 count: 2,  extra: 1, money: 30 },
    { tier: 7,  label: "Pommes dorées",           icon: "golden_apple",           count: 4,  extra: 0, money: 45 },
    { tier: 8,  label: "Arc enchanté",            icon: "bow",                    count: 1,  extra: 1, money: 50 },
    { tier: 9,  label: "Réserve d'or",            icon: "gold_ingot",             count: 16, extra: 0, money: 55 },
    { tier: 10, label: "★ Diamants de guerre",    icon: "diamond",                count: 8,  extra: 0, money: 100 },
    { tier: 11, label: "Potions de force",        icon: "splash_potion",          count: 4,  extra: 0, money: 50 },
    { tier: 12, label: "TNT de raid",             icon: "tnt",                    count: 8,  extra: 0, money: 60 },
    { tier: 13, label: "Casque & plastron fer",   icon: "iron_chestplate",        count: 1,  extra: 1, money: 55 },
    { tier: 14, label: "Jambières & bottes fer",  icon: "iron_leggings",          count: 1,  extra: 1, money: 55 },
    { tier: 15, label: "★ Épée diamant tranchante",icon: "diamond_sword",         count: 1,  extra: 0, money: 120 },
    { tier: 16, label: "Perles de l'Ender",       icon: "ender_pearl",            count: 8,  extra: 0, money: 60 },
    { tier: 17, label: "Potions de rapidité",     icon: "splash_potion",          count: 4,  extra: 0, money: 55 },
    { tier: 18, label: "Obsidienne (base)",       icon: "obsidian",               count: 16, extra: 0, money: 70 },
    { tier: 19, label: "Lots de pommes dorées",   icon: "golden_apple",           count: 8,  extra: 0, money: 80 },
    { tier: 20, label: "★ Lingots de netherite",  icon: "netherite_ingot",        count: 1,  extra: 1, money: 150 },
    { tier: 21, label: "Arc Infinité",            icon: "bow",                    count: 1,  extra: 1, money: 70 },
    { tier: 22, label: "Potions persistantes",    icon: "lingering_potion",       count: 4,  extra: 0, money: 65 },
    { tier: 23, label: "Plastron diamant",        icon: "diamond_chestplate",     count: 1,  extra: 0, money: 90 },
    { tier: 24, label: "Casque & jambières diam.",icon: "diamond_helmet",         count: 1,  extra: 1, money: 90 },
    { tier: 25, label: "★ Pomme dorée enchantée", icon: "enchanted_golden_apple", count: 2,  extra: 0, money: 150 },
    { tier: 26, label: "TNT lourde",              icon: "tnt",                    count: 16, extra: 1, money: 80 },
    { tier: 27, label: "Totem d'immortalité",     icon: "totem_of_undying",       count: 1,  extra: 0, money: 120 },
    { tier: 28, label: "Épée netherite",          icon: "netherite_sword",        count: 1,  extra: 0, money: 150 },
    { tier: 29, label: "Plastron netherite",      icon: "netherite_chestplate",   count: 1,  extra: 0, money: 160 },
    { tier: 30, label: "★★ TRÉSOR DE GUERRE",     icon: "netherite_ingot",        count: 2,  extra: 1, money: 300 }
];
