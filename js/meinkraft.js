const MEINKRAFT = {}
const IMAGE_DIR = 'assets/images/'
const AUDIO_DIR = 'assets/audios/'
const MODEL_DIR = 'assets/models/'
const TEXTURE_DIR = 'assets/images/textures/'

/**
 * Perlu diberikan render area agar bisa kalau
 * nantinya perlu append elemen untuk overlay,
 * sudah dipastikan elemen gamenya sesuai dengan yang di index.html.
 */
MEINKRAFT.getRenderArea = function() {
    return document.querySelector('#game-render-area')
}

MEINKRAFT.getAudio = function() {
    var audio = document.createElement('audio');
    var source = document.createElement('source');
    source.src = 'assets/audios/place.mp3';
    audio.appendChild(source);
    audio.play();
}

MEINKRAFT.getModel = function(name) {
    return MODEL_DIR + name
}

MEINKRAFT.getImg = function(name) {
    return IMAGE_DIR + name
}

MEINKRAFT.getTextureImg = function(name) {
    return TEXTURE_DIR + name
}

MEINKRAFT.getTextureImgByCubeMaterial = function(name) {
    if (!MEINKRAFT.helper.cubeMaterialImgMaps) {
        /**
         * [
         *   right side,
         *   left side,
         *   top side,
         *   bottom side,
         *   front side,
         *   back side,
         * ]
         */
        MEINKRAFT.helper.cubeMaterialImgMaps = {
            grass: [
                MEINKRAFT.getTextureImg('grass_side_1.png'),
            ],
            tnt: [
                MEINKRAFT.getTextureImg('tnt_side.png'),
            ],
            planks: [
                MEINKRAFT.getTextureImg('planks_oak.png'),
            ],
            stone: [
                MEINKRAFT.getTextureImg('stonebrick.png'),
            ],
            gold: [
                MEINKRAFT.getTextureImg('gold_block.png'),
            ],
            wool: [
                MEINKRAFT.getTextureImg('wool_colored_light_blue.png'),
            ],
            sand: [
                MEINKRAFT.getTextureImg('sand.png'),
            ],
            crying_obsidian: [
                MEINKRAFT.getTextureImg('crying_obsidian.png'),
            ],
            crafting_table: [
                MEINKRAFT.getTextureImg('crafting_table_front.png'),
            ],
            cactus: [
                MEINKRAFT.getTextureImg('cactus_side.png'),
            ],
            deepslate_emerald_ore: [
                MEINKRAFT.getTextureImg('deepslate_emerald_ore.png'),
            ],
            deepslate_gold_ore: [
                MEINKRAFT.getTextureImg('deepslate_gold_ore.png'),
            ],
            deepslate_iron_ore: [
                MEINKRAFT.getTextureImg('deepslate_iron_ore.png'),
            ],
            deepslate_lapis_ore: [
                MEINKRAFT.getTextureImg('deepslate_lapis_ore.png'),
            ],
            deepslate_redstone_ore: [
                MEINKRAFT.getTextureImg('deepslate_redstone_ore.png'),
            ],
            diamond: [
                MEINKRAFT.getTextureImg('diamond_block.png'),
            ],
            dirt: [
                MEINKRAFT.getTextureImg('dirt.png'),
            ],
            dirt_podzol: [
                MEINKRAFT.getTextureImg('dirt_podzol_side.png'),
            ],
            furnace: [
                MEINKRAFT.getTextureImg('furnace_front_off.png'),
            ],
            glass: [
                MEINKRAFT.getTextureImg('glass.png'),
            ],
            gold_ore: [
                MEINKRAFT.getTextureImg('gold_ore.png'),
            ],
            hardened_clay_stained_green: [
                MEINKRAFT.getTextureImg('hardened_clay_stained_green.png'),
            ],
            hardened_clay_stained_light_blue: [
                MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png'),
            ],
            hardened_clay_stained_lime: [
                MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png'),
            ],
            melon: [
                MEINKRAFT.getTextureImg('melon_side.png'),
            ],
            mycelium: [
                MEINKRAFT.getTextureImg('mycelium_side.png'),
            ],
            nether: [
                MEINKRAFT.getTextureImg('nether_brick.png'),
            ],
            planks_acacia: [
                MEINKRAFT.getTextureImg('planks_acacia.png'),
            ],
            planks_big_oak: [
                MEINKRAFT.getTextureImg('planks_big_oak.png'),
            ],
            planks_birch: [
                MEINKRAFT.getTextureImg('planks_birch.png'),
            ],
            planks_jungle: [
                MEINKRAFT.getTextureImg('planks_jungle.png'),
            ],
            planks_oak: [
                MEINKRAFT.getTextureImg('planks_oak.png'),
            ],
            planks_spruce: [
                MEINKRAFT.getTextureImg('planks_spruce.png'),
            ],
            pumpkin_on: [
                MEINKRAFT.getTextureImg('pumpkin_face_on.png'),
            ],
            pumpkin_off: [
                MEINKRAFT.getTextureImg('pumpkin_face_off.png'),
            ],
            sand: [
                MEINKRAFT.getTextureImg('sand.png'),
            ],
            wool_black: [
                MEINKRAFT.getTextureImg('wool_colored_black.png'),
            ],
            wool_blue: [
                MEINKRAFT.getTextureImg('wool_colored_blue.png'),
            ],
            wool_brown: [
                MEINKRAFT.getTextureImg('wool_colored_brown.png'),
            ],
            wool_cyan: [
                MEINKRAFT.getTextureImg('wool_colored_cyan.png'),
            ],
            wool_gray: [
                MEINKRAFT.getTextureImg('wool_colored_gray.png'),
            ],
            wool_green: [
                MEINKRAFT.getTextureImg('wool_colored_green.png'),
            ],
            wool_light_blue: [
                MEINKRAFT.getTextureImg('wool_colored_light_blue.png'),
            ],
            wool_lime: [
                MEINKRAFT.getTextureImg('wool_colored_lime.png'),
            ],
            wool_magenta: [
                MEINKRAFT.getTextureImg('wool_colored_magenta.png'),
            ],
            wool_orange: [
                MEINKRAFT.getTextureImg('wool_colored_orange.png'),
            ],
            wool_pink: [
                MEINKRAFT.getTextureImg('wool_colored_pink.png'),
            ],
            wool_purple: [
                MEINKRAFT.getTextureImg('wool_colored_purple.png'),
            ],
            wool_red: [
                MEINKRAFT.getTextureImg('wool_colored_red.png'),
            ],
            wool_silver: [
                MEINKRAFT.getTextureImg('wool_colored_silver.png'),
            ],
            wool_white: [
                MEINKRAFT.getTextureImg('wool_colored_white.png'),
            ],
            wool_yellow: [
                MEINKRAFT.getTextureImg('wool_colored_yellow.png'),
            ],
            stonebrick_carved: [
                MEINKRAFT.getTextureImg('stonebrick_carved.png'),
            ],
            stonebrick_cracked: [
                MEINKRAFT.getTextureImg('stonebrick_cracked.png'),
            ],
            stonebrick_mossy: [
                MEINKRAFT.getTextureImg('stonebrick_mossy.png'),
            ],
            wheat_stage_0: [
                MEINKRAFT.getTextureImg('wheat_stage_0.png'),
            ],
            wheat_stage_1: [
                MEINKRAFT.getTextureImg('wheat_stage_1.png'),
            ],
            wheat_stage_2: [
                MEINKRAFT.getTextureImg('wheat_stage_2.png'),
            ],
            wheat_stage_3: [
                MEINKRAFT.getTextureImg('wheat_stage_3.png'),
            ],
            wheat_stage_4: [
                MEINKRAFT.getTextureImg('wheat_stage_4.png'),
            ],
            wheat_stage_5: [
                MEINKRAFT.getTextureImg('wheat_stage_5.png'),
            ],
            wheat_stage_6: [
                MEINKRAFT.getTextureImg('wheat_stage_6.png'),
            ],
            wheat_stage_7: [
                MEINKRAFT.getTextureImg('wheat_stage_7.png'),
            ],
            default: [
                MEINKRAFT.getTextureImg('dirt.png'),
            ]
        }
    }

    if (!MEINKRAFT.helper.cubeMaterialImgMaps[name]) {
        return MEINKRAFT.helper.cubeMaterialImgMaps['default'];
    }

    return MEINKRAFT.helper.cubeMaterialImgMaps[name]
}

