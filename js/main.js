// Main JavaScript file for Ricardo-shuo-liu.github.io

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('themeToggle');
const projectGrid = document.getElementById('projectGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
    
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    // Set initial icon
    const icon = themeToggle.querySelector('i');
    icon.className = initialTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
}

// Navbar Scroll Effect
function handleScroll() {
    // Navbar shrink effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active nav item based on scroll position
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
    
    // Fade in animation for sections
    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 1.3;
        if (window.scrollY >= sectionTop) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Project Filtering
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
function handleAnchorClick(e) {
    const targetHref = this.getAttribute('href');
    
    // Check if it's an anchor link (starts with #)
    if (targetHref.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetHref);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
    // For external links, do nothing (let browser handle navigation)
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// Keyword Cloud Interactions
function initKeywordCloud() {
    const keywords = document.querySelectorAll('.keyword');
    
    if (keywords.length > 0) {
        keywords.forEach(keyword => {
            // Random initial rotation
            const randomRotation = Math.random() * 20 - 10;
            keyword.style.transform = `rotate(${randomRotation}deg)`;
            
            // Click event to scroll to research section
            keyword.addEventListener('click', () => {
                const researchSection = document.getElementById('research');
                if (researchSection) {
                    window.scrollTo({
                        top: researchSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Three.js 3D Background Effect - Enhanced with Performance Optimization
function initThreeJSBackground() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    
    // Check if device is mobile for performance optimization
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowPerformance = isMobile || window.innerWidth < 768;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 8;
    
    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true,
        antialias: !isLowPerformance, // Disable antialiasing on low performance devices
        powerPreference: 'low-power' // Use low power mode for better performance
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isLowPerformance ? 1 : 2)); // Limit pixel ratio on mobile
    
    // Only enable shadows on high performance devices
    if (!isLowPerformance) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0x00ffff, 0.3);
    scene.add(ambientLight);
    
    // Create directional light for shadows (only on high performance)
    if (!isLowPerformance) {
        const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.5);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 512; // Reduced shadow map size
        directionalLight.shadow.mapSize.height = 512;
        scene.add(directionalLight);
        
        const pointLight = new THREE.PointLight(0xff00ff, 0.5, 10);
        pointLight.position.set(-5, -5, 5);
        scene.add(pointLight);
    }
    
    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    
    // Handle mouse movement
    function onMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Create enhanced particle system with multiple colors
    const particleCount = isLowPerformance ? 100 : 300;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const particleColors = [
        new THREE.Color(0x00ffff), // Cyan
        new THREE.Color(0xff00ff), // Pink
        new THREE.Color(0x00ff00), // Green
        new THREE.Color(0xffff00)  // Yellow
    ];
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        // Position
        positions[i] = (Math.random() - 0.5) * 15;
        positions[i + 1] = (Math.random() - 0.5) * 15;
        positions[i + 2] = (Math.random() - 0.5) * 15;
        
        // Color
        const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)];
        colors[i] = randomColor.r;
        colors[i + 1] = randomColor.g;
        colors[i + 2] = randomColor.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: isLowPerformance ? 0.02 : 0.03,
        transparent: true,
        opacity: isLowPerformance ? 0.6 : 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    let cubes = [];
    let spheres = [];
    
    // Only create complex 3D objects on high performance devices
    if (!isLowPerformance) {
        // Create rotating cubes for 3D depth
        const cubeCount = 10;
        
        for (let i = 0; i < cubeCount; i++) {
            const cubeGeometry = new THREE.BoxGeometry(
                Math.random() * 0.3 + 0.1,
                Math.random() * 0.3 + 0.1,
                Math.random() * 0.3 + 0.1
            );
            
            const cubeMaterial = new THREE.MeshStandardMaterial({
                color: particleColors[Math.floor(Math.random() * particleColors.length)],
                transparent: true,
                opacity: 0.7,
                metalness: 0.8,
                roughness: 0.2
            });
            
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.set(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 12
            );
            cube.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            
            if (renderer.shadowMap.enabled) {
                cube.castShadow = true;
                cube.receiveShadow = true;
            }
            
            cubes.push(cube);
            scene.add(cube);
        }
        
        // Create rotating spheres
        const sphereCount = 8;
        
        for (let i = 0; i < sphereCount; i++) {
            const sphereGeometry = new THREE.SphereGeometry(
                Math.random() * 0.2 + 0.05,
                isLowPerformance ? 8 : 16, // Reduced sphere segments on mobile
                isLowPerformance ? 8 : 16
            );
            
            const sphereMaterial = new THREE.MeshStandardMaterial({
                color: particleColors[Math.floor(Math.random() * particleColors.length)],
                transparent: true,
                opacity: 0.6,
                metalness: 0.9,
                roughness: 0.1
            });
            
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
            
            if (renderer.shadowMap.enabled) {
                sphere.castShadow = true;
                sphere.receiveShadow = true;
            }
            
            spheres.push(sphere);
            scene.add(sphere);
        }
    }
    
    // Create grid with multiple layers (simplified on mobile)
    const gridSize = 15;
    const gridDivisions = isLowPerformance ? 10 : 15;
    
    // Main grid
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x00ffff, 0x003333);
    gridHelper.material.opacity = 0.4;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);
    
    let backGridHelper = null;
    let lines = null;
    
    // Only add complex elements on high performance devices
    if (!isLowPerformance) {
        // Back grid
        backGridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xff00ff, 0x330033);
        backGridHelper.material.opacity = 0.2;
        backGridHelper.material.transparent = true;
        backGridHelper.position.z = -5;
        scene.add(backGridHelper);
        
        // Neural network connections between particles (reduced on mobile)
        const linesGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        
        // Create fewer connections on mobile
        for (let i = 0; i < particleCount; i++) {
            // Create 1-2 connections per particle on mobile, 2-4 on desktop
            const connections = isLowPerformance ? 1 : Math.floor(Math.random() * 3) + 2;
            
            for (let j = 0; j < connections; j++) {
                const targetIndex = Math.floor(Math.random() * particleCount);
                if (i !== targetIndex) {
                    // Start position (particle i)
                    linePositions.push(
                        positions[i * 3],
                        positions[i * 3 + 1],
                        positions[i * 3 + 2]
                    );
                    // End position (particle targetIndex)
                    linePositions.push(
                        positions[targetIndex * 3],
                        positions[targetIndex * 3 + 1],
                        positions[targetIndex * 3 + 2]
                    );
                }
            }
        }
        
        linesGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
        const linesMaterial = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending
        });
        
        lines = new THREE.LineSegments(linesGeometry, linesMaterial);
        scene.add(lines);
    }
    
    // Animation loop with performance optimizations
    function animate() {
        requestAnimationFrame(animate);
        
        // Update camera position based on mouse movement for parallax effect
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        
        // Animate particles
        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.0015;
        
        // Update particle positions with subtle movement (only on high performance)
        if (!isLowPerformance) {
            const positions = particlesGeometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.002;
                positions[i + 1] += Math.cos(Date.now() * 0.001 + i) * 0.002;
            }
            particlesGeometry.attributes.position.needsUpdate = true;
        }
        
        // Animate cubes (only on high performance)
        cubes.forEach((cube, index) => {
            cube.rotation.x += 0.01 + index * 0.001;
            cube.rotation.y += 0.015 + index * 0.001;
            cube.rotation.z += 0.02 + index * 0.001;
        });
        
        // Animate spheres (only on high performance)
        spheres.forEach((sphere, index) => {
            sphere.rotation.x += 0.015 + index * 0.002;
            sphere.rotation.y += 0.01 + index * 0.002;
        });
        
        // Animate grids
        gridHelper.rotation.x += 0.0005;
        gridHelper.rotation.y += 0.0008;
        
        if (backGridHelper) {
            backGridHelper.rotation.x -= 0.0003;
            backGridHelper.rotation.y -= 0.0006;
        }
        
        // Animate lines (neural network connections) if they exist
        if (lines) {
            lines.rotation.x += 0.0007;
            lines.rotation.y += 0.001;
        }
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize with debounce
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, 100); // 100ms debounce
    }
    
    window.addEventListener('resize', handleResize);
}

// Initialize all animations and interactions
function initAnimations() {
    // Set initial opacity for sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial scroll to handle visible sections
    handleScroll();
}

// Event Listeners
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}
window.addEventListener('scroll', handleScroll);

// Nav items click event
if (navItems) {
    navItems.forEach(item => {
        item.addEventListener('click', handleAnchorClick);
    });
}

// Filter buttons click event
if (filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            filterProjects(category);
        });
    });
}

// Window load event
window.addEventListener('load', () => {
    initTheme();
    initKeywordCloud();
    initThreeJSBackground();
    initAnimations();
    
    // Add fade-in animation to all sections
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

// Resize event to handle mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').className = 'fas fa-bars';
    }
});

// Prevent default behavior for project detail links (since they're placeholders)
document.querySelectorAll('.project-buttons a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // You can add more functionality here if needed
    });
});