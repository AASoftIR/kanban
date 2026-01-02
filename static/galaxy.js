/**
 * Galaxy Weather - Animated Galaxy Background
 * Canvas-based star field with interactive elements
 */

class GalaxyBackground {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		if (!this.canvas) return;

		this.ctx = this.canvas.getContext("2d");
		this.stars = [];
		this.shootingStars = [];
		this.nebulae = [];
		this.mouse = { x: 0, y: 0 };

		this.config = {
			starCount: 200,
			starColors: ["#ffffff", "#8b5cf6", "#06b6d4", "#f59e0b", "#ec4899"],
			maxStarSize: 2.5,
			shootingStarInterval: 5000,
			nebulaCount: 3,
		};

		this.init();
	}

	init() {
		this.resize();
		this.createStars();
		this.createNebulae();
		this.bindEvents();
		this.animate();
		this.startShootingStars();
	}

	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	createStars() {
		this.stars = [];
		for (let i = 0; i < this.config.starCount; i++) {
			this.stars.push({
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height,
				size: Math.random() * this.config.maxStarSize + 0.5,
				color:
					this.config.starColors[
						Math.floor(Math.random() * this.config.starColors.length)
					],
				twinkleSpeed: Math.random() * 0.02 + 0.005,
				twinklePhase: Math.random() * Math.PI * 2,
				parallaxFactor: Math.random() * 0.5 + 0.1,
			});
		}
	}

	createNebulae() {
		this.nebulae = [];
		const colors = [
			{ r: 139, g: 92, b: 246 }, // Purple
			{ r: 6, g: 182, b: 212 }, // Cyan
			{ r: 245, g: 158, b: 11 }, // Amber
		];

		for (let i = 0; i < this.config.nebulaCount; i++) {
			this.nebulae.push({
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height,
				radius: Math.random() * 200 + 100,
				color: colors[i % colors.length],
				opacity: Math.random() * 0.1 + 0.05,
				pulseSpeed: Math.random() * 0.001 + 0.0005,
				pulsePhase: Math.random() * Math.PI * 2,
			});
		}
	}

	createShootingStar() {
		const startX = Math.random() * this.canvas.width;
		const startY = Math.random() * (this.canvas.height * 0.5);

		this.shootingStars.push({
			x: startX,
			y: startY,
			length: Math.random() * 80 + 40,
			speed: Math.random() * 15 + 10,
			angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
			opacity: 1,
			trail: [],
		});
	}

	bindEvents() {
		window.addEventListener("resize", () => {
			this.resize();
			this.createStars();
			this.createNebulae();
		});

		document.addEventListener("mousemove", (e) => {
			this.mouse.x = e.clientX;
			this.mouse.y = e.clientY;
		});
	}

	startShootingStars() {
		setInterval(() => {
			if (Math.random() > 0.5) {
				this.createShootingStar();
			}
		}, this.config.shootingStarInterval);
	}

	drawNebulae() {
		const time = Date.now();

		for (const nebula of this.nebulae) {
			const pulse = Math.sin(time * nebula.pulseSpeed + nebula.pulsePhase);
			const currentRadius = nebula.radius + pulse * 20;
			const currentOpacity = nebula.opacity + pulse * 0.02;

			const gradient = this.ctx.createRadialGradient(
				nebula.x,
				nebula.y,
				0,
				nebula.x,
				nebula.y,
				currentRadius
			);

			gradient.addColorStop(
				0,
				`rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, ${currentOpacity})`
			);
			gradient.addColorStop(
				0.5,
				`rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, ${
					currentOpacity * 0.5
				})`
			);
			gradient.addColorStop(1, "transparent");

			this.ctx.fillStyle = gradient;
			this.ctx.beginPath();
			this.ctx.arc(nebula.x, nebula.y, currentRadius, 0, Math.PI * 2);
			this.ctx.fill();
		}
	}

	drawStars() {
		const time = Date.now();
		const mouseInfluence = 50;

		for (const star of this.stars) {
			// Parallax effect based on mouse position
			const dx =
				(this.mouse.x - this.canvas.width / 2) * star.parallaxFactor * 0.01;
			const dy =
				(this.mouse.y - this.canvas.height / 2) * star.parallaxFactor * 0.01;

			const x = star.x + dx;
			const y = star.y + dy;

			// Twinkle effect
			const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
			const opacity = 0.5 + twinkle * 0.5;
			const size = star.size * (0.8 + twinkle * 0.2);

			// Draw star glow
			const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * 2);
			gradient.addColorStop(0, star.color);
			gradient.addColorStop(
				0.5,
				star.color.replace(")", `, ${opacity * 0.5})`).replace("rgb", "rgba")
			);
			gradient.addColorStop(1, "transparent");

			this.ctx.fillStyle = gradient;
			this.ctx.beginPath();
			this.ctx.arc(x, y, size * 2, 0, Math.PI * 2);
			this.ctx.fill();

			// Draw star core
			this.ctx.fillStyle = star.color;
			this.ctx.globalAlpha = opacity;
			this.ctx.beginPath();
			this.ctx.arc(x, y, size, 0, Math.PI * 2);
			this.ctx.fill();
			this.ctx.globalAlpha = 1;
		}
	}

	drawShootingStars() {
		for (let i = this.shootingStars.length - 1; i >= 0; i--) {
			const star = this.shootingStars[i];

			// Update position
			star.x += Math.cos(star.angle) * star.speed;
			star.y += Math.sin(star.angle) * star.speed;
			star.opacity -= 0.015;

			// Add to trail
			star.trail.push({ x: star.x, y: star.y });
			if (star.trail.length > 20) {
				star.trail.shift();
			}

			// Draw trail
			if (star.trail.length > 1) {
				this.ctx.beginPath();
				this.ctx.moveTo(star.trail[0].x, star.trail[0].y);

				for (let j = 1; j < star.trail.length; j++) {
					this.ctx.lineTo(star.trail[j].x, star.trail[j].y);
				}

				const gradient = this.ctx.createLinearGradient(
					star.trail[0].x,
					star.trail[0].y,
					star.x,
					star.y
				);
				gradient.addColorStop(0, "transparent");
				gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

				this.ctx.strokeStyle = gradient;
				this.ctx.lineWidth = 2;
				this.ctx.stroke();
			}

			// Draw head
			this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
			this.ctx.beginPath();
			this.ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
			this.ctx.fill();

			// Remove if faded or off screen
			if (
				star.opacity <= 0 ||
				star.x > this.canvas.width ||
				star.y > this.canvas.height
			) {
				this.shootingStars.splice(i, 1);
			}
		}
	}

	animate() {
		// Clear canvas
		this.ctx.fillStyle = "rgba(11, 16, 32, 0.1)";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// Draw layers
		this.drawNebulae();
		this.drawStars();
		this.drawShootingStars();

		requestAnimationFrame(() => this.animate());
	}
}

