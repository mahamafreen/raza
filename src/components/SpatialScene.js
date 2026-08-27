/**
 * RAZA ARSHAD ARCHITECTURAL PORTFOLIO — 3D SPATIAL DIGITAL ELEMENT (THREE.JS)
 * An abstract, restrained architectural pavilion & parametric massing study.
 */

import * as THREE from 'three';

export class SpatialScene {
  constructor(containerId = "webgl-canvas-container") {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.mode = "wireframe"; // 'wireframe' | 'solid' | 'off'
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.scrollY = 0;

    this.init();
  }

  init() {
    // 1. Scene & Camera Setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(6, 4, 8);
    this.camera.lookAt(0, 0, 0);

    // 2. Renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 3. Lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfff5e6, 1.4);
    this.sunLight.position.set(10, 15, 8);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.scene.add(this.sunLight);

    this.fillLight = new THREE.DirectionalLight(0x2c6e91, 0.4);
    this.fillLight.position.set(-8, -4, -6);
    this.scene.add(this.fillLight);

    // 4. Build Architectural Pavilion Geometry
    this.pavilionGroup = new THREE.Group();
    this.scene.add(this.pavilionGroup);

    this.buildPavilion();

    // 5. Event Listeners
    window.addEventListener("resize", this.onWindowResize.bind(this));
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    window.addEventListener("scroll", this.onScroll.bind(this));

    // 6. Start Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  buildPavilion() {
    this.wireMaterials = [];
    this.solidMaterials = [];

    // Colors
    const wireColor = 0x1b4965;
    const solidColor = 0xebe6db;
    const concreteColor = 0x9b9a95;

    // Elements: Ground slab, Upper cantilever slab, Structural columns, Vertical solar louvers, Central reflecting pool
    const elements = [
      // Base Plinth Slab
      { geo: new THREE.BoxGeometry(6, 0.2, 5), pos: [0, -0.6, 0], matColor: solidColor },
      // Upper Cantilevered Roof Slab
      { geo: new THREE.BoxGeometry(5.5, 0.18, 4.5), pos: [0.5, 2.2, 0.2], matColor: concreteColor },
      // Secondary Canopy
      { geo: new THREE.BoxGeometry(3.5, 0.12, 3), pos: [-1.2, 1.3, -0.5], matColor: concreteColor },
      // Central Shear Wall
      { geo: new THREE.BoxGeometry(0.2, 2.8, 3.8), pos: [-0.6, 0.8, -0.2], matColor: solidColor },
      // Cantilever Column 1
      { geo: new THREE.CylinderGeometry(0.08, 0.08, 2.8, 16), pos: [2.2, 0.8, 1.6], matColor: 0x151514 },
      // Cantilever Column 2
      { geo: new THREE.CylinderGeometry(0.08, 0.08, 2.8, 16), pos: [2.2, 0.8, -1.4], matColor: 0x151514 },
      // Water Pool Void
      { geo: new THREE.BoxGeometry(2.4, 0.05, 1.8), pos: [1, -0.48, 0], matColor: 0x2c6e91 }
    ];

    // Add Vertical Louver Fins
    for (let i = 0; i < 8; i++) {
      elements.push({
        geo: new THREE.BoxGeometry(0.05, 1.8, 0.2),
        pos: [-2.2 + i * 0.45, 0.9, 2.0],
        matColor: 0x8b6848
      });
    }

    elements.forEach((el) => {
      // Solid Mesh
      const solidMat = new THREE.MeshStandardMaterial({
        color: el.matColor,
        roughness: 0.85,
        metalness: 0.1,
        transparent: true,
        opacity: 0.88
      });
      this.solidMaterials.push(solidMat);
      const mesh = new THREE.Mesh(el.geo, solidMat);
      mesh.position.set(...el.pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.pavilionGroup.add(mesh);

      // Wireframe Edges Overlay
      const edges = new THREE.EdgesGeometry(el.geo);
      const lineMat = new THREE.LineBasicMaterial({
        color: wireColor,
        transparent: true,
        opacity: 0.9,
        linewidth: 1.5
      });
      this.wireMaterials.push(lineMat);
      const wireframe = new THREE.LineSegments(edges, lineMat);
      wireframe.position.set(...el.pos);
      this.pavilionGroup.add(wireframe);
    });

    // Apply initial wireframe mode
    this.setMode(this.mode);
  }

  setMode(mode) {
    this.mode = mode;
    if (!this.container) return;

    if (mode === "off") {
      this.container.style.display = "none";
      return;
    }

    this.container.style.display = "block";

    const isWire = mode === "wireframe";
    this.solidMaterials.forEach((m) => {
      m.opacity = isWire ? 0.08 : 0.9;
    });
    this.wireMaterials.forEach((m) => {
      m.opacity = isWire ? 0.85 : 0.25;
    });
  }

  onMouseMove(e) {
    this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  onScroll() {
    this.scrollY = window.scrollY || window.pageYOffset;
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.mode === "off") return;

    // Smooth subtle orbit tracking cursor
    this.targetRotY += (this.mouseX * 0.4 - this.targetRotY) * 0.05;
    this.targetRotX += (this.mouseY * 0.2 - this.targetRotX) * 0.05;

    // Continuous architectural rotation + scroll progression
    const scrollAngle = (this.scrollY || 0) * 0.0008;
    this.pavilionGroup.rotation.y = 0.5 + this.targetRotY + scrollAngle;
    this.pavilionGroup.rotation.x = 0.2 + this.targetRotX * 0.5;
    this.pavilionGroup.position.y = Math.sin(Date.now() * 0.0008) * 0.08;

    this.renderer.render(this.scene, this.camera);
  }
}
