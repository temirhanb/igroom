import {ProfileAvatar, ProfileButtons, ProfileName, ProfileStatistic} from "@/features";

export const ProfileInfo = () => {

  return (
    <section className={"mt-[50px]"}>
      <ProfileAvatar/>
      <ProfileName/>
      <ProfileStatistic/>
      <ProfileButtons/>
    </section>
  );
};