function Jargon(abbr, name) {
  this.abbr = abbr;
  this.name = name;
}

const css = new Jargon('css', 'cascading stylesheet');
const js = new Jargon('js', 'javascript');
const html = new Jargon('html', 'hyper text markup language');

const jargons = [css, js, html];
const jargonObjs = { css, js, html };
console.table(jargonObjs, []);
