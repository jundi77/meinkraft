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

MEINKRAFT.getAudio = function(name) {
    return AUDIO_DIR + name
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
            grass: () => [
                    MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png')) }),
                    MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png'))}),
                    MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_top_1.jpg'))}),
                    MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png'))}),
                    MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png'))}),
                    MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('grass_side_1.png'))}),
            ],
            pumpkin: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png')) }),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_top.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_top.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_face_on.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('pumpkin_side.png'))}),
            ],
            tnt: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png')) }),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_top.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_bottom.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('tnt_side.png'))}),
            ],
            planks: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png')) }),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('planks_oak.png'))}),
            ],
            stone: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png')) }),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('stonebrick.png'))}),
            ],
            gold: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png')) }),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('gold_block.png'))}),
            ],
            wool: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('wool_colored_light_blue.png'))}),
            ],
            sand: () => [
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png'))}),
                MEINKRAFT.getMeshBasicMaterial({ map: MEINKRAFT.textureLoader.load(MEINKRAFT.getTextureImg('sand.png'))}),
            ]
        }
    }

    if (!MEINKRAFT.helper.cubeMaterialMaps[name]) {
        return [
            MEINKRAFT.getMeshBasicMaterial({color: 0xff0000}),
            MEINKRAFT.getMeshBasicMaterial({color: 0x00ff00}),
            MEINKRAFT.getMeshBasicMaterial({color: 0x0000ff}),
            MEINKRAFT.getMeshBasicMaterial({color: 0xff0000}),
            MEINKRAFT.getMeshBasicMaterial({color: 0x00ff00}),
            MEINKRAFT.getMeshBasicMaterial({color: 0x0000ff}),
        ]
    }

    return MEINKRAFT.helper.cubeMaterialMaps[name]()
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
    MEINKRAFT.crosshair.show();
    MEINKRAFT.menu.hud.topItem.show()
    MEINKRAFT.scene.background = MEINKRAFT.texture.bg;

    MEINKRAFT.renderer.setSize(MEINKRAFT.size.width, MEINKRAFT.size.height);
    MEINKRAFT.renderArea.appendChild(MEINKRAFT.renderer.domElement);

    MEINKRAFT.camera = MEINKRAFT.getPerspectiveCamera(MEINKRAFT.size.width, MEINKRAFT.size.height)
    MEINKRAFT.camera.position.z = 5;

    MEINKRAFT.blocks = [];
    blocks = MEINKRAFT.blocks;
    var xoff = 0;
    var zoff = 0;
    var inc = 0.05;
    var amplitude = 50;
    
    for(var x = 0; x < 10; x++){
        xoff = 0;
        for(var z = 0; z < 10; z++){
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
            window.onkeyup = function(event) {
                let key = event.key.toUpperCase();
                if ( key == '1' ) {
                    material = 'grass';
                }
                if ( key == '2' ) {
                    material = 'pumpkin';
                }
                if ( key == '3' ) {
                    material = 'tnt';
                }
                if ( key == '4' ) {
                    material = 'planks';
                }
                if ( key == '5' ) {
                    material = 'stone';
                }
                if ( key == '6' ) {
                    material = 'gold';
                }
                if ( key == '7' ) {
                    material = 'wool';
                }
                if ( key == '8' ) {
                    material = 'sand';
                }
            }
            var newBlock = MEINKRAFT.createBlock(material, x, y, z);
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
MEINKRAFT.textureLoader = MEINKRAFT.getTextureLoader()
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
        show: function () {
            MEINKRAFT.showElCss(this.el)
        },
        hide: function () {
            MEINKRAFT.hideElCss(this.el)
        }
    },
    'hud': {
        'topItem': {
            el: document.querySelector('#hud-top-item-choose'),
            changeSelected: function(num) {
                if (num > 7) {
                    console.error("Item index error: no index " + num)
                    return
                }
                let item = this.el.querySelector('.selected');
                if (item) item.classList.remove('selected')
                if (!this.el.children[num].classList.contains('selected')) {
                    this.el.children[num].classList.add('selected')
                }
            },
            refreshImg: function(array) {
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    let img_url;
                    this.el.children[num].src = img_url;
                }
            },
            show: function () {
                MEINKRAFT.showElCss(this.el)
            },
            hide: function () {
                MEINKRAFT.hideElCss(this.el)
            }
        }
    }
}

// MEINKRAFT.changeGameState('init')
