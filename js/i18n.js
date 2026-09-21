/**
 * WitchyLy — Tri-Lingual Localization System
 * Supports: English (en), Français (fr), العربية (ar - RTL)
 * Automatically handles text swapping, DOM updates, direction (LTR/RTL), and localStorage.
 */

const translations = {
  en: {
    meta: {
      title: "WitchyLy",
      description: "Enter the magical world of WitchyLy. Catch falling ingredients, brew potions, explore 8 magical rooms and master 80 levels on iOS and Android."
    },
    nav: {
      story: "Story",
      game: "Game",
      features: "Features",
      rooms: "8 Rooms",
      grimoire: "Grimoire",
      progression: "Progression",
      leaderboard: "Leaderboard",
      gallery: "Gallery",
      download: "Download",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    },
    hero: {
      badge: "✨ Available on iOS & Android",
      headline: "Chaos has never been so magical!",
      subtitle: "Catch falling ingredients, brew magical potions and help Ly fill her enchanted grimoire.",
      btn_ios: "Download on iOS",
      btn_ios_sub: "TestFlight Beta",
      btn_android: "Get it on Android",
      btn_android_sub: "Google Play Store",
      pill_rooms: "8 Magical Rooms",
      pill_levels: "80 Levels to Master",
      pill_potions: "6 Potion Families",
      scroll: "Scroll to explore"
    },
    story: {
      tag: "The Characters",
      headline: "Meet the Characters",
      subtitle: "The quirky crew behind Lilly's magical journey — from sly brokers and friendly shopkeepers to wise witch mentors.",
      char_lilly_name: "Lilly",
      char_lilly_role: "The Witch Hero",
      char_lilly_tag1: "Academy Graduate",
      char_lilly_tag2: "Wildly Enthusiastic",
      char_lilly_tag3: "Slightly Naive",
      char_lilly_desc: "A young witch fresh out of the Academy. Passionate, determined, and brimming with joy to finally own her very first witchy manor. While a little too trusting with goblin contracts, her heart and grit make her an unstoppable brewer.",
      char_lilly_quote: "“There it is... my very own witchy manor!”",
      char_grukk_name: "Grukk",
      char_grukk_role: "The Sly Broker",
      char_grukk_tag1: "Fast-Talking Salesman",
      char_grukk_tag2: "Tiny Print Enthusiast",
      char_grukk_tag3: "Smug Smile Champion",
      char_grukk_desc: "A fast-talking goblin broker delighted with his deal. He plays on words and tiny legal print, always insisting with a smirk: “Technically, I told the truth!”",
      char_grukk_quote: "“And naturally... everything inside is yours!”",
      char_goldin_name: "Goldin",
      char_goldin_role: "The Magic Shopkeeper",
      char_goldin_tag1: "Friendly Merchant",
      char_goldin_tag2: "Potions & Goodies",
      char_goldin_tag3: "Spend Wisely!",
      char_goldin_desc: "The cheerful goblin merchant behind the magical emporium. Packed with potent potions, rare items, and useful goodies, he warmly welcomes every apprentice: “Got coins? Pick anything you like, and spend wisely!”",
      char_goldin_quote: "“Welcome to my shop! Got some coins? ...And remember, spend wisely!”",
      char_milly_name: "Aunt Milly",
      char_milly_role: "The Heartwarming Mentor",
      char_milly_tag1: "Loving & Supportive",
      char_milly_tag2: "Gentle Spirit",
      char_milly_tag3: "Lilly's Greatest Fan",
      char_milly_desc: "Lilly's sweet, affectionate aunt who always provides unconditional love, comforting encouragement, and pride in her niece. She sees the sparkling promise in Lilly even when circumstances look bleak.",
      char_milly_quote: "“Oh, Lilly! We're so proud of you, sweetheart!”",
      char_tatty_name: "Aunt Tatty",
      char_tatty_role: "The Wise Alchemist",
      char_tatty_tag1: "Master Witch",
      char_tatty_tag2: "Pragmatic & Sharp",
      char_tatty_tag3: "Inspiring Leader",
      char_tatty_desc: "A master witch of renown and sharp pragmatism. Tatty wastes no time weeping over empty rooms. Instead, she delivers the spark that turns despair into triumph: an empty room is simply a canvas waiting for magic.",
      char_tatty_quote: "“Make it yours. Every great witch has to start somewhere.”"
    },
    gameplay: {
      tag: "Core Gameplay",
      headline: "Catch. Match. Brew.",
      subtitle: "Slip under the rain of falling ingredients, move your cauldron and catch the right elements to brew magical concoctions… without letting it all overflow!",
      step1_title: "01 — Catch",
      step1_desc: "Ingredients rain down from above. Move Ly's cauldron swiftly across the floor and catch the right ingredients before they fall.",
      step2_title: "02 — Match",
      step2_desc: "Combine the right ingredient families. 3 of the same family brews a potion; 2 of the same yields XP; all different triggers a Curse!",
      step3_title: "03 — Brew",
      step3_desc: "Create potions, progress through levels, unlock rare recipes and fill Ly's enchanted grimoire to master the craft.",
      demo_hint: "✨ Interactive cauldron preview — watch the enchanted ingredients fall!",
      cauldron_queue: "Brewing Cauldron (3 Slots)",
      cauldron_status_empty: "Catch 3 ingredients to brew!",
      cauldron_status_progress: "Match families for a potion!",
      outcome_potion: "Potion Brewed!",
      outcome_xp: "+50 XP!",
      outcome_curse: "CURSE!"
    },
    features: {
      tag: "Spellbinding Features",
      headline: "Everything you need for an enchanted adventure",
      subtitle: "A casual game perfect for short sessions, packed with rising challenges and heartwarming witchy charm.",
      f1_title: "Simple, Addictive Gameplay",
      f1_desc: "Catch falling ingredients, match them carefully and brew the perfect potion. Easy to pick up, hard to put down.",
      f2_title: "8 Magical Rooms",
      f2_desc: "From the Living Room to the Kitchen, Bedroom, and Attic: every room in Ly's house hides its own challenges.",
      f3_title: "80 Levels to Master",
      f3_desc: "Dozens of levels with rising difficulty, special timer rounds, and rewarding alchemical challenges.",
      f4_title: "6 Ingredient Families",
      f4_desc: "Creature, Nature, Arcane, Dark Magic, Ethereal, and Sweets: learn to pair the right families to succeed.",
      f5_title: "Lilly's Grimoire",
      f5_desc: "A faithful enchanted grimoire that guides you every step of the way, keeping track of all your discoveries.",
      f6_title: "Apprentice Leaderboards",
      f6_desc: "Measure yourself against fellow apprentice witches and climb to the top of the magical academy."
    },
    rooms: {
      tag: "Explore Ly's Manor",
      headline: "A House Full of Magic",
      subtitle: "From the Living Room to the Kitchen, the Bedroom to the Attic: every room in Ly's house hides its own atmosphere.",
      tab_r1: "Living Room",
      tab_r2: "Kitchen",
      tab_r3: "Bedroom",
      tab_r4: "Bathroom",
      tab_r5: "Laboratory",
      tab_r6: "Greenhouse",
      tab_r7: "Library",
      tab_r8: "Attic",
      r1_name: "1. Living Room",
      r1_desc: "Gothic arched windows, moonlight starry skies, and the mystic purple star rug where Ly's adventure begins.",
      r1_levels: "Levels 1 – 10",
      r2_name: "2. Kitchen",
      r2_desc: "A warm witch's hearth with copper pots, bubbling spice jars, and crackling enchanted embers.",
      r2_levels: "Levels 11 – 20",
      r3_name: "3. Bedroom",
      r3_desc: "A cozy mystical bedroom with a velvet canopy bed, glowing rune wards, and Ly's enchanted broom.",
      r3_levels: "Levels 21 – 30",
      r4_name: "4. Bathroom",
      r4_desc: "An enchanted spa chamber with a bubbling clawfoot tub, soothing herbal soaps, and floating luminous bubbles.",
      r4_levels: "Levels 31 – 40",
      r5_name: "5. Laboratory",
      r5_desc: "Shelves of glowing alchemical flasks, copper distillation coils, and vaporous brewing experiments.",
      r5_levels: "Levels 41 – 50",
      r6_name: "6. Greenhouse",
      r6_desc: "Sunken glass ceilings where luminescent moonflowers bloom and rare wild botanical herbs twist upward.",
      r6_levels: "Levels 51 – 60",
      r7_name: "7. Library",
      r7_desc: "Towering bookshelves, floating ancient tomes, and centuries of forgotten potion recipes.",
      r7_levels: "Levels 61 – 70",
      r8_name: "8. Attic",
      r8_desc: "Dusty treasure chests, star telescopes, glowing celestial relics, and curious nocturnal critters.",
      r8_levels: "Levels 71 – 80",
      badge_featured: "Featured in Game Art",
      badge_locked: "Mastered in Game"
    },
    grimoire: {
      tag: "Enchanted Spellbook",
      headline: "Every potion tells a story.",
      subtitle: "Discover magical combinations, record your creations and follow Ly's journey through her enchanted grimoire.",
      inspect_label: "Selected Potion Showcase",
      p1_name: "Dark Potion",
      p1_type: "Volatile Essence",
      p1_desc: "Distilled shadow essence and ancient bone runes. Good combinations create explosive alchemical energy!",
      p2_name: "Creature Potion",
      p2_type: "Familiar Infusion",
      p2_desc: "Infused with playful spirits, firefly nectar, and garden familiars. Creates lively bubbling brews.",
      p3_name: "Arcane Potion",
      p3_type: "Pure Energy",
      p3_desc: "Concentrated cosmic power focused through an amethyst pendant. Stabilizes erratic recipes.",
      p4_name: "Nature Potion",
      p4_type: "Botanical Brew",
      p4_desc: "Dewdrops from sacred groves and emerald sun-leaves. Cleanses cauldron residue instantly.",
      p5_name: "Ethereal Potion",
      p5_type: "Celestial Starlight",
      p5_desc: "Luminous stardust captured beneath the full moon. Adds brilliant glow to your grimoire pages.",
      p6_name: "Sweet Potion",
      p6_type: "Candied Delight",
      p6_desc: "Sparkling sugar crystals and candied moon-berries. Boosts combo multipliers during intense rounds."
    },
    ingredients: {
      tag: "Alchemical Families",
      headline: "6 Families to Combine",
      subtitle: "Catch 3 of the same family for a potion, 2 of the same for XP, or 3 different families and it's a Curse!",
      fam1_title: "Creature Family",
      fam1_potion: "Brews: Creature Potion",
      fam1_desc: "Living creatures, Unpredictable movement, Chaos and agility",
      fam2_title: "Arcane Family",
      fam2_potion: "Brews: Arcane Potion",
      fam2_desc: "Magical artifacts, Precious objects, Arcane energy",
      fam3_title: "Nature Family",
      fam3_potion: "Brews: Nature Potion",
      fam3_desc: "Organic ingredients, Living world, Natural magic",
      fam4_title: "Dark Magic Family",
      fam4_potion: "Brews: Dark Potion",
      fam4_desc: "Curses, Forbidden magic, Dark alchemy",
      fam5_title: "Ethereal Family",
      fam5_potion: "Brews: Ethereal Potion",
      fam5_desc: "Spirits, Magical energy, Floating elements",
      fam6_title: "Sweets Family",
      fam6_potion: "Brews: Sweet Potion",
      fam6_desc: "Treats, Mischievous magic, Weird witch snacks"
    },
    progression: {
      tag: "The Witch's Journey",
      headline: "80 levels. Endless magical chaos.",
      subtitle: "Progress through dozens of levels with rising difficulty, unlocking rooms and rare Grimoire entries.",
      m1_title: "Level 1 — The First Spark",
      m1_desc: "Learn cauldron movement & basic ingredient catches in the Living Room.",
      m1_reward: "Reward: 50 Witch Coins",
      m2_title: "Level 10 — Living Room Mastery",
      m2_desc: "Handle double streams and unlock the path to the Kitchen.",
      m2_reward: "Reward: 75 Witch Coins",
      m3_title: "Level 25 — Bedroom Slumber",
      m3_desc: "Balance speed rounds and ward off restless spirits around the canopy bed.",
      m3_reward: "Reward: 100 Witch Coins",
      m4_title: "Level 50 — Alchemical Secrets",
      m4_desc: "Brew complex multi-family potions under time pressure in the Lab.",
      m4_reward: "Reward: 150 Witch Coins + Crystal Shard",
      m5_title: "Level 80 — The Grand Witch",
      m5_desc: "Conquer the final chamber, master all recipes and complete Lilly's Grimoire!",
      m5_reward: "Reward: 200 Witch Coins + Grand Master Hat"
    },
    leaderboard: {
      tag: "Competitive Magic",
      headline: "Can you become the top apprentice?",
      subtitle: "Measure yourself against other apprentice witches on the leaderboard by mastering potion combos.",
      rank_col: "Rank",
      witch_col: "Apprentice Witch",
      score_col: "High Score",
      grimoire_col: "Grimoire",
      disclaimer: "✨ Stylized visual representation of in-game leaderboard. Real-time scores and ranks synchronize directly within the WitchyLy mobile game."
    },
    gallery: {
      tag: "Screenshots & Art",
      headline: "A Peek Inside WitchyLy",
      subtitle: "Take a look at the actual game screens, adorable artwork, and colorful potion laboratory.",
      caption1: "Core Gameplay — Move the cauldron and catch falling elements",
      caption2: "Room 1 — Living Room stage selection and cozy decor",
      caption3: "Grimoire Inventory — Browse unlocked potions and recipes",
      caption4: "Daily Login Bonus — Collect witch coins and purple crystals",
      modal_close: "Close preview"
    },
    cta: {
      headline: "Ready to brew some magic?",
      subtitle: "Put on your pointy hat, grab your cauldron and join Ly in WitchyLy: chaos has never been so magical!",
      btn_ios: "Download on iOS (TestFlight)",
      btn_android: "Get it on Google Play",
      available_text: "Available on iOS and Android"
    },
    footer: {
      brand_tagline: "Chaos has never been so magical! Join Ly on iOS and Android.",
      developer_text: "A magical creation by Vespera.",
      links_title: "Quick Links",
      legal_title: "Legal & Info",
      copyright: "© 2026 Vespera. All rights reserved."
    },
    legal: {
      privacy_title: "Privacy Policy",
      privacy_subtitle: "Last Updated: September 2026 — Vespera (WitchyLy)",
      terms_title: "Terms & Conditions",
      terms_subtitle: "Last Updated: September 2026 — Vespera (WitchyLy)",
      back_home: "← Back to WitchyLy"
    }
  },

  fr: {
    meta: {
      title: "WitchyLy — Préparez la magie, attrapez les ingrédients & maîtrisez le Grimoire",
      description: "Entrez dans le monde enchanteur de WitchyLy. Attrapez les ingrédients, préparez des potions, explorez 8 pièces magiques et maîtrisez 80 niveaux sur iOS et Android."
    },
    nav: {
      story: "Histoire",
      game: "Jeu",
      features: "Fonctionnalités",
      rooms: "8 Pièces",
      grimoire: "Grimoire",
      progression: "Progression",
      leaderboard: "Classement",
      gallery: "Galerie",
      download: "Télécharger",
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales"
    },
    hero: {
      badge: "✨ Disponible sur iOS & Android",
      headline: "Le chaos n'a jamais été aussi magique !",
      subtitle: "Attrapez les ingrédients qui tombent, préparez des potions magiques et aidez Ly à remplir son grimoire enchanté.",
      btn_ios: "Télécharger sur iOS",
      btn_ios_sub: "Bêta TestFlight",
      btn_android: "Disponible sur Android",
      btn_android_sub: "Google Play Store",
      pill_rooms: "8 Pièces Magiques",
      pill_levels: "80 Niveaux à Maîtriser",
      pill_potions: "6 Familles de Potions",
      scroll: "Faites défiler pour explorer"
    },
    story: {
      tag: "L'Histoire",
      headline: "Les Personnages",
      subtitle: "La joyeuse équipe qui accompagne Lilly dans sa quête magique — du courtier roublard au marchand bienveillant, en passant par ses tantes pleines de sagesse.",
      char_lilly_name: "Lilly",
      char_lilly_role: "La Jeune Sorcière",
      char_lilly_tag1: "Diplômée de l'Académie",
      char_lilly_tag2: "Pleine d'Enthousiasme",
      char_lilly_tag3: "Un brin Naïve",
      char_lilly_desc: "Jeune sorcière fraîchement diplômée, passionnée et immensément fière d'avoir enfin son propre manoir. Un rien naïve face aux contrats magiques, mais bien décidée à faire des miracles !",
      char_lilly_quote: "« Le voilà enfin... mon tout premier manoir magique ! »",
      char_grukk_name: "Grukk",
      char_grukk_role: "Le Courtier Gobelin",
      char_grukk_tag1: "Baratineur Né",
      char_grukk_tag2: "Fan de Petites Lignes",
      char_grukk_tag3: "Sourire Narquois",
      char_grukk_desc: "Vendeur de tapis gobelin ravi de sa combine. Il joue sur les mots et les petites lignes du contrat, répétant toujours avec son sourire narquois : « Techniquement, j'ai dit la vérité ! »",
      char_grukk_quote: "« Et naturellement... tout ce qui est à l'intérieur vous appartient ! »",
      char_goldin_name: "Goldin",
      char_goldin_role: "Le Marchand Magique",
      char_goldin_tag1: "Marchand Chaleureux",
      char_goldin_tag2: "Potions & Objets Rares",
      char_goldin_tag3: "Dépensez avec Sagesse !",
      char_goldin_desc: "Le jovial marchand gobelin de la boutique magique. Débordant de potions revigorantes, d'artefacts enchantés et de babioles utiles, Goldin accueille chaque apprentie avec le sourire : « Tu as des pièces ? Choisis ce qui te plaît… et dépense avec sagesse ! »",
      char_goldin_quote: "« Bienvenue dans ma boutique ! Tu as des pièces ? Et souviens-toi… dépense avec sagesse ! »",
      char_milly_name: "Tante Milly",
      char_milly_role: "La Mentore Bienveillante",
      char_milly_tag1: "Tendre & Dévouée",
      char_milly_tag2: "Esprit Réconfortant",
      char_milly_tag3: "Première Admiratrice",
      char_milly_desc: "La tante douce et attentionnée de Lilly. Face à la surprise du manoir vide, sa tendresse et ses encouragements redonnent immédiatement confiance à sa petite-nièce.",
      char_milly_quote: "« Oh, Lilly ! Nous sommes tellement fières de toi, ma chérie ! »",
      char_tatty_name: "Tante Tatty",
      char_tatty_role: "L'Alchimiste Avisée",
      char_tatty_tag1: "Grande Sorcière",
      char_tatty_tag2: "Pragmatique & Vive",
      char_tatty_tag3: "Guide Inspirante",
      char_tatty_desc: "Grande sorcière pragmatique et visionnaire. Elle remet aussitôt Lilly sur les rails : « Pas un meuble ? Fais-en ton royaume. Toute grande sorcière doit bien commencer quelque part ! »",
      char_tatty_quote: "« Fais-en ton royaume. Toute grande sorcière doit bien commencer quelque part. »"
    },
    gameplay: {
      tag: "Le Gameplay",
      headline: "Attrapez. Associez. Préparez.",
      subtitle: "Glissez-vous sous la pluie d'ingrédients, déplacez votre chaudron et attrapez les bons éléments pour concocter des potions magiques… sans tout faire déborder !",
      step1_title: "01 — Attrapez",
      step1_desc: "Les ingrédients tombent du haut de l'écran. Déplacez le chaudron de Ly avec agilité pour attraper les bons éléments avant qu'ils ne tombent.",
      step2_title: "02 — Associez",
      step2_desc: "Combinez 3 ingrédients de la même famille pour une potion ; 2 identiques pour de l'XP ; 3 différents déclenchent une Malédiction !",
      step3_title: "03 — Préparez",
      step3_desc: "Créez des potions, progressez dans les niveaux, débloquez des recettes rares et remplissez le grimoire enchanté de Ly.",
      demo_hint: "✨ Aperçu interactif du chaudron — regardez tomber les ingrédients magiques !",
      cauldron_queue: "Chaudron (3 Ingrédients)",
      cauldron_status_empty: "Attrapez 3 ingrédients !",
      cauldron_status_progress: "Associez la même famille !",
      outcome_potion: "Potion Préparée !",
      outcome_xp: "+50 XP !",
      outcome_curse: "MALÉDICTION !"
    },
    features: {
      tag: "Fonctionnalités Envoûtantes",
      headline: "Tout ce qu'il faut pour une aventure magique",
      subtitle: "Un jeu casual parfait pour de courtes sessions, rempli de défis stimulants et d'un charme réconfortant.",
      f1_title: "Un Gameplay Simple et Addictif",
      f1_desc: "Attrapez les ingrédients, associez-les avec soin et réussissez la potion parfaite. Facile à prendre en main, difficile à lâcher.",
      f2_title: "8 Pièces Magiques",
      f2_desc: "Du Salon à la Cuisine, de la Chambre au Grenier : chaque pièce de la maison de Ly cache ses propres défis.",
      f3_title: "80 Niveaux à Maîtriser",
      f3_desc: "Des dizaines de niveaux à la difficulté progressive, des épreuves chronométrées et de superbes récompenses.",
      f4_title: "6 Familles d'Ingrédients",
      f4_desc: "Créature, Nature, Arcanes, Magie Noire, Éthéré et Friandises : apprenez à associer les bonnes familles pour triompher.",
      f5_title: "Le Grimoire de Ly",
      f5_desc: "Un grimoire enchanté qui vous guide pas à pas et conserve l'historique complet de toutes vos créations.",
      f6_title: "Classements d'Apprentis",
      f6_desc: "Mesurez-vous aux autres apprenties sorcières et hissez-vous au sommet de l'académie magique."
    },
    rooms: {
      tag: "Explorez le Manoir de Ly",
      headline: "Une Maison Remplie de Magie",
      subtitle: "Du Salon à la Cuisine, de la Chambre au Grenier : chaque pièce de la maison de Ly possède sa propre atmosphère.",
      tab_r1: "Salon",
      tab_r2: "Cuisine",
      tab_r3: "Chambre",
      tab_r4: "Salle de Bain",
      tab_r5: "Laboratoire",
      tab_r6: "Serre",
      tab_r7: "Bibliothèque",
      tab_r8: "Grenier",
      r1_name: "1. Salon (Living Room)",
      r1_desc: "Fenêtres gothiques, ciel étoilé au clair de lune et tapis violet orné d'étoiles où commence l'aventure de Ly.",
      r1_levels: "Niveaux 1 – 10",
      r2_name: "2. Cuisine (Kitchen)",
      r2_desc: "L'âtre chaleureux d'une sorcière, avec des chaudrons en cuivre, des bocaux d'épices et des braises scintillantes.",
      r2_levels: "Niveaux 11 – 20",
      r3_name: "3. Chambre (Bedroom)",
      r3_desc: "Une chambre mystique et douillette avec un lit à baldaquin en velours, des runes protectrices et le balai magique de Ly.",
      r3_levels: "Niveaux 21 – 30",
      r4_name: "4. Salle de Bain (Bathroom)",
      r4_desc: "Un sanctuaire thermal enchanteur avec une baignoire sur pieds, des savons d'herboriste et des bulles lumineuses.",
      r4_levels: "Niveaux 31 – 40",
      r5_name: "5. Laboratoire (Laboratory)",
      r5_desc: "Des étagères d'éprouvettes luisantes, des alambics en cuivre et d'étonnantes vapeurs alchimiques.",
      r5_levels: "Niveaux 41 – 50",
      r6_name: "6. Serre (Greenhouse)",
      r6_desc: "Une verrière lumineuse où s'épanouissent les fleurs de lune et grimpent des herbes botaniques rares.",
      r6_levels: "Niveaux 51 – 60",
      r7_name: "7. Bibliothèque (Library)",
      r7_desc: "Des bibliothèques vertigineuses, des tomes anciens en lévitation et des siècles de savoirs oubliés.",
      r7_levels: "Niveaux 61 – 70",
      r8_name: "8. Grenier (Attic)",
      r8_desc: "Des malles mystérieuses, un télescope astronomique, des reliques célestes et de curieuses créatures nocturnes.",
      r8_levels: "Niveaux 71 – 80",
      badge_featured: "Présent dans le jeu",
      badge_locked: "Maîtrisé en jeu"
    },
    grimoire: {
      tag: "Le Grimoire Enchanté",
      headline: "Chaque potion raconte une histoire.",
      subtitle: "Découvrez des combinaisons magiques, notez vos créations et suivez le voyage de Ly à travers son grimoire.",
      inspect_label: "Vitrine de Potion Sélectionnée",
      p1_name: "Potion Sombre (Dark Potion)",
      p1_type: "Essence Volatile",
      p1_desc: "Essence d'ombre distillée et runes d'ossements. Les bonnes combinaisons libèrent une puissante énergie alchimique !",
      p2_name: "Potion de Créature",
      p2_type: "Infusion de Familier",
      p2_desc: "Infusée d'esprits malicieux, de nectar de luciole et de familiers. Donne naissance à des bouillons pétillants.",
      p3_name: "Potion des Arcanes",
      p3_type: "Énergie Pure",
      p3_desc: "Concentration de puissance cosmique canalisée par une amulette d'améthyste. Stabilise les formules capricieuses.",
      p4_name: "Potion de Nature",
      p4_type: "Infusion Botanique",
      p4_desc: "Gouttes de rosée de bosquets sacrés et feuilles solaires émeraudes. Purifie instantanément les résidus du chaudron.",
      p5_name: "Potion Éthérée",
      p5_type: "Poussière d'Étoiles",
      p5_desc: "Poussière stellaire lumineuse récoltée lors des nuits de pleine lune. Illumine les pages de votre grimoire.",
      p6_name: "Potion de Friandises (Sweet Potion)",
      p6_type: "Délice Sucré",
      p6_desc: "Cristaux de sucre étincelants et baies de lune confites. Déclenche des multiplicateurs de score spectaculaires."
    },
    ingredients: {
      tag: "Familles Alchimiques",
      headline: "6 Familles d'Ingrédients à Combiner",
      subtitle: "Attrapez 3 ingrédients de la même famille pour une potion, 2 identiques pour de l'XP, ou 3 familles différentes déclenchent une Malédiction !",
      fam1_title: "Famille Créature",
      fam1_potion: "Prépare : Potion de Créature",
      fam1_desc: "Créatures vivantes, mouvements imprévisibles, chaos et agilité",
      fam2_title: "Famille des Arcanes",
      fam2_potion: "Prépare : Potion des Arcanes",
      fam2_desc: "Artefacts magiques, objets précieux, énergie des arcanes",
      fam3_title: "Famille Nature",
      fam3_potion: "Prépare : Potion de Nature",
      fam3_desc: "Ingrédients organiques, monde vivant, magie naturelle",
      fam4_title: "Famille Magie Noire",
      fam4_potion: "Prépare : Potion Sombre",
      fam4_desc: "Malédictions, magie interdite, alchimie sombre",
      fam5_title: "Famille Éthérée",
      fam5_potion: "Prépare : Potion Éthérée",
      fam5_desc: "Esprits, énergie magique, éléments flottants",
      fam6_title: "Famille Friandises",
      fam6_potion: "Prépare : Potion de Friandises",
      fam6_desc: "Friandises, magie malicieuse, étranges collations de sorcière"
    },
    progression: {
      tag: "Le Voyage de la Sorcière",
      headline: "80 niveaux. Un chaos magique infini.",
      subtitle: "Franchissez des dizaines d'étapes à la difficulté grandissante et débloquez des récompenses à chaque palier.",
      m1_title: "Niveau 1 — La Première Étincelle",
      m1_desc: "Apprenez les bases du chaudron et attrapez vos premiers ingrédients dans le Salon.",
      m1_reward: "Récompense : 50 Pièces de Sorcière",
      m2_title: "Niveau 10 — Maîtrise du Salon",
      m2_desc: "Gérez les doubles pluies d'ingrédients et ouvrez l'accès à la Cuisine.",
      m2_reward: "Récompense : 75 Pièces de Sorcière",
      m3_title: "Niveau 25 — Éveil de la Chambre",
      m3_desc: "Accélération du rythme et runes protectrices autour du lit à baldaquin.",
      m3_reward: "Récompense : 100 Pièces de Sorcière",
      m4_title: "Niveau 50 — Secrets Alchimiques",
      m4_desc: "Préparez des potions multi-familles complexes sous haute tension dans le Laboratoire.",
      m4_reward: "Récompense : 150 Pièces + Cristal Violet",
      m5_title: "Niveau 80 — La Grande Sorcière",
      m5_desc: "Triomphez de la dernière pièce, maîtrisez toutes les recettes et complétez le Grimoire de Ly !",
      m5_reward: "Récompense : 200 Pièces + Chapeau de Maître"
    },
    leaderboard: {
      tag: "Compétition Magique",
      headline: "Serez-vous la meilleure apprentie ?",
      subtitle: "Réalisez des potions sans faute, enchaînez les combos et hissez-vous au classement face aux sorcières du monde entier.",
      rank_col: "Rang",
      witch_col: "Apprentie Sorcière",
      score_col: "Score",
      grimoire_col: "Grimoire",
      disclaimer: "✨ Représentation visuelle de l'interface en jeu. Les scores et rangs réels sont synchronisés en direct au sein de l'application mobile WitchyLy."
    },
    gallery: {
      tag: "Captures & Illustrations",
      headline: "Un Coup d'Œil dans WitchyLy",
      subtitle: "Découvrez les véritables écrans du jeu, ses graphismes chaleureux et son laboratoire de potions coloré.",
      caption1: "Gameplay — Déplacez le chaudron et attrapez les éléments qui tombent",
      caption2: "Pièce 1 — Sélection du Salon et son ambiance chaleureuse",
      caption3: "Inventaire du Grimoire — Explorez les potions et recettes débloquées",
      caption4: "Bonus Quotidien — Récoltez des pièces de sorcière et cristaux violets",
      modal_close: "Fermer l'aperçu"
    },
    cta: {
      headline: "Prêt à concocter un peu de magie ?",
      subtitle: "Enfilez votre chapeau pointu, attrapez votre chaudron et rejoignez Ly dans WitchyLy : le chaos n'a jamais été aussi magique !",
      btn_ios: "Télécharger sur iOS (TestFlight)",
      btn_android: "Disponible sur Google Play",
      available_text: "Disponible sur iOS et Android"
    },
    footer: {
      brand_tagline: "Le chaos n'a jamais été aussi magique ! Rejoignez Ly sur iOS et Android.",
      developer_text: "Une création magique par Vespera.",
      links_title: "Navigation",
      legal_title: "Informations Légales",
      copyright: "© 2026 Vespera. Tous droits réservés."
    },
    legal: {
      privacy_title: "Politique de Confidentialité",
      privacy_subtitle: "Dernière mise à jour : Septembre 2026 — Vespera (WitchyLy)",
      terms_title: "Conditions Générales d'Utilisation",
      terms_subtitle: "Dernière mise à jour : Septembre 2026 — Vespera (WitchyLy)",
      back_home: "← Retour à WitchyLy"
    }
  },

  ar: {
    meta: {
      title: "WitchyLy — اصنع السحر، التقط المكونات وتدرّب على الغريموار",
      description: "ادخل عالم WitchyLy الساحر. التقط المكونات المتساقطة، اطبخ الجرعات، استكشف 8 غرف مسحورة واجتز 80 مرحلة على iOS و Android."
    },
    nav: {
      story: "القصة",
      game: "اللعبة",
      features: "المميزات",
      rooms: "8 غرف",
      grimoire: "كتاب التعاويذ",
      progression: "المراحل",
      leaderboard: "المتصدرون",
      gallery: "معرض الصور",
      download: "تحميل",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    },
    hero: {
      badge: "✨ متوفرة الآن على iOS و Android",
      headline: "الفوضى لم تكن يوماً بهذا السحر!",
      subtitle: "التقط المكونات المتساقطة، واصنع جرعات سحرية مذهلة وساعد «لي» في ملء كتاب التعاويذ المسحور.",
      btn_ios: "تحميل على iOS",
      btn_ios_sub: "نسخة TestFlight التجريبية",
      btn_android: "تحميل على Android",
      btn_android_sub: "متجر Google Play",
      pill_rooms: "8 غرف ساحرة",
      pill_levels: "80 مرحلة ممتعة",
      pill_potions: "6 فصائل جرعات",
      scroll: "مرر للأسفل للاستكشاف"
    },
    story: {
      tag: "الحكاية",
      headline: "شخصيات القصة",
      subtitle: "الشخصيات المميزة في رحلة «ليلي» الساحرة — من السمسار الماكر وتاجر المتجر البشوش، إلى عمّاتها الحكيمات اللواتي يوجهن خطاها.",
      char_lilly_name: "ليلي",
      char_lilly_role: "الساحرة البطلة",
      char_lilly_tag1: "خريجة الأكاديمية",
      char_lilly_tag2: "مفعمة بالحماس",
      char_lilly_tag3: "طيبة القلب",
      char_lilly_desc: "ساحرة شابة متخرجة للتو من الأكاديمية، مفعمة بالحماس والفخر بامتلاك قصرها الخاص. على نياتها عند توقيع العقود، لكن عزيمتها قادرة على ملء الجدران الخالية بأروع السحر!",
      char_lilly_quote: "«ها هو ذا أخيراً... قصري السحري الخاص!»",
      char_grukk_name: "غروك",
      char_grukk_role: "سمسار الغوبلن الماكر",
      char_grukk_tag1: "بائع محنك",
      char_grukk_tag2: "خبير البنود الخفية",
      char_grukk_tag3: "ابتسامة مستفزة",
      char_grukk_desc: "سمسار عقارات من الغوبلن شديد الدهاء وسعيد بصفقته. يتلاعب بالكلمات والخطوط الدقيقة، ليردد مبتسماً ابتسامته المستفزة: «من الناحية التقنية، قلت الصدق تماماً!»",
      char_grukk_quote: "«وبالطبع... كل ما بالداخل هو ملككِ بالكامل!»",
      char_goldin_name: "غولدين",
      char_goldin_role: "تاجر المتجر السحري",
      char_goldin_tag1: "تاجر ودود",
      char_goldin_tag2: "جرعات وأدوات مفيدة",
      char_goldin_tag3: "أنفق بحكمة!",
      char_goldin_desc: "تاجر الغوبلن البشوش صاحب متجر الأدوات السحرية. زاخر بالجرعات الفعالة والأدوات المسحورة النافعة، يستقبل المتدربين بحرارة وبابتسامته ذات السن الذهبية: «معك نقود؟ اختر ما يحلو لك.. وتذكّر أن تنفق بحكمة!»",
      char_goldin_quote: "«أهلاً بك في متجري! معك نقود؟ وتذكّر دائماً… أنفق بحكمة!»",
      char_milly_name: "العمة ميلي",
      char_milly_role: "المرشدة الحنونة",
      char_milly_tag1: "حنونة وداعمة",
      char_milly_tag2: "روح طيبة",
      char_milly_tag3: "المشجعة الأولى",
      char_milly_desc: "عمة ليلي الحبيبة وبلسمها الروحي. دائمة الثناء والتشجيع، وتبث في قلب ليلي الثقة والأمل بأن القصر الفارغ يحمل مستقبلاً ساحراً.",
      char_milly_quote: "«أوه يا ليلي! نحن فخورتان بكِ للغاية يا حبيبتي!»",
      char_tatty_name: "العمة تاتي",
      char_tatty_role: "الخيميائية الحكيمة",
      char_tatty_tag1: "ساحرة قديرة",
      char_tatty_tag2: "عملية وحازمة",
      char_tatty_tag3: "قائدة ملهمة",
      char_tatty_desc: "ساحرة قديرة ذات عقلية عملية صارمة. تحسم الموقف بنصيحتها الذهبية: «قصر خاوٍ؟ اجعليه ملككِ وبصمتكِ. فكل ساحرة عظيمة كانت لها بداية من مكان ما!»",
      char_tatty_quote: "«اجعليه ملككِ وبصمتكِ. فكل ساحرة عظيمة بدأت من مكان ما.»"
    },
    gameplay: {
      tag: "أسلوب اللعب",
      headline: "التقط. طابق. اطبخ.",
      subtitle: "انطلق تحت مطر المكونات المتساقطة، حرّك قِدرك والتقط العناصر المناسبة لتحضير خلطات سحرية فريدة… دون أن يفيض القِدر!",
      step1_title: "01 — التقط",
      step1_desc: "تتساقط المكونات من الأعلى بسرعة. حرّك قِدر «لي» بمرونة عبر الأرضية والتقط المكونات الصحيحة قبل سقوطها.",
      step2_title: "02 — طابق",
      step2_desc: "اجمع 3 مكونات من نفس الفصيلة لتحضير جرعة، أو مكونين للحصول على XP، و3 مكونات مختلفة تسبب لعنة!",
      step3_title: "03 — اطبخ",
      step3_desc: "ابتكر جرعات نادرة، وتقدم عبر المستويات، واكتشف وصفات سرية لتملأ كتاب تعاويذ «لي» المسحور.",
      demo_hint: "✨ معاينة تفاعلية للقِدر السحري — شاهد المكونات تتساقط برقة!",
      cauldron_queue: "محتويات القِدر (3 عناصر)",
      cauldron_status_empty: "التقط 3 مكونات للطبخ!",
      cauldron_status_progress: "طابق نفس الفصيلة!",
      outcome_potion: "تم طبخ الجرعة!",
      outcome_xp: "+50 خبرة (XP)!",
      outcome_curse: "لعنة!"
    },
    features: {
      tag: "مميزات آسرة",
      headline: "كل ما تحتاجه لخوض مغامرة سحرية رائعة",
      subtitle: "لعبة كاجوال مثالية للجلسات القصيرة، مليئة بالتحديات المتصاعدة والأجواء الدافئة اللطيفة.",
      f1_title: "لعب بسيط وممتع للغاية",
      f1_desc: "التقط المكونات وطابقها بدقة لتحضير الجرعة المثالية. سهلة التعلّم ومستحيل أن تمل منها.",
      f2_title: "8 غرف مسحورة",
      f2_desc: "من غرفة المعيشة إلى المطبخ، ومن غرفة النوم حتى العِليّة: كل غرفة في منزل «لي» تحمل تحدياً فريداً.",
      f3_title: "80 مرحلة متدرجة الصعوبة",
      f3_desc: "عشرات المراحل المصممة بعناية مع زيادة متوازنة في التحدي وجولات سرعة خاصة ومكافآت قيّمة.",
      f4_title: "6 فصائل من المكونات",
      f4_desc: "المخلوقات، الطبيعة، الأركين، السحر المظلم، الأثيري، والحلويات: تعلّم دمج الفصائل المناسبة لتنتصر.",
      f5_title: "كتاب تعاويذ «لي» (الsizeGr)",
      f5_desc: "كتاب مسحور يرافقك خطوة بخطوة ويحفظ لك كل وصفة وجرعة سحرية تبتكرها.",
      f6_title: "لوحة صدارة السحرة المتدربين",
      f6_desc: "تنافس مع متدربات السحر حول العالم واثبت جدارتك لتصل إلى قمة الأكاديمية."
    },
    rooms: {
      tag: "استكشف قصر «لي»",
      headline: "منزل ينبض بالسحر",
      subtitle: "من غرفة المعيشة إلى المطبخ، ومن غرفة النوم إلى العِليّة: لكل غرفة في منزل «لي» طابعها الخاص وأجواؤها الساحرة.",
      tab_r1: "المعيشة",
      tab_r2: "المطبخ",
      tab_r3: "غرفة النوم",
      tab_r4: "الحمام",
      tab_r5: "المختبر",
      tab_r6: "الدفيئة",
      tab_r7: "المكتبة",
      tab_r8: "العِليّة",
      r1_name: "1. غرفة المعيشة (Living Room)",
      r1_desc: "نوافذ قوطية مقوسة، وسماء مرصعة بالنجوم وضوء القمر، وسجادة النجوم الأرجوانية حيث تبدأ رحلة «لي».",
      r1_levels: "المراحل 1 – 10",
      r2_name: "2. المطبخ (Kitchen)",
      r2_desc: "موقد ساحرة دافئ يضم أواني نحاسية وبرطمانات توابل تفور وجمرات سحرية متقدة.",
      r2_levels: "المراحل 11 – 20",
      r3_name: "3. غرفة النوم (Bedroom)",
      r3_desc: "غرفة نوم ساحرة ودافئة تضم سريراً مخملياً مزخرفاً، وطلاسم رونية مضيئة، ومكنسة «لي» الطائرة.",
      r3_levels: "المراحل 21 – 30",
      r4_name: "4. الحمام (Bathroom)",
      r4_desc: "ملاذ استشفائي مسحور يضم حوض استحمام عتيقاً، وصابون الأعشاب الطبيعية، وفقاعات مضيئة طافية.",
      r4_levels: "المراحل 31 – 40",
      r5_name: "5. المختبر (Laboratory)",
      r5_desc: "رفوف مكدسة بقوارير كيميائية متوهجة، وأنابيب تقطير نحاسية، وتجارب سحرية غامضة.",
      r5_levels: "المراحل 41 – 50",
      r6_name: "6. الدفيئة (Greenhouse)",
      r6_desc: "سقف زجاجي مشرق حيث تتفتح زهور القمر المضيئة وتلتف الأعشاب البرية النادرة.",
      r6_levels: "المراحل 51 – 60",
      r7_name: "7. المكتبة (Library)",
      r7_desc: "خزائن كتب شاهقة، ومجلدات عتيقة تطوف في الهواء، وأسرار وصفات ضاربة في القِدم.",
      r7_levels: "المراحل 61 – 70",
      r8_name: "8. العِليّة (Attic)",
      r8_desc: "صناديق كنز أثرية، وتلسكوب لرصد النجوم، وقطع أثرية سماوية، وكائنات ليلية لطيفة.",
      r8_levels: "المراحل 71 – 80",
      badge_featured: "موجودة في اللعبة",
      badge_locked: "أُتقنت في اللعبة"
    },
    grimoire: {
      tag: "كتاب التعاويذ المسحور",
      headline: "كل جرعة تروي حكاية.",
      subtitle: "اكتشف توليفات خارقة، ودوّن ابتكاراتك وتابع رحلة «لي» عبر كتابها المفعم بالسحر.",
      inspect_label: "عرض الجرعة المختارة",
      p1_name: "الجرعة المظلمة (Dark Potion)",
      p1_type: "جوهر متقلب",
      p1_desc: "خلاصة الظلال ورونية العظام القديمة. التوليفات الصحيحة تطلق طاقة سحرية هائلة!",
      p2_name: "جرعة الكائنات (Creature)",
      p2_type: "خلاصة الأرواح اللطيفة",
      p2_desc: "مستخلصة من رحيق اليراعات والأرواح الحارسة. تصنع فقاعات حيوية ومرحة.",
      p3_name: "جرعة الأركين (Arcane)",
      p3_type: "طاقة خالصة",
      p3_desc: "طاقة كونية مركزة عبر قلادة الجمشت. تعمل على استقرار الوصفات المعقدة.",
      p4_name: "جرعة الطبيعة (Nature)",
      p4_type: "خلاصة نباتية",
      p4_desc: "قطرات ندى البساتين المقدسة وأوراق الشمس الزمردية. تنظف رواسب القِدر فوراً.",
      p5_name: "الجرعة الأثيرية (Ethereal)",
      p5_type: "بريق النجوم",
      p5_desc: "غبار النجوم المتوهج الملتقط في ليالي اكتمال القمر. يمنح صفحات كتابك إشراقة بديعة.",
      p6_name: "جرعة الحلويات (Sweet Potion)",
      p6_type: "مذاق حلو ساحر",
      p6_desc: "بلورات سكر براقة وتوت قمري محلى. تضاعف نقاطك ومجموع نقاط الكومبو في الجولات الحاسمة."
    },
    ingredients: {
      tag: "العناصر الخيميائية",
      headline: "6 فصائل رئيسية للدمج",
      subtitle: "اجمع 3 مكونات من نفس الفصيلة لتحضير جرعة، أو 2 متطابقين لكسب نقاط الخبرة، أما 3 فصائل مختلفة فتُسبب لعنة!",
      fam1_title: "فصيلة المخلوقات",
      fam1_potion: "تصنع: جرعة الكائنات",
      fam1_desc: "كائنات حية، حركات غير متوقعة، فوضى ورشاقة",
      fam2_title: "فصيلة الأركين",
      fam2_potion: "تصنع: جرعة الأركين",
      fam2_desc: "تحف أثرية سحرية، مقتنيات ثمينة، طاقة الأركين",
      fam3_title: "فصيلة الطبيعة",
      fam3_potion: "تصنع: جرعة الطبيعة",
      fam3_desc: "مكونات عضوية، عالم حي، سحر الطبيعة",
      fam4_title: "فصيلة السحر المظلم",
      fam4_potion: "تصنع: الجرعة المظلمة",
      fam4_desc: "لعنات، سحر محرم، خيمياء مظلمة",
      fam5_title: "الفصيلة الأثيرية",
      fam5_potion: "تصنع: الجرعة الأثيرية",
      fam5_desc: "أرواح طائفة، طاقة سحرية، عناصر عائمة",
      fam6_title: "فصيلة الحلويات",
      fam6_potion: "تصنع: جرعة الحلويات",
      fam6_desc: "حلويات ومكافآت، سحر مرح، وجبات ساحرة خفيفة"
    },
    progression: {
      tag: "رحلة الساحرة الصاعدة",
      headline: "80 مرحلة. فوضى سحرية لا تنتهي.",
      subtitle: "تقدم عبر عشرات المراحل المتصاعدة في التحدي، وافتح غرفاً جديدة ومكافآت مبهرة عند كل إنجاز.",
      m1_title: "المرحلة 1 — الشرارة الأولى",
      m1_desc: "تعلّم تحريك القِدر والتقاط المكونات الأساسية في غرفة المعيشة.",
      m1_reward: "المكافأة: 50 عملة ساحرة ذهبية",
      m2_title: "المرحلة 10 — إتقان المعيشة",
      m2_desc: "تحكم في مسارات السقوط المزدوجة وافتح الطريق إلى المطبخ.",
      m2_reward: "المكافأة: 75 عملة ساحرة ذهبية",
      m3_title: "المرحلة 25 — سحر غرفة النوم",
      m3_desc: "واكب سرعة السقوط المتزايدة والطلاسم الحارسة حول السرير المخملي.",
      m3_reward: "المكافأة: 100 عملة ساحرة ذهبية",
      m4_title: "المرحلة 50 — أسرار المختبر",
      m4_desc: "اطبخ جرعات معقدة متعددة الفصائل تحت ضغط الوقت في المختبر.",
      m4_reward: "المكافأة: 150 عملة + بلورة كريستالية أرجوانية",
      m5_title: "المرحلة 80 — الساحرة الكبرى",
      m5_desc: "اجتز الحجرة الأخيرة واختم جميع الوصفات واكمل كتاب تعاويذ «لي» بالكامل!",
      m5_reward: "المكافأة: 200 عملة + قبعة الساحرة العظمى"
    },
    leaderboard: {
      tag: "المنافسة السحرية",
      headline: "هل يمكنك أن تصبح المتدرب الأول؟",
      subtitle: "اصنع جرعات مثالية، وحافظ على سلاسل الكومبو وتنافس مع متدربات السحر حول العالم.",
      rank_col: "المركز",
      witch_col: "الساحرة المتدربة",
      score_col: "النقاط",
      grimoire_col: "الغريموار",
      disclaimer: "✨ تصميم توضيحي يحاكي لوحة الصدارة داخل اللعبة. تتزامن النتائج والترتيب المباشر لحظياً داخل تطبيق لعبة WitchyLy."
    },
    gallery: {
      tag: "اللقطات والرسومات",
      headline: "نظرة من داخل WitchyLy",
      subtitle: "ألقِ نظرة على الشاشات الحقيقية من داخل اللعبة، ورسوماتها اللطيفة ومختبر الجرعات الملون.",
      caption1: "أسلوب اللعب — حرّك القِدر والتقط العناصر المتساقطة",
      caption2: "الغرفة 1 — شاشة اختيار مرحلة غرفة المعيشة",
      caption3: "قائمة الغريموار — تصفح الجرعات والوصفات المفتوحة",
      caption4: "مكافأة الدخول اليومية — اجمع العملات الذهبية والبلورات السحرية",
      modal_close: "إغلاق المعاينة"
    },
    cta: {
      headline: "هل أنت مستعد لصنع بعض السحر؟",
      subtitle: "ارتدِ قبعتك المدببة، وجهّز قِدرك وانضم إلى «لي» في WitchyLy: فالفوضى لم تكن يوماً بهذا السحر!",
      btn_ios: "تحميل على iOS (TestFlight)",
      btn_android: "تحميل من Google Play",
      available_text: "متوفرة الآن على iOS و Android"
    },
    footer: {
      brand_tagline: "الفوضى لم تكن يوماً بهذا السحر! انضم إلى «لي» على iOS و Android.",
      developer_text: "تم التطوير بكل سحر بواسطة Vespera.",
      links_title: "روابط سريعة",
      legal_title: "معلومات قانونية",
      copyright: "© 2026 Vespera. جميع الحقوق محفوظة."
    },
    legal: {
      privacy_title: "سياسة الخصوصية",
      privacy_subtitle: "آخر تحديث: سبتمبر 2026 — Vespera (WitchyLy)",
      terms_title: "الشروط والأحكام",
      terms_subtitle: "آخر تحديث: سبتمبر 2026 — Vespera (WitchyLy)",
      back_home: "← العودة إلى WitchyLy"
    }
  }
};

