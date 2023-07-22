<template>
    <Header :projectName="projectName" :projectDocsLink="'/docs'"
        :projectGithubRepo="projectGitRepoLink"></Header>
    <slot></slot>
    <Footer></Footer>
</template>
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<script>
export default {
    data() {
        return {
            projectName: import.meta.env.VITE_PROJECT_NAME,
            projectDescription: import.meta.env.VITE_PROJECT_DESCRIPTION,
            projectGitRepoLink: import.meta.env.VITE_PROJECT_GIT_REPO_LINK
        }
    },
}
</script>