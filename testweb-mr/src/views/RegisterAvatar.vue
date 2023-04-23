<template>
    <v-container>
        <div>
            <v-card width="50%" class=" pa-4">
                <v-sheet>Create your Avatar</v-sheet>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-sheet>Avatar name</v-sheet>
                            <v-text-field label="Enter Avatar name"></v-text-field>

                            <v-btn>Create</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'

const isAuthenticated = true

export default {
    name: "RegisterAvatar",
    methods: {
        goToDashboard() {
            if (isAuthenticated) {
                this.$router.push('/QuestBoard')
            } else {
                this.$router.push('/login')
            }
        },
    }
}
</script>
