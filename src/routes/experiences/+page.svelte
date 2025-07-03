<script lang="ts">
	import ExperienceDisplay from '$lib/components/ExperienceDisplay.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import type { Experience } from '$lib/components/types/types';

	let experiences: Experience[] = [];
	import { onMount } from 'svelte';
	onMount(async () => {
		const res = await fetch('/data/experiences.json');
		experiences = await res.json();
	});
</script>

<Meta
	title="Experiences"
	description="A chronological journey through Juju's academic, professional, and creative experiences."
	keywords="resume, experience, timeline, projects, work, education"
	url="https://url/experiences"
/>

<h1>Experiences</h1>
<p>A chronological journey through my academic, professional, and creative experiences.</p>

<div class="mx-auto max-w-3xl px-4 py-12">
	<ExperienceDisplay {experiences} />
</div>
