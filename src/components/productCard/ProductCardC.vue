<!-- 橫式商品卡 -->
<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex flex-wrap mb-4">
          <v-avatar class="me-3 rounded-0" size="150">
            <v-img :src="product.img" cover class="rounded-0" />
          </v-avatar>
          <div>
            <h5
              class="mb-2"
              style="
                font-size: 16px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.87);
              "
            >
              {{ product.name }}
            </h5>
            <v-chip
              style="background-color: #f5f5f5"
              link
              size="small"
              class="mb-2"
            >
              <span style="color: #0f3460">{{ product.label }}</span>
            </v-chip>
            <div class="d-flex align-center mb-3">
              <v-rating
                :model-value="5"
                :length="5"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
              />
              <h6 class="ms-3" style="font-size: 16px; color: #757575">
                ({{ product.comments }})
              </h6>
            </div>
            <div class="d-flex mb-1" style="font-size: 14px">
              <p
                class="me-2 text-decoration-line-through"
                style="color: #757575"
              >
                $100
              </p>
              <p class="me-2">${{ product.price }}</p>

              <p style="color: #d23f57">{{ product.discount }}%off</p>
            </div>
            <p style="font-size: 14px; color: #757575">
              (4 Pcs mutton in chicken keema gravy)
            </p>
          </div>
        </div>
        <div>
          <v-btn
            append-icon="mdi-plus"
            variant="outlined"
            color="#d23f57"
            @click="addToCart"
          >
            ADD
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { useCartStore } from "@/stores/cart";
import { defineProps } from "vue"; // 引入 defineProps

interface Product {
  img: string;
  name: string;
  label: string;
  comments: number;
  price: number;
  discount: number;
}

const props = defineProps<{ product: Product }>();

const cartStore = useCartStore(); // 創建 product store 實例
const addToCart = () => {
  cartStore.addItemToCart(props.product); // 調用 addProductToCart 方法
};
</script>
<style scoped></style>
