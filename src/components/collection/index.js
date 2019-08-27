import React, { Fragment } from "react";
import _ from "lodash";
import moment from "moment";
import "./styles.scss";

export default props => {
  const { isAdded, data } = props;
  const { date_created, title, description, thumnail, featured } = data;
  const _photographer = _.get(data, "photographer", "Unknown");
  const _date = date_created ? moment(new Date(date_created)).format("DD, MMM YYYY") : "";
  return (
    <div className="collection">
      <div className="thumnail">
        {
          thumnail && <img src={thumnail} />
        }
      </div>
      <div className="author">
        <span className="author-name">{_photographer}</span>
        <span>{_date}</span>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="action-groups">
        {isAdded ? (
          <Fragment>
            <div className={`btn-action ${featured ? "is-featured" : ""}`} onClick={props.onToggleFavourite}>F</div>
            <div className="btn-action" onClick={props.onDelete}>D</div>
            <div className="btn-action" onClick={props.showEditForm}>E</div>
          </Fragment>
        ) : (
          <div className="btn-action full-row" onClick={props.showAddForm}>
            Add to NASA Collection
          </div>
        )}
      </div>
    </div>
  );
};
