import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://54cbfc0c-9f5d-4ae2-926c-8fdcc6b53937.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        {products.map(function (product, index) {
          return (
            <>
              <div id="product-list">
                <div className="product-card">
                  <div>
                    <img className="product-img" src={product.imageUrl}></img>
                  </div>
                  <div calssName="product-contents">
                    <span className="product-name">{product.name}}</span>
                    <br></br>

                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="/images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
