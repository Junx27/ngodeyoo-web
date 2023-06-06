import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AlertDismissibleExample() {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);

  function handleShow() {
    navigate("/");
    setShow(true);
  }

  if (show) {
    return (
      <div style={{ height: "220px" }}>
        <Alert
          variant="danger"
          className="font orange text-center"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>
            <span className="blue">Your</span> Email{" "}
            <span className="blue">and</span> Password{" "}
            <span className="blue">Incorrect</span>
          </Alert.Heading>
        </Alert>
      </div>
    );
  }
  return (
    <Button onClick={handleShow} className="mt-5 d-flex mx-auto">
      kembali Ke Homepage
    </Button>
  );
}

export default AlertDismissibleExample;
