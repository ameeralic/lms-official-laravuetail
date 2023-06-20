<template>
    <Header :projectName="'LVTCMS Tools'" :projectDocsLink="'/docs'"
        :projectGithubRepo="'https://github.com/LaraVueTail/CMS-demo'"></Header>
    <div class="max-w-4xl mx-auto">
        <slot></slot>

    </div>
    <Footer></Footer>
</template>
<script setup>
import Header from './Components/Header.vue'
import Footer from './Components/Footer.vue'
</script>