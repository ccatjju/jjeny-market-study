import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://54cbfc0c-9f5d-4ae2-926c-8fdcc6b53937.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보가 오고 있쪙...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <dv id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2022-01-01</div>
        <div id="description">{product.description}</div>
      </dv>
    </div>
  );
}

export default ProductPage;
