$(function() {
  $(".num-button").on("click", function() {
    var val = $(this).val();
    var cul_val = $("#calc-res").val();
    console.log(val, cul_val);
    if (val === "=") {
      if (cul_val !== undefined) {
        $("#calc-res").val(new Function("return " + String(cul_val))());
      }
    } else if (val === "c") {
      $("#calc-res").val("");
    } else if (val === "←") {
      if (cul_val !== undefined) {
        $("#calc-res").val(cul_val.split("").slice(0, -1).join(""));
      }
    } else {
      $("#calc-res").val(String(cul_val) + String(val));
    }
  })

  $(".calc-val").on("click", function() {
    // 仕入れ値
    const purchasing = Number($(".purchasing").val());
    // 送料
    const purchasing_shipping = Number($(".purchasing-shipping").val());
    // ポイント
    const point_rt = Number($(".point-rt").val()) / 100;
    // 割引
    const discount = Number($(".discount").val());
    // 売値
    const sell_price = Number($(".sell-price").val());
    // 販路
    const sales_ch = $('input:radio[name="sales-channel"]:checked').val()
    // 配送方法
    const ship_method = $('input:radio[name="shipping-method"]:checked').val()
    // 資材
    const materials = Number($(".materials").val());

    // 計算
    let [profit, profit_ratio, roi] = calc_profit(purchasing,
                                                  purchasing_shipping,
                                                  sell_price,
                                                  sales_ch,
                                                  ship_method,
                                                  materials,
                                                  point_rt,
                                                  discount
                                                  );

    // 結果代入
    $(".profit").text(profit + " 円");
    $(".profit-ratio").text(profit_ratio + " %");

    // console.log(purchasing, purchasing_shipping, sell_price, sales_ch, ship_method, materials);
  });
})

function calc_profit(purchasing,
                     purchasing_shipping,
                     sell_price,
                     sales_ch,
                     ship_method,
                     materials,
                     point_rt,
                     discount
) {
  var profit = 0;
  var profit_ratio = 0;
  var roi = {};

  // 販路による手数料
  sales_ch_ary = {
    merkari:0.1,
    rakuma:0.06,
    paypay:0.05
  };

  // 配送方法別送料
  ship_method_ary = {
    teikeigai:170,
    yu_packet:200,
    yu_packet_plus:380,
    yu_pack_60:700,
    yu_pack_80:800,
    yu_pack_100:1000
  };

  var tesu = sales_ch_ary[sales_ch];
  var haiso = ship_method_ary[ship_method];

  // 投資額
  const point = purchasing * point_rt;
  const invest_amount = (purchasing - discount - point) + purchasing_shipping + (sell_price * tesu) + haiso + materials;

  // 利益計算
  profit = sell_price - invest_amount;

  // 利益率計算
  profit_ratio = (profit / invest_amount) * 100;

  // debug
  // console.log(sales_ch_ary[sales_ch], ship_method_ary[ship_method])
  // console.log(invest_amount, profit, profit_ratio);

  $(".investment-amount").text(invest_amount + "円");
  $(".get-point").text(point + "円");

  for (let i = 0; i <= 100; i += 5) {
    var roi_rt = i / 100;
    roi[i] = Math.round((roi_rt + 1) / ((1 - tesu) - (tesu * roi_rt)) * ((purchasing - discount - point) + purchasing_shipping + haiso + materials));
    $(".roi" + String(i/5)).text(String(i) + "%: " + roi[i] + " 円");
    // console.log(String(i) + "%", roi);
  }

  // console.log(roi)

  return [profit, profit_ratio, roi];
}