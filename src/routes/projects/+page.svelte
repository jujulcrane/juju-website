<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
	import type { Project } from '$lib/components/types/types';

	let projects: Project[] = [];
	import { onMount } from 'svelte';
	onMount(async () => {
		const res = await fetch('/data/projects.json');
		projects = await res.json();
	});
</script>

<Meta
	title="Projects"
	description="Explore Juju's web development projects, creative coding experiments, and technical innovations. See the latest work in React, Svelte, Unity, TypeScript, and modern web technologies."
	keywords="web development projects, Svelte projects, TypeScript, creative coding, portfolio projects"
	url="https://yourwebsite.com/projects"
/>

<h1 class="h2-style">My Projects</h1>
<ProjectShowcase {projects} />
