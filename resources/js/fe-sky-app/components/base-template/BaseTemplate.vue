<template>
    <div class="cont-page">
		<div class="main-sector">
			<header class="header">
				<BaseHeader/>
			</header>

			<main>
				<slot></slot>
			</main>
		</div>

		<footer class="footer">
			<BaseFooter/>
		</footer>
    </div>
</template>


