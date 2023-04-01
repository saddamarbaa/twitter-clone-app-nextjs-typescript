import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
function signup() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "30px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="modalWrapper flex flex-col">
          <div className="header flex flex-row">
            <button onClick={() => setIsOpen(false)}> X</button>
            <div className="image">
              <Image
                src="/Twitter-logo.svg.png"
                alt="Twitter-Logo"
                width={30}
                height={24}
              />
            </div>
          </div>
          <div className="main-title">
            <h3>Join Twitter today</h3>
          </div>
          <div className="google">
            <div className="g-button">
              <div className="logo">
                <Image
                  src="/G-google.png"
                  alt="Google-Logo"
                  width={15}
                  height={14}
                />
              </div>
              <div className="text">Sign Up with Google</div>
            </div>
          </div>
          <div className="apple">
            <div className="a-button">
              <div className="logo">
                <Image
                  src="/a-apple.png"
                  alt="Apple-Logo"
                  width={15}
                  height={14}
                />
              </div>
              <div className="text">Sign Up with Apple</div>
            </div>
          </div>
          <div className="break-line">
            <div className="wrapper-break">
              <div className="line-div"></div>
              <div className="break-text">or</div>
              <div className="line-div"></div>
            </div>
          </div>
          <div className="create-acc-button">
            <div className="c-button">
              <div className="text">Create account</div>
            </div>
          </div>
          <div className="acknowledgment-wrapper">
            <div className="acknowledgment-text">
              By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>, including{" "}
              <a href="#">Cookie Use.</a>
            </div>
          </div>
          <div className="login-wrapper">
            <div className="login-text">
              Have an account already? <a href="#">Login</a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default signup;
