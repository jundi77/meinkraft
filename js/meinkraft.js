var scene = new THREE.Scene();
//scene.background = new THREE.Color(0x87CEEB);

var loader = new THREE.TextureLoader();
var bgTexture = loader.load('assets/images/sky.jpg');
scene.background = bgTexture;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.
    innerHeight, 0.1, 1000);

camera.position.z = 5;

var loader = new THREE.TextureLoader();
var cubeMaterials = [
    new THREE.MeshBasicMaterial({ map: loader.load('assets/images/textures/grass_side_1.png') }), //right side
    new THREE.MeshBasicMaterial({ map: loader.load('assets/images/textures/grass_side_1.png')}), //left side
    new THREE.MeshBasicMaterial({ map: loader.load('assets/images/textures/grass_top_1.jpg')}), //top side
    new THREE.MeshBasicMaterial({ map: loader.load('assets/images/textures/grass_side_1.png')}), //bottom side
    new THREE.MeshBasicMaterial({ map: loader.load('assets/images/textures/grass_side_1.png')}), //front side
    new THREE.MeshBasicMaterial({ map: loader.load('assets/images/textures/grass_side_1.png')}), //back side
];

function Block(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.display = function() {



        var blockBox = new THREE.BoxBufferGeometry(5, 5, 5);
        var block = new THREE.Mesh(blockBox, cubeMaterials);
        scene.add(block);
        block.position.x = this.x;
        block.position.y = this.y - 10;
        block.position.z = this.z;
        
        // var edges = new THREE.EdgesGeometry(blockBox);
        // var line = new THREE.LineSegments(edges, new THREE.
        //     LineBasicMaterial({color : 0x000000}));
        // scene.add(line);
        // line.position.x = this.x;
        // line.position.y = this.y - 10;
        // line.position.z = this.z;
    }
}

var blocks = [];
var xoff = 0;
var zoff = 0;
var inc = 0.05;
var amplitude = 50;

for(var x = 0; x < 30; x++){
    xoff = 0;
    for(var z = 0; z < 30; z++){
        var v = Math.round(noise.perlin2(xoff, zoff) * amplitude / 5) * 5;
        blocks.push(new Block(x * 5, v, z * 5));
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

var controls = new THREE.PointerLockControls(camera, document.body);
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
            if(camera.position.x <= blocks[i].x + 2.5 && camera.position.x >= blocks[i].x - 2.5 && camera.position.z <= blocks[i].z + 2.5 && camera.position.z >= blocks[i].z - 2.5){
                if(camera.position.y == blocks[i].y - 2.5){
                    controls.moveForward(-1 * movingSpeed);
                }
            }
        }
    }
    if(keys.includes("a")){
        controls.moveRight(-1 * movingSpeed);
        for(var i = 0; i < blocks.length; i++){
            if(camera.position.x <= blocks[i].x + 2.5 && camera.position.x >= blocks[i].x - 2.5 && camera.position.z <= blocks[i].z + 2.5 && camera.position.z >= blocks[i].z - 2.5){
                if(camera.position.y == blocks[i].y - 2.5){
                    controls.moveRight(movingSpeed);
                }
            }
        }
    }
    if(keys.includes("s")){
        controls.moveForward(-1 * movingSpeed);
        for(var i = 0; i < blocks.length; i++){
            if(camera.position.x <= blocks[i].x + 2.5 && camera.position.x >= blocks[i].x - 2.5 && camera.position.z <= blocks[i].z + 2.5 && camera.position.z >= blocks[i].z - 2.5){
                if(camera.position.y == blocks[i].y - 2.5){
                    controls.moveForward(movingSpeed);
                }
            }
        }
    }
    if(keys.includes("d")){
        controls.moveRight(movingSpeed);
        for(var i = 0; i < blocks.length; i++){
            if(camera.position.x <= blocks[i].x + 2.5 && camera.position.x >= blocks[i].x - 2.5 && camera.position.z <= blocks[i].z + 2.5 && camera.position.z >= blocks[i].z - 2.5){
                if(camera.position.y == blocks[i].y - 2.5){
                    controls.moveRight(-1 * movingSpeed);
                }
            }
        }
    }

    camera.position.y = camera.position.y - ySpeed; // untuk jatuh
    ySpeed = ySpeed + acc; //akselerasi

    for(var i = 0; i < blocks.length; i++){
        if(camera.position.x <= blocks[i].x + 2.5 && camera.position.x >= blocks[i].x - 2.5 && camera.position.z <= blocks[i].z + 2.5 && camera.position.z >= blocks[i].z - 2.5){
            if(camera.position.y < blocks[i].y + 2.5 && camera.position.y >= blocks[i].y - 2.5){
                camera.position.y = blocks[i].y + 2.5;
                ySpeed = 0;
                canJump = true;
            }
        }
    }
}

//Resize Window
window.addEventListener("resize", function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

function Loop(){
    renderer.render(scene, camera);
    requestAnimationFrame(Loop);
    update();

}

Loop();