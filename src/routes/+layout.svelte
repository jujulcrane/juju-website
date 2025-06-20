<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SectionSep from '$lib/components/SectionSep.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Global meta tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="author" content="Juliet Crane" />
	<meta name="theme-color" content="#000000" />

	<!-- Favicon and app icons -->
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
	<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
	<link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
	<link rel="manifest" href="/site.webmanifest" />

	<!-- Global Open Graph defaults (can be overridden by pages) -->
	<meta property="og:site_name" content="Juju's Website" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-[#E5E5E5]">
	<Navbar />

	<main class="container mx-auto flex-grow p-4">
		{@render children()}
	</main>
	<SectionSep/>
	<ContactSection/>
	<Footer />
</div>