/**
 * Akan dicari jika material diketahui.
 * Jika tidak diketahui, akan diload dengan material default.
 * 
 * @param {*} name Nama material
 */
MEINKRAFT.getCubeMaterial = function(name) {
    if (!MEINKRAFT.helper.cubeMaterialMaps) {
        
        /**
         * [
         *   right side,
         *   left side,
         *   top side,
         *   bottom side,
         *   front side,
         *   back side,
         * ]
         */
        MEINKRAFT.helper.cubeMaterialMaps = {
            grass: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_top_1.jpg')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png')), transparent: true}),
            ],
            tnt: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_bottom.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png')), transparent: true}),
            ],
            planks: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
            ],
            stone: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')), transparent: true}),
            ],
            gold: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')), transparent: true}),
            ],
            wool: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png')), transparent: true}),
            ],
            sand: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
            ],
            crying_obsidian: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crying_obsidian.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crying_obsidian.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crying_obsidian.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crying_obsidian.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crying_obsidian.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crying_obsidian.png')), transparent: true}),
            ],
            crafting_table: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crafting_table_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crafting_table_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crafting_table_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crafting_table_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crafting_table_front.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('crafting_table_side.png')), transparent: true}),
            ],
            cactus: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('cactus_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('cactus_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('cactus_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('cactus_bottom.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('cactus_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('cactus_side.png')), transparent: true}),
            ],
            deepslate_emerald_ore: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_emerald_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_emerald_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_emerald_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_emerald_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_emerald_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_emerald_ore.png')), transparent: true}),
            ],
            deepslate_gold_ore: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_gold_ore.png')), transparent: true}),
            ],
            deepslate_iron_ore: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_iron_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_iron_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_iron_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_iron_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_iron_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_iron_ore.png')), transparent: true}),
            ],
            deepslate_lapis_ore: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_lapis_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_lapis_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_lapis_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_lapis_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_lapis_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_lapis_ore.png')), transparent: true}),
            ],
            deepslate_redstone_ore: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_redstone_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_redstone_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_redstone_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_redstone_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_redstone_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('deepslate_redstone_ore.png')), transparent: true}),
            ],
            diamond: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('diamond_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('diamond_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('diamond_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('diamond_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('diamond_block.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('diamond_block.png')), transparent: true}),
            ],
            dirt: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt.png')), transparent: true}),
            ],
            dirt_podzol: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt_podzol_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt_podzol_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt_podzol_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt_podzol_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt_podzol_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('dirt_podzol_side.png')), transparent: true}),
            ],
            furnace: [ // Generally ini furnace off
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('furnace_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('furnace_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('furnace_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('furnace_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('furnace_front_off.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('furnace_side.png')), transparent: true}),
            ],
            glass: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('glass.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('glass.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('glass.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('glass.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('glass.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('glass.png')), transparent: true}),
            ],
            gold_ore: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_ore.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_ore.png')), transparent: true}),
            ],
            hardened_clay_stained_green: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_green.png')), transparent: true}),
            ],
            hardened_clay_stained_light_blue: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_light_blue.png')), transparent: true}),
            ],
            hardened_clay_stained_lime: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('hardened_clay_stained_lime.png')), transparent: true}),
            ],
            melon: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('melon_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('melon_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('melon_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('melon_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('melon_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('melon_side.png')), transparent: true}),
            ],
            mycelium: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('mycelium_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('mycelium_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('mycelium_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('mycelium_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('mycelium_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('mycelium_side.png')), transparent: true}),
            ],
            nether: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('nether_brick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('nether_brick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('nether_brick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('nether_brick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('nether_brick.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('nether_brick.png')), transparent: true}),
            ],
            planks_acacia: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_acacia.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_acacia.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_acacia.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_acacia.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_acacia.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_acacia.png')), transparent: true}),
            ],
            planks_big_oak: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_big_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_big_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_big_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_big_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_big_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_big_oak.png')), transparent: true}),
            ],
            planks_birch: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_birch.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_birch.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_birch.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_birch.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_birch.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_birch.png')), transparent: true}),
            ],
            planks_jungle: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_jungle.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_jungle.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_jungle.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_jungle.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_jungle.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_jungle.png')), transparent: true}),
            ],
            planks_oak: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')), transparent: true}),
            ],
            planks_spruce: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_spruce.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_spruce.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_spruce.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_spruce.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_spruce.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_spruce.png')), transparent: true}),
            ],
            pumpkin_on: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_face_on.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png')), transparent: true}),
            ],
            pumpkin_off: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_sidee.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_sidee.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_top.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_face_off.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png')), transparent: true}),
            ],
            sand: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png')), transparent: true}),
            ],
            wool_black: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_black.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_black.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_black.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_black.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_black.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_black.png')), transparent: true}),
            ],
            wool_blue: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_blue.png')), transparent: true}),
            ],
            wool_brown: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_brown.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_brown.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_brown.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_brown.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_brown.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_brown.png')), transparent: true}),
            ],
            wool_cyan: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_cyan.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_cyan.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_cyan.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_cyan.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_cyan.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_cyan.png')), transparent: true}),
            ],
            wool_gray: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_gray.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_gray.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_gray.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_gray.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_gray.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_gray.png')), transparent: true}),
            ],
            wool_green: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_green.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_green.png')), transparent: true}),
            ],
            wool_light_blue: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_light_blue.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_light_blue.png')), transparent: true}),
            ],
            wool_lime: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_lime.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_lime.png')), transparent: true}),
            ],
            wool_magenta: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_magenta.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_magenta.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_magenta.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_magenta.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_magenta.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_magenta.png')), transparent: true}),
            ],
            wool_orange: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_orange.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_orange.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_orange.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_orange.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_orange.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_orange.png')), transparent: true}),
            ],
            wool_pink: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_pink.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_pink.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_pink.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_pink.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_pink.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_pink.png')), transparent: true}),
            ],
            wool_purple: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_purple.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_purple.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_purple.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_purple.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_purple.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_purple.png')), transparent: true}),
            ],
            wool_red: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_red.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_red.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_red.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_red.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_red.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_red.png')), transparent: true}),
            ],
            wool_silver: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_silver.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_silver.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_silver.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_silver.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_silver.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_silver.png')), transparent: true}),
            ],
            wool_white: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_white.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_white.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_white.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_white.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_white.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_white.png')), transparent: true}),
            ],
            wool_yellow: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_yellow.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_yellow.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_yellow.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_yellow.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_yellow.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_yellow.png')), transparent: true}),
            ],
            stonebrick_carved: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_carved.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_carved.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_carved.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_carved.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_carved.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_carved.png')), transparent: true}),
            ],
            stonebrick_cracked: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_cracked.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_cracked.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_cracked.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_cracked.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_cracked.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_cracked.png')), transparent: true}),
            ],
            stonebrick_mossy: [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_mossy.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_mossy.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_mossy.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_mossy.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_mossy.png')), transparent: true}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick_mossy.png')), transparent: true}),
            ],
            // Wheat jelek.... skip dulu
            // wheat_stage_0: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_0.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_0.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_0.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_0.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_0.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_0.png')), transparent: true}),
            // ],
            // wheat_stage_1: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_1.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_1.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_1.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_1.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_1.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_1.png')), transparent: true}),
            // ],
            // wheat_stage_2: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_2.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_2.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_2.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_2.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_2.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_2.png')), transparent: true}),
            // ],
            // wheat_stage_3: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_3.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_3.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_3.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_3.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_3.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_3.png')), transparent: true}),
            // ],
            // wheat_stage_4: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_4.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_4.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_4.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_4.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_4.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_4.png')), transparent: true}),
            // ],
            // wheat_stage_5: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_5.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_5.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_5.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_5.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_5.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_5.png')), transparent: true}),
            // ],
            // wheat_stage_6: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_6.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_6.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_6.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_6.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_6.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_6.png')), transparent: true}),
            // ],
            // wheat_stage_7: [
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_7.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_7.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_7.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_7.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_7.png')), transparent: true}),
            //     MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wheat_stage_7.png')), transparent: true}),
            // ],
            default: [
                MEINKRAFT.getMeshBasicMaterial({color: 0xff0000}),
                MEINKRAFT.getMeshBasicMaterial({color: 0x00ff00}),
                MEINKRAFT.getMeshBasicMaterial({color: 0x0000ff}),
                MEINKRAFT.getMeshBasicMaterial({color: 0xff0000}),
                MEINKRAFT.getMeshBasicMaterial({color: 0x00ff00}),
                MEINKRAFT.getMeshBasicMaterial({color: 0x0000ff}),
            ]
        }
    }

    if (!MEINKRAFT.helper.cubeMaterialMaps[name]) {
        return MEINKRAFT.helper.cubeMaterialMaps['default'];
    }

    return MEINKRAFT.helper.cubeMaterialMaps[name]
}

