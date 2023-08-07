function sortPhotos(p){
  p.sort((a, b) => +a.slice(0, 4) - +b.slice(0, 4) || +a.slice(a.indexOf('g')+1) - +b.slice(b.indexOf('g')+1))
  const last = p[p.length-1];
  return [...p.slice(-5), last.slice(0, last.indexOf('g')+1) + (+(last.slice(last.indexOf('g')+1))+1)]
};