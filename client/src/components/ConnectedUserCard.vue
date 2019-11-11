<template>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{connectedUserName}}</v-list-item-title>
            <v-list-item-subtitle>I am {{connectedUserAge}} and I come from {{connectedUserFrom}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions>
            <v-btn
            icon
            @click="showEdit = !showEdit"
            >
                <v-icon>{{ showEdit ? 'mdi-pencil-outline' : 'mdi-pencil' }}</v-icon>
            </v-btn>
            <v-btn
            icon
            @click="deleteUserCard"
            >
                <v-icon>{{ 'mdi-delete' }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="showEdit">
            <v-divider></v-divider>

            <v-card-text>
                <v-text-field v-model="age" placeholder="New age field"> </v-text-field>
                <v-text-field v-model="from" placeholder="New from field"> </v-text-field>
                <v-btn color="normal" v-on:click="$refs.fathercomponent.editUserCard">OK</v-btn>  
            </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
 export default {
    data: function() {
        return {
            showEdit: false,
            age: '',
            from: '',
        }
    },
    props: {
    connectedUserName: {
        type: String,
        required: true
    },
    connectedUserAge: {
        type: Number,
        required: true
    },
    connectedUserFrom: {
        type: String,
        required: true
    }
    }
 }
</script>