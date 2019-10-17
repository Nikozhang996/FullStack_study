const time = performance.timing;

function find(fn, ctx) {
  fn = fn.bind(ctx)
    
}
