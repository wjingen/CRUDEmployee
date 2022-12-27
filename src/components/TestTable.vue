<template>
    <MDBTable striped hover class="align-middle mb-0 bg-white">
        <thead class="bg-light">
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <TestTableComponent
                v-for="user in users"
                :name="user.name"
                :email="user.email"
                :title="user.title"
            />
        </tbody>
    </MDBTable>
</template>

<script setup>
import { MDBTable, MDBBtn, MDBBadge } from "mdb-vue-ui-kit";
import TestTableComponent from "./TestTableComponent.vue";

const users = [
    { name: "James", email: "a@a.com", title: "Worker" },
    { name: "Jonathan", email: "b@b.com", title: "Officer" },
    { name: "Frank", email: "c@c.com", title: "Manager" }
];
</script>

<style lang="scss" scoped></style>
