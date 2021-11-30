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
    return new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
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
    MEINKRAFT.scene.background = MEINKRAFT.texture.bg;

    MEINKRAFT.renderer.setSize(MEINKRAFT.size.width, MEINKRAFT.size.height);
    MEINKRAFT.renderArea.appendChild(MEINKRAFT.renderer.domElement);

    MEINKRAFT.camera = MEINKRAFT.getPerspectiveCamera(MEINKRAFT.size.width, MEINKRAFT.size.height)
    MEINKRAFT.camera.position.z = 5;

    var blocks = [];
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
    document.body.addEventListener("click", function(){
        controls.lock();
    });
    controls.addEventListener("lock", function(){

    });
    controls.addEventListener("unlock", function(){

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
MEINKRAFT.crosshair = {}
MEINKRAFT.crosshair.el = document.getElementById("crosshair")
MEINKRAFT.crosshair.hide = function() {
    if (!this.el.classList.contains('hidden')) {
        this.el.classList.add('hidden')
    }
}
MEINKRAFT.crosshair.show = function() {
    if (this.el.classList.contains('hidden')) {
        this.el.classList.remove('hidden')
    }
}
MEINKRAFT.crosshair.test = function() {
    return this
}

MEINKRAFT.changeGameState('init')