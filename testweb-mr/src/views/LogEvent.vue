<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
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
        </v-col>

        <v-row justify="center">
          <v-table fixed-header class="" height="600px" theme="dark" density="comfortable">
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
export default {
  name: "LogEvent",
  data: () => ({

    Logtest: [
      {
        LogDays: "21/12/2021",
        AvatarName: "น้องเป็ด",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Tenya",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "NONGCAKE",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "ButterBen",
        DetailLog: "Received 5 EXP from Quest 001"
      },

      {
        LogDays: "21/12/2021",
        AvatarName: "UU0LFMAN",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "ประยุทธ์ จันทร์อังคาร",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TheToon",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Maleemin",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Duke",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "KPMaied",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Ote8621",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Takodachi",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Popcorn",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Minmhai",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] MZwallow",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Poomkun Scarlet",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Jookie",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "P0ndsniper",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Mintwp",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Alptraum",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Tongsm",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Jop321",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] turbo1430",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] TeeRex",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "CodeSaouBoi",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Fubuki",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "ChanFK",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "kingofra",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "winwin07",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Jame",
        DetailLog: "Received 5 EXP from Quest 001"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "น้องเป็ด",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Tenya",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "NONGCAKE",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "ButterBen",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "UU0LFMAN",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: 'ประยุทธ์ จันทร์อังคาร',
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "TheToon",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Maleemin",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Duke",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "KPMaied",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Ote8621",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Takodachi",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Popcorn",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Minmhai",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] MZwallow",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Poomkun Scarlet",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Jookie",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "P0ndsniper",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Mintwp",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Alptraum",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Tongsm",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] Jop321",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] turbo1430",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "[น้อน] TeeRex",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "CodeSaouBoi",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Fubuki",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "ChanFK",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "kingofra",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "winwin07",
        DetailLog: "Joined the journey"
      },
      {
        LogDays: "21/12/2021",
        AvatarName: "Jame",
        DetailLog: "Joined the journey"
      }

    ],
  }),
}
</script>
