import colors from "./colors";

function getDate(dstring=new Date().now) {
    let d = new Date(dstring)
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = d.getDate();
    return `${date}/${month}/${year}`;
  }
export { colors, getDate };