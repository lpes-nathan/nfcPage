let monkey = null;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("homeImg").appendChild( renderer.domElement );
 


// Calls GUI
// const gui = new dat.GUI()



// Resizes when screen size changes
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})



// Light
var light = new THREE.PointLight(0xFFFFFF, 0.09)
light.position.set(0,15,15);
scene.add(light);



// instantiate a loader
const loader = new THREE.OBJLoader();

// load a resource
loader.load(
	// resource URL
	'./3dloader/resources/Monkey Branch.obj',
	// called when resource is loaded
	function ( object ) {

        monkey=object;
		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// Animations
document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function onDocumentMouseMove(event) {
	mouseX = (event.clientX - windowX)
	mouseY = (event.clientY - windowY)
}

camera.position.z = 65;
camera.position.y = -36;

const animate = () => {

	targetX = mouseX * .005
	targetY = mouseY * .001

    if ( monkey !== null) {

		monkey.rotation.x += .05 * (targetY - monkey.rotation.x)

		monkey.rotation.y += .05 * (targetX - monkey.rotation.y)
		
    }
    
    renderer.render( scene, camera );

    window.requestAnimationFrame(animate);
};

animate()