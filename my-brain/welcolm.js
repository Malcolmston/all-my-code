function addShape(url) {
  if (url == "") { return }
  //This demo is using the plugin "OBJLoader". Don't forget to include it into your page ;)
  //You can find it here : https://github.com/mrdoob/three.js/tree/cf584a60bdfd24c42eaa81d484533364742bda44/examples/js/loaders

  var renderer, scene, camera, banana, controls;

  var ww = window.innerWidth,
    wh = window.innerHeight;


  function init() {
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene') });
    renderer.setSize(ww, wh);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
    camera.position.set(0, 0, 350);
    scene.add(camera);

    controls = new THREE.OrbitControls(camera);
    scene.background = new THREE.Color(0xffffff);

    document.addEventListener('mouseover', function (e) {
      console.log(e.target.tagName)
      if (e.target.tagName !== "CANVAS") {
        controls.enabled = false;
      } else {
        controls.enabled = true;
      }

    });


    //Add a light in the scene
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 350);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(directionalLight);

    //Load the obj file
    loadOBJ();
  }

  var loadOBJ = function () {

    //Manager from ThreeJs to track a loader and its status
    var manager = new THREE.LoadingManager();
    //Loader for Obj from Three.js
    var loader = new THREE.OBJLoader(manager);

    //Launch loading of the obj file, addBananaInScene is the callback when it's ready 
    loader.load(url, addBananaInScene);

  };


  var addBananaInScene = function (object) {
    banana = object;
    //Move the banana in the scene
    banana.rotation.x = 0//Math.PI / 2;
    banana.position.y = 0;
    banana.position.z = 0;

    //Go through all children of the loaded object and search for a Mesh
    object.traverse(function (child) {
      //This allow us to check if the children is an instance of the Mesh constructor
      if (child instanceof THREE.Mesh) {
        child.material.color = new THREE.Color(0X00FF00);
        //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
        child.geometry.computeVertexNormals();
      }
    });

    //Add the 3D object in the scene
    scene.add(banana);
    render();
  };

  var render = function () {
    requestAnimationFrame(render);

    //Turn the banana
    // banana.rotation.z += .01;

    renderer.render(scene, camera);
  };

  init();
}

function select(name, arr, ender = "") {
  let i;
  var sec = document.createElement("select")
  sec.id = name
  let dec = document.createElement("option")

  sec.append(dec)
  for (i in arr) {
    let dec = document.createElement("option")
    dec.value = arr[i] + ender
    dec.innerText = arr[i]
    sec.append(dec)
  }
  return sec
}

var controls = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.03;
}

var arr = [
  "whole brain",
  "left brain",
  "right brain",
  "frontal lobe",
  "optic lobe",
  "parietal lobe",
  "temporal lobe",
  "cerebellum"
]



document.getElementById("scan").append(select("brain", arr, ".obj"))

const brain = document.getElementById("brain")

brain.addEventListener("change", function () {
  this.blur();
  arr.forEach(function (x) {
    x = x.split(" ").join("")
    $("." + x).hide()

  })

  addShape(`brain/${this.value}`)

  var e = $("." + this.value.replace(".obj", "").replace(" ", ""))
  console.log(e)
  e.fadeIn()
})

$(document).ready(function () {
  $(".hide").hide()

  arr.forEach(function (x) {
    x = x.split(" ").join("")
    $("." + x).hide()
  })
})

$("#show").click(function () {
  if (this.innerText == "Show") {
    this.innerText = "Hide"
    $(".hide").fadeIn("slow")
  } else {
    $(".hide").fadeOut("slow")
    this.innerText = "Show"

  }
})