MEINKRAFT.getScene = function() {
    return new THREE.Scene();
}

MEINKRAFT.getTextureLoader = function() {
    return new THREE.TextureLoader();
}

MEINKRAFT.getGameRenderer = function() {
    return new THREE.WebGLRenderer();
}

MEINKRAFT.getPerspectiveCamera = function(width, height) {
    return new THREE.PerspectiveCamera(75, width / height, 1, 1000)
}

MEINKRAFT.getMeshBasicMaterial = function(args) {
    return new THREE.MeshBasicMaterial(args)
}

MEINKRAFT.getWidth = function() {
    return window.innerWidth;
}

MEINKRAFT.getHeight = function() {
    return window.innerHeight
}

MEINKRAFT.createBlock = function(material, x, y, z) {
    return {
        x, y, z,
        block: new THREE.Mesh(new THREE.BoxBufferGeometry(5, 5, 5), MEINKRAFT.getCubeMaterial(material)),
        display: function() {
            MEINKRAFT.scene.add(this.block);
            this.block.position.x = this.x;
            this.block.position.y = this.y - 10;
            this.block.position.z = this.z;

            // var edges = new THREE.EdgesGeometry(blockBox);
            // var line = new THREE.LineSegments(edges, new THREE.
            //     LineBasicMaterial({color : 0x000000}));
            // MEINKRAFT.scene.add(line);
            // line.position.x = x;
            // line.position.y = y - 10;
            // line.position.z = z;
        }
    }
}

