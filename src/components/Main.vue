<template>
    <div class="main">
        <v-icon size="100">mdi-account-circle</v-icon>
        <h1>Employee Registration System</h1>
        <h4>Create, Read, Update and Delete users.</h4>
        <div class="login">
            <form ref="form" lazy-validation @submit.prevent="register()">
                <v-text-field
                    v-model="name"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    label="Email"
                    :rules="emailRules"
                ></v-text-field>
                <v-text-field
                    v-model="position"
                    label="Position"
                    required
                ></v-text-field>
                <v-select
                    v-model="status"
                    label="Status"
                    required
                    :items="items"
                ></v-select>
                <v-btn color="blue" width="400px" type="submit">Sign up</v-btn>
            </form>
        </div>
        <div class="user-list" v-if="displayTable">
            <MDBTable striped hover class="align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <User
                    v-for="user in this.userData"
                    :name="user.name"
                    :email="user.email"
                    :position="user.position"
                    :status="user.status"
                    :id="user.id"
                    :key="user.id"
                    @remove="this.delete"
                    @edit="this.update"
                />
            </MDBTable>
        </div>
    </div>
</template>

<script>
import User from "./User.vue";
import {
    addUser,
    getAllUserData,
    deleteUser,
    updateUser
} from "../firebase.js";
import { MDBTable } from "mdb-vue-ui-kit";
export default {
    components: {
        User,
        MDBTable
    },
    data() {
        return {
            name: "",
            email: "",
            position: "",
            status: "",
            valid: true,
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            userData: null,
            items: ["Working", "On Leave", "Past Employee"],
            displayTable: false
        };
    },
    async created() {
        this.updateUserData();
    },
    methods: {
        async register() {
            addUser(this.name, this.email, this.position, this.status);
            this.clearFields();
            await this.updateUserData();
        },
        clearFields() {
            this.name = "";
            this.email = "";
            this.position = "";
            this.status = "";
        },
        async updateUserData() {
            this.userData = await getAllUserData();
            if (this.userData.length == 0) {
                this.displayTable = false;
            } else {
                this.displayTable = true;
            }
        },
        async delete(id) {
            await deleteUser(id);
            await this.updateUserData();
        },
        async update(id, newName, newEmail, newPosition, newStatus) {
            await updateUser(id, {
                name: newName,
                email: newEmail,
                position: newPosition,
                status: newStatus
            });
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
.user-list {
    width: 800px;
}
</style>
