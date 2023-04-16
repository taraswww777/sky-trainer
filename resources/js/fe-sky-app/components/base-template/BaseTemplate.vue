<template>
  <div class="cont-page">
    <div class="main-sector">
      <header>
        <BaseHeader />
      </header>

      <main style="margin-top: 22px;">
        <slot />
      </main>
    </div>

    <footer class="footer">
      <BaseFooter />
    </footer>
  </div>
</template>
