<script lang="ts">
	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
	import DownloadButton from './DownloadButton.svelte';
</script>

<nav class="p-4 text-black">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="hover:text-gray-300"><HomeIcon size={30} /></a>
		<ul class="flex space-x-6">
			<li><a href="/about" class="hover:text-gray-300">About</a></li>
			<li><a href="/projects" class="hover:text-gray-300">Projects</a></li>
			<li><a href="/art" class="hover:text-gray-300">Art</a></li>
			<li><a href="/music" class="hover:text-gray-300">Music</a></li>
			<li><a href="/coming-soon" class="hover:text-gray-300">Coming Soon</a></li>
			<li><a href="#Contact" class="hover:text-gray-300">Contact</a></li>
			<li>
				<DownloadButton
					href="/resume.pdf"
					filename="Juliet_Crane_Resume.pdf"
					ariaLabel="Download Juliet Crane's Resume"
					size={20}
					tooltipText="Download my resume"
					tooltipDirection="bottom"
				/>
			</li>
		</ul>
	</div>
</nav>
