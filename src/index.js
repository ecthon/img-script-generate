const styleBase = `
Generate an image with the specifications: ultra high quality miniature 3D diorama, stylized cartoon toy world, small self-contained environment, square base in isometric view

STYLE REFERENCE: match the visual style of provided reference images — maintain identical level of stylization, proportions, materials, and rendering quality

core style:
rounded geometry, soft edges, no sharp details
chibi-like proportions applied to environment
exaggerated shapes and compact structures

materials:
toy-like materials (plastic + clay), matte finish
hand-painted textures with soft gradients
no realistic textures, no photorealism

composition:
organic layout, asymmetrical, storytelling scene
dense but readable placement of elements
miniature scale, cohesive world

lighting:
soft global illumination
ambient occlusion
subtle bloom
warm accent lights when applicable
same lighting behavior across renders

camera:
same scale
same camera angle
consistent isometric framing across renders

render:
studio product render
centered floating platform
single self-contained diorama only
pure white background
solid white background (#FFFFFF)
no gradient background
no textured background
no environment background
no sky
no backdrop elements
soft minimal shadow directly under the object only
no cast shadows spreading on the background
only subtle contact shadow under the object
clean isolated subject on white
4k
ultra sharp
clean render
high detail but simplified geometry

consistency:
consistent style across renders
same scale
same camera angle
same lighting behavior
strict style consistency with reference images
no deviation in material or rendering style

output:
--ar 1:1 --quality 2
`.trim();

const compositionTypes = [
    "central focal structure with surrounding decorative elements",
    "off-center composition with layered depth",
    "terraced composition with vertical progression",
    "courtyard-centered composition with radial details",
    "path-driven composition guiding the eye across the diorama",
    "clustered village composition with compact storytelling layout",
    "ruin-centered composition embedded into the terrain",
    "plateau composition with multiple height levels"
];

