<script lang="ts">
	import Connector from './Connector.svelte';
	import type { Experience } from './types/types';

	export let experiences: Experience[];
</script>

<div class="flex flex-col gap-y-8 lg:gap-y-0">
	{#each experiences as exp, i}
		<Connector
			orientation={exp.orientation}
			width={300}
			height={200}
			strokeWidth={6}
			topText={''}
			bottomText={''}
			className=""
		/>
		<div class="flex flex-col items-center lg:flex-row">
			{#if exp.orientation === 'left'}
				<div class="flex w-full justify-center lg:w-1/2">
					<div class="flex items-center gap-2">
						{#each exp.images as img}
							<img
								src={img}
								alt={exp.organization}
								class="h-64 w-full rounded-lg object-cover shadow-lg"
							/>
						{/each}
					</div>
				</div>
			{/if}

			<div class="relative w-full lg:w-1/2">
				<div class="rounded-lg bg-white p-6 shadow">
					<h2 class="text-2xl font-semibold">{exp.title}</h2>
					<div class="mb-2 text-gray-500">
						{#if exp.organizationUrl}
							<a
								href={exp.organizationUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="underline transition-colors hover:text-[#53C1DE]">{exp.organization}</a
							>
						{:else}
							{exp.organization}
						{/if}
						&middot; {exp.location}
					</div>
					<div class="mb-4 text-sm text-gray-400">{exp.date}</div>
					<ul class="ml-5 list-disc space-y-1">
						{#each exp.description as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>

			{#if exp.orientation === 'right'}
				<div class="flex w-full items-center justify-center lg:w-1/2">
					<div class="flex items-center gap-2">
						{#each exp.images as img}
							<img
								src={img}
								alt={exp.organization}
								class="h-64 w-full rounded-lg object-cover shadow-lg"
							/>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
