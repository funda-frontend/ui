<template>
    <img
        class="absolute block w-full h-full top-0 left-0 object-cover"
        :src="src"
        :alt="alt"
    />
</template>

<script>
export default {
    props: {
        src: {
            required: true,
            type: String,
        },
        alt: {
            required: true,
            type: String,
        },
    },
};
</script>
