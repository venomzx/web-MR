<template>
    <v-main class="bg-grey-lighten-3">
        <v-container>
            <v-row justify="center">
                <v-table fixed-header height="480" density="comfortable">
                    <thead>
                        <tr>
                            <th class="text-left">
                                AvatarName
                            </th>
                            <th class="text-left">
                                CurrentLevel
                            </th>
                            <th class="text-left">
                                CurrentEXP
                            </th>
                            <th class="text-left">
                                NextLevelEXPNeeded
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <div v-if="SortPlayer == 0">
                                <v-sheet>No Player Found</v-sheet>
                            </div>
                        <tr v-for="item in SortPlayer" :key="item.AvatarName"
                            :style="SettingTier == 0 ? defaultPlayerTiers(item.CurrentLevel) : displayPlayerTiers(item.CurrentLevel)">
                            
                            <td>{{ item.AvatarName }}</td>
                            <td>{{ item.CurrentLevel }}</td>
                            <td>{{ item.CurrentEXP }}</td>
                            <td>{{ item.NextLevelEXPNeeded }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios'

const URL_getplayer = ""
const URL_Setting = ""

export default {
    name: "PlayerBoard",
    data: () => ({
        Playerlist: [
            {
                AvatarName: "Player001",
                CurrentLevel: 15,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 150,
            }, {
                AvatarName: "Player002",
                CurrentLevel: 12,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 100,
            }, {
                AvatarName: "Player003",
                CurrentLevel: 13,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 180,
            },
            {
                AvatarName: "Player004",
                CurrentLevel: 14,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 160,
            },
            {
                AvatarName: "Player005",
                CurrentLevel: 16,
                CurrentEXP: 10,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player006",
                CurrentLevel: 10,
                CurrentEXP: 200,
                NextLevelEXPNeeded: 10,
            },
            {
                AvatarName: "Player007",
                CurrentLevel: 13,
                CurrentEXP: 40,
                NextLevelEXPNeeded: 180,
            },
            {
                AvatarName: "Player008",
                CurrentLevel: 14,
                CurrentEXP: 60,
                NextLevelEXPNeeded: 160,
            },
            {
                AvatarName: "Player009",
                CurrentLevel: 17,
                CurrentEXP: 40,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player010",
                CurrentLevel: 10,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 100,
            },
            {
                AvatarName: "Player011",
                CurrentLevel: 18,
                CurrentEXP: 80,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player012",
                CurrentLevel: 16,
                CurrentEXP: 100,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player013",
                CurrentLevel: 16,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player014",
                CurrentLevel: 1,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player015",
                CurrentLevel: 2,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player015",
                CurrentLevel: 3,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player016",
                CurrentLevel: 4,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            }, {
                AvatarName: "Player017",
                CurrentLevel: 5,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player018",
                CurrentLevel: 6,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player019",
                CurrentLevel: 7,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            }, {
                AvatarName: "Player020",
                CurrentLevel: 8,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player021",
                CurrentLevel: 9,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "Player022",
                CurrentLevel: 19,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
        ],
        tPlayerlist:[{
                AvatarName: "Player001",
                CurrentLevel: 15,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 150,
            }],
        SettingTier: [],
    }),
    methods: {
        async getPlayerList() {
            await axios.get(URL_getplayer).then((response) => {
                // handle success
                this.Playerlist = response
                console.log("Get:", response);
            })
                .catch((error) => {
                    // handle errors
                });
        },
        async getSetting() {
            await axios.get(URL_Setting).then((response) => {
                // handle success
                // Get Setting
                this.SettingTier = response
                console.log("Get:", response);
            })
                .catch((error) => {
                    // handle errors
                });
        },
        defaultPlayerTiers(level) {
            if (level < 2) {
                return 'background-color: white;'
            }
            else if (level < 7) {
                return 'background-color: lime;'
            }
            else if (level < 10) {
                return 'background-color: green;'
            }
            else if (level < 13) {
                return 'background-color: silver;'
            }
            else if (level < 15) {
                return 'background-color: grey;'
            }
            else if (level < 17) {
                return 'background-color: yellow;'
            }
            else if (level < 18) {
                return 'background-color: orange;'
            }
            else if (level <= 20) {
                return 'background-color: red;'
            }
            else if (level > 20) {
                return 'background-color: blue;'
            }
        },
        displayPlayerTiers(level) {
            if (level < this.SettingTier.Tier1_Level) {
                return 'background-color: ' + this.SettingTier.Tier1_Color + ';'
            }
            else if (level < this.SettingTier.Tier2_Level) {
                return 'background-color: ' + this.SettingTier.Tier2_Color + ';'
            }
            else if (level < this.SettingTier.Tier3_Level) {
                return 'background-color: ' + this.SettingTier.Tier3_Color + ';'
            }
            else if (level < this.SettingTier.Tier4_Level) {
                return 'background-color: ' + this.SettingTier.Tier4_Color + ';'
            }
            else if (level < this.SettingTier.Tier5_Level) {
                return 'background-color: ' + this.SettingTier.Tier5_Color + ';'
            }
            else if (level < this.SettingTier.Tier6_Level) {
                return 'background-color: ' + this.SettingTier.Tier6_Color + ';'
            }
            else if (level < this.SettingTier.Tier7_Level) {
                return 'background-color: ' + this.SettingTier.Tier7_Color + ';'
            }
            else if (level <= this.SettingTier.Tier8_Level) {
                return 'background-color: ' + this.SettingTier.Tier8_Color + ';'
            }
            else if (level > 20) {
                return 'background-color: blue;'
            }
        }
    },
    computed: {
        SortPlayer() {
            //Sort CurrentLevel: High to Low
            return this.Playerlist.slice().sort((item1, item2) => {
                //Sort CurrentEXP: High to Low
                if ((item2.CurrentLevel == item1.CurrentLevel)) {
                    return item2.CurrentEXP - item1.CurrentEXP
                }
                return item2.CurrentLevel - item1.CurrentLevel;
            })
        }
    },
    mounted() {
        //this.getPlayerList()
        //this.getSetting()
    }
}
</script>

<style scoped>
.table {

    background-color: red;

}
</style>
