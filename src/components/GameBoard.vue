<template>
    <div>
        <div class="absolute top-0 z-50 w-screen h-16 bg-gray-500 text-white flex items-center justify-center">
            Header
        </div>
        <div class="fixed right-0 z-40 h-screen w-12 sm:w-16 md:w-24 lg:w-40 bg-gray-600 text-white flex items-center text-center justify-center">
            Right Sidebar
        </div>
        <div class="fixed left-0 z-40 h-screen w-12 sm:w-16 md:w-24 lg:w-40 bg-gray-600 text-white flex items-center text-center justify-center">
            Left Sidebar
        </div>
        <div class="flex">
            <div class="justify-center m-auto my-24">
                <div v-for="i in 8" :key="i" class="grid--wrapper">
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'"></div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'game-board',
    components: {}
}
</script>