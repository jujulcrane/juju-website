<script lang="ts">
	interface Props {
		title: string;
		description: string;
		keywords?: string;
		image?: string;
		url?: string;
	}

	let { 
		title, 
		description, 
		keywords = "", 
		image = "/og-image.jpg", 
		url = "" 
	}: Props = $props();

	const fullTitle = title.includes("Juju") ? title : `${title} - Juju's Website`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	{#if url}
		<meta property="og:url" content={url} />
	{/if}
	<meta property="og:image" content={image} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
