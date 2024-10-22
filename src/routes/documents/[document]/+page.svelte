<script lang="ts">
	export let data;

	const entry = data.props?.entry;
</script>

<header>
	<a href="/">&larr; Back</a>
</header>

<main>
	<h1 class="display-font">{entry?.title}</h1>
	<p class="secondary">by {entry?.author}</p>
	<br />
	<p>{entry?.description}</p>
	<br />
</main>
<div class="viewer">
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe src={entry?.url} width="100%" height="800px"></iframe>
</div>

<style>
	main {
		max-width: 800px;
		margin: auto;
		padding: 1rem;
	}

	h1,
	p {
		margin: 0;
	}

	header {
		padding: 1rem;
		border-bottom: black 1px solid;
	}

	header > * {
		text-decoration: none;
	}

	.viewer {
		padding: 1rem;
	}
</style>
