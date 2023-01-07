import { Button } from "../../../button";

import styles from "./styles.module.scss";

interface deliveryProps {
  produto: {
    id?: number;
    nameProduct?: string;
    quantidade?: number;
    entrega?: string;
  };
  typeDelivery?: string;
}

enum deliveryTranslate {
  sea = "Navio",
  truck = "Caminhão",
  plane = "Avião",
}

export const Delivery: React.FC<deliveryProps> = ({
  produto,
  typeDelivery,
}: deliveryProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h4>
          Entrega será feita de {deliveryTranslate[typeDelivery]} em{" "}
          {produto.entrega}
        </h4>
        <div className={styles.oneLine}>
          <div className={styles.button}>
            {produto.quantidade} unidades de {produto.nameProduct}
          </div>
          <Button text="Faturar" />
        </div>

        <div className={styles.endLine}></div>
      </div>
    </div>
  );
};
