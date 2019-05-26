<template>
    <div class="w-screen h-screen">
        <div class="absolute top-0 z-50 w-screen h-16 bg-gray-500 text-white flex items-center justify-center">
            Header
        </div>
        <div class="fixed right-0 z-40 h-full w-12 sm:w-16 md:w-24 lg:w-40 bg-gray-600 text-white flex items-center text-center justify-center">
            Right Sidebar
        </div>
        <div class="fixed left-0 z-40 h-full w-12 sm:w-16 md:w-24 lg:w-40 bg-gray-600 text-white flex items-center text-center justify-center">
            Left Sidebar
        </div>
        <div class="flex p-24">
            <div class="grid m-auto max-h-sm sm:max-h-md">
                <div v-for="i in 8" :key="i" class="grid--wrapper">
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'">
                        <GamePiece color="w" piece="pawn"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'">
                        <GamePiece color="b" piece="pawn"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'">
                        <GamePiece color="w" piece="queen"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'">
                        <GamePiece color="w" piece="king"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'">
                        <GamePiece color="w" piece="bishop"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'">
                        <GamePiece color="w" piece="rook"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile' : 'game--tile-2'">
                        <GamePiece color="w" piece="knight"></GamePiece>
                    </div>
                    <div :class="i % 2 === 0 ? 'game--tile-2' : 'game--tile'">
                        <GamePiece color="w" piece="pawn"></GamePiece>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GamePiece from '@/components/GamePiece.vue';

export default {
    name: 'game-board',
    components: {
        GamePiece
    }
}
</script>