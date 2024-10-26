<script>
	import entries from './entries.json';
</script>

<div id="entries-list">
	{#each entries as entry}
		<a href="/documents/{entry.id}">
			<div class="entry">
				<div>
					<p class="entry-title">{entry.title}</p>
					<p class="secondary">by {entry.author}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	#entries-list {
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		grid-gap: 1rem;
	}

	.entry {
		padding: 1rem 1rem;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	}

	.entry-title {
		/* font-size: 1.2rem; */
		font-weight: bold;
	}

	p {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
