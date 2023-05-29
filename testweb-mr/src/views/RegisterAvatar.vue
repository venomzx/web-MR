<template>
    <v-container>
        <div>
            <v-card width="50%" class=" pa-4">
                <v-sheet>Create your Avatar</v-sheet>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-sheet>Avatar name</v-sheet>
                            <v-text-field label="Enter Avatar name" ref="AvatarName"></v-text-field>

                            <v-btn @click="postUserAvatar">Create</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'

const URL_Register = "/register"

export default {
    name: "RegisterAvatar",
    methods: {
        postUserAvatar() {
            const avatar = this.$refs["AvatarName"].value
            const userAvatar = {
                avatarName: avatar
            }
            axios.post(URL_Register, userAvatar)
            .then((response) => {
                if(response.status == 200){
                    this.$router.push('/QuestBoard')
                }else {
                    alert("Name Used. Try other name")
                }
                
            })
                .catch((error) => {
                    // handle errors
                    console.log(error);
                });
        }
    }
}
</script>