MEINKRAFT.helper = {}

MEINKRAFT.gameState = ''
MEINKRAFT.helper.getGameStatesAvailable = () => Object.keys(MEINKRAFT.gameStatesAction)
MEINKRAFT.gameStatesAction = {}
MEINKRAFT.gameStatesAction.default = function () {
    console.error('State tidak diketahui')
    alert('State tidak diketahui')
}
MEINKRAFT.gameStatesAction.init = function () {
    MEINKRAFT.menu.chooseTopItemOnHud.fillImg();
    MEINKRAFT.menu.hud.topItem.init();
    MEINKRAFT.crosshair.show();
    MEINKRAFT.menu.hud.topItem.show()
    MEINKRAFT.scene.background = MEINKRAFT.texture.bg;

    MEINKRAFT.renderer.setSize(MEINKRAFT.size.width, MEINKRAFT.size.height);
    MEINKRAFT.renderArea.appendChild(MEINKRAFT.renderer.domElement);

    MEINKRAFT.camera = MEINKRAFT.getPerspectiveCamera(MEINKRAFT.size.width, MEINKRAFT.size.height)
    MEINKRAFT.camera.position.z = 5;
    MEINKRAFT.camera.rotation.y = 10;

    var stream = "https://cdn.pixabay.com/download/audio/2021/08/08/audio_88447e769f.mp3?filename=melody-of-nature-main-6672.mp3";
    
    var audioLoader = new THREE.AudioLoader();
    var listener = new THREE.AudioListener();
    var audio = new THREE.Audio(listener);
    audioLoader.load(stream, function(buffer) {
        audio.setBuffer(buffer);
        audio.setLoop(true);
        audio.setVolume(0.01);
        audio.play();
    });


    MEINKRAFT.blocks = [];
    blocks = MEINKRAFT.blocks;
    var xoff = 0;
    var zoff = 0;
    var inc = 0.05;
    var amplitude = 50;
    
    for(var x = 0; x < 20; x++){
        xoff = 0;
        for(var z = 0; z < 20; z++){
            var v = Math.round(noise.perlin2(xoff, zoff) * amplitude / 5) * 5;
            blocks.push(MEINKRAFT.createBlock('grass', x * 5, v, z * 5));
            xoff = xoff + inc;
        }
        zoff = zoff + inc;
    }

    for(var i = 0; i < blocks.length; i++){
        blocks[i].display();
    }

    var keys = [];
    var canJump = true;
    document.addEventListener("keydown", function(e){
        keys.push(e.key);
        if(e.key == " " && canJump == true){
            ySpeed = -0.5;
            canJump = false;
        }
    });

    document.addEventListener("keyup", function(e){
        var newArr = [];
        for(var i=0; i<keys.length;i++){
            if(keys[i] != e.key){
                newArr.push(keys[i]);
            }
        }
        keys = newArr;
    });

    var controls = new THREE.PointerLockControls(MEINKRAFT.camera, MEINKRAFT.renderArea);
    window.controls = controls
    let material = 'grass'
    MEINKRAFT.menu.hud.topItem.changeSelected(0)
    window.onkeyup = function(event) {
        let key = event.key.toUpperCase();
        console.log(key);
        if ( key == '1' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '2' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '3' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '4' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '5' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '6' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '7' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '8' ) {
            MEINKRAFT.menu.hud.topItem.changeSelected(key - 1)
        }
        if ( key == '`') {
            if (MEINKRAFT.menu.chooseTopItemOnHud.choosing) {
                controls.lock()
                MEINKRAFT.menu.hud.topItem.show()
                MEINKRAFT.menu.chooseTopItemOnHud.hide()
                return
            }
            controls.unlock()
            MEINKRAFT.menu.hud.topItem.hide()
            MEINKRAFT.menu.chooseTopItemOnHud.show()
        }
    }
    MEINKRAFT.renderArea.addEventListener("mousedown", function(e){
        console.log(e.button);
        if (!MEINKRAFT.crosshair.locked) {
            controls.lock();
            return
        }

        MEINKRAFT.raycaster.setFromCamera(MEINKRAFT.crosshair.render, MEINKRAFT.camera)
        let selected = MEINKRAFT.raycaster.intersectObjects(MEINKRAFT.scene.children)
        if (selected.length > 0) {
            if (e.button == 2) {
                // MEINKRAFT.raycaster.setFromCamera(MEINKRAFT.crosshair.render, MEINKRAFT.camera)
                MEINKRAFT.scene.remove(selected[0].object)
                MEINKRAFT.getAudio();
                // TODO remove dari array MEINKRAFT.blocks
                return
            }

            /**
             * Pengingat material index
             * [
             *   right side,
             *   left side,
             *   top side,
             *   bottom side,
             *   front side,
             *   back side,
             * ]
             */
            let x, y, z;
            x = selected[0].object.position.x;
            y = selected[0].object.position.y + 10;
            z = selected[0].object.position.z;
            switch (selected[0].face.materialIndex) {
                case 0:
                    console.log('right');
                    // spawn x + 5
                    x += 5
                    break;
                case 1:
                    console.log('left');
                    // spawn x - 5
                    x -= 5
                    break;
                case 2:
                    console.log('top');
                    // spawn y + 5
                    y += 5
                    break;
                case 3:
                    console.log('bottom');
                    // spawn y - 5
                    y -= 5
                    break;
                case 4:
                    console.log('front');
                    // spawn z + 5
                    z += 5
                    break;
                case 5:
                    console.log('back');
                    // spawn z - 5
                    z -= 5
                    break;
                default:
                    break;
            }
            let material = MEINKRAFT.topItem[MEINKRAFT.menu.hud.topItem.selected]
            var newBlock = MEINKRAFT.createBlock(material, x, y, z);
            MEINKRAFT.getAudio();
            MEINKRAFT.blocks.push(newBlock);
            newBlock.display()
            // MEINKRAFT.scene.remove(selected[0].object)
        }
    });
    controls.addEventListener("lock", function(){
        MEINKRAFT.crosshair.locked = true
    });
    controls.addEventListener("unlock", function(){
        MEINKRAFT.crosshair.locked = false
    });

    var movingSpeed = 0.3;
    var ySpeed = 0;
    var acc = 0.01;
    function update(){
        if(keys.includes("w")){
            controls.moveForward(movingSpeed);
            for(var i = 0; i < blocks.length; i++){
                if(MEINKRAFT.camera.position.x <= blocks[i].x + 2.5 && MEINKRAFT.camera.position.x >= blocks[i].x - 2.5 && MEINKRAFT.camera.position.z <= blocks[i].z + 2.5 && MEINKRAFT.camera.position.z >= blocks[i].z - 2.5){
                    if(MEINKRAFT.camera.position.y == blocks[i].y - 2.5){
                        controls.moveForward(-1 * movingSpeed);
                    }
                }
            }
        }
        if(keys.includes("a")){
            controls.moveRight(-1 * movingSpeed);
            for(var i = 0; i < blocks.length; i++){
                if(MEINKRAFT.camera.position.x <= blocks[i].x + 2.5 && MEINKRAFT.camera.position.x >= blocks[i].x - 2.5 && MEINKRAFT.camera.position.z <= blocks[i].z + 2.5 && MEINKRAFT.camera.position.z >= blocks[i].z - 2.5){
                    if(MEINKRAFT.camera.position.y == blocks[i].y - 2.5){
                        controls.moveRight(movingSpeed);
                    }
                }
            }
        }
        if(keys.includes("s")){
            controls.moveForward(-1 * movingSpeed);
            for(var i = 0; i < blocks.length; i++){
                if(MEINKRAFT.camera.position.x <= blocks[i].x + 2.5 && MEINKRAFT.camera.position.x >= blocks[i].x - 2.5 && MEINKRAFT.camera.position.z <= blocks[i].z + 2.5 && MEINKRAFT.camera.position.z >= blocks[i].z - 2.5){
                    if(MEINKRAFT.camera.position.y == blocks[i].y - 2.5){
                        controls.moveForward(movingSpeed);
                    }
                }
            }
        }
        if(keys.includes("d")){
            controls.moveRight(movingSpeed);
            for(var i = 0; i < blocks.length; i++){
                if(MEINKRAFT.camera.position.x <= blocks[i].x + 2.5 && MEINKRAFT.camera.position.x >= blocks[i].x - 2.5 && MEINKRAFT.camera.position.z <= blocks[i].z + 2.5 && MEINKRAFT.camera.position.z >= blocks[i].z - 2.5){
                    if(MEINKRAFT.camera.position.y == blocks[i].y - 2.5){
                        controls.moveRight(-1 * movingSpeed);
                    }
                }
            }
        }

        MEINKRAFT.camera.position.y = MEINKRAFT.camera.position.y - ySpeed; // untuk jatuh
        ySpeed = ySpeed + acc; //akselerasi

        for(var i = 0; i < blocks.length; i++){
            if(MEINKRAFT.camera.position.x <= blocks[i].x + 2.5 && MEINKRAFT.camera.position.x >= blocks[i].x - 2.5 && MEINKRAFT.camera.position.z <= blocks[i].z + 2.5 && MEINKRAFT.camera.position.z >= blocks[i].z - 2.5){
                if(MEINKRAFT.camera.position.y < blocks[i].y + 2.5 && MEINKRAFT.camera.position.y >= blocks[i].y - 2.5){
                    MEINKRAFT.camera.position.y = blocks[i].y + 2.5;
                    ySpeed = 0;
                    canJump = true;
                }
            }
        }
    }

    //Resize Window
    window.addEventListener("resize", function(){
        MEINKRAFT.size.width = MEINKRAFT.getWidth()
        MEINKRAFT.size.height = MEINKRAFT.getHeight()
        MEINKRAFT.renderer.setSize(MEINKRAFT.size.width, MEINKRAFT.size.height);
        MEINKRAFT.camera.aspect = MEINKRAFT.size.width / MEINKRAFT.size.height;
        MEINKRAFT.camera.updateProjectionMatrix();
    });

    function Loop(){
        MEINKRAFT.renderer.render(MEINKRAFT.scene, MEINKRAFT.camera);
        requestAnimationFrame(Loop);
        update();
    }

    Loop();
}