const scenarioPools = [
    {
        id: "snowy_village",
        name: "Snowy Village",
        tags: { season: "winter", biome: "snow", architecture: "rustic", mood: "cozy" },
        environmentBase: [
            "cozy snowy village",
            "miniature winter settlement",
            "small alpine hamlet"
        ],
        terrainBase: [
            "snowy cobblestone paths",
            "packed snow terraces",
            "frosted stone paths",
            "snow-covered platforms"
        ],
        structures: [
            "wooden cabins",
            "small chapel",
            "watch tower",
            "wooden fences",
            "stone storage hut"
        ],
        nature: [
            "snow-covered pine trees",
            "snowy shrubs",
            "icy rocks",
            "frozen bushes"
        ],
        props: [
            "sled",
            "stacked firewood",
            "warm lanterns",
            "stone well",
            "small crates"
        ],
        palette: ["soft winter blues", "white snow", "amber window glow"],
        moodText: [
            "cozy and peaceful winter evening",
            "warm lights contrasting with cold snow"
        ],
        extra: [
            "small self-contained square diorama",
            "storytelling layout with a clear focal point",
            "focus on compact winter architecture and layered snow relief"
        ]
    },

    {
        id: "snowy_courtyard",
        name: "Snowy Courtyard",
        tags: { season: "winter", biome: "snow", architecture: "courtyard", mood: "peaceful" },
        environmentBase: [
            "miniature snowy courtyard village",
            "small winter stone plaza",
            "peaceful frosted settlement square"
        ],
        terrainBase: [
            "icy stone courtyard",
            "wind-swept snow layers",
            "frozen village square",
            "frosted paving stones"
        ],
        structures: [
            "stone houses",
            "arched gate",
            "courtyard walls",
            "small bell tower"
        ],
        nature: [
            "snowy shrubs",
            "frozen hedges",
            "snow-dusted evergreen trees"
        ],
        props: [
            "lantern posts",
            "wooden benches",
            "crate stacks",
            "snow mounds"
        ],
        palette: ["pale blue", "snow white", "warm amber", "cool gray stone"],
        moodText: [
            "quiet winter calm",
            "gentle snowy stillness with warm accents"
        ],
        extra: [
            "focus on courtyard composition instead of water features"
        ]
    },

    {
        id: "forest_glade",
        name: "Forest Glade",
        tags: { season: "spring", biome: "forest", architecture: "rustic", mood: "calm" },
        environmentBase: [
            "lush forest glade settlement",
            "tiny woodland clearing village",
            "miniature forest camp in a grassy clearing"
        ],
        terrainBase: [
            "mossy forest floor",
            "leaf-covered pathways",
            "soft dirt clearing",
            "root-covered ground"
        ],
        structures: [
            "tiny wooden houses",
            "small storage shed",
            "wooden fence segments",
            "forest lookout platform"
        ],
        nature: [
            "rounded trees",
            "mossy rocks",
            "flower patches",
            "bushes"
        ],
        props: [
            "lantern post",
            "garden stones",
            "mushroom clusters",
            "woodpile",
            "forest signpost"
        ],
        palette: ["soft greens", "warm beige stone", "earthy brown", "fresh floral accents"],
        moodText: [
            "fresh cheerful calm nature scene",
            "peaceful spring clearing with soft toy-like charm"
        ],
        extra: [
            "avoid water as the central focal element",
            "focus on forest floor textures and cozy structures"
        ]
    },

    {
        id: "forest_plateau",
        name: "Forest Plateau",
        tags: { season: "spring", biome: "forest", architecture: "rustic", mood: "fresh" },
        environmentBase: [
            "miniature forest plateau settlement",
            "small elevated woodland village",
            "stylized hilltop forest hamlet"
        ],
        terrainBase: [
            "terraced hills",
            "grassy layered platforms",
            "sloped terrain with carved steps",
            "stacked rocky ledges"
        ],
        structures: [
            "wooden cabins",
            "small watch platform",
            "rope fence sections",
            "elevated hut"
        ],
        nature: [
            "rounded trees",
            "flower bushes",
            "mossy stones",
            "fern clusters"
        ],
        props: [
            "stone stairs",
            "wooden sign",
            "supply crates",
            "camp lanterns"
        ],
        palette: ["spring green", "warm wood", "light stone", "soft yellow flowers"],
        moodText: [
            "fresh elevated woodland atmosphere",
            "playful hilltop nature scene"
        ],
        extra: [
            "use relief and elevation as the main visual interest"
        ]
    },

    {
        id: "autumn_camp",
        name: "Autumn Camp",
        tags: { season: "autumn", biome: "plateau", architecture: "camp", mood: "adventure" },
        environmentBase: [
            "stylized autumn campsite",
            "miniature adventure camp",
            "small seasonal camp on a plateau"
        ],
        terrainBase: [
            "warm earthy ground",
            "layered rock steps",
            "soft grass patches",
            "fallen autumn leaves"
        ],
        structures: [
            "canvas tents",
            "wooden supply table",
            "small lookout point"
        ],
        nature: [
            "rounded orange trees",
            "autumn bushes",
            "rock clusters"
        ],
        props: [
            "campfire",
            "cooking pot",
            "barrels",
            "lantern",
            "wooden stools",
            "map table",
            "crates"
        ],
        palette: ["orange", "yellow", "warm brown", "soft green accents"],
        moodText: [
            "cozy seasonal adventure",
            "warm exploratory atmosphere"
        ],
        extra: [
            "compact storytelling camp composition"
        ]
    },

    {
        id: "autumn_village_square",
        name: "Autumn Village Square",
        tags: { season: "autumn", biome: "village", architecture: "courtyard", mood: "warm" },
        environmentBase: [
            "miniature autumn village square",
            "small seasonal town plaza",
            "stylized autumn courtyard settlement"
        ],
        terrainBase: [
            "stone courtyard floor",
            "patterned paving stones",
            "leaf-covered square",
            "warm earth-toned pathways"
        ],
        structures: [
            "compact village houses",
            "arched entry gate",
            "market booth",
            "small clock tower"
        ],
        nature: [
            "orange trees",
            "trimmed bushes",
            "planter boxes"
        ],
        props: [
            "benches",
            "lantern posts",
            "pumpkins",
            "wooden barrels",
            "crate stacks"
        ],
        palette: ["golden orange", "warm brown", "dusty red", "soft beige"],
        moodText: [
            "warm and welcoming seasonal plaza",
            "cozy autumn town atmosphere"
        ],
        extra: [
            "center the composition around a plaza instead of water"
        ]
    },

    {
        id: "japanese_sakura",
        name: "Japanese Sakura Garden",
        tags: { season: "spring", biome: "garden", architecture: "japanese", mood: "serene" },
        environmentBase: [
            "stylized miniature japanese sakura garden",
            "small japanese village garden",
            "peaceful ornamental spring diorama"
        ],
        terrainBase: [
            "clean stone paths",
            "trimmed grass",
            "layered rocks",
            "ornamental garden paving"
        ],
        structures: [
            "small shrine",
            "wooden pavilion",
            "curved bridge",
            "torii gate",
            "pagoda-inspired roof detail"
        ],
        nature: [
            "sakura trees",
            "pink blossom canopies",
            "bamboo accents",
            "ornamental bushes"
        ],
        props: [
            "stone lanterns",
            "paper lanterns",
            "koi pond",
            "stone basin",
            "petals scattered on the ground"
        ],
        palette: [
            "soft pink sakura blossoms",
            "warm wood",
            "jade green",
            "light stone gray",
            "pastel blue water"
        ],
        moodText: [
            "serene elegant peaceful spring atmosphere",
            "calm ornamental balance"
        ],
        extra: [
            "elegant japanese composition adapted to a compact diorama"
        ]
    },

    {
        id: "japanese_shrine_courtyard",
        name: "Japanese Shrine Courtyard",
        tags: { season: "spring", biome: "garden", architecture: "japanese", mood: "elegant" },
        environmentBase: [
            "stylized miniature japanese shrine courtyard",
            "compact sakura shrine forecourt",
            "ornamental japanese temple plaza"
        ],
        terrainBase: [
            "mossy shrine courtyard",
            "ornamental stone paving",
            "clean temple forecourt",
            "layered garden terraces"
        ],
        structures: [
            "torii gate",
            "small shrine",
            "pagoda roof structure",
            "stone boundary walls"
        ],
        nature: [
            "sakura trees",
            "trimmed shrubs",
            "bamboo accents",
            "ornamental trees"
        ],
        props: [
            "stone lanterns",
            "paper lanterns",
            "stone basin",
            "petals on the ground",
            "wooden prayer plaque details"
        ],
        palette: ["soft pink", "warm cedar wood", "jade green", "pale stone gray"],
        moodText: [
            "elegant and serene ceremonial atmosphere",
            "peaceful spring shrine setting"
        ],
        extra: [
            "focus on courtyard layout and shrine entrance composition"
        ]
    },

    {
        id: "zen_garden",
        name: "Zen Garden",
        tags: { season: "spring", biome: "garden", architecture: "japanese", mood: "peaceful" },
        environmentBase: [
            "miniature zen garden diorama",
            "small ornamental japanese meditation garden",
            "compact temple-side rock garden"
        ],
        terrainBase: [
            "raked gravel ground",
            "stone garden patterns",
            "layered ornamental rock base",
            "trimmed garden paths"
        ],
        structures: [
            "small meditation pavilion",
            "simple wooden gate",
            "low garden wall"
        ],
        nature: [
            "bonsai-like trees",
            "sakura accents",
            "trimmed bushes",
            "bamboo details"
        ],
        props: [
            "stone lanterns",
            "rock clusters",
            "ceremonial basin",
            "sand patterns"
        ],
        palette: ["soft gray gravel", "muted green", "warm wood", "subtle pink blossom accents"],
        moodText: [
            "quiet meditative garden atmosphere",
            "balanced and calming ornamental composition"
        ],
        extra: [
            "avoid large water elements",
            "focus on stones, gravel, and minimal elegant composition"
        ]
    },

    {
        id: "jungle_temple",
        name: "Jungle Temple",
        tags: { season: "summer", biome: "jungle", architecture: "temple", mood: "mysterious" },
        environmentBase: [
            "lush jungle temple environment",
            "miniature tropical ruin sanctuary",
            "overgrown jungle diorama"
        ],
        terrainBase: [
            "overgrown stone paths",
            "mossy ruins",
            "layered jungle ground",
            "humid rocky terrain"
        ],
        structures: [
            "ancient stone ruins",
            "broken pillars",
            "stone altar",
            "small rope bridge",
            "ancient stairs"
        ],
        nature: [
            "tropical plants",
            "vines",
            "jungle bushes",
            "waterfall foliage"
        ],
        props: [
            "carved stone face",
            "small waterfall",
            "ruined gate",
            "ancient relic detail"
        ],
        palette: ["rich greens", "moss", "warm stone", "turquoise water"],
        moodText: [
            "mysterious but charming adventure",
            "humid lush ancient atmosphere"
        ],
        extra: [
            "clear focal ruin integrated into the landscape"
        ]
    },

    {
        id: "jungle_ruin_terrace",
        name: "Jungle Ruin Terrace",
        tags: { season: "summer", biome: "jungle", architecture: "ruins", mood: "adventure" },
        environmentBase: [
            "miniature jungle ruin terrace",
            "small overgrown temple plateau",
            "stylized tropical relic site"
        ],
        terrainBase: [
            "collapsed stone platforms",
            "overgrown relic floor",
            "weathered carved terraces",
            "humid mossy stone layers"
        ],
        structures: [
            "broken pillars",
            "fragmented temple walls",
            "ruined archway",
            "stone stairway"
        ],
        nature: [
            "tropical bushes",
            "vines",
            "large leaf plants",
            "moss-covered rocks"
        ],
        props: [
            "ancient relic stone",
            "carved altar",
            "fallen masonry",
            "small jungle lantern"
        ],
        palette: ["deep green", "warm mossy stone", "earth brown", "turquoise accents"],
        moodText: [
            "mysterious jungle exploration mood",
            "adventurous ruin-focused tropical atmosphere"
        ],
        extra: [
            "focus on ruins and elevation rather than water"
        ]
    },

    {
        id: "desert_outpost",
        name: "Desert Outpost",
        tags: { season: "summer", biome: "desert", architecture: "market", mood: "warm" },
        environmentBase: [
            "tiny desert outpost",
            "miniature sandstone settlement",
            "small canyon market village"
        ],
        terrainBase: [
            "sandy terrain",
            "layered sandstone",
            "dusty paths",
            "dry rock formations"
        ],
        structures: [
            "sandstone buildings",
            "fabric canopies",
            "market stall",
            "small gate structure"
        ],
        nature: [
            "desert shrubs",
            "small oasis plants",
            "palm accents"
        ],
        props: [
            "clay jars",
            "wooden cart",
            "banner flags",
            "market props",
            "oasis detail"
        ],
        palette: ["sand", "ochre", "terracotta", "turquoise accents"],
        moodText: [
            "warm adventurous sunlit atmosphere",
            "dry but inviting toy-like scene"
        ],
        extra: [
            "compact market storytelling composition"
        ]
    },

    {
        id: "desert_canyon_settlement",
        name: "Desert Canyon Settlement",
        tags: { season: "summer", biome: "desert", architecture: "desert", mood: "adventure" },
        environmentBase: [
            "stylized miniature desert canyon settlement",
            "small sandstone cliffside village",
            "compact sun-baked canyon outpost"
        ],
        terrainBase: [
            "layered sandstone shelves",
            "dusty canyon floor",
            "eroded rock paths",
            "dry plateau edges",
            "wind-shaped desert ground"
        ],
        structures: [
            "sandstone houses",
            "desert stone gate",
            "fabric shade canopies",
            "cliffside stairways",
            "carved rock dwellings"
        ],
        nature: [
            "dry shrubs",
            "scattered cactus clusters",
            "small hardy desert plants",
            "sun-bleached rock formations"
        ],
        props: [
            "clay jars",
            "market crates",
            "banner flags",
            "stone markers",
            "desert carts",
            "shaded rest area"
        ],
        palette: [
            "sand",
            "ochre",
            "terracotta",
            "sun-bleached beige",
            "turquoise cloth accents"
        ],
        moodText: [
            "warm adventurous desert atmosphere",
            "dry sunlit canyon scene with toy-like charm"
        ],
        extra: [
            "avoid water as the main focal element",
            "focus on rock formations, shade structures, and layered desert terrain"
        ]
    },

    {
        id: "mesa_ruins",
        name: "Mesa Ruins",
        tags: { season: "summer", biome: "desert", architecture: "ruins", mood: "mysterious" },
        environmentBase: [
            "stylized ancient mesa ruins",
            "small desert relic plateau",
            "miniature forgotten sun temple site"
        ],
        terrainBase: [
            "cracked dry ground",
            "elevated sandstone terraces",
            "weathered stone platforms",
            "dusty ruin pathways"
        ],
        structures: [
            "broken pillars",
            "ruined archway",
            "sun altar",
            "fragmented temple walls"
        ],
        nature: [
            "dry brush",
            "small desert plants",
            "eroded stone clusters"
        ],
        props: [
            "carved relic stones",
            "ceremonial steps",
            "fallen masonry blocks",
            "ancient banners"
        ],
        palette: [
            "warm sandstone",
            "dusty orange",
            "pale beige",
            "burnt terracotta"
        ],
        moodText: [
            "mysterious and sun-baked ancient atmosphere"
        ],
        extra: [
            "focus on ruins and elevation instead of water features"
        ]
    },

    {
        id: "desert_market_courtyard",
        name: "Desert Market Courtyard",
        tags: { season: "summer", biome: "desert", architecture: "market", mood: "warm" },
        environmentBase: [
            "miniature desert market courtyard",
            "small sandstone trading plaza",
            "sunlit canyon bazaar diorama"
        ],
        terrainBase: [
            "stone courtyard floor",
            "dusty paving stones",
            "sun-baked market ground",
            "desert plaza steps"
        ],
        structures: [
            "market stalls",
            "canopy-covered booths",
            "arched desert gate",
            "sandstone facades"
        ],
        nature: [
            "small potted desert plants",
            "dry shrubs",
            "palm accents"
        ],
        props: [
            "clay jars",
            "carpet rolls",
            "crate stacks",
            "banner flags",
            "shade screens"
        ],
        palette: ["sand", "terracotta", "faded red fabric", "warm beige", "turquoise details"],
        moodText: [
            "lively but compact sunlit market atmosphere",
            "warm desert trade plaza with toy-like charm"
        ],
        extra: [
            "focus on courtyard and market composition"
        ]
    },

    {
        id: "lava_forge",
        name: "Lava Forge",
        tags: { season: "summer", biome: "volcanic", architecture: "fantasy", mood: "dramatic" },
        environmentBase: [
            "fantasy lava forge environment",
            "miniature volcanic workshop",
            "small molten forge settlement"
        ],
        terrainBase: [
            "dark volcanic rock",
            "glowing lava cracks",
            "layered basalt",
            "carved stone steps"
        ],
        structures: [
            "forge furnace",
            "workshop tower",
            "stone bridge",
            "heavy workshop platform"
        ],
        nature: [
            "lava crystals",
            "charred rock clusters"
        ],
        props: [
            "anvil",
            "molten stream",
            "iron crane",
            "chains",
            "glowing forge detail"
        ],
        palette: [
            "charcoal",
            "glowing orange",
            "warm yellow",
            "dark brown metal accents"
        ],
        moodText: [
            "hot dramatic fantasy atmosphere",
            "powerful glowing volcanic energy"
        ],
        extra: [
            "still fully stylized and toy-like despite the dramatic theme"
        ]
    },

    {
        id: "volcanic_plateau",
        name: "Volcanic Plateau",
        tags: { season: "summer", biome: "volcanic", architecture: "fantasy", mood: "dramatic" },
        environmentBase: [
            "miniature volcanic plateau",
            "stylized obsidian highland",
            "small lava-scarred summit diorama"
        ],
        terrainBase: [
            "cracked basalt terrain",
            "ash-covered rock floor",
            "layered volcanic shelves",
            "obsidian pathways"
        ],
        structures: [
            "stone altar",
            "ruined forge platform",
            "obsidian archway",
            "watch platform"
        ],
        nature: [
            "lava crystals",
            "charred bushes",
            "burnt rock spires"
        ],
        props: [
            "glowing fissures",
            "ancient chains",
            "ceremonial brazier",
            "molten vents"
        ],
        palette: ["black basalt", "ember orange", "glowing yellow", "ash gray"],
        moodText: [
            "dramatic elevated volcanic tension",
            "glowing fantasy highland atmosphere"
        ],
        extra: [
            "focus on height, rock shelves, and fissures rather than flowing lava rivers"
        ]
    },

    {
        id: "swamp_village",
        name: "Swamp Village",
        tags: { season: "autumn", biome: "swamp", architecture: "rustic", mood: "playful" },
        environmentBase: [
            "charming swamp village",
            "miniature wetland settlement",
            "small marshland hamlet"
        ],
        terrainBase: [
            "muddy terrain",
            "mossy wet ground",
            "shallow marsh pools",
            "soft bog floor"
        ],
        structures: [
            "wooden huts",
            "stilt houses",
            "crooked boardwalk sections",
            "small dock"
        ],
        nature: [
            "reeds",
            "giant mushrooms",
            "swamp bushes",
            "mossy stones"
        ],
        props: [
            "hanging lanterns",
            "small boat",
            "rope walkway",
            "wooden barrels"
        ],
        palette: ["olive green", "swamp brown", "muted teal", "warm yellow lights"],
        moodText: [
            "mysterious but cute and playful",
            "foggy marsh charm with a toy-like atmosphere"
        ],
        extra: [
            "keep the swamp visually clean and stylized, not gritty"
        ]
    },

    {
        id: "swamp_mushroom_grove",
        name: "Swamp Mushroom Grove",
        tags: { season: "autumn", biome: "swamp", architecture: "fantasy", mood: "mysterious" },
        environmentBase: [
            "miniature mushroom swamp grove",
            "small fantasy marsh garden",
            "stylized wetland fungal clearing"
        ],
        terrainBase: [
            "muddy grove floor",
            "mossy wet terrain",
            "marshy root-covered ground",
            "soft bog platforms"
        ],
        structures: [
            "small hut",
            "arched root shelter",
            "tiny swamp shrine"
        ],
        nature: [
            "giant mushrooms",
            "reeds",
            "swamp moss",
            "fungal clusters"
        ],
        props: [
            "glowing lanterns",
            "wooden signs",
            "rope fence posts",
            "stone totems"
        ],
        palette: ["olive green", "moss brown", "muted purple", "warm yellow light"],
        moodText: [
            "mysterious magical swamp atmosphere",
            "playful fantasy wetland mood"
        ],
        extra: [
            "use mushrooms and roots as the main visual interest"
        ]
    },

    {
        id: "mountain_hamlet",
        name: "Mountain Hamlet",
        tags: { season: "spring", biome: "mountain", architecture: "rustic", mood: "peaceful" },
        environmentBase: [
            "miniature mountain hamlet",
            "small cliffside village",
            "stylized highland settlement"
        ],
        terrainBase: [
            "layered cliffs",
            "stone terraces",
            "sloped paths",
            "rocky ledges"
        ],
        structures: [
            "stone cottages",
            "wooden balconies",
            "hilltop watch platform",
            "cliffside stairways"
        ],
        nature: [
            "pine trees",
            "grass tufts",
            "rock clusters",
            "small shrubs"
        ],
        props: [
            "stone stairs",
            "lantern posts",
            "crate piles",
            "fence sections"
        ],
        palette: ["cool gray stone", "soft green", "warm wood", "clear sky accents"],
        moodText: [
            "peaceful elevated village atmosphere",
            "fresh and airy mountain charm"
        ],
        extra: [
            "focus on vertical relief and compact cliffside storytelling"
        ]
    },

    {
        id: "cliffside_sanctuary",
        name: "Cliffside Sanctuary",
        tags: { season: "spring", biome: "mountain", architecture: "temple", mood: "serene" },
        environmentBase: [
            "miniature cliffside sanctuary",
            "small elevated shrine retreat",
            "stylized mountain temple perch"
        ],
        terrainBase: [
            "stacked rocky ledges",
            "stone terraces",
            "carved hillside steps",
            "elevated shrine platforms"
        ],
        structures: [
            "small shrine",
            "arched gateway",
            "stone platform",
            "prayer pavilion"
        ],
        nature: [
            "ornamental pines",
            "trimmed bushes",
            "mountain flowers"
        ],
        props: [
            "lantern stones",
            "ceremonial stairs",
            "small bells",
            "stone markers"
        ],
        palette: ["light stone gray", "soft green", "warm wood", "golden accent lights"],
        moodText: [
            "serene elevated sanctuary atmosphere",
            "quiet contemplative mountain setting"
        ],
        extra: [
            "avoid water dependence and emphasize height, steps, and sacred architecture"
        ]
    },

    {
        id: "meadow_farm",
        name: "Meadow Farm",
        tags: { season: "summer", biome: "grassland", architecture: "rustic", mood: "cheerful" },
        environmentBase: [
            "miniature meadow farm",
            "small countryside homestead",
            "stylized pastoral diorama"
        ],
        terrainBase: [
            "grassy terrain",
            "soft dirt paths",
            "gentle hill contours",
            "flower-lined ground"
        ],
        structures: [
            "farmhouse",
            "barn",
            "windmill",
            "fenced pen"
        ],
        nature: [
            "rounded trees",
            "flower patches",
            "bushes",
            "hay fields"
        ],
        props: [
            "hay bales",
            "wooden cart",
            "crate stacks",
            "garden tools",
            "small scarecrow"
        ],
        palette: ["fresh green", "sunny yellow", "warm red roof accents", "light brown earth"],
        moodText: [
            "bright cheerful countryside atmosphere",
            "warm playful rural charm"
        ],
        extra: [
            "focus on fields and farm composition rather than bridges or rivers"
        ]
    },

    {
        id: "ruined_stone_courtyard",
        name: "Ruined Stone Courtyard",
        tags: { season: "autumn", biome: "ruins", architecture: "ruins", mood: "mysterious" },
        environmentBase: [
            "miniature ruined stone courtyard",
            "small forgotten relic plaza",
            "stylized ancient courtyard ruins"
        ],
        terrainBase: [
            "broken ancient pathways",
            "collapsed stone platforms",
            "fragmented temple floor",
            "weathered carved terraces"
        ],
        structures: [
            "ruined arch",
            "broken pillars",
            "ancient gate remains",
            "collapsed wall sections"
        ],
        nature: [
            "overgrown bushes",
            "mossy stones",
            "autumn vines"
        ],
        props: [
            "fallen masonry blocks",
            "ceremonial fragments",
            "ancient banners",
            "stone relic pieces"
        ],
        palette: ["weathered gray stone", "moss green", "dusty brown", "faded red accents"],
        moodText: [
            "mysterious abandoned courtyard atmosphere",
            "aged relic plaza with soft adventurous mood"
        ],
        extra: [
            "focus on ruins and broken geometry softened into the toy-like style"
        ]
    }
];

