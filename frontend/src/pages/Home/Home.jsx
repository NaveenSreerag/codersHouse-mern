import React from "react";
import styles from "./Home.module.css";
import { Link,useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {


  const navigate = useNavigate();
  const signInLinkStyle = {
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px',
  }

  function startRegister(){
    navigate('/register');
    console.log("Button Clicked");
  }
  return (
    <div className={styles.codeWrapper}>
      <Card title="Welcome to codershouse!" icon="emogi">
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque
          iste vero tempora rem minus repellendus architecto numquam.
        </p>

        <div>
         <Button onClick={startRegister} text="Get Your Username" />
        </div>
        <div className={styles.signin}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to={"/login"}>Sign In</Link>
        </div>
      </Card>
     
    </div>
  );
};

export default Home;
