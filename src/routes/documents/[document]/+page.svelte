<script lang="ts">
	export let data;

	const entry = data.props?.entry;
</script>

<header>
	<a href="/">&larr; Back</a>
</header>

<main>
	<div class="viewer-parent">
		<div class="viewer-detail">
			<h1 class="display-font">{entry?.title}</h1>
			<p class="secondary">by {entry?.author}</p>
			<br />
			<p>{entry?.description}</p>
			<br />
		</div>
		<div class="viewer">
			<iframe src={entry?.url} title="Document" width="100%" height="1000px"></iframe>
		</div>
	</div>
</main>

<style>
	header {
		padding: 1rem;
		border-bottom: 1px solid #ddd;
		background-color: #f9f9f9;
	}

	header a {
		text-decoration: none;
		color: inherit;
		/* font-weight: bold; */
	}

	main {
		padding: 2rem;
	}

	.viewer-parent {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.viewer-detail {
		max-width: 800px;
		text-align: center;
		margin-bottom: 2rem;
	}

	.viewer-detail h1 {
		font-size: 2.5rem;
	}

	.viewer-detail p.secondary {
		font-size: 1.2rem;
	}

	.viewer-detail p {
		font-size: 1rem;
	}

	.viewer {
		width: 100%;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	iframe {
		border: none;
	}
</style>
