<template>
    <PageLayout>
        <Hero :projectName="'LVTOpenAI'" :projectDescription="'An Open source(MIT) OpenAI project built with Laravel, Vue and Tailwind.'"
        :whatsNewText="'New LMS Project Available in LaraVueTail'" :whatsNewLink="'https://laravuetail.com/'"
        :projectGitRepoLink="'https://github.com/LaraVueTail/Restaurant-Review-Generator-OpenAI-LaravelAPI-Vue-Tailwind'">
    </Hero>
    <WatchVideo></WatchVideo>
    <WhatIsThis></WhatIsThis>
    </PageLayout>
</template>
<script setup>
import Hero from '../components/HomePage/Hero.vue';
import WatchVideo from '../components/HomePage/WatchVideo.vue';
import WhatIsThis from '../components/HomePage/WhatIsThis.vue';
import PageLayout from '../components/PageLayout/PageLayout.vue';
</script>