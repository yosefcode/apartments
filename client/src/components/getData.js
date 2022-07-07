import { useEffect, useState } from "react";
import axios from "axios";
import SpinningCircles from "./loadingSpinning";

export const PostToServerLoading = ({
  route,
  data,
  content,
  render,
  response,
  obj,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(route, obj)
      .then((res) => {
        if (data) {
          data(res.data);
        }
        if (response) {
          response(res);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render, route, obj]);

  return <div>{loading ? <SpinningCircles /> : content}</div>;
};

export const GetDataLoading = ({ route, data, content, render, response }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(route)
      .then((res) => {
        if (data) {
          data(res.data);
        }
        if (response) {
          response(res);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  return <div>{loading ? <SpinningCircles /> : content}</div>;
};
export const PutToServerLoading = ({
  route,
  data,
  content,
  render,
  response,
  obj,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .put(route, obj)
      .then((res) => {
        if (data) {
          data(res.data);
        }
        if (response) {
          response(res);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  return <div>{loading ? <SpinningCircles /> : content}</div>;
};

export const GetData = async (url, data) => {
  axios.get(url).then(
    (res) => {
      data(res.data);
    },
    (err) => {
      console.log(err);
    }
  );
};

export const PostToServer = async (url, obj, data, response) => {
  axios.post(url, obj).then(
    (res) => {
      if (data) {
        data(res.data);
      }
      if (response) {
        response(res);
      }
    },
    (err) => {
      console.log(err);
    }
  );
};

export const PutToServer = async (route, obj, response) => {
  axios.put(route, obj).then(
    (res) => {
      console.log(res);
      if (response) {
        response(res);
      }
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
