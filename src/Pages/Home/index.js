import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { toast } from "react-toastify";
import axios from "../../service/axios";

export default function Home() {
  const ok = () => toast.success("Ok");
  const fail = () => toast.error("deu erro");
  const boty = () => toast("boa boa");

  React.useEffect(() => {
    /*
    async function getData() {
      const response = await axios.get();
      console.log(response);
    }
    getData();
    */
  }, []);
  return (
    <Container>
      <h1> Home</h1>
    </Container>
  );
}
