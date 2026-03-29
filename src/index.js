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
    "plateau composition with multiple height levels",

    "bridge-linked composition connecting two terrain masses",
    "ring-shaped composition with an open central space",
    "stair-stepped composition with cascading elevation changes",
    "edge-weighted composition with a dominant side focal point",
    "sanctuary composition framed by natural elements",
    "market-square composition with dense props around a central plaza",
    "spiral path composition leading toward a high focal landmark",
    "multi-island composition with separated but connected mini zones"
];

const scenarioPools = [
    {
        id: "frozen_pass",
        name: "Frozen Pass",
        tags: { season: "winter", biome: "snow", architecture: "mountain", mood: "quiet" },
        environmentBase: [
            "miniature frozen mountain pass",
            "small snowy cliffside route",
            "stylized alpine passage diorama"
        ],
        terrainBase: [
            "icy cliff paths",
            "snow-covered ledges",
            "frozen stone steps",
            "wind-carved mountain shelves"
        ],
        structures: [
            "small gatehouse",
            "stone watch post",
            "wooden rope bridge",
            "mountain stairway"
        ],
        nature: [
            "snow-covered pines",
            "frozen shrubs",
            "icy rock spires",
            "snow drifts"
        ],
        props: [
            "warning lanterns",
            "supply crates",
            "wooden signposts",
            "frozen banners"
        ],
        palette: ["icy blue", "snow white", "cold gray stone", "soft amber light"],
        moodText: [
            "quiet isolated mountain atmosphere",
            "cold but charming winter passage"
        ],
        extra: [
            "focus on cliffs, paths, and elevation rather than village density"
        ]
    },

    {
        id: "spring_orchard",
        name: "Spring Orchard",
        tags: { season: "spring", biome: "grassland", architecture: "rustic", mood: "cheerful" },
        environmentBase: [
            "miniature spring orchard homestead",
            "small countryside fruit garden",
            "stylized rural blossom diorama"
        ],
        terrainBase: [
            "soft dirt orchard paths",
            "flower-dotted grass",
            "gentle terraced ground",
            "warm cultivated soil"
        ],
        structures: [
            "small farmhouse",
            "wooden tool shed",
            "fenced orchard gate",
            "tiny produce stall"
        ],
        nature: [
            "blossom trees",
            "trimmed bushes",
            "flower patches",
            "grassy tufts"
        ],
        props: [
            "fruit baskets",
            "wooden ladders",
            "watering barrels",
            "crate stacks",
            "garden tools"
        ],
        palette: ["fresh green", "soft pink blossom", "warm beige", "sunny yellow accents"],
        moodText: [
            "bright and cheerful countryside bloom",
            "fresh spring farming atmosphere"
        ],
        extra: [
            "focus on orchard rows and blossom trees as the main visual interest"
        ]
    },

    {
        id: "forest_ruin_shrine",
        name: "Forest Ruin Shrine",
        tags: { season: "spring", biome: "forest", architecture: "ruins", mood: "mysterious" },
        environmentBase: [
            "miniature forest ruin shrine",
            "small overgrown woodland sanctuary",
            "stylized ancient glade relic site"
        ],
        terrainBase: [
            "mossy stone clearings",
            "root-covered ruin floor",
            "leafy forest pathways",
            "broken carved terraces"
        ],
        structures: [
            "small stone shrine",
            "collapsed arch",
            "broken pillars",
            "carved altar platform"
        ],
        nature: [
            "rounded trees",
            "mossy stones",
            "ferns",
            "forest vines"
        ],
        props: [
            "stone lanterns",
            "ceremonial fragments",
            "fallen masonry",
            "wooden offerings box"
        ],
        palette: ["deep forest green", "moss", "weathered stone gray", "soft golden light"],
        moodText: [
            "mysterious sacred woodland calm",
            "ancient ruin atmosphere softened by nature"
        ],
        extra: [
            "keep the composition centered on the shrine and ruin fragments"
        ]
    },

    {
        id: "autumn_harvest_square",
        name: "Autumn Harvest Square",
        tags: { season: "autumn", biome: "village", architecture: "market", mood: "warm" },
        environmentBase: [
            "miniature autumn harvest square",
            "small seasonal village market",
            "stylized countryside harvest plaza"
        ],
        terrainBase: [
            "leaf-covered paving stones",
            "warm earth-toned square",
            "patterned courtyard paths",
            "stone market floor"
        ],
        structures: [
            "market booths",
            "compact village houses",
            "arched entry gate",
            "storage shed"
        ],
        nature: [
            "orange trees",
            "planter boxes",
            "trimmed bushes",
            "autumn vines"
        ],
        props: [
            "pumpkin piles",
            "apple baskets",
            "lantern posts",
            "barrels",
            "crate stacks"
        ],
        palette: ["golden orange", "dusty red", "warm brown", "soft beige"],
        moodText: [
            "warm and festive seasonal market mood",
            "cozy harvest celebration atmosphere"
        ],
        extra: [
            "focus on produce, props, and plaza storytelling"
        ]
    },

    {
        id: "japanese_hillside_town",
        name: "Japanese Hillside Town",
        tags: { season: "summer", biome: "mountain", architecture: "japanese", mood: "peaceful" },
        environmentBase: [
            "stylized miniature japanese hillside town",
            "small mountain temple village",
            "peaceful stepped japanese settlement"
        ],
        terrainBase: [
            "stone terraces",
            "stepped hillside paths",
            "garden walkways",
            "elevated village platforms"
        ],
        structures: [
            "wooden houses",
            "small shrine",
            "torii gate",
            "pagoda roof tower"
        ],
        nature: [
            "ornamental pines",
            "bamboo clusters",
            "trimmed shrubs",
            "mountain flowers"
        ],
        props: [
            "stone lanterns",
            "paper lanterns",
            "wooden railings",
            "stepping stones",
            "small bells"
        ],
        palette: ["warm cedar wood", "jade green", "light stone gray", "soft red accents"],
        moodText: [
            "peaceful elevated japanese village atmosphere",
            "quiet scenic hillside charm"
        ],
        extra: [
            "focus on vertical rhythm, terraces, and shrine framing"
        ]
    },

    {
        id: "jungle_bridge_crossing",
        name: "Jungle Bridge Crossing",
        tags: { season: "summer", biome: "jungle", architecture: "temple", mood: "adventure" },
        environmentBase: [
            "miniature jungle bridge crossing",
            "small tropical canyon sanctuary",
            "stylized overgrown jungle pathway"
        ],
        terrainBase: [
            "humid rocky terrain",
            "layered jungle cliffs",
            "mossy stone platforms",
            "overgrown carved paths"
        ],
        structures: [
            "rope bridge",
            "small stone shrine",
            "ruined archway",
            "ancient stair segments"
        ],
        nature: [
            "tropical plants",
            "large leaf clusters",
            "hanging vines",
            "moss-covered rocks"
        ],
        props: [
            "carved relic stones",
            "small waterfall",
            "broken statues",
            "ceremonial markers"
        ],
        palette: ["rich green", "warm stone", "humid moss tones", "turquoise accents"],
        moodText: [
            "lush adventurous crossing through ancient jungle ruins",
            "playful tropical exploration mood"
        ],
        extra: [
            "use the bridge and split terrain masses as the main visual structure"
        ]
    },

    {
        id: "desert_oasis_camp",
        name: "Desert Oasis Camp",
        tags: { season: "summer", biome: "desert", architecture: "camp", mood: "calm" },
        environmentBase: [
            "miniature desert oasis camp",
            "small shaded oasis retreat",
            "stylized caravan rest stop"
        ],
        terrainBase: [
            "sandy paths",
            "sun-baked stone patches",
            "oasis shoreline ground",
            "dusty camp platforms"
        ],
        structures: [
            "fabric tents",
            "shade canopy",
            "small sandstone shelter",
            "resting platform"
        ],
        nature: [
            "palm trees",
            "oasis plants",
            "dry shrubs",
            "small reeds"
        ],
        props: [
            "clay jars",
            "rolled carpets",
            "supply crates",
            "camp lanterns",
            "water basins"
        ],
        palette: ["sand", "warm beige", "palm green", "turquoise water accents"],
        moodText: [
            "calm refreshing desert refuge mood",
            "sunlit oasis atmosphere with gentle adventure tone"
        ],
        extra: [
            "keep water secondary and use the camp layout as the primary focal structure"
        ]
    },

    {
        id: "volcanic_shrine",
        name: "Volcanic Shrine",
        tags: { season: "summer", biome: "volcanic", architecture: "temple", mood: "mysterious" },
        environmentBase: [
            "miniature volcanic shrine",
            "small obsidian ritual site",
            "stylized lava-scarred sanctuary"
        ],
        terrainBase: [
            "cracked basalt floor",
            "ash-covered platforms",
            "glowing fissure paths",
            "obsidian terraces"
        ],
        structures: [
            "stone altar",
            "obsidian archway",
            "ritual platform",
            "broken shrine pillars"
        ],
        nature: [
            "lava crystals",
            "charred bushes",
            "burnt rock clusters",
            "ash shrubs"
        ],
        props: [
            "ceremonial braziers",
            "glowing runes",
            "ancient chains",
            "molten vents"
        ],
        palette: ["obsidian black", "ember orange", "ash gray", "glowing yellow"],
        moodText: [
            "mysterious dramatic ritual atmosphere",
            "stylized volcanic tension with magical energy"
        ],
        extra: [
            "focus on shrine shapes and glowing fissures rather than industrial forge elements"
        ]
    },

    {
        id: "swamp_boardwalk_market",
        name: "Swamp Boardwalk Market",
        tags: { season: "autumn", biome: "swamp", architecture: "market", mood: "playful" },
        environmentBase: [
            "miniature swamp boardwalk market",
            "small marsh trading stop",
            "stylized wetland bazaar diorama"
        ],
        terrainBase: [
            "mossy wet ground",
            "shallow marsh pools",
            "muddy boardwalk foundations",
            "soft bog paths"
        ],
        structures: [
            "stilt shops",
            "wooden boardwalk sections",
            "small dock",
            "crooked canopy stalls"
        ],
        nature: [
            "reeds",
            "swamp bushes",
            "giant mushrooms",
            "mossy roots"
        ],
        props: [
            "hanging lanterns",
            "small boats",
            "barrels",
            "crate stacks",
            "rope posts"
        ],
        palette: ["olive green", "muted teal", "moss brown", "warm lantern yellow"],
        moodText: [
            "playful marsh market full of toy-like charm",
            "mysterious but friendly swamp atmosphere"
        ],
        extra: [
            "keep the swamp readable and organized around the boardwalk circulation"
        ]
    },

    {
        id: "mountain_watchtower",
        name: "Mountain Watchtower",
        tags: { season: "spring", biome: "mountain", architecture: "fortified", mood: "fresh" },
        environmentBase: [
            "miniature mountain watchtower outpost",
            "small fortified highland perch",
            "stylized cliffside lookout diorama"
        ],
        terrainBase: [
            "rocky ledges",
            "stacked cliff terraces",
            "stone switchback paths",
            "windy highland shelves"
        ],
        structures: [
            "watchtower",
            "stone outpost wall",
            "wooden lookout deck",
            "cliffside stairway"
        ],
        nature: [
            "pine trees",
            "small shrubs",
            "grass tufts",
            "rock clusters"
        ],
        props: [
            "signal braziers",
            "crate piles",
            "warning flags",
            "lantern posts"
        ],
        palette: ["cool gray stone", "soft green", "warm wood", "clear sky blue accents"],
        moodText: [
            "fresh airy lookout atmosphere",
            "elevated defensive perch with playful scale"
        ],
        extra: [
            "focus on height, visibility, and narrow cliffside circulation"
        ]
    },

    {
        id: "coastal_fishing_hamlet",
        name: "Coastal Fishing Hamlet",
        tags: { season: "summer", biome: "coast", architecture: "rustic", mood: "peaceful" },
        environmentBase: [
            "miniature coastal fishing hamlet",
            "small seaside village diorama",
            "stylized harbor-edge settlement"
        ],
        terrainBase: [
            "rocky shoreline paths",
            "weathered dock platforms",
            "sand-and-stone coastal ground",
            "gentle cliff edges"
        ],
        structures: [
            "wooden cottages",
            "small dock",
            "boat shed",
            "lookout hut"
        ],
        nature: [
            "coastal bushes",
            "sea grass",
            "rounded rocks",
            "small palms"
        ],
        props: [
            "fishing nets",
            "wooden boats",
            "buoys",
            "barrels",
            "crate stacks"
        ],
        palette: ["sea blue", "sun-bleached beige", "warm wood", "soft green accents"],
        moodText: [
            "peaceful seaside village charm",
            "bright breezy coastal atmosphere"
        ],
        extra: [
            "keep the harbor compact and stylized rather than expansive"
        ]
    },

    {
        id: "meadow_windmill_square",
        name: "Meadow Windmill Square",
        tags: { season: "summer", biome: "grassland", architecture: "village", mood: "cheerful" },
        environmentBase: [
            "miniature meadow windmill square",
            "small countryside village plaza",
            "stylized rural green diorama"
        ],
        terrainBase: [
            "grassy village ground",
            "flower-lined dirt paths",
            "soft hill contours",
            "stone plaza patches"
        ],
        structures: [
            "windmill",
            "small cottages",
            "market table",
            "fenced garden"
        ],
        nature: [
            "rounded trees",
            "flower patches",
            "trimmed bushes",
            "grass tufts"
        ],
        props: [
            "hay bales",
            "watering barrels",
            "crate stacks",
            "wooden cart",
            "signpost"
        ],
        palette: ["fresh green", "sunny yellow", "warm beige", "soft red roof accents"],
        moodText: [
            "bright cheerful village square mood",
            "playful pastoral atmosphere with cozy storytelling"
        ],
        extra: [
            "center the composition around the windmill and plaza interaction"
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