MEINKRAFT.changeGameState = function(state) {
    if (!MEINKRAFT.gameStatesAction[state]) {
        MEINKRAFT.gameStatesAction.default()
        return
    }

    MEINKRAFT.gameState = state
    MEINKRAFT.gameStatesAction[state]()
}

MEINKRAFT.renderArea = MEINKRAFT.getRenderArea()
MEINKRAFT.scene = MEINKRAFT.getScene()
MEINKRAFT.textureLoader = {
    loader: MEINKRAFT.getTextureLoader(),
    load: function(url, onload=null, onprogress=null, onerror=null) {
        if (!MEINKRAFT.helper.textureCache) {
            MEINKRAFT.helper.textureCache = {};
        }

        let empty = () => {}
        if (!MEINKRAFT.helper.textureCache[url]) {
            MEINKRAFT.helper.textureCache[url] = this.loader.load(url, onload ?? empty , onprogress ?? empty, onerror ?? empty)
        }

        return MEINKRAFT.helper.textureCache[url];
    }
}
MEINKRAFT.renderer = MEINKRAFT.getGameRenderer()
MEINKRAFT.size = {}
MEINKRAFT.size.width = MEINKRAFT.getWidth()
MEINKRAFT.size.height = MEINKRAFT.getHeight()
MEINKRAFT.texture = {}
MEINKRAFT.texture.bg = MEINKRAFT.textureLoader.load(MEINKRAFT.getImg('sky.jpg'));
MEINKRAFT.hideElCss = function(el) {
    if (!el.classList.contains('hidden')) {
        el.classList.add('hidden')
    }
}
MEINKRAFT.showElCss = function(el) {
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden')
    }
}
MEINKRAFT.crosshair = {}
MEINKRAFT.crosshair.el = document.getElementById("crosshair")
MEINKRAFT.crosshair.hide = function() {
    MEINKRAFT.hideElCss(this.el)
}
MEINKRAFT.crosshair.show = function() {
    MEINKRAFT.showElCss(this.el)
}
MEINKRAFT.crosshair.test = function() {
    return this
}
MEINKRAFT.crosshair.render = new THREE.Vector2()
MEINKRAFT.crosshair.render.x = 0; // Center
MEINKRAFT.crosshair.render.y = 0; // Center
MEINKRAFT.crosshair.locked = false;
MEINKRAFT.raycaster = new THREE.Raycaster()
MEINKRAFT.helper.sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

