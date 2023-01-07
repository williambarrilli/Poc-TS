import { Delivery } from "./components/delivery";
import styles from "./styles.module.scss";

// não esta verificando itens dentro da lista
interface LogisticaProps {
  produtos: {
    id: number;
    nameProduct: string;
    quantidade: number;
    entrega: string;
  }[];
}

enum deliverysAccess {
  Florianopolis = "sea",
  PassoFundo = "truck",
  Santos = "sea",
  SãoPaulo = "plane",
}

export const Logistica: React.FC<LogisticaProps> = ({
  produtos,
}: LogisticaProps) => {
  // Logica de entrega
  const citiesDelivery = [];
  produtos?.map((produto) => (citiesDelivery[produto.entrega] = produto));

  return (
    <div className={styles.background}>
      {produtos?.map((produto, index) => {
        const typeOfDelivery =
          deliverysAccess[produto?.entrega?.split(" ").join("")];
        if (typeOfDelivery)
          return (
            <Delivery
              key={index}
              produto={produto}
              typeDelivery={typeOfDelivery}
            />
          );
        else
          return (
            <div className={styles.text}>
              <h4>Sem Entrega disponivel</h4>
            </div>
          );
      })}
    </div>
  );
};
