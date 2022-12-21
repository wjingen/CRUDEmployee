<template>
    <v-table :data="users">
        <thead slot="head">
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
            <tr v-for="row in displayData" :key="row.id">
                <td>{{ row.name }}</td>
                <td>{{ row.age }}</td>
                <td>{{ row.email }}</td>
                <!-- <td>
                    {{ row.address.street }},
                    {{ row.address.city }}
                    {{ row.address.state }}
                </td> -->
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import users from "./users.json";

export default {
    name: "TheBasics",
    data: () => ({
        users
    })
};
</script>