MEINKRAFT.topItem = [
    'grass',
    'pumpkin_on',
    'tnt',
    'planks',
    'stone',
    'gold',
    'wool',
    'sand',
]

MEINKRAFT.menu = {
    'main': {
        el: document.getElementById('game-main-menu'),
        startClick: function(e) {
            MEINKRAFT.hideElCss(this.el)
            MEINKRAFT.changeGameState('init')
        }
    },
    'chooseTopItemOnHud': {
        el: document.querySelector('#game-choose-top-item'),
        choosing: false,
        show: function () {
            MEINKRAFT.crosshair.hide()
            MEINKRAFT.showElCss(this.el)
            this.choosing = true
        },
        hide: function () {
            MEINKRAFT.crosshair.show()
            MEINKRAFT.hideElCss(this.el)
            this.choosing = false
            MEINKRAFT.menu.hud.topItem.syncItemImg();
        },
        drag: function(ev) {
            ev.dataTransfer.setData("src", ev.target.src)
            ev.dataTransfer.setData("box", ev.target.box)
        },
        fillImg: function() {
            if (!MEINKRAFT.helper.cubeMaterialMaps) {
                MEINKRAFT.getCubeMaterial(null)
            }

            let el = this.el, drag = this.drag;
            Object.keys(MEINKRAFT.helper.cubeMaterialMaps).forEach(function (value, index, array) {
                let img = document.createElement('img');
                img.src = MEINKRAFT.getTextureImgByCubeMaterial(value)
                img.classList.add('item')
                img.alt = value
                img.title = value
                img.box = value
                img.draggable = true
                img.addEventListener('dragstart', drag)
                el.children[2].appendChild(img)
            });
        },
    },
    'hud': {
        'topItem': {
            el: document.querySelector('#hud-top-item-choose'),
            selected: 0,
            changeSelected: function(num) {
                if (num > 7) {
                    console.error("Item index error: no index " + num)
                    return
                }
                this.selected = num
                let item = this.el.querySelector('.selected');
                if (item) item.classList.remove('selected')
                if (!this.el.children[num].classList.contains('selected')) {
                    this.el.children[num].classList.add('selected')
                }
            },
            syncItemImg: function() {
                for (let i = 0; i < MEINKRAFT.topItem.length; i++) {
                    this.el.children[i].src = MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[i].src
                    this.el.children[i].alt = MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[i].alt
                    this.el.children[i].title = MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[i].title
                    this.el.children[i].box = MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[i].box
                }
            },
            show: function () {
                MEINKRAFT.showElCss(this.el)
            },
            hide: function () {
                MEINKRAFT.hideElCss(this.el)
            },
            drop: function(ev) {
                ev.preventDefault()

                let box = ev.dataTransfer.getData("box");
                let src = ev.dataTransfer.getData("src");
                let order = ev.target.order

                if (!box || !src) {
                    return
                }

                let found = false;

                MEINKRAFT.topItem.find((curr, idx, arr) => {
                    let backup = {}
                    if (curr == box) {
                        found = true;

                        if (idx != order) {
                            backup.src = ev.target.src
                            backup.alt = ev.target.alt
                            backup.title = ev.target.title
                            backup.box = ev.target.box
                            ev.target.src = src
                            ev.target.alt = box
                            ev.target.title = box
                            ev.target.box = box
                            MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[idx].src = backup.src
                            MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[idx].alt = backup.alt
                            MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[idx].title = backup.title
                            MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].children[idx].box = backup.box

                            backup = arr[order]
                            arr[order] = box
                            arr[idx] = backup
                        }
                    }

                    if (!found && idx == MEINKRAFT.topItem.length - 1) {
                        ev.target.src = src
                        ev.target.alt = box
                        ev.target.title = box
                        ev.target.box = box
                        arr[order] = box
                    }
                })
            },
            init: function() {
                let el = this.el, drop = this.drop;
                MEINKRAFT.topItem.forEach(function (value, index, array) {
                    let img = document.createElement('img');
                    img.src = MEINKRAFT.getTextureImgByCubeMaterial(value)
                    img.classList.add('item')
                    img.alt = value
                    img.title = value
                    img.box = value
                    img.order = index
                    el.appendChild(img)
                });

                MEINKRAFT.topItem.forEach(function (value, index, array) {
                    let img = document.createElement('img');
                    img.src = MEINKRAFT.getTextureImgByCubeMaterial(value)
                    img.classList.add('item')
                    img.alt = value
                    img.title = value
                    img.box = value
                    img.order = index
                    img.addEventListener('dragenter', (ev) => ev.preventDefault())
                    img.addEventListener('dragover', (ev) => ev.preventDefault())
                    img.addEventListener('drop', drop)
                    MEINKRAFT.menu.chooseTopItemOnHud.el.children[1].appendChild(img)
                });
            }
        }
    }
}

MEINKRAFT.changeGameState('init')
