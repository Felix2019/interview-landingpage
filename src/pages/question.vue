<template>
  <div class="h-screen p-4 bg-background flex justify-center items-center">
    <Loader v-if="isLoading" />

    <p v-else-if="error" class="text-xl font-bold">Fehler aufgetreten!</p>

    <div v-else class="w-full md:w-2/3 lg:1/4">
      <div class="bg-secondary rounded-t-xl shadow p-3 space-y-8">
        <!-- question content -->
        <div class="bg-white rounded-lg p-2.5">{{ question.content }}</div>

        <div class="flex justify-between">
          <!-- user chip -->
          <div
            class="flex items-center space-x-2 bg-tertiary rounded-lg shadow px-3 py-1.5"
          >
            <!-- user image -->
            <img
              :src="question.user.photoURL"
              alt="user-image"
              class="bg-white rounded-full shadow w-6 h-6"
            />
            <!-- username -->
            <span class="font-bold">{{ question.user.username }}</span>
          </div>

          <!-- result button -->
          <button
            class="flex items-center bg-tertiary shadow rounded-lg px-3 py-1.5 space-x-2"
          >
            <Icon icon="mdi:chart-box" width="26" height="26" />

            <span class="font-bold">Ergebnis</span>
          </button>
        </div>

        <!-- answer buttons -->
        <div class="space-y-5">
          <!-- right button -->
          <button
            class="w-full flex items-center justify-center space-x-8 bg-tertiary shadow rounded-lg p-3.5"
          >
            <Icon icon="mdi:arrow-right" width="26" height="26" />

            <span class="font-bold text-left">{{ question.answerRight }}</span>
          </button>

          <!-- left button -->
          <button
            class="w-full flex items-center justify-center space-x-8 bg-tertiary shadow rounded-lg p-3.5"
          >
            <Icon icon="mdi:arrow-left" width="26" height="26" />

            <span class="font-bold text-left">{{ question.answerLeft }}</span>
          </button>
        </div>

        <!-- <p>{{ question }}</p> -->
      </div>

      <!-- option bar -->
      <div class="flex justify-between bg-white px-8 py-10 rounded-b-xl shadow">
        <!-- share btn -->
        <span class="flex items-center space-x-4">
          <button @click="share" class="bg-secondary rounded-xl p-2.5 shadow">
            <Icon icon="mdi:share-variant" width="20" height="20" />
          </button>
          <p class="text-sm font-bold">{{ question.shareCount }}</p>
        </span>

        <!-- comment btn -->
        <span class="flex items-center space-x-4">
          <button class="bg-secondary rounded-xl p-2.5 shadow">
            <Icon icon="mdi:comment-outline" width="20" height="20" />
          </button>
          <p class="text-sm font-bold">{{ question.commentCount }}</p>
        </span>

        <!-- like btn -->
        <span class="flex items-center space-x-4">
          <button class="bg-secondary rounded-xl p-2.5 shadow">
            <Icon icon="mdi:heart-outline" width="20" height="20" />
          </button>
          <p class="text-sm font-bold">{{ question.likeCount }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, Ref } from "vue";
import Loader from "../components/loader.vue";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";

interface User {
  id: String;
  username: String;
  photoURL: String;
}

interface Question {
  id: String;
  content: String;
  shareCount: String;
  commentCount: String;
  likeCount: String;
  answerRight: String;
  answerLeft: String;
  private: boolean;
  color: String;
  user: User;
}

export default {
  components: { Loader, Icon },
  setup() {
    const question: Ref<Question | null> = ref(null);
    const isLoading: Ref<boolean> = ref(true);
    const error: Ref<unknown | null> = ref(null);

    const route = useRoute();

    // const qid = "903d8fc1-5f05-49b4-b8d8-ed57d332fa48";
    const qid = route.params.id;

    // const url = `https://api.interview-app.com/questions/${qid}`;
    const url: RequestInfo = `https://interview-server-staging.herokuapp.com/questions/${qid}`;

    onBeforeMount(async () => {
      isLoading.value = true;

      try {
        await fetch(url)
          .then((response) => response.json())
          .then(
            (result) =>
              (question.value = {
                id: result.qid,
                content: result.content,
                shareCount: result.shareCount,
                commentCount: result.commentCount,
                likeCount: result.likeCount,
                answerRight: result.swipeUpMeans,
                answerLeft: result.swipeDownMeans,
                private: result.private,
                color: result.color,
                user: {
                  id: result.uid,
                  username: result.user.username,
                  photoURL: result.user.photoURL,
                },
              })
          );
      } catch (e: unknown) {
        error.value = e;
      } finally {
        isLoading.value = false;
      }
    });

    const share = () => {
      if (navigator.share)
        navigator
          .share({
            title: "Interview - Question",
            url: `https://interview-server-staging.herokuapp.com/questions/${qid}`,
          })
          .catch((e) => console.log(e));
    };

    return {
      question,
      isLoading,
      error,
      share,
    };
  },
};
</script>
