<template>
  <div class="h-[575px] bg-[#ededeb]">
    <div class="max-w-[1280px] mx-auto">
      <div class="grid grid-rows-4 grid-cols-5">
        <div class="row-span-1 h-[100px]">
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/benhvien199.9cdc7608.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/cleverads.8fb6aaea.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/clevergroup.fb438922.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/cmetric.409635d4.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/datnam.50728f11.jpeg"
            alt=""
          />
        </div>
        <div class="row-span-1 h-[100px]">
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/dcuni.aa64a999.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/extrim.8133923e.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/grilla.e05e5370.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/jobsgo.8e364798.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/learnova.dbf0bc5e.png"
            alt=""
          />
        </div>
        <div class="row-span-1 h-[100px]">
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/namangroup.04414c5c.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/nexia.c5277525.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/orionmedia.c4bc9d6d.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/pcs.30291b3d.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div class="row-span-1 h-[100px]">
          <img
            class="h-auto w-[176px]"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/seongon.2b7ce267.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/storytelling.d5af08d6.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/vnokrs.c3a56adb.png"
            alt=""
          />
          <img
            class="h-auto w-[176px]"
            src="https://www.123train.vn/assets/weatherplus.f59e2b52.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "relate",
};
</script>