// Initialize galaxy background when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	new GalaxyBackground("galaxy-canvas");
});

// Add CSS elements dynamically
function addGalaxyElements() {
	const galaxyBg = document.getElementById("galaxy-bg");
	if (!galaxyBg) return;

	// Add twinkling stars
	for (let i = 0; i < 10; i++) {
		const twinkle = document.createElement("div");
		twinkle.className = "twinkle";
		twinkle.style.top = `${Math.random() * 100}%`;
		twinkle.style.left = `${Math.random() * 100}%`;
		twinkle.style.animationDelay = `${Math.random() * 2}s`;
		galaxyBg.appendChild(twinkle);
	}

	// Add floating particles
	for (let i = 0; i < 6; i++) {
		const particle = document.createElement("div");
		particle.className = "particle";
		particle.style.left = `${(i + 1) * 15}%`;
		particle.style.animationDelay = `${-i * 3}s`;
		particle.style.animationDuration = `${20 + Math.random() * 10}s`;
		galaxyBg.appendChild(particle);
	}

	// Add shooting stars
	for (let i = 0; i < 3; i++) {
		const shootingStar = document.createElement("div");
		shootingStar.className = "shooting-star";
		shootingStar.style.top = `${20 + i * 20}%`;
		shootingStar.style.left = `${10 + i * 30}%`;
		shootingStar.style.animationDelay = `${i * 1.5}s`;
		galaxyBg.appendChild(shootingStar);
	}

	// Add glow orbs
	const orbColors = [
		"rgba(139, 92, 246, 0.3)",
		"rgba(6, 182, 212, 0.2)",
		"rgba(245, 158, 11, 0.2)",
	];

	for (let i = 0; i < 3; i++) {
		const orb = document.createElement("div");
		orb.className = "glow-orb";
		orb.style.width = `${80 + i * 40}px`;
		orb.style.height = `${80 + i * 40}px`;
		orb.style.background = orbColors[i];
		orb.style.top = `${20 + i * 25}%`;
		orb.style.left = `${10 + i * 30}%`;
		orb.style.animationDelay = `${-i * 5}s`;
		galaxyBg.appendChild(orb);
	}
}

document.addEventListener("DOMContentLoaded", addGalaxyElements);