// =========================
// CONFIG
// =========================

const HISTORY_LIMIT = 20;
const RECENT_BLOCK_COUNT = 4;

// =========================
// STATE
// =========================

const generationHistory = [];

// =========================
// HELPERS
// =========================

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickRandom(arr, min = 1, max = 1) {
    const safeMin = Math.max(0, min);
    const safeMax = Math.max(safeMin, Math.min(max, arr.length));
    const count = Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;

    const copy = [...arr];
    const selected = [];

    while (selected.length < count && copy.length) {
        const index = Math.floor(Math.random() * copy.length);
        selected.push(copy.splice(index, 1)[0]);
    }

    return selected;
}

function buildEnvironmentLine(pool) {
    const base = randomItem(pool.environmentBase);
    const structures = pickRandom(pool.structures, 2, Math.min(3, pool.structures.length));
    const nature = pickRandom(pool.nature, 1, Math.min(3, pool.nature.length));
    const props = pickRandom(pool.props, 2, Math.min(3, pool.props.length));

    return `${base} with ${[...structures, ...nature, ...props].join(", ")}`;
}

function buildTerrainLine(pool) {
    return pickRandom(pool.terrainBase, 2, Math.min(3, pool.terrainBase.length)).join(", ");
}

function buildCompositionLine() {
    return randomItem(compositionTypes);
}

