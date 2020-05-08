import request from "../core/_utils/request";

export const getInfo = (params) => {
  return request({
    url: "/info",
    options: {
      method: "POST",
      headers: "",
      data: params,
    },
    api: "api",
  });
};
