<script lang="ts">
	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
	import DownloadButton from './DownloadButton.svelte';
	import { Menu, X } from '@lucide/svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav class="relative p-4 text-black">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="hover:text-gray-300"><HomeIcon size={30} /></a>

		<!-- Desktop Navigation -->
		<ul class="hidden space-x-6 md:flex">
			<li><a href="/about" class="hover:text-gray-300">About</a></li>
			<li><a href="/projects" class="hover:text-gray-300">Projects</a></li>
			<li><a href="/art" class="hover:text-gray-300">Art</a></li>
			<li><a href="/music" class="hover:text-gray-300">Music</a></li>
			<li><a href="/experiences" class="hover:text-gray-300">Experiences</a></li>
			<li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
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

		<!-- Mobile Hamburger Button -->
		<button
			class="relative z-50 cursor-pointer p-2 transition-colors hover:text-gray-300 md:hidden"
			on:click={toggleMenu}
			aria-label="Toggle navigation menu"
		>
			{#if isMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isMenuOpen}
		<div
			class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
			role="dialog"
			aria-modal="true"
		>
			<ul class="flex flex-col space-y-8 text-center text-2xl">
				<li>
					<a href="/about" class="transition-colors hover:text-gray-300" on:click={closeMenu}>
						About
					</a>
				</li>
				<li>
					<a href="/projects" class="transition-colors hover:text-gray-300" on:click={closeMenu}>
						Projects
					</a>
				</li>
				<li>
					<a href="/art" class="transition-colors hover:text-gray-300" on:click={closeMenu}>
						Art
					</a>
				</li>
				<li>
					<a href="/music" class="transition-colors hover:text-gray-300" on:click={closeMenu}>
						Music
					</a>
				</li>
				<li>
					<a href="/experiences" class="transition-colors hover:text-gray-300" on:click={closeMenu}>
						Experiences
					</a>
				</li>
				<li>
					<a href="#contact" class="transition-colors hover:text-gray-300" on:click={closeMenu}>
						Contact
					</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>
