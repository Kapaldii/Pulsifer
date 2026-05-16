// =============================================
// ARQUIVO JAVASCRIPT PARA MODELOS.JS
// Função para alternar entre diferentes modelos de dispositivos
// =============================================// =====================================================
// PULSIFER · script.js
// Equipe Logic Gate — ADS 1° Semestre
//
// Função única que troca textos, cores e o ícone
// da pulseira conforme o modelo selecionado.
// =====================================================

// ── DADOS DOS MODELOS ────────────────────────────────
// Cada modelo guarda: cor do tema, fundo do visual,
// o emoji, textos e funcionalidades.
// ────────────────────────────────────────────────────
var modelos = {

  one: {
    cor:      '#555555',
    fundo:    '#f2f2f2',
    relogio:  '⌚', // Substituímos o SVG complexo por um Emoji
    tag:      'Para Idosos',
    nome:     'Pulsifer One',
    descricao: 'Segurança e tranquilidade para quem você ama. Monitoramento contínuo com alertas instantâneos para familiares.',
    icone1: '🆘', titulo1: 'Botão SOS',            desc1: 'Acionamento de emergência com um toque',
    icone2: '❤️', titulo2: 'Monitor Cardíaco',     desc2: 'Frequência cardíaca medida em tempo real',
    icone3: '🌡️', titulo3: 'Temperatura Corporal', desc3: 'Detecta febre e variações térmicas'
  },

  plus: {
    cor:      '#c9796a',
    fundo:    '#fdf3f1',
    relogio:  '⌚',
    tag:      'Para Mulheres',
    nome:     'Pulsifer Plus',
    descricao: 'Bem-estar e autocuidado em um dispositivo elegante. Acompanhe sua saúde com precisão e estilo.',
    icone1: '📍', titulo1: 'Rastreamento GPS',     desc1: 'Localização precisa compartilhada em tempo real',
    icone2: '❤️', titulo2: 'Monitor Cardíaco',     desc2: 'Frequência cardíaca medida em tempo real',
    icone3: '🆘', titulo3: 'Botão SOS',            desc3: 'Acionamento de emergência com um toque'
  },

  kids: {
    cor:      '#4a90d9',
    fundo:    '#f0f6fd',
    relogio:  '⌚',
    tag:      'Para Crianças',
    nome:     'Pulsifer Kids',
    descricao: 'Proteção inteligente para os pequenos. Pais tranquilos, crianças livres para explorar o mundo.',
    icone1: '📍', titulo1: 'GPS em Tempo Real',    desc1: 'Localização precisa a qualquer momento',
    icone2: '❤️', titulo2: 'Monitor Cardíaco',     desc2: 'Frequência cardíaca medida em tempo real',
    icone3: '🆘', titulo3: 'Botão SOS',            desc3: 'Alerta imediato para os responsáveis'
  }

};


// ── FUNÇÃO PRINCIPAL ─────────────────────────────────
// trocarModelo('one' | 'plus' | 'kids')
// ────────────────────────────────────────────────────
function trocarModelo(qual) {

  // 1. Pega os dados do modelo escolhido
  var m = modelos[qual];

  // 2. Troca os textos principais
  document.getElementById('modeloTag').textContent       = m.tag;
  document.getElementById('modeloNome').textContent      = m.nome;
  document.getElementById('modeloDescricao').textContent = m.descricao;
  document.getElementById('modeloTag').style.color       = m.cor;

  // 3. Troca a imagem pela versão Emoji Gigante e muda a cor de fundo
  // O estilo inline font-size: 120px garante que o emoji fique com cara de imagem
  document.getElementById('modeloVisual').innerHTML         = '<span style="font-size: 120px;">' + m.relogio + '</span>';
  document.getElementById('modeloVisual').style.background  = m.fundo;

  // 4. Troca as 3 funcionalidades
  document.getElementById('icone1').textContent  = m.icone1;
  document.getElementById('titulo1').textContent = m.titulo1;
  document.getElementById('desc1').textContent   = m.desc1;

  document.getElementById('icone2').textContent  = m.icone2;
  document.getElementById('titulo2').textContent = m.titulo2;
  document.getElementById('desc2').textContent   = m.desc2;

  document.getElementById('icone3').textContent  = m.icone3;
  document.getElementById('titulo3').textContent = m.titulo3;
  document.getElementById('desc3').textContent   = m.desc3;

  // 5. Reseta os 3 botões para o estilo padrão
  document.getElementById('btn-one').className         = '';
  document.getElementById('btn-one').style.background  = '';
  document.getElementById('btn-plus').className        = '';
  document.getElementById('btn-plus').style.background = '';
  document.getElementById('btn-kids').className        = '';
  document.getElementById('btn-kids').style.background = '';

  // 6. Marca só o botão clicado como ativo
  document.getElementById('btn-' + qual).className        = 'ativo';
  document.getElementById('btn-' + qual).style.background = m.cor;
}

// Carrega o modelo padrão (One) ao abrir a página
trocarModelo('one');