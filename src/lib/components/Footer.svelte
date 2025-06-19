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
				<a 
          href="https://github.com/jujulcrane" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Juliet's GitHub profile"
          class="hover:opacity-70 transition-opacity"
        >
          <GitHubIcon size={24} />
        </a>
        <a 
          href="https://www.instagram.com/jujulcrane" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Juliet's Instagram profile"
          class="hover:opacity-70 transition-opacity"
        >
          <InstagramIcon size={24} />
        </a>
				<a 
          href="https://www.linkedin.com/in/juliet-crane/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Juliet's LinkedIn profile"
          class="hover:opacity-70 transition-opacity"
        >
          <LinkedIn size={24} />
        </a>
        <a 
          href="#contact"
          aria-label="Go to contact section"
          class="hover:opacity-70 transition-opacity"
        >
          <ContactIcon size={24} />
        </a>
			</div>
		</div>
	</div>
</footer>
