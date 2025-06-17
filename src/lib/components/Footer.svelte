<script lang="ts">
	import ContactIcon from '$lib/assets/icons/ContactIcon.svelte';
	import GitHubIcon from '$lib/assets/icons/GitHubIcon.svelte';
	import InstagramIcon from '$lib/assets/icons/InstagramIcon.svelte';
	import LinkedIn from '$lib/assets/icons/LinkedIn.svelte';
	import DownloadButton from './DownloadButton.svelte';
</script>

<footer class="mt-auto text-black">
	<div class="container mx-auto p-6">
		<div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-y-2">
			<div class="text-center">
				<p>Copyright©Juliet Crane，2025</p>
			</div>
			<div class="flex items-center space-x-4">
				<DownloadButton
					href="/resume.pdf"
					filename="Juliet_Crane_Resume.pdf"
					ariaLabel="Download Juliet Crane's Resume"
					size={24}
					tooltipText="Download my resume"
				/>
				<GitHubIcon size={24} />
				<InstagramIcon size={24} />
				<LinkedIn size={24} />
				<ContactIcon size={24} />
			</div>
		</div>
	</div>
</footer>
