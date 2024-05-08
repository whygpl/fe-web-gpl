<template>
    <div class="grid h-screen w-full place-content-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <div class="z-50 grid place-content-center">
            <div class="mb-10 text-center font-roboto text-white">
                <h1 class="text-4xl font-[900] md:text-7xl">~ ERR<span><font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:rgb(252 211 77)"/></span>R 404 ~</h1>
                <h1 class="mt-2 text-base font-[400] md:text-2xl">Sorry, Page Not Found</h1>
            </div>
            <router-link :to="{ name: 'HomeView' }" class="text-center">
                <button class="btn bg-amber-300 font-roboto font-[800] uppercase tracking-wider text-amber-950 hover:bg-amber-400 focus-visible:ring-amber-300">Back To Home</button>
            </router-link>
        </div>
    </div>
</template>