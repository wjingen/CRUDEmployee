<template>
    <img
        id="image-id"
        alt=""
        style="width: 45px; height: 45px"
        class="rounded-circle"
    />
</template>

<script>
export default {
    data() {
        return {
            imageUrl:
                "https://avatars.dicebear.com/api/adventurer/" +
                this.name +
                ".svg"
        };
    },
    props: ["name"],
    mounted() {
        document.getElementById("image-id").setAttribute("src", this.imageUrl);
        console.log(this.imageUrl);
        console.log();
    }
};
</script>

<style lang="scss" scoped></style>
