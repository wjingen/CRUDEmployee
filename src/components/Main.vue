<template>
    <div class="main">
        <v-icon size="100">mdi-account-circle</v-icon>
        <h1>One account. All of Google.</h1>
        <h4>Register with Gmail to login</h4>
        <div class="login">
            <form ref="form" lazy-validation @submit.prevent="signUp()">
                <v-text-field
                    v-model="name"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    :rules="emailRules"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                    type="password"
                ></v-text-field>
                <v-btn color="blue" width="400px" type="submit">Sign up</v-btn>
            </form>
        </div>
        <div class="user-list">
            <h3>User List</h3>
            <div style="font-weight: bold">Username Email Password</div>
            <div class="user-cards">
                <UserCard
                    v-for="user in userData"
                    :name="user.name"
                    :email="user.email"
                    :password="user.password"
                    :id="user.id"
                    @remove="this.delete"
                />
            </div>
        </div>
    </div>
</template>

<script>
import UserCard from "./UserCard.vue";
import { addUser, getAllUserData, deleteUser } from "../firebase.js";

export default {
    components: {
        UserCard
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            valid: true,
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            userData: null
        };
    },
    async created() {
        this.userData = await getAllUserData();
    },
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        async signUp() {
            // this.validate();
            // e.preventDefault();
            addUser(this.name, this.email, this.password);
            this.clearFields();
            await this.updateUserData();
        },
        clearFields() {
            this.name = "";
            this.email = "";
            this.password = "";
        },
        async updateUserData() {
            this.userData = await getAllUserData();
        },
        async delete(id) {
            deleteUser(id);
            await this.updateUserData();
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}
.main .login {
    width: 400px;
}

.user-cards {
    justify-content: center;
}
</style>
