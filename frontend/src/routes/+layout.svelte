<script>
	import Header from './Header.svelte';
	import './styles.css';
	import FaRegHeart from 'svelte-icons/fa/FaRegHeart.svelte'
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Make with <span class="icon"><FaRegHeart /></span> by Drazic MARTIN	
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	.icon {
		color: red;
		width: 15px;
		display: inline-block;
	}
</style>
