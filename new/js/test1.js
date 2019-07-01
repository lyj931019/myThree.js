(()=>{

    let scene,camera,cube;

    // scene
    function initScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcce0ff);
    }


    // camera
    function initCamera() {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // camera.position.set(1000, 50, 1500);
    }
    initScene();
    initCamera();
    let renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    var controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 1000;
    controls.maxDistance = 5000;

    function initCube() {
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        cube = new THREE.Mesh( geometry, material );
        cube.rotation.x += 0.2;
        cube.rotation.y += 0.2;
    }
    initCube();
    scene.add( cube );

    camera.position.z = 5;


    function animate() {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    }


    animate();
})();

