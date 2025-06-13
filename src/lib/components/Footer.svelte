<script lang="ts">
	import ContactIcon from "$lib/assets/icons/ContactIcon.svelte";
	import DownloadIcon from "$lib/assets/icons/DownloadIcon.svelte";
	import GitHubIcon from "$lib/assets/icons/GitHubIcon.svelte";
	import InstagramIcon from "$lib/assets/icons/InstagramIcon.svelte";
	import LinkedIn from "$lib/assets/icons/LinkedIn.svelte";

	// footer logic
</script>

<footer class="text-black mt-auto">
	<div class="container mx-auto p-6">
		<div class="flex justify-between items-center">
			<div>
				<p>Copyright©Juliet Crane，2025</p>
			</div>
			<div class="flex space-x-4 items-center">
				<DownloadIcon size={24}/>
				<GitHubIcon size={24}/>
				<InstagramIcon size={24}/>
				<LinkedIn size={24}/>
				<ContactIcon size={24}/>
			</div>
		</div>
	</div>
</footer>
