import "./myMessages.css";
import React, { useState, useEffect, useContext } from "react";
import { PostToServerLoading } from "../../components/getData";
import { AppContext } from "../../variable-Context";
import Modal from "../../components/Modal";
import { AlternateEmail, Call } from "@mui/icons-material";

function MyMessages() {
  const { uidFirebase } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [sortDate, setSortDate] = useState(false);
  const [contentMessage, setContentMessage] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const sortDateFunc = () => {
    setSortDate(!sortDate);
    messages.sort((a, b) =>
      sortDate
        ? new Date(b.date) > new Date(a.date)
          ? -1
          : 1
        : new Date(a.date) < new Date(b.date)
        ? 1
        : -1
    );
  };

  const content_Message = (
    <div className="div_content_message">
      <div className="div_message">
        {isNaN(contentMessage[0]?.mailUser) ? (
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contentMessage[0]?.mailUser}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="back_user">
              <AlternateEmail
                className="message"
                style={{
                  fontSize: "2.6rem",
                  color: "red",
                  marginInlineEnd: "1.5rem",
                }}
              />
              {contentMessage[0]?.mailUser}{" "}
            </div>
          </a>
        ) : (
          <div
            className="back_user"
            onClick={() => {
              window.open(`tel:${contentMessage[0]?.mailUser}`);
            }}
          >
            <Call
              style={{
                fontSize: "2rem",
                color: "green",
                marginInlineEnd: "1.5rem",
              }}
              className="phone"
            />

            {contentMessage[0]?.mailUser}
          </div>
        )}
        {contentMessage[0]?.message}
      </div>
    </div>
  );

  return (
    <div className="myMessages">
      <PostToServerLoading
        route={`/api/messages/${uidFirebase}`}
        data={setMessages}
        content={
          messages.length > 0 ? (
            <div className="large_screen_mymessage">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className="details_messages_large"
                  onClick={() => {
                    setContentMessage([
                      { message: item.message, mailUser: item.mailUser },
                    ]);
                    setIsOpenModal(true);
                  }}
                >
                  הודעה מאת {item.nameUser}
                  <br /> בעניין {item.nameApartment}
                  <div className="date">
                    {new Date(item.date).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>אין הודעות</div>
          )
        }
      />
      {isOpenModal && (
        <div>
          <div className="message_large_screen">{content_Message} </div>

          <div className="modal_message">
            <Modal
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              content={content_Message}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyMessages;
