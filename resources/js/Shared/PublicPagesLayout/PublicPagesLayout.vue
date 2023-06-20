<template>
    <Header :projectName="'LVTBlog'" :projectDocsLink="'/docs'"
        :projectGithubRepo="'https://github.com/LaraVueTail/blog-laravel-vue-tailwind-inertia-VILT-Stack.git'"></Header>
    <div class="max-w-4xl mx-auto">
        <slot></slot>

    </div>
    <Footer></Footer>
</template>
<script setup>
import Header from './Components/Header.vue'
import Footer from './Components/Footer.vue'
</script>