function buildMoodLine(pool) {
    return randomItem(pool.moodText);
}

function buildPaletteLine(pool) {
    return pickRandom(pool.palette, 2, Math.min(4, pool.palette.length)).join(", ");
}

function buildExtraDirection(pool) {
    const baseConstraints = [
        "keep rounded geometry, toy-like materials, and soft lighting",
        "maintain stylized isometric miniature diorama look",
        "no realism, no photorealism, no sharp edges, no gritty textures",
        "keep a clean self-contained square base",
        "avoid competitive arena layout, avoid symmetry, avoid battle elements",
        "pure white background only",
        "solid white background (#FFFFFF)",
        "no gradient background",
        "no scene background",
        "no environment around the object",
        "no backdrop elements",
        "clean object isolation on white",
        "soft minimal shadow directly under the object only"
    ];

    const extraLines = pickRandom(pool.extra, 1, Math.min(2, pool.extra.length));
    return [...baseConstraints, ...extraLines].join("\n");
}

function buildPrompt(pool) {
    return `
${styleBase}

environment:
${buildEnvironmentLine(pool)}

terrain:
${buildTerrainLine(pool)}

composition:
${buildCompositionLine()}

mood:
${buildMoodLine(pool)}

color palette:
${buildPaletteLine(pool)}

important constraints:
${buildExtraDirection(pool)}

background rules:
pure white background
solid white background (#FFFFFF)
no gradient background
no textured background
no scene background
no environment around the object
no sky
no backdrop elements
clean isolated object on white
soft minimal contact shadow only

output quality:
4k
ultra sharp
clean render
consistent style across renders
same scale
same camera angle
same lighting behavior

parameters:
--ar 1:1 --quality 2
`.trim();
}

