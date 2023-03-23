<template>
    <v-main class="bg-grey-lighten-3">
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list rounded="lg">
                            <v-list-item @click="QuestType = 'N/A'">
                                <v-list-item-title>
                                    Current Quest
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="QuestType = 'Level 1'">
                                <v-list-item-title>
                                    <!-- Quest Expire -->
                                    Expire Quest
                                </v-list-item-title>
                            </v-list-item>

                            <v-divider class="my-2"></v-divider>

                            <v-list-item link color="grey-lighten-4">
                                <v-list-item-title>
                                    Refresh
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col cols="10" align-self="end">
                    <v-row align-content="space-around">
                        <v-col v-for="card in FilterQuest" :key="card.QuestID" cols="5">
                            <v-card color="primary" @click="!isVisible">
                                <v-card-title class="text-white"
                                    v-text="card.QuestID + ' ' + card.QuestName"></v-card-title>
                                <v-card-subtitle v-text="'Requirement: ' + card.Requirement"></v-card-subtitle>
                                <v-card-text>
                                    Description
                                    <v-card-text v-text="card.Description" height="100"></v-card-text>
                                </v-card-text>
                                <!-- <v-card-text v-text="'Duration: ' + card.Duration + ' , ' + 'Expire: ' + card.QuestExpire"></v-card-text> -->
                                <div class="d-flex flex-row">
                                    <v-card-text v-text="'Duration: ' + card.Duration"></v-card-text>
                                    <v-card-text v-text="'Expire: ' + card.QuestExpire"></v-card-text>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card-actions>
                                        <v-btn @click="SeeDetails(card)" v-text="'See Details'" color="light"></v-btn>
                                    </v-card-actions>
                                    <v-card-actions>
                                        <v-btn @click="logdata(card.QuestName)" v-text="'Get Quest'"></v-btn>
                                    </v-card-actions>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- PopUP Panel Quest Details -->
        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-title class="text-white" v-text="showDetail.QuestID + ' ' + showDetail.QuestName"></v-card-title>
                <v-card-subtitle v-text="'Requirement: ' + showDetail.Requirement"></v-card-subtitle>
                <v-container>
                    <v-card-text>
                        Descriptionz
                        <v-card-text v-text="showDetail.Description" height="100"></v-card-text>
                    </v-card-text>
                    <v-card-text
                        v-text="'Duration: ' + showDetail.Duration + ' , ' + 'Expire: ' + showDetail.QuestExpire"></v-card-text>
                </v-container>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false"> Close </v-btn>

                </v-card-actions>
                <v-card-actions>
                    <v-btn color="primary" block>
                        Click
                    </v-btn></v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
</template>

<script>

import axios from 'axios'


const url = 'https://your-api-server';

export default {
    name: "QuestBoard",
    data: () => ({
        QuestType: "N/A",
        dialog: false,
        Test: 0,
        showDetail: [

        ],
        Testdata: [
            {
                QuestID: "001",
                QuestName: "Joining the journey",
                Description: "Join Google Classroom of mixed reality class with code wceeoa",
                Reward: "5 exp",
                Requirement: "Level 1",
                MinParty: 1,
                MaxParty: 1,
                Duration: "5 Days",
                QuestExpire: "N/A"
            },
            {
                QuestID: "002",
                QuestName: "Explore the world",
                Description: "Find your selected mixed reality program and describe where in reality-virtuality continuum it should be",
                Reward: "5 exp",
                Requirement: "N/A",
                MinParty: 1,
                MaxParty: 1,
                Duration: "5 Days",
                QuestExpire: "27/08/2023"
            },
            {
                QuestID: "003",
                QuestName: "Senses",
                Description: "Pick 2 or more senses of human body and describe how they work collaborately with each other and what human body expect to sense from them",
                Reward: "10 exp",
                Requirement: "N/A",
                MinParty: 1,
                MaxParty: 2,
                Duration: "5 Days",
                QuestExpire: "03/09/2023"
            },
            {
                QuestID: "004",
                QuestName: "Dreaming",
                Description: "Dreaming experience and virtual reality experience",
                Reward: "up to 20 exp",
                Requirement: "Level 2",
                MinParty: 1,
                MaxParty: 2,
                Duration: "7 Days",
                QuestExpire: "03/09/2023"
            },
            {
                QuestID: "005",
                QuestName: "Lucid dream",
                Description: "Lucid dream and five senses of human",
                Reward: "10 exp",
                Requirement: "N/A",
                MinParty: 1,
                MaxParty: 1,
                Duration: "3 Days",
                QuestExpire: "10/09/2023"
            },
            {
                QuestID: "006",
                QuestName: "VR movement (1)",
                Description: "User movement is one of the most challenging issues in VR. You have to find an example of approaches to solve this issue.",
                Reward: "10 exp",
                Requirement: "Level 2",
                MinParty: 1,
                MaxParty: 2,
                Duration: "3 Days",
                QuestExpire: "10/09/2023"
            },
            {
                QuestID: "007",
                QuestName: "VR movement (2)",
                Description: "What are you thinking about the future of VR Movement issues?",
                Reward: "up to 30 exp",
                Requirement: "Must finish Quest 006",
                MinParty: 1,
                MaxParty: 2,
                Duration: "5 Days",
                QuestExpire: "10/09/2023"
            },
            {
                QuestID: "008",
                QuestName: "World of AR",
                Description: "Explore the world around you and find if there is anything can be augmented",
                Reward: "up to 30 exp",
                Requirement: "Level 3",
                MinParty: 1,
                MaxParty: 2,
                Duration: "7 Days",
                QuestExpire: "17/09/2023"
            },
            {
                QuestID: "009",
                QuestName: "QR and AR",
                Description: "Will QR and AR relate to each other?",
                Reward: "10 exp",
                Requirement: "N/A",
                MinParty: 1,
                MaxParty: 1,
                Duration: "5 Days",
                QuestExpire: "17/09/2023"
            },
            {
                QuestID: "010",
                QuestName: "Form your party",
                Description: "Form your party for the rest of your journey",
                Reward: "10 exp for each member",
                Requirement: "N/A",
                MinParty: 3,
                MaxParty: 5,
                Duration: "Before on 17/9/23",
                QuestExpire: "N/A"
            },
        ]
    }),
    methods: {
        async getdata() {
            const data = await axios.get(url).then((response) => {
                // handle success
                console.log("Get:" ,response);
            })
                .catch((error) => {
                    // handle errors
                });
        },
        postdata() {
            const data = axios.post(url).then((response) => {
                // handle success
                console.log("Post:" ,response);
            })
                .catch((error) => {
                    // handle errors
                });
        },
        logdata(data) {
            console.log(data)
        },
        SeeDetails(cardData) {
            this.dialog = true
            this.showDetail = cardData
        },

        
    },
    computed: {
        FilterQuest() {
            return this.Testdata.filter(item => {
                return item.Requirement == this.QuestType
            })
        },
    },
    watch: {
        Test: {
            handler(b1, b2) {
                b2 = b1 + 100000
                console.log(b2)
            }
        }
    }
}
</script>
