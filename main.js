const WORLD_THEMES = {
    jungle: {
        label: 'lush jungle temple',
        moods: ['adventurous', 'mysterious', 'ancient', 'magical'],
        seasons: ['spring', 'summer', 'late summer', 'rainy season'],
        climates: ['humid tropical', 'fresh and rainy'],
        timesOfDay: ['morning', 'midday', 'golden hour', 'twilight'],
        colorStyles: [
            'warm greens and golden highlights',
            'rich jungle greens with amber light',
            'emerald greens with sunlit stone accents'
        ],
        terrainTypes: [
            'rocky jungle terrain with grass patches',
            'overgrown stone terrain with moss',
            'lush tropical ground with roots and wet rocks'
        ],
        keyStructures: [
            'ancient stone face temple, broken stairs, mossy ruins',
            'overgrown shrine, collapsed arches, carved stone platforms',
            'forgotten jungle sanctuary, ritual stairs, weathered ruins'
        ],
        natureElements: [
            'hanging vines, dense foliage, tropical trees',
            'broad jungle leaves, twisted roots, thick vegetation',
            'banana plants, jungle bushes, moss-covered trees'
        ],
        extraDetails: [
            'small waterfalls, scattered relics, glowing plants',
            'stone bridges, tiny cascades, abandoned statues',
            'hidden pathways, ceremonial stones, jungle props'
        ]
    },

    snow: {
        label: 'cozy snowy village',
        moods: ['cozy', 'peaceful', 'whimsical', 'melancholic'],
        seasons: ['winter'],
        climates: ['cold and dry', 'cool mountain air'],
        timesOfDay: ['morning', 'sunset', 'blue hour', 'night'],
        colorStyles: [
            'cool blues with warm orange lights',
            'icy whites with cozy golden windows',
            'soft winter blues with amber lantern glow'
        ],
        terrainTypes: [
            'soft snow terrain',
            'snowy cobblestone paths',
            'frozen ground with snowdrifts'
        ],
        keyStructures: [
            'wooden cabins, small chapel, windmill',
            'alpine houses, watchtower, tiny stone bridge',
            'snow village cottages, timber sheds, bell tower'
        ],
        natureElements: [
            'pine trees covered in snow, frosted bushes',
            'icy fir trees, snow-laden shrubs, frozen hedges',
            'snowy evergreens, bare winter trees, icy plants'
        ],
        extraDetails: [
            'chimneys with smoke, lanterns, frozen river',
            'sleds, wooden fences, warm windows',
            'snowmen, footprints, icy pond'
        ]
    },

    desert: {
        label: 'ancient desert ruins',
        moods: ['ancient', 'mysterious', 'heroic', 'adventurous'],
        seasons: ['summer', 'dry season'],
        climates: ['arid', 'hot'],
        timesOfDay: ['sunrise', 'midday', 'golden hour', 'sunset'],
        colorStyles: [
            'warm yellows and orange tones',
            'sandstone beige with sun-baked orange accents',
            'golden sand with terracotta highlights'
        ],
        terrainTypes: [
            'sandy dunes',
            'desert stone tiles with sand',
            'rocky desert terrain with wind-carved paths'
        ],
        keyStructures: [
            'broken sandstone temple, arches, pillars',
            'half-buried palace ruins, carved obelisks, old stairways',
            'desert shrine, cracked columns, ceremonial platforms'
        ],
        natureElements: [
            'sparse dry bushes, cactus plants',
            'date palms, thorn shrubs, desert flowers',
            'dry grass tufts, rock plants, oasis vegetation'
        ],
        extraDetails: [
            'buried statues, sand dunes, ancient carvings',
            'oasis pool, pottery fragments, broken relics',
            'stone tablets, desert props, worn pathways'
        ]
    },

    mushroom: {
        label: 'enchanted mushroom forest',
        moods: ['magical', 'whimsical', 'peaceful', 'mysterious'],
        seasons: ['spring', 'summer', 'autumn'],
        climates: ['mystical humid', 'fresh and rainy'],
        timesOfDay: ['morning', 'twilight', 'blue hour', 'moonlit night'],
        colorStyles: [
            'purples, pinks and bioluminescent accents',
            'fantasy violets with glowing cyan details',
            'soft magentas with luminous forest highlights'
        ],
        terrainTypes: [
            'soft mossy ground',
            'forest floor with mushrooms and roots',
            'lush magical terrain with moss and tiny stones'
        ],
        keyStructures: [
            'tiny fairy houses, tree stump homes, curved wooden ladders',
            'mushroom cottages, hollow logs, miniature magical towers',
            'enchanted huts, root bridges, carved stump shelters'
        ],
        natureElements: [
            'giant mushrooms, glowing plants, twisted roots',
            'oversized fungi, bioluminescent flowers, mossy roots',
            'fantasy plants, curled vines, luminous leaves'
        ],
        extraDetails: [
            'floating particles, magical crystals, tiny bridges',
            'sparkles, glowing puddles, tiny lanterns',
            'fairy props, rune stones, magical pathways'
        ]
    },

    japanese: {
        label: 'traditional japanese village',
        moods: ['peaceful', 'cozy', 'ancient', 'whimsical'],
        seasons: ['spring', 'summer', 'autumn', 'winter'],
        climates: ['mild', 'fresh and rainy', 'cool mountain air'],
        timesOfDay: ['morning', 'golden hour', 'sunset', 'night'],
        colorStyles: [
            'soft pinks and warm neutrals',
            'natural wood tones with soft red accents',
            'muted seasonal colors with lantern warmth'
        ],
        terrainTypes: [
            'stone paths with grass',
            'terraced village ground with gravel paths',
            'garden terrain with stepping stones and moss'
        ],
        keyStructures: [
            'pagoda, wooden houses, torii gates',
            'temple courtyard, tiled roofs, shrine gate',
            'traditional inns, bridge, hillside shrine'
        ],
        natureElements: [
            'cherry blossom trees, bamboo clusters',
            'maple trees, pine trees, ornamental shrubs',
            'garden plants, bonsai-like trees, reeds'
        ],
        extraDetails: [
            'paper lanterns, koi pond, stepping stones',
            'small bridges, stone lanterns, water channels',
            'banners, garden props, shrine ornaments'
        ],
        seasonalRules: {
            spring: {
                natureElements: ['cherry blossom trees, bamboo clusters', 'flowering shrubs, sakura trees, garden plants'],
                colorStyles: ['soft pinks and warm neutrals', 'pastel pink blossoms with light wood tones']
            },
            autumn: {
                natureElements: ['maple trees, pine trees, ornamental shrubs', 'red maple foliage, stone garden plants, bamboo'],
                colorStyles: ['warm browns and oranges', 'autumn reds with muted wood tones']
            },
            winter: {
                natureElements: ['snowy pines, bare trees, trimmed shrubs', 'winter bamboo, frosted garden plants, pine trees'],
                colorStyles: ['cool grays with warm lantern orange', 'soft winter neutrals with red accents'],
                terrainTypes: ['snowy stone paths', 'frosted village ground with stepping stones']
            }
        }
    },

    volcanic: {
        label: 'volcanic island',
        moods: ['heroic', 'mysterious', 'adventurous', 'ancient'],
        seasons: ['summer', 'dry season'],
        climates: ['hot', 'windy'],
        timesOfDay: ['sunset', 'night', 'moonlit night'],
        colorStyles: [
            'dark tones with bright lava orange',
            'charcoal blacks with molten red highlights',
            'smoky grays with glowing magma accents'
        ],
        terrainTypes: [
            'rocky volcanic ground',
            'cracked basalt terrain',
            'ash-covered stone ground with lava veins'
        ],
        keyStructures: [
            'lava temple, cracked stone platforms, ritual altar',
            'obsidian shrine, broken basalt stairs, ancient monoliths',
            'volcanic fortress ruins, ceremonial tower, carved stone gate'
        ],
        natureElements: [
            'burnt trees, glowing rocks, ash-covered shrubs',
            'charred roots, smoke-touched plants, sparse volcanic grass',
            'blackened trees, glowing crystals, scorched bushes'
        ],
        extraDetails: [
            'lava flows, smoke vents, magma pools',
            'embers, broken chains, volcanic props',
            'steam cracks, glowing fissures, ritual stones'
        ]
    },

    tropical: {
        label: 'tropical island getaway',
        moods: ['playful', 'peaceful', 'cozy', 'whimsical'],
        seasons: ['spring', 'summer', 'late summer'],
        climates: ['humid tropical', 'mild'],
        timesOfDay: ['morning', 'midday', 'golden hour', 'sunset'],
        colorStyles: [
            'vibrant blues and greens',
            'turquoise water with sunny sand tones',
            'bright tropical greens with ocean blue accents'
        ],
        terrainTypes: [
            'sandy beach with grass patches',
            'rocky coast terrain with soft sand',
            'tropical island ground with palms and shoreline stones'
        ],
        keyStructures: [
            'wooden hut, dock, hammock area',
            'beach cabins, lookout deck, wooden pier',
            'island shelters, small boardwalk, tiki-style structures'
        ],
        natureElements: [
            'palm trees, bushes, tropical flowers',
            'coconut palms, lush island plants, coastal shrubs',
            'banana leaves, beach grass, exotic flowers'
        ],
        extraDetails: [
            'crystal water, small boat, coconuts',
            'surf props, seashells, rope details',
            'tiny bridges, beach props, coral rocks'
        ]
    },

    castle: {
        label: 'medieval castle hill',
        moods: ['heroic', 'peaceful', 'ancient', 'adventurous'],
        seasons: ['spring', 'summer', 'autumn'],
        climates: ['mild', 'cool mountain air', 'windy'],
        timesOfDay: ['morning', 'golden hour', 'sunset', 'blue hour'],
        colorStyles: [
            'warm browns and oranges',
            'stone gray with banner red and golden sunlight',
            'lush greens with warm castle stone tones'
        ],
        terrainTypes: [
            'grassy elevated terrain',
            'hillside stone terrain with dirt paths',
            'fortified hill ground with patches of grass'
        ],
        keyStructures: [
            'small castle, towers, stone walls',
            'fortress gate, watchtower, defensive bridge',
            'hilltop keep, battlements, old stone ramparts'
        ],
        natureElements: [
            'grass hills, small trees, shrubs',
            'cypress trees, meadow plants, bushes',
            'oak trees, wild grass, rocky plants'
        ],
        extraDetails: [
            'flags, stone paths, tiny bridges',
            'wooden carts, training props, banners',
            'fountains, guard props, cobblestone details'
        ]
    },

    swamp: {
        label: 'mystic swamp shrine',
        moods: ['mysterious', 'melancholic', 'magical', 'ancient'],
        seasons: ['spring', 'summer', 'autumn'],
        climates: ['foggy', 'mystical humid'],
        timesOfDay: ['twilight', 'blue hour', 'night', 'moonlit night'],
        colorStyles: [
            'deep teals and luminous cyan highlights',
            'murky greens with eerie blue glow',
            'muted swamp tones with magical light accents'
        ],
        terrainTypes: [
            'muddy swamp terrain',
            'wet roots and dark marsh ground',
            'swampy stone patches with shallow water'
        ],
        keyStructures: [
            'abandoned chapel, crooked huts, stone totems',
            'sunken shrine, broken dock, ritual stones',
            'swamp temple remains, wooden platforms, old altar'
        ],
        natureElements: [
            'murky trees, reeds, mossy roots',
            'twisted swamp trees, hanging moss, marsh plants',
            'wet bushes, lily pads, dark reeds'
        ],
        extraDetails: [
            'fireflies, fog patches, crooked fences',
            'glowing marsh lights, floating candles, wooden props',
            'mist, puddles, shrine relics'
        ]
    }
};

