import {useProfileStore} from "@/state/providers/provider-profile";

export const useCountInvitesHook  = ()=>{
  const {data: {calling_limit, going_limit}} = useProfileStore(state => state);

  const invites = [
    {
      id: 123,
      name: "Зовы",
      status: "ready",
      count: calling_limit === undefined ? 7 : calling_limit
    },
    {
      id: 1123,
      name: "Иду",
      status: "pending",
      count: going_limit === undefined ? 7 : going_limit
    },
  ];

  return {invites}
}