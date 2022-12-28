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
            <MDBBtn color="link" size="sm" rounded @click="toggleVisibility">
                Edit
            </MDBBtn>
        </td>
    </tr>
    <Modal v-model:visible="visible" :okButton="okButton" :draggable="true">
        <div class="login">
            <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="newName"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="newEmail"
                    label="Email"
                    :rules="emailRules"
                ></v-text-field>
                <v-text-field
                    v-model="newPosition"
                    label="Position"
                    required
                ></v-text-field>
                <v-select
                    v-model="newStatus"
                    label="Status"
                    required
                    :items="items"
                ></v-select>
            </v-form>
        </div>
    </Modal>
</template>

<script>
import { MDBBtn, MDBBadge } from "mdb-vue-ui-kit";
import { Modal } from "usemodal-vue3";
export default {
    data() {
        return {
            imageUrl:
                "https://avatars.dicebear.com/api/adventurer/" +
                this.id +
                ".svg",
            visible: false,
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            items: ["Working", "On Leave", "Past Employee"],
            newId: this.id,
            newName: this.name,
            newEmail: this.email,
            newPosition: this.position,
            newStatus: this.status,
            okButton: {
                text: "Edit",
                onclick: () => {
                    this.editForm();
                    this.toggleVisibility();
                },
                loading: false
            }
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
    methods: {
        toggleVisibility() {
            this.visible = !this.visible;
        },
        editForm() {
            console.log("editing form");
            this.$emit(
                "edit",
                this.id,
                this.newName,
                this.newEmail,
                this.newPosition,
                this.newStatus
            );
        }
    },
    components: { MDBBadge, MDBBtn, Modal },
    emits: ["remove", "edit"],
    props: ["name", "email", "position", "status", "id"]
};
</script>
