<template>
    <header>
        <nav class="bg-zinc-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://laravuetail.com" class="flex items-center" target="_blank">
                    <img class="h-8 w-auto mr-3" :src="$route.meta.siteUrl + '/assets/laravuetail-logo.svg'" alt="" />
                    <p class="text-sm text-gray-100 font-poppins">
                        <span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span
                            class="text-[#38bdf8]">Tail</span>
                        <span class="text-gray-100 font-medium ml-1">{{
                            projectName
                        }}</span>
                    </p>
                </a>
                <div class="flex items-center lg:order-2 md:hidden">
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 text-sm">
                        <li>
                            <RouterLink to="/"
                                class="block py-2 pr-4 pl-3 text-gray-300 hover:text-vue border-b border-gray-100 lg:border-0 lg:p-0 cursor-pointer"
                                :class="{ 'text-tailwind': $route.name === 'Home' }" aria-current="page">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="projectDocsLink"
                                class="block py-2 pr-4 pl-3 text-gray-300 hover:text-vue border-b border-gray-100 lg:border-0 lg:p-0 cursor-pointer"
                                :class="{
                                    'text-tailwind': $route.name === 'Docs',
                                }">Docs</RouterLink>
                            <!-- <a href="https://platform.openai.com/docs/introduction" target="_blank"
                                class="block py-2 pr-4 pl-3 text-gray-300 hover:text-vue border-b border-gray-100 lg:border-0 lg:p-0 cursor-pointer"
                                :class="{
                                    'text-tailwind': $route.name === 'Docs',
                                }">Docs</a> -->
                        </li>
                        <li>
                            <a :href="projectGithubRepo" target="_blank"
                                class="flex items-center gap-2 py-2 pr-4 pl-3 text-gray-300 hover:text-vue border-b border-gray-100 lg:border-0 lg:p-0 cursor-pointer fill-gray-300 hover:fill-vue">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" class=" w-5 h-5">
                                    <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                                Github Repo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    props: ["projectName", "projectDocsLink", "projectGithubRepo"],
};
</script>
<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});
</script>