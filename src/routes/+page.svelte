<script>
	import Entrieslist from '$lib/entrieslist.svelte';
</script>

<main>
	<h1>The JMSS Archives</h1>

	<h2>Documents</h2>
	<Entrieslist />

	<h2>Help Wanted</h2>
	<p>
		The bridge spaces of JMSS have seen many important documents and artworks. Help us find and
		preserve them, before it is too late. Open an issue on <a
			href="https://github.com/jmss-archive/jmss-archive/issues">GitHub</a
		> to contribute a document.
	</p>
</main>

<style>
	/* Base styles */
	main {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.8rem;
		margin-top: 2rem;
	}

	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}
</style>
