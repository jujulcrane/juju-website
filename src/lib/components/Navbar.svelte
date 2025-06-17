<script lang="ts">
	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
	import DownloadButton from './DownloadButton.svelte';
	import { Menu, X } from '@lucide/svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu(){
		isMenuOpen = false;
	}
</script>

<nav class="p-4 text-black relative">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="hover:text-gray-300"><HomeIcon size={30} /></a>

		<!-- Desktop Navigation -->
		<ul class="hidden md:flex space-x-6">
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

		<!-- Mobile Hamburger Button -->
		 <button
		 	class="md:hidden z-50 relative p-2 hover:text-gray-300 transition-colors cursor-pointer"
			on:click={toggleMenu}
			aria-label="Toggle navigation menu">
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
			class="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center"
			role="dialog"
			aria-modal="true"
		>
			<ul class="flex flex-col space-y-8 text-center text-2xl">
				<li>
					<a 
						href="/about" 
						class="hover:text-gray-300 transition-colors"
						on:click={closeMenu}
					>
						About
					</a>
				</li>
				<li>
					<a 
						href="/projects" 
						class="hover:text-gray-300 transition-colors"
						on:click={closeMenu}
					>
						Projects
					</a>
				</li>
				<li>
					<a 
						href="/art" 
						class="hover:text-gray-300 transition-colors"
						on:click={closeMenu}
					>
						Art
					</a>
				</li>
				<li>
					<a 
						href="/music" 
						class="hover:text-gray-300 transition-colors"
						on:click={closeMenu}
					>
						Music
					</a>
				</li>
				<li>
					<a 
						href="/coming-soon" 
						class="hover:text-gray-300 transition-colors"
						on:click={closeMenu}
					>
						Coming Soon
					</a>
				</li>
				<li>
					<a 
						href="#Contact" 
						class="hover:text-gray-300 transition-colors"
						on:click={closeMenu}
					>
						Contact
					</a>
				</li>
				<li class="pt-4">
					<div on:click={closeMenu}>
						<DownloadButton
							href="/resume.pdf"
							filename="Juliet_Crane_Resume.pdf"
							ariaLabel="Download Juliet Crane's Resume"
							size={24}
							tooltipText="Download my resume"
							tooltipDirection="bottom"
						/>
					</div>
				</li>
			</ul>
		</div>
	 {/if}
</nav>
