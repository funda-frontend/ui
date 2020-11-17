<template>
    <dl class="md:flex-wrap w-full md:flex border-t border-light-2">
        <div v-for="(item, i) in data" :key="i" class="w-full md:flex">
            <dt
                class="fd-data-list__dt w-full block text-dark-3 font-normal md:py-3 pt-3 md:border-b border-light-2 md:max-w-1/3 md:flex-1/3"
                :class="{ 'md:px-6 px-5': card }"
            >
                {{ Object.keys(item)[0] }}
            </dt>
            <dd
                class="fd-data-list__dd w-full block md:py-3 border-b border-light-2 pb-3 md:max-w-2/3 md:flex-2/3"
                :class="{ 'md:px-6 px-5 md:pl-0': card }"
            >
                {{ item[Object.keys(item)[0]] }}
            </dd>
        </div>
    </dl>
</template>

<script>
export default {
    props: {
        card: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Array,
            required: true,
            validator: (dataArr) => {
                let isValid = true;

                if (dataArr.length > 0) {
                    dataArr.forEach((item) => {
                        if (typeof item !== 'object' || Array.isArray(item)) {
                            isValid = false;
                        }
                    });
                } else {
                    isValid = false;
                }

                return isValid;
            },
        },
    },
};
</script>
