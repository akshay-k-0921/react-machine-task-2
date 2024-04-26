import styled from "styled-components";
import { useSelector } from "react-redux";
import { fetchList } from "../store/data"; // Updated import path
import { NavLink } from "react-router-dom";

const CategoryBar = () => {
  const { items, loading, error } = useSelector((state) => state.list);

  return (
    <Container className="wrapper">
        <Cover>
      <CategoryContainer>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {items &&
          items.map((item) => (
            <div key={item.menu_category_id}>
                <CategoryLink to={`/${item?.menu_category_id}`}>
                {item.menu_category}
                </CategoryLink>
            </div>
          ))}
      </CategoryContainer>
      </Cover>
    </Container>
  );
};

export default CategoryBar;

const Container = styled.div`
  text-align: left;
  overflow-x: hidden;
  padding: 20px 0 0 0;
`;
const Cover = styled.div`
  text-align: left;
  overflow-x: scroll;
`;
const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 30px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 900px;
  /* width: 70%; */
  div{
    /* min-width: 145px; */
  }
`;

const CategoryLink = styled(NavLink)`
    /* width: 100%; */
  font-size: 14px;
  margin-bottom: 20px;
  &.active{
    color: #c43329;
    border-bottom: 2px solid #c43329;
  }
`;
