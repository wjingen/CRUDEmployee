<template>
    <div class="user-card">
        <div style="width: 50%; display: flex; justify-content: space-evenly">
            {{ this.name }}
            {{ this.email }}
            {{ this.password }}
            {{ this.id }}
        </div>
        <div style="width: 50%; display: flex; justify-content: space-around">
            <v-btn color="red" @click="$emit('remove', this.id)">Delete</v-btn>
            <v-btn color="yellow">Update</v-btn>
            <v-btn color="green">Promote</v-btn>
        </div>
    </div>
</template>

<script>
import { deleteUser } from "../firebase.js";

export default {
    props: ["name", "email", "password", "id"],
    emits: ["remove"],
    data() {
        return {
            hello: 0
        };
    },
    methods: {
        delete(id) {
            // alert(id);
            // deleteUser(this.id);
            // console.log("DELETED SUCCESSFULLY");
            this.$emit("remove");
        }
    }
};
</script>

<style lang="scss" scoped>
.user-card {
    height: 100px;
    width: 800px;
    background-color: lightgrey;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
</style>
