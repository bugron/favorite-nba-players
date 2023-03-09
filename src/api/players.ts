import { ApiResponse } from "apisauce";
import { NBAPlayerItem } from "../components/NBAPlayerListItem/NBAPlayerListItem";
import { apiClient } from "./client";

export const getPlayers = ({
  page,
  per_page,
  search,
}: {
  page: number;
  per_page: number;
  search?: string;
}): Promise<ApiResponse<NBAPlayerItem[]>> =>
  apiClient.get("/players", {
    page,
    per_page,
    search,
  });
