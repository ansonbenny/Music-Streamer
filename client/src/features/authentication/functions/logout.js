import instance from "../../../lib/axios";

const Logout = async () => {
  let response;
  try {
    response = await instance.get("/user/logout");
  } catch (err) {
    console.log(err);
    alert("Facing An Error");
  } finally {
    if (response) {
      return true;
    }
  }

  return null;
};

export default Logout;
