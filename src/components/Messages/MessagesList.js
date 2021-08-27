import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { messagePriority } from "../../constant/common";
import testingId from "../../constant/testingId";
import { useMessageDashboardContext } from "../../context/Messages/MessagesDashboardContext";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-size: 12px;
  margin-top: 5px;
  && li {
    border-radius: 3px;
    background-color: ${(props) => {
      switch (props.priority) {
        case messagePriority.error:
          return "#F56236";
        case messagePriority.warning:
          return "#FCE788";
        case messagePriority.info:
          return "#88FCA3";
        default:
          console.error("Message item - Priority cannot be evaluated.");
          return "#000";
      }
    }};
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.75);
  }
`;

/*
 * This can be a button, anchor or whatever the project uses for this kind of actions
 */
const ClearButton = styled.div`
  float: right;
  cursor: pointer;
  padding: 5px;
`;

const MessagesList = (props) => {
  const { title, priority, data } = props;
  const { clearMessage } = useMessageDashboardContext();

  return (
    <>
      <h3>{title}</h3>
      {useMemo(
        () => (
          <>
            <span>Count {data.length}</span>
            <StyledUl
              priority={priority}
              data-testid={testingId.messagesDashboard.list}
            >
              <>
                {data.map((m) => (
                  <li
                    key={m.id}
                    data-testid={testingId.messagesDashboard.listItem}
                  >
                    <div
                      data-testid={testingId.messagesDashboard.listItemMessage}
                    >
                      {m.message}
                    </div>
                    <ClearButton
                      onClick={() => clearMessage(priority, m.id)}
                      data-testid={
                        testingId.messagesDashboard.listItemClearButton
                      }
                    >
                      Clear
                    </ClearButton>
                  </li>
                ))}
              </>
            </StyledUl>
          </>
        ),
        [data]
      )}
    </>
  );
};

MessagesList.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.oneOf([
    messagePriority.error,
    messagePriority.warning,
    messagePriority.info,
  ]),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      message: PropTypes.string,
      priority: PropTypes.number,
    })
  ),
};

export default React.memo(MessagesList);
