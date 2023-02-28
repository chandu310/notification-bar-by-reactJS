const Notification = (props) => {
  //  Write your code here.
  const { matter, styling, imglink, imgss } = props;
  return (
    <div className={styling}>
      <img className={imgss} src={imglink} />
      <p>{matter}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <div>
      <h1 className="head">Notifications</h1>
      <Notification
        matter="Information message"
        styling="info"
        imglink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imgss="img-css"
      />
      <Notification
        matter="Success message"
        styling="success"
        imglink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        imgss="img-css"
      />
      <Notification
        matter="Warning message"
        styling="warning"
        imglink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        imgss="img-css"
      />
      <Notification
        matter="Error message"
        styling="error"
        imglink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        imgss="img-css"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
