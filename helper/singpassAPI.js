import mockUserProfile from "../constants/mockUserProfile";

export const singpassAPI = async () => {
  return { status: "OK", data: mockUserProfile };
};
