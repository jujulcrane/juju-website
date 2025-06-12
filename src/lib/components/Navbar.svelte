<script lang="ts">
	import ContactIcon from "$lib/assets/icons/ContactIcon.svelte";
	import HomeIcon from "$lib/assets/icons/HomeIcon.svelte";

	// navbar-specific logic here
</script>

<nav class="text-black p-4">
	<div class="container mx-auto flex justify-between items-center">
		<a href="/" class="text-xl font-bold">Juju's Website</a>
		<ul class="flex space-x-6">
			<li><a href="/" class="hover:text-gray-300"><HomeIcon size={30}/></a></li>
			<li><a href="/about" class="hover:text-gray-300">About</a></li>
			<li><a href="/projects" class="hover:text-gray-300">Projects</a></li>
			<li><a href="/art" class="hover:text-gray-300">Art</a></li>
			<li><a href="/music" class="hover:text-gray-300">Music</a></li>
			<li><a href="/coming-soon..." class="hover:text-gray-300">Coming Soon</a></li>
      <li><a href="#Contact" class="hover:text-gray-300">Contact</a></li>
		</ul>
	</div>
</nav>
