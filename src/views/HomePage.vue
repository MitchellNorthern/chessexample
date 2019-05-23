<template>
    <div class="w-screen h-screen bg-blue-100">
        <GameBoard></GameBoard>
    </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
    name: 'home-page',
    components: {
        GameBoard
    },
    data() {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
}
</script>