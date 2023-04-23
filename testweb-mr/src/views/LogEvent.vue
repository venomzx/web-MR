<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <!-- <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list rounded="lg">
              <v-list-item v-for="n in 5" :key="n" link>
                <v-list-item-title>
                  List Item {{ n }}
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
        </v-col> -->

        <v-row justify="center">
          <v-table fixed-header height="480" theme="dark" density="comfortable">
            <thead>
              <tr>
                <th class="text-left">
                  LogDays
                </th>
                <th class="text-left">
                  AvatarName
                </th>
                <th class="text-left">
                  DetailLog
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Logtest" :key="item.LogDays">
                <td>{{ item.LogDays }}</td>
                <td>{{ item.AvatarName }}</td>
                <td>{{ item.DetailLog }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-row>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'

const URL_getlog = ""

export default {
  name: "LogEvent",
  data: () => ({

    Logtest: [
      {
        LogDays: "21/12/2021",
        AvatarName: "Orange",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Red",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Player1430",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Player1432",
        DetailLog: "Received 5 EXP from Quest 001"
      },

      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser001",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser002",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser003",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser004",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser005",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser006",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser007",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser008",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser009",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser010",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser011",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser012",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser013",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser014",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser015",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser016",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser017",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser018",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser1430",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser020",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser021",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser022",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser023",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser024",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser025",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser026",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Orange",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Red",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Player1430",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Player1432",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser001",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: 'TestUser002',
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser003",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser004",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser005",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser006",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser007",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser008",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser009",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser010",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser011",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser012",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser013",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser014",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser015",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser016",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser017",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser018",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser1430",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[ClanX] TestUser020",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser021",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser022",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser023",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser024",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser025",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TestUser026",
        DetailLog: "Joined the journey"
      }

    ],
    log: [],
  }),
  methods: {
    async getLog() {
      await axios.get(URL_getlog).then((response) => {
        // handle success
        this.log = response
        
        console.log("Get:", response);
      })
        .catch((error) => {
          // handle errors
        });
    }
  },
  mounted() {
    this.getLog()
  }
}
</script>
