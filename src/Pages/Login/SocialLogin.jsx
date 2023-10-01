import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLOgin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button onClick={()=> handleSocialLogin(googleLOgin)} className="btn btn-primary ">
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
