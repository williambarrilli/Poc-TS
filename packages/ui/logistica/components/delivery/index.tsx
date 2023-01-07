interface deliveryProps {
  produto: {
    id?: number;
    nameProduct?: string;
    quantidade?: number;
    entrega?: string
  },
  typeDelivery?: string
}

enum deliveryTranslate {
  sea = "Barco",
  truck = "Caminhão",
  plane = "Avião",
}

export const Delivery: React.FC<deliveryProps> = ({ produto, typeDelivery }: deliveryProps) => {
  return (
    <div>
      <h4>Entrega será feita de {deliveryTranslate[typeDelivery]} em {produto.entrega}</h4>
      <h5>
        {produto.quantidade} unidades de {produto.nameProduct}
      </h5>
    </div>
  );
};