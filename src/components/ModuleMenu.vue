<template>
    <div class="menu-container">
        <ul class="menu-items" :class="classes">
            <li class="menu-item" v-for="item in items" :key="item.id">
                <slot :item="item"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ModuleMenu",

    props: {
        items : {
            type: Array,
            required: true
        },

        classes : {
            type: Array,
            required: false
        }
    }
}
</script>

<style scoped lang="scss" src="@/assets/sass/components/menu.scss"></style>