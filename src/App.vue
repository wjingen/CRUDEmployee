<template>
    <div>
        <!-- <Main /> -->
        <Main />
    </div>
</template>

<script>
import Main from "./components/Main.vue";
import TestTable from "./components/TestTable.vue";

export default {
    name: "App",

    components: {
        Main,
        TestTable
    },

    data: () => ({
        //
    })
};
</script>

<style lang="scss"></style>
