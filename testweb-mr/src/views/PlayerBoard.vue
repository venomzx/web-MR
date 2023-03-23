<template>
    <v-container>
        <v-row justify="center">
            <v-table fixed-header height="300px" theme="dark" density="comfortable">
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
                    <tr v-for="item in SortPlayer" :key="item.AvatarName">
                        <td>{{ item.AvatarName }}</td>
                        <td>{{ item.CurrentLevel }}</td>
                        <td>{{ item.CurrentEXP }}</td>
                        <td>{{ item.NextLevelEXPNeeded }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "PlayerBoard",
    data: () => ({
        Playerlist: [
            {
                AvatarName: "code001",
                CurrentLevel: 15,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 150,
            },
            {
                AvatarName: "code002",
                CurrentLevel: 12,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 100,
            },
            {
                AvatarName: "code003",
                CurrentLevel: 13,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 180,
            },
            {
                AvatarName: "code004",
                CurrentLevel: 14,
                CurrentEXP: 20,
                NextLevelEXPNeeded: 160,
            },
            {
                AvatarName: "code005",
                CurrentLevel: 16,
                CurrentEXP: 10,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "code006",
                CurrentLevel: 10,
                CurrentEXP: 200,
                NextLevelEXPNeeded: 10,
            },
            {
                AvatarName: "code007",
                CurrentLevel: 13,
                CurrentEXP: 40,
                NextLevelEXPNeeded: 180,
            },
            {
                AvatarName: "code008",
                CurrentLevel: 14,
                CurrentEXP: 60,
                NextLevelEXPNeeded: 160,
            },
            {
                AvatarName: "code009",
                CurrentLevel: 16,
                CurrentEXP: 40,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "code010",
                CurrentLevel: 10,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 100,
            },
            {
                AvatarName: "code011",
                CurrentLevel: 16,
                CurrentEXP: 80,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "code012",
                CurrentLevel: 16,
                CurrentEXP: 100,
                NextLevelEXPNeeded: 200,
            },
            {
                AvatarName: "code013",
                CurrentLevel: 16,
                CurrentEXP: 70,
                NextLevelEXPNeeded: 200,
            },
        ],
    }),
    computed: {
        SortPlayer(){
            //Sort CurrentLevel: High to Low
            return this.Playerlist.slice().sort((item1 ,item2) => {
                //Sort CurrentEXP: High to Low
                if((item2.CurrentLevel == item1.CurrentLevel)){
                    return item2.CurrentEXP - item1.CurrentEXP
                }
                return item2.CurrentLevel - item1.CurrentLevel;
            })
        }
    }
}
</script>
