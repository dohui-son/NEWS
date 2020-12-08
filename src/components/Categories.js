import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
// categories array 안에 name (실제 카테고리값), text (렌더링시 사용할 한글 카테고리) 값이 들어가 있는 객체들을 넣어 주어 한글로 된 카테고리와 실제 카테고리값을 연결
const categories = [
  { name: 'all', text: 'HOME' },
  { name: 'business', text: 'BUSINESS' },
  { name: 'entertainment', text: 'ENTERTAINMENT' },
  { name: 'health', text: 'HEALTH' },
  { name: 'science', text: 'SCIENCE' },
  { name: 'sports', text: 'SPORTS' },
  { name: 'technology', text: 'TECHNOLOGY' }
];
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin : 0 auto;
  @media screen and (max-width:768px){
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  margin-left:1rem;

  &:hover{color: #495057;}
 


&.active {
    font-weight: 600;
    border-bottom:2 px solid #22b8cf;
    color:#22b8cf;
    &:hover{
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1 rem;
  }
`;

const Categories = ()=>{
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name==='all'}
          to={c.name==='all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};


export default Categories;