function getRecentScenarioIds(blockCount = RECENT_BLOCK_COUNT) {
    return generationHistory.slice(-blockCount).map(item => item.scenarioId);
}

function chooseScenarioPool() {
    const blockedIds = new Set(getRecentScenarioIds());
    const availablePools = scenarioPools.filter(pool => !blockedIds.has(pool.id));

    if (availablePools.length > 0) {
        return randomItem(availablePools);
    }

    return randomItem(scenarioPools);
}

function saveToHistory(entry) {
    generationHistory.push(entry);

    while (generationHistory.length > HISTORY_LIMIT) {
        generationHistory.shift();
    }
}

function createGenerationEntry(pool) {
    return {
        id: `gen_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        scenarioId: pool.id,
        scenarioName: pool.name,
        tags: { ...pool.tags },
        prompt: buildPrompt(pool)
    };
}

// =========================
// SALVAMENTO DE ARQUIVOS E PUBLIC API
// =========================
const fs = require('fs');
const path = require('path');

function savePromptToFile(entry) {
    const outputDir = path.join(__dirname, 'prompts_gerados');

    // Cria a pasta caso não exista
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Identifica qual deve ser a próxima numeração (ex: 001, 002)
    const existingFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.txt'));
    let maxIndex = 0;

    for (const file of existingFiles) {
        const match = file.match(/^(\d+)_/);
        if (match) {
            const num = parseInt(match[1], 10);
            if (num > maxIndex) {
                maxIndex = num;
            }
        }
    }

    // Se não há numerados, mas já há arquivos velhos na pasta, a numeração começa após a contagem atual
    const nextIndex = maxIndex > 0 ? maxIndex + 1 : existingFiles.length + 1;
    const prefixStr = String(nextIndex).padStart(3, '0');

    // Cria um nome de arquivo seguro e único
    const safeName = entry.scenarioName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const fileName = `${prefixStr}_${safeName}_${entry.id}.txt`;
    const filePath = path.join(outputDir, fileName);

    // Organiza o conteúdo que será salvo: Apenas o texto do prompt
    const fileContent = String(entry.prompt).trim() + '\n';

    // Salva o arquivo sincronicamente
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    // console.log(`Prompt salvo em: ${filePath}`);
}

function generateCoherentPrompt() {
    const selectedPool = chooseScenarioPool();
    const entry = createGenerationEntry(selectedPool);
    saveToHistory(entry);

    // Chamada para salvar em .txt
    savePromptToFile(entry);

    return entry;
}

function generateMultiplePrompts(count = 5) {
    const results = [];

    for (let i = 0; i < count; i++) {
        results.push(generateCoherentPrompt());
    }

    return results;
}

function getGenerationHistory() {
    return [...generationHistory];
}

function getLastGeneration() {
    return generationHistory.length ? generationHistory[generationHistory.length - 1] : null;
}

function clearGenerationHistory() {
    generationHistory.length = 0;
}

function exportPromptsArray() {
    return generationHistory.map(item => item.prompt);
}

function exportPromptsJson(pretty = true) {
    return JSON.stringify(generationHistory, null, pretty ? 2 : 0);
}

function exportHistorySummaryJson(pretty = true) {
    const summary = generationHistory.map(item => ({
        id: item.id,
        createdAt: item.createdAt,
        scenarioId: item.scenarioId,
        scenarioName: item.scenarioName,
        tags: item.tags
    }));

    return JSON.stringify(summary, null, pretty ? 2 : 0);
}

// =========================
// EXAMPLES
// =========================

// Gera 1 prompt
const first = generateCoherentPrompt();
console.log("=== GENERATED SCENARIO ===");
console.log(first.scenarioName);
console.log(first.tags);
console.log("\n=== PROMPT ===\n");
console.log(first.prompt);

// Gera mais alguns
generateMultiplePrompts(4);

// Histórico completo
console.log("\n=== HISTORY ===");
console.log(getGenerationHistory());

// Apenas prompts
console.log("\n=== PROMPTS ARRAY ===");
console.log(exportPromptsArray());

// JSON completo
console.log("\n=== FULL JSON ===");
console.log(exportPromptsJson());

// JSON resumido
console.log("\n=== SUMMARY JSON ===");
console.log(exportHistorySummaryJson());
