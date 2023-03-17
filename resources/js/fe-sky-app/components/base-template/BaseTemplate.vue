<template>
  <div class="cont-page">
    <div class="main-sector">
      <header>
        <BaseHeader />
      </header>

      <main>
        <slot />
      </main>
    </div>

    <footer class="footer">
      <BaseFooter />
    </footer>
  </div>
</template>