const THEME_KEYS = Object.keys(WORLD_THEMES);

const BASE_PROMPT = `ultra high quality miniature 3D diorama, stylized cartoon toy world, small self-contained environment (not a game arena), square base in isometric view

soft stylized shading like Pixar/modern mobile games, rounded geometry, chibi-like proportions applied to environment shapes

smooth bevels, thick edges, simplified geometry but rich detail

hand-painted textures with soft gradients and warm color palette

toy-like materials (plastic + clay), slightly rough matte finish, no realism

{MAIN_SCENARIO} environment with {KEY_STRUCTURES}, {NATURE_ELEMENTS}, {EXTRA_DETAILS}

terrain style: {TERRAIN_TYPE}, season: {SEASON}, climate: {CLIMATE}, mood: {MOOD}

organic composition like a tiny world or diorama scene, storytelling environment, asymmetrical layout

no competitive layout, no symmetrical arena, no red vs blue sides, no towers or battle elements

small decorative elements (trees, rocks, waterfalls, bridges, ruins, props) with exaggerated proportions

soft lighting matching {TIME_OF_DAY}, global illumination, ambient occlusion, subtle bloom

color palette emphasizing {COLOR_STYLE}

studio render, centered, floating platform

transparent background, alpha channel, no backdrop, isolated render, no gradient, no shadow plane

4k, ultra sharp, clean render, consistent style across renders, same scale, same camera angle, same lighting behavior

--ar 1:1 --quality 2`;

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function resolveTheme(theme) {
    if (theme && WORLD_THEMES[theme]) return theme;
    return randomItem(THEME_KEYS);
}

