import HTTP from "../http-common";

export default () => {
    return HTTP.get("/posts", { cache: false })
}
