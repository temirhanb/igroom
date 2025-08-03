export const useFollowsHook = () => {
  const followsButtons = [
    {
      name: "Мои подписки",
      img: "/subscribe-icon.svg"
    },
    {
      name: "Черный список",
      img: "/blacklist-icon.svg"
    }, {
      name: "Закладки",
      img: "/bookmarks-icon.svg"
    },
  ];
  return {followsButtons};
};