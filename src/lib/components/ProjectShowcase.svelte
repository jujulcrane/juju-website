<script lang="ts">
	import Connector from './Connector.svelte';
	import LinkButton from './LinkButton.svelte';

	interface Project {
		id: string;
		title: string;
		description: string;
		technologies: string[];
		imageUrl: string;
		githubUrl: string;
		liveUrl?: string;
		startDate: string;
		endDate?: string;
	}

	export let projects: Project[];

	const formatDate = (dateString: string): string => {
		try {
			const date = new Date(dateString + 'T00:00:00'); // Add time to avoid timezone issues
			const options: Intl.DateTimeFormatOptions = {
				month: 'short',
				year: 'numeric',
				timeZone: 'UTC' // Use UTC to avoid timezone shifts
			};
			return date.toLocaleDateString('en-US', options);
		} catch (error) {
			console.error('Date formatting error:', error);
			return dateString; // Return original string if formatting fails
		}
	};

	// Function to format project duration
	const formatProjectDuration = (project: Project): string => {
		const startFormatted = formatDate(project.startDate);
		if (!project.endDate) {
			return `${startFormatted} - In Progress`;
		}
		return `${startFormatted} - ${formatDate(project.endDate)}`;
	};

	const getConnectorText = (currentProjectIndex: number) => {
		const currentProject = projects[currentProjectIndex];
		const nextProject = projects[currentProjectIndex + 1];

		const topText = `${formatDate(currentProject.startDate)}`;

		let bottomText = '';
		if (nextProject.endDate) {
			bottomText = `${formatDate(nextProject.endDate)}`;
		} else {
			bottomText = 'In Progress';
		}

		return {
			topText,
			bottomText
		};
	};
</script>

<section class="min-h-screen">
	<div class="container mx-auto px-4 py-16">
		{#each projects as project, index}
			<!-- Project Card -->
			<div class="mb-8 lg:mb-16">
				<div class="grid items-center gap-8 lg:grid-cols-2">
					<div class="order-2 lg:order-{index % 2 === 0 ? '1' : '2'}">
						<img
							src={project.imageUrl}
							alt={project.title}
							class="h-64 w-full rounded-lg object-cover shadow-xl"
							loading="lazy"
						/>
					</div>

					<div class="order-1 lg:order-{index % 2 === 0 ? '2' : '1'}">
						<div class="mb-3">
							<span
								class="rounded-sm bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 {!project.endDate
									? 'bg-green-100 text-green-700'
									: ''}"
							>
								{formatProjectDuration(project)}
							</span>
						</div>

						<h3 class="mb-4 text-3xl font-bold text-gray-900">{project.title}</h3>
						<p class="mb-6 leading-relaxed text-gray-700">{project.description}</p>

						<div class="mb-8 flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span class="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-800">
									{tech}
								</span>
							{/each}
						</div>

						<div class="flex gap-4">
							<LinkButton
								href={project.githubUrl}
								target="_blank"
								variant="outline"
								class="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
							>
								View Code
							</LinkButton>

							{#if project.liveUrl}
								<LinkButton
									href={project.liveUrl}
									target="_blank"
									class="bg-gray-900 text-white hover:bg-gray-800"
								>
									Live Demo
								</LinkButton>
							{/if}
						</div>
					</div>
				</div>
			</div>

			<!-- Timeline Connector between projects -->
			{#if index < projects.length - 1}
				{@const connectorText = getConnectorText(index)}
				<div class="my-16">
					<Connector
						orientation={index % 2 === 0 ? 'right' : 'left'}
						width={300}
						height={200}
						strokeWidth={4}
						cornerRadius={25}
						topText={connectorText.topText}
						bottomText={connectorText.bottomText}
						className=""
					/>
				</div>
			{/if}
		{/each}
	</div>
</section>
