<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';

	const projects = [
		{
			id: 'ikanji-kanji-study-app',
			title: 'IKanji: an AI Driven Japanese Kanji Study App',
			description:
				'A comprehensive web application that revolutionizes Japanese kanji learning through personalized study experiences. IKanji combines traditional flashcard methods with cutting-edge AI technology to generate contextual practice sentences and adaptive multiple-choice questions. Users can create custom lessons tailored to their learning pace or utilize pre-made Genki Book 1 lessons, making it perfect for both beginners and advanced learners seeking to master Japanese characters efficiently.',
			technologies: [
				'React',
				'TypeScript',
				'Next.js',
				'Tailwind CSS',
				'OpenAI API',
				'Vercel',
				'Japanese Language Processing',
				'Firebase'
			],
			imageUrl: '/ikanji.jpg',
			githubUrl: 'https://github.com/jujulcrane/ikanji',
			liveUrl: 'https://ikanji.vercel.app/',
			startDate: '2024-10-01'
			// No endDate - currently in progress
		},
		{
			id: 'shopping-list-calculator',
			title: 'Shopping List Calculator',
			description:
				"An intelligent dynamic shopping list application that automatically refactors recommendations based on the user's current fridge inventory. Built with vanilla JavaScript, the app provides a seamless user experience for meal planning and grocery shopping optimization. Utilizes local storage to persist user data and preferences, creating a personalized shopping assistant that helps reduce food waste and streamline grocery trips.",
			technologies: [
				'JavaScript',
				'HTML5',
				'CSS3',
				'Local Storage API',
				'DOM Manipulation',
				'Responsive Design',
				'GitHub Pages'
			],
			imageUrl: '/ShoppingListCalculator.png',
			githubUrl: 'https://github.com/jujulcrane/shopping-list-calculator',
			liveUrl: 'https://jujulcrane.github.io/shopping-list-calculator/',
			startDate: '2024-08-01',
			endDate: '2024-09-01'
		},
		{
			id: 'stall-stories-club-website',
			title: 'Stall Stories Club Website',
			description:
				"A mobile-responsive website founded and built for the school club Stall Stories. The informative site explains the club's mission, provides clear instructions on how to join, and offers contact information for the team. Features a comprehensive archive of newsletters showcasing all past editions with diverse content including events, jokes, riddles, and recipes, creating an engaging hub for the creative writing community.",
			technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Mobile-First Design', 'GitHub Pages'],
			imageUrl: '/StallStoriesWebsite.png',
			githubUrl: 'https://github.com/jujulcrane/stall-stories-website',
			liveUrl: 'https://jujulcrane.github.io/stall-stories-website/',
			startDate: '2024-06-01',
			endDate: '2024-07-01'
		},
		{
			id: 'operation-ss-pelican',
			title: 'Operation SS Pelican',
			description:
				"A captivating 3-level Unity video game featuring a pelican protagonist that masterfully combines arcade-style gameplay with puzzle-solving mechanics. Players navigate through interactive levels involving point collection, obstacle avoidance, logical reasoning challenges, and enemy combat. The game showcases completely original artwork, custom icons, and smooth 2D animations, all enhanced by Unity's physics engine and sophisticated AI systems for seamless character interactions and dynamic enemy behavior.",
			technologies: [
				'Unity',
				'C#',
				'2D Game Development',
				'Unity Physics Engine',
				'Object-Oriented Programming',
				'AI Programming',
				'Original Game Art',
				'2D Animation'
			],
			imageUrl: '/OperationSSPelican.jpg',
			githubUrl: 'https://github.com/jujulcrane/OperationSSPelican',
			liveUrl:
				'https://play.unity.com/en/games/1938904b-51c2-4e0d-b6b3-8d32f14a24b4/operationsspelicangameupdate',
			startDate: '2024-01-01',
			endDate: '2024-06-01'
		}
	];
</script>

<Meta
	title="Projects"
	description="Explore Juju's web development projects, creative coding experiments, and technical innovations. See the latest work in React, Svelte, Unity, TypeScript, and modern web technologies."
	keywords="web development projects, Svelte projects, TypeScript, creative coding, portfolio projects"
	url="https://yourwebsite.com/projects"
/>

<h1>My Projects</h1>
<ProjectShowcase {projects} />
