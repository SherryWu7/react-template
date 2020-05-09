import request from "../core/_utils/request";

export const getInfo = (params) => {
  return request({
    url: "/info",
    options: {
      method: "GET",
      headers: "",
      data: params,
    },
    api: "api",
  });
};
