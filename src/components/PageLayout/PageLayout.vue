<template>
    <Header :projectName="'LVTOpenAI'" :projectDocsLink="'/docs'"
        :projectGithubRepo="'https://github.com/LaraVueTail/Restaurant-Review-Generator-OpenAI-LaravelAPI-Vue-Tailwind'"></Header>
    <slot></slot>
    <Footer></Footer>
</template>
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>