/**
 * Applies the selected language to the entire document.
 * Handles: textContent replacement for [data-i18n], title, meta descriptions,
 * document.documentElement.lang and document.documentElement.dir ("rtl" for Arabic).
 */
function applyLanguage(lang) {
  const selectedLang = translations[lang] ? lang : 'en';
  const dict = translations[selectedLang];

  // Save preference
  try {
    localStorage.setItem('witchyly_lang', selectedLang);
  } catch (e) {
    console.warn('LocalStorage not accessible', e);
  }

  // Set HTML attributes
  document.documentElement.lang = selectedLang;
  const isRTL = selectedLang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  // Toggle RTL class on body for convenient CSS targeting
  if (isRTL) {
    document.body.classList.add('rtl-mode');
  } else {
    document.body.classList.remove('rtl-mode');
  }

  // Update Page Title and Meta Description
  if (dict.meta) {
    if (dict.meta.title && document.querySelector('title')) {
      document.title = dict.meta.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta.description) {
      metaDesc.setAttribute('content', dict.meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict.meta.title) {
      ogTitle.setAttribute('content', dict.meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict.meta.description) {
      ogDesc.setAttribute('content', dict.meta.description);
    }
  }

  // Update all DOM elements with data-i18n attributes
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const value = getNestedValue(dict, keyPath);
    if (value !== undefined) {
      // If element has data-i18n-attr, set that attribute instead of textContent
      const targetAttr = el.getAttribute('data-i18n-attr');
      if (targetAttr) {
        el.setAttribute(targetAttr, value);
      } else {
        el.textContent = value;
      }
    }
  });

  // Update active states in all language selectors on page
  document.querySelectorAll('.lang-selector-btn, .lang-option').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === selectedLang) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // Update current language label display if present
  const currentLangLabels = document.querySelectorAll('.current-lang-label');
  currentLangLabels.forEach(label => {
    if (selectedLang === 'en') label.textContent = 'English';
    else if (selectedLang === 'fr') label.textContent = 'Français';
    else if (selectedLang === 'ar') label.textContent = 'العربية';
  });

  // Dispatch custom event for components needing re-rendering or math adjustments
  window.dispatchEvent(new CustomEvent('witchyly:langChanged', { detail: { lang: selectedLang, isRTL } }));
}

/**
 * Helper to retrieve nested object keys via 'hero.headline'
 */
function getNestedValue(obj, path) {
  if (!path) return undefined;
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current && typeof current === 'object' && parts[i] in current) {
      current = current[parts[i]];
    } else {
      return undefined;
    }
  }
  return current;
}

/**
 * Initialize language from localStorage or navigator.language
 */
function initLocalization() {
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('witchyly_lang');
  } catch (e) {
    savedLang = null;
  }

  if (!savedLang) {
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.startsWith('fr')) savedLang = 'fr';
    else if (browserLang.startsWith('ar')) savedLang = 'ar';
    else savedLang = 'en';
  }

  applyLanguage(savedLang);

  // Bind click handlers to all language switch buttons
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      const newLang = langBtn.getAttribute('data-lang');
      if (newLang && translations[newLang]) {
        applyLanguage(newLang);
        // Close mobile dropdown if open
        const langDropdown = document.querySelector('.lang-dropdown-menu');
        if (langDropdown) langDropdown.classList.remove('open');
      }
    }
  });
}

// Auto init on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLocalization);
} else {
  initLocalization();
}
