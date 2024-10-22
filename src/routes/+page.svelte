<script>
	import Entrieslist from '$lib/entrieslist.svelte';
</script>

<main>
	<h1>The JMSS Archives</h1>

	<h2>Documents</h2>
	<Entrieslist />

	<h2>Help Wanted</h2>
	<p>
		Over several years of history, the halls of JMSS have seen many important documents and
		artworks. Help us find and preserve them, before it is too late. Open an issue on <a
			href="https://github.com/jmss-archive/jmss-archive/issues">GitHub</a
		> to contribute a document.
	</p>

	<p>
		Happy to run this page after I'm gone? Open an issue on <a
			href="https://github.com/jmss-archive/jmss-archive/issues">GitHub</a
		>.
	</p>
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
		padding: 1rem;
	}
</style>
