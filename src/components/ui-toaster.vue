<template>
    <div class="fixed top-0 right-0 overflow-x-hidden z-175 max-w-sm">
        <transition-group tag="div" name="animate-fade-right">
            <ui-toast
                v-for="message in messages"
                :key="message.text"
                :type="message.type"
                @close="removeToast(message)"
            >
                <h4 class="font-semibold">{{ message.title }}</h4>
                <p>{{ message.text }}</p>
            </ui-toast>
        </transition-group>
    </div>
</template>

<script>
import UiToast from './ui-toast.vue';

export default {
    components: {
        UiToast,
    },
    data() {
        return {
            messages: [],
        };
    },
    methods: {
        showToast(message) {
            this.messages.push(message);
            setTimeout(() => {
                this.removeToast(message);
            }, 15000);
        },
        removeToast(message) {
            this.messages = this.messages.filter((m) => m !== message);
        },
    },
};
</script>
