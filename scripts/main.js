const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

// screensize 800x800
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

//--------------------------------------------------//

// variables
camera.position.z = 5;

let XSpeed = 0.003
let YSpeed = 0.003

let bounces=0

//--------------------------------------------------//

// plane geometry
const geometry = new THREE.PlaneGeometry( 0.5, 0.3 );
const material = new THREE.MeshBasicMaterial();
const dvd = new THREE.Mesh( geometry, material );
scene.add( dvd );

dvd.position.set( 0, 0)

//--------------------------------------------------//

// [FUNCTIONS]

function randomColor()
{
    dvd.material.color.setRGB( Math.random(0),Math.random(255),Math.random(255) )
    console.log("color changed")
}
randomColor()

function dvdSize()
{
    dvd.scale.x -=0.1
    dvd.scale.y -=0.1
    console.log("size decreased")
}

function bouncesLeft()
{
    bounces++
    console.log("dvd bounces" + bounces )
}

function stopMovement()
{
    XSpeed = 0
    YSpeed = 0
    dvd.visible = false
}

//--------------------------------------------------//

// [ANIMATION]

function animate() {
  renderer.render( scene, camera );

  dvd.position.x +=XSpeed
  dvd.position.y +=YSpeed


// dvd bounces
     if(dvd.position.x > 0.75){XSpeed=-0.003; randomColor(); dvdSize(); bouncesLeft();}

else if(dvd.position.x < -0.75){XSpeed=0.003; randomColor(); dvdSize(); bouncesLeft();}

else if(dvd.position.y > 0.85){YSpeed=-0.003; randomColor(); dvdSize(); bouncesLeft();}

else if(dvd.position.y < -0.85){YSpeed=0.003; randomColor(); dvdSize(); bouncesLeft();}

else if(bounces >= 7){stopMovement()}

}
renderer.setAnimationLoop( animate );