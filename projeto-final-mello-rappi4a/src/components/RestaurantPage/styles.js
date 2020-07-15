import styled from "styled-components";

export const RestaurantContainer = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RestaurantDetailPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 40vw;
  margin: 15px 0;
`;

export const RestaurantLogo = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ProductImage = styled.img`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const AddToCartButton = styled.button`
  min-width: 20%;
`;
export const Select = styled.select`
  min-width: 20%;
`;
