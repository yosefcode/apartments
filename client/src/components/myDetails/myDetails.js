import "./myDetails.css";
import React, { useState, useEffect, useContext } from "react";
import Content from "./content";
import * as Yup from "yup";
import { useFormik } from "formik";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Checkbox, Button } from "../Input_select_button/Input_select_button";
import { AppContext } from "../../variable-Context";
import ModalTimeOut from "../ModalTimeOut/ModalTimeOut";
import { PostToServerLoading, PutToServerLoading } from "../getData";

function DetailsUser({ titleHeader }) {
  const { registeredUser, uidFirebase, setRegisteredUser, setDetailsUsers } =
    useContext(AppContext);
  const [response, setResponse] = useState();
  const [data, setData] = useState([]);
  const [isOpenModalTimeOut, setIsOpenModalTimeOut] = useState(false);
  const [detailsUser, setDetailsUser] = useState({});
  const [listCityOptionsSale, setListCityOptionsSale] = useState(false);
  const [listCityOptionsSearch, setListCityOptionsSearch] = useState(false);

  useEffect(() => {
    setDetailsUser({ uidFirebase: uidFirebase, ...data[0] });
  }, [data]);

  const formik = useFormik({
    initialValues: detailsUser,
    enableReinitialize: true,
    validationSchema: Yup.object({
      nameUser: Yup.string().min(2, "מינימום 2 תווים").required("* שדה חובה"),
      mailUser: Yup.string().email("לא תקין").required("* שדה חובה"),
      phoneUser: Yup.string()
        .required("* שדה חובה")
        .test("isValidNumber", "מס' אינו תקין", (phone) => {
          const parsedNumber =
            !!phone && parsePhoneNumberFromString(phone, "IL");
          return parsedNumber && parsedNumber.isValid() ? true : false;
        }),
      citiesSaleApartment:
        detailsUser.msgSaleApartment === true
          ? Yup.array()
              .min(1, "* בחרת לקבל הודעות, נא לבחור עיר")
              .required("* בחרת לקבל הודעות, נא לבחור עיר")
          : null,
      citiesSearchApartment:
        detailsUser.msgSearchApartment === true
          ? Yup.array()
              .min(1, "* בחרת לקבל הודעות, נא לבחור עיר")
              .required("* בחרת לקבל הודעות, נא לבחור עיר")
          : null,
      isAgree: Yup.boolean()
        .oneOf([true], "* חובה לאשר")
        .required("* חובה לאשר"),
    }),
    onSubmit: (values) => {
      sendDetailsUser();
    },
  });

  const sendDetailsUser = async () => {
    setIsOpenModalTimeOut(true);
  };

  const onchange = (e) => {
    setDetailsUser({
      ...detailsUser,
      [e.target.name]: e.target.value,
    });
  };

  const GetData = registeredUser ? PutToServerLoading : PostToServerLoading;

  return (
    <div
      onClick={() => {
        if (listCityOptionsSale === true) setListCityOptionsSale(false);
        if (listCityOptionsSearch === true) setListCityOptionsSearch(false);
      }}
    >
      {!isOpenModalTimeOut ? (
        <PostToServerLoading
          route={`/api/userConnected/${uidFirebase}`}
          data={setData}
          content={
            <div className="my_details">
              <div className="my_details_header">{titleHeader}</div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <Content
                    detailsUser={detailsUser}
                    setDetailsUser={setDetailsUser}
                    formik={formik}
                    onchange={onchange}
                    listCityOptionsSale={listCityOptionsSale}
                    setListCityOptionsSale={setListCityOptionsSale}
                    listCityOptionsSearch={listCityOptionsSearch}
                    setListCityOptionsSearch={setListCityOptionsSearch}
                  />{" "}
                </div>

                {!registeredUser && (
                  <div
                    style={{
                      marginRight: "5rem",
                    }}
                  >
                    <Checkbox
                      name={"isAgree"}
                      onChange={(e) => {
                        setDetailsUser({
                          ...detailsUser,
                          [e.target.name]: e.target.checked,
                        });
                      }}
                      label={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          מאשר את
                          <div
                            className="link_PrivacyPolicy"
                            onClick={() => {
                              console.log("ok");
                            }}
                          >
                            {" "}
                            תקנון האתר
                          </div>
                        </div>
                      }
                      checked={detailsUser?.isAgree}
                      formikErr={formik.errors.isAgree}
                    />
                  </div>
                )}

                <Button
                  title={"שמור"}
                  padding={"0.5rem 1.5rem"}
                  borderRadius={"10px"}
                  type={"submit"}
                />
              </form>
            </div>
          }
        />
      ) : (
        <GetData
          route={
            registeredUser ? `/api/editUser/${detailsUser._id}` : `/api/addUser`
          }
          obj={detailsUser}
          response={setResponse}
          content={
            <ModalTimeOut
              duration={3}
              setIsOpenModalTimeOut={setIsOpenModalTimeOut}
              textMsgModalTimeOut={
                response?.status === 200 ? (
                  <div>פרטי המשתמש נשמרו בהצלחה </div>
                ) : (
                  <div>רישום משתמש נכשל </div>
                )
              }
            />
          }
        />
      )}
    </div>
  );
}

export default DetailsUser;
