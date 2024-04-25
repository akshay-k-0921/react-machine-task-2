import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const FoodMenu = () => {
    const {id} = useParams()
    console.log(id,"id");
    const data = useSelector((state) => state?.list?.items);
    console.log(data, "data");

  const filteredData = data && id
    ? data?.filter((item) => item.menu_category_id === id)
    : data;
  console.log(filteredData, "filteredData");

  return (
    <Container className="wrapper">
      {filteredData && filteredData.length > 0 ? (
      filteredData[0].category_dishes?.map((dish) => (
        <Contents key={dish.dish_id}>
          <LeftCOntainer>
            <FoodName>
              <FoodTypeSquare onClick={() => console.log("dish.dish_type",dish.dish_Type)} className={dish.dish_Type===1?"non-veg":"veg"}>
                <FoodTypeCircle className={dish.dish_Type===1?"non-veg":"veg"}></FoodTypeCircle>
              </FoodTypeSquare>
              <NameText>{dish.dish_name}</NameText>
            </FoodName>
            <PriceContainer>
            <Price>
              {dish.dish_currency} {dish.dish_price}
            </Price>
            <CaloriesText>{dish.dish_calories} Calories</CaloriesText>
            </PriceContainer>
            <Description>{dish.dish_description}</Description>
            <CountContainer>
              <MinusButton>-</MinusButton>
              <Count>0</Count>
              <PlusButton>+</PlusButton>
            </CountContainer>
            {dish.addonCat.dish_addons ? (
              <CustomizeText>Customization avaiable</CustomizeText>
            ) : null}
            
            
          </LeftCOntainer>
          <RightContainer>
            {/* <CaloriesText>{dish.dish_calories} Calories</CaloriesText> */}
            <FoodImageContainer>
              <FoodImage src={dish.dish_image} alt="Food Image" />
            </FoodImageContainer>
          </RightContainer>
        </Contents>
      ))
    ) : (
        <NoDataText>No dishes found</NoDataText>
    )}
    </Container>
  );
};

export default FoodMenu;

const Container = styled.div`
  margin-top: 50px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 40px;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255,.1);
  @media (max-width: 640px){
    align-items: start;
    }
`;
const LeftCOntainer = styled.div`
    width: 80%;
    @media (max-width: 1280px){
    width: 73%;
    }
    @media (max-width: 480px){
    width: 60%
    }
`;
const FoodName = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
const NameText = styled.h5`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
  @media (max-width: 480px){
    font-size: 13px;
    }
`;
const FoodTypeSquare = styled.div`
    display: inline-block;
    border: 2px solid green;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.non-veg{
        border: 1px solid red;
    }
`
const FoodTypeCircle = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    &.non-veg{
        display: inline-block;
    width: 10px;
    height: 10px;
    background: red;
    }
`
const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Price = styled.h6`
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 8px;
`;
const Description = styled.div`
    color: rgba(255, 255, 255,.5);
    font-size: 12px;
    margin-bottom: 8px;
`;
const CountContainer = styled.div`
    display: inline-block;
    background: #51a148;
    padding: 3px 30px;
    border-radius: 15px;
`;
const MinusButton = styled.button`
    margin-right: 30px;
    font-size: 17px;
`;
const Count = styled.span`
    margin-right: 30px;
`;
const PlusButton = styled.button`
    font-size: 17px;
`;
const CustomizeText = styled.p``;
const RightContainer = styled.div`
  width: 18%;
  @media (max-width: 1280px){
    width: 25%;
    }
    @media (max-width: 480px){
    width: 37%
    }
`;
const CaloriesText = styled.p`
    @media (max-width: 480px){
        font-size: 12px;
    }
`;
const FoodImageContainer = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  @media (max-width: 768px){
    width: 160px;
    height: 120px;
    }
    @media (max-width: 640px){
    width: 130px;
    height: 100px;
    }
    @media (max-width: 480px){
    width: 100px;
    height: 100px;
    }
`;
const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const NoDataText = styled.p``