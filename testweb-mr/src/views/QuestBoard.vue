<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      <v-row>
        <!-- Quest SideBar -->
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list height="400" rounded="lg">
              <!-- Filter Quest Current -->
              <v-list-item @click="setFilterQuest('Current')">
                <v-list-item-title> Current Quest </v-list-item-title>
              </v-list-item>
              <!-- Filter Quest Expire -->
              <v-list-item @click="setFilterQuest('Expired')">
                <v-list-item-title>
                  Expired Quest
                </v-list-item-title>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <!-- <v-list v-if="this.store.user_Role == 'Teacher'"></v-list> -->
              <v-list-item @click="openDialogManage()">
                <v-list-item-title> Manage Quest </v-list-item-title>
              </v-list-item>

              <!--       
                // Test search word        
              <v-list-item @click="setFilterQuest('movement')">
                <v-list-item-title> Word Movement </v-list-item-title>
              </v-list-item>
              -->
            </v-list> 
          </v-sheet>
        </v-col>

        <!-- Quest Board area -->
        <v-col class="bg-white rounded-lg" cols="10" align-self="start">
          <v-row>
            <v-col v-for="card in FilterQuest" :key="card.QuestID" cols="6">
              <v-card color="blue">
                <v-card-title
                  class="text-white"
                  v-text="card.QuestID + ' ' + card.QuestName"
                />
                <v-card-subtitle v-text="'Requirement: ' + card.Requirement" />
                <v-card-text>
                  Description
                  <v-card-text
                    class="overflow-hidden"
                    style="height: 100px"
                    v-text="card.Description"
                  />
                </v-card-text>

                <div class="d-flex flex-row">
                  <v-card-text
                    v-text="'Duration: ' + card.Duration + ' Days'"
                  />
                  <v-card-text v-text="'Expire: ' + card.QuestExpire" />
                </div>
                <div class="d-flex flex-row">
                  <v-card-actions>
                    <v-btn
                      class="bg-blue-darken-3"
                      color="white"
                      @click="openDialogSeeDetails(card)"
                      v-text="'See Details'"
                    />
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      class="bg-blue-darken-3"
                      color="white"
                      @click="postStudentGetWork(card.QuestID)"
                      v-text="'Get Quest'"
                    />
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
      <v-card theme="dark">
        <v-card-title
          class="text-white"
          v-text="showDetail.QuestID + ' ' + showDetail.QuestName"
        ></v-card-title>
        <v-card-subtitle
          v-text="'Requirement: ' + showDetail.Requirement"
        ></v-card-subtitle>
        <v-container>
          <v-card-text>
            Descriptionz
            <v-card-text
              v-text="showDetail.Description"
              height="100"
            ></v-card-text>
          </v-card-text>
          <v-card-text
            v-text="
              'Duration: ' +
              showDetail.Duration +
              ' , ' +
              'Expire: ' +
              showDetail.QuestExpire
            "
          ></v-card-text>
        </v-container>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            @click="dialog.dialogDetailQuest = false"
          >
            Close
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn color="primary" block> Get this quest </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- PopUP Panel Manage Quest -->
    <v-dialog v-model="dialog.dialogManageQuest">
      <v-form>
        <v-card theme="dark" min-width="600" min-height="600">
          <v-toolbar dark color="blue">
            <v-btn @click="closeDialogManage()">
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
                  <v-list-item @click="createQuest()">
                    <v-list-item-title> Add New Quest </v-list-item-title>
                  </v-list-item>
                  <v-divider class="my-2" />
                  <div v-for="Quest in QuestList" :key="Quest.QuestID">
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
            <v-col v-if="showForm">
              <v-row class="ma-6">
                <v-col>
                  <v-sheet>Status Quest</v-sheet>
                  <v-select
                    label="Select Status"
                    :items="['Unassign', 'Available', 'Expired']"
                  ></v-select>

                  <v-sheet>Quest ID</v-sheet>
                  <v-text-field
                    name="Quest ID"
                    label="Quest ID"
                    type="text"
                    :model-value="selectQuest.QuestID"
                    ref="QuestIDValue"
                  ></v-text-field>

                  <v-sheet>Quest Name</v-sheet>
                  <v-text-field
                    name="Quest Name"
                    label="Quest Name"
                    type="text"
                    :model-value="selectQuest.QuestName"
                    ref="QuestNameValue"
                  ></v-text-field>

                  <v-sheet>Requirement</v-sheet>
                  <v-text-field
                    name="Requirement"
                    label="Requirement"
                    type="text"
                    :model-value="selectQuest.Requirement"
                    ref="RequirementValue"
                  ></v-text-field>

                  <v-sheet>Description</v-sheet>
                  <v-textarea
                    name="name"
                    label="Description"
                    type="text"
                    textarea
                    :model-value="selectQuest.Description"
                    ref="DescriptionValue"
                  ></v-textarea>

                  <v-sheet>Reward</v-sheet>
                  <v-text-field
                    name="Reward"
                    label="Reward"
                    type="number"
                    :model-value="selectQuest.Reward"
                    ref="RewardValue"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-sheet>Duration</v-sheet>
                  <v-text-field
                    label="Days"
                    type="number"
                    :model-value="selectQuest.Duration"
                    ref="DurationValue"
                  >
                  </v-text-field>

                  <v-sheet>Due date</v-sheet>
                  <v-text-field
                    :disabled="!disableButton"
                    name="Due date"
                    label="Due date"
                    prepend-icon="mdi-calendar-range"
                    :type="disableButton ? 'date' : 'text'"
                    :model-value="
                      disableButton ? selectQuest.QuestExpire : 'N/A'
                    "
                    ref="DueDateValue"
                  >
                  </v-text-field>
                  <v-checkbox
                    label="Set Due date"
                    ref="SetDueDate"
                    v-model="disableButton"
                  >
                  </v-checkbox>

                  {{ this.disableButton }}

                  {{ this.dataForTest }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-toolbar dark color="blue" d-flex>
          <v-btn @click="closeDialogManage()">Cancel</v-btn>
          <v-btn @click="postAddEditQuest()">Confirm</v-btn>
        </v-toolbar>
      </v-form>
    </v-dialog>
  </v-main>
</template>

<script>
import axios from "@/api/axios";
// import moment from 'moments'

// GET Set URL_QuestList
const URL_Get_QuestList = "/questboard";

// POST Student Select Get Quest
const URL_Post_StudentGetWork = "/payloadAdd";

// POST Add/Edit Quest
const URL_Post_AddEditQuest = "/editquest";

export default {
  name: "QuestBoard",
  data: () => ({
    dataForTest: "",
    due: "",
    disableButton: false,
    showForm: false,
    questType: "Current",
    dialog: {
      dialogConfirm: false,
      dialogDetailQuest: false,
      dialogManageQuest: false,
    },
    QuestList: [],
    showDetail: [],
    selectQuest: [],

    TQuestList: [
      //     QuestID      : String    -
      //     QuestName    : String    -
      //     visible      : String    "Current","Expired"
      //     Description  : String    -
      //     Reward       : Number    Exp
      //     Requirement  : Number/String    Level / "N/A"
      //     MinParty     : Number    -
      //     MaxParty     : Number    -
      //     Duration     : Number    Days
      //     QuestExpire  : String    Date / "N/A"
      {
        QuestID: "001",
        QuestName: "Joining the journey",
        visible: "Expired",
        Description:
          "Join Google Classroom of mixed reality class with code wceeoa",
        Reward: 5,
        Requirement: "Level 1",
        MinParty: 1,
        MaxParty: 1,
        Duration: 5,
        QuestExpire: "N/A",
      },
      {
        QuestID: "002",
        QuestName: "Explore the world",
        visible: "Expired",
        Description:
          "Find your selected mixed reality program and describe where in reality-virtuality continuum it should be",
        Reward: 5,
        Requirement: "N/A",
        MinParty: 1,
        MaxParty: 1,
        Duration: 5,
        QuestExpire: "27/08/2023",
      },
      {
        QuestID: "003",
        QuestName: "Senses",
        visible: "Expired",
        Description:
          "Pick 2 or more senses of human body and describe how they work collaborately with each other and what human body expect to sense from them",
        Reward: 10,
        Requirement: "N/A",
        MinParty: 1,
        MaxParty: 2,
        Duration: 5,
        QuestExpire: "03/09/2023",
      },
      {
        QuestID: "004",
        QuestName: "Dreaming",
        visible: "Expired",
        Description: "Dreaming experience and virtual reality experience",
        Reward: 20,
        Requirement: "Level 2",
        MinParty: 1,
        MaxParty: 2,
        Duration: 7,
        QuestExpire: "03/09/2023",
      },
      {
        QuestID: "005",
        QuestName: "Lucid dream",
        visible: "Expired",
        Description: "Lucid dream and five senses of human",
        Reward: 10,
        Requirement: "N/A",
        MinParty: 1,
        MaxParty: 1,
        Duration: 3,
        QuestExpire: "10/09/2023",
      },
      {
        QuestID: "006",
        QuestName: "VR movement (1)",
        visible: "Expired",
        Description:
          "User movement is one of the most challenging issues in VR. You have to find an example of approaches to solve this issue.",
        Reward: 10,
        Requirement: "Level 2",
        MinParty: 1,
        MaxParty: 2,
        Duration: 3,
        QuestExpire: "10/09/2023",
      },
      {
        QuestID: "007",
        QuestName: "VR movement (2)",
        visible: "Expired",
        Description:
          "What are you thinking about the future of VR Movement issues?",
        Reward: 30,
        Requirement: "Must finish Quest 006",
        MinParty: 1,
        MaxParty: 2,
        Duration: 5,
        QuestExpire: "10/09/2023",
      },
      {
        QuestID: "008",
        QuestName: "World of AR",
        visible: "Expired",
        Description:
          "Explore the world around you and find if there is anything can be augmented",
        Reward: 30,
        Requirement: "Level 3",
        MinParty: 1,
        MaxParty: 2,
        Duration: 7,
        QuestExpire: "17/09/2023",
      },
      {
        QuestID: "009",
        QuestName: "QR and AR",
        visible: "Current",
        Description: "Will QR and AR relate to each other?",
        Reward: 10,
        Requirement: "N/A",
        MinParty: 1,
        MaxParty: 1,
        Duration: 5,
        QuestExpire: "N/A",
      },
      {
        QuestID: "010",
        QuestName: "Form your party",
        visible: "Current",
        Description: "Form your party for the rest of your journey",
        Reward: 10,
        Requirement: "N/A",
        MinParty: 3,
        MaxParty: 5,
        Duration: 15,
        QuestExpire: "N/A",
      },
    ],
  }),
  methods: {
    logdata(data) {
      // console.log(moment(this.$refs["QIDEZEZ"].value).format('DD/MM/YYYY'))
      this.dataForTest = this.$refs["DueDateValue"].value;
      console.log(this.$refs["DueDateValue"].value);
      console.log(this.$refs["DurationValue"].value);
    },

    setFilterQuest(selectType) {
      if (selectType == "Current") {
        this.questType = "Current";
      } else if (selectType == "Expired") {
        this.questType = "Expired";
      }else if (selectType == "movement") {
        this.questType = "movement";
      }
    },
    openDialogSeeDetails(cardData) {
      this.dialog.dialogDetailQuest = true;
      this.showDetail = cardData;
    },

    closeDialogSeeDetails() {
      this.dialog.dialogDetailQuest = false;
    },

    openDialogManage() {
      this.dialog.dialogManageQuest = true;
    },

    closeDialogManage() {
      this.dialog.dialogManageQuest = false;
      this.showForm = false;
      this.selectQuest = [];
    },

    createQuest() {
      this.showForm = true;
      this.disableButton = false;
      this.selectQuest = [];
    },
    dialogSelectQuest(questData) {
      this.showForm = true;
      this.disableButton = true;
      this.selectQuest = questData;
      if (questData.QuestExpire == "N/A" || questData.QuestExpire == null) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    },

    //Get List of Quest
    async getQuestData() {
      await axios
        .post(URL_Get_QuestList, { encoded_jwt: this.$store.state.user_token })
        .then((response) => {
          // handle success
          console.log("Get:", response.data);
          this.QuestList = response.data;
        })
        .catch((error) => {
          // handle errors
          console.log("Error on getQuestList: ", error);
        });
    },
    postStudentGetWork(Quest) {
      const postGetWork = {
        QuestID: Quest,
        studentId: "111355848139463620207",
      };
      axios
        .post(URL_Post_StudentGetWork, postGetWork)
        .then((response) => {
          // handle success
          console.log("Student Get Quest Post:", response.data);
          alert("รับเควสสำเร็จ เควส: ", Quest);
        })
        .catch((error) => {
          // handle errors
          console.log("Error on Post Student Quest: ", error);
          alert("รับเควสไม่สำเร็จ เควส: ", Quest);
        });
    },

    postAddEditQuest() {
      const postAdd_or_Edit = {
        QuestID: this.$refs["QuestIDValue"].value,
        QuestName: this.$refs["QuestNameValue"].value,
        Description: this.$refs["DescriptionValue"].value,
        Reward: this.$refs["RewardValue"].value,
        Requirement: this.$refs["RequirementValue"].value,
        MinParty: 1,
        MaxParty: 1,
        Duration: this.$refs["DurationValue"].value,
        QuestExpire: this.$refs["DueDateValue"].value,
      };

      console.log("Status: ", postAdd_or_Edit);

      axios
        .post(URL_Post_AddEditQuest, postAdd_or_Edit)
        .then((response) => {
          // handle success
          console.log("Status: ", response.data);
          // Success case
          if (response.status == 200) {
            alert("อัพเดรตเสร็จสิ้น");
          }
          // Fail case
          else {
            alert("อัพเดรตไม่สำเร็จ");
          }
        })
        .catch((error) => {
          // handle errors
          console.log("Error on Update Quest: ", error);
        });
    },
  },
  computed: {
    FilterQuest() {
      // For Test change "QuestList" to "TQuestList"
      return this.TQuestList.filter((item) => {
        // 1. Filter by word
        if (this.questType == "movement") {
          return item.QuestName.toLowerCase().includes(this.questType);
        }else{
          // 2. Filter by Current-Expired
          return item.visible == this.questType;
        }
      });
    },
  },
  mounted() {
    this.getQuestData();
  },
};
</script>
