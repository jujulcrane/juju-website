<script lang="ts">
	import ContactIcon from '$lib/assets/icons/ContactIcon.svelte';
	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
	import DownloadIcon from '$lib/assets/icons/DownloadIcon.svelte';

	// Function to handle resume download
	function downloadResume() {
		const link = document.createElement('a');
		link.href = '/resume.pdf';
		link.download = 'Juliet_Crane_Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<nav class="p-4 text-black">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="hover:text-gray-300"><HomeIcon size={30} /></a>
		<ul class="flex space-x-6">
			<li><a href="/about" class="hover:text-gray-300">About</a></li>
			<li><a href="/projects" class="hover:text-gray-300">Projects</a></li>
			<li><a href="/art" class="hover:text-gray-300">Art</a></li>
			<li><a href="/music" class="hover:text-gray-300">Music</a></li>
			<li><a href="/coming-soon..." class="hover:text-gray-300">Coming Soon</a></li>
			<li><a href="#Contact" class="hover:text-gray-300">Contact</a></li>
			<li>
				<button
					on:click={downloadResume}
					class="cursor-pointer hover:text-gray-300"
					aria-label="Download Juliet Crane's Resume"
				>
					<DownloadIcon size={20} />
				</button>
			</li>
		</ul>
	</div>
</nav>
