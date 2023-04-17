<template>
    <v-main class="bg-grey-lighten-2">
        <v-container>
            <v-row>
                <!-- Quest SideBar -->
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list height="400" rounded="lg">
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
                            <v-list-item @click="dialogManage()">
                                <v-list-item-title>
                                    Manage Quest
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>

                <!-- Quest Board area -->
                <v-col cols="10" align-self="end">
                    <v-row>
                        <v-col v-for="card in FilterQuest" :key="card.QuestID" cols="5">
                            <v-card color="blue" @click="!isVisible">
                                <v-card-title class="text-white"
                                    v-text="card.QuestID + ' ' + card.QuestName"></v-card-title>
                                <v-card-subtitle v-text="'Requirement: ' + card.Requirement"></v-card-subtitle>
                                <v-card-text height="100">
                                    Description
                                    <v-card-text v-text="card.Description" max-height="100"></v-card-text>
                                </v-card-text>

                                <div class="d-flex flex-row">
                                    <v-card-text v-text="'Duration: ' + card.Duration"></v-card-text>
                                    <v-card-text v-text="'Expire: ' + card.QuestExpire"></v-card-text>
                                </div>
                                <div class="d-flex flex-row">
                                    <v-card-actions>
                                        <v-btn @click="dialogSeeDetails(card)" v-text="'See Details'" color="light"></v-btn>
                                    </v-card-actions>
                                    <v-card-actions>
                                        <v-btn @click="postdata(card.QuestID)" v-text="'Get Quest'"></v-btn>
                                    </v-card-actions>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- PopUP Panel Quest Details -->
        <v-dialog v-model="dialog.dialogDetailQuest" width="auto">
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
                    <v-btn color="primary" block @click="dialogDetailQuest = false"> Close </v-btn>

                </v-card-actions>
                <v-card-actions>
                    <v-btn color="primary" block>
                        Click
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- PopUP Panel Manage Quest -->
        <v-dialog v-model="dialog.dialogManageQuest">
            <v-card theme="dark">
                <v-toolbar dark color="blue">
                    <v-btn @click="dialog.dialogManageQuest = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Manage Quest</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>

                <!-- Left side selection quest -->
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg">
                            <v-list rounded="lg">
                                <v-list-item>
                                    <v-list-item-title>
                                        Add New Quest
                                    </v-list-item-title>
                                </v-list-item>
                                <v-divider class="my-2"></v-divider>
                                <div v-for="Quest in QuestList" :key=Quest.QuestID>
                                    <v-list-item @click="dialogSelectQuest(Quest)">
                                        <v-list-item-title>
                                            Quest {{ Quest.QuestID }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </div>
                            </v-list>
                        </v-sheet>
                    </v-col>

                    <!-- Form Quest -->
                    <v-col>
                        <v-form class="ma-6">
                            <v-row>
                                <v-col>
                                    <v-sheet>Status Quest</v-sheet>
                                    <v-select label="Select Status"
                                        :items="['Unassign', 'Available', 'Expired',]"></v-select>

                                    <v-sheet>Quest ID</v-sheet>
                                    <v-text-field name="Quest ID" label="Quest ID"
                                        :model-value="selectQuest.QuestID"
                                        ></v-text-field>

                                    <v-sheet>Quest Name</v-sheet>
                                    <v-text-field name="Quest Name" label="Quest Name"
                                        :model-value="selectQuest.QuestName"></v-text-field>

                                    <v-sheet>Requirement</v-sheet>
                                    <v-text-field name="Requirement" label="Requirement"
                                    :model-value="selectQuest.Requirement"></v-text-field>

                                    <v-sheet>Description</v-sheet>
                                    <v-textarea name="name" label="Description" textarea
                                    :model-value="selectQuest.Description"></v-textarea>

                                    <v-sheet>Reward</v-sheet>
                                    <v-text-field name="Reward" label="Reward" :model-value="selectQuest.Reward"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-sheet>Duration</v-sheet>
                                    <v-select label="Select"
                                        :items="['1 Days', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days',]"
                                        :model-value="selectQuest.Duration"></v-select>

                                    <v-sheet>Due date</v-sheet>

                                    <!-- <v-text-field v-if="selectQuest.QuestExpire == 'N/A'" name="Due date" label="Due date" prepend-icon="mdi-calendar-range"
                                    type="date"    
                                    :model-value="selectQuest.QuestExpire"
                                    
                                    ref="QIDEZEZ"
                                    ></v-text-field> -->
                                    <v-text-field name="Due date" label="Due date" prepend-icon="mdi-calendar-range"
                                    type="date"    
                                    :model-value="selectQuest.QuestExpire"
                                    
                                    ref="QIDEZEZ"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card>
            <v-toolbar dark color="blue" d-flex>
                <v-btn>Cancel</v-btn>
                <v-btn @click="logdata">Confirm</v-btn>
            </v-toolbar>
        </v-dialog>

    </v-main>
</template>

<script>

import axios from 'axios'
// import moment from 'moment'


// Set URL Backend
const URLGET = ""

// Student Select Quest
const URLPOST = ""

export default {
    name: "QuestBoard",
    data: () => ({
        due: "",
        QuestType: "N/A",
        dialog: {
            dialogConfirm: false,
            dialogDetailQuest: false,
            dialogManageQuest: false,
        },

        QuestList: [{
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
            },],
        showDetail: [],
        selectQuest: [],
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
        logdata(data) {
            // console.log(moment(this.$refs["QIDEZEZ"].value).format('DD/MM/YYYY'))
            this.$refs["QIDEZEZ"].value
        },

        //Get List of Quest
        async getdata() {
            const data = await axios.get(URLGET).then((response) => {
                // handle success
                console.log("Get:", response);
            })
                .catch((error) => {
                    // handle errors
                });
        },
        postdata(Quest) {
            axios.post(URLPOST,{
                QuestID: Quest
            }).then((response) => {
                // handle success
                console.log("Student Get Quest Post:", response);
            })
                .catch((error) => {
                    // handle errors
                });
        },
        
        dialogSeeDetails(cardData) {
            this.dialog.dialogDetailQuest = true
            this.showDetail = cardData
        },
        dialogManage() {
            this.dialog.dialogManageQuest = true
        },
        dialogSelectQuest(questData) {
            this.selectQuest = questData
        }


    },
    computed: {
        FilterQuest() {
            return this.Testdata.filter(item => {
                return item.Requirement == this.QuestType
            })
        },
    },
    // Async() {
    //     axios.get(url).then((response) => {
    //         // handle success
    //         console.log("Get:", response);
    //         this.QuestList = response
    //     })
    //         .catch((error) => {
    //             // handle errors
    //             console.log("ErrorGetQuest", error);
    //         });
    // }
}
</script>
