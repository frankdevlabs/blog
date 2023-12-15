import createCache from "@emotion/cache";

export const createMyCache = () =>
  createCache({
    key: "franks-emotion-cache",
  });

export const myCache = createMyCache();
