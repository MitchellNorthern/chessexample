<template>
    <div class="bg-blue-100">
        <GameBoard></GameBoard>
    </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
    name: 'home-page',
    components: {
        GameBoard
    }
}
</script>