function getThemeData(themeKey) {
    return WORLD_THEMES[resolveTheme(themeKey)];
}

function normalizeSeason(themeData, preferredSeason) {
    if (preferredSeason && themeData.seasons.includes(preferredSeason)) return preferredSeason;
    return randomItem(themeData.seasons);
}

function getSeasonalOverrides(themeData, season) {
    if (!themeData.seasonalRules) return {};
    return themeData.seasonalRules[season] ?? {};
}

function selectCoherentValue(primaryList, overrideValue) {
    if (overrideValue) return overrideValue;
    return randomItem(primaryList);
}

function buildScenario(options = {}) {
    const theme = resolveTheme(options.theme);
    const themeData = getThemeData(theme);
    const season = normalizeSeason(themeData, options.season);
    const seasonal = getSeasonalOverrides(themeData, season);

    const scenario = {
        theme,
        mainScenario: options.mainScenario ?? themeData.label,
        keyStructures: selectCoherentValue(seasonal.keyStructures ?? themeData.keyStructures, options.keyStructures),
        natureElements: selectCoherentValue(seasonal.natureElements ?? themeData.natureElements, options.natureElements),
        extraDetails: selectCoherentValue(seasonal.extraDetails ?? themeData.extraDetails, options.extraDetails),
        terrainType: selectCoherentValue(seasonal.terrainTypes ?? themeData.terrainTypes, options.terrainType),
        season,
        climate: selectCoherentValue(seasonal.climates ?? themeData.climates, options.climate),
        timeOfDay: selectCoherentValue(seasonal.timesOfDay ?? themeData.timesOfDay, options.timeOfDay),
        colorStyle: selectCoherentValue(seasonal.colorStyles ?? themeData.colorStyles, options.colorStyle),
        mood: selectCoherentValue(seasonal.moods ?? themeData.moods, options.mood)
    };

    return scenario;
}

