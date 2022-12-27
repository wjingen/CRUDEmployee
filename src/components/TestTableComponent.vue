<template>
    <tr>
        <td>
            <div class="d-flex align-items-center">
                <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style="width: 45px; height: 45px"
                    class="rounded-circle"
                />
                <div class="ms-3">
                    <p class="fw-bold mb-1">{{ name }}</p>
                    <p class="text-muted mb-0">{{ email }}</p>
                </div>
            </div>
        </td>
        <td>
            <p class="fw-normal mb-1">{{ title }}</p>
            <p class="text-muted mb-0">{{ department }}</p>
        </td>
        <td>
            <MDBBadge color="success" pill class="d-inline">{{
                status
            }}</MDBBadge>
        </td>
        <td>{{ position }}</td>
        <td>
            <MDBBtn color="link" size="sm" rounded> Edit </MDBBtn>
        </td>
    </tr>
</template>

<script setup>
import { MDBBtn, MDBBadge } from "mdb-vue-ui-kit";
const props = defineProps({
    name: String,
    email: String,
    title: String,
    department: String,
    status: String,
    position: String
});
</script>

<style lang="scss" scoped></style>
