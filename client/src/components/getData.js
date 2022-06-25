import { useEffect, useState } from "react";
import axios from "axios";
import SpinningCircles from "./loadingSpinning";

const PostToServer = ({ url, data, content, render }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(url)
      .then((res) => {
        data(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  return (
    <div className="myApartment">{loading ? <SpinningCircles /> : content}</div>
  );
};

export default PostToServer;

export const GetData = ({ url, data, content, render }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        data(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  return (
    <div className="myApartment">{loading ? <SpinningCircles /> : content}</div>
  );
};

export const PutToServer = async (route, obj) => {
  axios.put(route, obj).then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
};

export const DeleteToServer = async (route) => {
  axios.delete(route).then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
};

// export const PostToServer = async (route, valeu) => {
//   let myPromise = new Promise((resolve, reject) => {
//     axios.post(`${route}`, valeu).then(
//       (res) => {
//         resolve(res.data);
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
//   return myPromise;
// };

// export const GetFromServer = async (route, data ) => {
//   axios.get(route).then(
//     (res) => {
//       data(res.data);
//     },
//     (error) => {
//       data(error);
//     }
//   );
// };
