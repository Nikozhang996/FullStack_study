function queryToParams(url) {
  return url
    .slice(url.indexOf("?") + 1)
    .split("&")
    .reduce((result, item) => {
      const [key, value] = item.split("=");
      return { ...result, [key]: decodeURIComponent(value) };
    }, {});
}

console.log(
  func(
    "https://www.baidu.com/s?wd=js%E8%8E%B7%E5%8F%96url%E5%8F%82%E6%95%B0&rsv_spt=1&rsv_iqid=0xdf2bd3ac0042b0ae&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ts_1&inputT=5813&rsv_t=981d99plKyhZlzO%2FrunnQEVyxBEUYWIPVh9cCBI%2FcP1h17cRR7bdlbwLnNeevNdClL%2F2&oq=url%2520get%2520params&rsv_pq=aacbd05500257e33&rsv_sug3=28&rsv_sug1=9&rsv_sug7=101&rsv_sug2=0&prefixsug=url%2520%25E5%258F%2582%25E6%2595%25B0&rsp=1&rsv_sug4=5813"
  )
);
