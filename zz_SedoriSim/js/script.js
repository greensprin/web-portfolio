$(function() {
  $(".calc-val").on("click", function() {
    // 仕入れ値
    const purchasing = Number($(".purchasing").val());
    // 送料
    const purchasing_shipping = Number($(".purchasing-shipping").val());
    // 売値
    const sell_price = Number($(".sell-price").val());
    // 販路
    const sales_ch = $('input:radio[name="sales-channel"]:checked').val()
    // 配送方法
    const ship_method = $('input:radio[name="shipping-method"]:checked').val()
    // 資材
    const materials = Number($(".materials").val());

    // 計算
    let [profit, profit_ratio] = calc_profit(purchasing, purchasing_shipping, sell_price, sales_ch, ship_method, materials);

    // 結果代入
    $(".profit").text(profit);
    $(".profit-ratio").text(profit_ratio);

    // console.log(purchasing, purchasing_shipping, sell_price, sales_ch, ship_method, materials);
  });
})

function calc_profit(purchasing, purchasing_shipping, sell_price, sales_ch, ship_method, materials) {
  var profit = 0;
  var profit_ratio = 0;

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

  // 投資額
  const invest_amount = purchasing + purchasing_shipping + (sell_price * sales_ch_ary[sales_ch]) + ship_method_ary[ship_method] + materials;

  // 利益計算
  profit = sell_price - invest_amount;

  // 利益率計算
  profit_ratio = (profit / invest_amount) * 100;

  // debug
  // console.log(sales_ch_ary[sales_ch], ship_method_ary[ship_method])
  // console.log(invest_amount, profit, profit_ratio);

  return [profit, profit_ratio];
}