function fillTemplate(template, vars) {
    return template
        .replace('{MAIN_SCENARIO}', vars.mainScenario)
        .replace('{KEY_STRUCTURES}', vars.keyStructures)
        .replace('{NATURE_ELEMENTS}', vars.natureElements)
        .replace('{EXTRA_DETAILS}', vars.extraDetails)
        .replace('{TERRAIN_TYPE}', vars.terrainType)
        .replace('{SEASON}', vars.season)
        .replace('{CLIMATE}', vars.climate)
        .replace('{TIME_OF_DAY}', vars.timeOfDay)
        .replace('{COLOR_STYLE}', vars.colorStyle)
        .replace('{MOOD}', vars.mood);
}

function buildPrompt(options = {}, template = BASE_PROMPT) {
    const vars = buildScenario(options);
    return fillTemplate(template, vars);
}

function generateVariations(count = 10, locked = {}) {
    return Array.from({ length: count }, () => {
        const vars = buildScenario(locked);
        return {
            theme: vars.theme,
            vars,
            prompt: fillTemplate(BASE_PROMPT, vars)
        };
    });
}

function getThemeList() {
    return THEME_KEYS.map((key) => ({
        key,
        label: WORLD_THEMES[key].label,
        seasons: [...WORLD_THEMES[key].seasons]
    }));
}

function toJson(data) {
    return JSON.stringify(data, null, 2);
}

// Exemplos
const exampleRandom = buildPrompt();
const exampleJapaneseAutumn = buildPrompt({
    theme: 'japanese',
    season: 'autumn',
    timeOfDay: 'sunset'
});
const exampleSnowPack = generateVariations(3, {
    theme: 'snow'
});

console.log('=== EXEMPLO ALEATÓRIO COERENTE ===\n');
console.log(exampleRandom);
console.log('\n=== EXEMPLO JAPANESE AUTUMN ===\n');
console.log(exampleJapaneseAutumn);
console.log('\n=== 3 VARIAÇÕES COERENTES DO TEMA SNOW ===\n');
console.log(toJson(exampleSnowPack));

// Export para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WORLD_THEMES,
        THEME_KEYS,
        BASE_PROMPT,
        getThemeData,
        getThemeList,
        buildScenario,
        buildPrompt,
        generateVariations,
        fillTemplate,
        randomItem
    };
}

// Export para navegador
// if (typeof window !== 'undefined') {
//     window.DioramaPromptGenerator = {
//         WORLD_THEMES,
//         THEME_KEYS,
//         BASE_PROMPT,
//         getThemeData,
//         getThemeList,
//         buildScenario,
//         buildPrompt,
//         generateVariations,
//         fillTemplate,
//         randomItem
//     };
// }
