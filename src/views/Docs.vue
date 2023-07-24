<template>
    <PageLayout>
        <div class="bg-zinc-900 min-h-screen flex max-w-screen-xl mx-auto">
            <div class="w-4 hidden">
                <div class="bg-[#ff2d20] min-h-screen w-1/3"></div>
                <div class="bg-[#41b883] min-h-screen w-1/3"></div>
                <div class="bg-[#38bdf8] min-h-screen w-1/3"></div>
            </div>
            <div class="relative px-4 py-10 max-w-3xl">
                <div class="min-h-48">
                    <p class="text-xl md:text-2xl text-zinc-100 font-poppins mb-5">
                        Dashboard kit
                    </p>
                    <div class="mb-5">
                        <p class="text-zinc-100 mb-1 font-medium font-poppins text-sm">
                            Built with :
                        </p>
                        <div class="grid grid-cols-2 space-y-1 font-poppins text-sm">
                            <div class="flex justify-start text-zinc-100 gap-2 items-center">
                                <img src="https://asset.brandfetch.io/ide68-31CH/idhaVMa0Af.svg" alt=""
                                    class="h-4 w-auto" />
                                <p>Laravel</p>
                            </div>
                            <div class="flex justify-start text-zinc-100 gap-2 items-center">
                                <img src="https://asset.brandfetch.io/idT-7aLCAj/idYSAxBM8n.svg" alt=""
                                    class="h-3 w-auto" />
                                <p>Vue.js</p>
                            </div>
                            <div class="flex justify-start text-zinc-100 gap-2 items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt=""
                                    class="h-4 w-auto" />
                                <p>TailwindCSS</p>
                            </div>
                            <div class="flex justify-start text-zinc-100 gap-2 items-center">
                                <img src="https://asset.brandfetch.io/idGjvMIqVt/idd9HKmA9r.jpeg" alt=""
                                    class="h-4 w-auto" />
                                <p>Inertia.js</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <p class="text-zinc-100 mb-1 font-medium font-poppins text-sm">
                            About Project :
                        </p>

                        <p class="text-sm text-zinc-100 font-poppins font-light">
                            This project is a dashboard kit in VILT Stack.
                        </p>
                    </div>

                    <div class="mb-5">
                        <p class="text-zinc-100 mb-1 font-medium font-poppins text-sm">
                            Features :
                        </p>
                        <ul class="list-disc text-sm text-zinc-100 font-poppins font-light pl-5 mb-5">
                            <li>Login/register for admin/user</li>
                            <li>Admin dashboard</li>
                            <li>User dashboard</li>
                            <li>Notification</li>
                            <li>CRUD users</li>
                        </ul>
                    </div>

                    <div class="mb-5">
                        <p class="text-zinc-100 mb-3 font-medium font-poppins text-sm">
                            Download:
                        </p>
                        <a :href="projectGitRepoLink" target="_blank"
                            class="inline-flex cursor-pointer shadow-xl shadow-[#41b883]/40 hover:shadow-[#38bdf8]/90 justify-center items-center py-3 px-4 text-sm font-medium text-center text-white rounded-xl bg-vue hover:bg-tailwind focus:ring-4 focus:ring-primary-300">
                            Github Repository
                            <i class="fa-brands ml-2 fa-github text-white"></i>
                        </a>
                    </div>

                    <p class="text-zinc-100 mb-1 font-medium font-poppins text-sm my-10">
                        Screenshots:
                    </p>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                        <img v-for="i in 7" :key="i" :src="$route.meta.siteUrl + `/assets/screenshots/image-${i}.png`"
                            class="h-full w-56 object-contain" alt="" />
                    </div>

                    <p class="text-zinc-100 mb-1 font-medium font-poppins text-sm my-10">
                        How Install and Work with the project:
                    </p>

                    <ol class="list-decimal text-sm text-zinc-100 font-poppins font-light pl-5 space-y-2 mr-2">
                        <li>
                            Clone or Download the git repository to your destined folder.
                        </li>
                        <li>
                            Make sure you have
                            <a href="https://getcomposer.org/" class="underline hover:text-blue-500"
                                target="_blank">Composer</a>,
                            <a href="https://nodejs.org/en" class="underline hover:text-blue-500" target="_blank">Node(with
                                NPM)</a>
                            installed on your system. if not, download and install the latest
                            version od these package managers.
                        </li>
                        <li>
                            Open the project directory, And then open Terminal (If you're
                            using VS code use the terminal within):
                            <p class="mt-3">
                                Install php dependencies including Laravel and Inertia(server
                                side)
                            </p>
                            <p class="bg-black py-2 px-4 rounded-lg my-2">composer install</p>
                            <p class="mt-3">
                                Install node dependencies including Vue.js and Inertia(client
                                side - vue3) with
                            </p>
                            <p class="bg-black py-2 px-4 rounded-lg my-2">npm install</p>
                        </li>
                        <li>Good, Now you have all frameworks and libraries installed!.</li>
                        <li>Now create a copy of '.env.example' file to '.env'.</li>
                        <li>
                            Under Database section provide database credentials like
                            'DB_CONNECTION','DB_DATABASE'.. etc.
                            <p class="mt-3">
                                If you want to use sqlite (if 'mysql' not installed)
                                'DB_CONNECTION=sqlite'
                            </p>
                            <!-- <p class="bg-black py-2 px-4 rounded-lg my-2">DB_CONNECTION=sqlite</p> -->
                            <p class="my-3">
                                Create a file named 'database.sqlite' in 'app/database' folder.
                            </p>
                        </li>
                        <li>
                            Fill fields like 'STRIPE_SECRETE_KEY', 'STRIPE_WEBHOOK_KEY',
                            'CURRENCY', 'WHATSAPP_NUMBER' etc.
                        </li>
                        <li>
                            If database connections are complete.
                            <p class="mt-3">Migrate tables and dummy data with</p>
                            <p class="bg-black py-2 px-4 rounded-lg my-2">
                                php artisan migrate:fresh --seed
                            </p>
                            <p class="mt-3">
                                This will drop all previous tables and start migrating fresh
                                with new dummy data
                            </p>
                        </li>
                        <li>
                            If migration complete.
                            <p class="mt-3">Generate app key with</p>
                            <p class="bg-black py-2 px-4 rounded-lg my-2">
                                php artisan key:generate
                            </p>
                        </li>
                        <li>
                            Now everything is set!.
                            <p class="mt-3">Run Laravel server with</p>
                            <p class="bg-black py-2 px-4 rounded-lg my-2">
                                php artisan serve
                            </p>
                            <p class="mt-3">Run node with</p>
                            <p class="bg-black py-2 px-4 rounded-lg my-2">npm run dev</p>
                            <p class="mt-3">
                                Now your project is running in the 'APP_URL you set on '.env'
                                file
                            </p>
                        </li>
                        <!-- ... -->
                    </ol>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup>
import PageLayout from '../components/PageLayout/PageLayout.vue';
</script>
<script>
export default {
    data() {
        return {
            projectName: import.meta.env.VITE_PROJECT_NAME,
            projectDescription: import.meta.env.VITE_PROJECT_DESCRIPTION,
            projectGitRepoLink: import.meta.env.VITE_PROJECT_GIT_REPO_LINK,
            projectStack: import.meta.env.VITE_PROJECT_STACK
        }
    },
}
</script>