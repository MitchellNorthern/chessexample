<template>
    <div>
        <i class="large text-6xl cm" :class="'cm-' + color + '-' + piece" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    name: 'game-piece',
    props: {
        color: {
            type: String,
            required: true
        },
        piece: {
            type: String,
            required: true
        }
    }
}
</script>