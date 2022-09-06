import { onMounted } from "vue";
import { useStore } from "../store";

export function useCurrentRoute() {
  const store = useStore();
  onMounted(() => {
    store.dispatch("common/getCurrentRoute");
  });
}
