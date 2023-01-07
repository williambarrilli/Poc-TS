import type { NextPage } from "next";
import {Logistica} from '../../packages/ui/logistica'
import productsMock from '../../mocks/productsMock'

const Fabrica: NextPage = () => {
  return <Logistica produtos={productsMock}></Logistica>;
};

export default Fabrica;
