import "./styles.css";
import Button from "./componenets/Button.jsx";
import Card from "./componenets/Card.jsx";
import Container from "./componenets/Container.jsx";
import Input from "./componenets/Input.jsx";
import { useState } from "react";
import Layout, {
  headerStyle,
  sidebarStyle,
  mainStyle,
  footerStyle,
} from "./componenets/Layout";

export default function App() {
  const [catData, setCatData] = useState([
    {
      title: "Cat 1",
      img: "https://i.pinimg.com/736x/fd/c6/ce/fdc6ce1db4a351a2f1880e0e1ccb7632.jpg",
      desc: "A sad cat",
      size: "large",
      color: "#79b7f4",
      fontColor: "#dd5331",
    },
    {
      title: "Cat 2",
      img: "https://i.pinimg.com/control2/736x/93/5e/68/935e6818885fcf464918de1d8849a787.jpg",
      desc: "A fat and naked cat",
      size: "small",
      color: "#f479ed",
      fontColor: "#012a88",
    },
  ]);
  function RemoveCatData(index) {
    setCatData(catData.filter((_, i) => (index = i))); //ถ้า index ตรงกับ i จะลบ card ออก
  }
  return (
    <>
      <div style={{ backgroundColor: "#9ee6a2", padding: "10px" }}>
        <h2>Component Button</h2>
        <Button text={"Hello"} onClick={() => alert("Hello")} size={"large"} />
        <Button
          text={"Good bye"}
          color={"#84cfd0"}
          onClick={() => alert("Good bye")}
          size={"small"}
        />
      </div>
      <br />
      {/* --------------------------------------------- */}

      <div style={{ backgroundColor: "#a4edf5", padding: "10px" }}>
        <h2>Component Card</h2>
        {catData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            img={item.img}
            desc={item.desc}
            size={item.size}
            color={item.color}
            fontColor={item.fontColor}
            remove={() => RemoveCatData(index)}
          />
        ))}
      </div>
      <br />
      {/* --------------------------------------------- */}
      <div style={{ backgroundColor: "#f5e9a4", padding: "10px" }}>
        <h2>Component Container</h2>
        <Container style={{ border: "7px solid #F39F18" }}>
          <h3>This is my childen. Click to Say Yes</h3>
          <p>Just click the button to say Yes or No!!</p>
          <Button
            text={"Yes"}
            color={"#59e854"}
            onClick={() => alert("Yes!!!")}
          />
          <Button
            text={"No"}
            color={"#e8546f"}
            onClick={() => alert("No but still Yes!!!")}
          />
        </Container>
      </div>
      <br />
      {/* --------------------------------------------- */}

      <div style={{ backgroundColor: "#bd9ee6", padding: "10px" }}>
        <h2>Component Input</h2>
        <Input
          type="Email"
          style={{ border: "3px solid blue"}}
          action={(v) => console.log(v)}
          placeholder= {"Enter Email"} 
        />
        <Input
          type="number"
          style={{ border: "3px dotted red"}}
          action={(v) => console.log(v)}
          placeholder= {"Enter Password"} 

        />
        <Button text={"Summit"} margin={"10px"} />
      </div>
      <br />
      {/* --------------------------------------------- */}

      <div style={{ background: "#eb8d8d", padding: "10px" }}>
        <h2>Component Layout</h2>
        <Layout>
          <div style={mainStyle}>Main</div>
          <div style={headerStyle}>Header</div>
          <div style={footerStyle}>Footer</div>
          <div style={sidebarStyle}>Sidebar</div>
        </Layout>
      </div>
    </>
  );
}
