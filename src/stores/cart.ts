import { defineStore } from "pinia";
import { ref } from "vue";

export interface Product {
  quantity?: number;
  img: string;
  name: string;
  price: number;
}

export const useCartStore = defineStore("cart", () => {
  const items = ref<Product[]>([]);

  const addItemToCart = (product: Product): void => {
    const existiongProduct = items.value.find(
      (item) => item.name === product.name
    );
    if (existiongProduct) {
      existiongProduct.quantity = (existiongProduct.quantity || 1) + 1;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };

  const removeItemFromCart = (productId: Product): void => {
    items.value = items.value.filter((item) => item.name !== productId.name);
  };

  const decreaseQuantity = (productId: Product): void => {
    const product = items.value.find((item) => item.name === productId.name);
    if (product && product.quantity && product.quantity > 1) {
      product.quantity--;
    } else if (product) {
      removeItemFromCart(productId);
    }
  };

  return {
    items,
    addItemToCart,
    removeItemFromCart,
    decreaseQuantity,
  };
});
