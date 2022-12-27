<template>
    <tr>
        <td>
            <div class="d-flex align-items-center">
                <img v-bind:src="imageUrl" width="45" height="45" />
                <div class="ms-3">
                    <p class="fw-bold mb-1">{{ name }}</p>
                </div>
            </div>
        </td>
        <td>
            <p class="fw-normal mb-1">{{ email }}</p>
        </td>
        <td>{{ position }}</td>
        <td>
            <MDBBadge :style="stylingStatus" pill class="d-inline">{{
                status
            }}</MDBBadge>
        </td>
        <td>
            <MDBBtn
                color="link"
                size="sm"
                rounded
                @click="$emit('remove', this.id)"
            >
                Delete
            </MDBBtn>
            <MDBBtn
                color="link"
                size="sm"
                rounded
                @click="$emit('edit', this.id)"
            >
                Edit
            </MDBBtn>
        </td>
    </tr>
</template>

<script>
import { MDBBtn, MDBBadge } from "mdb-vue-ui-kit";
export default {
    data() {
        return {
            imageUrl:
                "https://avatars.dicebear.com/api/adventurer/" +
                this.id +
                ".svg"
        };
    },
    computed: {
        stylingStatus() {
            var status = this.status.valueOf();
            if (status == "Working") {
                var color = "green";
            } else if (status == "On Leave") {
                var color = "purple";
            } else if (status == "Past Employee") {
                var color = "red";
            } else {
                var color = "black";
            }
            return {
                color: color,
                fontSize: "13px"
            };
        }
    },
    components: { MDBBadge, MDBBtn },
    emits: ["remove", "edit"],
    props: ["name", "email", "position", "status", "id"]
};
</script>
