<template>
    <div class="grid-container">
        <div class="grid-x">
            <header class="cell small-12 margin-vertical-1">
                <BaseHeader/>
            </header>
            <main class="cell small-12 margin-vertical-1">
                <slot></slot>
            </main>
            <footer class="cell small-12  margin-vertical-1">
                <BaseFooter/>
            </footer>
        </div>
    </div>
</template>
