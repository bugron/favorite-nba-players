import { NBAPlayerItem } from "../components/NBAPlayerListItem/NBAPlayerListItem";

export const constructReactKey = ({
  id,
  last_name,
  first_name,
}: NBAPlayerItem) => id + last_name + first_name;
