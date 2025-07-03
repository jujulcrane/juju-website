<script lang="ts">
	import Connector from './Connector.svelte';
	import type { Experience } from './types/types';

	export let experiences: Experience[];
</script>

<div>
	{#each experiences as exp, i}
		<div class="mb-16 flex flex-col items-center lg:flex-row">
			{#if exp.orientation === 'left'}
				<div class="mb-6 flex w-full justify-center lg:mb-0 lg:w-1/2">
					<div class="flex gap-2">
						{#each exp.images as img}
							<img
								src={img}
								alt={exp.organization}
								class="h-40 w-64 rounded-lg object-cover shadow-lg"
							/>
						{/each}
					</div>
				</div>
			{/if}

			<div class="relative w-full lg:w-1/2">
				<Connector
					orientation={exp.orientation}
					width={300}
					height={120}
					strokeWidth={6}
					topText={exp.topText}
					bottomText={exp.bottomText}
					className="my-2"
				/>

				<div class="mt-6 rounded-lg bg-white p-6 shadow">
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
				<div class="mt-6 flex w-full justify-center lg:mt-0 lg:w-1/2">
					<div class="flex gap-2">
						{#each exp.images as img}
							<img
								src={img}
								alt={exp.organization}
								class="h-40 w-64 rounded-lg object-cover shadow-lg"
							/>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
